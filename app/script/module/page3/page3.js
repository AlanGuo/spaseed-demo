
define(function (require, exports, module) {
    var $ = require('$');
    var template = require('template');
    var asyncRequest = require('asyncrequest');
    var request = require('request');
    var View = require('View');

    var page3 = View.extend({

        $elem:$('#pageWrapper'),

        title:'page 3',

        render: function (cb) {
            var self = this;
            asyncRequest.all(this.$net,[{
                params:{code:0,data:{title:'page3',description:'page3 description'}},
                request:request.sample
            }],function(values){
                self.$elem.html(template('page3/page3',{data:values[0]}));
                cb && cb();
            });
        }
    });
        
    module.exports = page3;
});