'use strict';

define(function(require, exports, module) {

	var request = {
		sample:{url:'/cgi/sample',method:'get',fakecallback:function(data,cb){
			setTimeout(function(){
				cb(data);
			}, 200);
		}}
	};

	module.exports = request;
});
