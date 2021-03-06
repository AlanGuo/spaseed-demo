'use strict';

var $ = require('$');
var template = require('template');
var asyncRequest = require('asyncrequest');
var request = require('request');
var View = require('View');

var page2 = View.extend({

    $elem:$('#pageWrapper'),

    title:'page 2',

    render: function (cb) {
        var self = this;
        asyncRequest.all(this.$net,[{
            params:{code:0,data:{title:'page2',description:'page2 description'}},
            request:request.sample
        }],function(values){
            self.$elem.html(template('page2/page2',{data:values[0]}));
            cb && cb();
        });
    }
});
    
module.exports = page2;