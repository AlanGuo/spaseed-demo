;
define("/app/script/config", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var spaseedconfig = require("spm_modules/spaseed/1.1.14/config");
    var config = $.extend(spaseedconfig, {
        root: "/page1",
        container: "#container",
        viewfolder: "app/script/module"
    });
    module.exports = config;
});;
"use strict";

define("/app/script/model/request", function(require, exports, module) {
    var requestmanager = require("spm_modules/spaseed/1.1.14/lib/requestmanager");
    requestmanager.add("sample", "/cgi/sample", "GET", function(data, cb, fail, options) {
        setTimeout(function() {
            cb && cb(data);
        }, 100);
    });
    module.exports = requestmanager;
});;
"use strict";

define("/app/script/module/page1/page1", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var mp = require("spm_modules/spaseed/1.1.14/main/mp");
    //var template = require('template');
    //var asyncRequest = require('asyncrequest');
    //var binder = require('binder');
    var request = require("app/script/model/request");
    var page1 = mp.Class.extend({
        ctor: function(data) {
            this.$super(data);
        },
        render: function() {
            //var self = this;
            // asyncRequest.all([{
            //     params:{title:'page1',description:'page1 description'},
            //     request:request.sample
            // }],function(values){
            //     pageManager.html({
            //         switchStyle:{top:'49px',height:'auto'},
            //         isRefresh:self.isRefresh,
            //         container:template('page1/page1',{data: values[0]})
            //     });
            //     //绑定数据
            //     //binder.bind(pageManager.container[0],self);
            // });
            this.$.innerHTML = template("page1/page1", {});
        },
        title: "page1",
        detail: 0,
        events: {
            click: {
                tt_click: function() {
                    //alert('tt_click');
                    this.detail++;
                }
            }
        },
        destroy: function() {}
    });
    module.exports = page1;
});;
define("/app/script/module/page2/page2", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var pageManager = require("spm_modules/spaseed/1.1.14/main/pagemanagerwithpageswitcher");
    var template = require("dest/view/apptemplate");
    var asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest");
    var request = require("app/script/model/request");
    var page2 = {
        title: "page2",
        render: function() {
            var self = this;
            asyncRequest.all([ {
                params: {
                    title: "page2",
                    description: "page2 description"
                },
                request: request.sample
            } ], function(values) {
                pageManager.html({
                    switchStyle: {
                        top: "49px",
                        height: "auto"
                    },
                    isRefresh: self.isRefresh,
                    container: template("page2/page2", {
                        data: values[0]
                    })
                });
            });
        },
        destroy: function() {}
    };
    module.exports = page2;
});;
define("/app/script/module/page3/index/index", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var page3 = require("app/script/module/page3/page3");
    var template = require("dest/view/apptemplate");
    var page3Index = {
        title: "page3 index",
        render: function() {
            var $subcontainer = $("#subcontainer");
            if (!$subcontainer.length) {
                page3.render();
                $subcontainer = $("#subcontainer");
            }
            $("#subcontainer").html(template("page3/index/index")());
        },
        destroy: function() {}
    };
    module.exports = page3Index;
});;
define("/app/script/module/page3/other/other", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var page3 = require("app/script/module/page3/page3");
    var template = require("dest/view/apptemplate");
    var page3Other = {
        title: "page3 other",
        render: function() {
            var $subcontainer = $("#subcontainer");
            if (!$subcontainer.length) {
                page3.render();
                $subcontainer = $("#subcontainer");
            }
            $("#subcontainer").html(template("page3/other/other")());
        },
        destroy: function() {}
    };
    module.exports = page3Other;
});;
define("/app/script/module/page3/page3", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var pageManager = require("spm_modules/spaseed/1.1.14/main/pagemanagerwithpageswitcher");
    var request = require("app/script/model/request");
    var template = require("dest/view/apptemplate");
    var asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest");
    var page3 = {
        render: function() {
            var self = this;
            asyncRequest.all([ {
                params: {
                    title: "page3",
                    description: "page3 description"
                },
                request: request.sample
            } ], function(values) {
                pageManager.html({
                    switchStyle: {
                        top: "49px",
                        height: "auto"
                    },
                    isRefresh: self.isRefresh,
                    container: template("page3/page3", {
                        data: values[0]
                    })
                });
            });
        },
        destroy: function() {}
    };
    module.exports = page3;
});;
define("/app/script/module/page3/page3", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var pageManager = require("spm_modules/spaseed/1.1.14/main/pagemanagerwithpageswitcher");
    var request = require("app/script/model/request");
    var template = require("dest/view/apptemplate");
    var asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest");
    var page3 = {
        render: function() {
            var self = this;
            asyncRequest.all([ {
                params: {
                    title: "page3",
                    description: "page3 description"
                },
                request: request.sample
            } ], function(values) {
                pageManager.html({
                    switchStyle: {
                        top: "49px",
                        height: "auto"
                    },
                    isRefresh: self.isRefresh,
                    container: template("page3/page3", {
                        data: values[0]
                    })
                });
            });
        },
        destroy: function() {}
    };
    module.exports = page3;
});;
/*TMODJS:{"version":"1.0.0"}*/
!function(require, exports, module) {
    function template(filename, content) {
        return (/string|function/.test(typeof content) ? compile : renderFile)(filename, content);
    }
    function toString(value, type) {
        return "string" != typeof value && (type = typeof value, "number" === type ? value += "" : value = "function" === type ? toString(value.call(value)) : ""), 
        value;
    }
    function escapeFn(s) {
        return escapeMap[s];
    }
    function escapeHTML(content) {
        return toString(content).replace(/&(?![\w#]+;)|[<>"']/g, escapeFn);
    }
    function each(data, callback) {
        if (isArray(data)) for (var i = 0, len = data.length; len > i; i++) callback.call(data, data[i], i, data); else for (i in data) callback.call(data, data[i], i);
    }
    function resolve(from, to) {
        var DOUBLE_DOT_RE = /(\/)[^/]+\1\.\.\1/, dirname = ("./" + from).replace(/[^/]+$/, ""), filename = dirname + to;
        for (filename = filename.replace(/\/\.\//g, "/"); filename.match(DOUBLE_DOT_RE); ) filename = filename.replace(DOUBLE_DOT_RE, "/");
        return filename;
    }
    function renderFile(filename, data) {
        var fn = template.get(filename) || showDebugInfo({
            filename: filename,
            name: "Render Error",
            message: "Template not found"
        });
        return data ? fn(data) : fn;
    }
    function compile(filename, fn) {
        if ("string" == typeof fn) {
            var string = fn;
            fn = function() {
                return new String(string);
            };
        }
        var render = cache[filename] = function(data) {
            try {
                return new fn(data, filename) + "";
            } catch (e) {
                return showDebugInfo(e)();
            }
        };
        return render.prototype = fn.prototype = utils, render.toString = function() {
            return fn + "";
        }, render;
    }
    function showDebugInfo(e) {
        var type = "{Template Error}", message = e.stack || "";
        if (message) message = message.split("\n").slice(0, 2).join("\n"); else for (var name in e) message += "<" + name + ">\n" + e[name] + "\n\n";
        return function() {
            return "object" == typeof console && console.error(type + "\n\n" + message), type;
        };
    }
    var cache = template.cache = {}, String = window.String, escapeMap = {
        "<": "&#60;",
        ">": "&#62;",
        '"': "&#34;",
        "'": "&#39;",
        "&": "&#38;"
    }, isArray = Array.isArray || function(obj) {
        return "[object Array]" === {}.toString.call(obj);
    }, utils = template.utils = {
        $helpers: {},
        $include: function(filename, data, from) {
            return filename = resolve(from, filename), renderFile(filename, data);
        },
        $string: toString,
        $escape: escapeHTML,
        $each: each
    }, helpers = template.helpers = utils.$helpers;
    if (template.get = function(filename) {
        return cache[filename.replace(/^\.\//, "")];
    }, template.helper = function(name, helper) {
        helpers[name] = helper;
    }, "function" == typeof define) define("/dest/view/apptemplate", function() {
        return template;
    }); else if ("undefined" != typeof exports) module.exports = template; else {
        for (var namespaceArray = "apptemplate".split("."), global = window, i = 0; i < namespaceArray.length; i++) {
            var item = namespaceArray[i];
            global[item] = global[item] || {}, global = global[item];
        }
        global.template = template;
    }
    /*v:9*/
    template("page1/page1", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), data = $data.data, $out = "";
        return $out += '<h1 data-click-event="tt_click">', $out += $escape(data.title), 
        $out += "</h1> <div>", $out += $escape(data.description), $out += '</div> <div bind-content="detail"></div> ', 
        new String($out);
    }), /*v:2*/
    template("page2/page2", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), data = $data.data, $out = "";
        return $out += "<h1>", $out += $escape(data.title), $out += "</h1> <div>", $out += $escape(data.description), 
        $out += "</div> ", new String($out);
    }), /*v:2*/
    template("page3/index/index", "<div> This is '/page3/index' content </div>"), /*v:2*/
    template("page3/other/other", "<div> This is 'other' page content </div> "), /*v:2*/
    template("page3/page3", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), data = $data.data, $out = "";
        return $out += "<h1>", $out += $escape(data.title), $out += "</h1> <div>", $out += $escape(data.description), 
        $out += '</div> <ul class="menu submenu"> <li><a data-href="/page3/index" data-click-event="router">/page3/index</a></li> <li><a data-href="/page3/other" data-click-event="router">/page3/other</a></li> </ul> <div id="subcontainer" class="subcontainer"></div> ', 
        new String($out);
    }), module && (module.exports = template);
}();;
define("/spm_modules/spaseed/1.1.14/config", function(require, exports, module) {
    var spaseedConfig = {
        /**
		 * 页面模块基础路径
		 * @property basePath
		 * @type String
		 * @default '/app/script/module/'
		 */
        basePath: "/app/script/module/",
        /**
		 * 页面包裹选择器
		 * @property pageWrapper
		 * @type String
		 * @default '#wrapper-all'
		 */
        pageWrapper: "#wrapper-all",
        /**
		 * 页面顶部包裹元素
		 * @property top
		 * @type String
		 * @default '#top'
		 */
        top: "#top",
        /**
		 * 页面底部包裹元素
		 * @property bottom
		 * @type String
		 * @default '#bottom'
		 */
        bottom: "#bottom",
        /**
		 * 页面body容器
		 * @property container
		 * @type String
		 * @default '#body-container'
		 */
        container: "#body-container",
        /**
		 * 切换页面需要更改class的容器选择器
		 * @property classWrapper
		 * @type String
		 * @default '#wrapper-all'
		 */
        classWrapper: "#wrapper-all",
        /**
		 * 切换页面的包裹容器
		 * @property switchWrapper
		 * @type String
		 * @default '#wrapper-all'
		 */
        switchWrapper: "#wrapper-all",
        /**
		 * 切换页面需要保留的class
		 * @property defaultClass
		 * @type String
		 * @default ''
		 */
        defaultClass: "",
        /**
		 * 默认标题
		 * @property defaultTitle
		 * @type String
		 * @default 'spaseed'
		 */
        defaultTitle: "spaseed",
        //导航相关
        /**
		 * 导航容器选择器, 在各容器中遍历a标签, 执行选中态匹配
		 * @property navContainer
		 * @type Array
		 * @default ['body']
		 */
        navContainer: [ "body" ],
        /**
		 * 导航选中class名
		 * @property navActiveClass
		 * @type String
		 * @default 'active'
		 */
        navActiveClass: "active",
        /**
		 * 页面切换方式
		 * @property switchMode  slideLeft,slideRight,fadeIn,
		 * @type String
		 * @default null
		 */
        switchMode: null,
        /**
		 * 扩展路由，优先于框架路由逻辑
		 * @property extendRoutes
		 * @type Object
		 * @default {}
		 */
        extendRoutes: {},
        /**
		 * 首页模块名
		 * @property root
		 * @type String
		 * @default 'home'
		 */
        root: "index",
        /**
		 * css配置
		 * @property css
		 * @type Object
		 * @default {}
		 */
        css: {},
        /**
		 * 404提示
		 * @property 404Html
		 * @type String
		 * @default '<h2 id="tt404" style="text-align:center;padding-top:100px;font-size:20px;line-height:1.5;color:#999">'+
				   ' <p style="font-size:44px">404</p> 您访问的页面没有找到! </h2>'
		 */
        html404: '<h2 id="tt404" style="text-align:center;padding-top:100px;font-size:20px;line-height:1.5;color:#999">' + ' <p style="font-size:44px">404</p> 您访问的页面没有找到! </h2>',
        htmlError: '<section class="page-404"><div class="wrap-404" data-click-event="reload" style="text-align: center;margin-top: 35%;"><div class="tips">{{msg}}</div><div class="tips">轻触屏幕重新加载</div></div></section>',
        /**
		 * 请求错误时展示更多错误信息
		 * @property showDetailError
		 * @type String
		 * @default true
		 */
        showDetailError: true,
        /**
		 * 请求错误默认提示文字
		 * @property defaultReqErr
		 * @type String
		 * @default '连接服务器异常，请稍后再试'
		 */
        defaultReqErr: "连接服务器异常，请稍后再试",
        /**
		 * 追加的url请求参数
		 * @property additionalUrlParam
		 * @type Function
		 * @default null
		 */
        additionalUrlParam: null,
        /**
		 * xhr请求进度条，需要后台字段支持
		 * @property xhrProgress
		 * @type boolean
		 * @default false
		 */
        xhrProgress: true,
        /**
		 * 禁止container以外元素的touch事件
		 * @property disableTouchOutsideContainer
		 * @type boolean
		 * @default true
		 */
        disableTouchOutsideContainer: true,
        /**
		 * 刷新的时候不replacehistory
		 * @property silentRefresh
		 * @type boolean
		 * @default false
		 */
        silentRefresh: false,
        /**
		 * 切换模式
		 * @property html5Mode
		 * @type boolean
		 * @default true
		 */
        html5Mode: true,
        /**
		 * 统计id，目前支持的是baidu统计
		 * @property statsId
		 * @type String
		 * @default ''
		 */
        statsId: "a2ede337a0b21b2991bd02c69befdc07",
        /**
		 * 默认开启统计
		 * @property defaultStats
		 * @type boolean
		 * @default true
		 */
        defaultStats: true
    };
    module.exports = spaseedConfig;
});;
/**
 * promise
 * @class promise
 * @static
 */
define("/spm_modules/spaseed/1.1.14/lib/asyncrequest", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var asyncRequest = {
        all: function(requestArray, success, fail) {
            if (window.Promise) {
                var promiseFunctionArray = [];
                $(requestArray).map(function(index, item) {
                    promiseFunctionArray.push(new Promise(function(resolve, reject) {
                        item.request(item.params, function(data) {
                            resolve(data);
                        }, function(err) {
                            reject(err);
                        });
                    }));
                });
                Promise.all(promiseFunctionArray).then(function(values) {
                    if (success) {
                        success(values);
                    }
                }).catch(function(errs) {
                    if (fail) {
                        fail(errs);
                    }
                });
            } else {
                var count = requestArray.length;
                var resultsArray = new Array(count);
                //不支持Promise的情况
                $(requestArray).map(function(index, item) {
                    (function(i) {
                        item.request(item.params, function(data) {
                            resultsArray[i] = data;
                            if (!--count) {
                                if (success) {
                                    success(resultsArray);
                                }
                            }
                        }, function(err) {
                            resultsArray[i] = err;
                            if (!--count) {
                                if (fail) {
                                    fail(resultsArray);
                                }
                            }
                        });
                    })(index);
                });
            }
        }
    };
    module.exports = asyncRequest;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/cookie", function(require, exports, module) {
    var cookie = {
        get: function(name) {
            var cookieStr = document.cookie;
            var reg = new RegExp(name + "=(.*?)(;|$)");
            var val = reg.exec(cookieStr);
            return val && val[1];
        },
        set: function(name, value, path, expires) {
            var expDays = expires * 24 * 60 * 60 * 100;
            var expDate = new Date();
            expDate.setTime(expDate.getTime() + expDays);
            var expString = expires ? "; expires=" + expDate.toGMTString() : "";
            var pathString = ";path=" + path;
            document.cookie = name + "=" + escape(value) + expString + pathString;
        },
        "delete": function(name) {
            var exp = new Date(new Date().getTime() - 1);
            var s = this.read(name);
            if (s != null) {
                document.cookie = name + "=" + s + "; expires=" + exp.toGMTString() + ";path=/";
            }
        }
    };
    module.exports = cookie;
});;
"use strict";

/**
 * @dialog 模块
 * dialog.show(template,{
		header:true,
		buttons:[{
			name:'确定',
			dataEvent:'closeDialog'
		}]
 * });
 * 一个带通用头部和底部确定按钮的对话框
 * dialog.show(template)
 * 一个完全自定义的对话框
 * dialog.alert('文本');
 * 一个标准的提示对话框
 *
 * 目前只支持两个按钮
 */
define("/spm_modules/spaseed/1.1.14/lib/dialog", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var pageManager = require("spm_modules/spaseed/1.1.14/main/pagemanagerwithpageswitcher");
    var evt = require("spm_modules/spaseed/1.1.14/lib/event");
    var template = require("dest/view/apptemplate");
    var env = require("spm_modules/spaseed/1.1.14/lib/env");
    var dialog = {
        status: 0,
        height: 0
    };
    dialog.alert = function(text, option) {
        option = option || {};
        option.zIndex = option.zIndex || 5;
        option.header = option.header === true ? true : false;
        option.buttons = option.buttons || [ {
            name: "确定"
        } ];
        this._setTemplate(template("common/dialog/dialog", {
            text: text,
            option: option
        }), option);
        if (option.buttons) {
            this._addButton(option);
        }
        this.showMask();
        this.status = 1;
    };
    dialog.show = function(html, option) {
        option = option || {};
        option.zIndex = option.zIndex || 5;
        if (html) {
            //更新模板，显示对话框
            this._setTemplate(template("common/dialog/dialog", {
                html: html,
                option: option
            }), option);
        } else {
            //直接系那是对话框
            this._showTemplate();
        }
        //底部按钮
        if (option.buttons) {
            //删除之前的按钮
            pageManager.dialog.find(".bottom-button").remove();
            this._addButton(option);
        }
        this.showMask();
        var inputs = $(pageManager.dialog).find("input");
        if (inputs.length) {
            if (!inputs.prop("readonly") && !inputs.prop("disabled")) {
                if (env.isAndroid) {
                    setTimeout(function() {
                        inputs[0].focus();
                    }, 200);
                } else {
                    inputs[0].focus();
                }
            }
        }
        //监听resize事件做处理
        window.onresize = function() {
            if ($(window).height() < dialog.height) {
                pageManager.dialog.css("height", "100%");
            } else {
                pageManager.dialog.css("height", "auto");
            }
        };
        this.status = 1;
    };
    dialog._addButton = function(option) {
        //底部按钮
        if (option.buttons) {
            var buttonPanel = document.createElement("div");
            $(buttonPanel).html(template("common/buttombutton/buttons", {
                buttons: option.buttons
            }));
            this.bottomButtons = $(buttonPanel).children();
            this.bottomButtons.css("z-index", option.zIndex + 1);
            pageManager.dialog.append(this.bottomButtons);
        }
    };
    dialog._removeButton = function() {
        //底部按钮
        if (this.bottomButtons) {
            this.bottomButtons.remove();
        }
    };
    dialog._setTemplate = function(html) {
        var height = pageManager.dialog.html(html).show().height();
        pageManager.dialog.css("bottom", -height + "px");
        pageManager.dialog[0].clientHeight = pageManager.dialog[0].clientHeight;
        pageManager.dialog.css("bottom", 0);
        this.height = height;
    };
    dialog._showTemplate = function() {
        pageManager.dialog.show().css("bottom", -pageManager.dialog.height() + "px");
        pageManager.dialog[0].clientHeight = pageManager.dialog[0].clientHeight;
        pageManager.dialog.css("bottom", 0);
    };
    dialog.hide = function() {
        this.hideMask();
        pageManager.dialog.css("bottom", -pageManager.dialog.height() + "px");
        //底部按钮的样式
        //pageManager.dialog.find('.bottom-button').css('position','absolute');
        setTimeout(function() {
            pageManager.dialog.hide();
        }, 200);
        //this._removeButton();
        this.status = 0;
        document.activeElement.blur();
    };
    dialog.showError = function(msg) {
        var container = document;
        if (this.status) {
            container = pageManager.dialog;
        }
        var errorEl = $(container).find("div[data-error]");
        errorEl.html(msg).removeClass("fade-out").show();
        setTimeout(function() {
            errorEl.addClass("fade-out");
            setTimeout(function() {
                errorEl.hide();
            }, 200);
        }, 2e3);
    };
    dialog.wxshare = function() {
        var helper = $('<div class="popup-wxshare"><span class="share-wx">点击右上角，分享到朋友圈</span><a class="icon-close"> 点击关闭</a></div>');
        this.showMask();
        helper.appendTo("body");
        var close = function() {
            dialog.hideMask();
            helper.remove();
            helper = undefined;
        };
        helper.on("touchstart", close);
        setTimeout(function() {
            if (helper) {
                close();
            }
        }, 5e3);
    };
    dialog.wxopeninbrowser = function() {
        var helper = $('<div class="popup-wxshare"><span class="pay-wx">点击右上角，用浏览器打开再支付</span><a class="icon-close"> 点击关闭</a></div>');
        this.showMask();
        helper.appendTo("body");
        var close = function() {
            dialog.hideMask();
            helper.remove();
            helper = undefined;
        };
        helper.on("touchstart", close);
        setTimeout(function() {
            if (helper) {
                close();
            }
        }, 5e3);
    };
    dialog.getParams = function() {
        var params = {};
        $(pageManager.dialog).find("input").each(function() {
            params[this.name] = this.value;
        });
        return params;
    };
    dialog.msgbox = function(msg, ms) {
        pageManager.msgbox.removeClass("fade-out").html("<p>" + msg + "</p>").show();
        setTimeout(function() {
            pageManager.msgbox.addClass("fade-out");
            setTimeout(function() {
                pageManager.msgbox.hide();
            }, 500);
        }, ms || 2e3);
    };
    dialog.showMask = function() {
        pageManager.mask.css("height", env.resolution.y).show();
    };
    dialog.hideMask = function() {
        pageManager.mask.hide();
    };
    evt.bindCommonEvent("click", {
        "dialog-hide": function() {
            dialog.hide();
        }
    });
    module.exports = dialog;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/env", function(require, exports, module) {
    var util = require("spm_modules/spaseed/1.1.14/lib/util");
    var env = {}, ua = navigator.userAgent;
    env.defaultTitle = "spaseed";
    env.cdn = window.cdn;
    env.isIOS = util.isIOS();
    env.isAndroid = util.isAndroid();
    env.isWX = /micromessenger/i.test(ua);
    env.isMQQB = /mqqbrowser/i.test(ua);
    //env.appid = 'wx';
    var doc = document.documentElement;
    var bod = document.body;
    env.resolution = {};
    env.resolution.x = Math.max(doc.clientWidth, bod.clientWidth);
    env.resolution.y = Math.max(doc.clientHeight, bod.clientHeight);
    module.exports = env;
});;
/**
 * 事件管理
 * @class event
 * @static
 */
define("/spm_modules/spaseed/1.1.14/lib/event", function(require, exports, module) {
    var util = require("spm_modules/spaseed/1.1.14/lib/util");
    var mp = require("spm_modules/spaseed/1.1.14/main/mp");
    //事件处理方法
    var _handlers = {};
    //默认判断是否有事件的函数
    var _defalutJudgeFn = function(elem, type) {
        return !!elem.getAttribute("data-" + type + "-event");
    };
    //默认获取事件key的函数
    var _defaultGetEventkeyFn = function(elem, type) {
        return elem.getAttribute("data-" + type + "-event");
    };
    //添加事件监听
    var addEvent = function(elem, event, fn) {
        if (elem.addEventListener) // W3C
        elem.addEventListener(event, fn, true); else if (elem.attachEvent) {
            // IE
            elem.attachEvent("on" + event, fn);
        } else {
            elem[event] = fn;
        }
    };
    //移除事件监听
    var removeEvent = function(elem, event, fn) {
        if (elem.removeEventListener) // W3C
        elem.removeEventListener(event, fn); else if (elem.attachEvent) {
            // IE
            elem.detachEvent("on" + event, fn);
        }
    };
    //获取元素中包含事件的第一个子元素
    var getWantTarget = function(evt, topElem, type, judgeFn) {
        judgeFn = judgeFn || this.judgeFn || _defalutJudgeFn;
        var _targetE = evt.srcElement || evt.target;
        while (_targetE) {
            if (judgeFn(_targetE, type)) {
                return _targetE;
            }
            if (topElem == _targetE) {
                break;
            }
            _targetE = _targetE.parentNode;
        }
        return null;
    };
    var Event = mp.Class.extend({
        ctor: function(mpNode) {},
        /**
		 * 通用的绑定事件处理
		 * @method bindCommonEvent
		 * @param {Object} obj 调用事件绑定的页面对象
		 * @param {Element} topElem 要绑定事件的元素
		 * @param {String} type 绑定的事件类型
		 * @param {Object} handlerMap 事件处理的函数映射
		 * @param {Function} getEventkeyFn 取得事件对应的key的函数
		 */
        bindCommonEvent: function(obj, topElem, type, handlerMap, getEventkeyFn) {
            handlerMap = handlerMap || _handlers[type];
            var orginType = type, returnVal = null;
            if (type === "click" && util.isMobile()) {
                type = "tap";
            }
            getEventkeyFn = getEventkeyFn || _defaultGetEventkeyFn;
            var judgeFn = function(elem, type) {
                return !!getEventkeyFn(elem, type);
            };
            var hdl = function(e) {
                /**
				 * 支持直接绑定方法
				 */
                var _target = getWantTarget(e, topElem, orginType, judgeFn), _hit = false;
                if (_target) {
                    var _event = getEventkeyFn(_target, orginType);
                    var _returnValue;
                    if (/Function/i.test(Object.prototype.toString.call(handlerMap))) {
                        _returnValue = handlerMap.call(obj, _target, e, _event);
                        _hit = true;
                    } else {
                        if (handlerMap[_event]) {
                            _returnValue = handlerMap[_event].call(obj, _target, e, _event);
                            _hit = true;
                        }
                    }
                    if (_hit) {
                        if (!_returnValue) {
                            if (e.preventDefault) {
                                e.preventDefault();
                            } else e.returnValue = false;
                        }
                    }
                }
            };
            if (type === "tap") {
                var x1 = 0, y1 = 0, x2 = 0, y2 = 0, flag = false;
                var tstart = function(e) {
                    var touch = e.touches[0];
                    x1 = touch.pageX;
                    y1 = touch.pageY;
                    flag = false;
                };
                var tmove = function(e) {
                    var touch = e.touches[0];
                    x2 = touch.pageX;
                    y2 = touch.pageY;
                    flag = true;
                };
                var tend = function(e) {
                    if (flag) {
                        var offset = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                        if (offset < 5) {
                            hdl(e);
                        }
                    } else {
                        hdl(e);
                    }
                };
                addEvent(topElem, "touchstart", tstart);
                addEvent(topElem, "touchmove", tmove);
                addEvent(topElem, "touchend", tend);
                returnVal = {
                    touchstart: tstart,
                    touchmove: tmove,
                    touchend: tend
                };
            } else {
                addEvent(topElem, type, hdl);
                returnVal = hdl;
            }
            //返回hdl用来解绑
            return returnVal;
        },
        /**
		 * 为topElem解绑元素
		 * @method unbindCommonEvent
		 * @param {type} 事件类型
		 * @param {dealFn} 事件处理的函数
		 */
        unbindCommonEvent: function(topElem, type, handler) {
            if (hander) {
                if (type === "click" && util.isMobile()) {
                    //解绑touch事件
                    for (p in handler) {
                        removeEvent(topElem, p, handler[p]);
                    }
                } else {
                    removeEvent(topElem, type, handler);
                }
            }
        },
        /**
		 * 为body添加事件代理
		 * @method bindBodyEvent
		 * @param {string} type 事件类型
		 */
        bindBodyEvent: function(obj, type) {
            return this.bindCommonEvent(obj, document.body, type);
        },
        /**
		 * 为body添加事件代理
		 * @method unbindBodyEvent
		 * @param {string} type 事件类型
		 * @param {function} bodyHandler 事件处理的函数
		 */
        unbindBodyEvent: function(type, bodyHandler) {
            if (bodyHandler) {
                this.unbindCommonEvent(document.body, type, bodyHandler);
            }
        },
        /**
		 * 为body添加事件代理
		 * @method bindBodyEvent
		 * @param {string} eventName 事件类型
		 * @param {function} handler 事件处理的函数
		 */
        on: function(eventName, handlerName, handler) {
            _handlers[eventName] = _handlers[eventName] || {};
            _handlers[eventName][handlerName] = handler;
        },
        off: function(eventName, handler) {
            if (!handler) {
                if (_handlers[eventName]) {
                    _handlers[eventName] = {};
                }
            } else {
                if (_handlers[eventName]) {
                    handlers[eventName][handlerName] = null;
                }
            }
        },
        emit: function(elem, eventName, handlerName, data) {}
    });
    Event.create = function(mpNode) {
        return new Event(mpNode);
    };
    module.exports = Event;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/model", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var net = require("spm_modules/spaseed/1.1.14/lib/net");
    var dialog = require("spm_modules/spaseed/1.1.14/lib/dialog");
    var pageManager = require("spm_modules/spaseed/1.1.14/main/pagemanagerwithpageswitcher");
    var stats = require("spm_modules/spaseed/1.1.14/lib/stats");
    var config = require("app/script/config");
    //数据管理
    var manager = {
        isBusy: false,
        //所有正常cgi调用都通过这个门面方法进行调用
        cgiFacade: function(cgi, data, cb, fail, option) {
            var eventName = "";
            var startTime = new Date();
            var _cb = function(ret) {
                var _code = ret.code;
                manager.isBusy = false;
                if (config.defaultStats) {
                    //cgi返回码统计
                    stats.trackEvent("cgi", cgi.url.split("?")[0], ret.code, new Date() - startTime);
                }
                //恢复按钮
                if (option.button) {
                    $(option.button).removeClass("disabled").data("event", eventName);
                }
                if (_code === 0) {
                    if (cb) {
                        cb(ret.data);
                    }
                } else if (_code === 403) {
                    dialog.hide();
                    pageManager.redirect("account", "login", null, {
                        pathname: encodeURIComponent(location.pathname)
                    });
                } else {
                    if (fail) {
                        fail(ret.msg, _code, ret.data);
                    } else {
                        var str = config.defaultReqErr;
                        if (config.showDetailError) {
                            str = ret.msg || config.defaultReqErr;
                        }
                        if (pageManager.isEmpty()) {
                            pageManager.renderError(str);
                        } else {
                            dialog.msgbox(str);
                        }
                    }
                }
            };
            this.isBusy = true;
            //获取服务端数据
            net.send(cgi, {
                data: data,
                cb: _cb,
                url: cgi
            });
            option = option || {};
            //禁用按钮
            if (option.button) {
                eventName = $(option.button).addClass("disabled").data("event");
                $(option.button).removeAttr("data-click-event");
            }
        }
    };
    module.exports = manager;
});;
define("/spm_modules/spaseed/1.1.14/lib/net", function(require, exports, module) {
    var mp = require("spm_modules/spaseed/1.1.14/main/mp");
    spaseedConfig = require("app/script/config");
    var objectToParams = function(obj, decodeUri) {
        var param = $.param(obj);
        if (decodeUri) {
            param = decodeURIComponent(param);
        }
        return param;
    };
    var console = window.console;
    /**
     * 网络请求
     * @class net
     * @static
     */
    var Net = mp.Class.extend({
        ctor: function(mpNode) {},
        _progressBar: [],
        /**
         * 发起请求
         * @method send
         * @param  {Object} cgiConfig 配置
         * @param  {Object} opt       选参
         */
        send: function(cgiConfig, opt) {
            var _self = this, _cgiConfig = cgiConfig, _data = opt.data || {}, _url = "", _cb = null, _global = opt.global;
            if (!_cgiConfig) {
                _cgiConfig = {
                    url: opt.url,
                    method: opt.method
                };
            }
            if (_cgiConfig) {
                // 成功回调
                _cb = function(ret) {
                    // 使用友好的提示消息
                    // if (ret && ret['uiMsg']) {
                    //     // 如果有内部错误消息，则输出log
                    //     console && console.warn && (ret['code'] !== 0 && console.warn('错误 code=' + ret['code'] + ',msg=' + ret['msg']));
                    //     ret['msg'] = ret['uiMsg'] + '[#' + ret['code'] + ']';
                    //     delete ret['uiMsg'];
                    // }
                    opt.cb && opt.cb(ret);
                };
                var urlParams = {
                    t: new Date().getTime()
                };
                if (spaseedConfig.additionalUrlParam) {
                    $.extend(urlParams, spaseedConfig.additionalUrlParam());
                }
                _url = this._addParam(_cgiConfig.url, urlParams);
                if (_cgiConfig.method && _cgiConfig.method.toLowerCase() === "post") {
                    return this.post(_url, _data, _cb, _global);
                } else {
                    return this.get(_url, _data, _cb, _global);
                }
            }
        },
        /**
         * GET请求
         * @method get
         * @param  {String}   url    URL
         * @param  {Object}   data   参数
         * @param  {Function} cb     回调函数
         * @param  {Boolean}  global 是否触发全局 AJAX 事件
         */
        get: function(url, data, cb, global) {
            return this._ajax(url, data, "GET", cb, global);
        },
        /**
         * POST请求
         * @method post
         * @param  {String}   url    URL
         * @param  {Object}   data   参数
         * @param  {Function} cb     回调函数
         * @param  {Boolean}  global 是否触发全局 AJAX 事件
         */
        post: function(url, data, cb, global) {
            return this._ajax(url, data, "POST", cb, global);
        },
        _ajax: function(url, data, method, cb, global) {
            var self = this;
            global == undefined && (global = true);
            var returnVal = null;
            var progressBar = null;
            if (spaseedConfig.xhrProgress) {
                progressBar = self._showProgress();
            }
            (function(pbar) {
                returnVal = $.ajax({
                    type: method,
                    url: url,
                    data: data,
                    global: global,
                    success: function(data) {
                        self._hideProgress(pbar);
                        cb(data);
                    },
                    error: function(jqXHR) {
                        self._hideProgress(pbar);
                        if (window.isOnload) {
                            //避免页面刷新时, 出小黄条错误
                            var data = {};
                            try {
                                data = JSON.parse(jqXHR.responseText);
                            } catch (e) {
                                console.error("jqXHR.responseText parse error");
                                data.code = jqXHR.status;
                                data.msg = jqXHR.statusText;
                                data.data = {};
                            }
                            cb(data);
                        }
                    }
                });
                if (pbar) {
                    returnVal.onprogress = function(evt) {
                        var progressWidth = evt.loaded / (evt.total || (evt.loaded > 1e3 ? evt.loaded : 1e3)) * pbar.clientWidth * .99 | 0;
                    };
                }
            })(progressBar);
            return returnVal;
        },
        _showProgress: function() {
            var progressBar = document.createElement("div");
            progressBar.setAttribute("style", "position:fixed;height:3px;top:0;background:green;" + "transition:all .6s ease;width:0;z-index:100");
            document.body.appendChild(progressBar);
            progressBar.style.width = document.body.clientWidth + "px";
            return progressBar;
        },
        _hideProgress: function(elem) {
            if (elem) {
                document.body.removeChild(elem);
            }
        },
        _addParam: function(url, p) {
            var s = /\?/.test(url) ? "&" : "?";
            url += s + objectToParams(p);
            return url;
        }
    });
    Net.create = function(mpNode) {
        return new Net(mpNode);
    };
    module.exports = net;
});;
define("/spm_modules/spaseed/1.1.14/lib/pageswitcher", function(require, exports, module) {
    var spaseedConfig = require("app/script/config");
    var pageswitcher = {
        switchMode: spaseedConfig.switchMode || "none",
        method: {
            slideLeft: {
                elemIn: {
                    cssBefore: {
                        position: "absolute",
                        "z-index": "15",
                        top: "0",
                        left: "0",
                        transform: "translateX(100%) translateZ(0)",
                        transition: "transform .4s ease",
                        width: "100%",
                        height: "100%"
                    },
                    cssAfter: {
                        transform: ""
                    },
                    duration: 600
                },
                elemOut: {
                    cssBefore: {
                        transition: "transform 1.6s ease",
                        transform: "translateX(0) translateZ(0)"
                    },
                    cssAfter: {
                        transform: "translateX(-100%) translateZ(0)"
                    },
                    duration: 1600
                }
            },
            slideRight: {
                elemIn: {
                    cssBefore: {
                        position: "absolute",
                        "z-index": "15",
                        top: "0",
                        left: "0",
                        transform: "translateX(-100%) translateZ(0)",
                        transition: "transform .4s ease",
                        width: "100%",
                        height: "100%"
                    },
                    cssAfter: {
                        transform: ""
                    },
                    duration: 600
                },
                elemOut: {
                    cssBefore: {
                        transition: "transform 1.6s ease",
                        transform: "translateX(0) translateZ(0)"
                    },
                    cssAfter: {
                        transform: "translateX(100%) translateZ(0)"
                    },
                    duration: 1600
                }
            },
            fadeIn: {
                elemIn: {
                    cssBefore: {
                        position: "absolute",
                        "z-index": "15",
                        top: "0",
                        left: "0",
                        transition: "opacity .4s ease",
                        opacity: "0",
                        width: "100%",
                        height: "100%"
                    },
                    cssAfter: {
                        opacity: "1"
                    },
                    duration: 600
                },
                elemOut: {
                    cssBefore: {
                        transition: "opacity .4s ease",
                        opacity: "1"
                    },
                    cssAfter: {
                        opacity: "0"
                    },
                    duration: 600
                }
            }
        }
    };
    module.exports = pageswitcher;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/requestconstructor", function(require, exports, module) {
    var util = require("spm_modules/spaseed/1.1.14/lib/util");
    var requestconstructor = {
        create: function(option) {
            var cgi = option.url;
            var params = [];
            var tk = util.gettk("skey");
            if (tk) {
                params.push("tk=" + tk);
            }
            // if(window.userinfo.userId){
            // 	params.push('uin='+window.userinfo.userId);
            // }
            if (params.length) {
                cgi += /\?/.test(cgi) ? "&" : "?";
                cgi += params.join("&");
            }
            return {
                url: cgi,
                method: option.method
            };
        }
    };
    module.exports = requestconstructor;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/requestmanager", function(require, exports, module) {
    var model = require("spm_modules/spaseed/1.1.14/lib/model");
    var requestConstructor = require("spm_modules/spaseed/1.1.14/lib/requestconstructor");
    var requestmanager = {
        add: function(name, url, method, fakecallback) {
            this[name] = function(data, cb, fail, option) {
                if (fakecallback) {
                    fakecallback(data, cb, fail, option);
                } else {
                    model.cgiFacade(requestConstructor.create({
                        url: url,
                        method: method || "GET"
                    }), data, cb, fail, option);
                }
            };
        }
    };
    module.exports = requestmanager;
});;
/**
 * stats
 * @class stats
 * @static
 */
define("/spm_modules/spaseed/1.1.14/lib/stats", function(require, exports, module) {
    var config = require("app/script/config");
    var stats = {
        requestUrl: location.protocol + "//log.hm.baidu.com/hm.gif",
        fixedData: [ "cc=1", "ck=" + (navigator.cookieEnabled ? 1 : 0), "cl=" + window.screen.colorDepth + "-bit", "ds=" + window.screen.width + "x" + window.screen.height, "fl=17.0", "ja=" + (navigator.javaEnabled() ? 1 : 0), "ln=" + navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "", "lo=0", "nv=1", "si=" + config.statsId, "st=1", "v=1.0.94", "lv=2" ],
        _send: function(params) {
            var src = this.requestUrl + "?" + params.concat(this.fixedData).join("&");
            var img = new Image();
            img.onload = img.onerror = img.onabort = function() {
                img.onload = img.onerror = img.onabort = null;
                img = null;
            };
            setTimeout(function() {
                img.src = src;
            }, 500);
        },
        /**
		  * pv,uv
		  * @method pv
		  * 统计页面pv，在页面底部调用即可
		  * @param {number} domReadyTime 
		  * @param {number} loadEventTime 
		  */
        pv: function(domReadyTime, loadEventTime) {
            //请求一
            var params = [ "et=0", "rnd=" + Math.round(Math.random() * 2147483647), "tt=" + encodeURIComponent(document.title) ];
            this._send(params.concat(this.fixedData));
            var self = this;
            setTimeout(function() {
                //请求二
                params = [ "et=87", 'ep={"netAll":1,"netDns":0,"netTcp":0,"srv":39,"dom":' + (domReadyTime ? domReadyTime : 0) + ',"loadEvent":' + (loadEventTime ? loadEventTime : 0) + ',"qid":"","bdDom":0,"bdRun":0,"bdDef":0}', "rnd=" + Math.round(Math.random() * 2147483647), "tt=" + encodeURIComponent(document.title) ];
                self._send(params);
            }, 100);
        },
        /**
		  * 自定义事件
		  * @method trackEvent
		  * 自定义统计事件
		  * @param {string} category 
		  * @param {string} action 
		  * @param {string} label 
		  * @param {string} value 
		  */
        trackEvent: function(category, action, label, value) {
            var str = [ category, action, label, value ];
            var params = [ "et=4", "rnd=" + Math.round(Math.random() * 2147483647), "ep=" + encodeURIComponent(str.join("*")) ];
            this._send(params);
        }
    };
    module.exports = stats;
});;
define("/spm_modules/spaseed/1.1.14/lib/util", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var cookie = require("spm_modules/spaseed/1.1.14/lib/cookie");
    window.console = window.console || {
        log: function() {}
    };
    /**
	 * 工具类
	 * @class util
	 * @static
	 */
    var util = {
        gettk: function(name) {
            var _skey = cookie.get(name);
            if (_skey) {
                var hash = 5381;
                for (var i = 0, len = _skey.length; i < len; ++i) {
                    hash += (hash << 5) + _skey.charCodeAt(i);
                }
                return hash & 2147483647;
            }
        },
        /**
		 * 是否移动手机
		 * @method isMobile
		 * @return {boolean} true|false
		 */
        isMobile: function() {
            return this.isAndroid() || this.isIOS();
        },
        /**
		 * 是否android
		 * @method isAndroid
		 * @return {boolean} true|false
		 */
        isAndroid: function() {
            return /android/i.test(window.navigator.userAgent);
        },
        /**
		 * 是否ios
		 * @method isIOS
		 * @return {boolean} true|false
		 */
        isIOS: function() {
            return /iPod|iPad|iPhone/i.test(window.navigator.userAgent);
        },
        /**
		 * 获取a标签href相对地址
		 * @method getHref
		 * @param  {Object} item dom节点
		 * @return {String} href
		 */
        getHref: function(item) {
            var href = item.getAttribute("href", 2);
            href = href.replace("http://" + location.host, "");
            return href;
        },
        /**
		 * 深度拷贝对象
		 * @method cloneObject
		 * @param  {Object} obj 任意对象
		 * @return {Object} 返回新的拷贝对象
		 */
        cloneObject: function(obj) {
            var o = obj.constructor === Array ? [] : {};
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    o[i] = typeof obj[i] === "object" ? this.cloneObject(obj[i]) : obj[i];
                }
            }
            return o;
        },
        /**
		 * 模拟滚动
		 * @method emulateScroll
		 * @param  {Object} scrollElem 任意对象
		 */
        emulateScroll: function(scrollElem) {
            var startMove = false, initY = 0, containerInitY = 0, containerMoveY = 0;
            scrollElem.on("touchstart", function(evt) {
                startMove = true;
                initY = evt.touches[0].clientY;
            });
            scrollElem.on("touchmove", function(evt) {
                if (startMove) {
                    var disY = evt.touches[0].clientY - initY;
                    containerMoveY = containerInitY + disY;
                    var max = scrollElem.prop("clientHeight") - scrollElem.prop("scrollHeight");
                    var val = 0;
                    if (containerMoveY < 0 && containerMoveY > max) {
                        val = containerMoveY;
                    } else if (containerMoveY > 0) {
                        val = 0;
                        containerMoveY = 0;
                    } else if (containerMoveY < max) {
                        val = max;
                        containerMoveY = max;
                    } else {
                        val = containerMoveY;
                        containerMoveY = containerInitY;
                    }
                    scrollElem.children(":first-child").css("-webkit-transform", "translate3d(0," + val + "px,0)");
                    //把移动的值，写入属性中
                    scrollElem.attr("data-scrolltop", -val);
                    //scrollElem.scrollTop(-val);
                    var evt = $.Event("scroll");
                    scrollElem.trigger(evt);
                }
            });
            scrollElem.on("touchend", function() {
                startMove = false;
                containerInitY = containerMoveY;
                containerMoveY = 0;
            });
        },
        /**
		 * 插入内部样式
		 * @method insertStyle
		 * @param  {string | Array} rules 样式
		 * @param  {string} id 样式节点Id
		 */
        insertStyle: function(rules, id) {
            var _insertStyle = function() {
                var doc = document, node = doc.createElement("style");
                node.type = "text/css";
                id && (node.id = id);
                document.getElementsByTagName("head")[0].appendChild(node);
                if (rules) {
                    if (typeof rules === "object") {
                        rules = rules.join("");
                    }
                    if (node.styleSheet) {
                        node.styleSheet.cssText = rules;
                    } else {
                        node.appendChild(document.createTextNode(rules));
                    }
                }
            };
            if (id) {
                !document.getElementById(id) && _insertStyle();
            } else {
                _insertStyle();
            }
        }
    };
    module.exports = util;
});;
/* Zepto v1.1.2 - zepto event ajax form ie - zeptojs.com/license */
define("/spm_modules/spaseed/1.1.14/lib/zepto", function(require) {
    (function(window, undefined) {
        var Zepto = function() {
            var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter, document = window.document, elementDisplay = {}, classCache = {}, cssNumber = {
                "column-count": 1,
                columns: 1,
                "font-weight": 1,
                "line-height": 1,
                opacity: 1,
                "z-index": 1,
                zoom: 1
            }, fragmentRE = /^\s*<(\w+|!)[^>]*>/, singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rootNodeRE = /^(?:body|html)$/i, capitalRE = /([A-Z])/g, // special attributes that should be get/set via method calls
            methodAttributes = [ "val", "css", "html", "text", "data", "width", "height", "offset" ], adjacencyOperators = [ "after", "prepend", "before", "append" ], table = document.createElement("table"), tableRow = document.createElement("tr"), containers = {
                tr: document.createElement("tbody"),
                tbody: table,
                thead: table,
                tfoot: table,
                td: tableRow,
                th: tableRow,
                "*": document.createElement("div")
            }, readyRE = /complete|loaded|interactive/, classSelectorRE = /^\.([\w-]+)$/, idSelectorRE = /^#([\w-]*)$/, simpleSelectorRE = /^[\w-]*$/, class2type = {}, toString = class2type.toString, zepto = {}, camelize, uniq, tempParent = document.createElement("div"), propMap = {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            };
            zepto.matches = function(element, selector) {
                if (!selector || !element || element.nodeType !== 1) return false;
                var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.matchesSelector;
                if (matchesSelector) return matchesSelector.call(element, selector);
                // fall back to performing a selector:
                var match, parent = element.parentNode, temp = !parent;
                if (temp) (parent = tempParent).appendChild(element);
                match = ~zepto.qsa(parent, selector).indexOf(element);
                temp && tempParent.removeChild(element);
                return match;
            };
            function type(obj) {
                return obj == null ? String(obj) : class2type[toString.call(obj)] || "object";
            }
            function isFunction(value) {
                return type(value) == "function";
            }
            function isWindow(obj) {
                return obj != null && obj == obj.window;
            }
            function isDocument(obj) {
                return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
            }
            function isObject(obj) {
                return type(obj) == "object";
            }
            function isPlainObject(obj) {
                return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype;
            }
            function isArray(value) {
                return value instanceof Array;
            }
            function likeArray(obj) {
                return typeof obj.length == "number";
            }
            function compact(array) {
                return filter.call(array, function(item) {
                    return item != null;
                });
            }
            function flatten(array) {
                return array.length > 0 ? $.fn.concat.apply([], array) : array;
            }
            camelize = function(str) {
                return str.replace(/-+(.)?/g, function(match, chr) {
                    return chr ? chr.toUpperCase() : "";
                });
            };
            function dasherize(str) {
                return str.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
            }
            uniq = function(array) {
                return filter.call(array, function(item, idx) {
                    return array.indexOf(item) == idx;
                });
            };
            function classRE(name) {
                return name in classCache ? classCache[name] : classCache[name] = new RegExp("(^|\\s)" + name + "(\\s|$)");
            }
            function maybeAddPx(name, value) {
                return typeof value == "number" && !cssNumber[dasherize(name)] ? value + "px" : value;
            }
            function defaultDisplay(nodeName) {
                var element, display;
                if (!elementDisplay[nodeName]) {
                    element = document.createElement(nodeName);
                    document.body.appendChild(element);
                    display = getComputedStyle(element, "").getPropertyValue("display");
                    element.parentNode.removeChild(element);
                    display == "none" && (display = "block");
                    elementDisplay[nodeName] = display;
                }
                return elementDisplay[nodeName];
            }
            function children(element) {
                return "children" in element ? slice.call(element.children) : $.map(element.childNodes, function(node) {
                    if (node.nodeType == 1) return node;
                });
            }
            // `$.zepto.fragment` takes a html string and an optional tag name
            // to generate DOM nodes nodes from the given html string.
            // The generated DOM nodes are returned as an array.
            // This function can be overriden in plugins for example to make
            // it compatible with browsers that don't support the DOM fully.
            zepto.fragment = function(html, name, properties) {
                var dom, nodes, container;
                // A special case optimization for a single tag
                if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1));
                if (!dom) {
                    if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>");
                    if (name === undefined) name = fragmentRE.test(html) && RegExp.$1;
                    if (!(name in containers)) name = "*";
                    container = containers[name];
                    container.innerHTML = "" + html;
                    dom = $.each(slice.call(container.childNodes), function() {
                        container.removeChild(this);
                    });
                }
                if (isPlainObject(properties)) {
                    nodes = $(dom);
                    $.each(properties, function(key, value) {
                        if (methodAttributes.indexOf(key) > -1) nodes[key](value); else nodes.attr(key, value);
                    });
                }
                return dom;
            };
            // `$.zepto.Z` swaps out the prototype of the given `dom` array
            // of nodes with `$.fn` and thus supplying all the Zepto functions
            // to the array. Note that `__proto__` is not supported on Internet
            // Explorer. This method can be overriden in plugins.
            zepto.Z = function(dom, selector) {
                dom = dom || [];
                dom.__proto__ = $.fn;
                dom.selector = selector || "";
                return dom;
            };
            // `$.zepto.isZ` should return `true` if the given object is a Zepto
            // collection. This method can be overriden in plugins.
            zepto.isZ = function(object) {
                return object instanceof zepto.Z;
            };
            // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
            // takes a CSS selector and an optional context (and handles various
            // special cases).
            // This method can be overriden in plugins.
            zepto.init = function(selector, context) {
                var dom;
                // If nothing given, return an empty Zepto collection
                if (!selector) return zepto.Z(); else if (typeof selector == "string") {
                    selector = selector.trim();
                    // If it's a html fragment, create nodes from it
                    // Note: In both Chrome 21 and Firefox 15, DOM error 12
                    // is thrown if the fragment doesn't begin with <
                    if (selector[0] == "<" && fragmentRE.test(selector)) dom = zepto.fragment(selector, RegExp.$1, context), 
                    selector = null; else if (context !== undefined) return $(context).find(selector); else dom = zepto.qsa(document, selector);
                } else if (isFunction(selector)) return $(document).ready(selector); else if (zepto.isZ(selector)) return selector; else {
                    // normalize array if an array of nodes is given
                    if (isArray(selector)) dom = compact(selector); else if (isObject(selector)) dom = [ selector ], 
                    selector = null; else if (fragmentRE.test(selector)) dom = zepto.fragment(selector.trim(), RegExp.$1, context), 
                    selector = null; else if (context !== undefined) return $(context).find(selector); else dom = zepto.qsa(document, selector);
                }
                // create a new Zepto collection from the nodes found
                return zepto.Z(dom, selector);
            };
            // `$` will be the base `Zepto` object. When calling this
            // function just call `$.zepto.init, which makes the implementation
            // details of selecting nodes and creating Zepto collections
            // patchable in plugins.
            $ = function(selector, context) {
                return zepto.init(selector, context);
            };
            function extend(target, source, deep) {
                for (key in source) if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
                    if (isPlainObject(source[key]) && !isPlainObject(target[key])) target[key] = {};
                    if (isArray(source[key]) && !isArray(target[key])) target[key] = [];
                    extend(target[key], source[key], deep);
                } else if (source[key] !== undefined) target[key] = source[key];
            }
            // Copy all but undefined properties from one or more
            // objects to the `target` object.
            $.extend = function(target) {
                var deep, args = slice.call(arguments, 1);
                if (typeof target == "boolean") {
                    deep = target;
                    target = args.shift();
                }
                args.forEach(function(arg) {
                    extend(target, arg, deep);
                });
                return target;
            };
            // `$.zepto.qsa` is Zepto's CSS selector implementation which
            // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
            // This method can be overriden in plugins.
            zepto.qsa = function(element, selector) {
                var found, maybeID = selector[0] == "#", maybeClass = !maybeID && selector[0] == ".", nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
                isSimple = simpleSelectorRE.test(nameOnly);
                // If it's simple, it could be a class
                // Or a tag
                return isDocument(element) && isSimple && maybeID ? (found = element.getElementById(nameOnly)) ? [ found ] : [] : element.nodeType !== 1 && element.nodeType !== 9 ? [] : slice.call(isSimple && !maybeID ? maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector) : element.querySelectorAll(selector));
            };
            function filtered(nodes, selector) {
                return selector == null ? $(nodes) : $(nodes).filter(selector);
            }
            $.contains = function(parent, node) {
                return parent !== node && parent.contains(node);
            };
            function funcArg(context, arg, idx, payload) {
                return isFunction(arg) ? arg.call(context, idx, payload) : arg;
            }
            function setAttribute(node, name, value) {
                value == null ? node.removeAttribute(name) : node.setAttribute(name, value);
            }
            // access className property while respecting SVGAnimatedString
            function className(node, value) {
                var klass = node.className, svg = klass && klass.baseVal !== undefined;
                if (value === undefined) return svg ? klass.baseVal : klass;
                svg ? klass.baseVal = value : node.className = value;
            }
            // "true"  => true
            // "false" => false
            // "null"  => null
            // "42"    => 42
            // "42.5"  => 42.5
            // "08"    => "08"
            // JSON    => parse if valid
            // String  => self
            function deserializeValue(value) {
                var num;
                try {
                    return value ? value == "true" || (value == "false" ? false : value == "null" ? null : !/^0/.test(value) && !isNaN(num = Number(value)) ? num : /^[\[\{]/.test(value) ? $.parseJSON(value) : value) : value;
                } catch (e) {
                    return value;
                }
            }
            $.type = type;
            $.isFunction = isFunction;
            $.isWindow = isWindow;
            $.isArray = isArray;
            $.isPlainObject = isPlainObject;
            $.isEmptyObject = function(obj) {
                var name;
                for (name in obj) return false;
                return true;
            };
            $.inArray = function(elem, array, i) {
                return emptyArray.indexOf.call(array, elem, i);
            };
            $.camelCase = camelize;
            $.trim = function(str) {
                return str == null ? "" : String.prototype.trim.call(str);
            };
            // plugin compatibility
            $.uuid = 0;
            $.support = {};
            $.expr = {};
            $.map = function(elements, callback) {
                var value, values = [], i, key;
                if (likeArray(elements)) for (i = 0; i < elements.length; i++) {
                    value = callback(elements[i], i);
                    if (value != null) values.push(value);
                } else for (key in elements) {
                    value = callback(elements[key], key);
                    if (value != null) values.push(value);
                }
                return flatten(values);
            };
            $.each = function(elements, callback) {
                var i, key;
                if (likeArray(elements)) {
                    for (i = 0; i < elements.length; i++) if (callback.call(elements[i], i, elements[i]) === false) return elements;
                } else {
                    for (key in elements) if (callback.call(elements[key], key, elements[key]) === false) return elements;
                }
                return elements;
            };
            $.grep = function(elements, callback) {
                return filter.call(elements, callback);
            };
            if (window.JSON) $.parseJSON = JSON.parse;
            // Populate the class2type map
            $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
                class2type["[object " + name + "]"] = name.toLowerCase();
            });
            // Define methods that will be available on all
            // Zepto collections
            $.fn = {
                // Because a collection acts like an array
                // copy over these useful array functions.
                forEach: emptyArray.forEach,
                reduce: emptyArray.reduce,
                push: emptyArray.push,
                sort: emptyArray.sort,
                indexOf: emptyArray.indexOf,
                concat: emptyArray.concat,
                // `map` and `slice` in the jQuery API work differently
                // from their array counterparts
                map: function(fn) {
                    return $($.map(this, function(el, i) {
                        return fn.call(el, i, el);
                    }));
                },
                slice: function() {
                    return $(slice.apply(this, arguments));
                },
                ready: function(callback) {
                    // need to check if document.body exists for IE as that browser reports
                    // document ready when it hasn't yet created the body element
                    if (readyRE.test(document.readyState) && document.body) callback($); else document.addEventListener("DOMContentLoaded", function() {
                        callback($);
                    }, false);
                    return this;
                },
                get: function(idx) {
                    return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
                },
                toArray: function() {
                    return this.get();
                },
                size: function() {
                    return this.length;
                },
                remove: function() {
                    return this.each(function() {
                        if (this.parentNode != null) this.parentNode.removeChild(this);
                    });
                },
                each: function(callback) {
                    emptyArray.every.call(this, function(el, idx) {
                        return callback.call(el, idx, el) !== false;
                    });
                    return this;
                },
                filter: function(selector) {
                    if (isFunction(selector)) return this.not(this.not(selector));
                    return $(filter.call(this, function(element) {
                        return zepto.matches(element, selector);
                    }));
                },
                add: function(selector, context) {
                    return $(uniq(this.concat($(selector, context))));
                },
                is: function(selector) {
                    return this.length > 0 && zepto.matches(this[0], selector);
                },
                not: function(selector) {
                    var nodes = [];
                    if (isFunction(selector) && selector.call !== undefined) this.each(function(idx) {
                        if (!selector.call(this, idx)) nodes.push(this);
                    }); else {
                        var excludes = typeof selector == "string" ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? slice.call(selector) : $(selector);
                        this.forEach(function(el) {
                            if (excludes.indexOf(el) < 0) nodes.push(el);
                        });
                    }
                    return $(nodes);
                },
                has: function(selector) {
                    return this.filter(function() {
                        return isObject(selector) ? $.contains(this, selector) : $(this).find(selector).size();
                    });
                },
                eq: function(idx) {
                    return idx === -1 ? this.slice(idx) : this.slice(idx, +idx + 1);
                },
                first: function() {
                    var el = this[0];
                    return el && !isObject(el) ? el : $(el);
                },
                last: function() {
                    var el = this[this.length - 1];
                    return el && !isObject(el) ? el : $(el);
                },
                find: function(selector) {
                    var result, $this = this;
                    if (typeof selector == "object") result = $(selector).filter(function() {
                        var node = this;
                        return emptyArray.some.call($this, function(parent) {
                            return $.contains(parent, node);
                        });
                    }); else if (this.length == 1) result = $(zepto.qsa(this[0], selector)); else result = this.map(function() {
                        return zepto.qsa(this, selector);
                    });
                    return result;
                },
                closest: function(selector, context) {
                    var node = this[0], collection = false;
                    if (typeof selector == "object") collection = $(selector);
                    while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector))) node = node !== context && !isDocument(node) && node.parentNode;
                    return $(node);
                },
                parents: function(selector) {
                    var ancestors = [], nodes = this;
                    while (nodes.length > 0) nodes = $.map(nodes, function(node) {
                        if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
                            ancestors.push(node);
                            return node;
                        }
                    });
                    return filtered(ancestors, selector);
                },
                parent: function(selector) {
                    return filtered(uniq(this.pluck("parentNode")), selector);
                },
                children: function(selector) {
                    return filtered(this.map(function() {
                        return children(this);
                    }), selector);
                },
                contents: function() {
                    return this.map(function() {
                        return slice.call(this.childNodes);
                    });
                },
                siblings: function(selector) {
                    return filtered(this.map(function(i, el) {
                        return filter.call(children(el.parentNode), function(child) {
                            return child !== el;
                        });
                    }), selector);
                },
                empty: function() {
                    return this.each(function() {
                        this.innerHTML = "";
                    });
                },
                // `pluck` is borrowed from Prototype.js
                pluck: function(property) {
                    return $.map(this, function(el) {
                        return el[property];
                    });
                },
                show: function() {
                    return this.each(function() {
                        this.style.display == "none" && (this.style.display = "");
                        if (getComputedStyle(this, "").getPropertyValue("display") == "none") this.style.display = defaultDisplay(this.nodeName);
                    });
                },
                replaceWith: function(newContent) {
                    return this.before(newContent).remove();
                },
                wrap: function(structure) {
                    var func = isFunction(structure);
                    if (this[0] && !func) var dom = $(structure).get(0), clone = dom.parentNode || this.length > 1;
                    return this.each(function(index) {
                        $(this).wrapAll(func ? structure.call(this, index) : clone ? dom.cloneNode(true) : dom);
                    });
                },
                wrapAll: function(structure) {
                    if (this[0]) {
                        $(this[0]).before(structure = $(structure));
                        var children;
                        // drill down to the inmost element
                        while ((children = structure.children()).length) structure = children.first();
                        $(structure).append(this);
                    }
                    return this;
                },
                wrapInner: function(structure) {
                    var func = isFunction(structure);
                    return this.each(function(index) {
                        var self = $(this), contents = self.contents(), dom = func ? structure.call(this, index) : structure;
                        contents.length ? contents.wrapAll(dom) : self.append(dom);
                    });
                },
                unwrap: function() {
                    this.parent().each(function() {
                        $(this).replaceWith($(this).children());
                    });
                    return this;
                },
                clone: function() {
                    return this.map(function() {
                        return this.cloneNode(true);
                    });
                },
                hide: function() {
                    return this.css("display", "none");
                },
                toggle: function(setting) {
                    return this.each(function() {
                        var el = $(this);
                        (setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide();
                    });
                },
                prev: function(selector) {
                    return $(this.pluck("previousElementSibling")).filter(selector || "*");
                },
                next: function(selector) {
                    return $(this.pluck("nextElementSibling")).filter(selector || "*");
                },
                html: function(html) {
                    return arguments.length === 0 ? this.length > 0 ? this[0].innerHTML : null : this.each(function(idx) {
                        var originHtml = this.innerHTML;
                        $(this).empty().append(funcArg(this, html, idx, originHtml));
                    });
                },
                text: function(text) {
                    return arguments.length === 0 ? this.length > 0 ? this[0].textContent : null : this.each(function() {
                        this.textContent = text === undefined ? "" : "" + text;
                    });
                },
                attr: function(name, value) {
                    var result;
                    return typeof name == "string" && value === undefined ? this.length == 0 || this[0].nodeType !== 1 ? undefined : name == "value" && this[0].nodeName == "INPUT" ? this.val() : !(result = this[0].getAttribute(name)) && name in this[0] ? this[0][name] : result : this.each(function(idx) {
                        if (this.nodeType !== 1) return;
                        if (isObject(name)) for (key in name) setAttribute(this, key, name[key]); else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
                    });
                },
                removeAttr: function(name) {
                    return this.each(function() {
                        this.nodeType === 1 && setAttribute(this, name);
                    });
                },
                prop: function(name, value) {
                    name = propMap[name] || name;
                    return value === undefined ? this[0] && this[0][name] : this.each(function(idx) {
                        this[name] = funcArg(this, value, idx, this[name]);
                    });
                },
                data: function(name, value) {
                    var data = this.attr("data-" + name.replace(capitalRE, "-$1").toLowerCase(), value);
                    return data !== null ? deserializeValue(data) : undefined;
                },
                val: function(value) {
                    return arguments.length === 0 ? this[0] && (this[0].multiple ? $(this[0]).find("option").filter(function() {
                        return this.selected;
                    }).pluck("value") : this[0].value) : this.each(function(idx) {
                        this.value = funcArg(this, value, idx, this.value);
                    });
                },
                offset: function(coordinates) {
                    if (coordinates) return this.each(function(index) {
                        var $this = $(this), coords = funcArg(this, coordinates, index, $this.offset()), parentOffset = $this.offsetParent().offset(), props = {
                            top: coords.top - parentOffset.top,
                            left: coords.left - parentOffset.left
                        };
                        if ($this.css("position") == "static") props["position"] = "relative";
                        $this.css(props);
                    });
                    if (this.length == 0) return null;
                    var obj = this[0].getBoundingClientRect();
                    return {
                        left: obj.left + window.pageXOffset,
                        top: obj.top + window.pageYOffset,
                        width: Math.round(obj.width),
                        height: Math.round(obj.height)
                    };
                },
                css: function(property, value) {
                    if (arguments.length < 2) {
                        var element = this[0], computedStyle = getComputedStyle(element, "");
                        if (!element) return;
                        if (typeof property == "string") {
                            //return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
                            //edit by liyi at 20140219 to fix css problem
                            return element.style[camelize(property)] || computedStyle[camelize(property)];
                        } else if (isArray(property)) {
                            var props = {};
                            $.each(isArray(property) ? property : [ property ], function(_, prop) {
                                props[prop] = element.style[camelize(prop)] || computedStyle.getPropertyValue(prop);
                            });
                            return props;
                        }
                    }
                    var css = "";
                    if (type(property) == "string") {
                        if (!value && value !== 0) this.each(function() {
                            this.style.removeProperty(dasherize(property));
                        }); else css = dasherize(property) + ":" + maybeAddPx(property, value);
                    } else {
                        for (key in property) if (!property[key] && property[key] !== 0) this.each(function() {
                            this.style.removeProperty(dasherize(key));
                        }); else css += dasherize(key) + ":" + maybeAddPx(key, property[key]) + ";";
                    }
                    return this.each(function() {
                        this.style.cssText += ";" + css;
                    });
                },
                index: function(element) {
                    return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0]);
                },
                hasClass: function(name) {
                    if (!name) return false;
                    return emptyArray.some.call(this, function(el) {
                        return this.test(className(el));
                    }, classRE(name));
                },
                addClass: function(name) {
                    if (!name) return this;
                    return this.each(function(idx) {
                        classList = [];
                        var cls = className(this), newName = funcArg(this, name, idx, cls);
                        newName.split(/\s+/g).forEach(function(klass) {
                            if (!$(this).hasClass(klass)) classList.push(klass);
                        }, this);
                        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "));
                    });
                },
                removeClass: function(name) {
                    return this.each(function(idx) {
                        if (name === undefined) return className(this, "");
                        classList = className(this);
                        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass) {
                            classList = classList.replace(classRE(klass), " ");
                        });
                        className(this, classList.trim());
                    });
                },
                toggleClass: function(name, when) {
                    if (!name) return this;
                    return this.each(function(idx) {
                        var $this = $(this), names = funcArg(this, name, idx, className(this));
                        names.split(/\s+/g).forEach(function(klass) {
                            (when === undefined ? !$this.hasClass(klass) : when) ? $this.addClass(klass) : $this.removeClass(klass);
                        });
                    });
                },
                scrollTop: function(value) {
                    if (!this.length) return;
                    var hasScrollTop = "scrollTop" in this[0];
                    if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset;
                    return this.each(hasScrollTop ? function() {
                        this.scrollTop = value;
                    } : function() {
                        this.scrollTo(this.scrollX, value);
                    });
                },
                scrollLeft: function(value) {
                    if (!this.length) return;
                    var hasScrollLeft = "scrollLeft" in this[0];
                    if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset;
                    return this.each(hasScrollLeft ? function() {
                        this.scrollLeft = value;
                    } : function() {
                        this.scrollTo(value, this.scrollY);
                    });
                },
                position: function() {
                    if (!this.length) return;
                    var elem = this[0], // Get *real* offsetParent
                    offsetParent = this.offsetParent(), // Get correct offsets
                    offset = this.offset(), parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : offsetParent.offset();
                    // Subtract element margins
                    // note: when an element has margin: auto the offsetLeft and marginLeft
                    // are the same in Safari causing offset.left to incorrectly be 0
                    offset.top -= parseFloat($(elem).css("margin-top")) || 0;
                    offset.left -= parseFloat($(elem).css("margin-left")) || 0;
                    // Add offsetParent borders
                    parentOffset.top += parseFloat($(offsetParent[0]).css("border-top-width")) || 0;
                    parentOffset.left += parseFloat($(offsetParent[0]).css("border-left-width")) || 0;
                    // Subtract the two offsets
                    return {
                        top: offset.top - parentOffset.top,
                        left: offset.left - parentOffset.left
                    };
                },
                offsetParent: function() {
                    return this.map(function() {
                        var parent = this.offsetParent || document.body;
                        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static") parent = parent.offsetParent;
                        return parent;
                    });
                }
            };
            // for now
            $.fn.detach = $.fn.remove;
            [ "width", "height" ].forEach(function(dimension) {
                var dimensionProperty = dimension.replace(/./, function(m) {
                    return m[0].toUpperCase();
                });
                $.fn[dimension] = function(value) {
                    var offset, el = this[0];
                    if (value === undefined) return isWindow(el) ? el["inner" + dimensionProperty] : isDocument(el) ? el.documentElement["scroll" + dimensionProperty] : (offset = this.offset()) && offset[dimension]; else return this.each(function(idx) {
                        el = $(this);
                        el.css(dimension, funcArg(this, value, idx, el[dimension]()));
                    });
                };
            });
            function traverseNode(node, fun) {
                fun(node);
                for (var key in node.childNodes) traverseNode(node.childNodes[key], fun);
            }
            // Generate the `after`, `prepend`, `before`, `append`,
            // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
            adjacencyOperators.forEach(function(operator, operatorIndex) {
                var inside = operatorIndex % 2;
                //=> prepend, append
                $.fn[operator] = function() {
                    // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
                    var argType, nodes = $.map(arguments, function(arg) {
                        argType = type(arg);
                        return argType == "object" || argType == "array" || arg == null ? arg : zepto.fragment(arg);
                    }), parent, copyByClone = this.length > 1;
                    if (nodes.length < 1) return this;
                    return this.each(function(_, target) {
                        parent = inside ? target : target.parentNode;
                        // convert all methods to a "before" operation
                        target = operatorIndex == 0 ? target.nextSibling : operatorIndex == 1 ? target.firstChild : operatorIndex == 2 ? target : null;
                        nodes.forEach(function(node) {
                            if (copyByClone) node = node.cloneNode(true); else if (!parent) return $(node).remove();
                            traverseNode(parent.insertBefore(node, target), function(el) {
                                if (el.nodeName != null && el.nodeName.toUpperCase() === "SCRIPT" && (!el.type || el.type === "text/javascript") && !el.src) window["eval"].call(window, el.innerHTML);
                            });
                        });
                    });
                };
                // after    => insertAfter
                // prepend  => prependTo
                // before   => insertBefore
                // append   => appendTo
                $.fn[inside ? operator + "To" : "insert" + (operatorIndex ? "Before" : "After")] = function(html) {
                    $(html)[operator](this);
                    return this;
                };
            });
            zepto.Z.prototype = $.fn;
            // Export internal API functions in the `$.zepto` namespace
            zepto.uniq = uniq;
            zepto.deserializeValue = deserializeValue;
            $.zepto = zepto;
            return $;
        }();
        window.Zepto = Zepto;
        window.$ === undefined && (window.$ = Zepto);
        (function($) {
            var $$ = $.zepto.qsa, _zid = 1, undefined, slice = Array.prototype.slice, isFunction = $.isFunction, isString = function(obj) {
                return typeof obj == "string";
            }, handlers = {}, specialEvents = {}, focusinSupported = "onfocusin" in window, focus = {
                focus: "focusin",
                blur: "focusout"
            }, hover = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            };
            specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = "MouseEvents";
            function zid(element) {
                return element._zid || (element._zid = _zid++);
            }
            function findHandlers(element, event, fn, selector) {
                event = parse(event);
                if (event.ns) var matcher = matcherFor(event.ns);
                return (handlers[zid(element)] || []).filter(function(handler) {
                    return handler && (!event.e || handler.e == event.e) && (!event.ns || matcher.test(handler.ns)) && (!fn || zid(handler.fn) === zid(fn)) && (!selector || handler.sel == selector);
                });
            }
            function parse(event) {
                var parts = ("" + event).split(".");
                return {
                    e: parts[0],
                    ns: parts.slice(1).sort().join(" ")
                };
            }
            function matcherFor(ns) {
                return new RegExp("(?:^| )" + ns.replace(" ", " .* ?") + "(?: |$)");
            }
            function eventCapture(handler, captureSetting) {
                return handler.del && (!focusinSupported && handler.e in focus) || !!captureSetting;
            }
            function realEvent(type) {
                return hover[type] || focusinSupported && focus[type] || type;
            }
            function add(element, events, fn, data, selector, delegator, capture) {
                var id = zid(element), set = handlers[id] || (handlers[id] = []);
                events.split(/\s/).forEach(function(event) {
                    if (event == "ready") return $(document).ready(fn);
                    var handler = parse(event);
                    handler.fn = fn;
                    handler.sel = selector;
                    // emulate mouseenter, mouseleave
                    if (handler.e in hover) fn = function(e) {
                        var related = e.relatedTarget;
                        if (!related || related !== this && !$.contains(this, related)) return handler.fn.apply(this, arguments);
                    };
                    handler.del = delegator;
                    var callback = delegator || fn;
                    handler.proxy = function(e) {
                        e = compatible(e);
                        if (e.isImmediatePropagationStopped()) return;
                        e.data = data;
                        var result = callback.apply(element, e._args == undefined ? [ e ] : [ e ].concat(e._args));
                        if (result === false) e.preventDefault(), e.stopPropagation();
                        return result;
                    };
                    handler.i = set.length;
                    set.push(handler);
                    if ("addEventListener" in element) element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
                });
            }
            function remove(element, events, fn, selector, capture) {
                var id = zid(element);
                (events || "").split(/\s/).forEach(function(event) {
                    findHandlers(element, event, fn, selector).forEach(function(handler) {
                        delete handlers[id][handler.i];
                        if ("removeEventListener" in element) element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
                    });
                });
            }
            $.event = {
                add: add,
                remove: remove
            };
            $.proxy = function(fn, context) {
                if (isFunction(fn)) {
                    var proxyFn = function() {
                        return fn.apply(context, arguments);
                    };
                    proxyFn._zid = zid(fn);
                    return proxyFn;
                } else if (isString(context)) {
                    return $.proxy(fn[context], fn);
                } else {
                    throw new TypeError("expected function");
                }
            };
            $.fn.bind = function(event, data, callback) {
                return this.on(event, data, callback);
            };
            $.fn.unbind = function(event, callback) {
                return this.off(event, callback);
            };
            $.fn.one = function(event, selector, data, callback) {
                return this.on(event, selector, data, callback, 1);
            };
            var returnTrue = function() {
                return true;
            }, returnFalse = function() {
                return false;
            }, ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/, eventMethods = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
            function compatible(event, source) {
                if (source || !event.isDefaultPrevented) {
                    source || (source = event);
                    $.each(eventMethods, function(name, predicate) {
                        var sourceMethod = source[name];
                        event[name] = function() {
                            this[predicate] = returnTrue;
                            return sourceMethod && sourceMethod.apply(source, arguments);
                        };
                        event[predicate] = returnFalse;
                    });
                    if (source.defaultPrevented !== undefined ? source.defaultPrevented : "returnValue" in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) event.isDefaultPrevented = returnTrue;
                }
                return event;
            }
            function createProxy(event) {
                var key, proxy = {
                    originalEvent: event
                };
                for (key in event) if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key];
                return compatible(proxy, event);
            }
            $.fn.delegate = function(selector, event, callback) {
                return this.on(event, selector, callback);
            };
            $.fn.undelegate = function(selector, event, callback) {
                return this.off(event, selector, callback);
            };
            $.fn.live = function(event, callback) {
                $(document.body).delegate(this.selector, event, callback);
                return this;
            };
            $.fn.die = function(event, callback) {
                $(document.body).undelegate(this.selector, event, callback);
                return this;
            };
            $.fn.on = function(event, selector, data, callback, one) {
                var autoRemove, delegator, $this = this;
                if (event && !isString(event)) {
                    $.each(event, function(type, fn) {
                        $this.on(type, selector, data, fn, one);
                    });
                    return $this;
                }
                if (!isString(selector) && !isFunction(callback) && callback !== false) callback = data, 
                data = selector, selector = undefined;
                if (isFunction(data) || data === false) callback = data, data = undefined;
                if (callback === false) callback = returnFalse;
                return $this.each(function(_, element) {
                    if (one) autoRemove = function(e) {
                        remove(element, e.type, callback);
                        return callback.apply(this, arguments);
                    };
                    if (selector) delegator = function(e) {
                        var evt, match = $(e.target).closest(selector, element).get(0);
                        if (match && match !== element) {
                            evt = $.extend(createProxy(e), {
                                currentTarget: match,
                                liveFired: element
                            });
                            return (autoRemove || callback).apply(match, [ evt ].concat(slice.call(arguments, 1)));
                        }
                    };
                    add(element, event, callback, data, selector, delegator || autoRemove);
                });
            };
            $.fn.off = function(event, selector, callback) {
                var $this = this;
                if (event && !isString(event)) {
                    $.each(event, function(type, fn) {
                        $this.off(type, selector, fn);
                    });
                    return $this;
                }
                if (!isString(selector) && !isFunction(callback) && callback !== false) callback = selector, 
                selector = undefined;
                if (callback === false) callback = returnFalse;
                return $this.each(function() {
                    remove(this, event, callback, selector);
                });
            };
            $.fn.trigger = function(event, args) {
                event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event);
                event._args = args;
                return this.each(function() {
                    // items in the collection might not be DOM elements
                    if ("dispatchEvent" in this) this.dispatchEvent(event); else $(this).triggerHandler(event, args);
                });
            };
            // triggers event handlers on current element just as if an event occurred,
            // doesn't trigger an actual event, doesn't bubble
            $.fn.triggerHandler = function(event, args) {
                var e, result;
                this.each(function(i, element) {
                    e = createProxy(isString(event) ? $.Event(event) : event);
                    e._args = args;
                    e.target = element;
                    $.each(findHandlers(element, event.type || event), function(i, handler) {
                        result = handler.proxy(e);
                        if (e.isImmediatePropagationStopped()) return false;
                    });
                });
                return result;
            };
            ("focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select keydown keypress keyup error").split(" ").forEach(function(event) {
                $.fn[event] = function(callback) {
                    return callback ? this.bind(event, callback) : this.trigger(event);
                };
            });
            [ "focus", "blur" ].forEach(function(name) {
                $.fn[name] = function(callback) {
                    if (callback) this.bind(name, callback); else this.each(function() {
                        try {
                            this[name]();
                        } catch (e) {}
                    });
                    return this;
                };
            });
            $.Event = function(type, props) {
                if (!isString(type)) props = type, type = props.type;
                var event = document.createEvent(specialEvents[type] || "Events"), bubbles = true;
                if (props) for (var name in props) name == "bubbles" ? bubbles = !!props[name] : event[name] = props[name];
                event.initEvent(type, bubbles, true);
                return compatible(event);
            };
        })(Zepto);
        (function($) {
            var jsonpID = 0, document = window.document, key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, scriptTypeRE = /^(?:text|application)\/javascript/i, xmlTypeRE = /^(?:text|application)\/xml/i, jsonType = "application/json", htmlType = "text/html", blankRE = /^\s*$/;
            // trigger a custom event and return false if it was cancelled
            function triggerAndReturn(context, eventName, data) {
                var event = $.Event(eventName);
                $(context).trigger(event, data);
                return !event.isDefaultPrevented();
            }
            // trigger an Ajax "global" event
            function triggerGlobal(settings, context, eventName, data) {
                if (settings.global) return triggerAndReturn(context || document, eventName, data);
            }
            // Number of active Ajax requests
            $.active = 0;
            function ajaxStart(settings) {
                if (settings.global && $.active++ === 0) triggerGlobal(settings, null, "ajaxStart");
            }
            function ajaxStop(settings) {
                if (settings.global && !--$.active) triggerGlobal(settings, null, "ajaxStop");
            }
            // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
            function ajaxBeforeSend(xhr, settings) {
                var context = settings.context;
                if (settings.beforeSend.call(context, xhr, settings) === false || triggerGlobal(settings, context, "ajaxBeforeSend", [ xhr, settings ]) === false) return false;
                triggerGlobal(settings, context, "ajaxSend", [ xhr, settings ]);
            }
            function ajaxSuccess(data, xhr, settings, deferred) {
                var context = settings.context, status = "success";
                settings.success.call(context, data, status, xhr);
                if (deferred) deferred.resolveWith(context, [ data, status, xhr ]);
                triggerGlobal(settings, context, "ajaxSuccess", [ xhr, settings, data ]);
                ajaxComplete(status, xhr, settings);
            }
            // type: "timeout", "error", "abort", "parsererror"
            function ajaxError(error, type, xhr, settings, deferred) {
                var context = settings.context;
                settings.error.call(context, xhr, type, error);
                if (deferred) deferred.rejectWith(context, [ xhr, type, error ]);
                triggerGlobal(settings, context, "ajaxError", [ xhr, settings, error || type ]);
                ajaxComplete(type, xhr, settings);
            }
            // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
            function ajaxComplete(status, xhr, settings) {
                var context = settings.context;
                settings.complete.call(context, xhr, status);
                triggerGlobal(settings, context, "ajaxComplete", [ xhr, settings ]);
                ajaxStop(settings);
            }
            // Empty function, used as default callback
            function empty() {}
            $.ajaxJSONP = function(options, deferred) {
                if (!("type" in options)) return $.ajax(options);
                var _callbackName = options.jsonpCallback, callbackName = ($.isFunction(_callbackName) ? _callbackName() : _callbackName) || "jsonp" + ++jsonpID, script = document.createElement("script"), originalCallback = window[callbackName], responseData, abort = function(errorType) {
                    $(script).triggerHandler("error", errorType || "abort");
                }, xhr = {
                    abort: abort
                }, abortTimeout;
                if (deferred) deferred.promise(xhr);
                $(script).on("load error", function(e, errorType) {
                    clearTimeout(abortTimeout);
                    $(script).off().remove();
                    if (e.type == "error" || !responseData) {
                        ajaxError(null, errorType || "error", xhr, options, deferred);
                    } else {
                        ajaxSuccess(responseData[0], xhr, options, deferred);
                    }
                    window[callbackName] = originalCallback;
                    if (responseData && $.isFunction(originalCallback)) originalCallback(responseData[0]);
                    originalCallback = responseData = undefined;
                });
                if (ajaxBeforeSend(xhr, options) === false) {
                    abort("abort");
                    return xhr;
                }
                window[callbackName] = function() {
                    responseData = arguments;
                };
                script.src = options.url.replace(/=\?/, "=" + callbackName);
                document.head.appendChild(script);
                if (options.timeout > 0) abortTimeout = setTimeout(function() {
                    abort("timeout");
                }, options.timeout);
                return xhr;
            };
            $.ajaxSettings = {
                // Default type of request
                type: "GET",
                // Callback that is executed before request
                beforeSend: empty,
                // Callback that is executed if the request succeeds
                success: empty,
                // Callback that is executed the the server drops error
                error: empty,
                // Callback that is executed on request complete (both: error and success)
                complete: empty,
                // The context for the callbacks
                context: null,
                // Whether to trigger "global" Ajax events
                global: true,
                // Transport
                xhr: function() {
                    return new window.XMLHttpRequest();
                },
                // MIME types mapping
                // IIS returns Javascript as "application/x-javascript"
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: jsonType,
                    xml: "application/xml, text/xml",
                    html: htmlType,
                    text: "text/plain"
                },
                // Whether the request is to another domain
                crossDomain: false,
                // Default timeout
                timeout: 0,
                // Whether data should be serialized to string
                processData: true,
                // Whether the browser should be allowed to cache GET responses
                cache: true
            };
            function mimeToDataType(mime) {
                if (mime) mime = mime.split(";", 2)[0];
                return mime && (mime == htmlType ? "html" : mime == jsonType ? "json" : scriptTypeRE.test(mime) ? "script" : xmlTypeRE.test(mime) && "xml") || "text";
            }
            function appendQuery(url, query) {
                if (query == "") return url;
                return (url + "&" + query).replace(/[&?]{1,2}/, "?");
            }
            // serialize payload and append it to the URL for GET requests
            function serializeData(options) {
                if (options.processData && options.data && $.type(options.data) != "string") options.data = $.param(options.data, options.traditional);
                if (options.data && (!options.type || options.type.toUpperCase() == "GET")) options.url = appendQuery(options.url, options.data), 
                options.data = undefined;
            }
            $.ajax = function(options) {
                var settings = $.extend({}, options || {}), deferred = $.Deferred && $.Deferred();
                for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key];
                ajaxStart(settings);
                if (!settings.crossDomain) settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host;
                if (!settings.url) settings.url = window.location.toString();
                serializeData(settings);
                if (settings.cache === false) settings.url = appendQuery(settings.url, "_=" + Date.now());
                var dataType = settings.dataType, hasPlaceholder = /=\?/.test(settings.url);
                if (dataType == "jsonp" || hasPlaceholder) {
                    if (!hasPlaceholder) settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === false ? "" : "callback=?");
                    return $.ajaxJSONP(settings, deferred);
                }
                var mime = settings.accepts[dataType], headers = {}, setHeader = function(name, value) {
                    headers[name.toLowerCase()] = [ name, value ];
                }, protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), nativeSetHeader = xhr.setRequestHeader, abortTimeout;
                if (deferred) deferred.promise(xhr);
                if (!settings.crossDomain) setHeader("X-Requested-With", "XMLHttpRequest");
                setHeader("Accept", mime || "*/*");
                if (mime = settings.mimeType || mime) {
                    if (mime.indexOf(",") > -1) mime = mime.split(",", 2)[0];
                    xhr.overrideMimeType && xhr.overrideMimeType(mime);
                }
                if (settings.contentType || settings.contentType !== false && settings.data && settings.type.toUpperCase() != "GET") setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded");
                if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name]);
                xhr.setRequestHeader = setHeader;
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        clearTimeout(abortTimeout);
                        var result, error = false;
                        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
                            dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type"));
                            result = xhr.responseText;
                            try {
                                // http://perfectionkills.com/global-eval-what-are-the-options/
                                if (dataType == "script") (1, eval)(result); else if (dataType == "xml") result = xhr.responseXML; else if (dataType == "json") result = blankRE.test(result) ? null : $.parseJSON(result);
                            } catch (e) {
                                error = e;
                            }
                            if (error) ajaxError(error, "parsererror", xhr, settings, deferred); else ajaxSuccess(result, xhr, settings, deferred);
                        } else {
                            ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred);
                        }
                    }
                };
                if (ajaxBeforeSend(xhr, settings) === false) {
                    xhr.abort();
                    ajaxError(null, "abort", xhr, settings, deferred);
                    return xhr;
                }
                if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name];
                var async = "async" in settings ? settings.async : true;
                xhr.open(settings.type, settings.url, async, settings.username, settings.password);
                for (name in headers) nativeSetHeader.apply(xhr, headers[name]);
                if (settings.timeout > 0) abortTimeout = setTimeout(function() {
                    xhr.onreadystatechange = empty;
                    xhr.abort();
                    ajaxError(null, "timeout", xhr, settings, deferred);
                }, settings.timeout);
                // avoid sending empty string (#319)
                xhr.send(settings.data ? settings.data : null);
                return xhr;
            };
            // handle optional data/success arguments
            function parseArguments(url, data, success, dataType) {
                var hasData = !$.isFunction(data);
                return {
                    url: url,
                    data: hasData ? data : undefined,
                    success: !hasData ? data : $.isFunction(success) ? success : undefined,
                    dataType: hasData ? dataType || success : success
                };
            }
            $.get = function(url, data, success, dataType) {
                return $.ajax(parseArguments.apply(null, arguments));
            };
            $.post = function(url, data, success, dataType) {
                var options = parseArguments.apply(null, arguments);
                options.type = "POST";
                return $.ajax(options);
            };
            $.getJSON = function(url, data, success) {
                var options = parseArguments.apply(null, arguments);
                options.dataType = "json";
                return $.ajax(options);
            };
            $.fn.load = function(url, data, success) {
                if (!this.length) return this;
                var self = this, parts = url.split(/\s/), selector, options = parseArguments(url, data, success), callback = options.success;
                if (parts.length > 1) options.url = parts[0], selector = parts[1];
                options.success = function(response) {
                    self.html(selector ? $("<div>").html(response.replace(rscript, "")).find(selector) : response);
                    callback && callback.apply(self, arguments);
                };
                $.ajax(options);
                return this;
            };
            var escape = encodeURIComponent;
            function serialize(params, obj, traditional, scope) {
                var type, array = $.isArray(obj), hash = $.isPlainObject(obj);
                $.each(obj, function(key, value) {
                    type = $.type(value);
                    if (scope) key = traditional ? scope : scope + "[" + (hash || type == "object" || type == "array" ? key : "") + "]";
                    // handle data in serializeArray() format
                    if (!scope && array) params.add(value.name, value.value); else if (type == "array" || !traditional && type == "object") serialize(params, value, traditional, key); else params.add(key, value);
                });
            }
            $.param = function(obj, traditional) {
                var params = [];
                params.add = function(k, v) {
                    this.push(escape(k) + "=" + escape(v));
                };
                serialize(params, obj, traditional);
                return params.join("&").replace(/%20/g, "+");
            };
        })(Zepto);
        (function($) {
            $.fn.serializeArray = function() {
                var result = [], el;
                $([].slice.call(this.get(0).elements)).each(function() {
                    el = $(this);
                    var type = el.attr("type");
                    if (this.nodeName.toLowerCase() != "fieldset" && !this.disabled && type != "submit" && type != "reset" && type != "button" && (type != "radio" && type != "checkbox" || this.checked)) result.push({
                        name: el.attr("name"),
                        value: el.val()
                    });
                });
                return result;
            };
            $.fn.serialize = function() {
                var result = [];
                this.serializeArray().forEach(function(elm) {
                    result.push(encodeURIComponent(elm.name) + "=" + encodeURIComponent(elm.value));
                });
                return result.join("&");
            };
            $.fn.submit = function(callback) {
                if (callback) this.bind("submit", callback); else if (this.length) {
                    var event = $.Event("submit");
                    this.eq(0).trigger(event);
                    if (!event.isDefaultPrevented()) this.get(0).submit();
                }
                return this;
            };
        })(Zepto);
        (function($) {
            // __proto__ doesn't exist on IE<11, so redefine
            // the Z function to use object extension instead
            if (!("__proto__" in {})) {
                $.extend($.zepto, {
                    Z: function(dom, selector) {
                        dom = dom || [];
                        $.extend(dom, $.fn);
                        dom.selector = selector || "";
                        dom.__Z = true;
                        return dom;
                    },
                    // this is a kludge but works
                    isZ: function(object) {
                        return $.type(object) === "array" && "__Z" in object;
                    }
                });
            }
            // getComputedStyle shouldn't freak out when called
            // without a valid element as argument
            try {
                getComputedStyle(undefined);
            } catch (e) {
                var nativeGetComputedStyle = getComputedStyle;
                window.getComputedStyle = function(element) {
                    try {
                        return nativeGetComputedStyle(element);
                    } catch (e) {
                        return null;
                    }
                };
            }
        })(Zepto);
        (function($) {
            var touch = {}, touchTimeout, tapTimeout, swipeTimeout, longTapTimeout, longTapDelay = 750, gesture;
            function swipeDirection(x1, x2, y1, y2) {
                return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
            }
            function longTap() {
                longTapTimeout = null;
                if (touch.last) {
                    touch.el.trigger("longTap");
                    touch = {};
                }
            }
            function cancelLongTap() {
                if (longTapTimeout) clearTimeout(longTapTimeout);
                longTapTimeout = null;
            }
            function cancelAll() {
                if (touchTimeout) clearTimeout(touchTimeout);
                if (tapTimeout) clearTimeout(tapTimeout);
                if (swipeTimeout) clearTimeout(swipeTimeout);
                if (longTapTimeout) clearTimeout(longTapTimeout);
                touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
                touch = {};
            }
            function isPrimaryTouch(event) {
                return (event.pointerType == "touch" || event.pointerType == event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
            }
            function isPointerEventType(e, type) {
                return e.type == "pointer" + type || e.type.toLowerCase() == "mspointer" + type;
            }
            $(document).ready(function() {
                var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType;
                if ("MSGesture" in window) {
                    gesture = new MSGesture();
                    gesture.target = document.body;
                }
                $(document).bind("MSGestureEnd", function(e) {
                    var swipeDirectionFromVelocity = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
                    if (swipeDirectionFromVelocity) {
                        touch.el.trigger("swipe");
                        touch.el.trigger("swipe" + swipeDirectionFromVelocity);
                    }
                }).on("touchstart MSPointerDown pointerdown", function(e) {
                    if ((_isPointerType = isPointerEventType(e, "down")) && !isPrimaryTouch(e)) return;
                    firstTouch = _isPointerType ? e : e.touches[0];
                    if (e.touches && e.touches.length === 1 && touch.x2) {
                        // Clear out touch movement data if we have it sticking around
                        // This can occur if touchcancel doesn't fire due to preventDefault, etc.
                        touch.x2 = undefined;
                        touch.y2 = undefined;
                    }
                    now = Date.now();
                    delta = now - (touch.last || now);
                    touch.el = $("tagName" in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
                    touchTimeout && clearTimeout(touchTimeout);
                    touch.x1 = firstTouch.pageX;
                    touch.y1 = firstTouch.pageY;
                    if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
                    touch.last = now;
                    longTapTimeout = setTimeout(longTap, longTapDelay);
                    // adds the current touch contact for IE gesture recognition
                    if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
                }).on("touchmove MSPointerMove pointermove", function(e) {
                    if ((_isPointerType = isPointerEventType(e, "move")) && !isPrimaryTouch(e)) return;
                    firstTouch = _isPointerType ? e : e.touches[0];
                    cancelLongTap();
                    touch.x2 = firstTouch.pageX;
                    touch.y2 = firstTouch.pageY;
                    deltaX += Math.abs(touch.x1 - touch.x2);
                    deltaY += Math.abs(touch.y1 - touch.y2);
                }).on("touchend MSPointerUp pointerup", function(e) {
                    if ((_isPointerType = isPointerEventType(e, "up")) && !isPrimaryTouch(e)) return;
                    cancelLongTap();
                    // swipe
                    if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) swipeTimeout = setTimeout(function() {
                        touch.el.trigger("swipe");
                        touch.el.trigger("swipe" + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
                        touch = {};
                    }, 0); else if ("last" in touch) // don't fire tap when delta position changed by more than 30 pixels,
                    // for instance when moving to a point and back to origin
                    if (deltaX < 30 && deltaY < 30) {
                        // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
                        // ('tap' fires before 'scroll')
                        tapTimeout = setTimeout(function() {
                            // trigger universal 'tap' with the option to cancelTouch()
                            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
                            var event = $.Event("tap");
                            event.cancelTouch = cancelAll;
                            touch.el.trigger(event);
                            // trigger double tap immediately
                            if (touch.isDoubleTap) {
                                if (touch.el) touch.el.trigger("doubleTap");
                                touch = {};
                            } else {
                                touchTimeout = setTimeout(function() {
                                    touchTimeout = null;
                                    if (touch.el) touch.el.trigger("singleTap");
                                    touch = {};
                                }, 250);
                            }
                        }, 0);
                    } else {
                        touch = {};
                    }
                    deltaX = deltaY = 0;
                }).on("touchcancel MSPointerCancel pointercancel", cancelAll);
                // scrolling the window indicates intention of the user
                // to scroll, not tap or swipe, so cancel all ongoing events
                $(window).on("scroll", cancelAll);
            });
            [ "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap" ].forEach(function(eventName) {
                $.fn[eventName] = function(callback) {
                    return this.on(eventName, callback);
                };
            });
        })(Zepto);
        (function($, undefined) {
            var prefix = "", eventPrefix, endEventName, endAnimationName, vendors = {
                Webkit: "webkit",
                Moz: "",
                O: "o"
            }, document = window.document, testEl = document.createElement("div"), supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, transform, transitionProperty, transitionDuration, transitionTiming, transitionDelay, animationName, animationDuration, animationTiming, animationDelay, cssReset = {};
            function dasherize(str) {
                return str.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
            }
            function normalizeEvent(name) {
                return eventPrefix ? eventPrefix + name : name.toLowerCase();
            }
            $.each(vendors, function(vendor, event) {
                if (testEl.style[vendor + "TransitionProperty"] !== undefined) {
                    prefix = "-" + vendor.toLowerCase() + "-";
                    eventPrefix = event;
                    return false;
                }
            });
            transform = prefix + "transform";
            cssReset[transitionProperty = prefix + "transition-property"] = cssReset[transitionDuration = prefix + "transition-duration"] = cssReset[transitionDelay = prefix + "transition-delay"] = cssReset[transitionTiming = prefix + "transition-timing-function"] = cssReset[animationName = prefix + "animation-name"] = cssReset[animationDuration = prefix + "animation-duration"] = cssReset[animationDelay = prefix + "animation-delay"] = cssReset[animationTiming = prefix + "animation-timing-function"] = "";
            $.fx = {
                off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
                speeds: {
                    _default: 400,
                    fast: 200,
                    slow: 600
                },
                cssPrefix: prefix,
                transitionEnd: normalizeEvent("TransitionEnd"),
                animationEnd: normalizeEvent("AnimationEnd")
            };
            $.fn.animate = function(properties, duration, ease, callback, delay) {
                if ($.isFunction(duration)) callback = duration, ease = undefined, duration = undefined;
                if ($.isFunction(ease)) callback = ease, ease = undefined;
                if ($.isPlainObject(duration)) ease = duration.easing, callback = duration.complete, 
                delay = duration.delay, duration = duration.duration;
                if (duration) duration = (typeof duration == "number" ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1e3;
                if (delay) delay = parseFloat(delay) / 1e3;
                return this.anim(properties, duration, ease, callback, delay);
            };
            $.fn.anim = function(properties, duration, ease, callback, delay) {
                var key, cssValues = {}, cssProperties, transforms = "", that = this, wrappedCallback, endEvent = $.fx.transitionEnd, fired = false;
                if (duration === undefined) duration = $.fx.speeds._default / 1e3;
                if (delay === undefined) delay = 0;
                if ($.fx.off) duration = 0;
                if (typeof properties == "string") {
                    // keyframe animation
                    cssValues[animationName] = properties;
                    cssValues[animationDuration] = duration + "s";
                    cssValues[animationDelay] = delay + "s";
                    cssValues[animationTiming] = ease || "linear";
                    endEvent = $.fx.animationEnd;
                } else {
                    cssProperties = [];
                    // CSS transitions
                    for (key in properties) if (supportedTransforms.test(key)) transforms += key + "(" + properties[key] + ") "; else cssValues[key] = properties[key], 
                    cssProperties.push(dasherize(key));
                    if (transforms) cssValues[transform] = transforms, cssProperties.push(transform);
                    if (duration > 0 && typeof properties === "object") {
                        cssValues[transitionProperty] = cssProperties.join(", ");
                        cssValues[transitionDuration] = duration + "s";
                        cssValues[transitionDelay] = delay + "s";
                        cssValues[transitionTiming] = ease || "linear";
                    }
                }
                wrappedCallback = function(event) {
                    if (typeof event !== "undefined") {
                        if (event.target !== event.currentTarget) return;
                        // makes sure the event didn't bubble from "below"
                        $(event.target).unbind(endEvent, wrappedCallback);
                    } else $(this).unbind(endEvent, wrappedCallback);
                    // triggered by setTimeout
                    fired = true;
                    $(this).css(cssReset);
                    callback && callback.call(this);
                };
                if (duration > 0) {
                    this.bind(endEvent, wrappedCallback);
                    // transitionEnd is not always firing on older Android phones
                    // so make sure it gets fired
                    setTimeout(function() {
                        if (fired) return;
                        wrappedCallback.call(that);
                    }, duration * 1e3 + 25);
                }
                // trigger page reflow so new elements can animate
                this.size() && this.get(0).clientLeft;
                this.css(cssValues);
                if (duration <= 0) setTimeout(function() {
                    that.each(function() {
                        wrappedCallback.call(this);
                    });
                }, 0);
                return this;
            };
            testEl = null;
        })(Zepto);
        if (typeof module === "object" && module && typeof module.exports === "object") {
            // Expose Zepto as module.exports in loaders that implement the Node
            // module pattern (including browserify). Do not create the global, since
            // the user will be storing it themselves locally, and globals are frowned
            // upon in the Node module world.
            module.exports = Zepto;
            s;
        } else {
            // Otherwise expose Zepto to the global object as usual
            window.Zepto = window.$ = Zepto;
            // Register as a named AMD module, since Zepto can be concatenated with other
            // files that may use define, but not via a proper concatenation script that
            // understands anonymous AMD modules. A named AMD is safest and most robust
            // way to register. Lowercase jquery is used because AMD module names are
            // derived from file names, and Zepto is normally delivered in a lowercase
            // file name. Do this after creating the global so that if an AMD module wants
            // to call noConflict to hide this version of Zepto, it will work.
            if (typeof define === "function" && define.amd) {
                define("zepto", [], function() {
                    return Zepto;
                });
            }
        }
    })(window);
    return Zepto;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/main/mp", function(require, exports, module) {
    var $id = 0 | Math.random() * 998;
    var mp = {};
    /**
	 *@clas mm.Class
	 */
    mp.Class = function() {};
    /**
	 *@method mm.Class.extend
	 *@param prop {Object} 原型
	 *@static
	 *@example
	 	var app = mm.Class.extend(prop)
	 */
    mp.Class.extend = function(prop) {
        function Class() {
            var index = 0;
            this.$id = ++$id;
            //执行构造方法
            if (this.ctor) {
                this.ctor.apply(this, arguments);
            }
        }
        var $super = this.prototype;
        var prototype = Object.create($super);
        var $superTest = /\.\$super\b/;
        Class.prototype = prototype;
        var description = {
            writable: true,
            enumerable: false,
            configurable: true
        };
        for (var name in prop) {
            var isFunc = typeof prop[name] === "function";
            var override = typeof $super[name] === "function";
            var hasSuperCall = $superTest.test(prop[name]);
            if (isFunc && override && hasSuperCall) {
                description.value = function(name, fn) {
                    return function() {
                        var tmp = this.$super;
                        this.$super = $super[name];
                        var result = fn.apply(this, arguments);
                        this.$super = tmp;
                        return result;
                    };
                }(name, prop[name]);
                Object.defineProperty(prototype, name, description);
            } else if (isFunc) {
                description.value = prop[name];
                Object.defineProperty(prototype, name, description);
            } else {
                prototype[name] = prop[name];
            }
        }
        Class.extend = mp.Class.extend;
        return Class;
    };
    module.exports = mp;
});;
define("/spm_modules/spaseed/1.1.14/main/pagemanager", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var router = require("spm_modules/spaseed/1.1.14/main/router");
    var evt = require("spm_modules/spaseed/1.1.14/lib/event");
    var util = require("spm_modules/spaseed/1.1.14/lib/util");
    var spaseedConfig = require("app/script/config");
    /** 
	 * 页面管理
	 * @class pageManager
	 * @static
	 */
    var pageManager = {
        /**
		 * 初始化
		 * @method init
		 */
        init: function() {
            /**
			 * 页面包裹容器
			 * @property pageWrapper
			 * @type Object
			 */
            this.pageWrapper = $(spaseedConfig.pageWrapper);
        },
        /**
		 * 加载首页
		 */
        loadRoot: function(options) {
            this.loadView({
                controller: spaseedConfig.root,
                isRefresh: options.isRefresh
            });
        },
        /**
		 * 统一加载视图方法
		 */
        loadCommon: function(options) {
            var _self = this, arr = [].slice.call(options.params);
            //解析路由匹配
            this.parseMatch(arr, function(controller, action, params) {
                //处理路由, 加载视图
                _self.loadView({
                    controller: controller,
                    action: action,
                    params: params,
                    isRefresh: options.isRefresh
                });
            });
        },
        /**
		 * 解析路由匹配
		 * @method parseMatch
		 * @param {Array}    arr 路由匹配到的参数
		 * @param {Function} cb  回调函数
		 */
        parseMatch: function(arr, cb) {
            var controller = null, action = null, params = [];
            //获取controller
            controller = arr[0];
            //获取action与params
            if (arr.length > 1) {
                if (typeof arr[1] === "object") {
                    params.push(arr[1]);
                } else {
                    action = arr[1];
                    params = arr.slice(2);
                }
            }
            cb(controller, action, params);
        },
        /**
		 * 图片placeholder
		 * @method placeholder
		 * @param {element} container 容器
		 */
        placeholder: function(container) {
            container = container || this.pageWrapper;
            if (!container.find) {
                container = $(container);
            }
            container.find("img[raw]").each(function() {
                var img = $(this);
                var raw = img.attr("raw");
                var tmp = new Image();
                var off = false;
                $(tmp).on("load", function() {
                    if (!off) {
                        img.attr("src", raw);
                        tmp = undefined;
                    }
                }).attr("src", raw);
                if (tmp.complete) {
                    off = true;
                    img.attr("src", raw);
                    tmp = undefined;
                }
            });
        },
        //跳转
        redirect: function(controller, action, params, searchparams, replacement) {
            var pathname = arguments[0];
            var searchstring = "";
            params = params || [];
            searchparams = searchparams || {};
            for (var p in searchparams) {
                searchstring += p + "=" + encodeURIComponent(searchparams[p]) + "&";
            }
            if (arguments.length > 1) {
                pathname = [ controller, action, params.join("/") ].join("/") + (searchstring ? "?" + searchstring.substring(0, searchstring.length - 1) : "");
            }
            this.loadUrl(pathname, replacement);
        },
        /**
		 * 只替换部分url内容
		 */
        partialRedirect: function(option) {
            var pathname = location.pathname.split("/"), searchArray = location.search.substring(1).split("&");
            option.search = option.search || [];
            var controller = option.controller != null ? option.controller : pathname[0] || "", action = option.action != null ? option.action : pathname[1] || "", param = option.param || pathname.slice(2) ? pathname.slice(2).join("/") : "";
            for (var i = 0; i < option.search.length; i++) {
                var match = searchArray.filter(function() {
                    if (item.split("=")[0] == option.search[i].key) {
                        item = item.replace(/=(.*)/i, "=" + option.search[i].val);
                    }
                });
                if (!match || !match[0]) {
                    searchArray.push(option.search[i].key + "=" + option.search[i].val);
                }
            }
            pathname = [ controller, action, param ].join("/") + "?" + searchArray.join("&");
        },
        reload: function() {
            var url = router.getFragment() || "/";
            this.loadUrl(url);
        },
        back: function() {
            this._destroy();
            router.back(true);
        },
        loadUrl: function(url, replacement) {
            var destroy = this._destroy();
            replacement = replacement == null ? destroy : replacement;
            //销毁当前页面
            router.navigate({
                url: url,
                silent: false,
                replacement: replacement
            });
        },
        /**
		 * 统一路由处理函数
		 * @method loadView
		 * @param {String} controller 
		 * @param {String} action 
		 * @param {Array} params 
		 */
        loadView: function(options) {
            var controller = options.controller, action = options.action, params = options.params, callback = options.callback, isRefresh = options.isRefresh;
            var _self = this;
            params = params || [];
            /**
			 * 切换页面需要更改class的容器
			 * @property classWrapper
			 * @type Object
			 */
            this.classWrapper = $(spaseedConfig.classWrapper);
            //模块基础路径
            var basePath = spaseedConfig.basePath;
            //模块id按照如下规则组成
            var controllerId = basePath + controller + "/" + controller, actionId = basePath + controller + "/" + action + "/" + action;
            var moduleArr = [];
            //检查是否存在controller模块
            //moduleArr.push(controllerId);
            //检查是否存在action模块
            if (action) {
                moduleArr.push(actionId);
            } else {
                // 未指明action，默认尝试查询controller
                var indexUri = basePath + controller + "/" + controller;
                moduleArr.push(indexUri);
                action = controller;
            }
            //需加载的css资源
            var cssReqUrl = _self.addCssReq(controller, action);
            //加载css
            cssReqUrl.length && require.async(cssReqUrl);
            //获取页面模块对外接口
            require.async(moduleArr, function(obj) {
                if (!obj) {
                    _self.render404();
                    return;
                }
                //controller未定义, 此时cObj属于一个action 
                // if (!controllerId) {
                // 	aObj = cObj;
                // }
                // //执行controller, 判断同contoller下的action切换, contoller不需要再重复执行
                // if (controllerId && (!_self.fragment || _self.fragment.indexOf('/' + controller) < 0 || !action)) {
                // 	_self.renderView(cObj, params);
                // } 
                _self.fragment = router.fragment === "/" ? "/" + controller : router.fragment;
                _self.fragment = _self.fragment.replace(/\/?\?.*/, "");
                //执行action
                if (action) {
                    _self.renderView(obj, params, isRefresh);
                    _self.currentViewObj = obj;
                    obj["__callback"] = callback;
                    controllerId && (_self.currentCtrlObj = obj);
                } else {
                    _self.currentViewObj = obj;
                }
                //设置页面标题
                _self.setTitle(obj);
                //事件初始化
                if (obj.events) {
                    obj.__bodyhandler = obj.__bodyhandler || {};
                    for (var p in obj.events) {
                        for (var q in obj.events[p]) {
                            evt.on(p, q, obj.events[p][q]);
                        }
                        if (!obj.__bodyhandler[p]) {
                            obj.__bodyhandler[p] = evt.bindBodyEvent(obj, p);
                        }
                    }
                }
            });
        },
        /**
		 * 通过配置组装css请求
		 * (单页面模式会有先出dom后出样式的情况，不建议使用这种动态加载方式)
		 */
        addCssReq: function(controller, action) {
            var cssConfig = spaseedConfig.css, controllerCssReq = cssConfig[controller], actionCssReq = cssConfig[controller + "_" + action], reqUrl = [], concatReqUrl = function(cssArr) {
                for (var i = 0; i < cssArr.length; i++) {
                    //csspath可通过seajs的map参数配置映射
                    cssArr[i] && (reqUrl = reqUrl.concat("csspath/" + cssArr[i]));
                }
            };
            controllerCssReq && concatReqUrl(controllerCssReq["cssFile"]);
            actionCssReq && concatReqUrl(actionCssReq["cssFile"]);
            return reqUrl;
        },
        /**
		 * @obsolete
		 * 渲染公共模版
		 * 框架不负责任何显示
		 */
        /*
		renderLayout: function (controller, action, params) {
			var _self = this,
				layoutConfig = spaseedConfig.layout,
				layout = 'default',
				_render = function (layoutName) {
					if (_self.layout != layoutName) {
						require.async(layoutConfig[layoutName]['module'], function (_layout) {
							_layout.render();
						})
						_self.layout = layoutName;
					} 
				};

			loop: for (var key in layoutConfig) {
				var controllerArr = layoutConfig[key].controller || [];
				for (var i = 0, c; c = controllerArr[i]; i++) {
					if (controller === c) {
						layout = key;
						break loop;
					}
				}
			}
			_render(layout);
		},
		*/
        /**
		 * 渲染视图
		 */
        renderView: function(obj, params, isRefresh) {
            //debugger
            if (obj && obj.render) {
                obj.startTime = new Date();
                //是否刷新
                obj.isRefresh = isRefresh;
                obj.render.apply(obj, params);
            } else {
                this.render404();
            }
        },
        /**
		 * 渲染404
		 * @method render404
		 */
        render404: function() {
            var notFound = spaseedConfig.html404;
            var container = this.pageWrapper;
            container.html(notFound);
        },
        renderError: function(msg) {
            var htmlError = spaseedConfig.htmlError;
            var container = this.pageWrapper;
            container.html(htmlError.replace("{{msg}}", msg));
        },
        isEmpty: function() {
            return this.pageWrapper.html().length < 10;
        },
        /**
		 * 设置页面标题
		 */
        setTitle: function(obj) {
            if (obj && obj.title) {
                document.title = obj.title;
            } else {
                var defaultTitle = spaseedConfig.defaultTitle;
                if (document.title != defaultTitle) {
                    document.title = defaultTitle;
                }
            }
        },
        /**
		 * 框架的渲染方法
		 * @param {Object} option 选项
		 * @param {Element} option.container 容器
		 * @param {Element} option.scroll 滚动距离
		 */
        html: function(option) {
            if (option.container !== undefined) {
                this.pageWrapper.html(option.container);
            }
            //滚动逻辑
            if (option.scroll !== undefined) {
                setTimeout(function() {
                    var defaultClass = spaseedConfig.defaultClass, classWrapper = pageManager.classWrapper, className = (defaultClass || "") + " " + (option.className || "");
                    classWrapper.attr("class", option.exclusiveClassName || className);
                }, 0);
                this.pageWrapper.scrollTop(option.scroll || 0);
            }
        },
        /**
		 * 改变导航选中态
		 */
        changeNavStatus: function(controller, action) {
            var _self = this, fragment = this.fragment, root = spaseedConfig.root, navContainer = spaseedConfig.navContainer, navActiveClass = spaseedConfig.navActiveClass;
            var changeNav = function(navCollection, links) {
                navCollection.find("." + navActiveClass).removeClass(navActiveClass);
                for (var i = 0, item; item = links[i]; i++) {
                    var href = util.getHref(item);
                    if (href === "/" && controller === root || href !== "/" && fragment.indexOf(href) == 0) {
                        var itemParent = $(item).parent();
                        var onActiveNav = navCollection.find("." + navActiveClass);
                        if (onActiveNav.length) {
                            fragment === href && itemParent.addClass(navActiveClass);
                        } else {
                            itemParent.addClass(navActiveClass);
                        }
                    }
                }
            };
            var navCollection;
            for (var i = 0, navcon; navcon = navContainer[i]; i++) {
                navcon = $(navcon);
                if (navCollection) {
                    navCollection = navCollection.add(navcon);
                } else {
                    navCollection = navcon;
                }
            }
            changeNav(navCollection, navCollection.find("a"));
        },
        /**
		 * 页面切换时全局销毁
		 */
        globalDestroy: function() {},
        /**
		 * 页面销毁方法的调用
		 */
        _destroy: function() {
            var replacement = false;
            if (this.currentViewObj) {
                replacement = this.currentViewObj.replacement;
                //全局销毁
                this.globalDestroy();
                var obj = this.currentViewObj;
                //移除上一个页面的bodyEvents
                if (obj.events) {
                    for (var p in obj.events) {
                        evt.off(p);
                    }
                }
                //销毁前一个
                var destroy = this.currentViewObj.destroy;
                try {
                    destroy && destroy.call(this.currentViewObj);
                    if (this.currentCtrlObj) {
                        var ctrlDestroy = this.currentCtrlObj.destroy;
                        ctrlDestroy && ctrlDestroy.call(this.currentCtrlObj);
                    }
                } catch (e) {
                    window.console && console.error && console.error("View destroy failed ", e);
                }
                this.currentCtrlObj = null;
                this.currentViewObj = null;
            }
            return replacement;
        },
        /**
		 * 重置fragment标记(用于强制刷新controller)
		 * @method resetFragment
		 */
        resetFragment: function() {
            this.fragment = "";
        }
    };
    module.exports = pageManager;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/main/pagemanagerwithpageswitcher", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var pageManager = require("spm_modules/spaseed/1.1.14/main/pagemanager");
    var pageswitcher = require("spm_modules/spaseed/1.1.14/lib/pageswitcher");
    var config = require("app/script/config");
    var parentHtml = pageManager.html;
    //改写pageManager的html方法
    pageManager.html = function(option) {
        var self = this;
        var method = pageswitcher.method[option.switchMode || config.switchMode];
        if (!option.isRefresh && method) {
            var $oldWrapper = this.pageWrapper;
            var $cloneWrapper = $oldWrapper.clone();
            this.pageWrapper = $cloneWrapper;
            parentHtml.call(this, option);
            if (!option.isRefresh && method) {
                $cloneWrapper.css($.extend({}, method.elemIn.cssBefore, option.switchStyle));
                $oldWrapper.css(method.elemOut.cssBefore);
                $(config.switchWrapper).append($cloneWrapper);
                $cloneWrapper.height();
                $cloneWrapper.css(method.elemIn.cssAfter);
                $oldWrapper.css(method.elemOut.cssAfter);
                setTimeout(function() {
                    $cloneWrapper.removeAttr("style");
                    $oldWrapper.remove();
                }, method.elemIn.duration);
            }
        } else {
            parentHtml.call(this, option);
        }
    };
    pageManager.pageswitcher = pageswitcher;
    module.exports = pageManager;
});;
/**
   * 路由管理
   * @class router
   * @static
   */
define("/spm_modules/spaseed/1.1.14/main/router", function(require, exports, module) {
    var config = require("app/script/config");
    var win = window;
    var pushState = win.history.pushState;
    var urls = [];
    var count = 0;
    var router = {
        option: {
            //是否使用html5 history API设置路由
            html5Mode: true,
            //页面管理对象
            pageManager: {},
            //路由映射对象
            routes: {},
            //扩展路由，优先于框架内部路由routes对象
            extendRoutes: {},
            //低端浏览器监听url变化的时间间隔
            interval: 50,
            //低端浏览器如设置了domain, 需要传入
            domain: ""
        },
        start: function() {
            var frag = this.getFragment();
            var initPath = frag ? frag : "/";
            if (initPath === "/index.html") {
                initPath = "/";
            }
            var locationHref = win.location.href;
            //完整路径在hash环境打开则转化为锚点路径后跳转
            if (!this.option["html5Mode"] && !/#(.*)$/.test(locationHref) && initPath !== "/") {
                location.replace("/#" + initPath);
                return;
            }
            this.navigate({
                url: initPath,
                silent: config.silentRefresh,
                replacement: true,
                isRefresh: true
            });
        },
        /**
     * 初始化
     * @param {Object} option 参数
     * @method init
     */
        init: function(option) {
            option = option || {};
            for (var p in option) {
                this.option[p] = option[p];
            }
            //扩展路由
            if (this.option["extendRoutes"]) {
                this.extend(this.option["extendRoutes"]);
            }
            this.option["html5Mode"] = pushState && this.option["html5Mode"];
            //支持debug模式(url加上debug后不改变页面切换逻辑,可有针对性做一些事情)
            this.debug = false;
            var locationHref = win.location.href;
            if (/\/debug_online/.test(locationHref)) {
                this.debug = "/debug_online";
            } else if (/\/debug/.test(locationHref)) {
                this.debug = "/debug";
            }
            var _self = this, evt = this.option["html5Mode"] ? "popstate" : "hashchange";
            //其他浏览器监听popstate或hashchange
            this.addEvent(win, evt, function(e) {
                _self.checkUrl(e);
            });
            this.start();
        },
        /**
     * 事件监听
     */
        addEvent: function(elem, event, fn) {
            if (elem.addEventListener) {
                elem.addEventListener(event, fn, false);
            } else if (elem.attachEvent) {
                elem.attachEvent("on" + event, fn);
            } else {
                elem[event] = fn;
            }
        },
        /**
     * 获取hash值
     * @method getHash
     * @param {Object} win 窗口对象
     * @return {String} hash值
     */
        getHash: function(win) {
            var match = (win || window).location.href.match(/#(.*)$/);
            return match ? match[1] : "";
        },
        /**
     * 获取url片段
     * @method getFragment
     * @return {String} url片段
     */
        getFragment: function() {
            var fragment, pathName = win.location.pathname + win.location.search;
            if (this.option["html5Mode"]) {
                //锚点在html5模式下不作处理
                fragment = pathName;
            } else {
                fragment = this.getHash();
                //如果完整路径在hash环境打开
                if (fragment === "" && pathName !== "/" && pathName !== "/index.html") {
                    fragment = pathName;
                }
            }
            return fragment;
        },
        /**
     * 监听url变化
     */
        checkUrl: function(e) {
            var current = this.getFragment();
            if (this.debug) {
                current = current.replace(this.debug, "");
            }
            if (this.iframe) {
                current = this.getHash(this.iframe);
            }
            if (current === this.fragment) {
                return;
            }
            if (typeof e == "object" && e.state) {
                count = e.state.count - 1;
            }
            this.navigate({
                url: current,
                silent: false,
                replacement: true
            });
        },
        back: function() {
            history.back();
        },
        /**
     * 去除前后#和hash
     */
        stripHash: function(url) {
            return url.replace(/^\#+|\#+$/g, "");
        },
        /**
     * 去除前后斜杠
     */
        stripSlash: function(url) {
            return url.replace(/^\/+|\/+$/g, "");
        },
        /**
     * 导航
     * @method navigate
     * @param {String}  url 地址
     * @param {Boolean} slient 不改变地址栏
     * @param {Boolean} replacement 替换浏览器的当前会话历史(h5模式时支持)
     */
        navigate: function(options) {
            var url = options.url, slient = options.silent, replacement = options.replacement, isRefresh = options.isRefresh;
            if (!replacement) {
                count++;
            }
            var _self = this;
            if (url !== "/") {
                url = _self.stripHash(url);
                url = _self.stripSlash(url);
                url = "/" + url;
            }
            if (url !== _self.fragment && !slient) {
                //slient为true时，只路由不改变地址栏
                if (_self.debug) {
                    url = url.replace(_self.debug, "");
                    url = _self.debug + url;
                }
                if (_self.option["html5Mode"]) {
                    var _stateFun = replacement ? "replaceState" : "pushState";
                    history[_stateFun]({
                        count: count
                    }, document.title, url);
                } else {
                    if (url !== "/" || _self.getFragment()) {
                        location.hash = url;
                        _self.iframe && _self.historySet(url, _self.getHash(_self.iframe));
                    }
                }
            }
            if (_self.debug) {
                url = url.replace(_self.debug, "");
                !url && (url = "/");
            }
            /**
       * 当前url片段
       * @property fragment
       * @type String
       */
            _self.fragment = url;
            url = url.split("?")[0];
            _self.loadUrl({
                url: url,
                isRefresh: isRefresh
            });
        },
        /**
     * 重定向
     * @method redirect
     * @param {String}  url 地址
     * @param {Boolean} slient 不改变地址栏
     * @param {Boolean} replacement 替换浏览器的当前会话历史(h5模式时支持)
     */
        redirect: function(url, slient, replacement) {
            this.navigate({
                url: url,
                slient: slient,
                replacement: replacement
            });
        },
        /**
     * 路由匹配
     * @method matchRoute
     * @param  {String} rule 路由规则
     * @param  {String} url 地址
     * @return {Array}  参数数组
     */
        matchRoute: function(rule, url) {
            var optionalReg = /\((.*?)\)/g, paramReg = /(\(\?)?:\w+/g, astReg = /\*\w+/g, ruleToReg = function(rule) {
                rule = rule.replace(optionalReg, "(?:$1)?").replace(paramReg, "([^/]+)").replace(astReg, "(.*?)");
                return new RegExp("^" + rule + "$");
            }, route = ruleToReg(rule), result = route.exec(url), params = null;
            if (result) {
                var args = result.slice(1);
                params = [];
                for (var i = 0, p; p = args[i]; i++) {
                    params.push(p ? decodeURIComponent(p) : "");
                }
            }
            return params;
        },
        /**
     * 扩展路由
     * @method extend
     * @param {Object} obj 路由map
     */
        extend: function(obj) {
            obj = obj || {};
            if (this.extendRoutes) {
                $.extend(this.extendRoutes, obj);
            } else {
                this.extendRoutes = obj;
            }
        },
        /**
     * queryString转对象
     */
        queryToObj: function(queryStr) {
            var urlPara = queryStr.split("?")[1];
            urlPara = urlPara.split("&");
            var objPara = {};
            for (var i = 0, item; item = urlPara[i]; i++) {
                var itemArr = item.split("=");
                objPara[itemArr[0]] = itemArr[1];
            }
            return objPara;
        },
        /**
     * 执行路由匹配的方法
     */
        applyAction: function(options) {
            var action = options.action, params = options.params, urlParam = options.urlParam, pointer = options.pointer;
            urlParam && params.push(urlParam);
            action && action.call(pointer, {
                params: params,
                isRefresh: options.isRefresh
            });
        },
        /**
     * 加载页面
     * @method loadUrl
     * @param {String} url 地址
     */
        loadUrl: function(options) {
            var _self = this, extendRoutes = _self.extendRoutes, routes = _self.option.routes, pm = _self.option.pageManager, params = null, urlParam = null, searchReg = /\/?\?.*/, searchMatch = searchReg.exec(url), url = options.url.replace(searchReg, "");
            searchMatch && (urlParam = this.queryToObj(searchMatch[0]));
            //优先匹配框架外部定义路由
            if (extendRoutes) {
                for (var exRule in extendRoutes) {
                    if (params = _self.matchRoute(exRule, url)) {
                        this.applyAction({
                            action: extendRoutes[exRule],
                            params: params,
                            urlParam: urlParam,
                            isRefresh: options.isRefresh
                        });
                        return;
                    }
                }
            }
            //匹配框架内部路由规则
            for (var rule in routes) {
                if (params = _self.matchRoute(rule, url)) {
                    this.applyAction({
                        action: pm[routes[rule]],
                        params: params,
                        urlParam: urlParam,
                        pointer: pm,
                        isRefresh: options.isRefresh
                    });
                    break;
                }
            }
        }
    };
    module.exports = router;
});