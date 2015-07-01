'use strict';

define(function (require, exports, module) {
    var $ = require('$');
    var mp = require('mp');
    //var template = require('template');
    //var asyncRequest = require('asyncrequest');
    //var binder = require('binder');
    var request = require('request');

    var page1 = mp.Class.extend({

        ctor:function(data){
            this.$super(data);
        },

        render: function () {
            //var self = this;

            // asyncRequest.all([{
            //     params:{title:'page1',description:'page1 description'},
            //     request:request.sample
            // }],function(values){
            //     pageManager.html({
            //         switchStyle:{top:'49px',height:'auto'},
            //         isRefresh:self.isRefresh,
            //         container:template('page1/page1',{data: values[0]})
            //     });
            //     //绑定数据
            //     //binder.bind(pageManager.container[0],self);
            // });

            this.$.innerHTML = template('page1/page1',{});
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
        },

        destroy: function () {
        }
    });
        
    module.exports = page1;
});