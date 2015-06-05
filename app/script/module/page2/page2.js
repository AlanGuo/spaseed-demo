
define(function (require, exports, module) {
    var $ = require('$');
    var pageManager = require('pagemanager');
    var manager = require('../../model/manager');
    var util = require('util');
    var evt = require('event');
    var template = require('apptemplate');
    var asyncRequest = require('asyncrequest');

    var page2 = {

        title: 'page2',

        render: function () {

            asyncRequest.all([{
                params:null,
                request:manager.queryPage2
            }],function(values){
                pageManager.container.html(template('page2/page2',{
                    data: values[0]
                }));
            });
        },

        destroy: function () {

        }
    };
        
    module.exports = page2;
});