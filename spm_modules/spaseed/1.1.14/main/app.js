'use strict';

define(function(require, exports, module){
	var Node = require('node');
	//route parse
	function parse(url,option){

		var atag,pathname,search,params = {},view,arr,pair;

		atag = document.createElement('a');
		atag.href = url;

		pathname = atag.pathname;
		search = atag.search.substr(1);

		if(pathname == '/'){
			pathname = this.config.root || '/index';
		}

		view = option.viewfolder + pathname;

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
			this.on('click','router',function(target,dataset){
				this.loadUrl(target.getAttribute('router'),dataset)
			});
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
				//viewfolder
				option.viewfolder = this.config.viewfolder;
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
					var map = {
						left:'translate3d(100%, 0, 0)',
						right:'translate3d(-20%, 0, 0)'
					};
					if(View){ 
						view = new View({
							style:{
								WebkitTransition:'-webkit-transform .4s',
								WebkitTransform:map[option.effect],
								position:'absolute',
								top:0,
								right:0,
								bottom:0,
								left:0
							}
						});

						view._ = obj.view;

						view.params = obj.params;
						this.loadView(view);
					}

					self.history.push([url,option,view.$.innerHTML]);
					if(self.history.length > 10){
						self.history = self.history.slice(5);
					}

					self.historyIndex++

					if(!option.browser){
						history.pushState({url:url,option:option,historyIndex:self.historyIndex},view.title,url);
					}
					
				});
			}
		},
		addChild:function(view){
			this.$super(view);
			this.view = view;
		},
		loadView:function(view){
			var effect = view.params.effect;
			if(this.view){
				(function(){
					var last = this.view;
					last.slideout(effect,function(){
						last.destroy()
						this.removeChild(last);
					}.bind(this))
				}.bind(this))();
			}
			
			this.addChild(view);

			this.view.slidein(effect,function(){});
			this.view.render();
			document.title = this.view.title;
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
			this.loadUrl(window.location.href)
		}
	})

	App.create = function(data){
		return new App(data);
	}

	module.exports = App;
})
