
define(function (require, exports, module) {
    var $ = require('$');
    var manager = require('../../../models/manager');
    var util = require('util');
    var evt = require('event');
    var template = require('apptemplate');

    var page3Other = {

        title: 'page3 other',

        pageClass: '',

        render: function () {

            $('#subcontainer').html(template('page3/other/other')());

            this.bindEvent();
        },

        bindEvent: function () {

            evt.addCommonEvent('click', { 
                
            });
        },

        destroy: function () {

        }
    };
        
    module.exports = page3Other;
});