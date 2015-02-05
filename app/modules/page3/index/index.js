
define('modules/page3/index/index', function (require, exports, module) {
    var $ = require('zepto');
    var manager = require('../../../models/manager');
    var util = require('util');
    var evt = require('event');
    var template = require('apptemplate');

    var page3Index = {

        title: 'page3 index',

        pageClass: '',

        render: function () {

            $('#subcontainer').html(template('page3/index/index')());

            this.bindEvent();
        },

        bindEvent: function () {

            evt.addCommonEvent('click', { 
                
            });
        },

        destroy: function () {

        }
    };
        
    module.exports = page3Index;
});