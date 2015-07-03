'use strict';

/**
 * @dialog 模块
 * dialog.show(template,{
		header:true,
		buttons:[{
			name:'确定',
			dataEvent:'closeDialog'
		}]
 * });
 * 一个带通用头部和底部确定按钮的对话框
 * dialog.show(template)
 * 一个完全自定义的对话框
 * dialog.alert('文本');
 * 一个标准的提示对话框
 *
 * 目前只支持两个按钮
 */
 
define(function(require, exports,module) {
	var Node = require('Node'),
		mask = require('mask');

	var Dialog = Node.extend({
		ctor:function(data){
			this.$super(data);
			data = data || {};

			this.$parent = data.$parent;
			this.$mask = data.$mask;

			//模板重写
			if(data.template){
				this.$elem.html(data.template);
			}
		},
		show:function(template, options){
			var elem = this.$elem.length?this.$elem[0]:this.$elem;
			if(this.$parent.children().indexOf(elem)===-1){
				this.$parent.append(this.$elem);
			}
			this.$elem.show();
			this.$mask.show();
		},
		hide:function(){
			this.$elem.hide();
			this.$mask.hide();
		}
	});

    module.exports = Dialog;
});