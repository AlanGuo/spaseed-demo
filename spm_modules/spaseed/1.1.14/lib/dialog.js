'use strict';

/**
 * @dialog 模块
 * dialog.show(content,{
		buttons:[{
			text:'确定',
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
		Mask = require('Mask'),
		template = require('template');

	var Dialog = Node.extend({
		ctor:function(data){
			this.$super(data);
			data = data || {};

			this.$parent = data.$parent;
			this.$mask = data.$mask || Mask.create(data);

			//默认class
			this.$elem.addClass('dialog');
			this.$elem.html(template('dialog/dialog'));
			this.$elem.hide();

			//对话框元素
			var elem = this.$elem.length?this.$elem[0]:this.$elem;
			if(this.$parent.children().indexOf(elem)===-1){
				this.$parent.append(this.$elem);
			}
		},
		show:function(content, options){
			options = options || {};

			this.$elem[0].querySelector('.cont-title').innerText = options.title || '';

			var prop = options.encode === false ?'innerHtml':'innerText';
			this.$elem[0].querySelector('.text-content')[prop] = content;

			if(options.buttons){
				this.$elem.querySelector('.buttonpannel').innerHtml = template('dialog/buttonpannel',options);
			}
			else{
				this.$elem.querySelector('.buttonpannel').style.display = 'none';
			}

			//有动画
			this.$elem.show();
			this.$mask.show();

			if(options.animate){
				this.$elem.show();
				this.$elem.height();
				this.$elem.addClass(options.animate);
			}
		},
		hide:function(options){
			var self = this;
			if(options.animate){

				this.$elem.addClass(options.animate);
				setTimeout(function(){
					self.$elem.hide();
					self.$mask.hide();
				},options.animateduration || 400);
			}
		}
	});

	Dialog.create = function(data){
		return new Dialog(data);
	};

    module.exports = Dialog;
});