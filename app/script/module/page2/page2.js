
define(function (require, exports, module) {
    var $ = require('$');
    var pageManager = require('pagemanager');
    var template = require('template');
    var asyncRequest = require('asyncrequest');
    var request = require('request');

    var page2 = {

        title: 'page2',

        render: function () {
            var self = this;
            asyncRequest.all([{
                params:{title:'page2',description:'page2 description'},
                request:request.sample
            }],function(values){
                pageManager.html({
                    switchStyle:{top:'49px',height:'auto'},
                    isRefresh:self.isRefresh,
                    container:template('page2/page2',{data: values[0]})
                });
            });
        },

        destroy: function () {

        }
    };
        
    module.exports = page2;
});