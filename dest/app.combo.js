;
"use strict";

define("/app/script/model/request", function(require, exports, module) {
    var request = {
        sample: {
            url: "/cgi/sample",
            method: "get",
            fakecallback: function(data, cb) {
                setTimeout(function() {
                    cb(data);
                }, 200);
            }
        }
    };
    module.exports = request;
});;
define("/app/script/module/page3/page3", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var template = require("dest/view/apptemplate");
    var asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest");
    var request = require("app/script/model/request");
    var View = require("spm_modules/spaseed/1.1.14/main/View");
    var page3 = View.extend({
        $elem: $("#pageWrapper"),
        title: "page 3",
        render: function(cb) {
            var self = this;
            asyncRequest.all(this.$net, [ {
                params: {
                    code: 0,
                    data: {
                        title: "page3",
                        description: "page3 description"
                    }
                },
                request: request.sample
            } ], function(values) {
                self.$elem.html(template("page3/page3", {
                    data: values[0]
                }));
                cb && cb();
            });
        }
    });
    module.exports = page3;
});;
"use strict";

define("/app/script/module/page1/page1", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var View = require("spm_modules/spaseed/1.1.14/main/View");
    var template = require("dest/view/apptemplate");
    var asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest");
    var binder = require("spm_modules/spaseed/1.1.14/lib/binder");
    var request = require("app/script/model/request");
    var Page1 = View.extend({
        $elem: $("#pageWrapper"),
        render: function() {
            var self = this;
            asyncRequest.all(this.$net, [ {
                params: {
                    code: 0,
                    data: {
                        title: "page1",
                        description: "page1 description"
                    }
                },
                request: request.sample
            } ], function(values) {
                self.$elem.html(template("page1/page1", {
                    data: values[0]
                }));
                //绑定数据
                binder.bind(self.$elem, self);
            });
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
        }
    });
    module.exports = Page1;
});;
define("/app/script/module/page2/page2", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var template = require("dest/view/apptemplate");
    var asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest");
    var request = require("app/script/model/request");
    var View = require("spm_modules/spaseed/1.1.14/main/View");
    var page2 = View.extend({
        title: "page2",
        $elem: $("#pageWrapper"),
        render: function() {
            var self = this;
            asyncRequest.all(this.$net, [ {
                params: {
                    code: 0,
                    data: {
                        title: "page2",
                        description: "page2 description"
                    }
                },
                request: request.sample
            } ], function(values) {
                self.$elem.html(template("page2/page2", {
                    data: values[0]
                }));
            });
        },
        destroy: function() {}
    });
    module.exports = page2;
});;
define("/app/script/module/page3/index/index", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var template = require("dest/view/apptemplate");
    var asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest");
    var request = require("app/script/model/request");
    var View = require("app/script/module/page3/page3");
    var page3Index = View.extend({
        title: "page3 index",
        render: function() {
            var self = this;
            this.$super(function() {
                self.$elem = $("#subcontainer");
                self.$elem.html(template("page3/index/index")());
            });
        }
    });
    module.exports = page3Index;
});;
define("/app/script/module/page3/other/other", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var template = require("dest/view/apptemplate");
    var asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest");
    var request = require("app/script/model/request");
    var View = require("app/script/module/page3/page3");
    var page3Index = View.extend({
        title: "page3 index",
        render: function() {
            var self = this;
            this.$super(function() {
                self.$elem = $("#subcontainer");
                self.$elem.html(template("page3/other/other")());
            });
        }
    });
    module.exports = page3Index;
});;
define("/app/script/module/page3/page3", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/zepto");
    var template = require("dest/view/apptemplate");
    var asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest");
    var request = require("app/script/model/request");
    var View = require("spm_modules/spaseed/1.1.14/main/View");
    var page3 = View.extend({
        $elem: $("#pageWrapper"),
        title: "page 3",
        render: function(cb) {
            var self = this;
            asyncRequest.all(this.$net, [ {
                params: {
                    code: 0,
                    data: {
                        title: "page3",
                        description: "page3 description"
                    }
                },
                request: request.sample
            } ], function(values) {
                self.$elem.html(template("page3/page3", {
                    data: values[0]
                }));
                cb && cb();
            });
        }
    });
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
    /*v:2*/
    template("page1/page1", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), data = $data.data, $out = "";
        return $out += '<h1 data-click-event="tt_click">', $out += $escape(data.title), 
        $out += "</h1> <div>", $out += $escape(data.description), $out += '</div> <div bind-content="detail"></div> ', 
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
}();;
/**
 * promise
 * @class promise
 * @static
 */
define("/spm_modules/spaseed/1.1.14/lib/asyncrequest", function(require, exports, module) {
    var asyncRequest = {
        all: function(net, requestArray, success, fail) {
            if (window.Promise) {
                var promiseFunctionArray = [];
                for (var i = 0; i < requestArray.length; i++) {
                    (function(item, index) {
                        promiseFunctionArray.push(new Promise(function(resolve, reject) {
                            net.request({
                                request: item.request,
                                data: item.params,
                                success: function(data) {
                                    resolve(data);
                                },
                                error: function(err) {
                                    reject(err);
                                }
                            });
                        }));
                    })(requestArray[i], i);
                }
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
                for (var i = 0; i < count; i++) {
                    (function(item, index) {
                        net.request({
                            request: item.request,
                            data: item.params,
                            success: function(data) {
                                resultsArray[index] = data;
                                if (!--count) {
                                    if (success) {
                                        success(resultsArray);
                                    }
                                }
                            },
                            error: function(err) {
                                resultsArray[index] = err;
                                if (!--count) {
                                    if (fail) {
                                        fail(resultsArray);
                                    }
                                }
                            }
                        });
                    })(requestArray[i], i);
                }
            }
        }
    };
    module.exports = asyncRequest;
});;
/**
 * @module binder
 * 绑定模块，提供双向绑定功能
 */
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/binder", function(require, exports, module) {
    var selectors = "[bind-content],[bind-value],[bind-attr]";
    var binders = {
        value: function(node, onchange) {
            node.addEventListener("keyup", function() {
                onchange(node.value);
            });
            return {
                updateProperty: function(value) {
                    if (value !== node.value) {
                        node.value = value;
                    }
                }
            };
        },
        content: function(node) {
            return {
                updateProperty: function(value) {
                    node.textContent = value;
                }
            };
        },
        click: function(node, onchange, object) {
            var previous;
            return {
                updateProperty: function(fn) {
                    var listener = function(e) {
                        fn.apply(object, arguments);
                        e.preventDefault();
                    };
                    if (previous) {
                        node.removeEventListener(previous);
                        previous = listener;
                    }
                    node.addEventListener("click", listener);
                }
            };
        },
        attribute: function(node, onchange, object, attrname) {
            return {
                updateProperty: function(value, attrname) {
                    node.setAttribute(attrname, value);
                }
            };
        }
    };
    var bindEngine = {
        bind: function(container, object) {
            function getDirectObject(object, propertyName) {
                var val = object;
                if (/\./.test(propertyName)) {
                    var pnamearray = propertyName.split(".");
                    for (var i = 0; i < pnamearray.length - 1; i++) {
                        if (val) {
                            val = val[pnamearray[i]];
                        } else {
                            break;
                        }
                    }
                    return val;
                } else {
                    return object;
                }
            }
            function bindObject(node, binderName, object, propertyName) {
                //绑定属性
                var observer = null;
                var bindProperty = function(bnName, propObj) {
                    var prop = propObj.prop, attr = propObj.attr;
                    var dobject = getDirectObject(object, prop), dproperty = prop.split(".").slice(-1)[0];
                    var updateValue = function(newValue) {
                        dobject[dproperty] = newValue;
                    };
                    var binder = binders[bnName](node, updateValue, object, attr);
                    binder.updateProperty(dobject[dproperty], attr);
                    return {
                        dobject: dobject,
                        dproperty: dproperty,
                        binder: binder,
                        attribute: attr
                    };
                };
                var objArray = [];
                for (var i = 0; i < binderName.length; i++) {
                    objArray.push(bindProperty(binderName[i], propertyName[i]));
                }
                observer = function(changes) {
                    var index = null;
                    var changed = changes.some(function(change) {
                        return objArray.filter(function(item, i) {
                            if (change.name === item.dproperty && change.object === item.dobject) {
                                index = i;
                                return item;
                            }
                        }).length;
                    });
                    if (changed && objArray != null) {
                        var obj = objArray[index];
                        obj.binder.updateProperty(obj.dobject[obj.dproperty], obj.attribute);
                    }
                };
                Object.observe(object, observer);
                return {
                    unobserve: function() {
                        Object.unobserve(object, observer);
                    }
                };
            }
            function bindCollection(node, array) {
                //捕捉自己并且把自己删除
                function capture(original) {
                    var before = original.previousSibling;
                    var parent = original.parentNode;
                    var node = original.cloneNode(true);
                    original.parentNode.removeChild(original);
                    return {
                        insert: function() {
                            var newNode = node.cloneNode(true);
                            parent.insertBefore(newNode, before);
                            return newNode;
                        }
                    };
                }
                delete node.dataset.repeat;
                var parent = node.parentNode;
                var captured = capture(node);
                var bindItem = function(element) {
                    //为每一个repeat元素设置绑定
                    return bindModel(captured.insert(), element);
                };
                //根据array生成bindings
                var bindings = array.map(bindItem);
                var observer = function(changes) {
                    changes.forEach(function(change) {
                        var index = parseInt(change.name, 10), child;
                        if (isNaN(index)) return;
                        if (change.type === "add") {
                            bindings.push(bindItem(array[index]));
                        } else if (change.type === "update") {
                            bindings[index].unobserve();
                            bindModel(parent.children[index], array[index]);
                        } else if (change.type === "delete") {
                            bindings.pop().unobserve();
                            child = parent.children[index];
                            child.parentNode.removeChild(child);
                        }
                    });
                };
                //observe array
                Object.observe(array, observer);
                return {
                    unobserve: function() {
                        Object.unobserve(array, observer);
                    }
                };
            }
            //是不是被repeat包裹的元素，是,返回false
            function isDirectNested(node) {
                node = node.parentElement;
                while (node) {
                    if (node.dataset.repeat) {
                        return false;
                    }
                    node = node.parentElement;
                }
                return true;
            }
            //返回没有被repeat包裹的元素
            function onlyDirectNested(selector) {
                if (container.length) {
                    container = container[0];
                }
                var collection = container.querySelectorAll(selector);
                return Array.prototype.filter.call(collection, isDirectNested);
            }
            var bindings = onlyDirectNested(selectors).map(function(node) {
                var bindType = [], propertyName = [], attributeName;
                if (node.getAttribute("bind-value")) {
                    bindType.push("value");
                    propertyName.push({
                        prop: node.getAttribute("bind-value")
                    });
                }
                if (node.getAttribute("bind-content")) {
                    bindType.push("content");
                    propertyName.push({
                        prop: node.getAttribute("bind-content")
                    });
                }
                if (node.getAttribute("bind-attr")) {
                    var keyvalArray = node.getAttribute("bind-attr").split(",");
                    for (var i = 0; i < keyvalArray.length; i++) {
                        var keyval = keyvalArray[i].split("=");
                        bindType.push("attribute");
                        propertyName.push({
                            prop: keyval[1],
                            attr: keyval[0]
                        });
                    }
                }
                return bindObject(node, bindType, object, propertyName);
            }).concat(onlyDirectNested("[data-repeat]").map(function(node) {
                return bindCollection(node, object[node.dataset.repeat]);
            }));
            return {
                unobserve: function() {
                    bindings.forEach(function(binding) {
                        binding.unobserve();
                    });
                }
            };
        }
    };
    module.exports = bindEngine;
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

define("/spm_modules/spaseed/1.1.14/main/Node", function(require, exports, module) {
    var mp = require("spm_modules/spaseed/1.1.14/main/mp");
    var Node = mp.Class.extend({
        $elem: null,
        $event: null,
        nodeName: "div",
        ctor: function(data) {
            if (!data) {
                data = {};
            }
            this.nodeName = data.nodeName || "div";
            this.$elem = this.$elem || data.$elem;
            if (!this.$elem) {
                this.isNew = true;
                this.$elem = $(document.createElement(this.nodeName));
            }
            //其他属性
            this.attribute = data.attribute || {};
            //属性
            for (var p in this.attribute) {
                this.$elem[p] = this.attribute[p];
            }
        },
        addChild: function(child) {
            this.$elem.append(child.$elem);
            child.parent = this;
        },
        removeChild: function(child) {
            child.parent = null;
            child.$elem.remove();
        }
    });
    module.exports = Node;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/main/View", function(require, exports, module) {
    var Node = require("spm_modules/spaseed/1.1.14/main/Node");
    var View = Node.extend({
        /*id*/
        _: "",
        /*标题*/
        title: "",
        /*内部元素*/
        elements: {},
        ctor: function(app) {
            this.$super(app);
            this.$app = app;
            //共享网络和事件
            this.$net = app.$net;
            //事件
            this.$event = app.$event;
            this.$on = app.$event.on;
            this.$off = app.$event.off;
            this.$emit = app.$event.emit;
            //绑定events
            if (this.events) {
                this.__bodyhandler = this.__bodyhandler || {};
                for (var p in this.events) {
                    for (var q in this.events[p]) {
                        this.$event.on(this, p, q, this.events[p][q]);
                    }
                    //绑定事件
                    if (!this.__bodyhandler[p]) {
                        //绑定过的事件不再绑定
                        if (!this.__bodyhandler[p]) {
                            this.__bodyhandler[p] = this.$event.bindEvent(this, this.$elem, p);
                        }
                    }
                }
            }
        },
        /*重载*/
        render: function() {},
        /*重载*/
        reload: function() {},
        /*重载*/
        destroy: function() {
            //移除事件
            this.$event.off(this);
        }
    });
    module.exports = View;
});;
define("mp", function(require, exports, module) {
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
            if (this.ctor) {
                this.ctor.apply(this, arguments);
            }
        }
        //父类的原型链
        var $super = this.prototype;
        //用父类的原型链创建一个新对象(复制)，用于继承
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
            //parent也有这个方法
            var override = typeof $super[name] === "function";
            //并且有呼叫parent的方法
            var hasSuperCall = $superTest.test(prop[name]);
            if (isFunc && override && hasSuperCall) {
                description.value = function(name, fn) {
                    return function() {
                        var tmp = this.$super;
                        //父类的方法
                        this.$super = $super[name];
                        //运行结果
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
});