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
"use strict";

define("/app/script/module/page1/page1", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/dom"), View = require("spm_modules/spaseed/1.1.14/main/View"), Dialog = require("spm_modules/spaseed/1.1.14/lib/Dialog"), ErrorTips = require("spm_modules/spaseed/1.1.14/lib/ErrorTips"), template = require("spm_modules/spaseed/1.1.14/lib/template"), asyncRequest = require("spm_modules/spaseed/1.1.14/lib/asyncrequest"), binder = require("spm_modules/spaseed/1.1.14/lib/binder"), request = require("app/script/model/request");
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
                self.$dialog = Dialog.create({
                    $app: self.$app,
                    $parent: self.$elem
                });
                self.$errortips = ErrorTips.create({
                    $parent: self.$elem
                });
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
                },
                opendialog: function() {
                    this.$dialog.alert("对话框，碉堡了!");
                },
                openerrortips: function() {
                    this.$errortips.show("error tips");
                }
            }
        },
        destroy: function() {
            this.$super();
            this.$dialog.destroy();
        }
    });
    module.exports = Page1;
});;
define("/app/script/module/page2/page2", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/dom");
    var template = require("spm_modules/spaseed/1.1.14/lib/template");
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
        events: {
            click: {
                tt_click: function() {}
            }
        }
    });
    module.exports = page2;
});;
define("/app/script/module/page3/index/index", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/dom");
    var template = require("spm_modules/spaseed/1.1.14/lib/template");
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
    var $ = require("spm_modules/spaseed/1.1.14/lib/dom");
    var template = require("spm_modules/spaseed/1.1.14/lib/template");
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
    var $ = require("spm_modules/spaseed/1.1.14/lib/dom");
    var template = require("spm_modules/spaseed/1.1.14/lib/template");
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
define("/app/script/module/page3/page3", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/dom");
    var template = require("spm_modules/spaseed/1.1.14/lib/template");
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

/**
 * @dialog 模块
 * dialog.show(content,{
		buttons:[{
			text:'确定',
			event:'closeDialog'
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
define("/spm_modules/spaseed/1.1.14/lib/Dialog", function(require, exports, module) {
    var Node = require("spm_modules/spaseed/1.1.14/main/Node"), Mask = require("spm_modules/spaseed/1.1.14/lib/Mask"), template = require("spm_modules/spaseed/1.1.14/lib/template");
    var Dialog = Node.extend({
        ctor: function(data) {
            this.$super(data);
            data = data || {};
            this.$parent = data.$parent;
            this.$mask = data.$mask || Mask.create(data);
            this.$app = data.$app;
            this.$event = this.$app.$event;
            this.hideoptions = data.hideoptions;
            //默认class
            this.$elem.addClass("dialog");
            this.$elem.html(template("dialog/dialog"));
            this.$elem.hide();
            //对话框元素
            var elem = this.$elem.length ? this.$elem[0] : this.$elem;
            if (this.$parent.children().indexOf(elem) === -1) {
                this.$parent.append(this.$elem);
            }
            var self = this;
            this.$event.on(this, "click", "hide", function() {
                self.hide(self.hideoptions);
            });
            this.__bodyhandler = {};
            this.__bodyhandler.click = this.$event.bindEvent(this, this.$elem, "click");
        },
        show: function(content, options) {
            options = options || {};
            this.$elem.find(".cont-title").text(options.title || "");
            var prop = options.encode === false ? "html" : "text";
            this.$elem.find(".text-content")[prop](content);
            if (options.buttons) {
                this.$elem.find(".buttonpannel").html(template("dialog/buttonpannel", options));
            } else {
                this.$elem.find(".buttonpannel").hide();
            }
            //有动画
            this.$elem.show();
            this.$mask.show();
            if (options.animate) {
                this.$elem.show();
                this.$elem.height();
                this.$elem.addClass(options.animate);
            }
        },
        alert: function(content) {
            this.show(content, {
                buttons: [ {
                    name: "确定"
                } ]
            });
        },
        hide: function(options) {
            var self = this;
            options = options || {};
            if (options.animate) {
                this.$elem.addClass(options.animate);
                setTimeout(function() {
                    self.$elem.hide();
                    self.$mask.hide();
                }, options.animateduration || 400);
            } else {
                self.$elem.hide();
                self.$mask.hide();
            }
        },
        //手动调用
        destroy: function() {
            //移除事件
            this.$event.off(this);
            for (var p in this.__bodyhandler) {
                this.$event.unbindEvent(this.$elem, p, this.__bodyhandler[p]);
            }
        }
    });
    Dialog.create = function(data) {
        return new Dialog(data);
    };
    module.exports = Dialog;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/ErrorTips", function(require, exports, module) {
    var Node = require("spm_modules/spaseed/1.1.14/main/Node");
    var ErrorTips = Node.extend({
        ctor: function(data) {
            this.$super(data);
            data = data || {};
            this.$parent = data.$parent;
            this.duration = data.duration;
            //默认class
            this.$elem.addClass("layout-err-tips");
            this.$elem.hide();
            //对话框元素
            var elem = this.$elem.length ? this.$elem[0] : this.$elem;
            if (this.$parent.children().indexOf(elem) === -1) {
                this.$parent.append(this.$elem);
            }
        },
        show: function(content, options) {
            var self = this;
            options = options || {};
            setTimeout(function() {
                self.$elem.addClass("fade-out");
            }, this.duration || 3e3);
            this.$elem.text(content);
            this.$elem.show();
        },
        hide: function() {
            this.$elem.hide();
        }
    });
    ErrorTips.create = function(data) {
        return new ErrorTips(data);
    };
    module.exports = ErrorTips;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/Mask", function(require, exports, module) {
    var Node = require("spm_modules/spaseed/1.1.14/main/Node");
    var Mask = Node.extend({
        ctor: function(data) {
            this.$super(data);
            data = data || {};
            this.$parent = data.$parent;
            //默认class
            this.$elem.addClass("mask");
            this.$elem.hide();
            //遮罩元素
            var elem = this.$elem.length ? this.$elem[0] : this.$elem;
            if (this.$parent.children().indexOf(elem) === -1) {
                this.$parent.append(this.$elem);
            }
        },
        show: function(html, options) {
            this.$elem.show();
        },
        hide: function() {
            this.$elem.hide();
        }
    });
    Mask.create = function(data) {
        return new Mask(data);
    };
    module.exports = Mask;
});;
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
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/dom", function(require, exports, module) {
    var $ = function(selector, doc) {
        var elemarray;
        if (/element/i.test(Object.prototype.toString.call(selector))) {
            elemarray = [ selector ];
        } else if (/array|nodelist/i.test(Object.prototype.toString.call(selector))) {
            elemarray = selector;
        } else {
            elemarray = Array.prototype.slice.call((doc || document).querySelectorAll(selector));
        }
        //模拟jquery方法
        elemarray.append = function(elem) {
            if (elem.length) {
                for (var i = 0; i < elem.length; i++) {
                    elemarray[0].appendChild(elem[i]);
                }
            } else {
                elemarray[0].appendChild(elem);
            }
            return elemarray;
        };
        elemarray.remove = function() {
            for (var i = 0; i < elemarray.length; i++) {
                if (elemarray[i].parentNode) {
                    elemarray[i].parentNode.removeChild(elemarray[i]);
                }
            }
            return elemarray;
        };
        elemarray.children = function() {
            return Array.prototype.slice.call(elemarray[0].children);
        };
        elemarray.html = function(content) {
            if (content) {
                for (var i = 0; i < elemarray.length; i++) {
                    elemarray[i].innerHTML = content;
                }
            } else {
                return elemarray[0].innerHTML;
            }
        };
        elemarray.text = function(content) {
            if (content) {
                for (var i = 0; i < elemarray.length; i++) {
                    elemarray[i].innerText = content;
                }
            } else {
                return elemarray[0].innerHTML;
            }
        };
        elemarray.addClass = function(className) {
            if (className) {
                for (var i = 0; i < elemarray.length; i++) {
                    if (elemarray[i].className.indexOf(className) === -1) {
                        elemarray[i].className += " " + className;
                    }
                }
            }
            return elemarray;
        };
        elemarray.removeClass = function(className) {
            if (className) {
                for (var i = 0; i < elemarray.length; i++) {
                    if (elemarray[i].className.indexOf(className) > -1) {
                        elemarray[i].className = elemarray[i].className.replace(new RegExp("\\s*?" + className), "");
                    }
                }
            }
            return elemarray;
        };
        elemarray.attr = function(name, val) {
            if (val) {
                for (var i = 0; i < elemarray.length; i++) {
                    elemarray[i].setAttribute(name, val);
                }
                return elemarray;
            } else {
                return elemarray[0].getAttribute(name);
            }
        };
        elemarray.removeAttr = function(name) {
            for (var i = 0; i < elemarray.length; i++) {
                elemarray[i].removeAttribute(name);
            }
            return elemarray;
        };
        elemarray.data = function(name, val) {
            if (val) {
                for (var i = 0; i < elemarray.length; i++) {
                    elemarray[i].setAttribute("data-" + name, val);
                }
            } else {
                elemarray[0].getAttribute("data-" + name);
            }
            return elemarray;
        };
        elemarray.show = function() {
            for (var i = 0; i < elemarray.length; i++) {
                elemarray[i].style.display = "";
            }
        };
        elemarray.hide = function() {
            for (var i = 0; i < elemarray.length; i++) {
                elemarray[i].style.display = "none";
            }
        };
        elemarray.find = function(selector) {
            return $(elemarray[0].querySelectorAll(selector));
        };
        elemarray.css = function(obj) {
            for (var i = 0; i < elemarray.length; i++) {
                for (var p in obj) {
                    elemarray[i].style[p] = obj[p];
                }
            }
        };
        return elemarray;
    };
    //extend方法
    $.extend = function() {
        var args = Array.prototype.slice.call(arguments);
        for (var i = args.length - 1; i > 0; i--) {
            for (var p in args[i]) {
                args[i - 1][p] = args[i][p];
            }
        }
        return args[0];
    };
    //ajax方法
    $.ajax = function(options) {
        options = options || {};
        options.method = options.method || "GET";
        options.url = options.url || "";
        options.async = options.async || true;
        options.data = options.data || "";
        var xhr = new XMLHttpRequest();
        xhr.onload = function() {
            var ret = JSON.parse(xhr.responseText);
            if (options.success) {
                options.success.call(mpNode, ret);
            }
        };
        xhr.onerror = function() {
            if (options.error) {
                options.error(xhr);
            }
        };
        xhr.open(options.method, options.url, options.async);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(options.data);
    };
    module.exports = $;
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/env", function(require, exports, module) {
    var env = {}, ua = navigator.userAgent;
    env.title = "spaseed";
    env.isAndroid = /android/i.test(ua);
    env.isIOS = /iPod|iPad|iPhone/i.test(ua);
    env.isMobile = env.isAndroid || env.isIOS;
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
"use strict";

define("/spm_modules/spaseed/1.1.14/lib/template", function(require, exports, module) {
    var template = require("tmp/app/view/view");
    var env = require("spm_modules/spaseed/1.1.14/lib/env");
    module.exports = function(id, data) {
        var obj = {
            $env: env
        };
        for (var p in data) {
            obj[p] = data[p];
        }
        return template(id, obj);
    };
});;
"use strict";

define("/spm_modules/spaseed/1.1.14/main/Node", function(require, exports, module) {
    var $ = require("spm_modules/spaseed/1.1.14/lib/dom"), mp = require("spm_modules/spaseed/1.1.14/main/mp");
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
            this.className = data.className;
            if (this.className) {
                this.$elem.addClass(this.className);
            }
            //其他属性
            this.attribute = data.attribute || {};
            //属性
            for (var p in this.attribute) {
                this.$elem.attr(p, this.attribute[p]);
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
    var $ = require("spm_modules/spaseed/1.1.14/lib/dom"), Node = require("spm_modules/spaseed/1.1.14/main/Node");
    var View = Node.extend({
        _: "",
        /*标题*/
        title: "",
        /*内部元素*/
        elements: {},
        $elem: $("#container"),
        ctor: function(data) {
            this.$super(data);
            this.$app = data.app;
            //共享网络和事件
            this.$net = this.$app.$net;
            //事件
            this.$event = this.$app.$event;
            this.$on = this.$app.$event.on;
            this.$off = this.$app.$event.off;
            this.$emit = this.$app.$event.emit;
            this.$router = this.$app.$router;
            //绑定events
            if (this.events) {
                this.__bodyhandler = this.__bodyhandler || {};
                for (var p in this.events) {
                    for (var q in this.events[p]) {
                        this.$event.on(this, p, q, this.events[p][q]);
                    }
                    //绑定事件
                    this.__bodyhandler[p] = this.$event.bindEvent(this, this.$elem, p);
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
            for (var p in this.events) {
                this.$event.unbindEvent(this.$elem, p, this.__bodyhandler[p]);
            }
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
    }, "function" == typeof define) define("/tmp/app/view/view", function() {
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
    /*v:9*/
    template("page1/page1", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), data = $data.data, $out = "";
        return $out += "<h1>", $out += $escape(data.title), $out += "</h1> <div>", $out += $escape(data.description), 
        $out += '</div> <br> <div data-click-event="tt_click">点我+1: <span bind-content="detail"></span></div> <br> <div data-click-event="opendialog">弹出对话框</div> <br> <div data-click-event="openerrortips">弹出轻量错误提示</div> <br> ', 
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