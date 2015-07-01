'use strict';

define(function(require, exports, module){
	var Node = require('node');
	
	var View = Node.extend({
		/*id*/
		_:'',
		/*标题*/
		title:'',
		
		/*内部元素*/
		elements:{},

		ctor:function(data){
			this.$super(data);
			//绑定events
			if(this.events){
				//事件初始化
				if(this.events){
					this.__bodyhandler = this.__bodyhandler || {};
					for(var p in this.events){
						for(var q in this.events[p]){
							this.$event.on(p,q,this.events[p][q]);
						}
						//绑定事件
						if(!this.__bodyhandler[p]){
							//绑定过的事件不再绑定
							if(!this.__bodyhandler[p]){
								this.__bodyhandler[p] = this.$event.bindBodyEvent(this, p);
							}
						}
					}
				}
			}
		},
		/*重载*/
		render:function(){
		},
		/*重载*/
		reload:function(){
		},
		/*重载*/
		destroy:function(){
			this.off();
			//移除上一个页面的bodyEvents
			if(this.events){
				for(var p in this.events){
					this.$event.off(p);
				}
			}
		}
	})

	module.exports = View;
})
