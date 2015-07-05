'use strict';

 
define(function(require, exports,module) {
	var Node = require('Node')

	var ErrorTips = Node.extend({
		ctor:function(data){
			this.$super(data);
			data = data || {};

			this.$parent = data.$parent;
			this.duration = data.duration;

			//默认class
			this.$elem.addClass('layout-err-tips');
			this.$elem.hide();

			//对话框元素
			var elem = this.$elem.length?this.$elem[0]:this.$elem;
			if(this.$parent.children().indexOf(elem)===-1){
				this.$parent.append(this.$elem);
			}
		},
		show:function(content, options){
			var self = this;
			options = options || {};
			setTimeout(function(){
				self.$elem.addClass('fade-out');
			},this.duration || 3000);
			this.$elem.text(content);
			this.$elem.show();
		},
		hide:function(){
			this.$elem.hide();
		}
	});

	ErrorTips.create = function(data){
		return new ErrorTips(data);
	};

    module.exports = ErrorTips;
});