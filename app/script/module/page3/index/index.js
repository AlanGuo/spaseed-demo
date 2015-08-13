'use strict';

var $ = require('$');
var template = require('template');
var asyncRequest = require('asyncrequest');
var request = require('request');
var View = require('../page3');

var page3Index = View.extend({

    title: 'page3 index',

    render: function () {
        var self = this;
        this.$super(function(){
            self.$elem = $('#subcontainer');
            self.$elem.html(template('page3/index/index'));
        });
        
    }
});
    
module.exports = page3Index;