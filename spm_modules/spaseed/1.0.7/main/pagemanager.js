
define(function(require, exports, module) {
	var $ = require('../lib/zepto');
	var router = require('./router');
	var util = require('../lib/util');
	var spaseedConfig = require('../config');

	/** 
	 * 页面管理
	 * @class pageManager
	 * @static
	 */
	var pageManager = {

		/**
		 * 初始化
		 * @method init
		 */
		init: function () {
			/**
			 * 页面包裹容器
			 * @property pageWrapper
			 * @type Object
			 */
			this.pageWrapper = $(spaseedConfig.pageWrapper);

			/**
			 * 页面主容器，这里应该移出框架逻辑
			 * @property container
			 * @type Object
			 */
			this.container = $(spaseedConfig.container);
		},	


		/**
		 * 加载首页
		 */
		loadRoot: function () {
			this.loadView(spaseedConfig.root);
		},

		/**
		 * 统一加载视图方法
		 */
		loadCommon: function () {
			var _self = this,
				arr = [].slice.call(arguments);

			//解析路由匹配
			this.parseMatch(arr, function (controller, action, params) {
				//处理路由, 加载视图
				_self.loadView(controller, action, params);
			})
		},

		/**
		 * 解析路由匹配
		 * @method parseMatch
		 * @param {Array}    arr 路由匹配到的参数
		 * @param {Function} cb  回调函数
		 */
		parseMatch: function (arr, cb) {
			var controller = null,
				action = null,
				params = [];

			//获取controller
			controller = arr[0];

			//获取action与params
			if (arr.length > 1) {
				if (typeof(arr[1]) === 'object') {
					params.push(arr[1]);
				} else {
					action = arr[1];
					params = arr.slice(2);
				}
			}

			cb(controller, action, params);

		},
		placeholder:function(container){
			container = container || this.container;

			container.find('img[raw]').each(function(){
                var img = $(this);
                var raw = img.attr('raw');
                var tmp = new Image();
                var off = false;
                $(tmp).on('load',function(){
                    if(!off){
                        img.attr('src',raw);
                        tmp = undefined;
                    }
                }).attr('src',raw)
                if(tmp.complete){
                    off = true;
                    img.attr('src',raw);
                    tmp = undefined;
                }
            })
			
		},
		redirect:function(controller, action, params, replacement){
			var pathname = arguments[0];
			if(arguments.length > 1){
				pathname = [controller,action,params.join('/')].join('/');
			}
			this.loadUrl(pathname,replacement);
		},
		reload:function(){
			var url = router.getFragment() || '/';
			this.loadUrl(url);
		},
		back:function(){
			this._destroy();
			router.back(true)
		},
		loadUrl:function(url,replacement){
			var destroy = this._destroy();
			replacement = replacement==null? destroy:replacement; //销毁当前页面
			router.navigate(url,false,replacement);
		},
		/**
		 * 统一路由处理函数
		 * @method loadView
		 * @param {String} controller 
		 * @param {String} action 
		 * @param {Array} params 
		 */
		loadView: function (controller, action, params) {
			var _self = this;

			//渲染前执行业务逻辑
			if (spaseedConfig.beforeRender) {
				if (spaseedConfig.beforeRender(controller, action, params) === false) {
					return
				}
			};

			params = params || [];

			/*
			//渲染公共模版
			this.renderLayout(controller, action, params);
			*/

			//存储主要jQuery dom对象

			/**
			 * 右侧内容容器
			 * @property appArea
			 * @type Object
			 */
			this.appArea = $(spaseedConfig.appArea);

			/**
			 * 切换页面需要更改class的容器
			 * @property classWrapper
			 * @type Object
			 */
			this.classWrapper = $(spaseedConfig.classWrapper);

			//模块基础路径
			var basePath = spaseedConfig.basePath;

			//模块id按照如下规则组成
			var controllerId = basePath + controller + '/' + controller,
				actionId = basePath + controller + '/' + action + '/' + action;

			var moduleArr = []; 

			//检查是否存在controller模块
			moduleArr.push(controllerId);

			//检查是否存在action模块
			if (action) {
				moduleArr.push(actionId);
			} else {
				// 未指明action，默认尝试查询index
				/*
				var indexUri = basePath + controller + '/index/index';
				moduleArr.push(indexUri);
				action = 'index';
				*/
			}

			//需加载的css资源
			var cssReqUrl = _self.addCssReq(controller, action);

			//加载css
			cssReqUrl.length && require.async(cssReqUrl);	

			//获取页面模块对外接口
			require.async(moduleArr, function(cObj, aObj) {
				if(!cObj && !aObj){
					_self.render404();
					return;
				}
				//controller未定义, 此时cObj属于一个action 
				if (!controllerId) {
					aObj = cObj;
				}

				//执行controller, 判断同contoller下的action切换, contoller不需要再重复执行
				if (controllerId && (!_self.fragment || _self.fragment.indexOf('/' + controller) < 0 || !action)) {
					_self.renderView(cObj, params);
				} 
				_self.fragment = (router.fragment === '/') ? '/' + controller : router.fragment;
				_self.fragment = _self.fragment.replace(/\/?\?.*/,'');

				//执行action
				if (action) {
					_self.renderView(aObj, params);
					_self.currentViewObj = aObj;
					controllerId && (_self.currentCtrlObj = cObj);
				} else {
					_self.currentViewObj = cObj;
				}


		  		//设置页面标题
		  		_self.setTitle(cObj, aObj); 
				
			},function(){
				alert();
			});

		},


		/**
		 * 通过配置组装css请求
		 * (单页面模式会有先出dom后出样式的情况，不建议使用这种动态加载方式)
		 */
		addCssReq: function (controller, action) {
			var cssConfig = spaseedConfig.css,
				controllerCssReq = cssConfig[controller],
				actionCssReq = cssConfig[controller + '_' + action],
				reqUrl = [],
				concatReqUrl = function (cssArr) {
                    for (var i = 0; i < cssArr.length; i++) {
                       //csspath可通过seajs的map参数配置映射
					   cssArr[i] && (reqUrl = reqUrl.concat('csspath/' + cssArr[i]));
                    }
				}; 

			controllerCssReq && concatReqUrl(controllerCssReq['cssFile']);	
			actionCssReq && concatReqUrl(actionCssReq['cssFile']);
			return reqUrl;
		},

		/**
		 * @obsolete
		 * 渲染公共模版
		 * 框架不负责任何显示
		 */
		 /*
		renderLayout: function (controller, action, params) {
			var _self = this,
				layoutConfig = spaseedConfig.layout,
				layout = 'default',
				_render = function (layoutName) {
					if (_self.layout != layoutName) {
						require.async(layoutConfig[layoutName]['module'], function (_layout) {
							_layout.render();
						})
						_self.layout = layoutName;
					} 
				};

			loop: for (var key in layoutConfig) {
				var controllerArr = layoutConfig[key].controller || [];
				for (var i = 0, c; c = controllerArr[i]; i++) {
					if (controller === c) {
						layout = key;
						break loop;
					}
				}
			}
			_render(layout);
		},
		*/
		/**
		 * 渲染视图
		 */
		renderView: function (obj, params) {
		
            //debugger
			if (obj && obj.render) {
				obj.render.apply(obj, params);
			} else {
				this.render404();
			}

			/*是不是可以在这里加入*/ 
			//渲染后执行业务逻辑
			if (spaseedConfig.afterRender) {
				spaseedConfig.afterRender();
			}
		},

		/**
		 * 渲染404
		 * @method render404
		 */
		render404: function () {
			var notFound = spaseedConfig.html404;
			var container = this.appArea.length ?  this.appArea : this.container;
			container.html(notFound);
		},
		renderError: function (msg) {
			var htmlError = spaseedConfig.htmlError;
			var container = this.appArea.length ?  this.appArea : this.container;
			container.html(htmlError.replace('{{msg}}',msg));
		},
		isEmpty:function(){
			return this.container.html().length < 10;
		},

		/**
		 * 设置页面标题
		 */
		setTitle: function (cObj, aObj) {
			if (aObj && aObj.title) {
				document.title = aObj.title;
			} else if (cObj && cObj.title) {
				document.title = cObj.title;
			} else {
				var defaultTitle = spaseedConfig.defaultTitle;
				if (document.title != defaultTitle) {
					document.title = defaultTitle;
				}
			}
		},

		/**
		 * 框架的渲染方法
		 * @param {Object} option 选项
		 * @param {Element} option.container 容器
		 * @param {Element} option.scroll 滚动距离
		 */
		html:function(option){
			
            if(option.container  !== undefined ){
            	this.container.html(option.container);
            }

            //滚动逻辑
            if(option.scroll !== undefined){

				setTimeout(function(){
					var defaultClass = spaseedConfig.defaultClass,
						classWrapper = pageManager.classWrapper,
						className = (defaultClass || '') +' ' +(option.className||'');

					classWrapper.attr('class', option.exclusiveClassName || className);
				},0);

            	this.container.scrollTop(option.scroll || 0);
            }
		},
		/**
		 * 改变导航选中态
		 */
		changeNavStatus: function (controller, action) {
			var _self = this,
				fragment = this.fragment,
				root = spaseedConfig.root,
				navContainer = spaseedConfig.navContainer,
				navActiveClass = spaseedConfig.navActiveClass;
				
			var changeNav = function (navCollection, links) {
				navCollection.find('.' + navActiveClass).removeClass(navActiveClass);
				for (var i = 0, item; item = links[i]; i++) {
			        var href = util.getHref(item);
			        
			        if ( (href === '/' && controller === root) || (href !== '/' && fragment.indexOf(href) == 0) ) {
			          var itemParent = $(item).parent();
			          var onActiveNav = navCollection.find('.' + navActiveClass);
			          if (onActiveNav.length) {
			          	(fragment === href) && itemParent.addClass(navActiveClass);
			          } else {
			          	itemParent.addClass(navActiveClass);
			          }
			        }
			    }
			};

			var navCollection;
			for (var i=0, navcon; navcon = navContainer[i]; i++) {
				navcon = $(navcon);
				if (navCollection) {
					navCollection = navCollection.add(navcon);
				} else {
					navCollection = navcon;
				}
			}
			changeNav(navCollection, navCollection.find('a'));
		},

		/**
		 * 页面切换时全局销毁
		 */
		globalDestroy: function () {

		},
		/**
		 * 页面销毁方法的调用
		 */
		_destroy:function(){
			var replacement = false;
			if (this.currentViewObj) {
				replacement = this.currentViewObj.replacement;
				//全局销毁
				this.globalDestroy();

				//销毁前一个
				var destroy = this.currentViewObj.destroy;
                try {
				    destroy && destroy.call(this.currentViewObj);
				    if (this.currentCtrlObj) {
				    	var ctrlDestroy = this.currentCtrlObj.destroy;
				    	ctrlDestroy && ctrlDestroy.call(this.currentCtrlObj);
				    }
                } catch(e) {
                    window.console && console.error && console.error('View destroy failed ', e);
                }
                this.currentCtrlObj = null;
				this.currentViewObj = null;
			}
			return replacement;
		},

		/**
		 * 重置fragment标记(用于强制刷新controller)
		 * @method resetFragment
		 */
		resetFragment: function () {
			this.fragment = '';
		}

	};
	
	module.exports = pageManager;
});
