
define(function (require, exports, module) {
    var $ = require('$');
    var manager = require('../../../model/manager');
    var util = require('util');
    var evt = require('event');
    var page3 = require('../page3');
    var template = require('apptemplate');

    var page3Other = {

        title: 'page3 other',

        render: function () {

            var $subcontainer = $('#subcontainer');

            if(!$subcontainer.length){
                page3.render();
                $subcontainer = $('#subcontainer');
            }

            $('#subcontainer').html(template('page3/other/other')());
        },

        destroy: function () {

        }
    };
        
    module.exports = page3Other;
});