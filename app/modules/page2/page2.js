
define(function (require, exports, module) {
    var $ = require('zepto');
    var pageManager = require('pagemanager');
    var manager = require('../../models/manager');
    var util = require('util');
    var evt = require('event');
    var template = require('apptemplate');

    var page2 = {

        title: 'page2',

        pageClass: '',

        render: function () {

            manager.queryPage2({}, function(data) {
                pageManager.container.html(template('page2/page2')({
                    data: data
                }));
            });

            this.bindEvent();
        },

        bindEvent: function () {
            
            evt.addCommonEvent('click', { 
                
            });
        },

        destroy: function () {

        }
    };
        
    module.exports = page2;
});