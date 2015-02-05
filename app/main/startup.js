define(function(require, exports) {
	var spaseedEntry = require('entry');
	var config = require('../config');

	//应用入口函数
    var startup = function () {
    	//spaseed初始化
		spaseedEntry.init(config);
    };

    exports.startup = startup;
});
