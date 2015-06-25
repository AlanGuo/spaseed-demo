define(function(require,exports,module){
	var $ = require('$');
	var spaseedconfig = require('spm_modules/spaseed/1.1.14/config');

	var config = $.extend(spaseedconfig,{
		basePath:'/app/script/module/',
		root : 'page1',
		container:'#container',
		pageWrapper:'#pageWrapper',
		switchMode:'slideLeft'
	});
	
	module.exports = config;
});