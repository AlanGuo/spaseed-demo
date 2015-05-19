
define(function (require, exports, module) {
    var $ = require('$');
    var pageManager = require('pagemanager');
    var manager = require('../../models/manager');
    var util = require('util');
    var evt = require('event');
    var template = require('apptemplate');

    var page3 = {

        render: function () {

            manager.queryPage3({}, function(data) {
                pageManager.container.html(template('page3/page3')({
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
        
    module.exports = page3;
});