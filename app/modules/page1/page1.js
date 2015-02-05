
define(function (require, exports, module) {
    var $ = require('zepto');
    var pageManager = require('pagemanager');
    var manager = require('../../models/manager');
    var util = require('util');
    var evt = require('event');
    var template = require('apptemplate');

    var page1 = {

        title: 'page1',

        pageClass: '',

        render: function () {

            manager.queryPage1({}, function(data) {
            	pageManager.container.html(template('page1/page1',{
                    data: data
                }));
            });

            this.bindEvent();
        },

        bindEvent: function () {

            evt.addCommonEvent('click', { 
                'tt_click': function () {
                    alert($(this).text())
                }
            });
        },

        destroy: function () {

        }
    };
        
    module.exports = page1;
});