'use strict';

define(function (require, exports, module) {
	require('react');
    var $ = require('$'),
    	View = require('View'),
    	Dialog = require('ReactDialog');

    var page3 = View.extend({

        $elem:$('#pageWrapper'),

        title:'page 1',

        render: function () {
        	React.render(
		    	<Dialog text='对话框，碉堡了!' buttons={['确定']}></Dialog>,
		    	this.$elem[0]
		    );
        }
    });
        
    module.exports = page3;
});