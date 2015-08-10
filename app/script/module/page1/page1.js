'use strict';


define(function (require, exports, module) {
    var $ = require('$'),
    View = require('View'),
    Dialog = require('Dialog'),
    ErrorTips = require('ErrorTips'),
    Loading = require('Loading'),
    template = require('template'),
    asyncRequest = require('asyncrequest'),
    binder = require('binder'),
    request = require('request');

    var Page1 = View.extend({

        $elem:$('#pageWrapper'),

        render: function () {
            var self = this;
            
            asyncRequest.all(this.$net,[{
                params:{code:0,data:{title:'page1',description:'page1 description'}},
                request:request.sample,
            }],function(values){

                self.$elem.html(template('page1/page1',{data:values[0]}));
                self.$dialog = Dialog.create({$app:self.$app,$parent:self.$elem});
                self.$errortips = ErrorTips.create({$parent:self.$elem});
                self.$loading = Loading.create({$parent:self.$elem});

                //绑定数据
                binder.bind(self.$elem, self);
            });
        },

        title: 'page1',
        
        detail: 0,

        events:{
            'click':{
                'tt_click':function(){
                    //alert('tt_click');
                    this.detail++;
                },
                'opendialog':function(){
                    this.$dialog.alert('对话框，碉堡了!');
                },
                'openerrortips':function(){
                    this.$errortips.show('error tips');
                },
                'showloading':function(){
                    this.$loading.show();
                }
            }
        },
        destroy:function(){
            this.$super();
            this.$dialog.destroy();
        }
    });
        
    module.exports = Page1;
});