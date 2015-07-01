
define(function (require, exports, module) {
    var $ = require('$');
    var template = require('template');
    var asyncRequest = require('asyncrequest');
    var request = require('request');
    var View = require('view');

    var page2 = View.extend({

        title: 'page2',

        $elem:$('#pageWrapper'),

        render: function () {
            var self = this;
            asyncRequest.all(this.$net,[{
                params:{code:0,data:{title:'page2',description:'page2 description'}},
                request:request.sample
            }],function(values){
                self.$elem.html(template('page2/page2',{data:values[0]}));
            });
        },

        destroy: function () {

        }
    });
        
    module.exports = page2;
});