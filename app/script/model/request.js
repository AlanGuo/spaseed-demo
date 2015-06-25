'use strict';

define(function(require, exports, module) {
	var requestmanager = require('requestmanager');

	requestmanager.add('sample','/cgi/sample','GET', function(data, cb, fail, options){
		setTimeout(function(){
			cb && cb(data);
		},100);
	});

	module.exports = requestmanager;
});
