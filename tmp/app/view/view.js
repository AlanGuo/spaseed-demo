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
    }, "function" == typeof define) define(function() {
        return template;
    }); else if ("undefined" != typeof exports) module.exports = template; else {
        for (var namespaceArray = "apptemplate".split("."), global = window, i = 0; i < namespaceArray.length; i++) {
            var item = namespaceArray[i];
            global[item] = global[item] || {}, global = global[item];
        }
        global.template = template;
    }
    /*v:2*/
    template("dialog/buttonpannel", function($data) {
        "use strict";
        var $utils = this, buttons = ($utils.$helpers, $data.buttons), $each = $utils.$each, $escape = ($data.item, 
        $data.index, $data.$index, $utils.$escape), $out = "";
        return 2 == buttons.length ? ($out += " ", $each(buttons, function(item, index) {
            $out += ' <a data-click-event="', $out += $escape(item.event || "hide"), $out += '" class="btn btn-', 
            $out += $escape(index), $out += '">', $out += $escape(item.text), $out += "</a> ";
        }), $out += " ") : ($out += ' <a data-click-event="', $out += $escape(buttons[0].event || "hide"), 
        $out += '" class="btn btn-1">', $out += $escape(buttons[0].text || "确定"), $out += "</a> "), 
        new String($out);
    }), /*v:3*/
    template("dialog/dialog", '<div class="cont-title"> </div> <div class="cont-wrapper"> <div class="text-content"> </div> </div> <div class="buttonpannel"> </div> '), 
    /*v:1*/
    template("loading", '<p> <span class="load-1"></span> <span class="load-2"></span> <span class="load-3"></span> <span class="load-4"></span> </p>'), 
    /*v:10*/
    template("page1/page1", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), data = $data.data, $out = "";
        return $out += "<h1>", $out += $escape(data.title), $out += "</h1> <div>", $out += $escape(data.description), 
        $out += '</div> <br> <div data-click-event="tt_click">点我+1: <span bind-content="detail"></span></div> <br> <div data-click-event="opendialog">弹出对话框</div> <br> <div data-click-event="openerrortips">弹出轻量错误提示</div> <br> <div data-click-event="showloading">显示loading</div> <br> ', 
        new String($out);
    }), /*v:1*/
    template("page2/page2", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), data = $data.data, $out = "";
        return $out += "<h1>", $out += $escape(data.title), $out += "</h1> <div>", $out += $escape(data.description), 
        $out += "</div> ", new String($out);
    }), /*v:1*/
    template("page3/index/index", "<div> This is '/page3/index' content </div>"), /*v:1*/
    template("page3/other/other", "<div> This is 'other' page content </div> "), /*v:1*/
    template("page3/page3", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), data = $data.data, $out = "";
        return $out += "<h1>", $out += $escape(data.title), $out += "</h1> <div>", $out += $escape(data.description), 
        $out += '</div> <ul class="menu submenu"> <li><a data-href="/page3/index" data-click-event="router">/page3/index</a></li> <li><a data-href="/page3/other" data-click-event="router">/page3/other</a></li> </ul> <div id="subcontainer" class="subcontainer"></div> ', 
        new String($out);
    }), module && (module.exports = template);
}();