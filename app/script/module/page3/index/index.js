
define(function (require, exports, module) {
    var $ = require('$');
    var manager = require('../../../model/manager');
    var util = require('util');
    var evt = require('event');
    var page3 = require('../page3');
    var template = require('apptemplate');

    var page3Index = {

        title: 'page3 index',

        render: function () {
            var $subcontainer = $('#subcontainer');

            if(!$subcontainer.length){
                page3.render();
                $subcontainer = $('#subcontainer');
            }

            $('#subcontainer').html(template('page3/index/index')());
        },

        destroy: function () {

        }
    };
        
    module.exports = page3Index;
});