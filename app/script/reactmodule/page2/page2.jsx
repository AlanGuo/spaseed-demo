'use strict';

define(function (require, exports, module) {
    var $ = require('$');
    var template = require('template');
    require('react');
    var Dialog = require('Dialog');
    var asyncRequest = require('asyncrequest');
    var request = require('request');
    var View = require('View');

    var page2 = View.extend({

        title: 'page2',

        $elem:$('#pageWrapper'),

        render: function () {
            var self = this;
            asyncRequest.all(this.$net,[{
                params:{code:0,data:{title:'page2',description:'page2 description'}},
                request:request.sample
            }],function(values){
                React.render(
			    	<Dialog text='对话框，碉堡了!' buttons={['确定']}></Dialog>,
			    	self.$elem[0]
			    );
            });
        },

        events:{
            'click':{
                'tt_click':function(){
                }
            }
        }
    });
        
    module.exports = page2;
});