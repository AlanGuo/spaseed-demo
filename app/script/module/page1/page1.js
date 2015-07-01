'use strict';

define(function (require, exports, module) {
    var $ = require('$');
    var View = require('view');
    var Net = require('net');
    var template = require('template');
    var asyncRequest = require('asyncrequest');
    var binder = require('binder');
    var request = require('request');

    var Page1 = View.extend({

        $elem:$('#pageWrapper'),

        ctor:function(data){
            this.$super(data);
        },

        render: function () {
            var self = this;
            asyncRequest.all([{
                params:{title:'page1',description:'page1 description'},
                request:request.sample,
                net:this.$net
            }],function(values){
                self.$elem.html(template('page1/page1',{data:values[0]}));
                //绑定数据
                binder.bind(self.$elem[0], self);
            });
        },

        title: 'page1',
        detail:0,

        events:{
            'click':{
                'tt_click':function(){
                    //alert('tt_click');
                    this.detail++;
                }
            }
        }
    });
        
    module.exports = Page1;
});