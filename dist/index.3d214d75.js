// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iKiqL":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
const trafficLight = ()=>{
    let state = 'go';
    const lights = [
        {
            className: '.red',
            action: 'stop'
        },
        {
            className: '.yellow',
            action: 'caution'
        },
        {
            className: '.green',
            action: 'go'
        }
    ];
    const switches = [
        {
            action: 'stop',
            label: 'Stop'
        },
        {
            action: 'caution',
            label: 'Caution'
        },
        {
            action: 'go',
            label: 'Go'
        }
    ];
    return {
        view: ()=>[
                lights.map(({ action , className  })=>_mithrilDefault.default(className, {
                        class: [
                            action === state ? 'active' : '', 
                        ].join(' ').trim()
                    })
                ),
                switches.map(({ action , label  })=>_mithrilDefault.default('button', {
                        onclick: ()=>{
                            state = action;
                        }
                    }, label)
                )
            ]
    };
};
document.getElementById("app") && _mithrilDefault.default.mount(document.getElementById('app'), {
    view: (vnode)=>_mithrilDefault.default(trafficLight)
});

},{"mithril":"1zcoP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zcoP":[function(require,module,exports) {
"use strict";
var hyperscript = require("./hyperscript");
var request = require("./request");
var mountRedraw = require("./mount-redraw");
var m = function m() {
    return hyperscript.apply(this, arguments);
};
m.m = hyperscript;
m.trust = hyperscript.trust;
m.fragment = hyperscript.fragment;
m.mount = mountRedraw.mount;
m.route = require("./route");
m.render = require("./render");
m.redraw = mountRedraw.redraw;
m.request = request.request;
m.jsonp = request.jsonp;
m.parseQueryString = require("./querystring/parse");
m.buildQueryString = require("./querystring/build");
m.parsePathname = require("./pathname/parse");
m.buildPathname = require("./pathname/build");
m.vnode = require("./render/vnode");
m.PromisePolyfill = require("./promise/polyfill");
module.exports = m;

},{"./hyperscript":"bDjZC","./request":"5poAh","./mount-redraw":"jh7iq","./route":"4SNaV","./render":"lR5T8","./querystring/parse":"ZeRxY","./querystring/build":"fbqKb","./pathname/parse":"jK2nr","./pathname/build":"k2dgA","./render/vnode":"5c56e","./promise/polyfill":"tOBdH"}],"bDjZC":[function(require,module,exports) {
"use strict";
var hyperscript = require("./render/hyperscript");
hyperscript.trust = require("./render/trust");
hyperscript.fragment = require("./render/fragment");
module.exports = hyperscript;

},{"./render/hyperscript":"js0vQ","./render/trust":"6vpah","./render/fragment":"gax7g"}],"js0vQ":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
var hyperscriptVnode = require("./hyperscriptVnode");
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
var selectorCache = {
};
var hasOwn = {
}.hasOwnProperty;
function isEmpty(object) {
    for(var key in object)if (hasOwn.call(object, key)) return false;
    return true;
}
function compileSelector(selector) {
    var match, tag = "div", classes = [], attrs = {
    };
    while(match = selectorParser.exec(selector)){
        var type = match[1], value = match[2];
        if (type === "" && value !== "") tag = value;
        else if (type === "#") attrs.id = value;
        else if (type === ".") classes.push(value);
        else if (match[3][0] === "[") {
            var attrValue = match[6];
            if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
            if (match[4] === "class") classes.push(attrValue);
            else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true;
        }
    }
    if (classes.length > 0) attrs.className = classes.join(" ");
    return selectorCache[selector] = {
        tag: tag,
        attrs: attrs
    };
}
function execSelector(state, vnode) {
    var attrs = vnode.attrs;
    var children = Vnode.normalizeChildren(vnode.children);
    var hasClass = hasOwn.call(attrs, "class");
    var className = hasClass ? attrs.class : attrs.className;
    vnode.tag = state.tag;
    vnode.attrs = null;
    vnode.children = undefined;
    if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
        var newAttrs = {
        };
        for(var key in attrs)if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key];
        attrs = newAttrs;
    }
    for(var key in state.attrs)if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)) attrs[key] = state.attrs[key];
    if (className != null || state.attrs.className != null) attrs.className = className != null ? state.attrs.className != null ? String(state.attrs.className) + " " + String(className) : className : state.attrs.className != null ? state.attrs.className : null;
    if (hasClass) attrs.class = null;
    for(var key in attrs)if (hasOwn.call(attrs, key) && key !== "key") {
        vnode.attrs = attrs;
        break;
    }
    if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") vnode.text = children[0].children;
    else vnode.children = children;
    return vnode;
}
function hyperscript(selector) {
    if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") throw Error("The selector must be either a string or a component.");
    var vnode = hyperscriptVnode.apply(1, arguments);
    if (typeof selector === "string") {
        vnode.children = Vnode.normalizeChildren(vnode.children);
        if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode);
    }
    vnode.tag = selector;
    return vnode;
}
module.exports = hyperscript;

},{"../render/vnode":"5c56e","./hyperscriptVnode":"bU2ny"}],"5c56e":[function(require,module,exports) {
"use strict";
function Vnode(tag, key, attrs, children, text, dom) {
    return {
        tag: tag,
        key: key,
        attrs: attrs,
        children: children,
        text: text,
        dom: dom,
        domSize: undefined,
        state: undefined,
        events: undefined,
        instance: undefined
    };
}
Vnode.normalize = function(node) {
    if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined);
    if (node == null || typeof node === "boolean") return null;
    if (typeof node === "object") return node;
    return Vnode("#", undefined, undefined, String(node), undefined, undefined);
};
Vnode.normalizeChildren = function(input) {
    var children = [];
    if (input.length) {
        var isKeyed = input[0] != null && input[0].key != null;
        // Note: this is a *very* perf-sensitive check.
        // Fun fact: merging the loop like this is somehow faster than splitting
        // it, noticeably so.
        for(var i = 1; i < input.length; i++){
            if ((input[i] != null && input[i].key != null) !== isKeyed) throw new TypeError("Vnodes must either always have keys or never have keys!");
        }
        for(var i = 0; i < input.length; i++)children[i] = Vnode.normalize(input[i]);
    }
    return children;
};
module.exports = Vnode;

},{}],"bU2ny":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
    var attrs = arguments[this], start = this + 1, children;
    if (attrs == null) attrs = {
    };
    else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
        attrs = {
        };
        start = this;
    }
    if (arguments.length === start + 1) {
        children = arguments[start];
        if (!Array.isArray(children)) children = [
            children
        ];
    } else {
        children = [];
        while(start < arguments.length)children.push(arguments[start++]);
    }
    return Vnode("", attrs.key, attrs, children);
};

},{"../render/vnode":"5c56e"}],"6vpah":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
module.exports = function(html) {
    if (html == null) html = "";
    return Vnode("<", undefined, undefined, html, undefined, undefined);
};

},{"../render/vnode":"5c56e"}],"gax7g":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
var hyperscriptVnode = require("./hyperscriptVnode");
module.exports = function() {
    var vnode = hyperscriptVnode.apply(0, arguments);
    vnode.tag = "[";
    vnode.children = Vnode.normalizeChildren(vnode.children);
    return vnode;
};

},{"../render/vnode":"5c56e","./hyperscriptVnode":"bU2ny"}],"5poAh":[function(require,module,exports) {
"use strict";
var PromisePolyfill = require("./promise/promise");
var mountRedraw = require("./mount-redraw");
module.exports = require("./request/request")(window, PromisePolyfill, mountRedraw.redraw);

},{"./promise/promise":"298EJ","./mount-redraw":"jh7iq","./request/request":"8fm7T"}],"298EJ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var PromisePolyfill = require("./polyfill");
if (typeof window !== "undefined") {
    if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill;
    else if (!window.Promise.prototype.finally) window.Promise.prototype.finally = PromisePolyfill.prototype.finally;
    module.exports = window.Promise;
} else if (typeof global !== "undefined") {
    if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill;
    else if (!global.Promise.prototype.finally) global.Promise.prototype.finally = PromisePolyfill.prototype.finally;
    module.exports = global.Promise;
} else module.exports = PromisePolyfill;

},{"./polyfill":"tOBdH"}],"tOBdH":[function(require,module,exports) {
"use strict";
/** @constructor */ var PromisePolyfill = function(executor) {
    if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`");
    if (typeof executor !== "function") throw new TypeError("executor must be a function");
    var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false);
    var instance = self._instance = {
        resolvers: resolvers,
        rejectors: rejectors
    };
    var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
    function handler(list, shouldAbsorb) {
        return function execute(value) {
            var then;
            try {
                if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
                    if (value === self) throw new TypeError("Promise can't be resolved w/ itself");
                    executeOnce(then.bind(value));
                } else callAsync(function() {
                    if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value);
                    for(var i = 0; i < list.length; i++)list[i](value);
                    resolvers.length = 0, rejectors.length = 0;
                    instance.state = shouldAbsorb;
                    instance.retry = function() {
                        execute(value);
                    };
                });
            } catch (e) {
                rejectCurrent(e);
            }
        };
    }
    function executeOnce(then) {
        var runs = 0;
        function run(fn) {
            return function(value) {
                if (runs++ > 0) return;
                fn(value);
            };
        }
        var onerror = run(rejectCurrent);
        try {
            then(run(resolveCurrent), onerror);
        } catch (e) {
            onerror(e);
        }
    }
    executeOnce(executor);
};
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
    var self = this, instance = self._instance;
    function handle(callback, list, next, state) {
        list.push(function(value) {
            if (typeof callback !== "function") next(value);
            else try {
                resolveNext(callback(value));
            } catch (e) {
                if (rejectNext) rejectNext(e);
            }
        });
        if (typeof instance.retry === "function" && state === instance.state) instance.retry();
    }
    var resolveNext, rejectNext;
    var promise = new PromisePolyfill(function(resolve, reject) {
        resolveNext = resolve, rejectNext = reject;
    });
    handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false);
    return promise;
};
PromisePolyfill.prototype.catch = function(onRejection) {
    return this.then(null, onRejection);
};
PromisePolyfill.prototype.finally = function(callback) {
    return this.then(function(value) {
        return PromisePolyfill.resolve(callback()).then(function() {
            return value;
        });
    }, function(reason) {
        return PromisePolyfill.resolve(callback()).then(function() {
            return PromisePolyfill.reject(reason);
        });
    });
};
PromisePolyfill.resolve = function(value) {
    if (value instanceof PromisePolyfill) return value;
    return new PromisePolyfill(function(resolve) {
        resolve(value);
    });
};
PromisePolyfill.reject = function(value) {
    return new PromisePolyfill(function(resolve, reject) {
        reject(value);
    });
};
PromisePolyfill.all = function(list) {
    return new PromisePolyfill(function(resolve, reject) {
        var total = list.length, count = 0, values = [];
        if (list.length === 0) resolve([]);
        else for(var i = 0; i < list.length; i++)(function(i) {
            function consume(value) {
                count++;
                values[i] = value;
                if (count === total) resolve(values);
            }
            if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") list[i].then(consume, reject);
            else consume(list[i]);
        })(i);
    });
};
PromisePolyfill.race = function(list) {
    return new PromisePolyfill(function(resolve, reject) {
        for(var i = 0; i < list.length; i++)list[i].then(resolve, reject);
    });
};
module.exports = PromisePolyfill;

},{}],"jh7iq":[function(require,module,exports) {
"use strict";
var render = require("./render");
module.exports = require("./api/mount-redraw")(render, requestAnimationFrame, console);

},{"./render":"lR5T8","./api/mount-redraw":"8CHiL"}],"lR5T8":[function(require,module,exports) {
"use strict";
module.exports = require("./render/render")(window);

},{"./render/render":"cS6qC"}],"cS6qC":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
module.exports = function($window) {
    var $doc = $window && $window.document;
    var currentRedraw;
    var nameSpace = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    };
    function getNameSpace(vnode) {
        return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag];
    }
    //sanity check to discourage people from doing `vnode.state = ...`
    function checkState(vnode, original) {
        if (vnode.state !== original) throw new Error("`vnode.state` must not be modified");
    }
    //Note: the hook is passed as the `this` argument to allow proxying the
    //arguments without requiring a full array allocation to do so. It also
    //takes advantage of the fact the current `vnode` is the first argument in
    //all lifecycle methods.
    function callHook(vnode) {
        var original = vnode.state;
        try {
            return this.apply(original, arguments);
        } finally{
            checkState(vnode, original);
        }
    }
    // IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
    // inside an iframe. Catch and swallow this error, and heavy-handidly return null.
    function activeElement() {
        try {
            return $doc.activeElement;
        } catch (e) {
            return null;
        }
    }
    //create
    function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
        for(var i = start; i < end; i++){
            var vnode = vnodes[i];
            if (vnode != null) createNode(parent, vnode, hooks, ns, nextSibling);
        }
    }
    function createNode(parent, vnode, hooks, ns, nextSibling) {
        var tag = vnode.tag;
        if (typeof tag === "string") {
            vnode.state = {
            };
            if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
            switch(tag){
                case "#":
                    createText(parent, vnode, nextSibling);
                    break;
                case "<":
                    createHTML(parent, vnode, ns, nextSibling);
                    break;
                case "[":
                    createFragment(parent, vnode, hooks, ns, nextSibling);
                    break;
                default:
                    createElement(parent, vnode, hooks, ns, nextSibling);
            }
        } else createComponent(parent, vnode, hooks, ns, nextSibling);
    }
    function createText(parent, vnode, nextSibling) {
        vnode.dom = $doc.createTextNode(vnode.children);
        insertNode(parent, vnode.dom, nextSibling);
    }
    var possibleParents = {
        caption: "table",
        thead: "table",
        tbody: "table",
        tfoot: "table",
        tr: "tbody",
        th: "tr",
        td: "tr",
        colgroup: "table",
        col: "colgroup"
    };
    function createHTML(parent, vnode, ns, nextSibling) {
        var match = vnode.children.match(/^\s*?<(\w+)/im) || [];
        // not using the proper parent makes the child element(s) vanish.
        //     var div = document.createElement("div")
        //     div.innerHTML = "<td>i</td><td>j</td>"
        //     console.log(div.innerHTML)
        // --> "ij", no <td> in sight.
        var temp = $doc.createElement(possibleParents[match[1]] || "div");
        if (ns === "http://www.w3.org/2000/svg") {
            temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>";
            temp = temp.firstChild;
        } else temp.innerHTML = vnode.children;
        vnode.dom = temp.firstChild;
        vnode.domSize = temp.childNodes.length;
        // Capture nodes to remove, so we don't confuse them.
        vnode.instance = [];
        var fragment = $doc.createDocumentFragment();
        var child;
        while(child = temp.firstChild){
            vnode.instance.push(child);
            fragment.appendChild(child);
        }
        insertNode(parent, fragment, nextSibling);
    }
    function createFragment(parent, vnode, hooks, ns, nextSibling) {
        var fragment = $doc.createDocumentFragment();
        if (vnode.children != null) {
            var children = vnode.children;
            createNodes(fragment, children, 0, children.length, hooks, null, ns);
        }
        vnode.dom = fragment.firstChild;
        vnode.domSize = fragment.childNodes.length;
        insertNode(parent, fragment, nextSibling);
    }
    function createElement(parent, vnode, hooks, ns, nextSibling) {
        var tag = vnode.tag;
        var attrs = vnode.attrs;
        var is = attrs && attrs.is;
        ns = getNameSpace(vnode) || ns;
        var element = ns ? is ? $doc.createElementNS(ns, tag, {
            is: is
        }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, {
            is: is
        }) : $doc.createElement(tag);
        vnode.dom = element;
        if (attrs != null) setAttrs(vnode, attrs, ns);
        insertNode(parent, element, nextSibling);
        if (!maybeSetContentEditable(vnode)) {
            if (vnode.text != null) {
                if (vnode.text !== "") element.textContent = vnode.text;
                else vnode.children = [
                    Vnode("#", undefined, undefined, vnode.text, undefined, undefined)
                ];
            }
            if (vnode.children != null) {
                var children = vnode.children;
                createNodes(element, children, 0, children.length, hooks, null, ns);
                if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs);
            }
        }
    }
    function initComponent(vnode, hooks) {
        var sentinel;
        if (typeof vnode.tag.view === "function") {
            vnode.state = Object.create(vnode.tag);
            sentinel = vnode.state.view;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
        } else {
            vnode.state = void 0;
            sentinel = vnode.tag;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
            vnode.state = vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function" ? new vnode.tag(vnode) : vnode.tag(vnode);
        }
        initLifecycle(vnode.state, vnode, hooks);
        if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
        vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
        if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
        sentinel.$$reentrantLock$$ = null;
    }
    function createComponent(parent, vnode, hooks, ns, nextSibling) {
        initComponent(vnode, hooks);
        if (vnode.instance != null) {
            createNode(parent, vnode.instance, hooks, ns, nextSibling);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
        } else vnode.domSize = 0;
    }
    //update
    /**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */ // This function diffs and patches lists of vnodes, both keyed and unkeyed.
    //
    // We will:
    //
    // 1. describe its general structure
    // 2. focus on the diff algorithm optimizations
    // 3. discuss DOM node operations.
    // ## Overview:
    //
    // The updateNodes() function:
    // - deals with trivial cases
    // - determines whether the lists are keyed or unkeyed based on the first non-null node
    //   of each list.
    // - diffs them and patches the DOM if needed (that's the brunt of the code)
    // - manages the leftovers: after diffing, are there:
    //   - old nodes left to remove?
    // 	 - new nodes to insert?
    // 	 deal with them!
    //
    // The lists are only iterated over once, with an exception for the nodes in `old` that
    // are visited in the fourth part of the diff and in the `removeNodes` loop.
    // ## Diffing
    //
    // Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
    // may be good for context on longest increasing subsequence-based logic for moving nodes.
    //
    // In order to diff keyed lists, one has to
    //
    // 1) match nodes in both lists, per key, and update them accordingly
    // 2) create the nodes present in the new list, but absent in the old one
    // 3) remove the nodes present in the old list, but absent in the new one
    // 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
    //
    // To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
    // over the new list and for each new vnode, find the corresponding vnode in the old list using
    // the map.
    // 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
    // and must be created.
    // For the removals, we actually remove the nodes that have been updated from the old list.
    // The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
    // The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
    // algorithm.
    //
    // the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
    // from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
    // corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
    //  match the above lists, for example).
    //
    // In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
    // can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
    //
    // @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
    // the longest increasing subsequence *of old nodes still present in the new list*).
    //
    // It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
    // and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
    // the `LIS` and a temporary one to create the LIS).
    //
    // So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
    // the LIS and can be updated without moving them.
    //
    // If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
    // the exception of the last node if the list is fully reversed).
    //
    // ## Finding the next sibling.
    //
    // `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
    // When the list is being traversed top-down, at any index, the DOM nodes up to the previous
    // vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
    // list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
    //
    // In the other scenarios (swaps, upwards traversal, map-based diff),
    // the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
    // bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
    // as the next sibling (cached in the `nextSibling` variable).
    // ## DOM node moves
    //
    // In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
    // this is not the case if the node moved (second and fourth part of the diff algo). We move
    // the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
    // variable rather than fetching it using `getNextSibling()`.
    //
    // The fourth part of the diff currently inserts nodes unconditionally, leading to issues
    // like #1791 and #1999. We need to be smarter about those situations where adjascent old
    // nodes remain together in the new list in a way that isn't covered by parts one and
    // three of the diff algo.
    function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
        if (old === vnodes || old == null && vnodes == null) return;
        else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns);
        else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length);
        else {
            var isOldKeyed = old[0] != null && old[0].key != null;
            var isKeyed = vnodes[0] != null && vnodes[0].key != null;
            var start = 0, oldStart = 0;
            if (!isOldKeyed) while(oldStart < old.length && old[oldStart] == null)oldStart++;
            if (!isKeyed) while(start < vnodes.length && vnodes[start] == null)start++;
            if (isKeyed === null && isOldKeyed == null) return; // both lists are full of nulls
            if (isOldKeyed !== isKeyed) {
                removeNodes(parent, old, oldStart, old.length);
                createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else if (!isKeyed) {
                // Don't index past the end of either list (causes deopts).
                var commonLength = old.length < vnodes.length ? old.length : vnodes.length;
                // Rewind if necessary to the first non-null index on either side.
                // We could alternatively either explicitly create or remove nodes when `start !== oldStart`
                // but that would be optimizing for sparse lists which are more rare than dense ones.
                start = start < oldStart ? start : oldStart;
                for(; start < commonLength; start++){
                    o = old[start];
                    v = vnodes[start];
                    if (o === v || o == null && v == null) continue;
                    else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling));
                    else if (v == null) removeNode(parent, o);
                    else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns);
                }
                if (old.length > commonLength) removeNodes(parent, old, start, old.length);
                if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else {
                // keyed diff
                var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling;
                // bottom-up
                while(oldEnd >= oldStart && end >= start){
                    oe = old[oldEnd];
                    ve = vnodes[end];
                    if (oe.key !== ve.key) break;
                    if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldEnd--, end--;
                }
                // top-down
                while(oldEnd >= oldStart && end >= start){
                    o = old[oldStart];
                    v = vnodes[start];
                    if (o.key !== v.key) break;
                    oldStart++, start++;
                    if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns);
                }
                // swaps and list reversals
                while(oldEnd >= oldStart && end >= start){
                    if (start === end) break;
                    if (o.key !== ve.key || oe.key !== v.key) break;
                    topSibling = getNextSibling(old, oldStart, nextSibling);
                    moveNodes(parent, oe, topSibling);
                    if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns);
                    if (++start <= --end) moveNodes(parent, o, nextSibling);
                    if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldStart++;
                    oldEnd--;
                    oe = old[oldEnd];
                    ve = vnodes[end];
                    o = old[oldStart];
                    v = vnodes[start];
                }
                // bottom up once again
                while(oldEnd >= oldStart && end >= start){
                    if (oe.key !== ve.key) break;
                    if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldEnd--, end--;
                    oe = old[oldEnd];
                    ve = vnodes[end];
                }
                if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1);
                else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
                else {
                    // inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
                    var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li = 0, i = 0, pos = 2147483647, matched = 0, map, lisIndices;
                    for(i = 0; i < vnodesLength; i++)oldIndices[i] = -1;
                    for(i = end; i >= start; i--){
                        if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1);
                        ve = vnodes[i];
                        var oldIndex = map[ve.key];
                        if (oldIndex != null) {
                            pos = oldIndex < pos ? oldIndex : -1 // becomes -1 if nodes were re-ordered
                            ;
                            oldIndices[i - start] = oldIndex;
                            oe = old[oldIndex];
                            old[oldIndex] = null;
                            if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                            if (ve.dom != null) nextSibling = ve.dom;
                            matched++;
                        }
                    }
                    nextSibling = originalNextSibling;
                    if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1);
                    if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
                    else {
                        if (pos === -1) {
                            // the indices of the indices of the items that are part of the
                            // longest increasing subsequence in the oldIndices list
                            lisIndices = makeLisIndices(oldIndices);
                            li = lisIndices.length - 1;
                            for(i = end; i >= start; i--){
                                v = vnodes[i];
                                if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);
                                else if (lisIndices[li] === i - start) li--;
                                else moveNodes(parent, v, nextSibling);
                                if (v.dom != null) nextSibling = vnodes[i].dom;
                            }
                        } else for(i = end; i >= start; i--){
                            v = vnodes[i];
                            if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);
                            if (v.dom != null) nextSibling = vnodes[i].dom;
                        }
                    }
                }
            }
        }
    }
    function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
        var oldTag = old.tag, tag = vnode.tag;
        if (oldTag === tag) {
            vnode.state = old.state;
            vnode.events = old.events;
            if (shouldNotUpdate(vnode, old)) return;
            if (typeof oldTag === "string") {
                if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
                switch(oldTag){
                    case "#":
                        updateText(old, vnode);
                        break;
                    case "<":
                        updateHTML(parent, old, vnode, ns, nextSibling);
                        break;
                    case "[":
                        updateFragment(parent, old, vnode, hooks, nextSibling, ns);
                        break;
                    default:
                        updateElement(old, vnode, hooks, ns);
                }
            } else updateComponent(parent, old, vnode, hooks, nextSibling, ns);
        } else {
            removeNode(parent, old);
            createNode(parent, vnode, hooks, ns, nextSibling);
        }
    }
    function updateText(old, vnode) {
        if (old.children.toString() !== vnode.children.toString()) old.dom.nodeValue = vnode.children;
        vnode.dom = old.dom;
    }
    function updateHTML(parent, old, vnode, ns, nextSibling) {
        if (old.children !== vnode.children) {
            removeHTML(parent, old);
            createHTML(parent, vnode, ns, nextSibling);
        } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
            vnode.instance = old.instance;
        }
    }
    function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
        updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns);
        var domSize = 0, children = vnode.children;
        vnode.dom = null;
        if (children != null) {
            for(var i = 0; i < children.length; i++){
                var child = children[i];
                if (child != null && child.dom != null) {
                    if (vnode.dom == null) vnode.dom = child.dom;
                    domSize += child.domSize || 1;
                }
            }
            if (domSize !== 1) vnode.domSize = domSize;
        }
    }
    function updateElement(old, vnode, hooks, ns) {
        var element = vnode.dom = old.dom;
        ns = getNameSpace(vnode) || ns;
        if (vnode.tag === "textarea") {
            if (vnode.attrs == null) vnode.attrs = {
            };
            if (vnode.text != null) {
                vnode.attrs.value = vnode.text //FIXME handle multiple children
                ;
                vnode.text = undefined;
            }
        }
        updateAttrs(vnode, old.attrs, vnode.attrs, ns);
        if (!maybeSetContentEditable(vnode)) {
            if (old.text != null && vnode.text != null && vnode.text !== "") {
                if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text;
            } else {
                if (old.text != null) old.children = [
                    Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)
                ];
                if (vnode.text != null) vnode.children = [
                    Vnode("#", undefined, undefined, vnode.text, undefined, undefined)
                ];
                updateNodes(element, old.children, vnode.children, hooks, null, ns);
            }
        }
    }
    function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
        vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
        if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
        updateLifecycle(vnode.state, vnode, hooks);
        if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
        if (vnode.instance != null) {
            if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling);
            else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.instance.domSize;
        } else if (old.instance != null) {
            removeNode(parent, old.instance);
            vnode.dom = undefined;
            vnode.domSize = 0;
        } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
        }
    }
    function getKeyMap(vnodes, start, end) {
        var map = Object.create(null);
        for(; start < end; start++){
            var vnode = vnodes[start];
            if (vnode != null) {
                var key = vnode.key;
                if (key != null) map[key] = start;
            }
        }
        return map;
    }
    // Lifted from ivi https://github.com/ivijs/ivi/
    // takes a list of unique numbers (-1 is special and can
    // occur multiple times) and returns an array with the indices
    // of the items that are part of the longest increasing
    // subsequece
    var lisTemp = [];
    function makeLisIndices(a) {
        var result = [
            0
        ];
        var u = 0, v = 0, i = 0;
        var il = lisTemp.length = a.length;
        for(var i = 0; i < il; i++)lisTemp[i] = a[i];
        for(var i = 0; i < il; ++i){
            if (a[i] === -1) continue;
            var j = result[result.length - 1];
            if (a[j] < a[i]) {
                lisTemp[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while(u < v){
                // Fast integer average without overflow.
                // eslint-disable-next-line no-bitwise
                var c = (u >>> 1) + (v >>> 1) + (u & v & 1);
                if (a[result[c]] < a[i]) u = c + 1;
                else v = c;
            }
            if (a[i] < a[result[u]]) {
                if (u > 0) lisTemp[i] = result[u - 1];
                result[u] = i;
            }
        }
        u = result.length;
        v = result[u - 1];
        while(u-- > 0){
            result[u] = v;
            v = lisTemp[v];
        }
        lisTemp.length = 0;
        return result;
    }
    function getNextSibling(vnodes, i, nextSibling) {
        for(; i < vnodes.length; i++){
            if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;
        }
        return nextSibling;
    }
    // This covers a really specific edge case:
    // - Parent node is keyed and contains child
    // - Child is removed, returns unresolved promise in `onbeforeremove`
    // - Parent node is moved in keyed diff
    // - Remaining children still need moved appropriately
    //
    // Ideally, I'd track removed nodes as well, but that introduces a lot more
    // complexity and I'm not exactly interested in doing that.
    function moveNodes(parent, vnode, nextSibling) {
        var frag = $doc.createDocumentFragment();
        moveChildToFrag(parent, frag, vnode);
        insertNode(parent, frag, nextSibling);
    }
    function moveChildToFrag(parent, frag, vnode) {
        // Dodge the recursion overhead in a few of the most common cases.
        while(vnode.dom != null && vnode.dom.parentNode === parent){
            if (typeof vnode.tag !== "string") {
                vnode = vnode.instance;
                if (vnode != null) continue;
            } else if (vnode.tag === "<") for(var i = 0; i < vnode.instance.length; i++)frag.appendChild(vnode.instance[i]);
            else if (vnode.tag !== "[") // Don't recurse for text nodes *or* elements, just fragments
            frag.appendChild(vnode.dom);
            else if (vnode.children.length === 1) {
                vnode = vnode.children[0];
                if (vnode != null) continue;
            } else for(var i = 0; i < vnode.children.length; i++){
                var child = vnode.children[i];
                if (child != null) moveChildToFrag(parent, frag, child);
            }
            break;
        }
    }
    function insertNode(parent, dom, nextSibling) {
        if (nextSibling != null) parent.insertBefore(dom, nextSibling);
        else parent.appendChild(dom);
    }
    function maybeSetContentEditable(vnode) {
        if (vnode.attrs == null || vnode.attrs.contenteditable == null && vnode.attrs.contentEditable == null // property
        ) return false;
        var children = vnode.children;
        if (children != null && children.length === 1 && children[0].tag === "<") {
            var content = children[0].children;
            if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;
        } else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted");
        return true;
    }
    //remove
    function removeNodes(parent, vnodes, start, end) {
        for(var i = start; i < end; i++){
            var vnode = vnodes[i];
            if (vnode != null) removeNode(parent, vnode);
        }
    }
    function removeNode(parent, vnode) {
        var mask = 0;
        var original = vnode.state;
        var stateResult, attrsResult;
        if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
            var result = callHook.call(vnode.state.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
                mask = 1;
                stateResult = result;
            }
        }
        if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
            var result = callHook.call(vnode.attrs.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
                // eslint-disable-next-line no-bitwise
                mask |= 2;
                attrsResult = result;
            }
        }
        checkState(vnode, original);
        // If we can, try to fast-path it and avoid all the overhead of awaiting
        if (!mask) {
            onremove(vnode);
            removeChild(parent, vnode);
        } else {
            if (stateResult != null) {
                var next = function() {
                    // eslint-disable-next-line no-bitwise
                    if (mask & 1) {
                        mask &= 2;
                        if (!mask) reallyRemove();
                    }
                };
                stateResult.then(next, next);
            }
            if (attrsResult != null) {
                var next = function() {
                    // eslint-disable-next-line no-bitwise
                    if (mask & 2) {
                        mask &= 1;
                        if (!mask) reallyRemove();
                    }
                };
                attrsResult.then(next, next);
            }
        }
        function reallyRemove() {
            checkState(vnode, original);
            onremove(vnode);
            removeChild(parent, vnode);
        }
    }
    function removeHTML(parent, vnode) {
        for(var i = 0; i < vnode.instance.length; i++)parent.removeChild(vnode.instance[i]);
    }
    function removeChild(parent, vnode) {
        // Dodge the recursion overhead in a few of the most common cases.
        while(vnode.dom != null && vnode.dom.parentNode === parent){
            if (typeof vnode.tag !== "string") {
                vnode = vnode.instance;
                if (vnode != null) continue;
            } else if (vnode.tag === "<") removeHTML(parent, vnode);
            else {
                if (vnode.tag !== "[") {
                    parent.removeChild(vnode.dom);
                    if (!Array.isArray(vnode.children)) break;
                }
                if (vnode.children.length === 1) {
                    vnode = vnode.children[0];
                    if (vnode != null) continue;
                } else for(var i = 0; i < vnode.children.length; i++){
                    var child = vnode.children[i];
                    if (child != null) removeChild(parent, child);
                }
            }
            break;
        }
    }
    function onremove(vnode) {
        if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode);
        if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode);
        if (typeof vnode.tag !== "string") {
            if (vnode.instance != null) onremove(vnode.instance);
        } else {
            var children = vnode.children;
            if (Array.isArray(children)) for(var i = 0; i < children.length; i++){
                var child = children[i];
                if (child != null) onremove(child);
            }
        }
    }
    //attrs
    function setAttrs(vnode, attrs, ns) {
        for(var key in attrs)setAttr(vnode, key, null, attrs[key], ns);
    }
    function setAttr(vnode, key, old, value, ns) {
        if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || old === value && !isFormAttribute(vnode, key) && typeof value !== "object") return;
        if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value);
        if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
        else if (key === "style") updateStyle(vnode.dom, old, value);
        else if (hasPropertyKey(vnode, key, ns)) {
            if (key === "value") {
                // Only do the coercion if we're actually going to check the value.
                /* eslint-disable no-implicit-coercion */ //setting input[value] to same value by typing on focused element moves cursor to end in Chrome
                if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement()) return;
                //setting select[value] to same value while having select open blinks select dropdown in Chrome
                if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return;
                //setting option[value] to same value while having select open blinks select dropdown in Chrome
                if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return;
            /* eslint-enable no-implicit-coercion */ }
            // If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
            if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value);
            else vnode.dom[key] = value;
        } else if (typeof value === "boolean") {
            if (value) vnode.dom.setAttribute(key, "");
            else vnode.dom.removeAttribute(key);
        } else vnode.dom.setAttribute(key === "className" ? "class" : key, value);
    }
    function removeAttr(vnode, key, old, ns) {
        if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return;
        if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined);
        else if (key === "style") updateStyle(vnode.dom, old, null);
        else if (hasPropertyKey(vnode, key, ns) && key !== "className" && !(key === "value" && (vnode.tag === "option" || vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement())) && !(vnode.tag === "input" && key === "type")) vnode.dom[key] = null;
        else {
            var nsLastIndex = key.indexOf(":");
            if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1);
            if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key);
        }
    }
    function setLateSelectAttrs(vnode, attrs) {
        if ("value" in attrs) {
            if (attrs.value === null) {
                if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null;
            } else {
                var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
                ;
                if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) vnode.dom.value = normalized;
            }
        }
        if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined);
    }
    function updateAttrs(vnode, old, attrs, ns) {
        if (attrs != null) for(var key in attrs)setAttr(vnode, key, old && old[key], attrs[key], ns);
        var val;
        if (old != null) {
            for(var key in old)if ((val = old[key]) != null && (attrs == null || attrs[key] == null)) removeAttr(vnode, key, val, ns);
        }
    }
    function isFormAttribute(vnode, attr) {
        return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement;
    }
    function isLifecycleMethod(attr) {
        return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
    }
    function hasPropertyKey(vnode, key, ns) {
        // Filter out namespaced keys
        return ns === undefined && // If it's a custom element, just keep it.
        (vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is || // If it's a normal element, let's try to avoid a few browser bugs.
        key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height" // && key !== "type"
        ) && key in vnode.dom;
    }
    //style
    var uppercaseRegex = /[A-Z]/g;
    function toLowerCase(capital) {
        return "-" + capital.toLowerCase();
    }
    function normalizeKey(key) {
        return key[0] === "-" && key[1] === "-" ? key : key === "cssFloat" ? "float" : key.replace(uppercaseRegex, toLowerCase);
    }
    function updateStyle(element, old, style) {
        if (old === style) ;
        else if (style == null) // New style is missing, just clear it.
        element.style.cssText = "";
        else if (typeof style !== "object") // New style is a string, let engine deal with patching.
        element.style.cssText = style;
        else if (old == null || typeof old !== "object") {
            // `old` is missing or a string, `style` is an object.
            element.style.cssText = "";
            // Add new style properties
            for(var key in style){
                var value = style[key];
                if (value != null) element.style.setProperty(normalizeKey(key), String(value));
            }
        } else {
            // Both old & new are (different) objects.
            // Update style properties that have changed
            for(var key in style){
                var value = style[key];
                if (value != null && (value = String(value)) !== String(old[key])) element.style.setProperty(normalizeKey(key), value);
            }
            // Remove style properties that no longer exist
            for(var key in old)if (old[key] != null && style[key] == null) element.style.removeProperty(normalizeKey(key));
        }
    }
    // Here's an explanation of how this works:
    // 1. The event names are always (by design) prefixed by `on`.
    // 2. The EventListener interface accepts either a function or an object
    //    with a `handleEvent` method.
    // 3. The object does not inherit from `Object.prototype`, to avoid
    //    any potential interference with that (e.g. setters).
    // 4. The event name is remapped to the handler before calling it.
    // 5. In function-based event handlers, `ev.target === this`. We replicate
    //    that below.
    // 6. In function-based event handlers, `return false` prevents the default
    //    action and stops event propagation. We replicate that below.
    function EventDict() {
        // Save this, so the current redraw is correctly tracked.
        this._ = currentRedraw;
    }
    EventDict.prototype = Object.create(null);
    EventDict.prototype.handleEvent = function(ev) {
        var handler = this["on" + ev.type];
        var result;
        if (typeof handler === "function") result = handler.call(ev.currentTarget, ev);
        else if (typeof handler.handleEvent === "function") handler.handleEvent(ev);
        if (this._ && ev.redraw !== false) (0, this._)();
        if (result === false) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    //event
    function updateEvent(vnode, key, value) {
        if (vnode.events != null) {
            if (vnode.events[key] === value) return;
            if (value != null && (typeof value === "function" || typeof value === "object")) {
                if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false);
                vnode.events[key] = value;
            } else {
                if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false);
                vnode.events[key] = undefined;
            }
        } else if (value != null && (typeof value === "function" || typeof value === "object")) {
            vnode.events = new EventDict();
            vnode.dom.addEventListener(key.slice(2), vnode.events, false);
            vnode.events[key] = value;
        }
    }
    //lifecycle
    function initLifecycle(source, vnode, hooks) {
        if (typeof source.oninit === "function") callHook.call(source.oninit, vnode);
        if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode));
    }
    function updateLifecycle(source, vnode, hooks) {
        if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode));
    }
    function shouldNotUpdate(vnode, old) {
        do {
            if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
                var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old);
                if (force !== undefined && !force) break;
            }
            if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
                var force = callHook.call(vnode.state.onbeforeupdate, vnode, old);
                if (force !== undefined && !force) break;
            }
            return false;
        }while (false) // eslint-disable-line no-constant-condition
        vnode.dom = old.dom;
        vnode.domSize = old.domSize;
        vnode.instance = old.instance;
        // One would think having the actual latest attributes would be ideal,
        // but it doesn't let us properly diff based on our current internal
        // representation. We have to save not only the old DOM info, but also
        // the attributes used to create it, as we diff *that*, not against the
        // DOM directly (with a few exceptions in `setAttr`). And, of course, we
        // need to save the children and text as they are conceptually not
        // unlike special "attributes" internally.
        vnode.attrs = old.attrs;
        vnode.children = old.children;
        vnode.text = old.text;
        return true;
    }
    return function(dom, vnodes, redraw) {
        if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
        var hooks = [];
        var active = activeElement();
        var namespace = dom.namespaceURI;
        // First time rendering into a node clears it out
        if (dom.vnodes == null) dom.textContent = "";
        vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [
            vnodes
        ]);
        var prevRedraw = currentRedraw;
        try {
            currentRedraw = typeof redraw === "function" ? redraw : undefined;
            updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace);
        } finally{
            currentRedraw = prevRedraw;
        }
        dom.vnodes = vnodes;
        // `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
        if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus();
        for(var i = 0; i < hooks.length; i++)hooks[i]();
    };
};

},{"../render/vnode":"5c56e"}],"8CHiL":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
module.exports = function(render, schedule, console) {
    var subscriptions = [];
    var rendering = false;
    var pending = false;
    function sync() {
        if (rendering) throw new Error("Nested m.redraw.sync() call");
        rendering = true;
        for(var i = 0; i < subscriptions.length; i += 2)try {
            render(subscriptions[i], Vnode(subscriptions[i + 1]), redraw);
        } catch (e) {
            console.error(e);
        }
        rendering = false;
    }
    function redraw() {
        if (!pending) {
            pending = true;
            schedule(function() {
                pending = false;
                sync();
            });
        }
    }
    redraw.sync = sync;
    function mount(root, component) {
        if (component != null && component.view == null && typeof component !== "function") throw new TypeError("m.mount(element, component) expects a component, not a vnode");
        var index = subscriptions.indexOf(root);
        if (index >= 0) {
            subscriptions.splice(index, 2);
            render(root, [], redraw);
        }
        if (component != null) {
            subscriptions.push(root, component);
            render(root, Vnode(component), redraw);
        }
    }
    return {
        mount: mount,
        redraw: redraw
    };
};

},{"../render/vnode":"5c56e"}],"8fm7T":[function(require,module,exports) {
"use strict";
var buildPathname = require("../pathname/build");
module.exports = function($window, Promise, oncompletion) {
    var callbackCount = 0;
    function PromiseProxy(executor) {
        return new Promise(executor);
    }
    // In case the global Promise is some userland library's where they rely on
    // `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
    // similar. Let's *not* break them.
    PromiseProxy.prototype = Promise.prototype;
    PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto
    ;
    function makeRequest(factory) {
        return function(url, args) {
            if (typeof url !== "string") {
                args = url;
                url = url.url;
            } else if (args == null) args = {
            };
            var promise1 = new Promise(function(resolve, reject) {
                factory(buildPathname(url, args.params), args, function(data) {
                    if (typeof args.type === "function") {
                        if (Array.isArray(data)) for(var i = 0; i < data.length; i++)data[i] = new args.type(data[i]);
                        else data = new args.type(data);
                    }
                    resolve(data);
                }, reject);
            });
            if (args.background === true) return promise1;
            var count = 0;
            function complete() {
                if (--count === 0 && typeof oncompletion === "function") oncompletion();
            }
            function wrap(promise) {
                var then = promise.then;
                // Set the constructor, so engines know to not await or resolve
                // this as a native promise. At the time of writing, this is
                // only necessary for V8, but their behavior is the correct
                // behavior per spec. See this spec issue for more details:
                // https://github.com/tc39/ecma262/issues/1577. Also, see the
                // corresponding comment in `request/tests/test-request.js` for
                // a bit more background on the issue at hand.
                promise.constructor = PromiseProxy;
                promise.then = function() {
                    count++;
                    var next = then.apply(promise, arguments);
                    next.then(complete, function(e) {
                        complete();
                        if (count === 0) throw e;
                    });
                    return wrap(next);
                };
                return promise;
            }
            return wrap(promise1);
        };
    }
    function hasHeader(args, name) {
        for(var key in args.headers){
            if (({
            }).hasOwnProperty.call(args.headers, key) && name.test(key)) return true;
        }
        return false;
    }
    return {
        request: makeRequest(function(url, args, resolve, reject) {
            var method = args.method != null ? args.method.toUpperCase() : "GET";
            var body = args.body;
            var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData);
            var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json");
            var xhr = new $window.XMLHttpRequest(), aborted = false;
            var original = xhr, replacedAbort;
            var abort = xhr.abort;
            xhr.abort = function() {
                aborted = true;
                abort.call(this);
            };
            xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined);
            if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) xhr.setRequestHeader("Accept", "application/json, text/*");
            if (args.withCredentials) xhr.withCredentials = args.withCredentials;
            if (args.timeout) xhr.timeout = args.timeout;
            xhr.responseType = responseType;
            for(var key in args.headers)if (({
            }).hasOwnProperty.call(args.headers, key)) xhr.setRequestHeader(key, args.headers[key]);
            xhr.onreadystatechange = function(ev) {
                // Don't throw errors on xhr.abort().
                if (aborted) return;
                if (ev.target.readyState === 4) try {
                    var success = ev.target.status >= 200 && ev.target.status < 300 || ev.target.status === 304 || /^file:\/\//i.test(url);
                    // When the response type isn't "" or "text",
                    // `xhr.responseText` is the wrong thing to use.
                    // Browsers do the right thing and throw here, and we
                    // should honor that and do the right thing by
                    // preferring `xhr.response` where possible/practical.
                    var response = ev.target.response, message;
                    if (responseType === "json") // For IE and Edge, which don't implement
                    // `responseType: "json"`.
                    {
                        if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText);
                    } else if (!responseType || responseType === "text") // Only use this default if it's text. If a parsed
                    // document is needed on old IE and friends (all
                    // unsupported), the user should use a custom
                    // `config` instead. They're already using this at
                    // their own risk.
                    {
                        if (response == null) response = ev.target.responseText;
                    }
                    if (typeof args.extract === "function") {
                        response = args.extract(ev.target, args);
                        success = true;
                    } else if (typeof args.deserialize === "function") response = args.deserialize(response);
                    if (success) resolve(response);
                    else {
                        try {
                            message = ev.target.responseText;
                        } catch (e) {
                            message = response;
                        }
                        var error = new Error(message);
                        error.code = ev.target.status;
                        error.response = response;
                        reject(error);
                    }
                } catch (e) {
                    reject(e);
                }
            };
            if (typeof args.config === "function") {
                xhr = args.config(xhr, args, url) || xhr;
                // Propagate the `abort` to any replacement XHR as well.
                if (xhr !== original) {
                    replacedAbort = xhr.abort;
                    xhr.abort = function() {
                        aborted = true;
                        replacedAbort.call(this);
                    };
                }
            }
            if (body == null) xhr.send();
            else if (typeof args.serialize === "function") xhr.send(args.serialize(body));
            else if (body instanceof $window.FormData) xhr.send(body);
            else xhr.send(JSON.stringify(body));
        }),
        jsonp: makeRequest(function(url, args, resolve, reject) {
            var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 10000000000000000) + "_" + callbackCount++;
            var script = $window.document.createElement("script");
            $window[callbackName] = function(data) {
                delete $window[callbackName];
                script.parentNode.removeChild(script);
                resolve(data);
            };
            script.onerror = function() {
                delete $window[callbackName];
                script.parentNode.removeChild(script);
                reject(new Error("JSONP request failed"));
            };
            script.src = url + (url.indexOf("?") < 0 ? "?" : "&") + encodeURIComponent(args.callbackKey || "callback") + "=" + encodeURIComponent(callbackName);
            $window.document.documentElement.appendChild(script);
        })
    };
};

},{"../pathname/build":"k2dgA"}],"k2dgA":[function(require,module,exports) {
"use strict";
var buildQueryString = require("../querystring/build");
var assign = require("./assign");
// Returns `path` from `template` + `params`
module.exports = function(template, params) {
    if (/:([^\/\.-]+)(\.{3})?:/.test(template)) throw new SyntaxError("Template parameter names *must* be separated");
    if (params == null) return template;
    var queryIndex = template.indexOf("?");
    var hashIndex = template.indexOf("#");
    var queryEnd = hashIndex < 0 ? template.length : hashIndex;
    var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
    var path = template.slice(0, pathEnd);
    var query = {
    };
    assign(query, params);
    var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
        delete query[key];
        // If no such parameter exists, don't interpolate it.
        if (params[key] == null) return m;
        // Escape normal parameters, but not variadic ones.
        return variadic ? params[key] : encodeURIComponent(String(params[key]));
    });
    // In case the template substitution adds new query/hash parameters.
    var newQueryIndex = resolved.indexOf("?");
    var newHashIndex = resolved.indexOf("#");
    var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex;
    var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex;
    var result = resolved.slice(0, newPathEnd);
    if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd);
    if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd);
    var querystring = buildQueryString(query);
    if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring;
    if (hashIndex >= 0) result += template.slice(hashIndex);
    if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex);
    return result;
};

},{"../querystring/build":"fbqKb","./assign":"asFVn"}],"fbqKb":[function(require,module,exports) {
"use strict";
module.exports = function(object) {
    if (Object.prototype.toString.call(object) !== "[object Object]") return "";
    var args = [];
    for(var key1 in object)destructure(key1, object[key1]);
    function destructure(key, value) {
        if (Array.isArray(value)) {
            for(var i = 0; i < value.length; i++){
                destructure(key + "[" + i + "]", value[i]);
            }
        } else if (Object.prototype.toString.call(value) === "[object Object]") {
            for(var i in value){
                destructure(key + "[" + i + "]", value[i]);
            }
        } else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
    }
    return args.join("&");
};

},{}],"asFVn":[function(require,module,exports) {
"use strict";
module.exports = Object.assign || function(target, source) {
    if (source) Object.keys(source).forEach(function(key) {
        target[key] = source[key];
    });
};

},{}],"4SNaV":[function(require,module,exports) {
"use strict";
var mountRedraw = require("./mount-redraw");
module.exports = require("./api/router")(window, mountRedraw);

},{"./mount-redraw":"jh7iq","./api/router":"iaKFj"}],"iaKFj":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
var m = require("../render/hyperscript");
var Promise = require("../promise/promise");
var buildPathname = require("../pathname/build");
var parsePathname = require("../pathname/parse");
var compileTemplate = require("../pathname/compileTemplate");
var assign = require("../pathname/assign");
var sentinel = {
};
module.exports = function($window, mountRedraw) {
    var fireAsync;
    function setPath(path, data, options) {
        path = buildPathname(path, data);
        if (fireAsync != null) {
            fireAsync();
            var state = options ? options.state : null;
            var title = options ? options.title : null;
            if (options && options.replace) $window.history.replaceState(state, title, route1.prefix + path);
            else $window.history.pushState(state, title, route1.prefix + path);
        } else $window.location.href = route1.prefix + path;
    }
    var currentResolver = sentinel, component, attrs1, currentPath, lastUpdate;
    var SKIP = route1.SKIP = {
    };
    function route1(root, defaultRoute, routes) {
        if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");
        // 0 = start
        // 1 = init
        // 2 = ready
        var state = 0;
        var compiled = Object.keys(routes).map(function(route) {
            if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`");
            if (/:([^\/\.-]+)(\.{3})?:/.test(route)) throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");
            return {
                route: route,
                component: routes[route],
                check: compileTemplate(route)
            };
        });
        var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
        var p = Promise.resolve();
        var scheduled = false;
        var onremove;
        fireAsync = null;
        if (defaultRoute != null) {
            var defaultData = parsePathname(defaultRoute);
            if (!compiled.some(function(i) {
                return i.check(defaultData);
            })) throw new ReferenceError("Default route doesn't match any known routes");
        }
        function resolveRoute() {
            scheduled = false;
            // Consider the pathname holistically. The prefix might even be invalid,
            // but that's not our problem.
            var prefix = $window.location.hash;
            if (route1.prefix[0] !== "#") {
                prefix = $window.location.search + prefix;
                if (route1.prefix[0] !== "?") {
                    prefix = $window.location.pathname + prefix;
                    if (prefix[0] !== "/") prefix = "/" + prefix;
                }
            }
            // This seemingly useless `.concat()` speeds up the tests quite a bit,
            // since the representation is consistently a relatively poorly
            // optimized cons string.
            var path = prefix.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent).slice(route1.prefix.length);
            var data = parsePathname(path);
            assign(data.params, $window.history.state);
            function fail() {
                if (path === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute);
                setPath(defaultRoute, null, {
                    replace: true
                });
            }
            loop(0);
            function loop(i) {
                // 0 = init
                // 1 = scheduled
                // 2 = done
                for(; i < compiled.length; i++)if (compiled[i].check(data)) {
                    var payload = compiled[i].component;
                    var matchedRoute = compiled[i].route;
                    var localComp = payload;
                    var update = lastUpdate = function(comp) {
                        if (update !== lastUpdate) return;
                        if (comp === SKIP) return loop(i + 1);
                        component = comp != null && (typeof comp.view === "function" || typeof comp === "function") ? comp : "div";
                        attrs1 = data.params, currentPath = path, lastUpdate = null;
                        currentResolver = payload.render ? payload : null;
                        if (state === 2) mountRedraw.redraw();
                        else {
                            state = 2;
                            mountRedraw.redraw.sync();
                        }
                    };
                    // There's no understating how much I *wish* I could
                    // use `async`/`await` here...
                    if (payload.view || typeof payload === "function") {
                        payload = {
                        };
                        update(localComp);
                    } else if (payload.onmatch) p.then(function() {
                        return payload.onmatch(data.params, path, matchedRoute);
                    }).then(update, fail);
                    else update("div");
                    return;
                }
                fail();
            }
        }
        // Set it unconditionally so `m.route.set` and `m.route.Link` both work,
        // even if neither `pushState` nor `hashchange` are supported. It's
        // cleared if `hashchange` is used, since that makes it automatically
        // async.
        fireAsync = function() {
            if (!scheduled) {
                scheduled = true;
                callAsync(resolveRoute);
            }
        };
        if (typeof $window.history.pushState === "function") {
            onremove = function() {
                $window.removeEventListener("popstate", fireAsync, false);
            };
            $window.addEventListener("popstate", fireAsync, false);
        } else if (route1.prefix[0] === "#") {
            fireAsync = null;
            onremove = function() {
                $window.removeEventListener("hashchange", resolveRoute, false);
            };
            $window.addEventListener("hashchange", resolveRoute, false);
        }
        return mountRedraw.mount(root, {
            onbeforeupdate: function() {
                state = state ? 2 : 1;
                return !(!state || sentinel === currentResolver);
            },
            oncreate: resolveRoute,
            onremove: onremove,
            view: function() {
                if (!state || sentinel === currentResolver) return;
                // Wrap in a fragment to preserve existing key semantics
                var vnode = [
                    Vnode(component, attrs1.key, attrs1)
                ];
                if (currentResolver) vnode = currentResolver.render(vnode[0]);
                return vnode;
            }
        });
    }
    route1.set = function(path, data, options) {
        if (lastUpdate != null) {
            options = options || {
            };
            options.replace = true;
        }
        lastUpdate = null;
        setPath(path, data, options);
    };
    route1.get = function() {
        return currentPath;
    };
    route1.prefix = "#!";
    route1.Link = {
        view: function(vnode) {
            var options = vnode.attrs.options;
            // Remove these so they don't get overwritten
            var attrs = {
            }, onclick, href;
            assign(attrs, vnode.attrs);
            // The first two are internal, but the rest are magic attributes
            // that need censored to not screw up rendering.
            attrs.selector = attrs.options = attrs.key = attrs.oninit = attrs.oncreate = attrs.onbeforeupdate = attrs.onupdate = attrs.onbeforeremove = attrs.onremove = null;
            // Do this now so we can get the most current `href` and `disabled`.
            // Those attributes may also be specified in the selector, and we
            // should honor that.
            var child = m(vnode.attrs.selector || "a", attrs, vnode.children);
            // Let's provide a *right* way to disable a route link, rather than
            // letting people screw up accessibility on accident.
            //
            // The attribute is coerced so users don't get surprised over
            // `disabled: 0` resulting in a button that's somehow routable
            // despite being visibly disabled.
            if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
                child.attrs.href = null;
                child.attrs["aria-disabled"] = "true";
                // If you *really* do want to do this on a disabled link, use
                // an `oncreate` hook to add it.
                child.attrs.onclick = null;
            } else {
                onclick = child.attrs.onclick;
                href = child.attrs.href;
                child.attrs.href = route1.prefix + href;
                child.attrs.onclick = function(e) {
                    var result;
                    if (typeof onclick === "function") result = onclick.call(e.currentTarget, e);
                    else if (onclick == null || typeof onclick !== "object") ;
                    else if (typeof onclick.handleEvent === "function") onclick.handleEvent(e);
                    // Adapted from React Router's implementation:
                    // https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
                    //
                    // Try to be flexible and intuitive in how we handle links.
                    // Fun fact: links aren't as obvious to get right as you
                    // would expect. There's a lot more valid ways to click a
                    // link than this, and one might want to not simply click a
                    // link, but right click or command-click it to copy the
                    // link target, etc. Nope, this isn't just for blind people.
                    if (// Skip if `onclick` prevented default
                    result !== false && !e.defaultPrevented && (e.button === 0 || e.which === 0 || e.which === 1) && (!e.currentTarget.target || e.currentTarget.target === "_self") && // No modifier keys
                    !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        e.redraw = false;
                        route1.set(href, null, options);
                    }
                };
            }
            return child;
        }
    };
    route1.param = function(key) {
        return attrs1 && key != null ? attrs1[key] : attrs1;
    };
    return route1;
};

},{"../render/vnode":"5c56e","../render/hyperscript":"js0vQ","../promise/promise":"298EJ","../pathname/build":"k2dgA","../pathname/parse":"jK2nr","../pathname/compileTemplate":"cVcAy","../pathname/assign":"asFVn"}],"jK2nr":[function(require,module,exports) {
"use strict";
var parseQueryString = require("../querystring/parse");
// Returns `{path, params}` from `url`
module.exports = function(url) {
    var queryIndex = url.indexOf("?");
    var hashIndex = url.indexOf("#");
    var queryEnd = hashIndex < 0 ? url.length : hashIndex;
    var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
    var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/");
    if (!path) path = "/";
    else {
        if (path[0] !== "/") path = "/" + path;
        if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1);
    }
    return {
        path: path,
        params: queryIndex < 0 ? {
        } : parseQueryString(url.slice(queryIndex + 1, queryEnd))
    };
};

},{"../querystring/parse":"ZeRxY"}],"ZeRxY":[function(require,module,exports) {
"use strict";
module.exports = function(string) {
    if (string === "" || string == null) return {
    };
    if (string.charAt(0) === "?") string = string.slice(1);
    var entries = string.split("&"), counters = {
    }, data = {
    };
    for(var i = 0; i < entries.length; i++){
        var entry = entries[i].split("=");
        var key = decodeURIComponent(entry[0]);
        var value = entry.length === 2 ? decodeURIComponent(entry[1]) : "";
        if (value === "true") value = true;
        else if (value === "false") value = false;
        var levels = key.split(/\]\[?|\[/);
        var cursor = data;
        if (key.indexOf("[") > -1) levels.pop();
        for(var j = 0; j < levels.length; j++){
            var level = levels[j], nextLevel = levels[j + 1];
            var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
            if (level === "") {
                var key = levels.slice(0, j).join();
                if (counters[key] == null) counters[key] = Array.isArray(cursor) ? cursor.length : 0;
                level = counters[key]++;
            } else if (level === "__proto__") break;
            if (j === levels.length - 1) cursor[level] = value;
            else {
                // Read own properties exclusively to disallow indirect
                // prototype pollution
                var desc = Object.getOwnPropertyDescriptor(cursor, level);
                if (desc != null) desc = desc.value;
                if (desc == null) cursor[level] = desc = isNumber ? [] : {
                };
                cursor = desc;
            }
        }
    }
    return data;
};

},{}],"cVcAy":[function(require,module,exports) {
"use strict";
var parsePathname = require("./parse");
// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
    var templateData = parsePathname(template);
    var templateKeys = Object.keys(templateData.params);
    var keys = [];
    var regexp = new RegExp("^" + templateData.path.replace(// I escape literal text so people can use things like `:file.:ext` or
    // `:lang-:locale` in routes. This is all merged into one pass so I
    // don't also accidentally escape `-` and make it harder to detect it to
    // ban it from template parameters.
    /:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function(m, key, extra) {
        if (key == null) return "\\" + m;
        keys.push({
            k: key,
            r: extra === "..."
        });
        if (extra === "...") return "(.*)";
        if (extra === ".") return "([^/]+)\\.";
        return "([^/]+)" + (extra || "");
    }) + "$");
    return function(data) {
        // First, check the params. Usually, there isn't any, and it's just
        // checking a static set.
        for(var i = 0; i < templateKeys.length; i++){
            if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false;
        }
        // If no interpolations exist, let's skip all the ceremony
        if (!keys.length) return regexp.test(data.path);
        var values = regexp.exec(data.path);
        if (values == null) return false;
        for(var i = 0; i < keys.length; i++)data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1]);
        return true;
    };
};

},{"./parse":"jK2nr"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["iKiqL","bB7Pu"], "bB7Pu", "parcelRequire3676")

//# sourceMappingURL=index.3d214d75.js.map
