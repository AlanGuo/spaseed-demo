
define(function (require, exports, module) {
    var $ = require('$');
    var page3 = require('../page3');
    var template = require('template');

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