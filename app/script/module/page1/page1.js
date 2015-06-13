'use strict';

define(function (require, exports, module) {
    var $ = require('$');
    var pageManager = require('pagemanager');
    var manager = require('../../model/manager');
    var util = require('util');
    var evt = require('event');
    var template = require('apptemplate');
    var asyncRequest = require('asyncrequest');
    var binder = require('binder');

    var page1 = {

        title: 'page1',
        detail:0,

        render: function () {
            var self = this;

            asyncRequest.all([{
                params:null,
                request:manager.queryPage1
            }],function(values){
                pageManager.container.html(template('page1/page1',{
                    data: values[0]
                }));

                //绑定数据
                binder.bind(pageManager.container[0],self);
            });
        },

        events:{
            'click':{
                'tt_click':function(){
                    //alert('tt_click');
                    this.detail++;
                }
            }
        },

        destroy: function () {
        }
    };
        
    module.exports = page1;
});