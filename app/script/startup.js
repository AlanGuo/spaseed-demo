define(function(require, exports, module) {
	var App = require('app');
	var config = require('config');
	//应用入口函数
    var startup = function(container){
		container = container || document.getElementById('container');
		var app = App.create({$:container});
		app.startup(config);
	};

    module.exports = startup;
});
