
define(function (require, exports, module) {
    var $ = require('$');
    var pageManager = require('pagemanager');
    var request = require('request');
    var template = require('template');
    var asyncRequest = require('asyncrequest');

    var page3 = {

        render: function () {
            var self = this;
            asyncRequest.all([{
                params:{title:'page3',description:'page3 description'},
                request:request.sample
            }],function(values){
                pageManager.html({
                    switchStyle:{top:'49px',height:'auto'},
                    isRefresh:self.isRefresh,
                    container:template('page3/page3',{data: values[0]})
                });
            });
        },

        destroy: function () {

        }
    };
        
    module.exports = page3;
});