!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory(require("react"), require("react-modal")) : "function" == typeof define && define.amd ? define([ "react", "react-modal" ], factory) : "object" == typeof exports ? exports.ReactImageLightbox = factory(require("react"), require("react-modal")) : root.ReactImageLightbox = factory(root.react, root["react-modal"]);
}(this, function(__WEBPACK_EXTERNAL_MODULE_46__, __WEBPACK_EXTERNAL_MODULE_108__) {
    /******/
    return function(modules) {
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                exports: {},
                /******/
                id: moduleId,
                /******/
                loaded: !1
            };
            /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.loaded = !0, module.exports;
        }
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.p = "", __webpack_require__(0);
    }([ /* 0 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(48).default;
    }, /* 1 */
    /***/
    function(module, exports) {
        var core = module.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = core);
    }, /* 2 */
    /***/
    function(module, exports, __webpack_require__) {
        var store = __webpack_require__(25)("wks"), uid = __webpack_require__(16), Symbol = __webpack_require__(3).Symbol, USE_SYMBOL = "function" == typeof Symbol, $exports = module.exports = function(name) {
            return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)("Symbol." + name));
        };
        $exports.store = store;
    }, /* 3 */
    /***/
    function(module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = global);
    }, /* 4 */
    /***/
    function(module, exports, __webpack_require__) {
        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__(11)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, /* 5 */
    /***/
    function(module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };
    }, /* 6 */
    /***/
    function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(8), IE8_DOM_DEFINE = __webpack_require__(37), toPrimitive = __webpack_require__(27), dP = Object.defineProperty;
        exports.f = __webpack_require__(4) ? Object.defineProperty : function(O, P, Attributes) {
            if (anObject(O), P = toPrimitive(P, !0), anObject(Attributes), IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) {}
            if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
            return "value" in Attributes && (O[P] = Attributes.value), O;
        };
    }, /* 7 */
    /***/
    function(module, exports, __webpack_require__) {
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__(77), defined = __webpack_require__(18);
        module.exports = function(it) {
            return IObject(defined(it));
        };
    }, /* 8 */
    /***/
    function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(12);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + " is not an object!");
            return it;
        };
    }, /* 9 */
    /***/
    function(module, exports, __webpack_require__) {
        var global = __webpack_require__(3), core = __webpack_require__(1), ctx = __webpack_require__(35), hide = __webpack_require__(10), PROTOTYPE = "prototype", $export = function(type, name, source) {
            var key, own, out, IS_FORCED = type & $export.F, IS_GLOBAL = type & $export.G, IS_STATIC = type & $export.S, IS_PROTO = type & $export.P, IS_BIND = type & $export.B, IS_WRAP = type & $export.W, exports = IS_GLOBAL ? core : core[name] || (core[name] = {}), expProto = exports[PROTOTYPE], target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
            IS_GLOBAL && (source = name);
            for (key in source) // contains in native
            own = !IS_FORCED && target && void 0 !== target[key], own && key in exports || (// export native or passed
            out = own ? target[key] : source[key], // prevent global pollution for namespaces
            exports[key] = IS_GLOBAL && "function" != typeof target[key] ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
                var F = function(a, b, c) {
                    if (this instanceof C) {
                        switch (arguments.length) {
                          case 0:
                            return new C();

                          case 1:
                            return new C(a);

                          case 2:
                            return new C(a, b);
                        }
                        return new C(a, b, c);
                    }
                    return C.apply(this, arguments);
                };
                return F[PROTOTYPE] = C[PROTOTYPE], F;
            }(out) : IS_PROTO && "function" == typeof out ? ctx(Function.call, out) : out, // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
            IS_PROTO && ((exports.virtual || (exports.virtual = {}))[key] = out, // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
            type & $export.R && expProto && !expProto[key] && hide(expProto, key, out)));
        };
        // type bitmap
        $export.F = 1, // forced
        $export.G = 2, // global
        $export.S = 4, // static
        $export.P = 8, // proto
        $export.B = 16, // bind
        $export.W = 32, // wrap
        $export.U = 64, // safe
        $export.R = 128, // real proto method for `library` 
        module.exports = $export;
    }, /* 10 */
    /***/
    function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(6), createDesc = __webpack_require__(15);
        module.exports = __webpack_require__(4) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            return object[key] = value, object;
        };
    }, /* 11 */
    /***/
    function(module, exports) {
        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return !0;
            }
        };
    }, /* 12 */
    /***/
    function(module, exports) {
        module.exports = function(it) {
            return "object" == typeof it ? null !== it : "function" == typeof it;
        };
    }, /* 13 */
    /***/
    function(module, exports) {
        module.exports = {};
    }, /* 14 */
    /***/
    function(module, exports, __webpack_require__) {
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__(43), enumBugKeys = __webpack_require__(19);
        module.exports = Object.keys || function(O) {
            return $keys(O, enumBugKeys);
        };
    }, /* 15 */
    /***/
    function(module, exports) {
        module.exports = function(bitmap, value) {
            return {
                enumerable: !(1 & bitmap),
                configurable: !(2 & bitmap),
                writable: !(4 & bitmap),
                value: value
            };
        };
    }, /* 16 */
    /***/
    function(module, exports) {
        var id = 0, px = Math.random();
        module.exports = function(key) {
            return "Symbol(".concat(void 0 === key ? "" : key, ")_", (++id + px).toString(36));
        };
    }, /* 17 */
    /***/
    function(module, exports) {
        var toString = {}.toString;
        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };
    }, /* 18 */
    /***/
    function(module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
            if (void 0 == it) throw TypeError("Can't call method on  " + it);
            return it;
        };
    }, /* 19 */
    /***/
    function(module, exports) {
        // IE 8- don't enum bug keys
        module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, /* 20 */
    /***/
    function(module, exports) {
        module.exports = !0;
    }, /* 21 */
    /***/
    function(module, exports, __webpack_require__) {
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__(8), dPs = __webpack_require__(83), enumBugKeys = __webpack_require__(19), IE_PROTO = __webpack_require__(24)("IE_PROTO"), Empty = function() {}, PROTOTYPE = "prototype", createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframeDocument, iframe = __webpack_require__(36)("iframe"), i = enumBugKeys.length, lt = "<", gt = ">";
            for (iframe.style.display = "none", __webpack_require__(76).appendChild(iframe), 
            iframe.src = "javascript:", // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document, iframeDocument.open(), iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt), 
            iframeDocument.close(), createDict = iframeDocument.F; i--; ) delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
        };
        module.exports = Object.create || function(O, Properties) {
            var result;
            // add "__proto__" for Object.getPrototypeOf polyfill
            return null !== O ? (Empty[PROTOTYPE] = anObject(O), result = new Empty(), Empty[PROTOTYPE] = null, 
            result[IE_PROTO] = O) : result = createDict(), void 0 === Properties ? result : dPs(result, Properties);
        };
    }, /* 22 */
    /***/
    function(module, exports) {
        exports.f = {}.propertyIsEnumerable;
    }, /* 23 */
    /***/
    function(module, exports, __webpack_require__) {
        var def = __webpack_require__(6).f, has = __webpack_require__(5), TAG = __webpack_require__(2)("toStringTag");
        module.exports = function(it, tag, stat) {
            it && !has(it = stat ? it : it.prototype, TAG) && def(it, TAG, {
                configurable: !0,
                value: tag
            });
        };
    }, /* 24 */
    /***/
    function(module, exports, __webpack_require__) {
        var shared = __webpack_require__(25)("keys"), uid = __webpack_require__(16);
        module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };
    }, /* 25 */
    /***/
    function(module, exports, __webpack_require__) {
        var global = __webpack_require__(3), SHARED = "__core-js_shared__", store = global[SHARED] || (global[SHARED] = {});
        module.exports = function(key) {
            return store[key] || (store[key] = {});
        };
    }, /* 26 */
    /***/
    function(module, exports) {
        // 7.1.4 ToInteger
        var ceil = Math.ceil, floor = Math.floor;
        module.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };
    }, /* 27 */
    /***/
    function(module, exports, __webpack_require__) {
        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__(12);
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
            if ("function" == typeof (fn = it.valueOf) && !isObject(val = fn.call(it))) return val;
            if (!S && "function" == typeof (fn = it.toString) && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };
    }, /* 28 */
    /***/
    function(module, exports, __webpack_require__) {
        var global = __webpack_require__(3), core = __webpack_require__(1), LIBRARY = __webpack_require__(20), wksExt = __webpack_require__(29), defineProperty = __webpack_require__(6).f;
        module.exports = function(name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            "_" == name.charAt(0) || name in $Symbol || defineProperty($Symbol, name, {
                value: wksExt.f(name)
            });
        };
    }, /* 29 */
    /***/
    function(module, exports, __webpack_require__) {
        exports.f = __webpack_require__(2);
    }, /* 30 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var $at = __webpack_require__(87)(!0);
        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__(38)(String, "String", function(iterated) {
            this._t = String(iterated), // target
            this._i = 0;
        }, function() {
            var point, O = this._t, index = this._i;
            return index >= O.length ? {
                value: void 0,
                done: !0
            } : (point = $at(O, index), this._i += point.length, {
                value: point,
                done: !1
            });
        });
    }, /* 31 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(93);
        for (var global = __webpack_require__(3), hide = __webpack_require__(10), Iterators = __webpack_require__(13), TO_STRING_TAG = __webpack_require__(2)("toStringTag"), collections = [ "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList" ], i = 0; i < 5; i++) {
            var NAME = collections[i], Collection = global[NAME], proto = Collection && Collection.prototype;
            proto && !proto[TO_STRING_TAG] && hide(proto, TO_STRING_TAG, NAME), Iterators[NAME] = Iterators.Array;
        }
    }, /* 32 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(63),
            __esModule: !0
        };
    }, /* 33 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.__esModule = !0;
        var _iterator = __webpack_require__(57), _iterator2 = _interopRequireDefault(_iterator), _symbol = __webpack_require__(56), _symbol2 = _interopRequireDefault(_symbol), _typeof = "function" == typeof _symbol2.default && "symbol" == typeof _iterator2.default ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof _symbol2.default && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj;
        };
        exports.default = "function" == typeof _symbol2.default && "symbol" === _typeof(_iterator2.default) ? function(obj) {
            return "undefined" == typeof obj ? "undefined" : _typeof(obj);
        } : function(obj) {
            return obj && "function" == typeof _symbol2.default && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : "undefined" == typeof obj ? "undefined" : _typeof(obj);
        };
    }, /* 34 */
    /***/
    function(module, exports, __webpack_require__) {
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__(17), TAG = __webpack_require__(2)("toStringTag"), ARG = "Arguments" == cof(function() {
            return arguments;
        }()), tryGet = function(it, key) {
            try {
                return it[key];
            } catch (e) {}
        };
        module.exports = function(it) {
            var O, T, B;
            return void 0 === it ? "Undefined" : null === it ? "Null" : "string" == typeof (T = tryGet(O = Object(it), TAG)) ? T : ARG ? cof(O) : "Object" == (B = cof(O)) && "function" == typeof O.callee ? "Arguments" : B;
        };
    }, /* 35 */
    /***/
    function(module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__(72);
        module.exports = function(fn, that, length) {
            if (aFunction(fn), void 0 === that) return fn;
            switch (length) {
              case 1:
                return function(a) {
                    return fn.call(that, a);
                };

              case 2:
                return function(a, b) {
                    return fn.call(that, a, b);
                };

              case 3:
                return function(a, b, c) {
                    return fn.call(that, a, b, c);
                };
            }
            return function() {
                return fn.apply(that, arguments);
            };
        };
    }, /* 36 */
    /***/
    function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(12), document = __webpack_require__(3).document, is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };
    }, /* 37 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = !__webpack_require__(4) && !__webpack_require__(11)(function() {
            return 7 != Object.defineProperty(__webpack_require__(36)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, /* 38 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var LIBRARY = __webpack_require__(20), $export = __webpack_require__(9), redefine = __webpack_require__(44), hide = __webpack_require__(10), has = __webpack_require__(5), Iterators = __webpack_require__(13), $iterCreate = __webpack_require__(79), setToStringTag = __webpack_require__(23), getPrototypeOf = __webpack_require__(42), ITERATOR = __webpack_require__(2)("iterator"), BUGGY = !([].keys && "next" in [].keys()), FF_ITERATOR = "@@iterator", KEYS = "keys", VALUES = "values", returnThis = function() {
            return this;
        };
        module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var methods, key, IteratorPrototype, getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                  case KEYS:
                    return function() {
                        return new Constructor(this, kind);
                    };

                  case VALUES:
                    return function() {
                        return new Constructor(this, kind);
                    };
                }
                return function() {
                    return new Constructor(this, kind);
                };
            }, TAG = NAME + " Iterator", DEF_VALUES = DEFAULT == VALUES, VALUES_BUG = !1, proto = Base.prototype, $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT], $default = $native || getMethod(DEFAULT), $entries = DEFAULT ? DEF_VALUES ? getMethod("entries") : $default : void 0, $anyNative = "Array" == NAME ? proto.entries || $native : $native;
            if (// Fix native
            $anyNative && (IteratorPrototype = getPrototypeOf($anyNative.call(new Base())), 
            IteratorPrototype !== Object.prototype && (// Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, !0), // fix for some old engines
            LIBRARY || has(IteratorPrototype, ITERATOR) || hide(IteratorPrototype, ITERATOR, returnThis))), 
            // fix Array#{values, @@iterator}.name in V8 / FF
            DEF_VALUES && $native && $native.name !== VALUES && (VALUES_BUG = !0, $default = function() {
                return $native.call(this);
            }), // Define iterator
            LIBRARY && !FORCED || !BUGGY && !VALUES_BUG && proto[ITERATOR] || hide(proto, ITERATOR, $default), 
            // Plug for library
            Iterators[NAME] = $default, Iterators[TAG] = returnThis, DEFAULT) if (methods = {
                values: DEF_VALUES ? $default : getMethod(VALUES),
                keys: IS_SET ? $default : getMethod(KEYS),
                entries: $entries
            }, FORCED) for (key in methods) key in proto || redefine(proto, key, methods[key]); else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            return methods;
        };
    }, /* 39 */
    /***/
    function(module, exports, __webpack_require__) {
        var pIE = __webpack_require__(22), createDesc = __webpack_require__(15), toIObject = __webpack_require__(7), toPrimitive = __webpack_require__(27), has = __webpack_require__(5), IE8_DOM_DEFINE = __webpack_require__(37), gOPD = Object.getOwnPropertyDescriptor;
        exports.f = __webpack_require__(4) ? gOPD : function(O, P) {
            if (O = toIObject(O), P = toPrimitive(P, !0), IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) {}
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };
    }, /* 40 */
    /***/
    function(module, exports, __webpack_require__) {
        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__(43), hiddenKeys = __webpack_require__(19).concat("length", "prototype");
        exports.f = Object.getOwnPropertyNames || function(O) {
            return $keys(O, hiddenKeys);
        };
    }, /* 41 */
    /***/
    function(module, exports) {
        exports.f = Object.getOwnPropertySymbols;
    }, /* 42 */
    /***/
    function(module, exports, __webpack_require__) {
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__(5), toObject = __webpack_require__(45), IE_PROTO = __webpack_require__(24)("IE_PROTO"), ObjectProto = Object.prototype;
        module.exports = Object.getPrototypeOf || function(O) {
            return O = toObject(O), has(O, IE_PROTO) ? O[IE_PROTO] : "function" == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectProto : null;
        };
    }, /* 43 */
    /***/
    function(module, exports, __webpack_require__) {
        var has = __webpack_require__(5), toIObject = __webpack_require__(7), arrayIndexOf = __webpack_require__(74)(!1), IE_PROTO = __webpack_require__(24)("IE_PROTO");
        module.exports = function(object, names) {
            var key, O = toIObject(object), i = 0, result = [];
            for (key in O) key != IE_PROTO && has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            for (;names.length > i; ) has(O, key = names[i++]) && (~arrayIndexOf(result, key) || result.push(key));
            return result;
        };
    }, /* 44 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(10);
    }, /* 45 */
    /***/
    function(module, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(18);
        module.exports = function(it) {
            return Object(defined(it));
        };
    }, /* 46 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_46__;
    }, /* 47 */
    /***/
    function(module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        // Min image zoom level
        exports.MIN_ZOOM_LEVEL = 0, exports.MAX_ZOOM_LEVEL = 300, exports.ZOOM_RATIO = 1.007, 
        exports.ZOOM_BUTTON_INCREMENT_SIZE = 100, exports.WHEEL_MOVE_X_THRESHOLD = 200, 
        exports.WHEEL_MOVE_Y_THRESHOLD = 1, exports.KEYS = {
            ESC: 27,
            LEFT_ARROW: 37,
            RIGHT_ARROW: 39
        }, exports.ACTION_NONE = 0, exports.ACTION_MOVE = 1, exports.ACTION_SWIPE = 2, exports.ACTION_PINCH = 3, 
        exports.ACTION_ROTATE = 4, exports.SOURCE_ANY = 0, exports.SOURCE_MOUSE = 1, exports.SOURCE_TOUCH = 2, 
        exports.SOURCE_POINTER = 3, exports.MIN_SWIPE_DISTANCE = 200;
    }, /* 48 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _slicedToArray = function() {
            function sliceIterator(arr, i) {
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                    !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        !_n && _i.return && _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            return function(arr, i) {
                if (Array.isArray(arr)) return arr;
                if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _react = __webpack_require__(46), _react2 = _interopRequireDefault(_react), _reactModal = __webpack_require__(108), _reactModal2 = _interopRequireDefault(_reactModal), _withStyles = __webpack_require__(107), _withStyles2 = _interopRequireDefault(_withStyles), _util = __webpack_require__(49), _constant = __webpack_require__(47), _style = __webpack_require__(105), _style2 = _interopRequireDefault(_style), styles = _style2.default, _ieVersion = (0, 
        _util.getIEVersion)();
        _ieVersion < 10 && (styles = _extends({}, styles, {
            toolbarSide: styles.toolbarSide + " " + styles.toolbarSideNoFlex,
            toolbarLeftSide: styles.toolbarLeftSide + " " + styles.toolbarLeftSideNoFlex,
            toolbarRightSide: styles.toolbarRightSide + " " + styles.toolbarRightSideNoFlex
        }));
        var ReactImageLightbox = function(_Component) {
            function ReactImageLightbox(props) {
                _classCallCheck(this, ReactImageLightbox);
                var _this = _possibleConstructorReturn(this, (ReactImageLightbox.__proto__ || Object.getPrototypeOf(ReactImageLightbox)).call(this, props));
                return _this.state = {
                    //-----------------------------
                    // Animation
                    //-----------------------------
                    // Lightbox is closing
                    // When Lightbox is mounted, if animation is enabled it will open with the reverse of the closing animation
                    isClosing: !props.animationDisabled,
                    // Component parts should animate (e.g., when images are moving, or image is being zoomed)
                    shouldAnimate: !1,
                    //-----------------------------
                    // Zoom settings
                    //-----------------------------
                    // Zoom level of image
                    zoomLevel: _constant.MIN_ZOOM_LEVEL,
                    //-----------------------------
                    // Image position settings
                    //-----------------------------
                    // Horizontal offset from center
                    offsetX: 0,
                    // Vertical offset from center
                    offsetY: 0
                }, _this.closeIfClickInner = _this.closeIfClickInner.bind(_this), _this.handleImageDoubleClick = _this.handleImageDoubleClick.bind(_this), 
                _this.handleImageMouseWheel = _this.handleImageMouseWheel.bind(_this), _this.handleKeyInput = _this.handleKeyInput.bind(_this), 
                _this.handleMouseUp = _this.handleMouseUp.bind(_this), _this.handleMouseDown = _this.handleMouseDown.bind(_this), 
                _this.handleMouseMove = _this.handleMouseMove.bind(_this), _this.handleOuterMousewheel = _this.handleOuterMousewheel.bind(_this), 
                _this.handleTouchStart = _this.handleTouchStart.bind(_this), _this.handleTouchMove = _this.handleTouchMove.bind(_this), 
                _this.handleTouchEnd = _this.handleTouchEnd.bind(_this), _this.handlePointerEvent = _this.handlePointerEvent.bind(_this), 
                _this.handleCaptionMousewheel = _this.handleCaptionMousewheel.bind(_this), _this.handleWindowResize = _this.handleWindowResize.bind(_this), 
                _this.handleZoomInButtonClick = _this.handleZoomInButtonClick.bind(_this), _this.handleZoomOutButtonClick = _this.handleZoomOutButtonClick.bind(_this), 
                _this.requestClose = _this.requestClose.bind(_this), _this.requestMoveNext = _this.requestMoveNext.bind(_this), 
                _this.requestMovePrev = _this.requestMovePrev.bind(_this), _this;
            }
            return _inherits(ReactImageLightbox, _Component), _createClass(ReactImageLightbox, [ {
                key: "componentWillMount",
                value: function() {
                    // Timeouts - always clear it before umount
                    this.timeouts = [], // Current action
                    this.currentAction = _constant.ACTION_NONE, // Events source
                    this.eventsSource = _constant.SOURCE_ANY, // Empty pointers list
                    this.pointerList = [], // Prevent inner close
                    this.preventInnerClose = !1, this.preventInnerCloseTimeout = null, // Whether event listeners for keyboard and mouse input have been attached or not
                    this.listenersAttached = !1, // Used to disable animation when changing props.mainSrc|nextSrc|prevSrc
                    this.keyPressed = !1, // Used to store load state / dimensions of images
                    this.imageCache = {}, // Time the last keydown event was called (used in keyboard action rate limiting)
                    this.lastKeyDownTime = 0, // Used for debouncing window resize event
                    this.resizeTimeout = null, // Used to determine when actions are triggered by the scroll wheel
                    this.wheelActionTimeout = null, this.resetScrollTimeout = null, this.scrollX = 0, 
                    this.scrollY = 0, // Used in panning zoomed images
                    this.moveStartX = 0, this.moveStartY = 0, this.moveStartOffsetX = 0, this.moveStartOffsetY = 0, 
                    // Used to swipe
                    this.swipeStartX = 0, this.swipeStartY = 0, this.swipeEndX = 0, this.swipeEndY = 0, 
                    // Used to pinch
                    this.pinchTouchList = null, this.pinchDistance = 0, // Used to differentiate between images with identical src
                    this.keyCounter = 0, // Used to detect a move when all src's remain unchanged (four or more of the same image in a row)
                    this.moveRequested = !1, this.props.animationDisabled || // Make opening animation play
                    this.setState({
                        isClosing: !1
                    });
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.mounted = !0, this.attachListeners(), this.loadAllImages();
                }
            }, {
                key: "shouldComponentUpdate",
                value: function() {
                    // Wait for move...
                    return !this.moveRequested;
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(nextProps) {
                    var _this2 = this, sourcesChanged = !1, prevSrcDict = {}, nextSrcDict = {};
                    this.getSrcTypes().forEach(function(srcType) {
                        _this2.props[srcType.name] !== nextProps[srcType.name] && (sourcesChanged = !0, 
                        prevSrcDict[_this2.props[srcType.name]] = !0, nextSrcDict[nextProps[srcType.name]] = !0);
                    }), (sourcesChanged || this.moveRequested) && (// Reset the loaded state for images not rendered next
                    Object.keys(prevSrcDict).forEach(function(prevSrc) {
                        !(prevSrc in nextSrcDict) && prevSrc in _this2.imageCache && (_this2.imageCache[prevSrc].loaded = !1);
                    }), this.moveRequested = !1, // Load any new images
                    this.loadAllImages(nextProps));
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.mounted = !1, this.detachListeners(), this.timeouts.forEach(function(tid) {
                        return clearTimeout(tid);
                    });
                }
            }, {
                key: "setTimeout",
                value: function(_setTimeout) {
                    function setTimeout(_x, _x2) {
                        return _setTimeout.apply(this, arguments);
                    }
                    return setTimeout.toString = function() {
                        return _setTimeout.toString();
                    }, setTimeout;
                }(function(func, time) {
                    var _this3 = this, id = setTimeout(function() {
                        _this3.timeouts = _this3.timeouts.filter(function(tid) {
                            return tid !== id;
                        }), func();
                    }, time);
                    return this.timeouts.push(id), id;
                })
            }, {
                key: "clearTimeout",
                value: function(_clearTimeout) {
                    function clearTimeout(_x3) {
                        return _clearTimeout.apply(this, arguments);
                    }
                    return clearTimeout.toString = function() {
                        return _clearTimeout.toString();
                    }, clearTimeout;
                }(function(id) {
                    this.timeouts = this.timeouts.filter(function(tid) {
                        return tid !== id;
                    }), clearTimeout(id);
                })
            }, {
                key: "attachListeners",
                value: function() {
                    this.listenersAttached || "undefined" == typeof window || (window.addEventListener("resize", this.handleWindowResize), 
                    window.addEventListener("mouseup", this.handleMouseUp), window.addEventListener("touchend", this.handleTouchEnd), 
                    window.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("pointerdown", this.handlePointerEvent), 
                    window.addEventListener("pointermove", this.handlePointerEvent), window.addEventListener("pointerup", this.handlePointerEvent), 
                    window.addEventListener("pointercancel", this.handlePointerEvent), // Have to add an extra mouseup handler to catch mouseup events outside of the window
                    //  if the page containing the lightbox is displayed in an iframe
                    (0, _util.isInIframe)() && (window.top.addEventListener("mouseup", this.handleMouseUp), 
                    window.top.addEventListener("touchend", this.handleTouchEnd), window.top.addEventListener("touchcancel", this.handleTouchEnd), 
                    window.top.addEventListener("pointerdown", this.handlePointerEvent), window.top.addEventListener("pointermove", this.handlePointerEvent), 
                    window.top.addEventListener("pointerup", this.handlePointerEvent), window.top.addEventListener("pointercancel", this.handlePointerEvent)), 
                    this.listenersAttached = !0);
                }
            }, {
                key: "changeZoom",
                value: function(zoomLevel, clientX, clientY) {
                    // Ignore if zoom disabled
                    if (this.props.enableZoom) {
                        // Constrain zoom level to the set bounds
                        var nextZoomLevel = Math.max(_constant.MIN_ZOOM_LEVEL, Math.min(_constant.MAX_ZOOM_LEVEL, zoomLevel));
                        // Ignore requests that don't change the zoom level
                        if (nextZoomLevel !== this.state.zoomLevel) {
                            if (nextZoomLevel === _constant.MIN_ZOOM_LEVEL) // Snap back to center if zoomed all the way out
                            return this.setState({
                                zoomLevel: nextZoomLevel,
                                offsetX: 0,
                                offsetY: 0
                            });
                            var imageBaseSize = this.getBestImageForType("mainSrc");
                            if (null !== imageBaseSize) {
                                var currentZoomMultiplier = this.getZoomMultiplier(), nextZoomMultiplier = this.getZoomMultiplier(nextZoomLevel), boxRect = this.getLightboxRect(), pointerX = "undefined" != typeof clientX ? clientX - boxRect.left : boxRect.width / 2, pointerY = "undefined" != typeof clientY ? clientY - boxRect.top : boxRect.height / 2, currentImageOffsetX = (boxRect.width - imageBaseSize.width * currentZoomMultiplier) / 2, currentImageOffsetY = (boxRect.height - imageBaseSize.height * currentZoomMultiplier) / 2, currentImageRealOffsetX = currentImageOffsetX - this.state.offsetX, currentImageRealOffsetY = currentImageOffsetY - this.state.offsetY, currentPointerXRelativeToImage = (pointerX - currentImageRealOffsetX) / currentZoomMultiplier, currentPointerYRelativeToImage = (pointerY - currentImageRealOffsetY) / currentZoomMultiplier, nextImageRealOffsetX = pointerX - currentPointerXRelativeToImage * nextZoomMultiplier, nextImageRealOffsetY = pointerY - currentPointerYRelativeToImage * nextZoomMultiplier, nextImageOffsetX = (boxRect.width - imageBaseSize.width * nextZoomMultiplier) / 2, nextImageOffsetY = (boxRect.height - imageBaseSize.height * nextZoomMultiplier) / 2, nextOffsetX = nextImageOffsetX - nextImageRealOffsetX, nextOffsetY = nextImageOffsetY - nextImageRealOffsetY;
                                // When zooming out, limit the offset so things don't get left askew
                                if (this.currentAction !== _constant.ACTION_PINCH) {
                                    var maxOffsets = this.getMaxOffsets();
                                    this.state.zoomLevel > nextZoomLevel && (nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, nextOffsetX)), 
                                    nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, nextOffsetY)));
                                }
                                this.setState({
                                    zoomLevel: nextZoomLevel,
                                    offsetX: nextOffsetX,
                                    offsetY: nextOffsetY
                                });
                            }
                        }
                    }
                }
            }, {
                key: "closeIfClickInner",
                value: function(event) {
                    !this.preventInnerClose && event.target.className.search(/\bril-inner\b/) > -1 && this.requestClose(event);
                }
            }, {
                key: "setPreventInnerClose",
                value: function() {
                    var _this4 = this;
                    this.preventInnerCloseTimeout && this.clearTimeout(this.preventInnerCloseTimeout), 
                    this.preventInnerClose = !0, this.preventInnerCloseTimeout = this.setTimeout(function() {
                        _this4.preventInnerClose = !1, _this4.preventInnerCloseTimeout = null;
                    }, 100);
                }
            }, {
                key: "detachListeners",
                value: function() {
                    this.listenersAttached && (window.removeEventListener("resize", this.handleWindowResize), 
                    window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("touchend", this.handleTouchEnd), 
                    window.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("pointerdown", this.handlePointerEvent), 
                    window.removeEventListener("pointermove", this.handlePointerEvent), window.removeEventListener("pointerup", this.handlePointerEvent), 
                    window.removeEventListener("pointercancel", this.handlePointerEvent), (0, _util.isInIframe)() && (window.top.removeEventListener("mouseup", this.handleMouseUp), 
                    window.top.removeEventListener("touchend", this.handleTouchEnd), window.top.removeEventListener("touchcancel", this.handleTouchEnd), 
                    window.top.removeEventListener("pointerdown", this.handlePointerEvent), window.top.removeEventListener("pointermove", this.handlePointerEvent), 
                    window.top.removeEventListener("pointerup", this.handlePointerEvent), window.top.removeEventListener("pointercancel", this.handlePointerEvent)), 
                    this.listenersAttached = !1);
                }
            }, {
                key: "getBestImageForType",
                value: function(srcType) {
                    var imageSrc = this.props[srcType], fitSizes = {};
                    if (this.isImageLoaded(imageSrc)) // Use full-size image if available
                    fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height); else {
                        if (!this.isImageLoaded(this.props[srcType + "Thumbnail"])) return null;
                        // Fall back to using thumbnail if the image has not been loaded
                        imageSrc = this.props[srcType + "Thumbnail"], fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height, !0);
                    }
                    return {
                        src: imageSrc,
                        height: fitSizes.height,
                        width: fitSizes.width
                    };
                }
            }, {
                key: "getFitSizes",
                value: function(width, height, stretch) {
                    var boxSize = this.getLightboxRect(), maxHeight = boxSize.height - 2 * this.props.imagePadding, maxWidth = boxSize.width - 2 * this.props.imagePadding;
                    stretch || (maxHeight = Math.min(maxHeight, height), maxWidth = Math.min(maxWidth, width));
                    var maxRatio = maxWidth / maxHeight, srcRatio = width / height;
                    return maxRatio > srcRatio ? {
                        width: width * maxHeight / height,
                        height: maxHeight
                    } : {
                        width: maxWidth,
                        height: height * maxWidth / width
                    };
                }
            }, {
                key: "getMaxOffsets",
                value: function() {
                    var zoomLevel = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.zoomLevel, currentImageInfo = this.getBestImageForType("mainSrc");
                    if (null === currentImageInfo) return {
                        maxX: 0,
                        minX: 0,
                        maxY: 0,
                        minY: 0
                    };
                    var boxSize = this.getLightboxRect(), zoomMultiplier = this.getZoomMultiplier(zoomLevel), maxX = 0;
                    // if there is still blank space in the X dimension, don't limit except to the opposite edge
                    maxX = zoomMultiplier * currentImageInfo.width - boxSize.width < 0 ? (boxSize.width - zoomMultiplier * currentImageInfo.width) / 2 : (zoomMultiplier * currentImageInfo.width - boxSize.width) / 2;
                    var maxY = 0;
                    // if there is still blank space in the Y dimension, don't limit except to the opposite edge
                    return maxY = zoomMultiplier * currentImageInfo.height - boxSize.height < 0 ? (boxSize.height - zoomMultiplier * currentImageInfo.height) / 2 : (zoomMultiplier * currentImageInfo.height - boxSize.height) / 2, 
                    {
                        maxX: maxX,
                        maxY: maxY,
                        minX: -1 * maxX,
                        minY: -1 * maxY
                    };
                }
            }, {
                key: "getSrcTypes",
                value: function() {
                    return [ {
                        name: "mainSrc",
                        keyEnding: "i" + this.keyCounter
                    }, {
                        name: "mainSrcThumbnail",
                        keyEnding: "t" + this.keyCounter
                    }, {
                        name: "nextSrc",
                        keyEnding: "i" + (this.keyCounter + 1)
                    }, {
                        name: "nextSrcThumbnail",
                        keyEnding: "t" + (this.keyCounter + 1)
                    }, {
                        name: "prevSrc",
                        keyEnding: "i" + (this.keyCounter - 1)
                    }, {
                        name: "prevSrcThumbnail",
                        keyEnding: "t" + (this.keyCounter - 1)
                    } ];
                }
            }, {
                key: "getZoomMultiplier",
                value: function() {
                    var zoomLevel = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.zoomLevel;
                    return Math.pow(_constant.ZOOM_RATIO, zoomLevel);
                }
            }, {
                key: "getLightboxRect",
                value: function() {
                    return this.outerEl ? this.outerEl.getBoundingClientRect() : {
                        width: (0, _util.getWindowWidth)(),
                        height: (0, _util.getWindowHeight)(),
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                }
            }, {
                key: "handleKeyInput",
                value: function(event) {
                    // Ignore key input during animations
                    if (event.stopPropagation(), !this.isAnimating()) {
                        // Allow slightly faster navigation through the images when user presses keys repeatedly
                        if ("keyup" === event.type) return void (this.lastKeyDownTime -= this.props.keyRepeatKeyupBonus);
                        var keyCode = event.which || event.keyCode, currentTime = new Date();
                        if (!(currentTime.getTime() - this.lastKeyDownTime < this.props.keyRepeatLimit && keyCode !== _constant.KEYS.ESC)) switch (this.lastKeyDownTime = currentTime.getTime(), 
                        keyCode) {
                          // ESC key closes the lightbox
                            case _constant.KEYS.ESC:
                            event.preventDefault(), this.requestClose(event);
                            break;

                          // Left arrow key moves to previous image
                            case _constant.KEYS.LEFT_ARROW:
                            if (!this.props.prevSrc) return;
                            event.preventDefault(), this.keyPressed = !0, this.requestMovePrev(event);
                            break;

                          // Right arrow key moves to next image
                            case _constant.KEYS.RIGHT_ARROW:
                            if (!this.props.nextSrc) return;
                            event.preventDefault(), this.keyPressed = !0, this.requestMoveNext(event);
                        }
                    }
                }
            }, {
                key: "handleOuterMousewheel",
                value: function(event) {
                    var _this5 = this;
                    // Prevent scrolling of the background
                    event.preventDefault(), event.stopPropagation();
                    var xThreshold = _constant.WHEEL_MOVE_X_THRESHOLD, actionDelay = 0, imageMoveDelay = 500;
                    // Prevent rapid-fire zoom behavior
                    if (this.clearTimeout(this.resetScrollTimeout), this.resetScrollTimeout = this.setTimeout(function() {
                        _this5.scrollX = 0, _this5.scrollY = 0;
                    }, 300), null === this.wheelActionTimeout && !this.isAnimating()) {
                        if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
                            // handle horizontal scrolls with image moves
                            this.scrollY = 0, this.scrollX += event.deltaX;
                            var bigLeapX = xThreshold / 2;
                            // If the scroll amount has accumulated sufficiently, or a large leap was taken
                            this.scrollX >= xThreshold || event.deltaX >= bigLeapX ? (// Scroll right moves to next
                            this.requestMoveNext(event), actionDelay = imageMoveDelay, this.scrollX = 0) : (this.scrollX <= -1 * xThreshold || event.deltaX <= -1 * bigLeapX) && (// Scroll left moves to previous
                            this.requestMovePrev(event), actionDelay = imageMoveDelay, this.scrollX = 0);
                        }
                        // Allow successive actions after the set delay
                        0 !== actionDelay && (this.wheelActionTimeout = this.setTimeout(function() {
                            _this5.wheelActionTimeout = null;
                        }, actionDelay));
                    }
                }
            }, {
                key: "handleImageMouseWheel",
                value: function(event) {
                    event.preventDefault();
                    var yThreshold = _constant.WHEEL_MOVE_Y_THRESHOLD;
                    if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
                        // If the vertical scroll amount was large enough, perform a zoom
                        if (event.stopPropagation(), Math.abs(event.deltaY) < yThreshold) return;
                        this.scrollX = 0, this.scrollY += event.deltaY, this.changeZoom(this.state.zoomLevel - event.deltaY, event.clientX, event.clientY);
                    }
                }
            }, {
                key: "handleImageDoubleClick",
                value: function(event) {
                    this.state.zoomLevel > _constant.MIN_ZOOM_LEVEL ? // A double click when zoomed in zooms all the way out
                    this.changeZoom(_constant.MIN_ZOOM_LEVEL, event.clientX, event.clientY) : // A double click when zoomed all the way out zooms in
                    this.changeZoom(this.state.zoomLevel + _constant.ZOOM_BUTTON_INCREMENT_SIZE, event.clientX, event.clientY);
                }
            }, {
                key: "shouldHandleEvent",
                value: function(source) {
                    if (this.eventsSource === source) return !0;
                    if (this.eventsSource === _constant.SOURCE_ANY) return this.eventsSource = source, 
                    !0;
                    switch (source) {
                      case _constant.SOURCE_MOUSE:
                        return !1;

                      case _constant.SOURCE_TOUCH:
                        return this.eventsSource = _constant.SOURCE_TOUCH, this.filterPointersBySource(), 
                        !0;

                      case _constant.SOURCE_POINTER:
                        return this.eventsSource === _constant.SOURCE_MOUSE && (this.eventsSource = _constant.SOURCE_POINTER, 
                        this.filterPointersBySource(), !0);

                      default:
                        return !1;
                    }
                }
            }, {
                key: "addPointer",
                value: function(pointer) {
                    this.pointerList.push(pointer);
                }
            }, {
                key: "removePointer",
                value: function(pointer) {
                    this.pointerList = this.pointerList.filter(function(_ref) {
                        var id = _ref.id;
                        return id !== pointer.id;
                    });
                }
            }, {
                key: "filterPointersBySource",
                value: function() {
                    var _this6 = this;
                    this.pointerList = this.pointerList.filter(function(_ref2) {
                        var source = _ref2.source;
                        return source === _this6.eventsSource;
                    });
                }
            }, {
                key: "handleMouseDown",
                value: function(event) {
                    this.shouldHandleEvent(_constant.SOURCE_MOUSE) && ReactImageLightbox.isTargetMatchImage(event.target) && (this.addPointer(ReactImageLightbox.parseMouseEvent(event)), 
                    this.multiPointerStart(event));
                }
            }, {
                key: "handleMouseMove",
                value: function(event) {
                    this.shouldHandleEvent(_constant.SOURCE_MOUSE) && this.multiPointerMove(event, [ ReactImageLightbox.parseMouseEvent(event) ]);
                }
            }, {
                key: "handleMouseUp",
                value: function(event) {
                    this.shouldHandleEvent(_constant.SOURCE_MOUSE) && (this.removePointer(ReactImageLightbox.parseMouseEvent(event)), 
                    this.multiPointerEnd(event));
                }
            }, {
                key: "handlePointerEvent",
                value: function(event) {
                    if (this.shouldHandleEvent(_constant.SOURCE_POINTER)) switch (event.type) {
                      case "pointerdown":
                        ReactImageLightbox.isTargetMatchImage(event.target) && (this.addPointer(ReactImageLightbox.parsePointerEvent(event)), 
                        this.multiPointerStart(event));
                        break;

                      case "pointermove":
                        this.multiPointerMove(event, [ ReactImageLightbox.parsePointerEvent(event) ]);
                        break;

                      case "pointerup":
                      case "pointercancel":
                        this.removePointer(ReactImageLightbox.parsePointerEvent(event)), this.multiPointerEnd(event);
                    }
                }
            }, {
                key: "handleTouchStart",
                value: function(event) {
                    var _this7 = this;
                    this.shouldHandleEvent(_constant.SOURCE_TOUCH) && ReactImageLightbox.isTargetMatchImage(event.target) && ([].forEach.call(event.changedTouches, function(eventTouch) {
                        return _this7.addPointer(ReactImageLightbox.parseTouchPointer(eventTouch));
                    }), this.multiPointerStart(event));
                }
            }, {
                key: "handleTouchMove",
                value: function(event) {
                    this.shouldHandleEvent(_constant.SOURCE_TOUCH) && this.multiPointerMove(event, [].map.call(event.changedTouches, function(eventTouch) {
                        return ReactImageLightbox.parseTouchPointer(eventTouch);
                    }));
                }
            }, {
                key: "handleTouchEnd",
                value: function(event) {
                    var _this8 = this;
                    this.shouldHandleEvent(_constant.SOURCE_TOUCH) && ([].map.call(event.changedTouches, function(touch) {
                        return _this8.removePointer(ReactImageLightbox.parseTouchPointer(touch));
                    }), this.multiPointerEnd(event));
                }
            }, {
                key: "decideMoveOrSwipe",
                value: function(pointer) {
                    this.state.zoomLevel <= _constant.MIN_ZOOM_LEVEL ? this.handleSwipeStart(pointer) : this.handleMoveStart(pointer);
                }
            }, {
                key: "multiPointerStart",
                value: function(event) {
                    switch (this.handleEnd(null), this.pointerList.length) {
                      case 1:
                        event.preventDefault(), this.decideMoveOrSwipe(this.pointerList[0]);
                        break;

                      case 2:
                        event.preventDefault(), this.handlePinchStart(this.pointerList);
                    }
                }
            }, {
                key: "multiPointerMove",
                value: function(event, pointerList) {
                    switch (this.currentAction) {
                      case _constant.ACTION_MOVE:
                        event.preventDefault(), this.handleMove(pointerList[0]);
                        break;

                      case _constant.ACTION_SWIPE:
                        event.preventDefault(), this.handleSwipe(pointerList[0]);
                        break;

                      case _constant.ACTION_PINCH:
                        event.preventDefault(), this.handlePinch(pointerList);
                    }
                }
            }, {
                key: "multiPointerEnd",
                value: function(event) {
                    switch (this.currentAction !== _constant.ACTION_NONE && (this.setPreventInnerClose(), 
                    this.handleEnd(event)), this.pointerList.length) {
                      case 0:
                        this.eventsSource = _constant.SOURCE_ANY;
                        break;

                      case 1:
                        event.preventDefault(), this.decideMoveOrSwipe(this.pointerList[0]);
                        break;

                      case 2:
                        event.preventDefault(), this.handlePinchStart(this.pointerList);
                    }
                }
            }, {
                key: "handleEnd",
                value: function(event) {
                    switch (this.currentAction) {
                      case _constant.ACTION_MOVE:
                        this.handleMoveEnd(event);
                        break;

                      case _constant.ACTION_SWIPE:
                        this.handleSwipeEnd(event);
                        break;

                      case _constant.ACTION_PINCH:
                        this.handlePinchEnd(event);
                    }
                }
            }, {
                key: "handleMoveStart",
                value: function(_ref3) {
                    var clientX = _ref3.x, clientY = _ref3.y;
                    this.props.enableZoom && (this.currentAction = _constant.ACTION_MOVE, this.moveStartX = clientX, 
                    this.moveStartY = clientY, this.moveStartOffsetX = this.state.offsetX, this.moveStartOffsetY = this.state.offsetY);
                }
            }, {
                key: "handleMove",
                value: function(_ref4) {
                    var clientX = _ref4.x, clientY = _ref4.y, newOffsetX = this.moveStartX - clientX + this.moveStartOffsetX, newOffsetY = this.moveStartY - clientY + this.moveStartOffsetY;
                    this.state.offsetX === newOffsetX && this.state.offsetY === newOffsetY || this.setState({
                        offsetX: newOffsetX,
                        offsetY: newOffsetY
                    });
                }
            }, {
                key: "handleMoveEnd",
                value: function() {
                    var _this9 = this;
                    this.currentAction = _constant.ACTION_NONE, this.moveStartX = 0, this.moveStartY = 0, 
                    this.moveStartOffsetX = 0, this.moveStartOffsetY = 0;
                    // Snap image back into frame if outside max offset range
                    var maxOffsets = this.getMaxOffsets(), nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, this.state.offsetX)), nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, this.state.offsetY));
                    nextOffsetX === this.state.offsetX && nextOffsetY === this.state.offsetY || (this.setState({
                        offsetX: nextOffsetX,
                        offsetY: nextOffsetY,
                        shouldAnimate: !0
                    }), this.setTimeout(function() {
                        _this9.setState({
                            shouldAnimate: !1
                        });
                    }, this.props.animationDuration));
                }
            }, {
                key: "handleSwipeStart",
                value: function(_ref5) {
                    var clientX = _ref5.x, clientY = _ref5.y;
                    this.currentAction = _constant.ACTION_SWIPE, this.swipeStartX = clientX, this.swipeStartY = clientY, 
                    this.swipeEndX = clientX, this.swipeEndY = clientY;
                }
            }, {
                key: "handleSwipe",
                value: function(_ref6) {
                    var clientX = _ref6.x, clientY = _ref6.y;
                    this.swipeEndX = clientX, this.swipeEndY = clientY;
                }
            }, {
                key: "handleSwipeEnd",
                value: function(event) {
                    var xDiff = this.swipeEndX - this.swipeStartX, xDiffAbs = Math.abs(xDiff), yDiffAbs = Math.abs(this.swipeEndY - this.swipeStartY);
                    if (this.currentAction = _constant.ACTION_NONE, this.swipeStartX = 0, this.swipeStartY = 0, 
                    this.swipeEndX = 0, this.swipeEndY = 0, !(!event || this.isAnimating() || xDiffAbs < 1.5 * yDiffAbs)) {
                        if (xDiffAbs < _constant.MIN_SWIPE_DISTANCE) {
                            var boxRect = this.getLightboxRect();
                            if (xDiffAbs < boxRect.width / 4) return;
                        }
                        xDiff > 0 && this.props.prevSrc ? (event.preventDefault(), this.requestMovePrev()) : xDiff < 0 && this.props.nextSrc && (event.preventDefault(), 
                        this.requestMoveNext());
                    }
                }
            }, {
                key: "calculatePinchDistance",
                value: function() {
                    var _ref7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pinchTouchList, _ref8 = _slicedToArray(_ref7, 2), a = _ref8[0], b = _ref8[1];
                    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
                }
            }, {
                key: "calculatePinchCenter",
                value: function() {
                    var _ref9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pinchTouchList, _ref10 = _slicedToArray(_ref9, 2), a = _ref10[0], b = _ref10[1];
                    return {
                        x: a.x - (a.x - b.x) / 2,
                        y: a.y - (a.y - b.y) / 2
                    };
                }
            }, {
                key: "handlePinchStart",
                value: function(pointerList) {
                    this.props.enableZoom && (this.currentAction = _constant.ACTION_PINCH, this.pinchTouchList = pointerList.map(function(_ref11) {
                        var id = _ref11.id, x = _ref11.x, y = _ref11.y;
                        return {
                            id: id,
                            x: x,
                            y: y
                        };
                    }), this.pinchDistance = this.calculatePinchDistance());
                }
            }, {
                key: "handlePinch",
                value: function(pointerList) {
                    this.pinchTouchList = this.pinchTouchList.map(function(oldPointer) {
                        for (var i = 0; i < pointerList.length; i++) if (pointerList[i].id === oldPointer.id) return pointerList[i];
                        return oldPointer;
                    });
                    var newDistance = this.calculatePinchDistance(), zoomLevel = this.state.zoomLevel + newDistance - this.pinchDistance;
                    this.pinchDistance = newDistance;
                    var _calculatePinchCenter = this.calculatePinchCenter(this.pinchTouchList), clientX = _calculatePinchCenter.x, clientY = _calculatePinchCenter.y;
                    this.changeZoom(zoomLevel, clientX, clientY);
                }
            }, {
                key: "handlePinchEnd",
                value: function() {
                    this.currentAction = _constant.ACTION_NONE, this.pinchTouchList = null, this.pinchDistance = 0;
                }
            }, {
                key: "handleWindowResize",
                value: function() {
                    this.clearTimeout(this.resizeTimeout), this.resizeTimeout = this.setTimeout(this.forceUpdate.bind(this), 100);
                }
            }, {
                key: "handleZoomInButtonClick",
                value: function() {
                    this.changeZoom(this.state.zoomLevel + _constant.ZOOM_BUTTON_INCREMENT_SIZE), this.setTimeout(this.forceUpdate.bind(this), 100);
                }
            }, {
                key: "handleZoomOutButtonClick",
                value: function() {
                    this.changeZoom(this.state.zoomLevel - _constant.ZOOM_BUTTON_INCREMENT_SIZE), this.setTimeout(this.forceUpdate.bind(this), 100);
                }
            }, {
                key: "handleCaptionMousewheel",
                value: function(event) {
                    if (event.stopPropagation(), this.caption) {
                        var height = this.caption.getBoundingClientRect().height, scrollHeight = this.caption.scrollHeight, scrollTop = this.caption.scrollTop;
                        (event.deltaY > 0 && height + scrollTop >= scrollHeight || event.deltaY < 0 && scrollTop <= 0) && event.preventDefault();
                    }
                }
            }, {
                key: "isAnimating",
                value: function() {
                    return this.state.shouldAnimate || this.state.isClosing;
                }
            }, {
                key: "isImageLoaded",
                value: function(imageSrc) {
                    return imageSrc && imageSrc in this.imageCache && this.imageCache[imageSrc].loaded;
                }
            }, {
                key: "loadImage",
                value: function(srcType, imageSrc, done) {
                    var _this10 = this;
                    // Return the image info if it is already cached
                    if (this.isImageLoaded(imageSrc)) return void this.setTimeout(function() {
                        done();
                    }, 1);
                    var that = this, inMemoryImage = new Image();
                    inMemoryImage.onerror = function(errorEvent) {
                        _this10.props.onImageLoadError(imageSrc, srcType, errorEvent), done(errorEvent);
                    }, inMemoryImage.onload = function() {
                        that.imageCache[imageSrc] = {
                            loaded: !0,
                            width: this.width,
                            height: this.height
                        }, done();
                    }, inMemoryImage.src = imageSrc;
                }
            }, {
                key: "loadAllImages",
                value: function() {
                    var _this11 = this, props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, generateLoadDoneCallback = function(srcType, imageSrc) {
                        return function(err) {
                            // Give up showing image on error
                            err || // Don't rerender if the src is not the same as when the load started
                            // or if the component has unmounted
                            _this11.props[srcType] === imageSrc && _this11.mounted && // Force rerender with the new image
                            _this11.forceUpdate();
                        };
                    };
                    // Load the images
                    this.getSrcTypes().forEach(function(srcType) {
                        var type = srcType.name;
                        // Load unloaded images
                        props[type] && !_this11.isImageLoaded(props[type]) && _this11.loadImage(type, props[type], generateLoadDoneCallback(type, props[type]));
                    });
                }
            }, {
                key: "requestClose",
                value: function(event) {
                    var _this12 = this, closeLightbox = function() {
                        return _this12.props.onCloseRequest(event);
                    };
                    // With animation
                    // Start closing animation
                    // Perform the actual closing at the end of the animation
                    return this.props.animationDisabled || "keydown" === event.type && !this.props.animationOnKeyInput ? closeLightbox() : (this.setState({
                        isClosing: !0
                    }), void this.setTimeout(closeLightbox, this.props.animationDuration));
                }
            }, {
                key: "requestMove",
                value: function(direction, event) {
                    var _this13 = this, nextState = {
                        zoomLevel: _constant.MIN_ZOOM_LEVEL,
                        offsetX: 0,
                        offsetY: 0
                    };
                    // Enable animated states
                    this.props.animationDisabled || this.keyPressed && !this.props.animationOnKeyInput || (nextState.shouldAnimate = !0, 
                    this.setTimeout(function() {
                        return _this13.setState({
                            shouldAnimate: !1
                        });
                    }, this.props.animationDuration)), this.keyPressed = !1, this.moveRequested = !0, 
                    "prev" === direction ? (this.keyCounter--, this.setState(nextState), this.props.onMovePrevRequest(event)) : (this.keyCounter++, 
                    this.setState(nextState), this.props.onMoveNextRequest(event));
                }
            }, {
                key: "requestMoveNext",
                value: function(event) {
                    this.requestMove("next", event);
                }
            }, {
                key: "requestMovePrev",
                value: function(event) {
                    this.requestMove("prev", event);
                }
            }, {
                key: "render",
                value: function() {
                    var _this14 = this, _props = this.props, animationDisabled = _props.animationDisabled, animationDuration = _props.animationDuration, clickOutsideToClose = _props.clickOutsideToClose, discourageDownloads = _props.discourageDownloads, enableZoom = _props.enableZoom, imageTitle = _props.imageTitle, nextSrc = _props.nextSrc, prevSrc = _props.prevSrc, toolbarButtons = _props.toolbarButtons, reactModalStyle = _props.reactModalStyle, _state = this.state, zoomLevel = _state.zoomLevel, offsetX = _state.offsetX, offsetY = _state.offsetY, isClosing = _state.isClosing, boxSize = this.getLightboxRect(), transitionStyle = {};
                    // Transition settings for sliding animations
                    !animationDisabled && this.isAnimating() && (transitionStyle = _extends({}, transitionStyle, {
                        transition: "transform " + animationDuration + "ms"
                    }));
                    // Key endings to differentiate between images with the same src
                    var keyEndings = {};
                    this.getSrcTypes().forEach(function(_ref12) {
                        var name = _ref12.name, keyEnding = _ref12.keyEnding;
                        keyEndings[name] = keyEnding;
                    });
                    // Images to be displayed
                    var images = [], addImage = function(srcType, imageClass) {
                        var baseStyle = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        // Ignore types that have no source defined for their full size image
                        if (_this14.props[srcType]) {
                            var imageStyle = _extends({}, baseStyle, transitionStyle);
                            zoomLevel > _constant.MIN_ZOOM_LEVEL && (imageStyle.cursor = "move");
                            var bestImageInfo = _this14.getBestImageForType(srcType);
                            if (null === bestImageInfo) {
                                var loadingIcon = void 0;
                                // Fall back to loading icon if the thumbnail has not been loaded
                                return loadingIcon = _ieVersion < 10 ? _react2.default.createElement("div", {
                                    className: styles.loadingContainer__icon
                                }, (0, _util.translate)("Loading...")) : _react2.default.createElement("div", {
                                    className: "ril-loading-circle " + styles.loadingCircle + " " + styles.loadingContainer__icon
                                }, _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                })), void images.push(_react2.default.createElement("div", {
                                    className: imageClass + " " + styles.image + " not-loaded ril-not-loaded",
                                    style: imageStyle,
                                    key: _this14.props[srcType] + keyEndings[srcType]
                                }, _react2.default.createElement("div", {
                                    className: styles.loadingContainer
                                }, loadingIcon)));
                            }
                            imageStyle.width = bestImageInfo.width, imageStyle.height = bestImageInfo.height;
                            var imageSrc = bestImageInfo.src;
                            discourageDownloads ? (imageStyle.backgroundImage = "url('" + imageSrc + "')", images.push(_react2.default.createElement("div", {
                                className: imageClass + " " + styles.image + " " + styles.imageDiscourager,
                                onDoubleClick: _this14.handleImageDoubleClick,
                                onWheel: _this14.handleImageMouseWheel,
                                style: imageStyle,
                                key: imageSrc + keyEndings[srcType]
                            }, _react2.default.createElement("div", {
                                className: "download-blocker ril-download-blocker " + styles.downloadBlocker
                            })))) : images.push(_react2.default.createElement("img", {
                                className: imageClass + " " + styles.image,
                                onDoubleClick: _this14.handleImageDoubleClick,
                                onWheel: _this14.handleImageMouseWheel,
                                onDragStart: function(e) {
                                    return e.preventDefault();
                                },
                                style: imageStyle,
                                src: imageSrc,
                                key: imageSrc + keyEndings[srcType],
                                alt: "string" == typeof imageTitle ? imageTitle : (0, _util.translate)("Image"),
                                draggable: !1
                            }));
                        }
                    }, zoomMultiplier = this.getZoomMultiplier();
                    // Next Image (displayed on the right)
                    addImage("nextSrc", "image-next ril-image-next " + styles.imageNext, ReactImageLightbox.getTransform({
                        x: boxSize.width
                    })), // Main Image
                    addImage("mainSrc", "image-current ril-image-current", ReactImageLightbox.getTransform({
                        x: -1 * offsetX,
                        y: -1 * offsetY,
                        zoom: zoomMultiplier
                    })), // Previous Image (displayed on the left)
                    addImage("prevSrc", "image-prev ril-image-prev " + styles.imagePrev, ReactImageLightbox.getTransform({
                        x: -1 * boxSize.width
                    }));
                    var noop = function() {}, zoomInButtonClasses = [ styles.toolbarItemChild, styles.builtinButton, styles.zoomInButton ], zoomOutButtonClasses = [ styles.toolbarItemChild, styles.builtinButton, styles.zoomOutButton ], zoomInButtonHandler = this.handleZoomInButtonClick, zoomOutButtonHandler = this.handleZoomOutButtonClick;
                    // Disable zooming in when zoomed all the way in
                    zoomLevel === _constant.MAX_ZOOM_LEVEL && (zoomInButtonClasses.push(styles.builtinButtonDisabled), 
                    zoomInButtonHandler = noop), // Disable zooming out when zoomed all the way out
                    zoomLevel === _constant.MIN_ZOOM_LEVEL && (zoomOutButtonClasses.push(styles.builtinButtonDisabled), 
                    zoomOutButtonHandler = noop), // Ignore clicks during animation
                    this.isAnimating() && (zoomInButtonHandler = noop, zoomOutButtonHandler = noop);
                    var modalStyle = {
                        overlay: _extends({
                            zIndex: 1e3,
                            backgroundColor: "transparent"
                        }, reactModalStyle.overlay),
                        content: _extends({
                            backgroundColor: "transparent",
                            overflow: "hidden",
                            // Needed, otherwise keyboard shortcuts scroll the page
                            border: "none",
                            borderRadius: 0,
                            padding: 0,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }, reactModalStyle.content)
                    };
                    // DEPRECATION NOTICE
                    // All unprefixed classes (listed below) will be removed in v4.0.0.
                    // Use their `ril-` prefixed alternatives instead.
                    //
                    // DEPRECATED: close, closing, download-blocker, image-current,
                    //             image-next, image-prev, inner, next-button, not-loaded,
                    //             outer, prev-button, toolbar, toolbar-left, toolbar-right,
                    //             zoom-in, zoom-out
                    return _react2.default.createElement(_reactModal2.default, {
                        isOpen: !0,
                        onRequestClose: clickOutsideToClose ? this.requestClose : noop,
                        onAfterOpen: function() {
                            return _this14.outerEl && _this14.outerEl.focus();
                        },
                        style: modalStyle,
                        contentLabel: (0, _util.translate)("Lightbox")
                    }, _react2.default.createElement("div", {
                        // eslint-disable-line jsx-a11y/no-static-element-interactions
                        // Floating modal with closing animations
                        className: "outer ril-outer " + styles.outer + " " + styles.outerAnimating + (isClosing ? " closing ril-closing " + styles.outerClosing : ""),
                        style: {
                            transition: "opacity " + animationDuration + "ms",
                            animationDuration: animationDuration + "ms",
                            animationDirection: isClosing ? "normal" : "reverse"
                        },
                        ref: function(el) {
                            _this14.outerEl = el;
                        },
                        onWheel: this.handleOuterMousewheel,
                        onMouseMove: this.handleMouseMove,
                        onMouseDown: this.handleMouseDown,
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        tabIndex: "-1",
                        onKeyDown: this.handleKeyInput,
                        onKeyUp: this.handleKeyInput
                    }, _react2.default.createElement("div", {
                        // eslint-disable-line jsx-a11y/no-static-element-interactions
                        // Image holder
                        className: "inner ril-inner " + styles.inner,
                        onClick: clickOutsideToClose ? this.closeIfClickInner : noop
                    }, images), prevSrc && _react2.default.createElement("button", {
                        // Move to previous image button
                        type: "button",
                        className: "prev-button ril-prev-button " + styles.navButtons + " " + styles.navButtonPrev,
                        key: "prev",
                        onClick: this.isAnimating() ? noop : this.requestMovePrev
                    }), nextSrc && _react2.default.createElement("button", {
                        // Move to next image button
                        type: "button",
                        className: "next-button ril-next-button " + styles.navButtons + " " + styles.navButtonNext,
                        key: "next",
                        onClick: this.isAnimating() ? noop : this.requestMoveNext
                    }), _react2.default.createElement("div", {
                        // Lightbox toolbar
                        className: "toolbar ril-toolbar " + styles.toolbar
                    }, _react2.default.createElement("ul", {
                        className: "toolbar-left ril-toolbar-left " + styles.toolbarSide + " " + styles.toolbarLeftSide
                    }, _react2.default.createElement("li", {
                        className: "ril-toolbar__item " + styles.toolbarItem
                    }, _react2.default.createElement("span", {
                        className: "ril-toolbar__item__child " + styles.toolbarItemChild
                    }, imageTitle))), _react2.default.createElement("ul", {
                        className: [ "toolbar-right", "ril-toolbar-right", styles.toolbarSide, styles.toolbarRightSide ].join(" ")
                    }, toolbarButtons ? toolbarButtons.map(function(button, i) {
                        return _react2.default.createElement("li", {
                            key: i,
                            className: "ril-toolbar__item " + styles.toolbarItem
                        }, button);
                    }) : "", enableZoom && _react2.default.createElement("li", {
                        className: "ril-toolbar__item " + styles.toolbarItem
                    }, _react2.default.createElement("button", {
                        // Lightbox zoom in button
                        type: "button",
                        key: "zoom-in",
                        className: "zoom-in ril-zoom-in " + zoomInButtonClasses.join(" "),
                        onClick: zoomInButtonHandler
                    })), enableZoom && _react2.default.createElement("li", {
                        className: "ril-toolbar__item " + styles.toolbarItem
                    }, _react2.default.createElement("button", {
                        // Lightbox zoom out button
                        type: "button",
                        key: "zoom-out",
                        className: "zoom-out ril-zoom-out " + zoomOutButtonClasses.join(" "),
                        onClick: zoomOutButtonHandler
                    })), _react2.default.createElement("li", {
                        className: "ril-toolbar__item " + styles.toolbarItem
                    }, _react2.default.createElement("button", {
                        // Lightbox close button
                        type: "button",
                        key: "close",
                        className: "close ril-close ril-toolbar__item__child" + (" " + styles.toolbarItemChild + " " + styles.builtinButton + " " + styles.closeButton),
                        onClick: this.isAnimating() ? noop : this.requestClose
                    })))), this.props.imageCaption && _react2.default.createElement("div", {
                        // Image caption
                        onWheel: this.handleCaptionMousewheel,
                        onMouseDown: function(event) {
                            return event.stopPropagation();
                        },
                        className: "ril-caption " + styles.caption,
                        ref: function(el) {
                            _this14.caption = el;
                        }
                    }, _react2.default.createElement("div", {
                        className: "ril-caption-content " + styles.captionContent
                    }, this.props.imageCaption))));
                }
            } ], [ {
                key: "isTargetMatchImage",
                value: function(target) {
                    return target && /ril-image-current/.test(target.className);
                }
            }, {
                key: "parseMouseEvent",
                value: function(mouseEvent) {
                    return {
                        id: "mouse",
                        source: _constant.SOURCE_MOUSE,
                        x: parseInt(mouseEvent.clientX, 10),
                        y: parseInt(mouseEvent.clientY, 10)
                    };
                }
            }, {
                key: "parseTouchPointer",
                value: function(touchPointer) {
                    return {
                        id: touchPointer.identifier,
                        source: _constant.SOURCE_TOUCH,
                        x: parseInt(touchPointer.clientX, 10),
                        y: parseInt(touchPointer.clientY, 10)
                    };
                }
            }, {
                key: "parsePointerEvent",
                value: function(pointerEvent) {
                    return {
                        id: pointerEvent.pointerId,
                        source: _constant.SOURCE_POINTER,
                        x: parseInt(pointerEvent.clientX, 10),
                        y: parseInt(pointerEvent.clientY, 10)
                    };
                }
            }, {
                key: "getTransform",
                value: function(_ref13) {
                    var _ref13$x = _ref13.x, x = void 0 === _ref13$x ? null : _ref13$x, _ref13$y = _ref13.y, y = void 0 === _ref13$y ? null : _ref13$y, _ref13$zoom = _ref13.zoom, zoom = void 0 === _ref13$zoom ? null : _ref13$zoom, isOldIE = _ieVersion < 10, transforms = [];
                    return null === x && null === y || transforms.push(isOldIE ? "translate(" + (x || 0) + "px," + (y || 0) + "px)" : "translate3d(" + (x || 0) + "px," + (y || 0) + "px,0)"), 
                    null !== zoom && transforms.push(isOldIE ? "scale(" + zoom + ")" : "scale3d(" + zoom + "," + zoom + ",1)"), 
                    _defineProperty({}, isOldIE ? "msTransform" : "transform", 0 === transforms.length ? "none" : transforms.join(" "));
                }
            } ]), ReactImageLightbox;
        }(_react.Component);
        ReactImageLightbox.propTypes = {
            //-----------------------------
            // Image sources
            //-----------------------------
            // Main display image url
            mainSrc: _react.PropTypes.string.isRequired,
            // eslint-disable-line react/no-unused-prop-types
            // Previous display image url (displayed to the left)
            // If left undefined, movePrev actions will not be performed, and the button not displayed
            prevSrc: _react.PropTypes.string,
            // Next display image url (displayed to the right)
            // If left undefined, moveNext actions will not be performed, and the button not displayed
            nextSrc: _react.PropTypes.string,
            //-----------------------------
            // Image thumbnail sources
            //-----------------------------
            // Thumbnail image url corresponding to props.mainSrc
            mainSrcThumbnail: _react.PropTypes.string,
            // eslint-disable-line react/no-unused-prop-types
            // Thumbnail image url corresponding to props.prevSrc
            prevSrcThumbnail: _react.PropTypes.string,
            // eslint-disable-line react/no-unused-prop-types
            // Thumbnail image url corresponding to props.nextSrc
            nextSrcThumbnail: _react.PropTypes.string,
            // eslint-disable-line react/no-unused-prop-types
            //-----------------------------
            // Event Handlers
            //-----------------------------
            // Close window event
            // Should change the parent state such that the lightbox is not rendered
            onCloseRequest: _react.PropTypes.func.isRequired,
            // Move to previous image event
            // Should change the parent state such that props.prevSrc becomes props.mainSrc,
            //  props.mainSrc becomes props.nextSrc, etc.
            onMovePrevRequest: _react.PropTypes.func,
            // Move to next image event
            // Should change the parent state such that props.nextSrc becomes props.mainSrc,
            //  props.mainSrc becomes props.prevSrc, etc.
            onMoveNextRequest: _react.PropTypes.func,
            // Called when an image fails to load
            // (imageSrc: string, srcType: string, errorEvent: object): void
            onImageLoadError: _react.PropTypes.func,
            //-----------------------------
            // Download discouragement settings
            //-----------------------------
            // Enable download discouragement (prevents [right-click -> Save Image As...])
            discourageDownloads: _react.PropTypes.bool,
            //-----------------------------
            // Animation settings
            //-----------------------------
            // Disable all animation
            animationDisabled: _react.PropTypes.bool,
            // Disable animation on actions performed with keyboard shortcuts
            animationOnKeyInput: _react.PropTypes.bool,
            // Animation duration (ms)
            animationDuration: _react.PropTypes.number,
            //-----------------------------
            // Keyboard shortcut settings
            //-----------------------------
            // Required interval of time (ms) between key actions
            // (prevents excessively fast navigation of images)
            keyRepeatLimit: _react.PropTypes.number,
            // Amount of time (ms) restored after each keyup
            // (makes rapid key presses slightly faster than holding down the key to navigate images)
            keyRepeatKeyupBonus: _react.PropTypes.number,
            //-----------------------------
            // Image info
            //-----------------------------
            // Image title
            imageTitle: _react.PropTypes.node,
            // Image caption
            imageCaption: _react.PropTypes.node,
            //-----------------------------
            // Lightbox style
            //-----------------------------
            // Set z-index style, etc., for the parent react-modal (format: https://github.com/reactjs/react-modal#styles )
            reactModalStyle: _react.PropTypes.object,
            // Padding (px) between the edge of the window and the lightbox
            imagePadding: _react.PropTypes.number,
            //-----------------------------
            // Other
            //-----------------------------
            // Array of custom toolbar buttons
            toolbarButtons: _react.PropTypes.arrayOf(_react.PropTypes.node),
            // When true, clicks outside of the image close the lightbox
            clickOutsideToClose: _react.PropTypes.bool,
            // Set to false to disable zoom functionality and hide zoom buttons
            enableZoom: _react.PropTypes.bool
        }, ReactImageLightbox.defaultProps = {
            onMovePrevRequest: function() {},
            onMoveNextRequest: function() {},
            onImageLoadError: function() {},
            discourageDownloads: !1,
            animationDisabled: !1,
            animationOnKeyInput: !1,
            animationDuration: 300,
            keyRepeatLimit: 180,
            keyRepeatKeyupBonus: 40,
            reactModalStyle: {},
            imagePadding: 10,
            clickOutsideToClose: !0,
            enableZoom: !0
        }, exports.default = (0, _withStyles2.default)(styles)(ReactImageLightbox);
    }, /* 49 */
    /***/
    function(module, exports) {
        "use strict";
        /**
	 * Get the version of Internet Explorer in use, or undefined
	 *
	 * @return {?number} ieVersion - IE version as an integer, or undefined if not IE
	 */
        function getIEVersion() {
            if ("undefined" != typeof window) {
                var match = window.navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
                return match ? parseInt(match[1], 10) : void 0;
            }
        }
        /**
	 * Placeholder for future translate functionality
	 */
        function translate(str) {
            var replaceStrings = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!str) return "";
            var translated = str;
            return replaceStrings && Object.keys(replaceStrings).forEach(function(placeholder) {
                translated = translated.replace(placeholder, replaceStrings[placeholder]);
            }), translated;
        }
        function getWindowWidth() {
            return "undefined" == typeof window ? 0 : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
        function getWindowHeight() {
            return "undefined" == typeof window ? 0 : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }
        // Returns true if this window is rendered as an iframe inside another window
        function isInIframe() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return !0;
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.getIEVersion = getIEVersion, exports.translate = translate, exports.getWindowWidth = getWindowWidth, 
        exports.getWindowHeight = getWindowHeight, exports.isInIframe = isInIframe;
    }, /* 50 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(64),
            __esModule: !0
        };
    }, /* 51 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(65),
            __esModule: !0
        };
    }, /* 52 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(66),
            __esModule: !0
        };
    }, /* 53 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(67),
            __esModule: !0
        };
    }, /* 54 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(68),
            __esModule: !0
        };
    }, /* 55 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(69),
            __esModule: !0
        };
    }, /* 56 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(70),
            __esModule: !0
        };
    }, /* 57 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = {
            default: __webpack_require__(71),
            __esModule: !0
        };
    }, /* 58 */
    /***/
    function(module, exports) {
        "use strict";
        exports.__esModule = !0, exports.default = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        };
    }, /* 59 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.__esModule = !0;
        var _defineProperty = __webpack_require__(53), _defineProperty2 = _interopRequireDefault(_defineProperty);
        exports.default = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), (0, _defineProperty2.default)(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }();
    }, /* 60 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.__esModule = !0;
        var _setPrototypeOf = __webpack_require__(55), _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf), _create = __webpack_require__(52), _create2 = _interopRequireDefault(_create), _typeof2 = __webpack_require__(33), _typeof3 = _interopRequireDefault(_typeof2);
        exports.default = function(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof superClass ? "undefined" : (0, 
            _typeof3.default)(superClass)));
            subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (_setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass);
        };
    }, /* 61 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.__esModule = !0;
        var _typeof2 = __webpack_require__(33), _typeof3 = _interopRequireDefault(_typeof2);
        exports.default = function(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" !== ("undefined" == typeof call ? "undefined" : (0, _typeof3.default)(call)) && "function" != typeof call ? self : call;
        };
    }, /* 62 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        exports.__esModule = !0;
        var _isIterable2 = __webpack_require__(50), _isIterable3 = _interopRequireDefault(_isIterable2), _getIterator2 = __webpack_require__(32), _getIterator3 = _interopRequireDefault(_getIterator2);
        exports.default = function() {
            function sliceIterator(arr, i) {
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s, _i = (0, _getIterator3.default)(arr); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                    !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        !_n && _i.return && _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            return function(arr, i) {
                if (Array.isArray(arr)) return arr;
                if ((0, _isIterable3.default)(Object(arr))) return sliceIterator(arr, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }();
    }, /* 63 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(31), __webpack_require__(30), module.exports = __webpack_require__(91);
    }, /* 64 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(31), __webpack_require__(30), module.exports = __webpack_require__(92);
    }, /* 65 */
    /***/
    function(module, exports, __webpack_require__) {
        var core = __webpack_require__(1), $JSON = core.JSON || (core.JSON = {
            stringify: JSON.stringify
        });
        module.exports = function(it) {
            // eslint-disable-line no-unused-vars
            return $JSON.stringify.apply($JSON, arguments);
        };
    }, /* 66 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(94);
        var $Object = __webpack_require__(1).Object;
        module.exports = function(P, D) {
            return $Object.create(P, D);
        };
    }, /* 67 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(95);
        var $Object = __webpack_require__(1).Object;
        module.exports = function(it, key, desc) {
            return $Object.defineProperty(it, key, desc);
        };
    }, /* 68 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(96), module.exports = __webpack_require__(1).Object.getPrototypeOf;
    }, /* 69 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(97), module.exports = __webpack_require__(1).Object.setPrototypeOf;
    }, /* 70 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(99), __webpack_require__(98), __webpack_require__(100), __webpack_require__(101), 
        module.exports = __webpack_require__(1).Symbol;
    }, /* 71 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(30), __webpack_require__(31), module.exports = __webpack_require__(29).f("iterator");
    }, /* 72 */
    /***/
    function(module, exports) {
        module.exports = function(it) {
            if ("function" != typeof it) throw TypeError(it + " is not a function!");
            return it;
        };
    }, /* 73 */
    /***/
    function(module, exports) {
        module.exports = function() {};
    }, /* 74 */
    /***/
    function(module, exports, __webpack_require__) {
        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__(7), toLength = __webpack_require__(89), toIndex = __webpack_require__(88);
        module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var value, O = toIObject($this), length = toLength(O.length), index = toIndex(fromIndex, length);
                // Array#includes uses SameValueZero equality algorithm
                if (IS_INCLUDES && el != el) {
                    for (;length > index; ) if (value = O[index++], value != value) return !0;
                } else for (;length > index; index++) if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
                return !IS_INCLUDES && -1;
            };
        };
    }, /* 75 */
    /***/
    function(module, exports, __webpack_require__) {
        // all enumerable object keys, includes symbols
        var getKeys = __webpack_require__(14), gOPS = __webpack_require__(41), pIE = __webpack_require__(22);
        module.exports = function(it) {
            var result = getKeys(it), getSymbols = gOPS.f;
            if (getSymbols) for (var key, symbols = getSymbols(it), isEnum = pIE.f, i = 0; symbols.length > i; ) isEnum.call(it, key = symbols[i++]) && result.push(key);
            return result;
        };
    }, /* 76 */
    /***/
    function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(3).document && document.documentElement;
    }, /* 77 */
    /***/
    function(module, exports, __webpack_require__) {
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__(17);
        module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
            return "String" == cof(it) ? it.split("") : Object(it);
        };
    }, /* 78 */
    /***/
    function(module, exports, __webpack_require__) {
        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__(17);
        module.exports = Array.isArray || function(arg) {
            return "Array" == cof(arg);
        };
    }, /* 79 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var create = __webpack_require__(21), descriptor = __webpack_require__(15), setToStringTag = __webpack_require__(23), IteratorPrototype = {};
        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__(10)(IteratorPrototype, __webpack_require__(2)("iterator"), function() {
            return this;
        }), module.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, {
                next: descriptor(1, next)
            }), setToStringTag(Constructor, NAME + " Iterator");
        };
    }, /* 80 */
    /***/
    function(module, exports) {
        module.exports = function(done, value) {
            return {
                value: value,
                done: !!done
            };
        };
    }, /* 81 */
    /***/
    function(module, exports, __webpack_require__) {
        var getKeys = __webpack_require__(14), toIObject = __webpack_require__(7);
        module.exports = function(object, el) {
            for (var key, O = toIObject(object), keys = getKeys(O), length = keys.length, index = 0; length > index; ) if (O[key = keys[index++]] === el) return key;
        };
    }, /* 82 */
    /***/
    function(module, exports, __webpack_require__) {
        var META = __webpack_require__(16)("meta"), isObject = __webpack_require__(12), has = __webpack_require__(5), setDesc = __webpack_require__(6).f, id = 0, isExtensible = Object.isExtensible || function() {
            return !0;
        }, FREEZE = !__webpack_require__(11)(function() {
            return isExtensible(Object.preventExtensions({}));
        }), setMeta = function(it) {
            setDesc(it, META, {
                value: {
                    i: "O" + ++id,
                    // object ID
                    w: {}
                }
            });
        }, fastKey = function(it, create) {
            // return primitive with prefix
            if (!isObject(it)) return "symbol" == typeof it ? it : ("string" == typeof it ? "S" : "P") + it;
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return "F";
                // not necessary to add metadata
                if (!create) return "E";
                // add missing metadata
                setMeta(it);
            }
            return it[META].i;
        }, getWeak = function(it, create) {
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return !0;
                // not necessary to add metadata
                if (!create) return !1;
                // add missing metadata
                setMeta(it);
            }
            return it[META].w;
        }, onFreeze = function(it) {
            return FREEZE && meta.NEED && isExtensible(it) && !has(it, META) && setMeta(it), 
            it;
        }, meta = module.exports = {
            KEY: META,
            NEED: !1,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze
        };
    }, /* 83 */
    /***/
    function(module, exports, __webpack_require__) {
        var dP = __webpack_require__(6), anObject = __webpack_require__(8), getKeys = __webpack_require__(14);
        module.exports = __webpack_require__(4) ? Object.defineProperties : function(O, Properties) {
            anObject(O);
            for (var P, keys = getKeys(Properties), length = keys.length, i = 0; length > i; ) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };
    }, /* 84 */
    /***/
    function(module, exports, __webpack_require__) {
        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = __webpack_require__(7), gOPN = __webpack_require__(40).f, toString = {}.toString, windowNames = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], getWindowNames = function(it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        };
        module.exports.f = function(it) {
            return windowNames && "[object Window]" == toString.call(it) ? getWindowNames(it) : gOPN(toIObject(it));
        };
    }, /* 85 */
    /***/
    function(module, exports, __webpack_require__) {
        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__(9), core = __webpack_require__(1), fails = __webpack_require__(11);
        module.exports = function(KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY], exp = {};
            exp[KEY] = exec(fn), $export($export.S + $export.F * fails(function() {
                fn(1);
            }), "Object", exp);
        };
    }, /* 86 */
    /***/
    function(module, exports, __webpack_require__) {
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__(12), anObject = __webpack_require__(8), check = function(O, proto) {
            if (anObject(O), !isObject(proto) && null !== proto) throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? // eslint-disable-line
            function(test, buggy, set) {
                try {
                    set = __webpack_require__(35)(Function.call, __webpack_require__(39).f(Object.prototype, "__proto__").set, 2), 
                    set(test, []), buggy = !(test instanceof Array);
                } catch (e) {
                    buggy = !0;
                }
                return function(O, proto) {
                    return check(O, proto), buggy ? O.__proto__ = proto : set(O, proto), O;
                };
            }({}, !1) : void 0),
            check: check
        };
    }, /* 87 */
    /***/
    function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(26), defined = __webpack_require__(18);
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function(TO_STRING) {
            return function(that, pos) {
                var a, b, s = String(defined(that)), i = toInteger(pos), l = s.length;
                return i < 0 || i >= l ? TO_STRING ? "" : void 0 : (a = s.charCodeAt(i), a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536);
            };
        };
    }, /* 88 */
    /***/
    function(module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(26), max = Math.max, min = Math.min;
        module.exports = function(index, length) {
            return index = toInteger(index), index < 0 ? max(index + length, 0) : min(index, length);
        };
    }, /* 89 */
    /***/
    function(module, exports, __webpack_require__) {
        // 7.1.15 ToLength
        var toInteger = __webpack_require__(26), min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
        };
    }, /* 90 */
    /***/
    function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(34), ITERATOR = __webpack_require__(2)("iterator"), Iterators = __webpack_require__(13);
        module.exports = __webpack_require__(1).getIteratorMethod = function(it) {
            if (void 0 != it) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
        };
    }, /* 91 */
    /***/
    function(module, exports, __webpack_require__) {
        var anObject = __webpack_require__(8), get = __webpack_require__(90);
        module.exports = __webpack_require__(1).getIterator = function(it) {
            var iterFn = get(it);
            if ("function" != typeof iterFn) throw TypeError(it + " is not iterable!");
            return anObject(iterFn.call(it));
        };
    }, /* 92 */
    /***/
    function(module, exports, __webpack_require__) {
        var classof = __webpack_require__(34), ITERATOR = __webpack_require__(2)("iterator"), Iterators = __webpack_require__(13);
        module.exports = __webpack_require__(1).isIterable = function(it) {
            var O = Object(it);
            return void 0 !== O[ITERATOR] || "@@iterator" in O || Iterators.hasOwnProperty(classof(O));
        };
    }, /* 93 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        var addToUnscopables = __webpack_require__(73), step = __webpack_require__(80), Iterators = __webpack_require__(13), toIObject = __webpack_require__(7);
        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__(38)(Array, "Array", function(iterated, kind) {
            this._t = toIObject(iterated), // target
            this._i = 0, // next index
            this._k = kind;
        }, function() {
            var O = this._t, kind = this._k, index = this._i++;
            return !O || index >= O.length ? (this._t = void 0, step(1)) : "keys" == kind ? step(0, index) : "values" == kind ? step(0, O[index]) : step(0, [ index, O[index] ]);
        }, "values"), // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array, addToUnscopables("keys"), addToUnscopables("values"), 
        addToUnscopables("entries");
    }, /* 94 */
    /***/
    function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(9);
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        $export($export.S, "Object", {
            create: __webpack_require__(21)
        });
    }, /* 95 */
    /***/
    function(module, exports, __webpack_require__) {
        var $export = __webpack_require__(9);
        // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
        $export($export.S + $export.F * !__webpack_require__(4), "Object", {
            defineProperty: __webpack_require__(6).f
        });
    }, /* 96 */
    /***/
    function(module, exports, __webpack_require__) {
        // 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = __webpack_require__(45), $getPrototypeOf = __webpack_require__(42);
        __webpack_require__(85)("getPrototypeOf", function() {
            return function(it) {
                return $getPrototypeOf(toObject(it));
            };
        });
    }, /* 97 */
    /***/
    function(module, exports, __webpack_require__) {
        // 19.1.3.19 Object.setPrototypeOf(O, proto)
        var $export = __webpack_require__(9);
        $export($export.S, "Object", {
            setPrototypeOf: __webpack_require__(86).set
        });
    }, /* 98 */
    /***/
    function(module, exports) {}, /* 99 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        // ECMAScript 6 symbols shim
        var global = __webpack_require__(3), has = __webpack_require__(5), DESCRIPTORS = __webpack_require__(4), $export = __webpack_require__(9), redefine = __webpack_require__(44), META = __webpack_require__(82).KEY, $fails = __webpack_require__(11), shared = __webpack_require__(25), setToStringTag = __webpack_require__(23), uid = __webpack_require__(16), wks = __webpack_require__(2), wksExt = __webpack_require__(29), wksDefine = __webpack_require__(28), keyOf = __webpack_require__(81), enumKeys = __webpack_require__(75), isArray = __webpack_require__(78), anObject = __webpack_require__(8), toIObject = __webpack_require__(7), toPrimitive = __webpack_require__(27), createDesc = __webpack_require__(15), _create = __webpack_require__(21), gOPNExt = __webpack_require__(84), $GOPD = __webpack_require__(39), $DP = __webpack_require__(6), $keys = __webpack_require__(14), gOPD = $GOPD.f, dP = $DP.f, gOPN = gOPNExt.f, $Symbol = global.Symbol, $JSON = global.JSON, _stringify = $JSON && $JSON.stringify, PROTOTYPE = "prototype", HIDDEN = wks("_hidden"), TO_PRIMITIVE = wks("toPrimitive"), isEnum = {}.propertyIsEnumerable, SymbolRegistry = shared("symbol-registry"), AllSymbols = shared("symbols"), OPSymbols = shared("op-symbols"), ObjectProto = Object[PROTOTYPE], USE_NATIVE = "function" == typeof $Symbol, QObject = global.QObject, setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild, setSymbolDesc = DESCRIPTORS && $fails(function() {
            return 7 != _create(dP({}, "a", {
                get: function() {
                    return dP(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            protoDesc && delete ObjectProto[key], dP(it, key, D), protoDesc && it !== ObjectProto && dP(ObjectProto, key, protoDesc);
        } : dP, wrap = function(tag) {
            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
            return sym._k = tag, sym;
        }, isSymbol = USE_NATIVE && "symbol" == typeof $Symbol.iterator ? function(it) {
            return "symbol" == typeof it;
        } : function(it) {
            return it instanceof $Symbol;
        }, $defineProperty = function(it, key, D) {
            return it === ObjectProto && $defineProperty(OPSymbols, key, D), anObject(it), key = toPrimitive(key, !0), 
            anObject(D), has(AllSymbols, key) ? (D.enumerable ? (has(it, HIDDEN) && it[HIDDEN][key] && (it[HIDDEN][key] = !1), 
            D = _create(D, {
                enumerable: createDesc(0, !1)
            })) : (has(it, HIDDEN) || dP(it, HIDDEN, createDesc(1, {})), it[HIDDEN][key] = !0), 
            setSymbolDesc(it, key, D)) : dP(it, key, D);
        }, $defineProperties = function(it, P) {
            anObject(it);
            for (var key, keys = enumKeys(P = toIObject(P)), i = 0, l = keys.length; l > i; ) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        }, $create = function(it, P) {
            return void 0 === P ? _create(it) : $defineProperties(_create(it), P);
        }, $propertyIsEnumerable = function(key) {
            var E = isEnum.call(this, key = toPrimitive(key, !0));
            return !(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) && (!(E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]) || E);
        }, $getOwnPropertyDescriptor = function(it, key) {
            if (it = toIObject(it), key = toPrimitive(key, !0), it !== ObjectProto || !has(AllSymbols, key) || has(OPSymbols, key)) {
                var D = gOPD(it, key);
                return !D || !has(AllSymbols, key) || has(it, HIDDEN) && it[HIDDEN][key] || (D.enumerable = !0), 
                D;
            }
        }, $getOwnPropertyNames = function(it) {
            for (var key, names = gOPN(toIObject(it)), result = [], i = 0; names.length > i; ) has(AllSymbols, key = names[i++]) || key == HIDDEN || key == META || result.push(key);
            return result;
        }, $getOwnPropertySymbols = function(it) {
            for (var key, IS_OP = it === ObjectProto, names = gOPN(IS_OP ? OPSymbols : toIObject(it)), result = [], i = 0; names.length > i; ) !has(AllSymbols, key = names[i++]) || IS_OP && !has(ObjectProto, key) || result.push(AllSymbols[key]);
            return result;
        };
        // 19.4.1.1 Symbol([description])
        USE_NATIVE || ($Symbol = function() {
            if (this instanceof $Symbol) throw TypeError("Symbol is not a constructor!");
            var tag = uid(arguments.length > 0 ? arguments[0] : void 0), $set = function(value) {
                this === ObjectProto && $set.call(OPSymbols, value), has(this, HIDDEN) && has(this[HIDDEN], tag) && (this[HIDDEN][tag] = !1), 
                setSymbolDesc(this, tag, createDesc(1, value));
            };
            return DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
                configurable: !0,
                set: $set
            }), wrap(tag);
        }, redefine($Symbol[PROTOTYPE], "toString", function() {
            return this._k;
        }), $GOPD.f = $getOwnPropertyDescriptor, $DP.f = $defineProperty, __webpack_require__(40).f = gOPNExt.f = $getOwnPropertyNames, 
        __webpack_require__(22).f = $propertyIsEnumerable, __webpack_require__(41).f = $getOwnPropertySymbols, 
        DESCRIPTORS && !__webpack_require__(20) && redefine(ObjectProto, "propertyIsEnumerable", $propertyIsEnumerable, !0), 
        wksExt.f = function(name) {
            return wrap(wks(name));
        }), $export($export.G + $export.W + $export.F * !USE_NATIVE, {
            Symbol: $Symbol
        });
        for (var symbols = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), i = 0; symbols.length > i; ) wks(symbols[i++]);
        for (var symbols = $keys(wks.store), i = 0; symbols.length > i; ) wksDefine(symbols[i++]);
        $export($export.S + $export.F * !USE_NATIVE, "Symbol", {
            // 19.4.2.1 Symbol.for(key)
            for: function(key) {
                return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function(key) {
                if (isSymbol(key)) return keyOf(SymbolRegistry, key);
                throw TypeError(key + " is not a symbol!");
            },
            useSetter: function() {
                setter = !0;
            },
            useSimple: function() {
                setter = !1;
            }
        }), $export($export.S + $export.F * !USE_NATIVE, "Object", {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols
        }), // 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return "[null]" != _stringify([ S ]) || "{}" != _stringify({
                a: S
            }) || "{}" != _stringify(Object(S));
        })), "JSON", {
            stringify: function(it) {
                if (void 0 !== it && !isSymbol(it)) {
                    for (// IE8 returns string on undefined
                    var replacer, $replacer, args = [ it ], i = 1; arguments.length > i; ) args.push(arguments[i++]);
                    return replacer = args[1], "function" == typeof replacer && ($replacer = replacer), 
                    !$replacer && isArray(replacer) || (replacer = function(key, value) {
                        if ($replacer && (value = $replacer.call(this, key, value)), !isSymbol(value)) return value;
                    }), args[1] = replacer, _stringify.apply($JSON, args);
                }
            }
        }), // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf), 
        // 19.4.3.5 Symbol.prototype[@@toStringTag]
        setToStringTag($Symbol, "Symbol"), // 20.2.1.9 Math[@@toStringTag]
        setToStringTag(Math, "Math", !0), // 24.3.3 JSON[@@toStringTag]
        setToStringTag(global.JSON, "JSON", !0);
    }, /* 100 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(28)("asyncIterator");
    }, /* 101 */
    /***/
    function(module, exports, __webpack_require__) {
        __webpack_require__(28)("observable");
    }, /* 102 */
    /***/
    function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(103)(), // imports
        // module
        exports.push([ module.id, '@-webkit-keyframes closeWindow___2Hlon{0%{opacity:1}to{opacity:0}}@keyframes closeWindow___2Hlon{0%{opacity:1}to{opacity:0}}.outer___2lDXy{background-color:rgba(0,0,0,.85);top:0;left:0;right:0;bottom:0;z-index:1000;width:100%;height:100%;-ms-content-zooming:none;-ms-user-select:none;-ms-touch-select:none;-ms-touch-action:none;touch-action:none}.outerClosing___1EQGK{opacity:0}.image___2FLq2,.inner___1rfRQ{position:absolute;top:0;left:0;right:0;bottom:0}.image___2FLq2{margin:auto;max-width:100%;max-height:100%;-ms-content-zooming:none;-ms-user-select:none;-ms-touch-select:none;-ms-touch-action:none;touch-action:none}.imageNext___1uRqJ,.imagePrev___F6xVQ{@extends .image}.imageDiscourager___3-CUB{background-repeat:no-repeat;background-position:50%;background-size:contain}.navButtons___3kNVF{border:none;position:absolute;top:0;bottom:0;width:20px;height:34px;padding:40px 30px;margin:auto;cursor:pointer;opacity:.7}.navButtons___3kNVF:hover{opacity:1}.navButtons___3kNVF:active{opacity:.7}.navButtonPrev___2vBS8{left:0;background:rgba(0,0,0,.2) url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==") no-repeat 50%}.navButtonNext___30R2i{right:0;background:rgba(0,0,0,.2) url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+") no-repeat 50%}.downloadBlocker___3rU9-{position:absolute;top:0;left:0;right:0;bottom:0;background-image:url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");background-size:cover}.caption___3vDh_,.toolbar___1xYly{background-color:rgba(0,0,0,.5);position:absolute;left:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.caption___3vDh_{bottom:0;max-height:150px;overflow:auto}.captionContent___30kw2{padding:10px 20px;color:#fff}.toolbar___1xYly{top:0;height:50px}.toolbarSide___3FYWk{height:50px;margin:0}.toolbarSideNoFlex___KxqgW{height:auto;line-height:50px;max-width:48%;position:absolute;top:0;bottom:0}.toolbarLeftSide___8beAg{padding-left:20px;padding-right:0;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;overflow:hidden;text-overflow:ellipsis}.toolbarLeftSideNoFlex___3O3cZ{left:0;overflow:visible}.toolbarRightSide___1Sdfc{padding-left:0;padding-right:20px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.toolbarRightSideNoFlex___oa0FT{right:0}.toolbarItem___3WbMb{display:inline-block;line-height:50px;padding:0;color:#fff;font-size:120%;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.toolbarItemChild___2U_MP{vertical-align:middle}.builtinButton___1zqo6{width:40px;height:35px;cursor:pointer;border:none;opacity:.7}.builtinButton___1zqo6:hover{opacity:1}.builtinButton___1zqo6:active{outline:none}.builtinButtonDisabled___3uvqe{cursor:default;opacity:.5}.builtinButtonDisabled___3uvqe:hover{opacity:.5}.closeButton___3BdAF{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=") no-repeat 50%}.zoomInButton___3xtuX{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+") no-repeat 50%}.zoomOutButton___38PZx{background:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=") no-repeat 50%}.outerAnimating___2-fZi{-webkit-animation-name:closeWindow___2Hlon;animation-name:closeWindow___2Hlon}@-webkit-keyframes pointFade___2RA5J{0%,19.999%,to{opacity:0}20%{opacity:1}}@keyframes pointFade___2RA5J{0%,19.999%,to{opacity:0}20%{opacity:1}}.loadingCircle___3JNJg{width:60px;height:60px;position:relative}.loadingCirclePoint___3md-S{width:100%;height:100%;position:absolute;left:0;top:0}.loadingCirclePoint___3md-S:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#fff;border-radius:30%;-webkit-animation:pointFade___2RA5J 1.2s infinite ease-in-out both;animation:pointFade___2RA5J 1.2s infinite ease-in-out both}.loadingCirclePoint___3md-S:first-of-type{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg)}.loadingCirclePoint___3md-S:first-of-type:before,.loadingCirclePoint___3md-S:nth-of-type(7):before{-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.loadingCirclePoint___3md-S:nth-of-type(2){-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.loadingCirclePoint___3md-S:nth-of-type(8){-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.loadingCirclePoint___3md-S:nth-of-type(2):before,.loadingCirclePoint___3md-S:nth-of-type(8):before{-webkit-animation-delay:-1s;animation-delay:-1s}.loadingCirclePoint___3md-S:nth-of-type(3){-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.loadingCirclePoint___3md-S:nth-of-type(9){-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.loadingCirclePoint___3md-S:nth-of-type(3):before,.loadingCirclePoint___3md-S:nth-of-type(9):before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.loadingCirclePoint___3md-S:nth-of-type(4){-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.loadingCirclePoint___3md-S:nth-of-type(10){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.loadingCirclePoint___3md-S:nth-of-type(4):before,.loadingCirclePoint___3md-S:nth-of-type(10):before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.loadingCirclePoint___3md-S:nth-of-type(5){-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.loadingCirclePoint___3md-S:nth-of-type(11){-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.loadingCirclePoint___3md-S:nth-of-type(5):before,.loadingCirclePoint___3md-S:nth-of-type(11):before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.loadingCirclePoint___3md-S:nth-of-type(6){-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.loadingCirclePoint___3md-S:nth-of-type(12){-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.loadingCirclePoint___3md-S:nth-of-type(6):before,.loadingCirclePoint___3md-S:nth-of-type(12):before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.loadingCirclePoint___3md-S:nth-of-type(7){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.loadingCirclePoint___3md-S:nth-of-type(13){-webkit-transform:rotate(1turn);-ms-transform:rotate(1turn);transform:rotate(1turn)}.loadingCirclePoint___3md-S:nth-of-type(7):before,.loadingCirclePoint___3md-S:nth-of-type(13):before{-webkit-animation-delay:0ms;animation-delay:0ms}.loadingContainer___2vaJ-{position:absolute;top:0;right:0;bottom:0;left:0}.loadingContainer__icon___1wQQz{color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}', "" ]), 
        // exports
        exports.locals = {
            outer: "outer___2lDXy",
            outerClosing: "outerClosing___1EQGK",
            inner: "inner___1rfRQ",
            image: "image___2FLq2",
            imagePrev: "imagePrev___F6xVQ",
            imageNext: "imageNext___1uRqJ",
            imageDiscourager: "imageDiscourager___3-CUB",
            navButtons: "navButtons___3kNVF",
            navButtonPrev: "navButtonPrev___2vBS8",
            navButtonNext: "navButtonNext___30R2i",
            downloadBlocker: "downloadBlocker___3rU9-",
            caption: "caption___3vDh_",
            toolbar: "toolbar___1xYly",
            captionContent: "captionContent___30kw2",
            toolbarSide: "toolbarSide___3FYWk",
            toolbarSideNoFlex: "toolbarSideNoFlex___KxqgW",
            toolbarLeftSide: "toolbarLeftSide___8beAg",
            toolbarLeftSideNoFlex: "toolbarLeftSideNoFlex___3O3cZ",
            toolbarRightSide: "toolbarRightSide___1Sdfc",
            toolbarRightSideNoFlex: "toolbarRightSideNoFlex___oa0FT",
            toolbarItem: "toolbarItem___3WbMb",
            toolbarItemChild: "toolbarItemChild___2U_MP",
            builtinButton: "builtinButton___1zqo6",
            builtinButtonDisabled: "builtinButtonDisabled___3uvqe",
            closeButton: "closeButton___3BdAF",
            zoomInButton: "zoomInButton___3xtuX",
            zoomOutButton: "zoomOutButton___38PZx",
            outerAnimating: "outerAnimating___2-fZi",
            closeWindow: "closeWindow___2Hlon",
            loadingCircle: "loadingCircle___3JNJg",
            loadingCirclePoint: "loadingCirclePoint___3md-S",
            pointFade: "pointFade___2RA5J",
            loadingContainer: "loadingContainer___2vaJ-",
            loadingContainer__icon: "loadingContainer__icon___1wQQz"
        };
    }, /* 103 */
    /***/
    function(module, exports) {
        /*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
        // css base code, injected by the css-loader
        module.exports = function() {
            var list = [];
            // return the list of modules as css string
            // import a list of modules into the list
            return list.toString = function() {
                for (var result = [], i = 0; i < this.length; i++) {
                    var item = this[i];
                    item[2] ? result.push("@media " + item[2] + "{" + item[1] + "}") : result.push(item[1]);
                }
                return result.join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }, /* 104 */
    /***/
    function(module, exports) {
        /**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
        "use strict";
        var REACT_STATICS = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }, KNOWN_STATICS = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            arguments: !0,
            arity: !0
        }, isGetOwnPropertySymbolsAvailable = "function" == typeof Object.getOwnPropertySymbols;
        module.exports = function(targetComponent, sourceComponent, customStatics) {
            if ("string" != typeof sourceComponent) {
                // don't hoist over string (html) components
                var keys = Object.getOwnPropertyNames(sourceComponent);
                /* istanbul ignore else */
                isGetOwnPropertySymbolsAvailable && (keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent)));
                for (var i = 0; i < keys.length; ++i) if (!(REACT_STATICS[keys[i]] || KNOWN_STATICS[keys[i]] || customStatics && customStatics[keys[i]])) try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {}
            }
            return targetComponent;
        };
    }, /* 105 */
    /***/
    function(module, exports, __webpack_require__) {
        var content = __webpack_require__(102), insertCss = __webpack_require__(106);
        "string" == typeof content && (content = [ [ module.id, content, "" ] ]), module.exports = content.locals || {}, 
        module.exports._getContent = function() {
            return content;
        }, module.exports._getCss = function() {
            return content.toString();
        }, module.exports._insertCss = function(options) {
            return insertCss(content, options);
        };
    }, /* 106 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        // Base64 encoding and decoding - The "Unicode Problem"
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
        function b64EncodeUnicode(str) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                return String.fromCharCode("0x" + p1);
            }));
        }
        /**
	 * Remove style/link elements for specified node IDs
	 * if they are no longer referenced by UI components.
	 */
        function removeCss(ids) {
            var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
            try {
                for (var _step, _iterator = (0, _getIterator3.default)(ids); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0) {
                    var id = _step.value;
                    if (--inserted[id] <= 0) {
                        var elem = document.getElementById(prefix + id);
                        elem && elem.parentNode.removeChild(elem);
                    }
                }
            } catch (err) {
                _didIteratorError = !0, _iteratorError = err;
            } finally {
                try {
                    !_iteratorNormalCompletion && _iterator.return && _iterator.return();
                } finally {
                    if (_didIteratorError) throw _iteratorError;
                }
            }
        }
        /**
	 * Example:
	 *   // Insert CSS styles object generated by `css-loader` into DOM
	 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
	 *
	 *   // Remove it from the DOM
	 *   removeCss();
	 */
        function insertCss(styles) {
            for (var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ref$replace = _ref.replace, replace = void 0 !== _ref$replace && _ref$replace, _ref$prepend = _ref.prepend, prepend = void 0 !== _ref$prepend && _ref$prepend, ids = [], i = 0; i < styles.length; i++) {
                var _styles$i = (0, _slicedToArray3.default)(styles[i], 4), moduleId = _styles$i[0], css = _styles$i[1], media = _styles$i[2], sourceMap = _styles$i[3], id = moduleId + "-" + i;
                if (ids.push(id), !inserted[id] || replace) {
                    inserted[id] = 1;
                    var elem = document.getElementById(prefix + id), create = !1;
                    elem || (create = !0, elem = document.createElement("style"), elem.setAttribute("type", "text/css"), 
                    elem.id = prefix + id, media && elem.setAttribute("media", media));
                    var cssText = css;
                    sourceMap && btoa && (// skip IE9 and below, see http://caniuse.com/atob-btoa
                    cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode((0, 
                    _stringify2.default)(sourceMap)) + "*/", cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/"), 
                    "textContent" in elem ? elem.textContent = cssText : elem.styleSheet.cssText = cssText, 
                    create && (prepend ? document.head.insertBefore(elem, document.head.childNodes[0]) : document.head.appendChild(elem));
                } else inserted[id]++;
            }
            return removeCss.bind(null, ids);
        }
        var _stringify = __webpack_require__(51), _stringify2 = _interopRequireDefault(_stringify), _slicedToArray2 = __webpack_require__(62), _slicedToArray3 = _interopRequireDefault(_slicedToArray2), _getIterator2 = __webpack_require__(32), _getIterator3 = _interopRequireDefault(_getIterator2), prefix = "s", inserted = {};
        module.exports = insertCss;
    }, /* 107 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function withStyles() {
            for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) styles[_key] = arguments[_key];
            return function(ComposedComponent) {
                var WithStyles = function(_Component) {
                    function WithStyles() {
                        return (0, _classCallCheck3.default)(this, WithStyles), (0, _possibleConstructorReturn3.default)(this, (WithStyles.__proto__ || (0, 
                        _getPrototypeOf2.default)(WithStyles)).apply(this, arguments));
                    }
                    return (0, _inherits3.default)(WithStyles, _Component), (0, _createClass3.default)(WithStyles, [ {
                        key: "componentWillMount",
                        value: function() {
                            this.removeCss = this.context.insertCss.apply(void 0, styles);
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            setTimeout(this.removeCss, 0);
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return _react2.default.createElement(ComposedComponent, this.props);
                        }
                    } ]), WithStyles;
                }(_react.Component), displayName = ComposedComponent.displayName || ComposedComponent.name || "Component";
                return WithStyles.displayName = "WithStyles(" + displayName + ")", WithStyles.contextTypes = contextTypes, 
                WithStyles.ComposedComponent = ComposedComponent, (0, _hoistNonReactStatics2.default)(WithStyles, ComposedComponent);
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _getPrototypeOf = __webpack_require__(54), _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf), _classCallCheck2 = __webpack_require__(58), _classCallCheck3 = _interopRequireDefault(_classCallCheck2), _createClass2 = __webpack_require__(59), _createClass3 = _interopRequireDefault(_createClass2), _possibleConstructorReturn2 = __webpack_require__(61), _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2), _inherits2 = __webpack_require__(60), _inherits3 = _interopRequireDefault(_inherits2), _react = __webpack_require__(46), _react2 = _interopRequireDefault(_react), _hoistNonReactStatics = __webpack_require__(104), _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics), contextTypes = {
            insertCss: _react.PropTypes.func
        };
        exports.default = withStyles;
    }, /* 108 */
    /***/
    function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_108__;
    } ]);
});
//# sourceMappingURL=react-image-lightbox.js.map