define(function(require,exports,module){
	var $ = require('$');
	var spaseedconfig = require('spm_modules/spaseed/1.1.14/config');

	var config = $.extend(spaseedconfig,{
		root : '/page1',
		container:'#container',
		viewfolder:'app/script/module'
		// pageWrapper:'#pageWrapper',
		// switchMode:'fadeIn',
		// switchWrapper:'#switchWrapper'
	});
	
	module.exports = config;
});