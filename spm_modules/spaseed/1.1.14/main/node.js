'use strict';


define(function(require, exports, module){

	var mp = require('mp'),
		Event = require('event'),
		$ = require('$'),
		Net = require('net');

	var Node = mp.Class.extend({

		$elem:null,
		$event:null,

		nodeName:'div',

		ctor:function(data){
			if(!data){
				data = {};
			}

			this.nodeName = data.nodeName || 'div';
			this.$elem = data.$elem || this.$elem;
			if(!this.$elem){
				this.isNew = true;
				this.$elem = $(document.createElement(this.nodeName));
			}

			//其他属性
			this.attribute = data.attribute || {};

			//网络
			this.$net = Net.create(this);
			
			//事件
			this.$event = Event.create(this);
			this.$on = this.$event.on;
			this.$off = this.$event.off;
			this.$emit = this.$event.emit;

			//属性
			for(var p in this.attribute){
				this.$elem[p] = this.attribute[p];
			}
		},

		addChild:function(child){
			this.$elem.append(child.$elem);
			child.parent = this;
		},

		removeChild:function(child){
			child.parent = null;
			child.$elem.remove();
		}
	})

	module.exports = Node;
})
