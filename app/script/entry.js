define(function(require, exports) {
	var spaseedEntry = require('entry');
	//应用入口函数
    var startup = function () {
    	//spaseed初始化
		spaseedEntry.init();
    };

    exports.startup = startup;
});