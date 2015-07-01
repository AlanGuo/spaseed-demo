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
		}
	})

	module.exports = View;
})
