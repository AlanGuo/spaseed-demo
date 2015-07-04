'use strict';
 
define(function(require, exports,module) {
	var Node = require('Node'),
		template = require('template');

	var Mask = Node.extend({
		ctor:function(data){
			this.$super(data);
			data = data || {};

			this.$parent = data.$parent;

			//默认class
			this.$elem.addClass('mask');

			//遮罩元素
			var elem = this.$elem.length?this.$elem[0]:this.$elem;
			if(this.$parent.children().indexOf(elem)===-1){
				this.$parent.append(this.$elem);
			}
		},
		show:function(html, options){
			this.$elem.show();
		},
		hide:function(){
			this.$elem.hide();
		}
	});

	Mask.create = function(data){
		return new Mask(data);
	}

    module.exports = Mask;
});