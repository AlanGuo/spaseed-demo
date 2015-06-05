'use strict';

define(function (require, exports, module) {
    var $ = require('$');
    var pageManager = require('pagemanager');
    var manager = require('../../model/manager');
    var util = require('util');
    var evt = require('event');
    var template = require('apptemplate');
    var asyncRequest = require('asyncrequest');

    var page1 = {

        title: 'page1',

        render: function () {

            asyncRequest.all([{
                params:null,
                request:manager.queryPage1
            }],function(values){
                pageManager.container.html(template('page1/page1',{
                    data: values[0]
                }));
            });
        },

        events:{
            'click':{
                'tt_click':function(){
                    alert('tt_click');
                }
            }
        },

        destroy: function () {
        }
    };
        
    module.exports = page1;
});