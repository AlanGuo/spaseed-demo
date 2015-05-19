define(function(require,exports,module){
	var $ = require('$');
	var spaseedconfig = require('spm_modules/spaseed/1.1.13/config');

	var config = $.extend(spaseedconfig,{
		basePath:'/app/script/module/',
		root : 'page1',
		container:'#container',
		html5Mode:true
	});
	
	module.exports = config;
});