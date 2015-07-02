'use strict';

define(function(require, exports, module){
	var Node = require('Node'),
		Event = require('Event'),
		$ = require('$'),
		Net = require('Net'),
		Router = require('Router');
		
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
		config:{root:'/index'},

		ctor:function(data){
			this.config = $.extend(this.config, data);
			this.$super(this.config);
			//路由
			this.$router = Router.create(this);
			//网络
			this.$net = Net.create(this);
			//事件
			this.$event = Event.create(this);
			this.$on = this.$event.on;
			this.$off = this.$event.off;
			this.$emit = this.$event.emit;

			//会控制app跳转
			this.$router.init();

			//router事件
			var self = this;
			this.$event.on('click','router',function(target){
				var url = target.getAttribute('data-href');
				if(url){
					self.$router.loadUrl(target.getAttribute('data-href'));
				}
			});
			this.$event.on('click','back',function(){
				self.$router.backView();
			});
			this.__bodyhandler = {};
			//绑定click事件
			this.__bodyhandler.click = this.$event.bindBodyEvent(this, 'click');
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

		startup:function(){
			this.$router.startup();
		}
	});

	App.create = function(data){
		return new App(data);
	}

	module.exports = App;
})
