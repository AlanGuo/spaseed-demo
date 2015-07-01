'use strict';

define(function(require, exports, module){
	var Node = require('node');
	//route parse
	function parse(url,option){

		var atag,pathname,search,params = {},view,arr,pair,filename;

		atag = document.createElement('a');
		atag.href = url;

		pathname = atag.pathname;
		search = atag.search.substr(1);

		if(pathname == '/'){
			pathname = this.config.root || '/index';
		}

		//文件名和最后一个文件夹相同
		filename = pathname.split('/').slice(-1);
		view = this.config.viewfolder + pathname + '/' + filename;

		for(var p in option){
			params[p] = option[p];
		}
		arr = search.split('&')
		arr.forEach(function(item){
			pair = item.split('=')
			if(pair[0]){
				params[pair[0]] = pair[1]
			}
		});

		return {
			pathname:pathname,
			view:view,
			params:params,
			template:pathname.substr(1)
		};
	}

	var App = Node.extend({
		view:null,
		cache:{},
		history:[],
		historyIndex:0,
		config:{root:'/index'},

		ctor:function(data){
			this.$super(data);
			window.addEventListener('popstate',function(e){
				if(e.state){
					if(e.state.url){
						if(e.state.historyIndex < this.historyIndex){
							this.backView()
						}
						else{
							e.state.option.browser = true;
							this.loadUrl(e.state.url,e.state.option);
						}
						
					}
				}
			}.bind(this));

			//router事件
			var self = this;
			this.$event.on('click','router',function(target){
				self.loadUrl(target.getAttribute('data-href'));
			});
			this.$event.on('click','back',function(){
				self.backView();
			});
			this.__bodyhandler = {};
			//绑定click事件
			this.__bodyhandler.click = this.$event.bindBodyEvent(this, 'click');
		},

		loadUrl:function(url,option,cacheHtml,effect){
			//数据校验
			if(!url){
				this.loadUrl(this.config.root,option,cacheHtml,effect);
				return;
			}
			//配置
			if(!option){
				option = {};
			}

			if(cacheHtml){
				option.cacheHtml = cacheHtml;
			}

			if(effect){
				option.effect = effect;
			}

			var obj = parse.call(this,url,option),view;

			//当前view修改参数，不重新渲染，执行view的reload方法
			//_ 记录了当前view的id
			if(this.view && this.view._ === obj.view){
				view = this.view;
				view.params = obj.params;
				view.reload();
	
			}
			//否则重新构建view
			else{
				var self = this;
				require.async(obj.view,function(View){
					if(View){ 
						view = new View();

						view._ = obj.view;

						view.params = obj.params;
						self.loadView(view);
					}

					self.history.push([url,option,view.$elem.html()]);
					if(self.history.length > 10){
						self.history = self.history.slice(5);
					}

					self.historyIndex++;

					if(!option.browser){
						history.pushState({url:url,option:option,historyIndex:self.historyIndex},view.title,url);
					}
					
				});
			}
		},

		addChild:function(view){
			this.$super(view);
		},

		loadView:function(view){
			if(this.isNew){
				this.addChild(view);
			}
			this.view = view;
			this.view.render();
			//设置标题
			document.title = this.view.title || this.config.defaultTitle;
		},

		backView:function(){
			this.history.pop();

			var record = this.history.pop() || ['','',''];
			record.push('right');

			this.loadUrl.apply(this,record);
		},

		startup:function(option){
			for(var p in option){
				this.config[p] = option[p];
			}
			this.loadUrl(window.location.href);
		}
	});

	App.create = function(data){
		return new App(data);
	}

	module.exports = App;
})
