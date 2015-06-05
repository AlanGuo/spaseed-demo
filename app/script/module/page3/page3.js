
define(function (require, exports, module) {
    var $ = require('$');
    var pageManager = require('pagemanager');
    var manager = require('../../model/manager');
    var util = require('util');
    var evt = require('event');
    var template = require('apptemplate');
    var asyncRequest = require('asyncrequest');

    var page3 = {

        render: function () {

            asyncRequest.all([{
                params:null,
                request:manager.queryPage3
            }],function(values){
                pageManager.container.html(template('page3/page3',{
                    data: values[0]
                }));
            });
        },

        destroy: function () {

        }
    };
        
    module.exports = page3;
});