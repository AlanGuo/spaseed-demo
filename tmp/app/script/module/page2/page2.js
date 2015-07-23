'use strict';

define(function (require, exports, module) {
    require('react');
    var $ = require('$'),
        View = require('View'),
        Dialog = require('Dialog');

    var Page2 = View.extend({
        title: 'page2',
        $elem: $('#pageWrapper'),
        render: function (){
            React.render(
		    	React.createElement(Dialog, {text: "对话框，碉堡了!", buttons: ['确定']}),
		    	this.$elem[0]
		    );
        }
    });
        
    module.exports = Page2;
});