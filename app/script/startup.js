define(function(require, exports, module) {
	var App = require('app');
	var config = require('config');
	var $ = require('$');
	//应用入口函数
    var startup = function(container){
		container = container || $('#switchWrapper');
		var app = App.create({
			$elem:container,
			netback:function(url,data,cb){
				
			}
		});
		app.startup(config);
	};

    module.exports = startup;
});
