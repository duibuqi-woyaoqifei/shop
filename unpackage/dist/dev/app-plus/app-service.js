var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$A = /* @__PURE__ */ vue.defineComponent({
    __name: "IndexSwiper",
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      const { list } = vue.toRefs(props);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("swiper", {
          "indicator-dots": true,
          autoplay: true,
          interval: 3e3,
          duration: 1e3
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(list), (item, index) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
              vue.createElementVNode("view", { class: "swiper-item" }, [
                vue.createElementVNode("image", {
                  class: "swiper-img",
                  src: item.imgUrl,
                  mode: ""
                }, null, 8, ["src"])
              ])
            ]);
          }), 128))
        ]);
      };
    }
  });
  var IndexSwiper = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-93154ee2"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/recommend/IndexSwiper.vue"]]);
  const _sfc_main$z = /* @__PURE__ */ vue.defineComponent({
    __name: "Recommend",
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      const { list } = vue.toRefs(props);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "recommend" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(list), (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "recommend-item",
              key: index
            }, [
              vue.createElementVNode("image", {
                class: "item-big",
                src: item.bigImgUrl,
                mode: ""
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "item-small" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.smallImgUrls, (item2, index2) => {
                  return vue.openBlock(), vue.createElementBlock("image", {
                    key: index2,
                    class: "item-img",
                    src: item2.imgUrl,
                    mode: ""
                  }, null, 8, ["src"]);
                }), 128))
              ])
            ]);
          }), 128))
        ]);
      };
    }
  });
  var Recommend = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-4bc7b7a1"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/recommend/Recommend.vue"]]);
  const _sfc_main$y = /* @__PURE__ */ vue.defineComponent({
    __name: "GuessYou",
    props: {
      title: String
    },
    setup(__props) {
      const props = __props;
      const { title } = props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "card" }, [
          vue.createElementVNode("view", null, "-"),
          vue.createElementVNode("view", { class: "guess-you" }, vue.toDisplayString(vue.unref(title)), 1),
          vue.createElementVNode("view", null, "-")
        ]);
      };
    }
  });
  var GuessYou = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-cfcdc7be"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/common/GuessYou.vue"]]);
  const _sfc_main$x = /* @__PURE__ */ vue.defineComponent({
    __name: "Product",
    props: {
      list: { type: Object, required: false, default: [] },
      lineItemNum: { type: null, required: false, default: 2 },
      isWrap: { type: null, required: false, default: true }
    },
    setup(__props) {
      const props = __props;
      const { list } = vue.toRefs(props);
      const { lineItemNum, isWrap } = props;
      let imgStyle = {
        width: "",
        height: "",
        wrap: ""
      };
      if (lineItemNum) {
        const sideLength = 750 / lineItemNum - 10;
        imgStyle.width = "width: " + sideLength + "rpx;";
        imgStyle.height = "height: " + sideLength + "rpx;";
      }
      if (!isWrap) {
        imgStyle.width = "width: 200rpx;";
        imgStyle.height = "height: 200rpx;";
        imgStyle.wrap = "flex-wrap: nowrap;";
      }
      const GoDetails = (item) => {
        const id = (item.id - 1) % 4 + 1;
        uni.navigateTo({
          url: "/pages/details/details?id=" + id
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "product",
          style: vue.normalizeStyle(vue.unref(imgStyle).wrap)
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(list), (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "product-item",
              key: index,
              style: vue.normalizeStyle(vue.unref(imgStyle).width),
              onClick: ($event) => GoDetails(item)
            }, [
              vue.createElementVNode("image", {
                class: "product-img",
                src: item.imgUrl,
                style: vue.normalizeStyle(vue.unref(imgStyle).height)
              }, null, 12, ["src"]),
              vue.createElementVNode("view", { class: "product-content" }, [
                vue.createElementVNode("text", { class: "product-name" }, vue.toDisplayString(item.name), 1),
                vue.createElementVNode("view", { class: "price" }, [
                  vue.createElementVNode("text", { class: "present-price" }, vue.toDisplayString(item.presentPrice), 1),
                  vue.createElementVNode("text", { class: "original-price" }, vue.toDisplayString(item.originalPrice), 1)
                ]),
                vue.createElementVNode("text", { class: "discount" }, vue.toDisplayString(item.discount) + "\u6298", 1)
              ])
            ], 12, ["onClick"]);
          }), 128))
        ], 4);
      };
    }
  });
  var Product = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-65395db4"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/common/Product.vue"]]);
  const _sfc_main$w = /* @__PURE__ */ vue.defineComponent({
    __name: "ProductList",
    props: {
      list: Object,
      lineItemNum: Number
    },
    setup(__props) {
      const props = __props;
      const { list } = vue.toRefs(props);
      const { lineItemNum } = props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
          vue.createVNode(Product, {
            list: vue.unref(list),
            lineItemNum: vue.unref(lineItemNum)
          }, null, 8, ["list", "lineItemNum"])
        ]);
      };
    }
  });
  var ProductList = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/common/ProductList.vue"]]);
  var _imports_0$1 = "/static/img/banner1.jpg";
  const _sfc_main$v = {};
  function _sfc_render$7(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "banner" }, [
      vue.createElementVNode("image", {
        class: "banner-img",
        src: _imports_0$1,
        mode: ""
      })
    ]);
  }
  var Banner = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$7], ["__scopeId", "data-v-11c0bb7c"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/outdoors/Banner.vue"]]);
  const _sfc_main$u = /* @__PURE__ */ vue.defineComponent({
    __name: "Icons",
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      const { list } = vue.toRefs(props);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "icons" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(list), (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "icons-item",
              key: index
            }, [
              vue.createElementVNode("image", {
                class: "icons-item-img",
                src: item.imgUrl,
                mode: ""
              }, null, 8, ["src"]),
              vue.createElementVNode("text", null, vue.toDisplayString(item.name), 1)
            ]);
          }), 128))
        ]);
      };
    }
  });
  var Icons = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-6d21dc0c"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/outdoors/Icons.vue"]]);
  var _imports_0 = "/static/img/brands.jpg";
  const _sfc_main$t = /* @__PURE__ */ vue.defineComponent({
    __name: "Brands",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "brands" }, [
          vue.createVNode(GuessYou, { title: "\u8D85\u7EA7\u5927\u724C" }),
          vue.createElementVNode("image", {
            class: "brands-img",
            src: _imports_0,
            mode: ""
          })
        ]);
      };
    }
  });
  var Brands = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-bb93dbc8"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/outdoors/Brands.vue"]]);
  const _sfc_main$s = /* @__PURE__ */ vue.defineComponent({
    __name: "HotSale",
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      const { list } = vue.toRefs(props);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "hotSale" }, [
          vue.createVNode(GuessYou, { title: "\u70ED\u9500\u7206\u6B3E" }),
          vue.createVNode(ProductList, {
            list: vue.unref(list),
            lineItemNum: 3
          }, null, 8, ["list"])
        ]);
      };
    }
  });
  var HotSale = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/outdoors/HotSale.vue"]]);
  const _sfc_main$r = /* @__PURE__ */ vue.defineComponent({
    __name: "Store",
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      const { list } = vue.toRefs(props);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "store" }, [
          vue.createVNode(GuessYou, { title: "\u63A8\u8350\u5E97\u94FA" }),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(list), (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", { class: "store-item" }, [
              vue.createElementVNode("image", {
                class: "store-item-img-big",
                src: item.bigImgUrl,
                mode: ""
              }, null, 8, ["src"]),
              vue.createElementVNode("scroll-view", {
                "scroll-x": "true",
                class: "scroll-view"
              }, [
                vue.createElementVNode("view", { class: "scroll-content" }, [
                  vue.createVNode(Product, {
                    list: item.list,
                    isWrap: false
                  }, null, 8, ["list"])
                ])
              ])
            ]);
          }), 256))
        ]);
      };
    }
  });
  var Store = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-ffc5077e"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/outdoors/Store.vue"]]);
  const ON_LAUNCH = "onLaunch";
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
  const ON_BACK_PRESS = "onBackPress";
  const ON_TAB_ITEM_TAP = "onTabItemTap";
  const ON_REACH_BOTTOM = "onReachBottom";
  const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";
  const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";
  const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";
  const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLaunch = /* @__PURE__ */ createHook(ON_LAUNCH);
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReady = /* @__PURE__ */ createHook(ON_READY);
  const onBackPress = /* @__PURE__ */ createHook(ON_BACK_PRESS);
  const onTabItemTap = /* @__PURE__ */ createHook(ON_TAB_ITEM_TAP);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const onNavigationBarButtonTap = /* @__PURE__ */ createHook(ON_NAVIGATION_BAR_BUTTON_TAP);
  const onNavigationBarSearchInputChanged = /* @__PURE__ */ createHook(ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED);
  const onNavigationBarSearchInputClicked = /* @__PURE__ */ createHook(ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED);
  const onNavigationBarSearchInputConfirmed = /* @__PURE__ */ createHook(ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED);
  const InitialConvertCase = (str, upperLower = "") => {
    const initial = str.charAt(0);
    const upperArr = ["upper", "Upper", "\u5927\u5199", "\u9996\u5B57\u6BCD\u5927\u5199"];
    const lowerArr = ["lower", "Lower", "\u5C0F\u5199", "\u9996\u5B57\u6BCD\u5C0F\u5199"];
    if (upperArr.indexOf(upperLower) !== -1) {
      return str = initial.toUpperCase() + str.slice(1);
    }
    if (lowerArr.indexOf(upperLower) !== -1) {
      return str = initial.toLowerCase() + str.slice(1);
    }
    if (initial === initial.toUpperCase()) {
      return str = initial.toLowerCase() + str.slice(1);
    }
    if (initial === initial.toLowerCase()) {
      return str = initial.toUpperCase() + str.slice(1);
    }
    return "";
  };
  class UniReqs {
    constructor(_information, callback) {
      this._information = _information;
      this.callback = callback;
      this.method = this._information.data.operation === "get" ? "GET" : "POST";
      if (this.method === "POST") {
        this.Request("POST");
      } else {
        this.Request("GET");
      }
    }
    Request(way) {
      const pendingData = way === "GET" ? this._information.data : JSON.stringify(this._information.data);
      this._information.uniReq({
        url: "http://192.168.1.80:3000/api/data/" + InitialConvertCase(this._information.command, "\u5C0F\u5199"),
        method: this.method,
        data: pendingData,
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        sslVerify: false,
        success: ({ data }) => {
          if (this._information.renderInfo) {
            for (const i2 of this._information.renderInfo) {
              i2.renderList = data.data[i2.name];
            }
          }
          if (this.method === "POST") {
            if (this._information.data.autoReq) {
              this.method = "GET";
              return this.Request("GET");
            }
          }
          if (this.callback) {
            this.callback(data.data);
          }
        },
        fail: (err) => {
          formatAppLog("log", "at plugins/request.ts:86", err);
        }
      });
    }
  }
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn2) {
      const index = this.watchers.push(fn2) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn2) {
        return i18n.watchLocale(fn2);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en$1 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  var zhHant = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages = {
    en: en$1,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$1
  } = initVueI18n(messages);
  const _sfc_main$q = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$1("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$1("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$1("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--android-MP"
      }, [
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4)
      ], 4)) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--ios-H5"
      }, [
        vue.createElementVNode("image", {
          src: $data.imgBase64,
          mode: "widthFix"
        }, null, 8, ["src"])
      ], 4)) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "uni-load-more__text",
        style: vue.normalizeStyle({ color: $props.color })
      }, vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText), 5)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var UniLoadMore = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$6], ["__scopeId", "data-v-90d4256a"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$p = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        nvue: ""
      }, [
        vue.createCommentVNode(' <view v-if="type" class="uni-section__head">\n				<view :class="type" class="uni-section__head-tag"/>\n			</view> '),
        vue.createElementVNode("view", { class: "uni-section__content" }, [
          vue.createElementVNode("text", {
            class: vue.normalizeClass([{ "distraction": !$props.subTitle }, "uni-section__content-title"]),
            style: vue.normalizeStyle({ color: $props.color })
          }, vue.toDisplayString($props.title), 7),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "uni-section__content-sub"
          }, vue.toDisplayString($props.subTitle), 1)) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      vue.createElementVNode("view", {
        style: vue.normalizeStyle({ padding: $props.padding ? "10px" : "" })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4)
    ]);
  }
  var UniSection = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$5], ["__scopeId", "data-v-5584ec96"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/uni-section/uni-section.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.14
    * (c) 2022 Eduardo San Martin Morote
    * @license MIT
    */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o2) {
    return o2 && typeof o2 === "object" && Object.prototype.toString.call(o2) === "[object Object]" && typeof o2.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : "msSaveOrOpenBlob" in _navigator ? msSaveAs : fileSaverSaveAs;
  function downloadSaveAs(blob, name = "download", opts) {
    const a2 = document.createElement("a");
    a2.download = name;
    a2.rel = "noopener";
    if (typeof blob === "string") {
      a2.href = blob;
      if (a2.origin !== location.origin) {
        if (corsEnabled(a2.href)) {
          download(blob, name, opts);
        } else {
          a2.target = "_blank";
          click(a2);
        }
      } else {
        click(a2);
      }
    } else {
      a2.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a2.href);
      }, 4e4);
      setTimeout(function() {
        click(a2);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a2 = document.createElement("a");
        a2.href = blob;
        a2.target = "_blank";
        setTimeout(function() {
          click(a2);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "\u{1F34D} " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o2) {
    return "_a" in o2 && "install" in o2;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      pinia.state.value = JSON.parse(await navigator.clipboard.readText());
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = await getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      pinia.state.value = JSON.parse(text);
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "\u{1F34D} Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const getStoreType = (id) => "\u{1F34D} " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia \u{1F34D}",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia \u{1F34D}`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia \u{1F34D}",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: store.$state,
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : store.$state
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("\u{1F34D}")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia \u{1F34D}",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "\u{1F6EB} " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "\u{1F6EC} " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "\u{1F4A5} " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: __spreadValues({
            store: formatDisplay(store.$id)
          }, formatEventData(events)),
          groupId: activeAction
        };
        activeAction = void 0;
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "\u2935\uFE0F";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "\u{1F9E9}";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "\u{1F525} " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store \u{1F5D1}`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed \u{1F195}`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        });
        return actions[actionName].apply(trackedStore, arguments);
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    if (options.state) {
      store._isOptionsAPI = true;
    }
    if (typeof options.state === "function") {
      patchActionForGrouping(store, Object.keys(options.actions));
      const originalHotUpdate = store._hotUpdate;
      vue.toRaw(store)._hotUpdate = function(newStore) {
        originalHotUpdate.apply(this, arguments);
        patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions));
      };
    }
    addStoreToDevtools(app, store);
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (IS_CLIENT) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (IS_CLIENT && true) {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentInstance()) {
      vue.onUnmounted(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  function mergeReactiveObjects(target, patchToApply) {
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o2) {
    return !!(vue.isRef(o2) && o2.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? vue.toRefs(vue.ref(state ? state() : {}).value) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    store.$reset = function $reset() {
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    };
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = vue.markRaw([]);
    let actionSubscriptions = vue.markRaw([]);
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = () => {
      throw new Error(`\u{1F34D}: Store "${$id}" is build using the setup syntax and does not implement $reset().`);
    };
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(assign(IS_CLIENT ? {
      _customProperties: vue.markRaw(/* @__PURE__ */ new Set()),
      _hmrPayload
    } : {}, partialStore));
    pinia._s.set($id, store);
    const setupStore = pinia._e.run(() => {
      scope = vue.effectScope();
      return scope.run(() => setup());
    });
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? options.getters[key] : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? vue.computed(() => {
            setActivePinia(pinia);
            return getter.call(store, store);
          }) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
      const nonEnumerable = {
        writable: true,
        configurable: true,
        enumerable: false
      };
      if (IS_CLIENT) {
        ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p2) => {
          Object.defineProperty(store, p2, __spreadValues({
            value: store[p2]
          }, nonEnumerable));
        });
      }
    }
    pinia._p.forEach((extender) => {
      if (IS_CLIENT) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
    }
    function useStore(pinia, hot) {
      const currentInstance = vue.getCurrentInstance();
      pinia = pinia || currentInstance && vue.inject(piniaSymbol);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT && currentInstance && currentInstance.proxy && !hot) {
        const vm = currentInstance.proxy;
        const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
        cache[id] = store;
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const useAddressStore = defineStore("address", {
    state: () => {
      return {
        addressList: []
      };
    },
    getters: {
      IsDefault(state) {
        state.addressList.forEach((item) => {
          if (item.isDefault) {
            item.isDefault = false;
          }
        });
      },
      GetDefaultAddress(state) {
        return state.addressList.filter((item) => {
          return item.isDefault;
        })[0];
      }
    },
    actions: {
      AddAddress(item) {
        if (item.isDefault) {
          this.IsDefault;
        }
      },
      EditAddress(item, index) {
        if (item.isDefault) {
          this.IsDefault;
        }
      }
    }
  });
  const useUserStore = defineStore("user", {
    state: () => {
      return {
        loginStatus: false,
        token: "",
        userInfo: {}
      };
    },
    getters: {},
    actions: {
      LoginSuccess(userInfo) {
        this.userInfo = userInfo;
        this.loginStatus = true;
        this.token = userInfo.token;
        uni.setStorageSync("userInfo", JSON.stringify(userInfo));
      },
      InitUser() {
        let userInfo = uni.getStorageSync("userInfo");
        if (userInfo) {
          userInfo = JSON.parse(userInfo);
          this.userInfo = userInfo;
          this.loginStatus = true;
          this.token = userInfo.token;
        }
      },
      LoginOut() {
        if (!this.loginStatus) {
          uni.navigateTo({
            url: "/pages/login/login"
          });
          uni.showToast({
            title: "\u8BF7\u5148\u767B\u5F55",
            icon: "none"
          });
          return;
        }
        this.userInfo = {};
        this.loginStatus = false;
        this.token = "";
        uni.removeStorageSync("userInfo");
        uni.showToast({
          title: "\u9000\u51FA\u6210\u529F",
          icon: "none"
        });
        uni.switchTab({
          url: "/pages/index/index"
        });
      }
    }
  });
  const _sfc_main$o = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    setup(__props) {
      const userStore = useUserStore();
      const { loginStatus, userInfo } = userStore;
      const addressStore = useAddressStore();
      const { addressList } = storeToRefs(addressStore);
      const swiperHeight = vue.ref(0);
      const currentTopBar = vue.ref(0);
      const scrollIntoIndex = vue.ref("top0");
      const requestedList = vue.ref([]);
      const topBar = vue.ref([]);
      const swiperList = vue.ref([]);
      const recommendList = vue.ref([]);
      const productList = vue.ref([]);
      const iconsList = vue.ref([]);
      const hotSaleList = vue.ref([]);
      const storeProductList = vue.ref([]);
      const indexLists = vue.toRefs(vue.reactive({
        topBar,
        swiperList,
        recommendList,
        productList,
        iconsList,
        hotSaleList,
        storeProductList
      }));
      const infomation = vue.reactive({
        command: "index/0",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 5,
            content: ""
          }
        },
        uniReq: uni.request,
        renderInfo: []
      });
      const pullUpStatus = vue.ref("more");
      const ChangeRenderInfo = (index) => {
        infomation.command = "index/" + index;
        let nameList = [];
        let renderInfo = [];
        if (index === 0) {
          nameList = ["topBar", "swiperList", "recommendList", "productList"];
        }
        if (index === 1) {
          nameList = ["iconsList", "hotSaleList", "storeProductList"];
        }
        for (let i2 of nameList) {
          renderInfo.push({
            name: i2,
            renderList: indexLists[i2]
          });
        }
        infomation.renderInfo = renderInfo;
      };
      const GetTopBarClass = (index) => {
        return currentTopBar.value === index ? "scroll-item f-active-color" : "scroll-item";
      };
      const ChangeTopBar = (index) => {
        if (currentTopBar.value !== index) {
          currentTopBar.value = index;
          scrollIntoIndex.value = "top" + index;
          if (requestedList.value.indexOf(index) !== -1) {
            GetSwiperHeight(index);
            return;
          }
          ChangeRenderInfo(index);
          new UniReqs(infomation, (data) => {
            GetSwiperHeight(index);
            requestedList.value.push(index);
          });
        }
      };
      const SwiperChange = (event) => {
        const { current } = event.detail;
        ChangeTopBar(current);
      };
      const GetSwiperHeight = (id = 0, delay = 0) => {
        setTimeout(function() {
          let view = uni.createSelectorQuery().select("#swiper" + id);
          view.boundingClientRect((data) => {
            if (!data)
              return;
            swiperHeight.value = data.height;
          }).exec();
        }, delay);
      };
      const LazyLoading = () => {
        pullUpStatus.value = "loading";
        const index = currentTopBar.value;
        let pageSize = 4;
        let renderList = productList;
        let name = "productList";
        if (index === 1) {
          pageSize = 1;
          renderList = storeProductList;
          name = "storeProductList";
        }
        const pageNum = renderList.value.length / pageSize;
        infomation.command = "index/" + index + "/more";
        infomation.data.queryInfo.pageNum = pageNum;
        infomation.data.queryInfo.pageSize = pageSize;
        infomation.renderInfo = [];
        new UniReqs(infomation, (data) => {
          if (data === "nomore") {
            pullUpStatus.value = "nomore";
            return;
          }
          for (let i2 of data[name]) {
            renderList.value.push(i2);
          }
          pullUpStatus.value = "more";
          GetSwiperHeight(index);
        });
      };
      const ReqCart = () => {
        if (loginStatus) {
          const infor = {
            command: "address",
            data: {
              commander: "",
              operation: "get",
              queryInfo: {
                pageNum: 1,
                pageSize: 9999,
                content: userInfo["id"],
                column: "userId"
              }
            },
            uniReq: uni.request
          };
          new UniReqs(infor, (data) => {
            addressList.value = data.addressList;
          });
        }
      };
      onReady(() => {
        GetSwiperHeight();
        ReqCart();
      });
      vue.onBeforeMount(() => {
        ChangeRenderInfo(0);
        new UniReqs(infomation, (data) => {
          GetSwiperHeight();
          requestedList.value.push(0);
        });
      });
      onReachBottom(() => {
        LazyLoading();
      });
      onNavigationBarButtonTap((e) => {
        if (e.float === "left") {
          uni.navigateTo({
            url: "../search/search"
          });
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createElementVNode("view", { class: "f-color" }, [
            vue.createElementVNode("scroll-view", {
              "scroll-x": "true",
              class: "scroll-view",
              "scroll-into-view": scrollIntoIndex.value
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(topBar.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  id: "top" + index,
                  key: index,
                  class: vue.normalizeClass(GetTopBarClass(index)),
                  onClick: ($event) => ChangeTopBar(index)
                }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(item.name), 1)
                ], 10, ["id", "onClick"]);
              }), 128))
            ], 8, ["scroll-into-view"]),
            vue.createElementVNode("swiper", {
              onChange: SwiperChange,
              current: currentTopBar.value,
              style: vue.normalizeStyle("height:" + swiperHeight.value + "px;")
            }, [
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { id: "swiper0" }, [
                  vue.createVNode(IndexSwiper, { list: swiperList.value }, null, 8, ["list"]),
                  vue.createVNode(Recommend, { list: recommendList.value }, null, 8, ["list"]),
                  vue.createVNode(GuessYou, { title: "\u731C\u4F60\u559C\u6B22" }),
                  vue.createVNode(ProductList, {
                    list: productList.value,
                    lineItemNum: 2
                  }, null, 8, ["list"]),
                  vue.createVNode(UniSection, { type: "line" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(UniLoadMore, {
                        iconType: "circle",
                        status: pullUpStatus.value
                      }, null, 8, ["status"])
                    ]),
                    _: 1
                  })
                ])
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { id: "swiper1" }, [
                  vue.createVNode(Banner),
                  vue.createVNode(Icons, { list: iconsList.value }, null, 8, ["list"]),
                  vue.createVNode(Brands),
                  vue.createVNode(HotSale, { list: hotSaleList.value }, null, 8, ["list"]),
                  vue.createVNode(Store, { list: storeProductList.value }, null, 8, ["list"]),
                  vue.createVNode(UniSection, { type: "line" }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(UniLoadMore, {
                        iconType: "circle",
                        status: pullUpStatus.value
                      }, null, 8, ["status"])
                    ]),
                    _: 1
                  })
                ])
              ]),
              vue.createElementVNode("swiper-item", null, "1"),
              vue.createElementVNode("swiper-item", null, "2"),
              vue.createElementVNode("swiper-item", null, "3")
            ], 44, ["current"])
          ])
        ]);
      };
    }
  });
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-57280228"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/index/index.vue"]]);
  const _sfc_main$n = /* @__PURE__ */ vue.defineComponent({
    __name: "class",
    setup(__props) {
      const boxHeight = vue.ref();
      const currentLeftIndex = vue.ref(0);
      const allList = vue.ref([]);
      const GetBoxHeight = () => {
        const systemHeight = uni.getSystemInfoSync().windowHeight;
        boxHeight.value = systemHeight - 12;
      };
      const information = vue.reactive({
        command: "class/0",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 5,
            content: ""
          }
        },
        uniReq: uni.request
      });
      const GetElementHeight = (selector, id, delay = 0) => {
        setTimeout(function() {
          const ID = id ? id : "";
          let view = uni.createSelectorQuery().selectAll(selector + ID);
          view.boundingClientRect((data) => {
            if (!data)
              return;
            let itemHeightList = [];
            for (let item of data) {
              itemHeightList.push(item.height);
            }
            return itemHeightList;
          }).exec();
        }, delay);
      };
      const ChangeBlock = (event) => {
        currentLeftIndex.value = event.detail.current;
      };
      const SelectLeftItem = (index) => {
        currentLeftIndex.value = index;
      };
      const GetLeftClass = (index) => {
        return index === currentLeftIndex.value ? "left-name-active" : "";
      };
      onLoad(() => {
        GetBoxHeight();
        new UniReqs(information, (data) => {
          allList.value = data;
        });
        GetElementHeight(".list-right-block");
      });
      onNavigationBarSearchInputClicked(() => {
        uni.navigateTo({
          url: "../search/search"
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "line" }),
          vue.createElementVNode("view", { class: "list" }, [
            vue.createElementVNode("scroll-view", {
              "scroll-y": "true",
              class: "list-left",
              style: vue.normalizeStyle("height:" + boxHeight.value + "px;")
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(allList.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index,
                  class: "left-item"
                }, [
                  vue.createElementVNode("view", {
                    class: vue.normalizeClass(["left-name", GetLeftClass(index)]),
                    onClick: ($event) => SelectLeftItem(index)
                  }, vue.toDisplayString(item.title), 11, ["onClick"])
                ]);
              }), 128))
            ], 4),
            vue.createElementVNode("scroll-view", {
              "scroll-y": "true",
              class: "list-right",
              style: vue.normalizeStyle("height:" + boxHeight.value + "px;")
            }, [
              vue.createElementVNode("swiper", {
                vertical: true,
                style: vue.normalizeStyle("height:" + boxHeight.value + "px;"),
                onChange: ChangeBlock,
                current: currentLeftIndex.value
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(allList.value, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                    vue.createElementVNode("view", { class: "list-right-block" }, [
                      vue.createElementVNode("view", { class: "list-right-block-title" }, vue.toDisplayString(item.title), 1),
                      vue.createElementVNode("view", { class: "list-right-block-content" }, [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.list, (item2, index2) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "list-right-block-item",
                            key: index2
                          }, [
                            vue.createElementVNode("image", {
                              class: "list-right-block-item-img",
                              src: item2.imgUrl,
                              mode: ""
                            }, null, 8, ["src"]),
                            vue.createElementVNode("view", { class: "list-right-block-item-name" }, vue.toDisplayString(item2.name), 1)
                          ]);
                        }), 128))
                      ])
                    ])
                  ]);
                }), 128))
              ], 44, ["current"])
            ], 4)
          ]),
          vue.createElementVNode("view", { id: "ddd" })
        ], 64);
      };
    }
  });
  var PagesClassClass = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-465fb490"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/class/class.vue"]]);
  const _sfc_main$m = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: 20
      };
    },
    mounted() {
      this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight + "px";
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle({ height: $data.statusBarHeight }),
      class: "uni-status-bar"
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$4], ["__scopeId", "data-v-f9a87a8e"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$l = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }])
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
        style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight }),
          class: "uni-navbar__header"
        }, [
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-left",
            style: vue.normalizeStyle({ width: $options.leftIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__content_view"
              }, [
                vue.createElementVNode("uni-icons", {
                  color: $options.themeColor,
                  type: $props.leftIcon,
                  size: "20"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.leftText.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
              }, [
                vue.createElementVNode("text", {
                  style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "26rpx" })
                }, vue.toDisplayString($props.leftText), 5)
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4),
          vue.createElementVNode("view", {
            class: "uni-navbar__header-container",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-navbar__header-container-inner"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-text uni-ellipsis-1",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.title), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
            class: "uni-navbar__header-btns uni-navbar__header-btns-right",
            style: vue.normalizeStyle({ width: $options.rightIconWidth })
          }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createElementVNode("uni-icons", {
                  color: $options.themeColor,
                  type: $props.rightIcon,
                  size: "22"
                }, null, 8, ["color", "type"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "uni-navbar-btn-text"
              }, [
                vue.createElementVNode("text", {
                  class: "uni-nav-bar-right-text",
                  style: vue.normalizeStyle({ color: $options.themeColor })
                }, vue.toDisplayString($props.rightText), 5)
              ])) : vue.createCommentVNode("v-if", true)
            ], true)
          ], 4)
        ], 4)
      ], 6),
      $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-navbar__placeholder"
      }, [
        $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "uni-navbar__placeholder-view",
          style: vue.normalizeStyle({ height: $options.navbarHeight })
        }, null, 4)
      ])) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var uniNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$3], ["__scopeId", "data-v-6bda1a90"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  const _sfc_main$k = {
    name: "UniNumberBox",
    emits: ["change", "input", "update:modelValue", "blur", "focus"],
    props: {
      value: {
        type: [Number, String],
        default: 1
      },
      modelValue: {
        type: [Number, String],
        default: 1
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      background: {
        type: String,
        default: "#f5f5f5"
      },
      color: {
        type: String,
        default: "#333"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        inputValue: 0
      };
    },
    watch: {
      value(val) {
        this.inputValue = +val;
      },
      modelValue(val) {
        this.inputValue = +val;
      }
    },
    created() {
      if (this.value === 1) {
        this.inputValue = +this.modelValue;
      }
      if (this.modelValue === 1) {
        this.inputValue = +this.value;
      }
    },
    methods: {
      _calcValue(type) {
        if (this.disabled) {
          return;
        }
        const scale = this._getDecimalScale();
        let value = this.inputValue * scale;
        let step = this.step * scale;
        if (type === "minus") {
          value -= step;
          if (value < this.min * scale) {
            return;
          }
          if (value > this.max * scale) {
            value = this.max * scale;
          }
        }
        if (type === "plus") {
          value += step;
          if (value > this.max * scale) {
            return;
          }
          if (value < this.min * scale) {
            value = this.min * scale;
          }
        }
        this.inputValue = (value / scale).toFixed(String(scale).length - 1);
        this.$emit("change", +this.inputValue);
        this.$emit("input", +this.inputValue);
        this.$emit("update:modelValue", +this.inputValue);
      },
      _getDecimalScale() {
        let scale = 1;
        if (~~this.step !== this.step) {
          scale = Math.pow(10, String(this.step).split(".")[1].length);
        }
        return scale;
      },
      _onBlur(event) {
        this.$emit("blur", event);
        let value = event.detail.value;
        if (!value) {
          return;
        }
        value = +value;
        if (value > this.max) {
          value = this.max;
        } else if (value < this.min) {
          value = this.min;
        }
        const scale = this._getDecimalScale();
        this.inputValue = value.toFixed(String(scale).length - 1);
        this.$emit("change", +this.inputValue);
        this.$emit("input", +this.inputValue);
      },
      _onFocus(event) {
        this.$emit("focus", event);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-numbox" }, [
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = ($event) => $options._calcValue("minus")),
        class: "uni-numbox__minus uni-numbox-btns",
        style: vue.normalizeStyle({ background: $props.background })
      }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue <= $props.min || $props.disabled }]),
          style: vue.normalizeStyle({ color: $props.color })
        }, "-", 6)
      ], 4),
      vue.withDirectives(vue.createElementVNode("input", {
        disabled: $props.disabled,
        onFocus: _cache[1] || (_cache[1] = (...args) => $options._onFocus && $options._onFocus(...args)),
        onBlur: _cache[2] || (_cache[2] = (...args) => $options._onBlur && $options._onBlur(...args)),
        class: "uni-numbox__value",
        type: "number",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputValue = $event),
        style: vue.normalizeStyle({ background: $props.background, color: $props.color })
      }, null, 44, ["disabled"]), [
        [vue.vModelText, $data.inputValue]
      ]),
      vue.createElementVNode("view", {
        onClick: _cache[4] || (_cache[4] = ($event) => $options._calcValue("plus")),
        class: "uni-numbox__plus uni-numbox-btns",
        style: vue.normalizeStyle({ background: $props.background })
      }, [
        vue.createElementVNode("text", {
          class: vue.normalizeClass(["uni-numbox--text", { "uni-numbox--disabled": $data.inputValue >= $props.max || $props.disabled }]),
          style: vue.normalizeStyle({ color: $props.color })
        }, "+", 6)
      ], 4)
    ]);
  }
  var uniNumberBox = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$2], ["__scopeId", "data-v-dd94a2a8"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue"]]);
  const useCartStore = defineStore("cart", {
    state: () => {
      return {
        modify: false,
        selectList: [],
        shopList: []
      };
    },
    getters: {
      IsSelectAll(state) {
        return state.selectList.length === state.shopList.length ? true : false;
      },
      Total(state) {
        let totalPrice = 0;
        let totalNum = 0;
        state.shopList.forEach((item) => {
          if (state.selectList.indexOf(item.id) !== -1) {
            totalPrice += item.presentPrice * item.num;
            totalNum++;
          }
        });
        return {
          totalPrice,
          totalNum
        };
      }
    },
    actions: {
      SelectAll() {
        this.selectList = this.shopList.map((item) => {
          item.checked = true;
          return item.id;
        });
      },
      UnselectAll() {
        this.selectList = [];
        this.shopList.forEach((item) => {
          item.checked = false;
        });
      },
      SelectOne(id, index) {
        this.selectList.push(id);
        this.shopList[index].checked = true;
      },
      UnselectOne(id, index) {
        this.selectList.splice(this.selectList.indexOf(id), 1);
        this.shopList[index].checked = false;
      }
    }
  });
  const useOrderStore = defineStore("order", {
    state: () => {
      return {
        orderNumber: "",
        orderInfo: {}
      };
    },
    getters: {},
    actions: {}
  });
  const _sfc_main$j = /* @__PURE__ */ vue.defineComponent({
    __name: "shopping",
    setup(__props) {
      const orderStore = useOrderStore();
      const { orderNumber } = storeToRefs(orderStore);
      const userStore = useUserStore();
      const { loginStatus } = storeToRefs(userStore);
      const { userInfo } = userStore;
      const rightText = vue.ref("\u7F16\u8F91");
      const isEdit = vue.ref(false);
      const cartStore = useCartStore();
      const { shopList, IsSelectAll, Total, modify, selectList } = storeToRefs(cartStore);
      const information = vue.reactive({
        command: "cart",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 9999,
            content: userInfo["id"],
            column: "userId"
          }
        },
        uniReq: uni.request
      });
      const ChangeStatus = () => {
        rightText.value = rightText.value === "\u7F16\u8F91" ? "\u5B8C\u6210" : "\u7F16\u8F91";
        isEdit.value = rightText.value === "\u7F16\u8F91" ? false : true;
        if (modify.value) {
          uni.showToast({
            title: "\u4FEE\u6539\u6210\u529F",
            icon: "none"
          });
          modify.value = false;
        }
      };
      const ChangeSelect = (item, index) => {
        if (item.checked) {
          cartStore.UnselectOne(item.id, index);
        } else {
          cartStore.SelectOne(item.id, index);
        }
      };
      const ChangeNumber = (value, index) => {
        information.data.operation = "edit";
        information.data["updateInfo"] = {
          id: shopList.value[index].id,
          num: value
        };
        new UniReqs(information);
        shopList.value[index].num = value;
        modify.value = true;
      };
      const ChangeSelectAll = () => {
        if (IsSelectAll.value) {
          cartStore.UnselectAll();
        } else {
          cartStore.SelectAll();
        }
      };
      const GoConfirmOrder = () => {
        if (selectList.value.length) {
          const orderInfo = shopList.value.filter((item) => {
            return selectList.value.indexOf(item.id) !== -1;
          });
          information.command = "order";
          information.data.operation = "add";
          information.data["orderInfo"] = orderInfo;
          information.data["totalPrice"] = Total.value.totalPrice + 888;
          new UniReqs(information, (data) => {
            if (data.success) {
              orderNumber.value = data.orderInfo[0].orderNumber;
              orderStore.orderInfo = data.orderInfo[0];
              uni.navigateTo({
                url: "/pages/confirm-order/confirm-order?selectList=" + JSON.stringify(selectList.value)
              });
            }
          });
        } else {
          uni.showToast({
            title: "\u8BF7\u9009\u62E9\u5546\u54C1",
            icon: "none"
          });
        }
      };
      const GoLogin = () => {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      };
      const DeleteSelect = () => {
        if (selectList.value.length === 0) {
          uni.showToast({
            title: "\u65E0\u52FE\u9009\u5185\u5BB9",
            icon: "none"
          });
          return;
        }
        information.data.operation = "delete";
        information.data["itemsId"] = selectList.value;
        new UniReqs(information);
        shopList.value = shopList.value.filter((item) => {
          return selectList.value.indexOf(item.id) === -1;
        });
        selectList.value = [];
        uni.showToast({
          title: "\u5220\u9664\u6210\u529F",
          icon: "none"
        });
      };
      onTabItemTap(() => {
        if (isEdit.value) {
          ChangeStatus();
        }
        if (!loginStatus.value) {
          GoLogin();
          uni.showToast({
            title: "\u8BF7\u5148\u767B\u5F55",
            icon: "none"
          });
        }
      });
      onLoad(() => {
        new UniReqs(information, (data) => {
          shopList.value = data.shopList;
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "white-block" }),
          vue.unref(shopList).length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createElementVNode("view", { class: "shop-cart" }, [
              vue.createVNode(uniNavBar, {
                title: "\u8D2D\u7269\u8F66",
                rightText: rightText.value,
                fixed: "true",
                statusBar: "true",
                onClickRight: ChangeStatus
              }, null, 8, ["rightText"])
            ]),
            vue.createElementVNode("view", { class: "shop-list" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(shopList), (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "shop-item",
                  key: index
                }, [
                  vue.createElementVNode("label", { class: "radio" }, [
                    vue.createElementVNode("radio", {
                      color: "#FF6F91",
                      checked: item.checked,
                      onClick: ($event) => ChangeSelect(item, index)
                    }, null, 8, ["checked", "onClick"])
                  ]),
                  vue.createElementVNode("image", {
                    class: "shop-img",
                    src: item.imgUrl,
                    mode: ""
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "shop-item-content" }, [
                    vue.createElementVNode("view", { class: "item-info" }, vue.toDisplayString(item.name), 1),
                    vue.createElementVNode("view", { class: "item-color" }, vue.toDisplayString(item.color), 1),
                    vue.createElementVNode("view", { class: "item-pn" }, [
                      vue.createElementVNode("view", { class: "item-price" }, "\uFFE5" + vue.toDisplayString(item.presentPrice), 1),
                      !isEdit.value ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "item-num"
                      }, "*" + vue.toDisplayString(item.num), 1)) : (vue.openBlock(), vue.createBlock(uniNumberBox, {
                        key: 1,
                        value: item.num,
                        min: 1,
                        onChange: ($event) => ChangeNumber($event, index)
                      }, null, 8, ["value", "onChange"]))
                    ])
                  ])
                ]);
              }), 128))
            ]),
            vue.createElementVNode("view", { class: "shop-foot" }, [
              vue.createElementVNode("label", { class: "radio" }, [
                vue.createElementVNode("radio", {
                  value: "",
                  color: "#FF6F91",
                  checked: vue.unref(IsSelectAll),
                  onClick: ChangeSelectAll
                }, null, 8, ["checked"]),
                vue.createElementVNode("text", null, "\u5168\u9009")
              ]),
              !isEdit.value ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "shop-total"
              }, [
                vue.createElementVNode("view", { class: "" }, [
                  vue.createElementVNode("view", { class: "total-price" }, [
                    vue.createTextVNode(" \u5408\u8BA1: "),
                    vue.createElementVNode("view", { class: "f-active-color detail-price" }, [
                      vue.createTextVNode(" \uFFE5 "),
                      vue.createElementVNode("view", null, vue.toDisplayString(vue.unref(Total).totalPrice), 1)
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "no-freight" }, "\u4E0D\u542B\u8FD0\u8D39")
                ]),
                vue.createElementVNode("view", {
                  class: "balance",
                  onClick: GoConfirmOrder
                }, [
                  vue.createElementVNode("view", null, "\u7ED3\u7B97(" + vue.toDisplayString(vue.unref(Total).totalNum) + ")", 1)
                ])
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "shop-total"
              }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("view", { class: "move-fav" }, "\u79FB\u5165\u6536\u85CF\u5939")
                ]),
                vue.createElementVNode("view", { class: "balance" }, [
                  vue.createElementVNode("view", { onClick: DeleteSelect }, "\u5220\u9664")
                ])
              ]))
            ])
          ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
            vue.createElementVNode("view", { class: "shop-cart" }, [
              vue.createVNode(uniNavBar, {
                title: "\u8D2D\u7269\u8F66",
                statusBar: "true",
                fixed: "true"
              })
            ]),
            vue.createElementVNode("view", { class: "shop-else-list" }, [
              vue.createElementVNode("image", {
                src: "/static//img/emptyCart.jpg",
                mode: ""
              }),
              vue.createElementVNode("text", null, "\u56E7~\u8D2D\u7269\u8F66\u8FD8\u662F\u7A7A\u7684...")
            ])
          ], 64))
        ], 64);
      };
    }
  });
  var PagesShoppingShopping = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-24f06b86"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/shopping/shopping.vue"]]);
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    __name: "my",
    setup(__props) {
      const userStore = useUserStore();
      const { loginStatus, userInfo, token } = storeToRefs(userStore);
      const GoConfig = () => {
        uni.navigateTo({
          url: "/pages/config/config"
        });
      };
      const GoMyOrder = () => {
        if (!loginStatus.value) {
          uni.navigateTo({
            url: "/pages/login/login"
          });
          uni.showToast({
            title: "\u8BF7\u5148\u767B\u5F55",
            icon: "none"
          });
          return;
        }
        uni.navigateTo({
          url: "/pages/my-order/my-order"
        });
      };
      const GoLogin = () => {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      };
      onTabItemTap(() => {
        if (!loginStatus.value) {
          GoLogin();
          uni.showToast({
            title: "\u8BF7\u5148\u767B\u5F55",
            icon: "none"
          });
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "my" }, [
          vue.createCommentVNode("\u5934\u90E8"),
          vue.createElementVNode("view", { class: "my-header" }, [
            vue.createElementVNode("view", { class: "header-main" }, [
              vue.createElementVNode("view", {
                class: "header-config",
                onClick: GoConfig
              }, [
                vue.createElementVNode("image", {
                  class: "config-img",
                  src: "/static/img/config.png",
                  mode: ""
                })
              ]),
              vue.createElementVNode("view", { class: "header-logo" }, [
                vue.createElementVNode("image", {
                  class: "logo-img",
                  src: vue.unref(userInfo).imgUrl,
                  mode: "",
                  onClick: GoLogin
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "logo-name" }, vue.toDisplayString(vue.unref(userInfo).nickName), 1)
              ])
            ])
          ]),
          vue.createCommentVNode("\u6211\u7684\u8BA2\u5355"),
          vue.createElementVNode("view", { class: "order" }, [
            vue.createElementVNode("view", { class: "order-title" }, [
              vue.createElementVNode("view", null, "\u6211\u7684\u8BA2\u5355"),
              vue.createElementVNode("view", {
                class: "all-orders",
                onClick: GoMyOrder
              }, [
                vue.createTextVNode(" \u5168\u90E8\u8BA2\u5355 "),
                vue.createElementVNode("view", { class: "iconfont icon-arrow-right" })
              ])
            ]),
            vue.createElementVNode("view", { class: "order-list" }, [
              vue.createElementVNode("view", { class: "order-item" }, [
                vue.createElementVNode("image", {
                  class: "order-img",
                  src: "/static/img/order1.png",
                  mode: ""
                }),
                vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
              ]),
              vue.createElementVNode("view", { class: "order-item" }, [
                vue.createElementVNode("image", {
                  class: "order-img",
                  src: "/static/img/order2.png",
                  mode: ""
                }),
                vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
              ]),
              vue.createElementVNode("view", { class: "order-item" }, [
                vue.createElementVNode("image", {
                  class: "order-img",
                  src: "/static/img/order3.png",
                  mode: ""
                }),
                vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
              ]),
              vue.createElementVNode("view", { class: "order-item" }, [
                vue.createElementVNode("image", {
                  class: "order-img",
                  src: "/static/img/order4.png",
                  mode: ""
                }),
                vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
              ]),
              vue.createElementVNode("view", { class: "order-item" }, [
                vue.createElementVNode("image", {
                  class: "order-img",
                  src: "/static/img/order5.png",
                  mode: ""
                }),
                vue.createElementVNode("view", null, "\u5F85\u4ED8\u6B3E")
              ])
            ])
          ]),
          vue.createCommentVNode("\u5185\u5BB9\u5217\u8868"),
          vue.createElementVNode("view", { class: "my-content" }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (item, index) => {
              return vue.createElementVNode("view", {
                class: "my-content-item",
                key: index
              }, [
                vue.createElementVNode("view", null, "\u6211\u7684\u6536\u85CF"),
                vue.createElementVNode("view", { class: "iconfont icon-arrow-right" })
              ]);
            }), 64))
          ])
        ]);
      };
    }
  });
  var PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-0be17cc6"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/my/my.vue"]]);
  const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
    __name: "search",
    setup(__props) {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      const content = vue.ref("");
      const searchedContent = vue.ref([]);
      const hotSearched = vue.ref(["\u56DB\u4EF6\u5957", "\u9762\u819C", "\u5916\u5957", "\u6BDB\u7ED2\u73A9\u5076"]);
      vue.reactive({
        command: "index/search",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 5,
            content: ""
          }
        },
        uniReq: uni.request,
        renderInfo: []
      });
      const ToSearchResult = (item) => {
        uni.navigateTo({
          url: "../SearchResult/SearchResult?content=" + item
        });
      };
      const IsSearch = () => {
        if (!content.value)
          return uni.showToast({
            title: "\u5173\u952E\u8BCD\u4E0D\u80FD\u4E3A\u7A7A",
            icon: "none"
          });
        uni.navigateTo({
          url: "../SearchResult/SearchResult?content=" + content.value
        });
        AddSearched();
        uni.hideKeyboard();
        currentWebview.setTitleNViewSearchInputText("");
      };
      const AddSearched = () => {
        const sIndex = searchedContent.value.indexOf(content.value);
        if (sIndex === -1) {
          searchedContent.value.unshift(content.value);
        } else {
          searchedContent.value.unshift(searchedContent.value.splice(sIndex)[0]);
        }
        uni.setStorage({
          key: "searchedContent",
          data: JSON.stringify(searchedContent.value)
        });
      };
      const ClearSearched = () => {
        uni.showModal({
          title: "\u91CD\u8981\u63D0\u793A",
          content: "\u662F\u5426\u6E05\u9664\u641C\u7D22\u8BB0\u5F55",
          cancelText: "\u53D6\u6D88",
          confirmText: "\u786E\u5B9A",
          success: (data) => {
            if (data.confirm) {
              uni.removeStorage({
                key: "searchedContent",
                success: (data2) => {
                  searchedContent.value = [];
                }
              });
            }
          }
        });
      };
      onNavigationBarSearchInputChanged((e) => {
        content.value = e.text;
      });
      onNavigationBarSearchInputConfirmed((e) => {
        IsSearch();
      });
      onNavigationBarButtonTap((e) => {
        if (e.float === "right") {
          IsSearch();
        }
      });
      onLoad(() => {
        uni.getStorage({
          key: "searchedContent",
          success: ({ data }) => {
            searchedContent.value = JSON.parse(data);
          }
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "search" }, [
          vue.createElementVNode("view", { class: "line" }),
          vue.createElementVNode("view", { class: "search-item" }, [
            vue.createElementVNode("view", { class: "search-title" }, [
              vue.createElementVNode("view", null, "\u6700\u8FD1\u641C\u7D22"),
              vue.createElementVNode("view", {
                class: "iconfont icon-ashbin",
                onClick: ClearSearched
              })
            ]),
            vue.createElementVNode("view", { class: "search-content" }, [
              searchedContent.value.length ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(searchedContent.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "search-content-item",
                  key: index,
                  onClick: ($event) => ToSearchResult(item)
                }, vue.toDisplayString(item), 9, ["onClick"]);
              }), 128)) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "noSearched"
              }, " \u6682\u65E0\u641C\u7D22\u8BB0\u5F55 "))
            ])
          ]),
          vue.createElementVNode("view", { class: "search-item" }, [
            vue.createElementVNode("view", { class: "search-title" }, [
              vue.createElementVNode("view", null, "\u70ED\u95E8\u641C\u7D22"),
              vue.createElementVNode("view", { class: "iconfont" })
            ]),
            vue.createElementVNode("view", { class: "search-content" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(hotSearched.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "search-content-item",
                  key: index,
                  onClick: ($event) => ToSearchResult(item)
                }, vue.toDisplayString(item), 9, ["onClick"]);
              }), 128))
            ])
          ])
        ]);
      };
    }
  });
  var PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/search/search.vue"]]);
  const _sfc_main$g = /* @__PURE__ */ vue.defineComponent({
    __name: "SearchResult",
    setup(__props) {
      var pages2 = getCurrentPages();
      var page = pages2[pages2.length - 1];
      var currentWebview = page.$getAppWebview();
      const shopItem = vue.reactive({
        currentIndex: 0,
        currentSort: false,
        data: [
          { title: "\u4EF7\u683C" },
          { title: "\u6298\u6263" },
          { title: "\u54C1\u724C" }
        ]
      });
      const content = vue.ref("");
      const productList = vue.ref([]);
      const infomation = vue.reactive({
        command: "index/search",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 5,
            content: "",
            sort: {
              name: "presentPrice",
              method: "ascending"
            }
          }
        },
        uniReq: uni.request,
        renderInfo: [{
          name: "productList",
          renderList: productList
        }]
      });
      const ChangeTitle = (index) => {
        if (index !== shopItem.currentIndex) {
          shopItem.currentSort = false;
          shopItem.currentIndex = index;
          if (shopItem.currentIndex === 0) {
            infomation.data.queryInfo.sort.name = "presentPrice";
          }
          if (shopItem.currentIndex === 1) {
            infomation.data.queryInfo.sort.name = "discount";
          }
          if (shopItem.currentIndex === 2) {
            infomation.data.queryInfo.sort.name = "name";
          }
          infomation.data.queryInfo.sort.method = "ascending";
        } else {
          shopItem.currentSort = !shopItem.currentSort;
          if (shopItem.currentSort) {
            infomation.data.queryInfo.sort.method = "descending";
          } else {
            infomation.data.queryInfo.sort.method = "ascending";
          }
        }
        new UniReqs(infomation);
      };
      const GetShopTitleClass = (index, part) => {
        if (shopItem.currentIndex !== index) {
          return "";
        }
        if (part === "text") {
          return "f-active-color";
        }
        if (part === "up") {
          if (!shopItem.currentSort)
            return "f-active-color";
        }
        if (part === "down") {
          if (shopItem.currentSort)
            return "f-active-color";
        }
        return "";
      };
      const IsFilter = () => {
        if (!content.value)
          return uni.showToast({
            title: "\u5173\u952E\u8BCD\u4E0D\u80FD\u4E3A\u7A7A",
            icon: "none"
          });
        infomation.data.queryInfo.content = content.value;
        new UniReqs(infomation);
        uni.hideKeyboard();
      };
      onLoad((option) => {
        currentWebview.setTitleNViewSearchInputText(option.content);
        infomation.data.queryInfo.content = option.content;
        new UniReqs(infomation);
      });
      onNavigationBarSearchInputChanged((e) => {
        content.value = e.text;
      });
      onNavigationBarSearchInputConfirmed((e) => {
        IsFilter();
      });
      onNavigationBarButtonTap((e) => {
        if (e.float === "right") {
          IsFilter();
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "shop-list f-color" }, [
            vue.createElementVNode("view", { class: "shop-title" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(shopItem.data, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "shop-item",
                  key: index,
                  onClick: ($event) => ChangeTitle(index)
                }, [
                  vue.createElementVNode("text", {
                    class: vue.normalizeClass(GetShopTitleClass(index, "text"))
                  }, vue.toDisplayString(item.title), 3),
                  vue.createElementVNode("view", { class: "iconfont" }, [
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass(["icon-arrow-up", GetShopTitleClass(index, "up")])
                    }, null, 2),
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass(["icon-arrow-down", GetShopTitleClass(index, "down")])
                    }, null, 2)
                  ])
                ], 8, ["onClick"]);
              }), 128))
            ]),
            vue.createElementVNode("view", { class: "line" })
          ]),
          vue.createVNode(Product, { list: productList.value }, null, 8, ["list"])
        ], 64);
      };
    }
  });
  var PagesSearchResultSearchResult = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-b9c2cfb4"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/SearchResult/SearchResult.vue"]]);
  const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
    __name: "details",
    setup(__props) {
      const userStore = useUserStore();
      const { loginStatus } = storeToRefs(userStore);
      const { userInfo } = userStore;
      const cartStore = useCartStore();
      const { shopList } = storeToRefs(cartStore);
      const isShowPop = vue.ref(false);
      const boxAnimation = vue.ref("");
      const shopNum = vue.ref(1);
      const swiperList = vue.ref([{ imgUrl: "/static/img/detail1.jpg" }, { imgUrl: "/static/img/detail2.jpg" }, { imgUrl: "/static/img/detail3.jpg" }]);
      const productList = vue.ref([]);
      const goodContent = vue.ref([
        {
          id: 1,
          name: "",
          presentPrice: 0,
          originalPrice: 0,
          imgUrl: "",
          num: 1
        }
      ]);
      const information = vue.reactive({
        command: "goods",
        data: {
          commander: userInfo["nickName"],
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 9999,
            content: ""
          }
        },
        uniReq: uni.request
      });
      const ChangeNum = (value) => {
        shopNum.value = value;
        goodContent.value[0].num = value;
      };
      const GoShopCart = () => {
        uni.switchTab({
          url: "/pages/shopping/shopping"
        });
      };
      const ShowPop = () => {
        isShowPop.value = true;
        boxAnimation.value = "Upslide";
        goodContent.value[0].num = 1;
      };
      const HidePop = () => {
        boxAnimation.value = "UpslideBack";
        setTimeout(() => {
          isShowPop.value = false;
        }, 300);
      };
      const ConfirmAdd = (item) => {
        if (!loginStatus.value) {
          uni.navigateTo({
            url: "/pages/login/login"
          });
          uni.showToast({
            title: "\u8BF7\u5148\u767B\u5F55",
            icon: "none"
          });
          return;
        }
        information.command = "cart";
        information.data.operation = "add";
        information.data["updateInfo"] = item;
        information.data["userId"] = userInfo["id"];
        information.data["autoReq"] = true;
        information.data.queryInfo.content = userInfo["id"];
        information.data.queryInfo["column"] = "userId";
        new UniReqs(information, (data) => {
          shopList.value = data.shopList;
          uni.showToast({
            title: "\u6DFB\u52A0\u8D2D\u7269\u8F66\u6210\u529F",
            icon: "none"
          });
          HidePop();
        });
      };
      onLoad((e) => {
        information.data.queryInfo["id"] = e.id;
        new UniReqs(information, (data) => {
          goodContent.value = data;
        });
      });
      vue.onMounted(() => {
        information.command = "index/0";
        new UniReqs(information, (data) => {
          productList.value = data.productList;
        });
      });
      onBackPress(() => {
        if (isShowPop.value === true) {
          HidePop();
          return true;
        }
      });
      onNavigationBarButtonTap((e) => {
        if (e.type === "share") {
          uni.share({
            provider: "weixin",
            title: goodContent.value[0].name,
            scene: "WXSceneSession",
            href: "http://192.168.1.80:8080/#/pages/details/details?id=" + goodContent.value[0].id,
            imgUrl: goodContent.value[0].imgUrl,
            success: (res) => {
              uni.showTabBar({
                title: "\u5206\u4EAB\u6210\u529F"
              });
            }
          });
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "details" }, [
          vue.createElementVNode("swiper", {
            "indicator-dots": true,
            autoplay: true,
            interval: 3e3,
            duration: 1e3
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(swiperList.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                vue.createElementVNode("view", { class: "swiper-item" }, [
                  vue.createElementVNode("image", {
                    class: "details-img",
                    src: item.imgUrl,
                    mode: ""
                  }, null, 8, ["src"])
                ])
              ]);
            }), 128))
          ]),
          vue.createElementVNode("view", { class: "details-goods" }, [
            vue.createElementVNode("view", { class: "details-goods-pprice" }, "\uFFE5" + vue.toDisplayString(goodContent.value[0].presentPrice), 1),
            vue.createElementVNode("view", { class: "details-goods-oprice" }, "\uFFE5" + vue.toDisplayString(goodContent.value[0].originalPrice), 1),
            vue.createElementVNode("view", { class: "details-goods-name" }, vue.toDisplayString(goodContent.value[0].name), 1)
          ]),
          vue.createElementVNode("view", { class: "" }, [
            vue.createElementVNode("view", { class: "" }, [
              vue.createElementVNode("image", {
                class: "details-img",
                src: "/static/img/detail1.jpg",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "" }, [
              vue.createElementVNode("image", {
                class: "details-img",
                src: "/static/img/detail2.jpg",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "" }, [
              vue.createElementVNode("image", {
                class: "details-img",
                src: "/static/img/detail3.jpg",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "" }, [
              vue.createElementVNode("image", {
                class: "details-img",
                src: "/static/img/detail4.jpg",
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "" }, [
              vue.createElementVNode("image", {
                class: "details-img",
                src: "/static/img/detail5.jpg",
                mode: ""
              })
            ])
          ]),
          vue.createVNode(GuessYou, { title: "\u770B\u4E86\u53C8\u770B" }),
          vue.createVNode(ProductList, { list: productList.value }, null, 8, ["list"]),
          vue.createElementVNode("view", { class: "details-foot" }, [
            vue.createElementVNode("view", { class: "iconfont icon-more" }),
            vue.createElementVNode("view", {
              class: "iconfont icon-cart-Empty",
              onClick: GoShopCart
            }),
            vue.createElementVNode("view", {
              class: "add-shopcart",
              onClick: ShowPop
            }, "\u52A0\u5165\u8D2D\u7269\u8F66"),
            vue.createElementVNode("view", { class: "buy-now" }, "\u7ACB\u5373\u8D2D\u4E70")
          ]),
          vue.withDirectives(vue.createElementVNode("view", { class: "pop" }, [
            vue.createElementVNode("view", { class: "pop-mask" }),
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["pop-box", boxAnimation.value])
            }, [
              vue.createElementVNode("view", { class: "" }, [
                vue.createElementVNode("image", {
                  class: "pop-img",
                  src: goodContent.value[0].imgUrl,
                  mode: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "pop-num" }, [
                vue.createElementVNode("view", null, "\u8D2D\u4E70\u6570\u91CF"),
                vue.createVNode(uniNumberBox, {
                  min: 1,
                  value: shopNum.value,
                  onChange: ChangeNum
                }, null, 8, ["value"])
              ]),
              vue.createElementVNode("view", {
                class: "pop-confirm",
                onClick: _cache[0] || (_cache[0] = ($event) => ConfirmAdd(goodContent.value[0]))
              }, "\u786E\u5B9A"),
              vue.createElementVNode("view", {
                class: "pop-icon",
                onClick: HidePop
              }, "\xD7")
            ], 2)
          ], 512), [
            [vue.vShow, isShowPop.value]
          ])
        ]);
      };
    }
  });
  var PagesDetailsDetails = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-39cbb4e8"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/details/details.vue"]]);
  const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
    __name: "config",
    setup(__props) {
      const userStore = useUserStore();
      const { LoginOut, loginStatus } = userStore;
      const GoAddressManage = () => {
        if (!loginStatus) {
          uni.navigateTo({
            url: "/pages/login/login"
          });
          uni.showToast({
            title: "\u8BF7\u5148\u767B\u5F55",
            icon: "none"
          });
          return;
        }
        uni.navigateTo({
          url: "/pages/config-address/config-address"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "my-config" }, [
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(10, (item, index) => {
            return vue.createElementVNode("view", {
              class: "config-item",
              key: index,
              onClick: GoAddressManage
            }, [
              vue.createElementVNode("view", null, "\u5730\u5740\u7BA1\u7406"),
              vue.createElementVNode("view", { class: "config-mark iconfont icon-arrow-right" })
            ]);
          }), 64)),
          vue.createElementVNode("view", {
            class: "quit",
            onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(LoginOut) && vue.unref(LoginOut)(...args))
          }, "\u9000\u51FA")
        ]);
      };
    }
  });
  var PagesConfigConfig = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-11ea80f4"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/config/config.vue"]]);
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
    __name: "config-address",
    setup(__props) {
      const userStore = useUserStore();
      const { userInfo } = userStore;
      const addressStore = useAddressStore();
      const { addressList } = storeToRefs(addressStore);
      let from = "";
      const information = vue.reactive({
        command: "address",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 9999,
            content: userInfo["id"],
            column: "userId"
          }
        },
        uniReq: uni.request
      });
      let GoAddAddress = () => {
        uni.navigateTo({
          url: "/pages/add-address/add-address"
        });
      };
      const BackConfirmOrder = (item) => {
        uni.$emit("selectItem", item);
        uni.navigateBack();
      };
      const GoEditAddress = (index) => {
        if (from === "confirm-order") {
          BackConfirmOrder(addressList.value[index]);
          return;
        }
        const addressObj = JSON.stringify({
          index,
          item: addressList.value[index]
        });
        uni.navigateTo({
          url: "/pages/add-address/add-address?data=" + addressObj
        });
      };
      const InitAddress = () => {
        new UniReqs(information, (data) => {
          addressList.value = data.addressList;
        });
      };
      onLoad((e) => {
        if (e.from === "confirm-order") {
          from = e.from;
        }
        InitAddress();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "my-path-list" }, [
          vue.createElementVNode("view", { class: "path-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(addressList), (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "path-item",
                key: index,
                onClick: ($event) => GoEditAddress(index)
              }, [
                vue.createElementVNode("view", { class: "item-main" }, [
                  vue.createElementVNode("view", { class: "item-name" }, vue.toDisplayString(item.name), 1),
                  vue.createElementVNode("view", null, vue.toDisplayString(item.phone), 1)
                ]),
                vue.createElementVNode("view", { class: "item-main" }, [
                  vue.withDirectives(vue.createElementVNode("view", { class: "active" }, "\u9ED8\u8BA4", 512), [
                    [vue.vShow, item.isDefault]
                  ]),
                  vue.createElementVNode("view", { class: "item-details-address" }, vue.toDisplayString(item.city + " " + item.details), 1)
                ])
              ], 8, ["onClick"]);
            }), 128))
          ]),
          vue.createElementVNode("view", { class: "add-path" }, [
            vue.createElementVNode("view", {
              class: "add-path-btn",
              onClick: _cache[0] || (_cache[0] = (...args) => vue.unref(GoAddAddress) && vue.unref(GoAddAddress)(...args))
            }, "\u65B0\u589E\u5730\u5740")
          ])
        ]);
      };
    }
  });
  var PagesConfigAddressConfigAddress = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-adc07cb4"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/config-address/config-address.vue"]]);
  const pages = [
    {
      path: "pages/index/index",
      style: {
        navigationBarTitleText: "\u767E\u5E74\u5965\u83B1",
        navigationBarBackgroundColor: "#ffffff",
        enablePullDownRefresh: true,
        "app-plus": {
          titleNView: {
            backgroundColor: "#ffffff",
            buttons: [
              {
                float: "left",
                fontSrc: "static/iconfont.ttf",
                text: "\uE67D"
              },
              {
                float: "right",
                fontSrc: "static/iconfont.ttf",
                text: "\uE679"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/class/class",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#ffffff",
        "app-plus": {
          scrollIndicator: "none",
          titleNView: {
            type: "default",
            backgroundColor: "#ffffff",
            searchInput: {
              placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
              disabled: true,
              align: "left",
              borderRadius: "15px",
              backgroundColor: "#f7f7f7",
              placeholderColor: "#838383"
            }
          }
        }
      }
    },
    {
      path: "pages/shopping/shopping",
      style: {
        "app-plus": {
          titleNView: false
        }
      }
    },
    {
      path: "pages/my/my",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        "app-plus": {
          titleNView: false
        }
      }
    },
    {
      path: "pages/search/search",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#ffffff",
        "app-plus": {
          scrollIndicator: "none",
          titleNView: {
            backgroundColor: "#ffffff",
            searchInput: {
              placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
              disabled: false,
              align: "left",
              autoFocus: true,
              borderRadius: "15px",
              backgroundColor: "#f7f7f7",
              placeholderColor: "#838383"
            },
            buttons: [
              {
                float: "right",
                text: "\u641C\u7D22",
                fontSize: "16px",
                width: "50px",
                color: "#636263"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/SearchResult/SearchResult",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#ffffff",
        "app-plus": {
          scrollIndicator: "none",
          titleNView: {
            backgroundColor: "#ffffff",
            searchInput: {
              placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
              disabled: false,
              align: "left",
              autoFocus: true,
              borderRadius: "15px",
              backgroundColor: "#f7f7f7",
              placeholderColor: "#838383"
            },
            buttons: [
              {
                float: "right",
                text: "\u7B5B\u9009",
                fontSize: "16px",
                width: "50px",
                color: "#636263"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/details/details",
      style: {
        navigationBarTitleText: "\u5546\u54C1\u8BE6\u60C5",
        enablePullDownRefresh: false,
        "app-plus": {
          scrollIndicator: "none",
          titleNView: {
            type: "transparent",
            backgroundColor: "#ffffff",
            buttons: [
              {
                type: "menu"
              },
              {
                type: "share"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/config/config",
      style: {
        navigationBarTitleText: "\u8BBE\u7F6E",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/config-address/config-address",
      style: {
        navigationBarTitleText: "\u5730\u5740\u7BA1\u7406",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/add-address/add-address",
      style: {
        navigationBarTitleText: "\u6DFB\u52A0\u5730\u5740",
        enablePullDownRefresh: false,
        "app-plus": {
          scrollIndicator: "none",
          titleNView: {
            backgroundColor: "#ffffff",
            buttons: [
              {
                float: "right",
                text: "\u4FDD\u5B58",
                fontSize: "16px",
                width: "50px",
                color: "#636263"
              }
            ]
          }
        }
      }
    },
    {
      path: "pages/my-order/my-order",
      style: {
        navigationBarTitleText: "\u6211\u7684\u8BA2\u5355",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#ffffff"
      }
    },
    {
      path: "pages/confirm-order/confirm-order",
      style: {
        navigationBarTitleText: "\u786E\u8BA4\u8BA2\u5355",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/peyment/peyment",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false,
        "app-plus": {
          titleNView: false
        }
      }
    },
    {
      path: "pages/payment-success/payment-success",
      style: {
        navigationBarTitleText: "",
        enablePullDownRefresh: false
      }
    },
    {
      path: "pages/login/login",
      style: {
        navigationBarTitleText: "",
        "app-plus": {
          titleNView: false
        }
      }
    },
    {
      path: "pages/login-phone/login-phone",
      style: {
        navigationBarTitleText: "\u8F93\u5165\u624B\u673A\u53F7",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#ffffff"
      }
    },
    {
      path: "pages/verification-code/verification-code",
      style: {
        navigationBarTitleText: "\u8F93\u5165\u9A8C\u8BC1\u7801",
        enablePullDownRefresh: false,
        navigationBarBackgroundColor: "#ffffff"
      }
    }
  ];
  const globalStyle = {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#F8F8F8",
    backgroundColor: "#F8F8F8"
  };
  const uniIdRouter = {};
  const tabBar = {
    color: "#7A7E83",
    selectedColor: "#000",
    borderStyle: "black",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        iconPath: "static/tabbar/home.png",
        selectedIconPath: "static/tabbar/homing.png",
        text: "\u9996\u9875"
      },
      {
        pagePath: "pages/class/class",
        iconPath: "static/tabbar/class.png",
        selectedIconPath: "static/tabbar/classing.png",
        text: "\u5206\u7C7B"
      },
      {
        pagePath: "pages/shopping/shopping",
        iconPath: "static/tabbar/shop.png",
        selectedIconPath: "static/tabbar/shopping.png",
        text: "\u8D2D\u7269\u8F66"
      },
      {
        pagePath: "pages/my/my",
        iconPath: "static/tabbar/my.png",
        selectedIconPath: "static/tabbar/mying.png",
        text: "\u6211\u7684"
      }
    ]
  };
  var t = {
    pages,
    globalStyle,
    uniIdRouter,
    tabBar
  };
  function n(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  function s(e, t2, n2) {
    return e(n2 = { path: t2, exports: {}, require: function(e2, t3) {
      return function() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(t3 == null && n2.path);
    } }, n2.exports), n2.exports;
  }
  var o = s(function(e, t2) {
    var n2;
    e.exports = (n2 = n2 || function(e2, t3) {
      var n3 = Object.create || function() {
        function e3() {
        }
        return function(t4) {
          var n4;
          return e3.prototype = t4, n4 = new e3(), e3.prototype = null, n4;
        };
      }(), s2 = {}, o2 = s2.lib = {}, r2 = o2.Base = { extend: function(e3) {
        var t4 = n3(this);
        return e3 && t4.mixIn(e3), t4.hasOwnProperty("init") && this.init !== t4.init || (t4.init = function() {
          t4.$super.init.apply(this, arguments);
        }), t4.init.prototype = t4, t4.$super = this, t4;
      }, create: function() {
        var e3 = this.extend();
        return e3.init.apply(e3, arguments), e3;
      }, init: function() {
      }, mixIn: function(e3) {
        for (var t4 in e3)
          e3.hasOwnProperty(t4) && (this[t4] = e3[t4]);
        e3.hasOwnProperty("toString") && (this.toString = e3.toString);
      }, clone: function() {
        return this.init.prototype.extend(this);
      } }, i2 = o2.WordArray = r2.extend({ init: function(e3, n4) {
        e3 = this.words = e3 || [], this.sigBytes = n4 != t3 ? n4 : 4 * e3.length;
      }, toString: function(e3) {
        return (e3 || c2).stringify(this);
      }, concat: function(e3) {
        var t4 = this.words, n4 = e3.words, s3 = this.sigBytes, o3 = e3.sigBytes;
        if (this.clamp(), s3 % 4)
          for (var r3 = 0; r3 < o3; r3++) {
            var i3 = n4[r3 >>> 2] >>> 24 - r3 % 4 * 8 & 255;
            t4[s3 + r3 >>> 2] |= i3 << 24 - (s3 + r3) % 4 * 8;
          }
        else
          for (r3 = 0; r3 < o3; r3 += 4)
            t4[s3 + r3 >>> 2] = n4[r3 >>> 2];
        return this.sigBytes += o3, this;
      }, clamp: function() {
        var t4 = this.words, n4 = this.sigBytes;
        t4[n4 >>> 2] &= 4294967295 << 32 - n4 % 4 * 8, t4.length = e2.ceil(n4 / 4);
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3.words = this.words.slice(0), e3;
      }, random: function(t4) {
        for (var n4, s3 = [], o3 = function(t5) {
          t5 = t5;
          var n5 = 987654321, s4 = 4294967295;
          return function() {
            var o4 = ((n5 = 36969 * (65535 & n5) + (n5 >> 16) & s4) << 16) + (t5 = 18e3 * (65535 & t5) + (t5 >> 16) & s4) & s4;
            return o4 /= 4294967296, (o4 += 0.5) * (e2.random() > 0.5 ? 1 : -1);
          };
        }, r3 = 0; r3 < t4; r3 += 4) {
          var a3 = o3(4294967296 * (n4 || e2.random()));
          n4 = 987654071 * a3(), s3.push(4294967296 * a3() | 0);
        }
        return new i2.init(s3, t4);
      } }), a2 = s2.enc = {}, c2 = a2.Hex = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push((r3 >>> 4).toString(16)), s3.push((15 & r3).toString(16));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3 += 2)
          n4[s3 >>> 3] |= parseInt(e3.substr(s3, 2), 16) << 24 - s3 % 8 * 4;
        return new i2.init(n4, t4 / 2);
      } }, u2 = a2.Latin1 = { stringify: function(e3) {
        for (var t4 = e3.words, n4 = e3.sigBytes, s3 = [], o3 = 0; o3 < n4; o3++) {
          var r3 = t4[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
          s3.push(String.fromCharCode(r3));
        }
        return s3.join("");
      }, parse: function(e3) {
        for (var t4 = e3.length, n4 = [], s3 = 0; s3 < t4; s3++)
          n4[s3 >>> 2] |= (255 & e3.charCodeAt(s3)) << 24 - s3 % 4 * 8;
        return new i2.init(n4, t4);
      } }, l2 = a2.Utf8 = { stringify: function(e3) {
        try {
          return decodeURIComponent(escape(u2.stringify(e3)));
        } catch (e4) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse: function(e3) {
        return u2.parse(unescape(encodeURIComponent(e3)));
      } }, h2 = o2.BufferedBlockAlgorithm = r2.extend({ reset: function() {
        this._data = new i2.init(), this._nDataBytes = 0;
      }, _append: function(e3) {
        typeof e3 == "string" && (e3 = l2.parse(e3)), this._data.concat(e3), this._nDataBytes += e3.sigBytes;
      }, _process: function(t4) {
        var n4 = this._data, s3 = n4.words, o3 = n4.sigBytes, r3 = this.blockSize, a3 = o3 / (4 * r3), c3 = (a3 = t4 ? e2.ceil(a3) : e2.max((0 | a3) - this._minBufferSize, 0)) * r3, u3 = e2.min(4 * c3, o3);
        if (c3) {
          for (var l3 = 0; l3 < c3; l3 += r3)
            this._doProcessBlock(s3, l3);
          var h3 = s3.splice(0, c3);
          n4.sigBytes -= u3;
        }
        return new i2.init(h3, u3);
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3._data = this._data.clone(), e3;
      }, _minBufferSize: 0 });
      o2.Hasher = h2.extend({ cfg: r2.extend(), init: function(e3) {
        this.cfg = this.cfg.extend(e3), this.reset();
      }, reset: function() {
        h2.reset.call(this), this._doReset();
      }, update: function(e3) {
        return this._append(e3), this._process(), this;
      }, finalize: function(e3) {
        return e3 && this._append(e3), this._doFinalize();
      }, blockSize: 16, _createHelper: function(e3) {
        return function(t4, n4) {
          return new e3.init(n4).finalize(t4);
        };
      }, _createHmacHelper: function(e3) {
        return function(t4, n4) {
          return new d2.HMAC.init(e3, n4).finalize(t4);
        };
      } });
      var d2 = s2.algo = {};
      return s2;
    }(Math), n2);
  }), r = (s(function(e, t2) {
    var n2;
    e.exports = (n2 = o, function(e2) {
      var t3 = n2, s2 = t3.lib, o2 = s2.WordArray, r2 = s2.Hasher, i2 = t3.algo, a2 = [];
      !function() {
        for (var t4 = 0; t4 < 64; t4++)
          a2[t4] = 4294967296 * e2.abs(e2.sin(t4 + 1)) | 0;
      }();
      var c2 = i2.MD5 = r2.extend({ _doReset: function() {
        this._hash = new o2.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock: function(e3, t4) {
        for (var n3 = 0; n3 < 16; n3++) {
          var s3 = t4 + n3, o3 = e3[s3];
          e3[s3] = 16711935 & (o3 << 8 | o3 >>> 24) | 4278255360 & (o3 << 24 | o3 >>> 8);
        }
        var r3 = this._hash.words, i3 = e3[t4 + 0], c3 = e3[t4 + 1], f2 = e3[t4 + 2], g2 = e3[t4 + 3], p2 = e3[t4 + 4], m2 = e3[t4 + 5], y = e3[t4 + 6], _2 = e3[t4 + 7], w2 = e3[t4 + 8], k2 = e3[t4 + 9], v2 = e3[t4 + 10], T2 = e3[t4 + 11], S2 = e3[t4 + 12], P2 = e3[t4 + 13], A2 = e3[t4 + 14], I2 = e3[t4 + 15], b2 = r3[0], O2 = r3[1], C2 = r3[2], E2 = r3[3];
        b2 = u2(b2, O2, C2, E2, i3, 7, a2[0]), E2 = u2(E2, b2, O2, C2, c3, 12, a2[1]), C2 = u2(C2, E2, b2, O2, f2, 17, a2[2]), O2 = u2(O2, C2, E2, b2, g2, 22, a2[3]), b2 = u2(b2, O2, C2, E2, p2, 7, a2[4]), E2 = u2(E2, b2, O2, C2, m2, 12, a2[5]), C2 = u2(C2, E2, b2, O2, y, 17, a2[6]), O2 = u2(O2, C2, E2, b2, _2, 22, a2[7]), b2 = u2(b2, O2, C2, E2, w2, 7, a2[8]), E2 = u2(E2, b2, O2, C2, k2, 12, a2[9]), C2 = u2(C2, E2, b2, O2, v2, 17, a2[10]), O2 = u2(O2, C2, E2, b2, T2, 22, a2[11]), b2 = u2(b2, O2, C2, E2, S2, 7, a2[12]), E2 = u2(E2, b2, O2, C2, P2, 12, a2[13]), C2 = u2(C2, E2, b2, O2, A2, 17, a2[14]), b2 = l2(b2, O2 = u2(O2, C2, E2, b2, I2, 22, a2[15]), C2, E2, c3, 5, a2[16]), E2 = l2(E2, b2, O2, C2, y, 9, a2[17]), C2 = l2(C2, E2, b2, O2, T2, 14, a2[18]), O2 = l2(O2, C2, E2, b2, i3, 20, a2[19]), b2 = l2(b2, O2, C2, E2, m2, 5, a2[20]), E2 = l2(E2, b2, O2, C2, v2, 9, a2[21]), C2 = l2(C2, E2, b2, O2, I2, 14, a2[22]), O2 = l2(O2, C2, E2, b2, p2, 20, a2[23]), b2 = l2(b2, O2, C2, E2, k2, 5, a2[24]), E2 = l2(E2, b2, O2, C2, A2, 9, a2[25]), C2 = l2(C2, E2, b2, O2, g2, 14, a2[26]), O2 = l2(O2, C2, E2, b2, w2, 20, a2[27]), b2 = l2(b2, O2, C2, E2, P2, 5, a2[28]), E2 = l2(E2, b2, O2, C2, f2, 9, a2[29]), C2 = l2(C2, E2, b2, O2, _2, 14, a2[30]), b2 = h2(b2, O2 = l2(O2, C2, E2, b2, S2, 20, a2[31]), C2, E2, m2, 4, a2[32]), E2 = h2(E2, b2, O2, C2, w2, 11, a2[33]), C2 = h2(C2, E2, b2, O2, T2, 16, a2[34]), O2 = h2(O2, C2, E2, b2, A2, 23, a2[35]), b2 = h2(b2, O2, C2, E2, c3, 4, a2[36]), E2 = h2(E2, b2, O2, C2, p2, 11, a2[37]), C2 = h2(C2, E2, b2, O2, _2, 16, a2[38]), O2 = h2(O2, C2, E2, b2, v2, 23, a2[39]), b2 = h2(b2, O2, C2, E2, P2, 4, a2[40]), E2 = h2(E2, b2, O2, C2, i3, 11, a2[41]), C2 = h2(C2, E2, b2, O2, g2, 16, a2[42]), O2 = h2(O2, C2, E2, b2, y, 23, a2[43]), b2 = h2(b2, O2, C2, E2, k2, 4, a2[44]), E2 = h2(E2, b2, O2, C2, S2, 11, a2[45]), C2 = h2(C2, E2, b2, O2, I2, 16, a2[46]), b2 = d2(b2, O2 = h2(O2, C2, E2, b2, f2, 23, a2[47]), C2, E2, i3, 6, a2[48]), E2 = d2(E2, b2, O2, C2, _2, 10, a2[49]), C2 = d2(C2, E2, b2, O2, A2, 15, a2[50]), O2 = d2(O2, C2, E2, b2, m2, 21, a2[51]), b2 = d2(b2, O2, C2, E2, S2, 6, a2[52]), E2 = d2(E2, b2, O2, C2, g2, 10, a2[53]), C2 = d2(C2, E2, b2, O2, v2, 15, a2[54]), O2 = d2(O2, C2, E2, b2, c3, 21, a2[55]), b2 = d2(b2, O2, C2, E2, w2, 6, a2[56]), E2 = d2(E2, b2, O2, C2, I2, 10, a2[57]), C2 = d2(C2, E2, b2, O2, y, 15, a2[58]), O2 = d2(O2, C2, E2, b2, P2, 21, a2[59]), b2 = d2(b2, O2, C2, E2, p2, 6, a2[60]), E2 = d2(E2, b2, O2, C2, T2, 10, a2[61]), C2 = d2(C2, E2, b2, O2, f2, 15, a2[62]), O2 = d2(O2, C2, E2, b2, k2, 21, a2[63]), r3[0] = r3[0] + b2 | 0, r3[1] = r3[1] + O2 | 0, r3[2] = r3[2] + C2 | 0, r3[3] = r3[3] + E2 | 0;
      }, _doFinalize: function() {
        var t4 = this._data, n3 = t4.words, s3 = 8 * this._nDataBytes, o3 = 8 * t4.sigBytes;
        n3[o3 >>> 5] |= 128 << 24 - o3 % 32;
        var r3 = e2.floor(s3 / 4294967296), i3 = s3;
        n3[15 + (o3 + 64 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), n3[14 + (o3 + 64 >>> 9 << 4)] = 16711935 & (i3 << 8 | i3 >>> 24) | 4278255360 & (i3 << 24 | i3 >>> 8), t4.sigBytes = 4 * (n3.length + 1), this._process();
        for (var a3 = this._hash, c3 = a3.words, u3 = 0; u3 < 4; u3++) {
          var l3 = c3[u3];
          c3[u3] = 16711935 & (l3 << 8 | l3 >>> 24) | 4278255360 & (l3 << 24 | l3 >>> 8);
        }
        return a3;
      }, clone: function() {
        var e3 = r2.clone.call(this);
        return e3._hash = this._hash.clone(), e3;
      } });
      function u2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 & n3 | ~t4 & s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function l2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 & s3 | n3 & ~s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function h2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (t4 ^ n3 ^ s3) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      function d2(e3, t4, n3, s3, o3, r3, i3) {
        var a3 = e3 + (n3 ^ (t4 | ~s3)) + o3 + i3;
        return (a3 << r3 | a3 >>> 32 - r3) + t4;
      }
      t3.MD5 = r2._createHelper(c2), t3.HmacMD5 = r2._createHmacHelper(c2);
    }(Math), n2.MD5);
  }), s(function(e, t2) {
    var n2, s2, r2;
    e.exports = (s2 = (n2 = o).lib.Base, r2 = n2.enc.Utf8, void (n2.algo.HMAC = s2.extend({ init: function(e2, t3) {
      e2 = this._hasher = new e2.init(), typeof t3 == "string" && (t3 = r2.parse(t3));
      var n3 = e2.blockSize, s3 = 4 * n3;
      t3.sigBytes > s3 && (t3 = e2.finalize(t3)), t3.clamp();
      for (var o2 = this._oKey = t3.clone(), i2 = this._iKey = t3.clone(), a2 = o2.words, c2 = i2.words, u2 = 0; u2 < n3; u2++)
        a2[u2] ^= 1549556828, c2[u2] ^= 909522486;
      o2.sigBytes = i2.sigBytes = s3, this.reset();
    }, reset: function() {
      var e2 = this._hasher;
      e2.reset(), e2.update(this._iKey);
    }, update: function(e2) {
      return this._hasher.update(e2), this;
    }, finalize: function(e2) {
      var t3 = this._hasher, n3 = t3.finalize(e2);
      return t3.reset(), t3.finalize(this._oKey.clone().concat(n3));
    } })));
  }), s(function(e, t2) {
    e.exports = o.HmacMD5;
  }));
  const i = "FUNCTION", a = "OBJECT", c = "CLIENT_DB";
  function u(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function l(e) {
    return u(e) === "object";
  }
  function h(e) {
    return e && typeof e == "string" ? JSON.parse(e) : e;
  }
  const d = true, f = "app";
  let g;
  switch (f) {
    case "h5":
      g = "web";
      break;
    case "app-plus":
      g = "app";
      break;
    default:
      g = f;
  }
  const p = h({}.UNICLOUD_DEBUG), m = h("[]") || [];
  let _ = "";
  try {
    _ = "__UNI__1358B16";
  } catch (e) {
  }
  let w = {};
  function k(e, t2 = {}) {
    var n2, s2;
    return n2 = w, s2 = e, Object.prototype.hasOwnProperty.call(n2, s2) || (w[e] = t2), w[e];
  }
  g === "app" && (w = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
  const v = ["invoke", "success", "fail", "complete"], T = k("_globalUniCloudInterceptor");
  function S(e, t2) {
    T[e] || (T[e] = {}), l(t2) && Object.keys(t2).forEach((n2) => {
      v.indexOf(n2) > -1 && function(e2, t3, n3) {
        let s2 = T[e2][t3];
        s2 || (s2 = T[e2][t3] = []), s2.indexOf(n3) === -1 && typeof n3 == "function" && s2.push(n3);
      }(e, n2, t2[n2]);
    });
  }
  function P(e, t2) {
    T[e] || (T[e] = {}), l(t2) ? Object.keys(t2).forEach((n2) => {
      v.indexOf(n2) > -1 && function(e2, t3, n3) {
        const s2 = T[e2][t3];
        if (!s2)
          return;
        const o2 = s2.indexOf(n3);
        o2 > -1 && s2.splice(o2, 1);
      }(e, n2, t2[n2]);
    }) : delete T[e];
  }
  function A(e, t2) {
    return e && e.length !== 0 ? e.reduce((e2, n2) => e2.then(() => n2(t2)), Promise.resolve()) : Promise.resolve();
  }
  function I(e, t2) {
    return T[e] && T[e][t2] || [];
  }
  function b(e) {
    S("callObject", e);
  }
  const O = k("_globalUniCloudListener"), C = "response", E = "needLogin", R = "refreshToken", U = "clientdb", x = "cloudfunction", L = "cloudobject";
  function D(e) {
    return O[e] || (O[e] = []), O[e];
  }
  function N(e, t2) {
    const n2 = D(e);
    n2.includes(t2) || n2.push(t2);
  }
  function q(e, t2) {
    const n2 = D(e), s2 = n2.indexOf(t2);
    s2 !== -1 && n2.splice(s2, 1);
  }
  function F(e, t2) {
    const n2 = D(e);
    for (let e2 = 0; e2 < n2.length; e2++) {
      (0, n2[e2])(t2);
    }
  }
  let M = false;
  const j = new Promise((e) => {
    M && e(), function t2() {
      if (typeof getCurrentPages == "function") {
        const t3 = getCurrentPages();
        t3 && t3[0] && (M = true, e());
      }
      M || setTimeout(() => {
        t2();
      }, 30);
    }();
  });
  function $() {
    return j;
  }
  function K(e, t2) {
    return t2 ? function(n2) {
      let s2 = false;
      if (t2 === "callFunction") {
        const e2 = n2 && n2.type || i;
        s2 = e2 !== i;
      }
      const o2 = t2 === "callFunction" && !s2;
      let r2;
      r2 = this.isReady ? Promise.resolve() : this.initUniCloud, n2 = n2 || {};
      const a2 = r2.then(() => s2 ? Promise.resolve() : A(I(t2, "invoke"), n2)).then(() => e.call(this, n2)).then((e2) => s2 ? Promise.resolve(e2) : A(I(t2, "success"), e2).then(() => A(I(t2, "complete"), e2)).then(() => (o2 && F(C, { type: x, content: e2 }), Promise.resolve(e2))), (e2) => s2 ? Promise.reject(e2) : A(I(t2, "fail"), e2).then(() => A(I(t2, "complete"), e2)).then(() => (F(C, { type: x, content: e2 }), Promise.reject(e2))));
      if (!(n2.success || n2.fail || n2.complete))
        return a2;
      a2.then((e2) => {
        n2.success && n2.success(e2), n2.complete && n2.complete(e2), o2 && F(C, { type: x, content: e2 });
      }, (e2) => {
        n2.fail && n2.fail(e2), n2.complete && n2.complete(e2), o2 && F(C, { type: x, content: e2 });
      });
    } : function(t3) {
      if (!((t3 = t3 || {}).success || t3.fail || t3.complete))
        return e.call(this, t3);
      e.call(this, t3).then((e2) => {
        t3.success && t3.success(e2), t3.complete && t3.complete(e2);
      }, (e2) => {
        t3.fail && t3.fail(e2), t3.complete && t3.complete(e2);
      });
    };
  }
  class B extends Error {
    constructor(e) {
      super(e.message), this.errMsg = e.message || "", this.errCode = this.code = e.code || "SYSTEM_ERROR", this.requestId = e.requestId;
    }
  }
  function H() {
    let e, t2;
    try {
      if (uni.getLaunchOptionsSync) {
        if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1)
          return;
        const { scene: n2, channel: s2 } = uni.getLaunchOptionsSync();
        e = s2, t2 = n2;
      }
    } catch (e2) {
    }
    return { channel: e, scene: t2 };
  }
  let W;
  function z() {
    const e = uni.getLocale && uni.getLocale() || "en";
    if (W)
      return __spreadProps(__spreadValues({}, W), { locale: e, LOCALE: e });
    const t2 = uni.getSystemInfoSync(), { deviceId: n2, osName: s2, uniPlatform: o2, appId: r2 } = t2, i2 = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
    for (let e2 = 0; e2 < i2.length; e2++) {
      delete t2[i2[e2]];
    }
    return W = __spreadValues(__spreadValues({ PLATFORM: o2, OS: s2, APPID: r2, DEVICEID: n2 }, H()), t2), __spreadProps(__spreadValues({}, W), { locale: e, LOCALE: e });
  }
  var J = { sign: function(e, t2) {
    let n2 = "";
    return Object.keys(e).sort().forEach(function(t3) {
      e[t3] && (n2 = n2 + "&" + t3 + "=" + e[t3]);
    }), n2 = n2.slice(1), r(n2, t2).toString();
  }, wrappedRequest: function(e, t2) {
    return new Promise((n2, s2) => {
      t2(Object.assign(e, { complete(e2) {
        e2 || (e2 = {}), g === "web" && e2.errMsg && e2.errMsg.indexOf("request:fail") === 0 && console.warn("\u53D1\u5E03H5\uFF0C\u9700\u8981\u5728uniCloud\u540E\u53F0\u64CD\u4F5C\uFF0C\u7ED1\u5B9A\u5B89\u5168\u57DF\u540D\uFF0C\u5426\u5219\u4F1A\u56E0\u4E3A\u8DE8\u57DF\u95EE\u9898\u800C\u65E0\u6CD5\u8BBF\u95EE\u3002\u6559\u7A0B\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
        const t3 = e2.data && e2.data.header && e2.data.header["x-serverless-request-id"] || e2.header && e2.header["request-id"];
        if (!e2.statusCode || e2.statusCode >= 400)
          return s2(new B({ code: "SYS_ERR", message: e2.errMsg || "request:fail", requestId: t3 }));
        const o2 = e2.data;
        if (o2.error)
          return s2(new B({ code: o2.error.code, message: o2.error.message, requestId: t3 }));
        o2.result = o2.data, o2.requestId = t3, delete o2.data, n2(o2);
      } }));
    });
  } };
  var V = { request: (e) => uni.request(e), uploadFile: (e) => uni.uploadFile(e), setStorageSync: (e, t2) => uni.setStorageSync(e, t2), getStorageSync: (e) => uni.getStorageSync(e), removeStorageSync: (e) => uni.removeStorageSync(e), clearStorageSync: () => uni.clearStorageSync() }, Y = { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" };
  const { t: X } = initVueI18n({ "zh-Hans": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, "zh-Hant": { "uniCloud.init.paramRequired": "\u7F3A\u5C11\u53C2\u6570\uFF1A{param}", "uniCloud.uploadFile.fileError": "filePath\u5E94\u4E3AFile\u5BF9\u8C61" }, en: Y, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, ja: Y }, "zh-Hans");
  var G = class {
    constructor(e) {
      ["spaceId", "clientSecret"].forEach((t2) => {
        if (!Object.prototype.hasOwnProperty.call(e, t2))
          throw new Error(X("uniCloud.init.paramRequired", { param: t2 }));
      }), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = V, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;
    }
    get hasAccessToken() {
      return !!this.accessToken;
    }
    setAccessToken(e) {
      this.accessToken = e;
    }
    requestWrapped(e) {
      return J.wrappedRequest(e, this.adapter.request);
    }
    requestAuth(e) {
      return this.requestWrapped(e);
    }
    request(e, t2) {
      return Promise.resolve().then(() => this.hasAccessToken ? t2 ? this.requestWrapped(e) : this.requestWrapped(e).catch((t3) => new Promise((e2, n2) => {
        !t3 || t3.code !== "GATEWAY_INVALID_TOKEN" && t3.code !== "InvalidParameter.InvalidToken" ? n2(t3) : e2();
      }).then(() => this.getAccessToken()).then(() => {
        const t4 = this.rebuildRequest(e);
        return this.request(t4, true);
      })) : this.getAccessToken().then(() => {
        const t3 = this.rebuildRequest(e);
        return this.request(t3, true);
      }));
    }
    rebuildRequest(e) {
      const t2 = Object.assign({}, e);
      return t2.data.token = this.accessToken, t2.header["x-basement-token"] = this.accessToken, t2.header["x-serverless-sign"] = J.sign(t2.data, this.config.clientSecret), t2;
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      return t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = J.sign(n2, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: s2 };
    }
    getAccessToken() {
      if (this._getAccessTokenPromiseStatus === "pending")
        return this._getAccessTokenPromise;
      this._getAccessTokenPromiseStatus = "pending";
      return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then((e) => new Promise((t2, n2) => {
        e.result && e.result.accessToken ? (this.setAccessToken(e.result.accessToken), this._getAccessTokenPromiseStatus = "fulfilled", t2(this.accessToken)) : (this._getAccessTokenPromiseStatus = "rejected", n2(new B({ code: "AUTH_FAILED", message: "\u83B7\u53D6accessToken\u5931\u8D25" })));
      }), (e) => (this._getAccessTokenPromiseStatus = "rejected", Promise.reject(e))), this._getAccessTokenPromise;
    }
    authorize() {
      this.getAccessToken();
    }
    callFunction(e) {
      const t2 = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };
      return this.request(this.setupRequest(t2));
    }
    getOSSUploadOptionsFromPath(e) {
      const t2 = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, header: { "X-OSS-server-side-encrpytion": "AES256" }, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new B({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          r2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    reportOSSUpload(e) {
      const t2 = { method: "serverless.file.resource.report", params: JSON.stringify(e) };
      return this.request(this.setupRequest(t2));
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2, config: o2 }) {
      if (u(t2) !== "string")
        throw new B({ code: "INVALID_PARAM", message: "cloudPath\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B" });
      if (!(t2 = t2.trim()))
        throw new B({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      if (/:\/\//.test(t2))
        throw new B({ code: "INVALID_PARAM", message: "cloudPath\u4E0D\u5408\u6CD5" });
      const r2 = o2 && o2.envType || this.config.envType;
      let i2, a2;
      return this.getOSSUploadOptionsFromPath({ env: r2, filename: t2 }).then((t3) => {
        const o3 = t3.result;
        i2 = o3.id, a2 = "https://" + o3.cdnDomain + "/" + o3.ossPath;
        const r3 = { url: "https://" + o3.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o3.accessKeyId, Signature: o3.signature, host: o3.host, id: i2, key: o3.ossPath, policy: o3.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, r3, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ id: i2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: a2 }) : s3(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      return new Promise((t2, n2) => {
        Array.isArray(e) && e.length !== 0 || n2(new B({ code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" })), t2({ fileList: e.map((e2) => ({ fileID: e2, tempFileURL: e2 })) });
      });
    }
  };
  var Q = { init(e) {
    const t2 = new G(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  const Z = typeof location != "undefined" && location.protocol === "http:" ? "http:" : "https:";
  var ee;
  !function(e) {
    e.local = "local", e.none = "none", e.session = "session";
  }(ee || (ee = {}));
  var te = function() {
  };
  const ne = () => {
    let e;
    if (!Promise) {
      e = () => {
      }, e.promise = {};
      const t3 = () => {
        throw new B({ message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.' });
      };
      return Object.defineProperty(e.promise, "then", { get: t3 }), Object.defineProperty(e.promise, "catch", { get: t3 }), e;
    }
    const t2 = new Promise((t3, n2) => {
      e = (e2, s2) => e2 ? n2(e2) : t3(s2);
    });
    return e.promise = t2, e;
  };
  function se(e) {
    return e === void 0;
  }
  function oe(e) {
    return Object.prototype.toString.call(e) === "[object Null]";
  }
  var re;
  function ie(e) {
    const t2 = (n2 = e, Object.prototype.toString.call(n2) === "[object Array]" ? e : [e]);
    var n2;
    for (const e2 of t2) {
      const { isMatch: t3, genAdapter: n3, runtime: s2 } = e2;
      if (t3())
        return { adapter: n3(), runtime: s2 };
    }
  }
  !function(e) {
    e.WEB = "web", e.WX_MP = "wx_mp";
  }(re || (re = {}));
  const ae = { adapter: null, runtime: void 0 }, ce = ["anonymousUuidKey"];
  class ue extends te {
    constructor() {
      super(), ae.adapter.root.tcbObject || (ae.adapter.root.tcbObject = {});
    }
    setItem(e, t2) {
      ae.adapter.root.tcbObject[e] = t2;
    }
    getItem(e) {
      return ae.adapter.root.tcbObject[e];
    }
    removeItem(e) {
      delete ae.adapter.root.tcbObject[e];
    }
    clear() {
      delete ae.adapter.root.tcbObject;
    }
  }
  function le(e, t2) {
    switch (e) {
      case "local":
        return t2.localStorage || new ue();
      case "none":
        return new ue();
      default:
        return t2.sessionStorage || new ue();
    }
  }
  class he {
    constructor(e) {
      if (!this._storage) {
        this._persistence = ae.adapter.primaryStorage || e.persistence, this._storage = le(this._persistence, ae.adapter);
        const t2 = `access_token_${e.env}`, n2 = `access_token_expire_${e.env}`, s2 = `refresh_token_${e.env}`, o2 = `anonymous_uuid_${e.env}`, r2 = `login_type_${e.env}`, i2 = `user_info_${e.env}`;
        this.keys = { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2, anonymousUuidKey: o2, loginTypeKey: r2, userInfoKey: i2 };
      }
    }
    updatePersistence(e) {
      if (e === this._persistence)
        return;
      const t2 = this._persistence === "local";
      this._persistence = e;
      const n2 = le(e, ae.adapter);
      for (const e2 in this.keys) {
        const s2 = this.keys[e2];
        if (t2 && ce.includes(e2))
          continue;
        const o2 = this._storage.getItem(s2);
        se(o2) || oe(o2) || (n2.setItem(s2, o2), this._storage.removeItem(s2));
      }
      this._storage = n2;
    }
    setStore(e, t2, n2) {
      if (!this._storage)
        return;
      const s2 = { version: n2 || "localCachev1", content: t2 }, o2 = JSON.stringify(s2);
      try {
        this._storage.setItem(e, o2);
      } catch (e2) {
        throw e2;
      }
    }
    getStore(e, t2) {
      try {
        if (!this._storage)
          return;
      } catch (e2) {
        return "";
      }
      t2 = t2 || "localCachev1";
      const n2 = this._storage.getItem(e);
      if (!n2)
        return "";
      if (n2.indexOf(t2) >= 0) {
        return JSON.parse(n2).content;
      }
      return "";
    }
    removeStore(e) {
      this._storage.removeItem(e);
    }
  }
  const de = {}, fe = {};
  function ge(e) {
    return de[e];
  }
  class pe {
    constructor(e, t2) {
      this.data = t2 || null, this.name = e;
    }
  }
  class me extends pe {
    constructor(e, t2) {
      super("error", { error: e, data: t2 }), this.error = e;
    }
  }
  const ye = new class {
    constructor() {
      this._listeners = {};
    }
    on(e, t2) {
      return function(e2, t3, n2) {
        n2[e2] = n2[e2] || [], n2[e2].push(t3);
      }(e, t2, this._listeners), this;
    }
    off(e, t2) {
      return function(e2, t3, n2) {
        if (n2 && n2[e2]) {
          const s2 = n2[e2].indexOf(t3);
          s2 !== -1 && n2[e2].splice(s2, 1);
        }
      }(e, t2, this._listeners), this;
    }
    fire(e, t2) {
      if (e instanceof me)
        return console.error(e.error), this;
      const n2 = typeof e == "string" ? new pe(e, t2 || {}) : e;
      const s2 = n2.name;
      if (this._listens(s2)) {
        n2.target = this;
        const e2 = this._listeners[s2] ? [...this._listeners[s2]] : [];
        for (const t3 of e2)
          t3.call(this, n2);
      }
      return this;
    }
    _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }();
  function _e(e, t2) {
    ye.on(e, t2);
  }
  function we(e, t2 = {}) {
    ye.fire(e, t2);
  }
  function ke(e, t2) {
    ye.off(e, t2);
  }
  const ve = "loginStateChanged", Te = "loginStateExpire", Se = "loginTypeChanged", Pe = "anonymousConverted", Ae = "refreshAccessToken";
  var Ie;
  !function(e) {
    e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
  }(Ie || (Ie = {}));
  const be = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"], Oe = { "X-SDK-Version": "1.3.5" };
  function Ce(e, t2, n2) {
    const s2 = e[t2];
    e[t2] = function(t3) {
      const o2 = {}, r2 = {};
      n2.forEach((n3) => {
        const { data: s3, headers: i3 } = n3.call(e, t3);
        Object.assign(o2, s3), Object.assign(r2, i3);
      });
      const i2 = t3.data;
      return i2 && (() => {
        var e2;
        if (e2 = i2, Object.prototype.toString.call(e2) !== "[object FormData]")
          t3.data = __spreadValues(__spreadValues({}, i2), o2);
        else
          for (const e3 in o2)
            i2.append(e3, o2[e3]);
      })(), t3.headers = __spreadValues(__spreadValues({}, t3.headers || {}), r2), s2.call(e, t3);
    };
  }
  function Ee() {
    const e = Math.random().toString(16).slice(2);
    return { data: { seqId: e }, headers: __spreadProps(__spreadValues({}, Oe), { "x-seqid": e }) };
  }
  class Re {
    constructor(e = {}) {
      var t2;
      this.config = e, this._reqClass = new ae.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: `\u8BF7\u6C42\u5728${this.config.timeout / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD`, restrictedMethods: ["post"] }), this._cache = ge(this.config.env), this._localCache = (t2 = this.config.env, fe[t2]), Ce(this._reqClass, "post", [Ee]), Ce(this._reqClass, "upload", [Ee]), Ce(this._reqClass, "download", [Ee]);
    }
    async post(e) {
      return await this._reqClass.post(e);
    }
    async upload(e) {
      return await this._reqClass.upload(e);
    }
    async download(e) {
      return await this._reqClass.download(e);
    }
    async refreshAccessToken() {
      let e, t2;
      this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
      try {
        e = await this._refreshAccessTokenPromise;
      } catch (e2) {
        t2 = e2;
      }
      if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t2)
        throw t2;
      return e;
    }
    async _refreshAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2, loginTypeKey: s2, anonymousUuidKey: o2 } = this._cache.keys;
      this._cache.removeStore(e), this._cache.removeStore(t2);
      let r2 = this._cache.getStore(n2);
      if (!r2)
        throw new B({ message: "\u672A\u767B\u5F55CloudBase" });
      const i2 = { refresh_token: r2 }, a2 = await this.request("auth.fetchAccessTokenWithRefreshToken", i2);
      if (a2.data.code) {
        const { code: e2 } = a2.data;
        if (e2 === "SIGN_PARAM_INVALID" || e2 === "REFRESH_TOKEN_EXPIRED" || e2 === "INVALID_REFRESH_TOKEN") {
          if (this._cache.getStore(s2) === Ie.ANONYMOUS && e2 === "INVALID_REFRESH_TOKEN") {
            const e3 = this._cache.getStore(o2), t3 = this._cache.getStore(n2), s3 = await this.send("auth.signInAnonymously", { anonymous_uuid: e3, refresh_token: t3 });
            return this.setRefreshToken(s3.refresh_token), this._refreshAccessToken();
          }
          we(Te), this._cache.removeStore(n2);
        }
        throw new B({ code: a2.data.code, message: `\u5237\u65B0access token\u5931\u8D25\uFF1A${a2.data.code}` });
      }
      if (a2.data.access_token)
        return we(Ae), this._cache.setStore(e, a2.data.access_token), this._cache.setStore(t2, a2.data.access_token_expire + Date.now()), { accessToken: a2.data.access_token, accessTokenExpire: a2.data.access_token_expire };
      a2.data.refresh_token && (this._cache.removeStore(n2), this._cache.setStore(n2, a2.data.refresh_token), this._refreshAccessToken());
    }
    async getAccessToken() {
      const { accessTokenKey: e, accessTokenExpireKey: t2, refreshTokenKey: n2 } = this._cache.keys;
      if (!this._cache.getStore(n2))
        throw new B({ message: "refresh token\u4E0D\u5B58\u5728\uFF0C\u767B\u5F55\u72B6\u6001\u5F02\u5E38" });
      let s2 = this._cache.getStore(e), o2 = this._cache.getStore(t2), r2 = true;
      return this._shouldRefreshAccessTokenHook && !await this._shouldRefreshAccessTokenHook(s2, o2) && (r2 = false), (!s2 || !o2 || o2 < Date.now()) && r2 ? this.refreshAccessToken() : { accessToken: s2, accessTokenExpire: o2 };
    }
    async request(e, t2, n2) {
      const s2 = `x-tcb-trace_${this.config.env}`;
      let o2 = "application/x-www-form-urlencoded";
      const r2 = __spreadValues({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t2);
      if (be.indexOf(e) === -1) {
        const { refreshTokenKey: e2 } = this._cache.keys;
        this._cache.getStore(e2) && (r2.access_token = (await this.getAccessToken()).accessToken);
      }
      let i2;
      if (e === "storage.uploadFile") {
        i2 = new FormData();
        for (let e2 in i2)
          i2.hasOwnProperty(e2) && i2[e2] !== void 0 && i2.append(e2, r2[e2]);
        o2 = "multipart/form-data";
      } else {
        o2 = "application/json", i2 = {};
        for (let e2 in r2)
          r2[e2] !== void 0 && (i2[e2] = r2[e2]);
      }
      let a2 = { headers: { "content-type": o2 } };
      n2 && n2.onUploadProgress && (a2.onUploadProgress = n2.onUploadProgress);
      const c2 = this._localCache.getStore(s2);
      c2 && (a2.headers["X-TCB-Trace"] = c2);
      const { parse: u2, inQuery: l2, search: h2 } = t2;
      let d2 = { env: this.config.env };
      u2 && (d2.parse = true), l2 && (d2 = __spreadValues(__spreadValues({}, l2), d2));
      let f2 = function(e2, t3, n3 = {}) {
        const s3 = /\?/.test(t3);
        let o3 = "";
        for (let e3 in n3)
          o3 === "" ? !s3 && (t3 += "?") : o3 += "&", o3 += `${e3}=${encodeURIComponent(n3[e3])}`;
        return /^http(s)?\:\/\//.test(t3 += o3) ? t3 : `${e2}${t3}`;
      }(Z, "//tcb-api.tencentcloudapi.com/web", d2);
      h2 && (f2 += h2);
      const g2 = await this.post(__spreadValues({ url: f2, data: i2 }, a2)), p2 = g2.header && g2.header["x-tcb-trace"];
      if (p2 && this._localCache.setStore(s2, p2), Number(g2.status) !== 200 && Number(g2.statusCode) !== 200 || !g2.data)
        throw new B({ code: "NETWORK_ERROR", message: "network request error" });
      return g2;
    }
    async send(e, t2 = {}) {
      const n2 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
      if (n2.data.code === "ACCESS_TOKEN_EXPIRED" && be.indexOf(e) === -1) {
        await this.refreshAccessToken();
        const n3 = await this.request(e, t2, { onUploadProgress: t2.onUploadProgress });
        if (n3.data.code)
          throw new B({ code: n3.data.code, message: n3.data.message });
        return n3.data;
      }
      if (n2.data.code)
        throw new B({ code: n2.data.code, message: n2.data.message });
      return n2.data;
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
  }
  const Ue = {};
  function xe(e) {
    return Ue[e];
  }
  class Le {
    constructor(e) {
      this.config = e, this._cache = ge(e.env), this._request = xe(e.env);
    }
    setRefreshToken(e) {
      const { accessTokenKey: t2, accessTokenExpireKey: n2, refreshTokenKey: s2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.removeStore(n2), this._cache.setStore(s2, e);
    }
    setAccessToken(e, t2) {
      const { accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys;
      this._cache.setStore(n2, e), this._cache.setStore(s2, t2);
    }
    async refreshUserInfo() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e);
    }
  }
  class De {
    constructor(e) {
      if (!e)
        throw new B({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._envId = e, this._cache = ge(this._envId), this._request = xe(this._envId), this.setUserInfo();
    }
    linkWithTicket(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "ticket must be string" });
      return this._request.send("auth.linkWithTicket", { ticket: e });
    }
    linkWithRedirect(e) {
      e.signInWithRedirect();
    }
    updatePassword(e, t2) {
      return this._request.send("auth.updatePassword", { oldPassword: t2, newPassword: e });
    }
    updateEmail(e) {
      return this._request.send("auth.updateEmail", { newEmail: e });
    }
    updateUsername(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      return this._request.send("auth.updateUsername", { username: e });
    }
    async getLinkedUidList() {
      const { data: e } = await this._request.send("auth.getLinkedUidList", {});
      let t2 = false;
      const { users: n2 } = e;
      return n2.forEach((e2) => {
        e2.wxOpenId && e2.wxPublicId && (t2 = true);
      }), { users: n2, hasPrimaryUid: t2 };
    }
    setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", { uid: e });
    }
    unlink(e) {
      return this._request.send("auth.unlink", { platform: e });
    }
    async update(e) {
      const { nickName: t2, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 } = e, { data: a2 } = await this._request.send("auth.updateUserInfo", { nickName: t2, gender: n2, avatarUrl: s2, province: o2, country: r2, city: i2 });
      this.setLocalUserInfo(a2);
    }
    async refresh() {
      const { data: e } = await this._request.send("auth.getUserInfo", {});
      return this.setLocalUserInfo(e), e;
    }
    setUserInfo() {
      const { userInfoKey: e } = this._cache.keys, t2 = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach((e2) => {
        this[e2] = t2[e2];
      }), this.location = { country: t2.country, province: t2.province, city: t2.city };
    }
    setLocalUserInfo(e) {
      const { userInfoKey: t2 } = this._cache.keys;
      this._cache.setStore(t2, e), this.setUserInfo();
    }
  }
  class Ne {
    constructor(e) {
      if (!e)
        throw new B({ code: "PARAM_ERROR", message: "envId is not defined" });
      this._cache = ge(e);
      const { refreshTokenKey: t2, accessTokenKey: n2, accessTokenExpireKey: s2 } = this._cache.keys, o2 = this._cache.getStore(t2), r2 = this._cache.getStore(n2), i2 = this._cache.getStore(s2);
      this.credential = { refreshToken: o2, accessToken: r2, accessTokenExpire: i2 }, this.user = new De(e);
    }
    get isAnonymousAuth() {
      return this.loginType === Ie.ANONYMOUS;
    }
    get isCustomAuth() {
      return this.loginType === Ie.CUSTOM;
    }
    get isWeixinAuth() {
      return this.loginType === Ie.WECHAT || this.loginType === Ie.WECHAT_OPEN || this.loginType === Ie.WECHAT_PUBLIC;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }
  class qe extends Le {
    async signIn() {
      this._cache.updatePersistence("local");
      const { anonymousUuidKey: e, refreshTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e) || void 0, s2 = this._cache.getStore(t2) || void 0, o2 = await this._request.send("auth.signInAnonymously", { anonymous_uuid: n2, refresh_token: s2 });
      if (o2.uuid && o2.refresh_token) {
        this._setAnonymousUUID(o2.uuid), this.setRefreshToken(o2.refresh_token), await this._request.refreshAccessToken(), we(ve), we(Se, { env: this.config.env, loginType: Ie.ANONYMOUS, persistence: "local" });
        const e2 = new Ne(this.config.env);
        return await e2.user.refresh(), e2;
      }
      throw new B({ message: "\u533F\u540D\u767B\u5F55\u5931\u8D25" });
    }
    async linkAndRetrieveDataWithTicket(e) {
      const { anonymousUuidKey: t2, refreshTokenKey: n2 } = this._cache.keys, s2 = this._cache.getStore(t2), o2 = this._cache.getStore(n2), r2 = await this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s2, refresh_token: o2, ticket: e });
      if (r2.refresh_token)
        return this._clearAnonymousUUID(), this.setRefreshToken(r2.refresh_token), await this._request.refreshAccessToken(), we(Pe, { env: this.config.env }), we(Se, { loginType: Ie.CUSTOM, persistence: "local" }), { credential: { refreshToken: r2.refresh_token } };
      throw new B({ message: "\u533F\u540D\u8F6C\u5316\u5931\u8D25" });
    }
    _setAnonymousUUID(e) {
      const { anonymousUuidKey: t2, loginTypeKey: n2 } = this._cache.keys;
      this._cache.removeStore(t2), this._cache.setStore(t2, e), this._cache.setStore(n2, Ie.ANONYMOUS);
    }
    _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }
  class Fe extends Le {
    async signIn(e) {
      if (typeof e != "string")
        throw new B({ param: "PARAM_ERROR", message: "ticket must be a string" });
      const { refreshTokenKey: t2 } = this._cache.keys, n2 = await this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t2) || "" });
      if (n2.refresh_token)
        return this.setRefreshToken(n2.refresh_token), await this._request.refreshAccessToken(), we(ve), we(Se, { env: this.config.env, loginType: Ie.CUSTOM, persistence: this.config.persistence }), await this.refreshUserInfo(), new Ne(this.config.env);
      throw new B({ message: "\u81EA\u5B9A\u4E49\u767B\u5F55\u5931\u8D25" });
    }
  }
  class Me extends Le {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "email must be a string" });
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token: r2, access_token_expire: i2 } = s2;
      if (o2)
        return this.setRefreshToken(o2), r2 && i2 ? this.setAccessToken(r2, i2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), we(ve), we(Se, { env: this.config.env, loginType: Ie.EMAIL, persistence: this.config.persistence }), new Ne(this.config.env);
      throw s2.code ? new B({ code: s2.code, message: `\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new B({ message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25" });
    }
    async activate(e) {
      return this._request.send("auth.activateEndUserMail", { token: e });
    }
    async resetPasswordWithToken(e, t2) {
      return this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t2 });
    }
  }
  class je extends Le {
    async signIn(e, t2) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      typeof t2 != "string" && (t2 = "", console.warn("password is empty"));
      const { refreshTokenKey: n2 } = this._cache.keys, s2 = await this._request.send("auth.signIn", { loginType: Ie.USERNAME, username: e, password: t2, refresh_token: this._cache.getStore(n2) || "" }), { refresh_token: o2, access_token_expire: r2, access_token: i2 } = s2;
      if (o2)
        return this.setRefreshToken(o2), i2 && r2 ? this.setAccessToken(i2, r2) : await this._request.refreshAccessToken(), await this.refreshUserInfo(), we(ve), we(Se, { env: this.config.env, loginType: Ie.USERNAME, persistence: this.config.persistence }), new Ne(this.config.env);
      throw s2.code ? new B({ code: s2.code, message: `\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ${s2.message}` }) : new B({ message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25" });
    }
  }
  class $e {
    constructor(e) {
      this.config = e, this._cache = ge(e.env), this._request = xe(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), _e(Se, this._onLoginTypeChanged);
    }
    get currentUser() {
      const e = this.hasLoginState();
      return e && e.user || null;
    }
    get loginType() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
    anonymousAuthProvider() {
      return new qe(this.config);
    }
    customAuthProvider() {
      return new Fe(this.config);
    }
    emailAuthProvider() {
      return new Me(this.config);
    }
    usernameAuthProvider() {
      return new je(this.config);
    }
    async signInAnonymously() {
      return new qe(this.config).signIn();
    }
    async signInWithEmailAndPassword(e, t2) {
      return new Me(this.config).signIn(e, t2);
    }
    signInWithUsernameAndPassword(e, t2) {
      return new je(this.config).signIn(e, t2);
    }
    async linkAndRetrieveDataWithTicket(e) {
      this._anonymousAuthProvider || (this._anonymousAuthProvider = new qe(this.config)), _e(Pe, this._onAnonymousConverted);
      return await this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
    }
    async signOut() {
      if (this.loginType === Ie.ANONYMOUS)
        throw new B({ message: "\u533F\u540D\u7528\u6237\u4E0D\u652F\u6301\u767B\u51FA\u64CD\u4F5C" });
      const { refreshTokenKey: e, accessTokenKey: t2, accessTokenExpireKey: n2 } = this._cache.keys, s2 = this._cache.getStore(e);
      if (!s2)
        return;
      const o2 = await this._request.send("auth.logout", { refresh_token: s2 });
      return this._cache.removeStore(e), this._cache.removeStore(t2), this._cache.removeStore(n2), we(ve), we(Se, { env: this.config.env, loginType: Ie.NULL, persistence: this.config.persistence }), o2;
    }
    async signUpWithEmailAndPassword(e, t2) {
      return this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t2 });
    }
    async sendPasswordResetEmail(e) {
      return this._request.send("auth.sendPasswordResetEmail", { email: e });
    }
    onLoginStateChanged(e) {
      _e(ve, () => {
        const t3 = this.hasLoginState();
        e.call(this, t3);
      });
      const t2 = this.hasLoginState();
      e.call(this, t2);
    }
    onLoginStateExpired(e) {
      _e(Te, e.bind(this));
    }
    onAccessTokenRefreshed(e) {
      _e(Ae, e.bind(this));
    }
    onAnonymousConverted(e) {
      _e(Pe, e.bind(this));
    }
    onLoginTypeChanged(e) {
      _e(Se, () => {
        const t2 = this.hasLoginState();
        e.call(this, t2);
      });
    }
    async getAccessToken() {
      return { accessToken: (await this._request.getAccessToken()).accessToken, env: this.config.env };
    }
    hasLoginState() {
      const { refreshTokenKey: e } = this._cache.keys;
      return this._cache.getStore(e) ? new Ne(this.config.env) : null;
    }
    async isUsernameRegistered(e) {
      if (typeof e != "string")
        throw new B({ code: "PARAM_ERROR", message: "username must be a string" });
      const { data: t2 } = await this._request.send("auth.isUsernameRegistered", { username: e });
      return t2 && t2.isRegistered;
    }
    getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
    async signInWithTicket(e) {
      return new Fe(this.config).signIn(e);
    }
    shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
    getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then((e) => e.code ? e : __spreadProps(__spreadValues({}, e.data), { requestId: e.seqId }));
    }
    getAuthHeader() {
      const { refreshTokenKey: e, accessTokenKey: t2 } = this._cache.keys, n2 = this._cache.getStore(e);
      return { "x-cloudbase-credentials": this._cache.getStore(t2) + "/@@/" + n2 };
    }
    _onAnonymousConverted(e) {
      const { env: t2 } = e.data;
      t2 === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
    _onLoginTypeChanged(e) {
      const { loginType: t2, persistence: n2, env: s2 } = e.data;
      s2 === this.config.env && (this._cache.updatePersistence(n2), this._cache.setStore(this._cache.keys.loginTypeKey, t2));
    }
  }
  const Ke = function(e, t2) {
    t2 = t2 || ne();
    const n2 = xe(this.config.env), { cloudPath: s2, filePath: o2, onUploadProgress: r2, fileType: i2 = "image" } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      const { data: { url: a2, authorization: c2, token: u2, fileId: l2, cosFileId: h2 }, requestId: d2 } = e2, f2 = { key: s2, signature: c2, "x-cos-meta-fileid": h2, success_action_status: "201", "x-cos-security-token": u2 };
      n2.upload({ url: a2, data: f2, file: o2, name: s2, fileType: i2, onUploadProgress: r2 }).then((e3) => {
        e3.statusCode === 201 ? t2(null, { fileID: l2, requestId: d2 }) : t2(new B({ code: "STORAGE_REQUEST_FAIL", message: `STORAGE_REQUEST_FAIL: ${e3.data}` }));
      }).catch((e3) => {
        t2(e3);
      });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, Be = function(e, t2) {
    t2 = t2 || ne();
    const n2 = xe(this.config.env), { cloudPath: s2 } = e;
    return n2.send("storage.getUploadMetadata", { path: s2 }).then((e2) => {
      t2(null, e2);
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, He = function({ fileList: e }, t2) {
    if (t2 = t2 || ne(), !e || !Array.isArray(e))
      return { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" };
    for (let t3 of e)
      if (!t3 || typeof t3 != "string")
        return { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u5B57\u7B26\u4E32" };
    const n2 = { fileid_list: e };
    return xe(this.config.env).send("storage.batchDeleteFile", n2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.delete_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, We = function({ fileList: e }, t2) {
    t2 = t2 || ne(), e && Array.isArray(e) || t2(null, { code: "INVALID_PARAM", message: "fileList\u5FC5\u987B\u662F\u975E\u7A7A\u7684\u6570\u7EC4" });
    let n2 = [];
    for (let s3 of e)
      typeof s3 == "object" ? (s3.hasOwnProperty("fileID") && s3.hasOwnProperty("maxAge") || t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5305\u542BfileID\u548CmaxAge\u7684\u5BF9\u8C61" }), n2.push({ fileid: s3.fileID, max_age: s3.maxAge })) : typeof s3 == "string" ? n2.push({ fileid: s3 }) : t2(null, { code: "INVALID_PARAM", message: "fileList\u7684\u5143\u7D20\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" });
    const s2 = { file_list: n2 };
    return xe(this.config.env).send("storage.batchGetDownloadUrl", s2).then((e2) => {
      e2.code ? t2(null, e2) : t2(null, { fileList: e2.data.download_list, requestId: e2.requestId });
    }).catch((e2) => {
      t2(e2);
    }), t2.promise;
  }, ze = async function({ fileID: e }, t2) {
    const n2 = (await We.call(this, { fileList: [{ fileID: e, maxAge: 600 }] })).fileList[0];
    if (n2.code !== "SUCCESS")
      return t2 ? t2(n2) : new Promise((e2) => {
        e2(n2);
      });
    const s2 = xe(this.config.env);
    let o2 = n2.download_url;
    if (o2 = encodeURI(o2), !t2)
      return s2.download({ url: o2 });
    t2(await s2.download({ url: o2 }));
  }, Je = function({ name: e, data: t2, query: n2, parse: s2, search: o2 }, r2) {
    const i2 = r2 || ne();
    let a2;
    try {
      a2 = t2 ? JSON.stringify(t2) : "";
    } catch (e2) {
      return Promise.reject(e2);
    }
    if (!e)
      return Promise.reject(new B({ code: "PARAM_ERROR", message: "\u51FD\u6570\u540D\u4E0D\u80FD\u4E3A\u7A7A" }));
    const c2 = { inQuery: n2, parse: s2, search: o2, function_name: e, request_data: a2 };
    return xe(this.config.env).send("functions.invokeFunction", c2).then((e2) => {
      if (e2.code)
        i2(null, e2);
      else {
        let t3 = e2.data.response_data;
        if (s2)
          i2(null, { result: t3, requestId: e2.requestId });
        else
          try {
            t3 = JSON.parse(e2.data.response_data), i2(null, { result: t3, requestId: e2.requestId });
          } catch (e3) {
            i2(new B({ message: "response data must be json" }));
          }
      }
      return i2.promise;
    }).catch((e2) => {
      i2(e2);
    }), i2.promise;
  }, Ve = { timeout: 15e3, persistence: "session" }, Ye = {};
  class Xe {
    constructor(e) {
      this.config = e || this.config, this.authObj = void 0;
    }
    init(e) {
      switch (ae.adapter || (this.requestClient = new ae.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: `\u8BF7\u6C42\u5728${(e.timeout || 5e3) / 1e3}s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD` })), this.config = __spreadValues(__spreadValues({}, Ve), e), true) {
        case this.config.timeout > 6e5:
          console.warn("timeout\u5927\u4E8E\u53EF\u914D\u7F6E\u4E0A\u9650[10\u5206\u949F]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0A\u9650\u6570\u503C"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout\u5C0F\u4E8E\u53EF\u914D\u7F6E\u4E0B\u9650[100ms]\uFF0C\u5DF2\u91CD\u7F6E\u4E3A\u4E0B\u9650\u6570\u503C"), this.config.timeout = 100;
      }
      return new Xe(this.config);
    }
    auth({ persistence: e } = {}) {
      if (this.authObj)
        return this.authObj;
      const t2 = e || ae.adapter.primaryStorage || Ve.persistence;
      var n2;
      return t2 !== this.config.persistence && (this.config.persistence = t2), function(e2) {
        const { env: t3 } = e2;
        de[t3] = new he(e2), fe[t3] = new he(__spreadProps(__spreadValues({}, e2), { persistence: "local" }));
      }(this.config), n2 = this.config, Ue[n2.env] = new Re(n2), this.authObj = new $e(this.config), this.authObj;
    }
    on(e, t2) {
      return _e.apply(this, [e, t2]);
    }
    off(e, t2) {
      return ke.apply(this, [e, t2]);
    }
    callFunction(e, t2) {
      return Je.apply(this, [e, t2]);
    }
    deleteFile(e, t2) {
      return He.apply(this, [e, t2]);
    }
    getTempFileURL(e, t2) {
      return We.apply(this, [e, t2]);
    }
    downloadFile(e, t2) {
      return ze.apply(this, [e, t2]);
    }
    uploadFile(e, t2) {
      return Ke.apply(this, [e, t2]);
    }
    getUploadMetadata(e, t2) {
      return Be.apply(this, [e, t2]);
    }
    registerExtension(e) {
      Ye[e.name] = e;
    }
    async invokeExtension(e, t2) {
      const n2 = Ye[e];
      if (!n2)
        throw new B({ message: `\u6269\u5C55${e} \u5FC5\u987B\u5148\u6CE8\u518C` });
      return await n2.invoke(t2, this);
    }
    useAdapters(e) {
      const { adapter: t2, runtime: n2 } = ie(e) || {};
      t2 && (ae.adapter = t2), n2 && (ae.runtime = n2);
    }
  }
  var Ge = new Xe();
  function Qe(e, t2, n2) {
    n2 === void 0 && (n2 = {});
    var s2 = /\?/.test(t2), o2 = "";
    for (var r2 in n2)
      o2 === "" ? !s2 && (t2 += "?") : o2 += "&", o2 += r2 + "=" + encodeURIComponent(n2[r2]);
    return /^http(s)?:\/\//.test(t2 += o2) ? t2 : "" + e + t2;
  }
  class Ze {
    post(e) {
      const { url: t2, data: n2, headers: s2 } = e;
      return new Promise((e2, o2) => {
        V.request({ url: Qe("https:", t2), data: n2, method: "POST", header: s2, success(t3) {
          e2(t3);
        }, fail(e3) {
          o2(e3);
        } });
      });
    }
    upload(e) {
      return new Promise((t2, n2) => {
        const { url: s2, file: o2, data: r2, headers: i2, fileType: a2 } = e, c2 = V.uploadFile({ url: Qe("https:", s2), name: "file", formData: Object.assign({}, r2), filePath: o2, fileType: a2, header: i2, success(e2) {
          const n3 = { statusCode: e2.statusCode, data: e2.data || {} };
          e2.statusCode === 200 && r2.success_action_status && (n3.statusCode = parseInt(r2.success_action_status, 10)), t2(n3);
        }, fail(e2) {
          n2(new Error(e2.errMsg || "uploadFile:fail"));
        } });
        typeof e.onUploadProgress == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((t3) => {
          e.onUploadProgress({ loaded: t3.totalBytesSent, total: t3.totalBytesExpectedToSend });
        });
      });
    }
  }
  const et = { setItem(e, t2) {
    V.setStorageSync(e, t2);
  }, getItem: (e) => V.getStorageSync(e), removeItem(e) {
    V.removeStorageSync(e);
  }, clear() {
    V.clearStorageSync();
  } };
  var tt = { genAdapter: function() {
    return { root: {}, reqClass: Ze, localStorage: et, primaryStorage: "local" };
  }, isMatch: function() {
    return true;
  }, runtime: "uni_app" };
  Ge.useAdapters(tt);
  const nt = Ge, st = nt.init;
  nt.init = function(e) {
    e.env = e.spaceId;
    const t2 = st.call(this, e);
    t2.config.provider = "tencent", t2.config.spaceId = e.spaceId;
    const n2 = t2.auth;
    return t2.auth = function(e2) {
      const t3 = n2.call(this, e2);
      return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach((e3) => {
        t3[e3] = K(t3[e3]).bind(t3);
      }), t3;
    }, t2.customAuth = t2.auth, t2;
  };
  var ot = nt;
  function rt(e) {
    return e && rt(e.__v_raw) || e;
  }
  function it() {
    return { token: V.getStorageSync("uni_id_token") || V.getStorageSync("uniIdToken"), tokenExpired: V.getStorageSync("uni_id_token_expired") };
  }
  function at({ token: e, tokenExpired: t2 } = {}) {
    e && V.setStorageSync("uni_id_token", e), t2 && V.setStorageSync("uni_id_token_expired", t2);
  }
  function ct() {
    if (g !== "web")
      return;
    uni.getStorageSync("__LAST_DCLOUD_APPID") !== _ && (uni.setStorageSync("__LAST_DCLOUD_APPID", _), console.warn("\u68C0\u6D4B\u5230\u5F53\u524D\u9879\u76EE\u4E0E\u4E0A\u6B21\u8FD0\u884C\u5230\u6B64\u7AEF\u53E3\u7684\u9879\u76EE\u4E0D\u4E00\u81F4\uFF0C\u81EA\u52A8\u6E05\u7406uni-id\u4FDD\u5B58\u7684token\u4FE1\u606F\uFF08\u4EC5\u5F00\u53D1\u8C03\u8BD5\u65F6\u751F\u6548\uFF09"), V.removeStorageSync("uni_id_token"), V.removeStorageSync("uniIdToken"), V.removeStorageSync("uni_id_token_expired"));
  }
  var ut = class extends G {
    getAccessToken() {
      return new Promise((e, t2) => {
        const n2 = "Anonymous_Access_token";
        this.setAccessToken(n2), e(n2);
      });
    }
    setupRequest(e, t2) {
      const n2 = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }), s2 = { "Content-Type": "application/json" };
      t2 !== "auth" && (n2.token = this.accessToken, s2["x-basement-token"] = this.accessToken), s2["x-serverless-sign"] = J.sign(n2, this.config.clientSecret);
      const o2 = z();
      s2["x-client-info"] = encodeURIComponent(JSON.stringify(o2));
      const { token: r2 } = it();
      return s2["x-client-token"] = r2, { url: this.config.requestUrl, method: "POST", data: n2, dataType: "json", header: JSON.parse(JSON.stringify(s2)) };
    }
    uploadFileToOSS({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, onUploadProgress: r2 }) {
      return new Promise((i2, a2) => {
        const c2 = this.adapter.uploadFile({ url: e, formData: t2, name: n2, filePath: s2, fileType: o2, success(e2) {
          e2 && e2.statusCode < 400 ? i2(e2) : a2(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        }, fail(e2) {
          a2(new B({ code: e2.code || "UPLOAD_FAILED", message: e2.message || e2.errMsg || "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
        } });
        typeof r2 == "function" && c2 && typeof c2.onProgressUpdate == "function" && c2.onProgressUpdate((e2) => {
          r2({ loaded: e2.totalBytesSent, total: e2.totalBytesExpectedToSend });
        });
      });
    }
    uploadFile({ filePath: e, cloudPath: t2, fileType: n2 = "image", onUploadProgress: s2 }) {
      if (!t2)
        throw new B({ code: "CLOUDPATH_REQUIRED", message: "cloudPath\u4E0D\u53EF\u4E3A\u7A7A" });
      let o2;
      return this.getOSSUploadOptionsFromPath({ cloudPath: t2 }).then((t3) => {
        const { url: r2, formData: i2, name: a2 } = t3.result;
        o2 = t3.result.fileUrl;
        const c2 = { url: r2, formData: i2, name: a2, filePath: e, fileType: n2 };
        return this.uploadFileToOSS(Object.assign({}, c2, { onUploadProgress: s2 }));
      }).then(() => this.reportOSSUpload({ cloudPath: t2 })).then((t3) => new Promise((n3, s3) => {
        t3.success ? n3({ success: true, filePath: e, fileID: o2 }) : s3(new B({ code: "UPLOAD_FAILED", message: "\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25" }));
      }));
    }
    deleteFile({ fileList: e }) {
      const t2 = { method: "serverless.file.resource.delete", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
    getTempFileURL({ fileList: e } = {}) {
      const t2 = { method: "serverless.file.resource.getTempFileURL", params: JSON.stringify({ fileList: e }) };
      return this.request(this.setupRequest(t2));
    }
  };
  var lt = { init(e) {
    const t2 = new ut(e), n2 = { signInAnonymously: function() {
      return t2.authorize();
    }, getLoginState: function() {
      return Promise.resolve(false);
    } };
    return t2.auth = function() {
      return n2;
    }, t2.customAuth = t2.auth, t2;
  } };
  function ht({ data: e }) {
    let t2;
    t2 = z();
    const n2 = JSON.parse(JSON.stringify(e || {}));
    if (Object.assign(n2, { clientInfo: t2 }), !n2.uniIdToken) {
      const { token: e2 } = it();
      e2 && (n2.uniIdToken = e2);
    }
    return n2;
  }
  function dt({ name: e, data: t2 } = {}) {
    const { localAddress: n2, localPort: s2 } = this.__dev__, o2 = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider], r2 = this.config.spaceId, i2 = `http://${n2}:${s2}/system/check-function`, a2 = `http://${n2}:${s2}/cloudfunctions/${e}`;
    return new Promise((t3, n3) => {
      V.request({ method: "POST", url: i2, data: { name: e, platform: g, provider: o2, spaceId: r2 }, timeout: 3e3, success(e2) {
        t3(e2);
      }, fail() {
        t3({ data: { code: "NETWORK_ERROR", message: "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570\u3002" } });
      } });
    }).then(({ data: e2 } = {}) => {
      const { code: t3, message: n3 } = e2 || {};
      return { code: t3 === 0 ? 0 : t3 || "SYS_ERR", message: n3 || "SYS_ERR" };
    }).then(({ code: n3, message: s3 }) => {
      if (n3 !== 0) {
        switch (n3) {
          case "MODULE_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "FUNCTION_ENCRYPTED":
            console.error(`\u6B64\u4E91\u51FD\u6570\uFF08${e}\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570`);
            break;
          case "ACTION_ENCRYPTED":
            console.error(s3 || "\u9700\u8981\u8BBF\u95EE\u52A0\u5BC6\u7684uni-clientDB-action\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u73AF\u5883");
            break;
          case "NETWORK_ERROR": {
            const e2 = "\u8FDE\u63A5\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u5BA2\u6237\u7AEF\u662F\u5426\u548C\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B";
            throw console.error(e2), new Error(e2);
          }
          case "SWITCH_TO_CLOUD":
            break;
          default: {
            const e2 = `\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A${s3}\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5`;
            throw console.error(e2), new Error(e2);
          }
        }
        return this._callCloudFunction({ name: e, data: t2 });
      }
      return new Promise((e2, n4) => {
        const s4 = ht.call(this, { data: t2 });
        V.request({ method: "POST", url: a2, data: { provider: o2, platform: g, param: s4 }, success: ({ statusCode: t3, data: s5 } = {}) => !t3 || t3 >= 400 ? n4(new B({ code: s5.code || "SYS_ERR", message: s5.message || "request:fail" })) : e2({ result: s5 }), fail(e3) {
          n4(new B({ code: e3.code || e3.errCode || "SYS_ERR", message: e3.message || e3.errMsg || "request:fail" }));
        } });
      });
    });
  }
  const ft = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "\uFF0C\u4E91\u51FD\u6570[{functionName}]\u5728\u4E91\u7AEF\u4E0D\u5B58\u5728\uFF0C\u8BF7\u68C0\u67E5\u6B64\u4E91\u51FD\u6570\u540D\u79F0\u662F\u5426\u6B63\u786E\u4EE5\u53CA\u8BE5\u4E91\u51FD\u6570\u662F\u5426\u5DF2\u4E0A\u4F20\u5230\u670D\u52A1\u7A7A\u95F4", mode: "append" }];
  var gt = /[\\^$.*+?()[\]{}|]/g, pt = RegExp(gt.source);
  function mt(e, t2, n2) {
    return e.replace(new RegExp((s2 = t2) && pt.test(s2) ? s2.replace(gt, "\\$&") : s2, "g"), n2);
    var s2;
  }
  function yt({ functionName: e, result: t2, logPvd: n2 }) {
    if (this.__dev__.debugLog && t2 && t2.requestId) {
      const s2 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t2.requestId });
      console.log(`[${n2}-request]${s2}[/${n2}-request]`);
    }
  }
  function _t(e) {
    const t2 = e.callFunction, n2 = function(n3) {
      const s2 = n3.name;
      n3.data = ht.call(e, { data: n3.data });
      const o2 = { aliyun: "aliyun", tencent: "tcb", tcb: "tcb" }[this.config.provider];
      return t2.call(this, n3).then((e2) => (e2.errCode = 0, yt.call(this, { functionName: s2, result: e2, logPvd: o2 }), Promise.resolve(e2)), (e2) => (yt.call(this, { functionName: s2, result: e2, logPvd: o2 }), e2 && e2.message && (e2.message = function({ message: e3 = "", extraInfo: t3 = {}, formatter: n4 = [] } = {}) {
        for (let s3 = 0; s3 < n4.length; s3++) {
          const { rule: o3, content: r2, mode: i2 } = n4[s3], a2 = e3.match(o3);
          if (!a2)
            continue;
          let c2 = r2;
          for (let e4 = 1; e4 < a2.length; e4++)
            c2 = mt(c2, `{$${e4}}`, a2[e4]);
          for (const e4 in t3)
            c2 = mt(c2, `{${e4}}`, t3[e4]);
          return i2 === "replace" ? c2 : e3 + c2;
        }
        return e3;
      }({ message: `[${n3.name}]: ${e2.message}`, formatter: ft, extraInfo: { functionName: s2 } })), Promise.reject(e2)));
    };
    e.callFunction = function(t3) {
      let s2;
      e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && m ? (e._callCloudFunction || (e._callCloudFunction = n2, e._callLocalFunction = dt), s2 = dt) : s2 = n2;
      const o2 = s2.call(this, t3);
      return Object.defineProperty(o2, "result", { get: () => (console.warn("\u5F53\u524D\u8FD4\u56DE\u7ED3\u679C\u4E3APromise\u7C7B\u578B\uFF0C\u4E0D\u53EF\u76F4\u63A5\u8BBF\u95EE\u5176result\u5C5E\u6027\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {}) }), o2;
    };
  }
  const wt = Symbol("CLIENT_DB_INTERNAL");
  function kt(e, t2) {
    return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = wt, e.__v_raw = void 0, new Proxy(e, { get(e2, n2, s2) {
      if (n2 === "_uniClient")
        return null;
      if (n2 in e2 || typeof n2 != "string") {
        const t3 = e2[n2];
        return typeof t3 == "function" ? t3.bind(e2) : t3;
      }
      return t2.get(e2, n2, s2);
    } });
  }
  function vt(e) {
    return { on: (t2, n2) => {
      e[t2] = e[t2] || [], e[t2].indexOf(n2) > -1 || e[t2].push(n2);
    }, off: (t2, n2) => {
      e[t2] = e[t2] || [];
      const s2 = e[t2].indexOf(n2);
      s2 !== -1 && e[t2].splice(s2, 1);
    } };
  }
  const Tt = ["db.Geo", "db.command", "command.aggregate"];
  function St(e, t2) {
    return Tt.indexOf(`${e}.${t2}`) > -1;
  }
  function Pt(e) {
    switch (u(e = rt(e))) {
      case "array":
        return e.map((e2) => Pt(e2));
      case "object":
        return e._internalType === wt || Object.keys(e).forEach((t2) => {
          e[t2] = Pt(e[t2]);
        }), e;
      case "regexp":
        return { $regexp: { source: e.source, flags: e.flags } };
      case "date":
        return { $date: e.toISOString() };
      default:
        return e;
    }
  }
  function At(e) {
    return e && e.content && e.content.$method;
  }
  class It {
    constructor(e, t2, n2) {
      this.content = e, this.prevStage = t2 || null, this.udb = null, this._database = n2;
    }
    toJSON() {
      let e = this;
      const t2 = [e.content];
      for (; e.prevStage; )
        e = e.prevStage, t2.push(e.content);
      return { $db: t2.reverse().map((e2) => ({ $method: e2.$method, $param: Pt(e2.$param) })) };
    }
    getAction() {
      const e = this.toJSON().$db.find((e2) => e2.$method === "action");
      return e && e.$param && e.$param[0];
    }
    getCommand() {
      return { $db: this.toJSON().$db.filter((e) => e.$method !== "action") };
    }
    get isAggregate() {
      let e = this;
      for (; e; ) {
        const t2 = At(e), n2 = At(e.prevStage);
        if (t2 === "aggregate" && n2 === "collection" || t2 === "pipeline")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isCommand() {
      let e = this;
      for (; e; ) {
        if (At(e) === "command")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get isAggregateCommand() {
      let e = this;
      for (; e; ) {
        const t2 = At(e), n2 = At(e.prevStage);
        if (t2 === "aggregate" && n2 === "command")
          return true;
        e = e.prevStage;
      }
      return false;
    }
    get count() {
      if (!this.isAggregate)
        return function() {
          return this._send("count", Array.from(arguments));
        };
      const e = this;
      return function() {
        return bt({ $method: "count", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    get remove() {
      if (!this.isCommand)
        return function() {
          return this._send("remove", Array.from(arguments));
        };
      const e = this;
      return function() {
        return bt({ $method: "remove", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    get() {
      return this._send("get", Array.from(arguments));
    }
    add() {
      return this._send("add", Array.from(arguments));
    }
    update() {
      return this._send("update", Array.from(arguments));
    }
    end() {
      return this._send("end", Array.from(arguments));
    }
    get set() {
      if (!this.isCommand)
        return function() {
          throw new Error("JQL\u7981\u6B62\u4F7F\u7528set\u65B9\u6CD5");
        };
      const e = this;
      return function() {
        return bt({ $method: "set", $param: Pt(Array.from(arguments)) }, e, this._database);
      };
    }
    _send(e, t2) {
      const n2 = this.getAction(), s2 = this.getCommand();
      if (s2.$db.push({ $method: e, $param: Pt(t2) }), d) {
        const e2 = s2.$db.find((e3) => e3.$method === "collection"), t3 = e2 && e2.$param;
        t3 && t3.length === 1 && typeof e2.$param[0] == "string" && e2.$param[0].indexOf(",") > -1 && console.warn("\u68C0\u6D4B\u5230\u4F7F\u7528JQL\u8BED\u6CD5\u8054\u8868\u67E5\u8BE2\u65F6\uFF0C\u672A\u4F7F\u7528getTemp\u5148\u8FC7\u6EE4\u4E3B\u8868\u6570\u636E\uFF0C\u5728\u4E3B\u8868\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\u53EF\u80FD\u4F1A\u67E5\u8BE2\u7F13\u6162\u3002\n- \u5982\u4F55\u4F18\u5316\u8BF7\u53C2\u8003\u6B64\u6587\u6863\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- \u5982\u679C\u4E3B\u8868\u6570\u636E\u91CF\u5F88\u5C0F\u8BF7\u5FFD\u7565\u6B64\u4FE1\u606F\uFF0C\u9879\u76EE\u53D1\u884C\u65F6\u4E0D\u4F1A\u51FA\u73B0\u6B64\u63D0\u793A\u3002");
      }
      return this._database._callCloudFunction({ action: n2, command: s2 });
    }
  }
  function bt(e, t2, n2) {
    return kt(new It(e, t2, n2), { get(e2, t3) {
      let s2 = "db";
      return e2 && e2.content && (s2 = e2.content.$method), St(s2, t3) ? bt({ $method: t3 }, e2, n2) : function() {
        return bt({ $method: t3, $param: Pt(Array.from(arguments)) }, e2, n2);
      };
    } });
  }
  function Ot({ path: e, method: t2 }) {
    return class {
      constructor() {
        this.param = Array.from(arguments);
      }
      toJSON() {
        return { $newDb: [...e.map((e2) => ({ $method: e2 })), { $method: t2, $param: this.param }] };
      }
    };
  }
  class Ct extends class {
    constructor({ uniClient: e = {} } = {}) {
      this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e.isDefault && (this._dbCallBacks = k("_globalUniCloudDatabaseCallback")), this.auth = vt(this._authCallBacks), Object.assign(this, vt(this._dbCallBacks)), this.env = kt({}, { get: (e2, t2) => ({ $env: t2 }) }), this.Geo = kt({}, { get: (e2, t2) => Ot({ path: ["Geo"], method: t2 }) }), this.serverDate = Ot({ path: [], method: "serverDate" }), this.RegExp = Ot({ path: [], method: "RegExp" });
    }
    getCloudEnv(e) {
      if (typeof e != "string" || !e.trim())
        throw new Error("getCloudEnv\u53C2\u6570\u9519\u8BEF");
      return { $env: e.replace("$cloudEnv_", "") };
    }
    _callback(e, t2) {
      const n2 = this._dbCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    _callbackAuth(e, t2) {
      const n2 = this._authCallBacks;
      n2[e] && n2[e].forEach((e2) => {
        e2(...t2);
      });
    }
    multiSend() {
      const e = Array.from(arguments), t2 = e.map((e2) => {
        const t3 = e2.getAction(), n2 = e2.getCommand();
        if (n2.$db[n2.$db.length - 1].$method !== "getTemp")
          throw new Error("multiSend\u53EA\u652F\u6301\u5B50\u547D\u4EE4\u5185\u4F7F\u7528getTemp");
        return { action: t3, command: n2 };
      });
      return this._callCloudFunction({ multiCommand: t2, queryList: e });
    }
  } {
    _callCloudFunction({ action: e, command: t2, multiCommand: n2, queryList: s2 }) {
      function o2(e2, t3) {
        if (n2 && s2)
          for (let n3 = 0; n3 < s2.length; n3++) {
            const o3 = s2[n3];
            o3.udb && typeof o3.udb.setResult == "function" && (t3 ? o3.udb.setResult(t3) : o3.udb.setResult(e2.result.dataList[n3]));
          }
      }
      const r2 = this;
      function i2(e2) {
        return r2._callback("error", [e2]), A(I("database", "fail"), e2).then(() => A(I("database", "complete"), e2)).then(() => (o2(null, e2), F(C, { type: U, content: e2 }), Promise.reject(e2)));
      }
      const a2 = A(I("database", "invoke")), u2 = this._uniClient;
      return a2.then(() => u2.callFunction({ name: "DCloud-clientDB", type: c, data: { action: e, command: t2, multiCommand: n2 } })).then((e2) => {
        const { code: t3, message: n3, token: s3, tokenExpired: r3, systemInfo: a3 = [] } = e2.result;
        if (a3)
          for (let e3 = 0; e3 < a3.length; e3++) {
            const { level: t4, message: n4, detail: s4 } = a3[e3], o3 = console[g === "app" && t4 === "warn" ? "error" : t4] || console.log;
            let r4 = "[System Info]" + n4;
            s4 && (r4 = `${r4}
\u8BE6\u7EC6\u4FE1\u606F\uFF1A${s4}`), o3(r4);
          }
        if (t3) {
          return i2(new B({ code: t3, message: n3, requestId: e2.requestId }));
        }
        e2.result.errCode = e2.result.code, e2.result.errMsg = e2.result.message, s3 && r3 && (at({ token: s3, tokenExpired: r3 }), this._callbackAuth("refreshToken", [{ token: s3, tokenExpired: r3 }]), this._callback("refreshToken", [{ token: s3, tokenExpired: r3 }]), F(R, { token: s3, tokenExpired: r3 }));
        const c2 = [{ prop: "affectedDocs", tips: "affectedDocs\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528inserted/deleted/updated/data.length\u66FF\u4EE3" }, { prop: "code", tips: "code\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errCode\u66FF\u4EE3" }, { prop: "message", tips: "message\u4E0D\u518D\u63A8\u8350\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528errMsg\u66FF\u4EE3" }];
        for (let t4 = 0; t4 < c2.length; t4++) {
          const { prop: n4, tips: s4 } = c2[t4];
          if (n4 in e2.result) {
            const t5 = e2.result[n4];
            Object.defineProperty(e2.result, n4, { get: () => (console.warn(s4), t5) });
          }
        }
        return function(e3) {
          return A(I("database", "success"), e3).then(() => A(I("database", "complete"), e3)).then(() => (o2(e3, null), F(C, { type: U, content: e3 }), Promise.resolve(e3)));
        }(e2);
      }, (e2) => {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e2.message) && console.warn("clientDB\u672A\u521D\u59CB\u5316\uFF0C\u8BF7\u5728web\u63A7\u5236\u53F0\u4FDD\u5B58\u4E00\u6B21schema\u4EE5\u5F00\u542FclientDB");
        return i2(new B({ code: e2.code || "SYSTEM_ERROR", message: e2.message, requestId: e2.requestId }));
      });
    }
  }
  function Et(e) {
    e.database = function(t2) {
      if (t2 && Object.keys(t2).length > 0)
        return e.init(t2).database();
      if (this._database)
        return this._database;
      const n2 = function(e2, t3 = {}) {
        return kt(new e2(t3), { get: (e3, t4) => St("db", t4) ? bt({ $method: t4 }, null, e3) : function() {
          return bt({ $method: t4, $param: Pt(Array.from(arguments)) }, null, e3);
        } });
      }(Ct, { uniClient: e });
      return this._database = n2, n2;
    };
  }
  const Rt = "token\u65E0\u6548\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", Ut = "token\u8FC7\u671F\uFF0C\u8DF3\u8F6C\u767B\u5F55\u9875\u9762", xt = { TOKEN_INVALID_TOKEN_EXPIRED: Ut, TOKEN_INVALID_INVALID_CLIENTID: Rt, TOKEN_INVALID: Rt, TOKEN_INVALID_WRONG_TOKEN: Rt, TOKEN_INVALID_ANONYMOUS_USER: Rt }, Lt = { "uni-id-token-expired": Ut, "uni-id-check-token-failed": Rt, "uni-id-token-not-exist": Rt, "uni-id-check-device-feature-failed": Rt };
  function Dt(e, t2) {
    let n2 = "";
    return n2 = e ? `${e}/${t2}` : t2, n2.replace(/^\//, "");
  }
  function Nt(e = [], t2 = "") {
    const n2 = [], s2 = [];
    return e.forEach((e2) => {
      e2.needLogin === true ? n2.push(Dt(t2, e2.path)) : e2.needLogin === false && s2.push(Dt(t2, e2.path));
    }), { needLoginPage: n2, notNeedLoginPage: s2 };
  }
  function qt(e) {
    return e.split("?")[0].replace(/^\//, "");
  }
  function Ft() {
    return function(e) {
      let t2 = e && e.$page && e.$page.fullPath || "";
      return t2 ? (t2.charAt(0) !== "/" && (t2 = "/" + t2), t2) : t2;
    }(function() {
      const e = getCurrentPages();
      return e[e.length - 1];
    }());
  }
  function Mt() {
    return qt(Ft());
  }
  function jt(e = "", t2 = {}) {
    if (!e)
      return false;
    if (!(t2 && t2.list && t2.list.length))
      return false;
    const n2 = t2.list, s2 = qt(e);
    return n2.some((e2) => e2.pagePath === s2);
  }
  const $t = !!t.uniIdRouter;
  const { loginPage: Kt, routerNeedLogin: Bt, resToLogin: Ht, needLoginPage: Wt, notNeedLoginPage: zt, loginPageInTabBar: Jt } = function({ pages: e = [], subPackages: n2 = [], uniIdRouter: s2 = {}, tabBar: o2 = {} } = t) {
    const { loginPage: r2, needLogin: i2 = [], resToLogin: a2 = true } = s2, { needLoginPage: c2, notNeedLoginPage: u2 } = Nt(e), { needLoginPage: l2, notNeedLoginPage: h2 } = function(e2 = []) {
      const t2 = [], n3 = [];
      return e2.forEach((e3) => {
        const { root: s3, pages: o3 = [] } = e3, { needLoginPage: r3, notNeedLoginPage: i3 } = Nt(o3, s3);
        t2.push(...r3), n3.push(...i3);
      }), { needLoginPage: t2, notNeedLoginPage: n3 };
    }(n2);
    return { loginPage: r2, routerNeedLogin: i2, resToLogin: a2, needLoginPage: [...c2, ...l2], notNeedLoginPage: [...u2, ...h2], loginPageInTabBar: jt(r2, o2) };
  }();
  if (Wt.indexOf(Kt) > -1)
    throw new Error(`Login page [${Kt}] should not be "needLogin", please check your pages.json`);
  function Vt(e) {
    const t2 = qt(function(e2) {
      const t3 = Mt(), n2 = e2.charAt(0), s2 = e2.split("?")[0];
      if (n2 === "/")
        return s2;
      const o2 = s2.replace(/^\//, "").split("/"), r2 = t3.split("/");
      r2.pop();
      for (let e3 = 0; e3 < o2.length; e3++) {
        const t4 = o2[e3];
        t4 === ".." ? r2.pop() : t4 !== "." && r2.push(t4);
      }
      return r2[0] === "" && r2.shift(), r2.join("/");
    }(e));
    return !(zt.indexOf(t2) > -1) && (Wt.indexOf(t2) > -1 || Bt.some((t3) => function(e2, t4) {
      return new RegExp(t4).test(e2);
    }(e, t3)));
  }
  function Yt({ redirect: e }) {
    const t2 = qt(e), n2 = qt(Kt);
    return Mt() !== n2 && t2 !== n2;
  }
  function Xt({ api: e, redirect: t2 } = {}) {
    if (!t2 || !Yt({ redirect: t2 }))
      return;
    const n2 = function(e2, t3) {
      return e2.charAt(0) !== "/" && (e2 = "/" + e2), t3 ? e2.indexOf("?") > -1 ? e2 + `&uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2 + `?uniIdRedirectUrl=${encodeURIComponent(t3)}` : e2;
    }(Kt, t2);
    Jt ? e !== "navigateTo" && e !== "redirectTo" || (e = "switchTab") : e === "switchTab" && (e = "navigateTo"), setTimeout(() => {
      uni[e]({ url: n2 });
    });
  }
  function Gt({ url: e } = {}) {
    const t2 = { abortLoginPageJump: false, autoToLoginPage: false }, n2 = function() {
      const { token: e2, tokenExpired: t3 } = it();
      let n3;
      if (e2) {
        if (t3 < Date.now()) {
          const e3 = "uni-id-token-expired";
          n3 = { errCode: e3, errMsg: Lt[e3] };
        }
      } else {
        const e3 = "uni-id-check-token-failed";
        n3 = { errCode: e3, errMsg: Lt[e3] };
      }
      return n3;
    }();
    if (Vt(e) && n2) {
      n2.uniIdRedirectUrl = e;
      if (D(E).length > 0)
        return setTimeout(() => {
          F(E, n2);
        }, 0), t2.abortLoginPageJump = true, t2;
      t2.autoToLoginPage = true;
    }
    return t2;
  }
  function Qt() {
    !function() {
      const e2 = Ft(), { abortLoginPageJump: t2, autoToLoginPage: n2 } = Gt({ url: e2 });
      t2 || n2 && Xt({ api: "redirectTo", redirect: e2 });
    }();
    const e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
    for (let t2 = 0; t2 < e.length; t2++) {
      const n2 = e[t2];
      uni.addInterceptor(n2, { invoke(e2) {
        const { abortLoginPageJump: t3, autoToLoginPage: s2 } = Gt({ url: e2.url });
        return t3 ? e2 : s2 ? (Xt({ api: n2, redirect: e2.url }), false) : e2;
      } });
    }
  }
  function Zt() {
    this.onResponse((e) => {
      const { type: t2, content: n2 } = e;
      let s2 = false;
      switch (t2) {
        case "cloudobject":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in Lt;
          }(n2);
          break;
        case "clientdb":
          s2 = function(e2) {
            const { errCode: t3 } = e2;
            return t3 in xt;
          }(n2);
      }
      s2 && function(e2 = {}) {
        const t3 = D(E);
        $().then(() => {
          const n3 = Ft();
          if (n3 && Yt({ redirect: n3 }))
            return t3.length > 0 ? F(E, Object.assign({ uniIdRedirectUrl: n3 }, e2)) : void (Kt && Xt({ api: "navigateTo", redirect: n3 }));
        });
      }(n2);
    });
  }
  function en(e) {
    !function(e2) {
      e2.onResponse = function(e3) {
        N(C, e3);
      }, e2.offResponse = function(e3) {
        q(C, e3);
      };
    }(e), function(e2) {
      e2.onNeedLogin = function(e3) {
        N(E, e3);
      }, e2.offNeedLogin = function(e3) {
        q(E, e3);
      }, $t && (k("uni-cloud-status").needLoginInit || (k("uni-cloud-status").needLoginInit = true, $().then(() => {
        Qt.call(e2);
      }), Ht && Zt.call(e2)));
    }(e), function(e2) {
      e2.onRefreshToken = function(e3) {
        N(R, e3);
      }, e2.offRefreshToken = function(e3) {
        q(R, e3);
      };
    }(e);
  }
  let tn;
  const nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", sn = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
  function on() {
    const e = it().token || "", t2 = e.split(".");
    if (!e || t2.length !== 3)
      return { uid: null, role: [], permission: [], tokenExpired: 0 };
    let n2;
    try {
      n2 = JSON.parse((s2 = t2[1], decodeURIComponent(tn(s2).split("").map(function(e2) {
        return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
      }).join(""))));
    } catch (e2) {
      throw new Error("\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u51FA\u9519\uFF0C\u8BE6\u7EC6\u9519\u8BEF\u4FE1\u606F\u4E3A\uFF1A" + e2.message);
    }
    var s2;
    return n2.tokenExpired = 1e3 * n2.exp, delete n2.exp, delete n2.iat, n2;
  }
  tn = typeof atob != "function" ? function(e) {
    if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !sn.test(e))
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    var t2;
    e += "==".slice(2 - (3 & e.length));
    for (var n2, s2, o2 = "", r2 = 0; r2 < e.length; )
      t2 = nn.indexOf(e.charAt(r2++)) << 18 | nn.indexOf(e.charAt(r2++)) << 12 | (n2 = nn.indexOf(e.charAt(r2++))) << 6 | (s2 = nn.indexOf(e.charAt(r2++))), o2 += n2 === 64 ? String.fromCharCode(t2 >> 16 & 255) : s2 === 64 ? String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255) : String.fromCharCode(t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2);
    return o2;
  } : atob;
  var rn = s(function(e, t2) {
    Object.defineProperty(t2, "__esModule", { value: true });
    const n2 = "chooseAndUploadFile:ok", s2 = "chooseAndUploadFile:fail";
    function o2(e2, t3) {
      return e2.tempFiles.forEach((e3, n3) => {
        e3.name || (e3.name = e3.path.substring(e3.path.lastIndexOf("/") + 1)), t3 && (e3.fileType = t3), e3.cloudPath = Date.now() + "_" + n3 + e3.name.substring(e3.name.lastIndexOf("."));
      }), e2.tempFilePaths || (e2.tempFilePaths = e2.tempFiles.map((e3) => e3.path)), e2;
    }
    function r2(e2, t3, { onChooseFile: s3, onUploadProgress: o3 }) {
      return t3.then((e3) => {
        if (s3) {
          const t4 = s3(e3);
          if (t4 !== void 0)
            return Promise.resolve(t4).then((t5) => t5 === void 0 ? e3 : t5);
        }
        return e3;
      }).then((t4) => t4 === false ? { errMsg: n2, tempFilePaths: [], tempFiles: [] } : function(e3, t5, s4 = 5, o4) {
        (t5 = Object.assign({}, t5)).errMsg = n2;
        const r3 = t5.tempFiles, i2 = r3.length;
        let a2 = 0;
        return new Promise((n3) => {
          for (; a2 < s4; )
            c2();
          function c2() {
            const s5 = a2++;
            if (s5 >= i2)
              return void (!r3.find((e4) => !e4.url && !e4.errMsg) && n3(t5));
            const u2 = r3[s5];
            e3.uploadFile({ filePath: u2.path, cloudPath: u2.cloudPath, fileType: u2.fileType, onUploadProgress(e4) {
              e4.index = s5, e4.tempFile = u2, e4.tempFilePath = u2.path, o4 && o4(e4);
            } }).then((e4) => {
              u2.url = e4.fileID, s5 < i2 && c2();
            }).catch((e4) => {
              u2.errMsg = e4.errMsg || e4.message, s5 < i2 && c2();
            });
          }
        });
      }(e2, t4, 5, o3));
    }
    t2.initChooseAndUploadFile = function(e2) {
      return function(t3 = { type: "all" }) {
        return t3.type === "image" ? r2(e2, function(e3) {
          const { count: t4, sizeType: n3, sourceType: r3 = ["album", "camera"], extension: i2 } = e3;
          return new Promise((e4, a2) => {
            uni.chooseImage({ count: t4, sizeType: n3, sourceType: r3, extension: i2, success(t5) {
              e4(o2(t5, "image"));
            }, fail(e5) {
              a2({ errMsg: e5.errMsg.replace("chooseImage:fail", s2) });
            } });
          });
        }(t3), t3) : t3.type === "video" ? r2(e2, function(e3) {
          const { camera: t4, compressed: n3, maxDuration: r3, sourceType: i2 = ["album", "camera"], extension: a2 } = e3;
          return new Promise((e4, c2) => {
            uni.chooseVideo({ camera: t4, compressed: n3, maxDuration: r3, sourceType: i2, extension: a2, success(t5) {
              const { tempFilePath: n4, duration: s3, size: r4, height: i3, width: a3 } = t5;
              e4(o2({ errMsg: "chooseVideo:ok", tempFilePaths: [n4], tempFiles: [{ name: t5.tempFile && t5.tempFile.name || "", path: n4, size: r4, type: t5.tempFile && t5.tempFile.type || "", width: a3, height: i3, duration: s3, fileType: "video", cloudPath: "" }] }, "video"));
            }, fail(e5) {
              c2({ errMsg: e5.errMsg.replace("chooseVideo:fail", s2) });
            } });
          });
        }(t3), t3) : r2(e2, function(e3) {
          const { count: t4, extension: n3 } = e3;
          return new Promise((e4, r3) => {
            let i2 = uni.chooseFile;
            if (typeof wx != "undefined" && typeof wx.chooseMessageFile == "function" && (i2 = wx.chooseMessageFile), typeof i2 != "function")
              return r3({ errMsg: s2 + " \u8BF7\u6307\u5B9A type \u7C7B\u578B\uFF0C\u8BE5\u5E73\u53F0\u4EC5\u652F\u6301\u9009\u62E9 image \u6216 video\u3002" });
            i2({ type: "all", count: t4, extension: n3, success(t5) {
              e4(o2(t5));
            }, fail(e5) {
              r3({ errMsg: e5.errMsg.replace("chooseFile:fail", s2) });
            } });
          });
        }(t3), t3);
      };
    };
  }), an = n(rn);
  const cn = "manual";
  function un(e) {
    return { props: { localdata: { type: Array, default: () => [] }, options: { type: [Object, Array], default: () => ({}) }, spaceInfo: { type: Object, default: () => ({}) }, collection: { type: [String, Array], default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: false }, gettree: { type: [Boolean, String], default: false }, gettreepath: { type: [Boolean, String], default: false }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: false }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: false } }, data: () => ({ mixinDatacomLoading: false, mixinDatacomHasMore: false, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} }), created() {
      this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(() => {
        var e2 = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach((t2) => {
          e2.push(this[t2]);
        }), e2;
      }, (e2, t2) => {
        if (this.loadtime === cn)
          return;
        let n2 = false;
        const s2 = [];
        for (let o2 = 2; o2 < e2.length; o2++)
          e2[o2] !== t2[o2] && (s2.push(e2[o2]), n2 = true);
        e2[0] !== t2[0] && (this.mixinDatacomPage.current = this.pageCurrent), this.mixinDatacomPage.size = this.pageSize, this.onMixinDatacomPropsChange(n2, s2);
      });
    }, methods: { onMixinDatacomPropsChange(e2, t2) {
    }, mixinDatacomEasyGet({ getone: e2 = false, success: t2, fail: n2 } = {}) {
      this.mixinDatacomLoading || (this.mixinDatacomLoading = true, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then((n3) => {
        this.mixinDatacomLoading = false;
        const { data: s2, count: o2 } = n3.result;
        this.getcount && (this.mixinDatacomPage.count = o2), this.mixinDatacomHasMore = s2.length < this.pageSize;
        const r2 = e2 ? s2.length ? s2[0] : void 0 : s2;
        this.mixinDatacomResData = r2, t2 && t2(r2);
      }).catch((e3) => {
        this.mixinDatacomLoading = false, this.mixinDatacomErrorMessage = e3, n2 && n2(e3);
      }));
    }, mixinDatacomGet(t2 = {}) {
      let n2 = e.database(this.spaceInfo);
      const s2 = t2.action || this.action;
      s2 && (n2 = n2.action(s2));
      const o2 = t2.collection || this.collection;
      n2 = Array.isArray(o2) ? n2.collection(...o2) : n2.collection(o2);
      const r2 = t2.where || this.where;
      r2 && Object.keys(r2).length && (n2 = n2.where(r2));
      const i2 = t2.field || this.field;
      i2 && (n2 = n2.field(i2));
      const a2 = t2.foreignKey || this.foreignKey;
      a2 && (n2 = n2.foreignKey(a2));
      const c2 = t2.groupby || this.groupby;
      c2 && (n2 = n2.groupBy(c2));
      const u2 = t2.groupField || this.groupField;
      u2 && (n2 = n2.groupField(u2));
      (t2.distinct !== void 0 ? t2.distinct : this.distinct) === true && (n2 = n2.distinct());
      const l2 = t2.orderby || this.orderby;
      l2 && (n2 = n2.orderBy(l2));
      const h2 = t2.pageCurrent !== void 0 ? t2.pageCurrent : this.mixinDatacomPage.current, d2 = t2.pageSize !== void 0 ? t2.pageSize : this.mixinDatacomPage.size, f2 = t2.getcount !== void 0 ? t2.getcount : this.getcount, g2 = t2.gettree !== void 0 ? t2.gettree : this.gettree, p2 = t2.gettreepath !== void 0 ? t2.gettreepath : this.gettreepath, m2 = { getCount: f2 }, y = { limitLevel: t2.limitlevel !== void 0 ? t2.limitlevel : this.limitlevel, startWith: t2.startwith !== void 0 ? t2.startwith : this.startwith };
      return g2 && (m2.getTree = y), p2 && (m2.getTreePath = y), n2 = n2.skip(d2 * (h2 - 1)).limit(d2).get(m2), n2;
    } } };
  }
  function ln(e) {
    return function(t2, n2 = {}) {
      n2 = function(e2, t3 = {}) {
        return e2.customUI = t3.customUI || e2.customUI, Object.assign(e2.loadingOptions, t3.loadingOptions), Object.assign(e2.errorOptions, t3.errorOptions), typeof t3.secretMethods == "object" && (e2.secretMethods = t3.secretMethods), e2;
      }({ customUI: false, loadingOptions: { title: "\u52A0\u8F7D\u4E2D...", mask: true }, errorOptions: { type: "modal", retry: false } }, n2);
      const { customUI: s2, loadingOptions: o2, errorOptions: r2 } = n2, i2 = !s2;
      return new Proxy({}, { get: (s3, c2) => function({ fn: e2, interceptorName: t3, getCallbackArgs: n3 } = {}) {
        return async function(...s4) {
          const o3 = n3 ? n3({ params: s4 }) : {};
          let r3, i3;
          try {
            return await A(I(t3, "invoke"), __spreadValues({}, o3)), r3 = await e2(...s4), await A(I(t3, "success"), __spreadProps(__spreadValues({}, o3), { result: r3 })), r3;
          } catch (e3) {
            throw i3 = e3, await A(I(t3, "fail"), __spreadProps(__spreadValues({}, o3), { error: i3 })), i3;
          } finally {
            await A(I(t3, "complete"), i3 ? __spreadProps(__spreadValues({}, o3), { error: i3 }) : __spreadProps(__spreadValues({}, o3), { result: r3 }));
          }
        };
      }({ fn: async function s4(...u2) {
        let l2;
        i2 && uni.showLoading({ title: o2.title, mask: o2.mask });
        const h2 = { name: t2, type: a, data: { method: c2, params: u2 } };
        typeof n2.secretMethods == "object" && function(e2, t3) {
          const n3 = t3.data.method, s5 = e2.secretMethods[n3];
          s5 && (t3.secret = s5);
        }(n2, h2);
        try {
          l2 = await e.callFunction(h2);
        } catch (e2) {
          l2 = { result: e2 };
        }
        const { errCode: d2, errMsg: f2, newToken: g2 } = l2.result || {};
        if (i2 && uni.hideLoading(), g2 && g2.token && g2.tokenExpired && (at(g2), F(R, __spreadValues({}, g2))), d2) {
          if (i2)
            if (r2.type === "toast")
              uni.showToast({ title: f2, icon: "none" });
            else {
              if (r2.type !== "modal")
                throw new Error(`Invalid errorOptions.type: ${r2.type}`);
              {
                const { confirm: e3 } = await async function({ title: e4, content: t3, showCancel: n3, cancelText: s5, confirmText: o3 } = {}) {
                  return new Promise((r3, i3) => {
                    uni.showModal({ title: e4, content: t3, showCancel: n3, cancelText: s5, confirmText: o3, success(e5) {
                      r3(e5);
                    }, fail() {
                      r3({ confirm: false, cancel: true });
                    } });
                  });
                }({ title: "\u63D0\u793A", content: f2, showCancel: r2.retry, cancelText: "\u53D6\u6D88", confirmText: r2.retry ? "\u91CD\u8BD5" : "\u786E\u5B9A" });
                if (r2.retry && e3)
                  return s4(...u2);
              }
            }
          const e2 = new B({ code: d2, message: f2, requestId: l2.requestId });
          throw e2.detail = l2.result, F(C, { type: L, content: e2 }), e2;
        }
        return F(C, { type: L, content: l2.result }), l2.result;
      }, interceptorName: "callObject", getCallbackArgs: function({ params: e2 } = {}) {
        return { objectName: t2, methodName: c2, params: e2 };
      } }) });
    };
  }
  async function hn(e, t2) {
    const n2 = `http://${e}:${t2}/system/ping`;
    try {
      const e2 = await (s2 = { url: n2, timeout: 500 }, new Promise((e3, t3) => {
        V.request(__spreadProps(__spreadValues({}, s2), { success(t4) {
          e3(t4);
        }, fail(e4) {
          t3(e4);
        } }));
      }));
      return !(!e2.data || e2.data.code !== 0);
    } catch (e2) {
      return false;
    }
    var s2;
  }
  function dn(e) {
    if (e.initUniCloudStatus && e.initUniCloudStatus !== "rejected")
      return;
    let t2 = Promise.resolve();
    var n2;
    n2 = 1, t2 = new Promise((e2, t3) => {
      setTimeout(() => {
        e2();
      }, n2);
    }), e.isReady = false, e.isDefault = false;
    const s2 = e.auth();
    e.initUniCloudStatus = "pending", e.initUniCloud = t2.then(() => s2.getLoginState()).then((e2) => e2 ? Promise.resolve() : s2.signInAnonymously()).then(() => {
      if (g === "app") {
        const { osName: e2, osVersion: t3 } = uni.getSystemInfoSync();
        e2 === "ios" && function(e3) {
          if (!e3 || typeof e3 != "string")
            return 0;
          const t4 = e3.match(/^(\d+)./);
          return t4 && t4[1] ? parseInt(t4[1]) : 0;
        }(t3) >= 14 && console.warn("iOS 14\u53CA\u4EE5\u4E0A\u7248\u672C\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u9700\u8981\u5141\u8BB8\u5BA2\u6237\u7AEF\u67E5\u627E\u5E76\u8FDE\u63A5\u5230\u672C\u5730\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF08\u4EC5\u5F00\u53D1\u6A21\u5F0F\u751F\u6548\uFF0C\u53D1\u884C\u6A21\u5F0F\u4F1A\u8FDE\u63A5uniCloud\u4E91\u7AEF\u670D\u52A1\uFF09");
      }
      if (e.__dev__.debugInfo) {
        const { address: t3, servePort: n3 } = e.__dev__.debugInfo;
        return async function(e2, t4) {
          let n4;
          for (let s3 = 0; s3 < e2.length; s3++) {
            const o2 = e2[s3];
            if (await hn(o2, t4)) {
              n4 = o2;
              break;
            }
          }
          return { address: n4, port: t4 };
        }(t3, n3);
      }
    }).then(({ address: t3, port: n3 } = {}) => {
      const s3 = console[g === "app" ? "error" : "warn"];
      if (t3)
        e.__dev__.localAddress = t3, e.__dev__.localPort = n3;
      else if (e.__dev__.debugInfo) {
        let t4 = "";
        e.__dev__.debugInfo.initialLaunchType === "remote" ? (e.__dev__.debugInfo.forceRemote = true, t4 = "\u5F53\u524D\u5BA2\u6237\u7AEF\u548CHBuilderX\u4E0D\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\uFF08\u6216\u5176\u4ED6\u7F51\u7EDC\u539F\u56E0\u65E0\u6CD5\u8FDE\u63A5HBuilderX\uFF09\uFF0CuniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u4E0D\u5BF9\u5F53\u524D\u5BA2\u6237\u7AEF\u751F\u6548\u3002\n- \u5982\u679C\u4E0D\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u76F4\u63A5\u5FFD\u7565\u6B64\u4FE1\u606F\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs") : t4 = "\u65E0\u6CD5\u8FDE\u63A5uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u5F53\u524D\u5BA2\u6237\u7AEF\u662F\u5426\u4E0E\u4E3B\u673A\u5728\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u3002\n- \u5982\u9700\u4F7F\u7528uniCloud\u672C\u5730\u8C03\u8BD5\u670D\u52A1\uFF0C\u8BF7\u5C06\u5BA2\u6237\u7AEF\u4E0E\u4E3B\u673A\u8FDE\u63A5\u5230\u540C\u4E00\u5C40\u57DF\u7F51\u4E0B\u5E76\u91CD\u65B0\u8FD0\u884C\u5230\u5BA2\u6237\u7AEF\u3002\n- \u5982\u679C\u5728HBuilderX\u5F00\u542F\u7684\u72B6\u6001\u4E0B\u5207\u6362\u8FC7\u7F51\u7EDC\u73AF\u5883\uFF0C\u8BF7\u91CD\u542FHBuilderX\u540E\u518D\u8BD5\n- \u68C0\u67E5\u7CFB\u7EDF\u9632\u706B\u5899\u662F\u5426\u62E6\u622A\u4E86HBuilderX\u81EA\u5E26\u7684nodejs", g === "web" && (t4 += "\n- \u90E8\u5206\u6D4F\u89C8\u5668\u5F00\u542F\u8282\u6D41\u6A21\u5F0F\u4E4B\u540E\u8BBF\u95EE\u672C\u5730\u5730\u5740\u53D7\u9650\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u542F\u7528\u4E86\u8282\u6D41\u6A21\u5F0F"), g.indexOf("mp-") === 0 && (t4 += "\n- \u5C0F\u7A0B\u5E8F\u4E2D\u5982\u4F55\u4F7F\u7528uniCloud\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), s3(t4);
      }
    }).then(() => {
      ct(), e.isReady = true, e.initUniCloudStatus = "fulfilled";
    }).catch((t3) => {
      console.error(t3), e.initUniCloudStatus = "rejected";
    });
  }
  const fn = { tcb: ot, tencent: ot, aliyun: Q, private: lt };
  let gn = new class {
    init(e) {
      let t2 = {};
      const n2 = fn[e.provider];
      if (!n2)
        throw new Error("\u672A\u63D0\u4F9B\u6B63\u786E\u7684provider\u53C2\u6570");
      t2 = n2.init(e), t2.__dev__ = {}, t2.__dev__.debugLog = g === "web" && navigator.userAgent.indexOf("HBuilderX") > 0 || g === "app";
      const s2 = p;
      s2 && !s2.code && (t2.__dev__.debugInfo = s2), dn(t2), t2.reInit = function() {
        dn(this);
      }, _t(t2), function(e2) {
        const t3 = e2.uploadFile;
        e2.uploadFile = function(e3) {
          return t3.call(this, e3);
        };
      }(t2), Et(t2), function(e2) {
        e2.getCurrentUserInfo = on, e2.chooseAndUploadFile = an.initChooseAndUploadFile(e2), Object.assign(e2, { get mixinDatacom() {
          return un(e2);
        } }), e2.importObject = ln(e2);
      }(t2);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach((e2) => {
        if (!t2[e2])
          return;
        const n3 = t2[e2];
        t2[e2] = function() {
          return t2.reInit(), n3.apply(t2, Array.from(arguments));
        }, t2[e2] = K(t2[e2], e2).bind(t2);
      }), t2.init = this.init, t2;
    }
  }();
  (() => {
    const e = m;
    let t2 = {};
    if (e && e.length === 1)
      t2 = e[0], gn = gn.init(t2), gn.isDefault = true;
    else {
      const t3 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
      let n2;
      n2 = e && e.length > 0 ? "\u5E94\u7528\u6709\u591A\u4E2A\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u901A\u8FC7uniCloud.init\u65B9\u6CD5\u6307\u5B9A\u8981\u4F7F\u7528\u7684\u670D\u52A1\u7A7A\u95F4" : "\u5E94\u7528\u672A\u5173\u8054\u670D\u52A1\u7A7A\u95F4\uFF0C\u8BF7\u5728uniCloud\u76EE\u5F55\u53F3\u952E\u5173\u8054\u670D\u52A1\u7A7A\u95F4", t3.forEach((e2) => {
        gn[e2] = function() {
          return console.error(n2), Promise.reject(new B({ code: "SYS_ERR", message: n2 }));
        };
      });
    }
    Object.assign(gn, { get mixinDatacom() {
      return un(gn);
    } }), en(gn), gn.addInterceptor = S, gn.removeInterceptor = P, gn.interceptObject = b, g === "web" && (window.uniCloud = gn);
  })();
  var pn = gn;
  var dataPicker = {
    props: {
      localdata: {
        type: [Array, Object],
        default() {
          return [];
        }
      },
      spaceInfo: {
        type: Object,
        default() {
          return {};
        }
      },
      collection: {
        type: String,
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: false
      },
      getone: {
        type: [Boolean, String],
        default: false
      },
      gettree: {
        type: [Boolean, String],
        default: false
      },
      manual: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      },
      modelValue: {
        type: [Array, String, Number],
        default() {
          return [];
        }
      },
      preload: {
        type: Boolean,
        default: false
      },
      stepSearh: {
        type: Boolean,
        default: true
      },
      selfField: {
        type: String,
        default: ""
      },
      parentField: {
        type: String,
        default: ""
      },
      multiple: {
        type: Boolean,
        default: false
      },
      map: {
        type: Object,
        default() {
          return {
            text: "text",
            value: "value"
          };
        }
      }
    },
    data() {
      return {
        loading: false,
        errorMessage: "",
        loadMore: {
          contentdown: "",
          contentrefresh: "",
          contentnomore: ""
        },
        dataList: [],
        selected: [],
        selectedIndex: 0,
        page: {
          current: this.pageCurrent,
          size: this.pageSize,
          count: 0
        }
      };
    },
    computed: {
      isLocaldata() {
        return !this.collection.length;
      },
      postField() {
        let fields = [this.field];
        if (this.parentField) {
          fields.push(`${this.parentField} as parent_value`);
        }
        return fields.join(",");
      },
      dataValue() {
        let isModelValue = Array.isArray(this.modelValue) ? this.modelValue.length > 0 : this.modelValue !== null || this.modelValue !== void 0;
        return isModelValue ? this.modelValue : this.value;
      },
      hasValue() {
        if (typeof this.dataValue === "number") {
          return true;
        }
        return this.dataValue != null && this.dataValue.length > 0;
      }
    },
    created() {
      this.$watch(() => {
        var al = [];
        [
          "pageCurrent",
          "pageSize",
          "spaceInfo",
          "value",
          "modelValue",
          "localdata",
          "collection",
          "action",
          "field",
          "orderby",
          "where",
          "getont",
          "getcount",
          "gettree"
        ].forEach((key) => {
          al.push(this[key]);
        });
        return al;
      }, (newValue, oldValue) => {
        for (let i2 = 2; i2 < newValue.length; i2++) {
          if (newValue[i2] != oldValue[i2]) {
            break;
          }
        }
        if (newValue[0] != oldValue[0]) {
          this.page.current = this.pageCurrent;
        }
        this.page.size = this.pageSize;
        this.onPropsChange();
      });
      this._treeData = [];
    },
    methods: {
      onPropsChange() {
        this._treeData = [];
      },
      getCommand(options = {}) {
        let db = pn.database(this.spaceInfo);
        const action = options.action || this.action;
        if (action) {
          db = db.action(action);
        }
        const collection = options.collection || this.collection;
        db = db.collection(collection);
        const where = options.where || this.where;
        if (!(!where || !Object.keys(where).length)) {
          db = db.where(where);
        }
        const field = options.field || this.field;
        if (field) {
          db = db.field(field);
        }
        const orderby = options.orderby || this.orderby;
        if (orderby) {
          db = db.orderBy(orderby);
        }
        const current = options.pageCurrent !== void 0 ? options.pageCurrent : this.page.current;
        const size = options.pageSize !== void 0 ? options.pageSize : this.page.size;
        const getCount = options.getcount !== void 0 ? options.getcount : this.getcount;
        const getTree = options.gettree !== void 0 ? options.gettree : this.gettree;
        const getOptions = {
          getCount,
          getTree
        };
        if (options.getTreePath) {
          getOptions.getTreePath = options.getTreePath;
        }
        db = db.skip(size * (current - 1)).limit(size).get(getOptions);
        return db;
      },
      getNodeData(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          where: this._pathWhere()
        }).then((res) => {
          this.loading = false;
          this.selected = res.result.data;
          callback && callback();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      getTreePath(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          getTreePath: {
            startWith: `${this.selfField}=='${this.dataValue}'`
          }
        }).then((res) => {
          this.loading = false;
          let treePath = [];
          this._extractTreePath(res.result.data, treePath);
          this.selected = treePath;
          callback && callback();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      loadData() {
        if (this.isLocaldata) {
          this._processLocalData();
          return;
        }
        if (this.dataValue != null) {
          this._loadNodeData((data) => {
            this._treeData = data;
            this._updateBindData();
            this._updateSelected();
          });
          return;
        }
        if (this.stepSearh) {
          this._loadNodeData((data) => {
            this._treeData = data;
            this._updateBindData();
          });
        } else {
          this._loadAllData((data) => {
            this._treeData = [];
            this._extractTree(data, this._treeData, null);
            this._updateBindData();
          });
        }
      },
      _loadAllData(callback) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          gettree: true,
          startwith: `${this.selfField}=='${this.dataValue}'`
        }).then((res) => {
          this.loading = false;
          callback(res.result.data);
          this.onDataChange();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      _loadNodeData(callback, pw) {
        if (this.loading) {
          return;
        }
        this.loading = true;
        this.getCommand({
          field: this.postField,
          where: pw || this._postWhere(),
          pageSize: 500
        }).then((res) => {
          this.loading = false;
          callback(res.result.data);
          this.onDataChange();
        }).catch((err) => {
          this.loading = false;
          this.errorMessage = err;
        });
      },
      _pathWhere() {
        let result = [];
        let where_field = this._getParentNameByField();
        if (where_field) {
          result.push(`${where_field} == '${this.dataValue}'`);
        }
        if (this.where) {
          return `(${this.where}) && (${result.join(" || ")})`;
        }
        return result.join(" || ");
      },
      _postWhere() {
        let result = [];
        let selected = this.selected;
        let parentField = this.parentField;
        if (parentField) {
          result.push(`${parentField} == null || ${parentField} == ""`);
        }
        if (selected.length) {
          for (var i2 = 0; i2 < selected.length - 1; i2++) {
            result.push(`${parentField} == '${selected[i2].value}'`);
          }
        }
        let where = [];
        if (this.where) {
          where.push(`(${this.where})`);
        }
        if (result.length) {
          where.push(`(${result.join(" || ")})`);
        }
        return where.join(" && ");
      },
      _nodeWhere() {
        let result = [];
        let selected = this.selected;
        if (selected.length) {
          result.push(`${this.parentField} == '${selected[selected.length - 1].value}'`);
        }
        if (this.where) {
          return `(${this.where}) && (${result.join(" || ")})`;
        }
        return result.join(" || ");
      },
      _getParentNameByField() {
        const fields = this.field.split(",");
        let where_field = null;
        for (let i2 = 0; i2 < fields.length; i2++) {
          const items = fields[i2].split("as");
          if (items.length < 2) {
            continue;
          }
          if (items[1].trim() === "value") {
            where_field = items[0].trim();
            break;
          }
        }
        return where_field;
      },
      _isTreeView() {
        return this.parentField && this.selfField;
      },
      _updateSelected() {
        var dl = this.dataList;
        var sl = this.selected;
        let textField = this.map.text;
        let valueField = this.map.value;
        for (var i2 = 0; i2 < sl.length; i2++) {
          var value = sl[i2].value;
          var dl2 = dl[i2];
          for (var j2 = 0; j2 < dl2.length; j2++) {
            var item2 = dl2[j2];
            if (item2[valueField] === value) {
              sl[i2].text = item2[textField];
              break;
            }
          }
        }
      },
      _updateBindData(node) {
        const {
          dataList,
          hasNodes
        } = this._filterData(this._treeData, this.selected);
        let isleaf = this._stepSearh === false && !hasNodes;
        if (node) {
          node.isleaf = isleaf;
        }
        this.dataList = dataList;
        this.selectedIndex = dataList.length - 1;
        if (!isleaf && this.selected.length < dataList.length) {
          this.selected.push({
            value: null,
            text: "\u8BF7\u9009\u62E9"
          });
        }
        return {
          isleaf,
          hasNodes
        };
      },
      _filterData(data, paths) {
        let dataList = [];
        let hasNodes = true;
        dataList.push(data.filter((item) => {
          return item.parent_value === null || item.parent_value === void 0 || item.parent_value === "";
        }));
        for (let i2 = 0; i2 < paths.length; i2++) {
          var value = paths[i2].value;
          var nodes = data.filter((item) => {
            return item.parent_value === value;
          });
          if (nodes.length) {
            dataList.push(nodes);
          } else {
            hasNodes = false;
          }
        }
        return {
          dataList,
          hasNodes
        };
      },
      _extractTree(nodes, result, parent_value) {
        let valueField = this.map.value;
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let child = {};
          for (let key in node) {
            if (key !== "children") {
              child[key] = node[key];
            }
          }
          if (parent_value !== null && parent_value !== void 0 && parent_value !== "") {
            child.parent_value = parent_value;
          }
          result.push(child);
          let children = node.children;
          if (children) {
            this._extractTree(children, result, node[valueField]);
          }
        }
      },
      _extractTreePath(nodes, result) {
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let child = {};
          for (let key in node) {
            if (key !== "children") {
              child[key] = node[key];
            }
          }
          result.push(child);
          let children = node.children;
          if (children) {
            this._extractTreePath(children, result);
          }
        }
      },
      _findNodePath(key, nodes, path = []) {
        let textField = this.map.text;
        let valueField = this.map.value;
        for (let i2 = 0; i2 < nodes.length; i2++) {
          let node = nodes[i2];
          let children = node.children;
          let text = node[textField];
          let value = node[valueField];
          path.push({
            value,
            text
          });
          if (value === key) {
            return path;
          }
          if (children) {
            const p2 = this._findNodePath(key, children, path);
            if (p2.length) {
              return p2;
            }
          }
          path.pop();
        }
        return [];
      },
      _processLocalData() {
        this._treeData = [];
        this._extractTree(this.localdata, this._treeData);
        var inputValue = this.dataValue;
        if (inputValue === void 0) {
          return;
        }
        if (Array.isArray(inputValue)) {
          inputValue = inputValue[inputValue.length - 1];
          if (typeof inputValue === "object" && inputValue[this.map.value]) {
            inputValue = inputValue[this.map.value];
          }
        }
        this.selected = this._findNodePath(inputValue, this.localdata);
      }
    }
  };
  const _sfc_main$c = {
    name: "UniDataPickerView",
    emits: ["nodeclick", "change", "datachange", "update:modelValue"],
    mixins: [dataPicker],
    props: {
      managedMode: {
        type: Boolean,
        default: false
      },
      ellipsis: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {};
    },
    created() {
      if (this.managedMode) {
        return;
      }
      this.$nextTick(() => {
        this.load();
      });
    },
    methods: {
      onPropsChange() {
        this._treeData = [];
        this.selectedIndex = 0;
        this.load();
      },
      load() {
        if (this.isLocaldata) {
          this.loadData();
        } else if (this.dataValue.length) {
          this.getTreePath((res) => {
            this.loadData();
          });
        }
      },
      handleSelect(index) {
        this.selectedIndex = index;
      },
      handleNodeClick(item, i2, j2) {
        if (item.disable) {
          return;
        }
        const node = this.dataList[i2][j2];
        const text = node[this.map.text];
        const value = node[this.map.value];
        if (i2 < this.selected.length - 1) {
          this.selected.splice(i2, this.selected.length - i2);
          this.selected.push({
            text,
            value
          });
        } else if (i2 === this.selected.length - 1) {
          this.selected.splice(i2, 1, {
            text,
            value
          });
        }
        if (node.isleaf) {
          this.onSelectedChange(node, node.isleaf);
          return;
        }
        const {
          isleaf,
          hasNodes
        } = this._updateBindData();
        if (!this._isTreeView() && !hasNodes) {
          this.onSelectedChange(node, true);
          return;
        }
        if (this.isLocaldata && (!hasNodes || isleaf)) {
          this.onSelectedChange(node, true);
          return;
        }
        if (!isleaf && !hasNodes) {
          this._loadNodeData((data) => {
            if (!data.length) {
              node.isleaf = true;
            } else {
              this._treeData.push(...data);
              this._updateBindData(node);
            }
            this.onSelectedChange(node, node.isleaf);
          }, this._nodeWhere());
          return;
        }
        this.onSelectedChange(node, false);
      },
      updateData(data) {
        this._treeData = data.treeData;
        this.selected = data.selected;
        if (!this._treeData.length) {
          this.loadData();
        } else {
          this._updateBindData();
        }
      },
      onDataChange() {
        this.$emit("datachange");
      },
      onSelectedChange(node, isleaf) {
        if (isleaf) {
          this._dispatchEvent();
        }
        if (node) {
          this.$emit("nodeclick", node);
        }
      },
      _dispatchEvent() {
        this.$emit("change", this.selected.slice(0));
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-data-pickerview" }, [
      vue.createElementVNode("scroll-view", {
        class: "selected-area",
        "scroll-x": "true",
        "scroll-y": "false",
        "show-scrollbar": false
      }, [
        vue.createElementVNode("view", { class: "selected-list" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.selected, (item, index) => {
            return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
              item.text ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: vue.normalizeClass(["selected-item", { "selected-item-active": index == _ctx.selectedIndex, "selected-item-text-overflow": $props.ellipsis }]),
                onClick: ($event) => $options.handleSelect(index)
              }, [
                vue.createElementVNode("text", { class: "" }, vue.toDisplayString(item.text), 1)
              ], 10, ["onClick"])) : vue.createCommentVNode("v-if", true)
            ], 64);
          }), 256))
        ])
      ]),
      vue.createElementVNode("view", { class: "tab-c" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.dataList, (child, i2) => {
          return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
            i2 == _ctx.selectedIndex ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
              class: "list",
              key: i2,
              "scroll-y": true
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(child, (item, j2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["item", { "is-disabled": !!item.disable }]),
                  onClick: ($event) => $options.handleNodeClick(item, i2, j2)
                }, [
                  vue.createElementVNode("text", { class: "item-text item-text-overflow" }, vue.toDisplayString(item[_ctx.map.text]), 1),
                  _ctx.selected.length > i2 && item[_ctx.map.value] == _ctx.selected[i2].value ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "check"
                  })) : vue.createCommentVNode("v-if", true)
                ], 10, ["onClick"]);
              }), 256))
            ])) : vue.createCommentVNode("v-if", true)
          ], 64);
        }), 256)),
        _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "loading-cover"
        }, [
          vue.createElementVNode("uni-load-more", {
            class: "load-more",
            contentText: _ctx.loadMore,
            status: "loading"
          }, null, 8, ["contentText"])
        ])) : vue.createCommentVNode("v-if", true),
        _ctx.errorMessage ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "error-message"
        }, [
          vue.createElementVNode("text", { class: "error-text" }, vue.toDisplayString(_ctx.errorMessage), 1)
        ])) : vue.createCommentVNode("v-if", true)
      ])
    ]);
  }
  var DataPickerView = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$1], ["__scopeId", "data-v-ac1803ac"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/uni_modules/uni-data-picker/components/uni-data-pickerview/uni-data-pickerview.vue"]]);
  const _sfc_main$b = {
    name: "UniDataPicker",
    emits: ["popupopened", "popupclosed", "nodeclick", "input", "change", "update:modelValue"],
    mixins: [dataPicker],
    components: {
      DataPickerView
    },
    props: {
      options: {
        type: [Object, Array],
        default() {
          return {};
        }
      },
      popupTitle: {
        type: String,
        default: "\u8BF7\u9009\u62E9"
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u9009\u62E9"
      },
      heightMobile: {
        type: String,
        default: ""
      },
      readonly: {
        type: Boolean,
        default: false
      },
      clearIcon: {
        type: Boolean,
        default: true
      },
      border: {
        type: Boolean,
        default: true
      },
      split: {
        type: String,
        default: "/"
      },
      ellipsis: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isOpened: false,
        inputSelected: []
      };
    },
    created() {
      this.form = this.getForm("uniForms");
      this.formItem = this.getForm("uniFormsItem");
      if (this.formItem) {
        if (this.formItem.name) {
          this.rename = this.formItem.name;
          this.form.inputChildrens.push(this);
        }
      }
      this.$nextTick(() => {
        this.load();
      });
    },
    methods: {
      clear() {
        this.inputSelected.splice(0);
        this._dispatchEvent([]);
      },
      onPropsChange() {
        this._treeData = [];
        this.selectedIndex = 0;
        this.load();
      },
      load() {
        if (this.readonly) {
          this._processReadonly(this.localdata, this.dataValue);
          return;
        }
        if (this.isLocaldata) {
          this.loadData();
          this.inputSelected = this.selected.slice(0);
        } else if (!this.parentField && !this.selfField && this.hasValue) {
          this.getNodeData(() => {
            this.inputSelected = this.selected.slice(0);
          });
        } else if (this.hasValue) {
          this.getTreePath(() => {
            this.inputSelected = this.selected.slice(0);
          });
        }
      },
      getForm(name = "uniForms") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      show() {
        this.isOpened = true;
        setTimeout(() => {
          this.$refs.pickerView.updateData({
            treeData: this._treeData,
            selected: this.selected,
            selectedIndex: this.selectedIndex
          });
        }, 200);
        this.$emit("popupopened");
      },
      hide() {
        this.isOpened = false;
        this.$emit("popupclosed");
      },
      handleInput() {
        if (this.readonly) {
          return;
        }
        this.show();
      },
      handleClose(e) {
        this.hide();
      },
      onnodeclick(e) {
        this.$emit("nodeclick", e);
      },
      ondatachange(e) {
        this._treeData = this.$refs.pickerView._treeData;
      },
      onchange(e) {
        this.hide();
        this.$nextTick(() => {
          this.inputSelected = e;
        });
        this._dispatchEvent(e);
      },
      _processReadonly(dataList, value) {
        var isTree = dataList.findIndex((item2) => {
          return item2.children;
        });
        if (isTree > -1) {
          let inputValue;
          if (Array.isArray(value)) {
            inputValue = value[value.length - 1];
            if (typeof inputValue === "object" && inputValue.value) {
              inputValue = inputValue.value;
            }
          } else {
            inputValue = value;
          }
          this.inputSelected = this._findNodePath(inputValue, this.localdata);
          return;
        }
        if (!this.hasValue) {
          this.inputSelected = [];
          return;
        }
        let result = [];
        for (let i2 = 0; i2 < value.length; i2++) {
          var val = value[i2];
          var item = dataList.find((v2) => {
            return v2.value == val;
          });
          if (item) {
            result.push(item);
          }
        }
        if (result.length) {
          this.inputSelected = result;
        }
      },
      _filterForArray(data, valueArray) {
        var result = [];
        for (let i2 = 0; i2 < valueArray.length; i2++) {
          var value = valueArray[i2];
          var found = data.find((item) => {
            return item.value == value;
          });
          if (found) {
            result.push(found);
          }
        }
        return result;
      },
      _dispatchEvent(selected) {
        let item = {};
        if (selected.length) {
          var value = new Array(selected.length);
          for (var i2 = 0; i2 < selected.length; i2++) {
            value[i2] = selected[i2].value;
          }
          item = selected[selected.length - 1];
        } else {
          item.value = "";
        }
        if (this.formItem) {
          this.formItem.setValue(item.value);
        }
        this.$emit("input", item.value);
        this.$emit("update:modelValue", item.value);
        this.$emit("change", {
          detail: {
            value: selected
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_data_picker_view = vue.resolveComponent("data-picker-view");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-data-tree" }, [
      vue.createElementVNode("view", {
        class: "uni-data-tree-input",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.handleInput && $options.handleInput(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {
          options: $props.options,
          data: $data.inputSelected,
          error: _ctx.errorMessage
        }, () => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["input-value", { "input-value-border": $props.border }])
          }, [
            _ctx.errorMessage ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "selected-area error-text"
            }, vue.toDisplayString(_ctx.errorMessage), 1)) : _ctx.loading && !$data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "selected-area"
            }, [
              vue.createElementVNode("uni-load-more", {
                class: "load-more",
                contentText: _ctx.loadMore,
                status: "loading"
              }, null, 8, ["contentText"])
            ])) : $data.inputSelected.length ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
              key: 2,
              class: "selected-area",
              "scroll-x": "true"
            }, [
              vue.createElementVNode("view", { class: "selected-list" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.inputSelected, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "selected-item",
                    key: index
                  }, [
                    vue.createElementVNode("text", { class: "text-color" }, vue.toDisplayString(item.text), 1),
                    index < $data.inputSelected.length - 1 ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "input-split-line"
                    }, vue.toDisplayString($props.split), 1)) : vue.createCommentVNode("v-if", true)
                  ]);
                }), 128))
              ])
            ])) : (vue.openBlock(), vue.createElementBlock("text", {
              key: 3,
              class: "selected-area placeholder"
            }, vue.toDisplayString($props.placeholder), 1)),
            $props.clearIcon && !$props.readonly && $data.inputSelected.length ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 4,
              class: "icon-clear",
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
            }, [
              vue.createElementVNode("uni-icons", {
                type: "clear",
                color: "#c0c4cc",
                size: "24"
              })
            ])) : vue.createCommentVNode("v-if", true),
            (!$props.clearIcon || !$data.inputSelected.length) && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 5,
              class: "arrow-area"
            }, [
              vue.createElementVNode("view", { class: "input-arrow" })
            ])) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], true)
      ]),
      $data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-data-tree-cover",
        onClick: _cache[2] || (_cache[2] = (...args) => $options.handleClose && $options.handleClose(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.isOpened ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-data-tree-dialog"
      }, [
        vue.createElementVNode("view", { class: "uni-popper__arrow" }),
        vue.createElementVNode("view", { class: "dialog-caption" }, [
          vue.createElementVNode("view", { class: "title-area" }, [
            vue.createElementVNode("text", { class: "dialog-title" }, vue.toDisplayString($props.popupTitle), 1)
          ]),
          vue.createElementVNode("view", {
            class: "dialog-close",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.handleClose && $options.handleClose(...args))
          }, [
            vue.createElementVNode("view", {
              class: "dialog-close-plus",
              "data-id": "close"
            }),
            vue.createElementVNode("view", {
              class: "dialog-close-plus dialog-close-rotate",
              "data-id": "close"
            })
          ])
        ]),
        vue.createVNode(_component_data_picker_view, {
          class: "picker-view",
          ref: "pickerView",
          modelValue: _ctx.dataValue,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dataValue = $event),
          localdata: _ctx.localdata,
          preload: _ctx.preload,
          collection: _ctx.collection,
          field: _ctx.field,
          orderby: _ctx.orderby,
          where: _ctx.where,
          "step-searh": _ctx.stepSearh,
          "self-field": _ctx.selfField,
          "parent-field": _ctx.parentField,
          "managed-mode": true,
          map: _ctx.map,
          ellipsis: $props.ellipsis,
          onChange: $options.onchange,
          onDatachange: $options.ondatachange,
          onNodeclick: $options.onnodeclick
        }, null, 8, ["modelValue", "localdata", "preload", "collection", "field", "orderby", "where", "step-searh", "self-field", "parent-field", "map", "ellipsis", "onChange", "onDatachange", "onNodeclick"])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var AddressPicker = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render], ["__scopeId", "data-v-3ed22fe0"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.vue"]]);
  const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
    __name: "add-address",
    setup(__props) {
      const userStore = useUserStore();
      const { userInfo } = userStore;
      const addressStore = useAddressStore();
      const { addressList } = storeToRefs(addressStore);
      const cityList = vue.ref([]);
      const addressPickerRef = vue.ref();
      const currentIndex = vue.ref(null);
      const information = vue.reactive({
        command: "world/china",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 9999,
            content: userInfo["id"],
            column: "userId"
          }
        },
        uniReq: uni.request,
        renderInfo: [
          {
            name: "cityList",
            renderList: cityList
          }
        ]
      });
      const addressInfo = vue.reactive({
        name: "",
        phone: "",
        city: "",
        details: "",
        isDefault: false,
        userId: userInfo["id"]
      });
      const rules = vue.reactive({
        notNull: {
          regular: /^[\s\S]*.*[^\s][\s\S]*$/
        }
      });
      const IsShowClear = () => {
        return addressInfo.city ? true : false;
      };
      const ClearAddress = () => {
        addressPickerRef.value.clear();
      };
      const onChange = (e) => {
      };
      const onNodeclick = (node) => {
      };
      const IsDefault = () => {
        addressInfo.isDefault = !addressInfo.isDefault;
      };
      vue.onMounted(() => {
        setTimeout(() => {
          new UniReqs(information);
        }, 100);
      });
      onLoad((e) => {
        if (e.data) {
          uni.setNavigationBarTitle({
            title: "\u4FEE\u6539\u5730\u5740"
          });
          const result = JSON.parse(e.data);
          for (let i2 in addressInfo) {
            addressInfo[i2] = result.item[i2];
          }
          currentIndex.value = result.index;
        }
      });
      const Validate = () => {
        for (let i2 in addressInfo) {
          if (!rules.notNull.regular.test(addressInfo[i2]))
            return false;
        }
        return true;
      };
      const PostReq = (operation, updateInfo) => {
        if (operation === "edit") {
          addressInfo["id"] = currentIndex.value;
        }
        information.command = "address";
        information.data.operation = operation;
        information.data["updateInfo"] = updateInfo;
        information.renderInfo = [];
        information.data["autoReq"] = true;
        new UniReqs(information, (data) => {
          addressList.value = data.addressList;
          uni.showToast({
            title: "\u6210\u529F",
            icon: "none"
          });
        });
      };
      onNavigationBarButtonTap((e) => {
        if (!Validate()) {
          uni.showToast({
            title: "\u5E26*\u7684\u4FE1\u606F\u4E0D\u80FD\u4E3A\u7A7A",
            icon: "none"
          });
          return;
        }
        if (currentIndex.value === null) {
          PostReq("add", addressInfo);
        } else {
          PostReq("edit", addressInfo);
        }
        uni.navigateBack();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "my-add-path" }, [
          vue.createElementVNode("view", { class: "path-item" }, [
            vue.createElementVNode("view", null, "*\u6536 \u4EF6 \u4EBA"),
            vue.withDirectives(vue.createElementVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => addressInfo.name = $event),
              placeholder: "\u6536\u4EF6\u4EBA\u59D3\u540D"
            }, null, 512), [
              [vue.vModelText, addressInfo.name]
            ])
          ]),
          vue.createElementVNode("view", { class: "path-item" }, [
            vue.createElementVNode("view", null, "*\u624B \u673A \u53F7"),
            vue.withDirectives(vue.createElementVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => addressInfo.phone = $event),
              placeholder: "11\u4F4D\u624B\u673A\u53F7"
            }, null, 512), [
              [vue.vModelText, addressInfo.phone]
            ])
          ]),
          vue.createElementVNode("view", { class: "path-item" }, [
            vue.createElementVNode("view", null, "*\u6240\u5728\u5730\u5740"),
            vue.createElementVNode("view", { class: "address-picker" }, [
              vue.createVNode(AddressPicker, {
                ref_key: "addressPickerRef",
                ref: addressPickerRef,
                localdata: cityList.value,
                "popup-title": "\u8BF7\u9009\u62E9\u5730\u5740",
                onChange,
                onNodeclick,
                "clear-icon": false,
                modelValue: addressInfo.city,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => addressInfo.city = $event)
              }, null, 8, ["localdata", "modelValue"]),
              vue.withDirectives(vue.createElementVNode("view", {
                class: "address-picker-clear",
                onClick: ClearAddress
              }, "\xD7", 512), [
                [vue.vShow, IsShowClear()]
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "path-item" }, [
            vue.createElementVNode("view", null, "*\u8BE6\u7EC6\u5730\u5740"),
            vue.withDirectives(vue.createElementVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => addressInfo.details = $event),
              placeholder: "\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740"
            }, null, 512), [
              [vue.vModelText, addressInfo.details]
            ])
          ]),
          vue.createElementVNode("view", { class: "path-item" }, [
            vue.createElementVNode("view", { class: "path-item-default" }, "\u8BBE\u4E3A\u9ED8\u8BA4\u5730\u5740"),
            vue.createElementVNode("radio-group", { name: "" }, [
              vue.createElementVNode("label", { class: "radio" }, [
                vue.createElementVNode("radio", {
                  color: "#FF3333",
                  onClick: IsDefault,
                  checked: addressInfo.isDefault
                }, null, 8, ["checked"]),
                vue.createElementVNode("text")
              ])
            ])
          ])
        ]);
      };
    }
  });
  var PagesAddAddressAddAddress = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-d56a61d0"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/add-address/add-address.vue"]]);
  const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
    __name: "OrderList",
    props: {
      item: Object,
      index: Number
    },
    setup(__props) {
      const props = __props;
      const { item, index } = props;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "goods-content bg-active-color" }, [
          vue.createElementVNode("image", {
            class: "goods-img",
            src: vue.unref(item).imgUrl,
            mode: ""
          }, null, 8, ["src"]),
          vue.createElementVNode("view", { class: "goods-text" }, [
            vue.createElementVNode("view", { class: "goods-name" }, vue.toDisplayString(vue.unref(item).name), 1),
            vue.createElementVNode("view", { class: "goods-size f-color" }, "\u989C\u8272\u5206\u7C7B\uFF1A" + vue.toDisplayString(vue.unref(item).color ? vue.unref(item).color : "\u65E0"), 1),
            vue.createElementVNode("view", {
              class: "f-active-color",
              style: { "font-size": "24rpx" }
            }, "7\u5929\u65E0\u7406\u7531")
          ]),
          vue.createElementVNode("view", null, [
            vue.createElementVNode("view", null, "\xA5" + vue.toDisplayString(vue.unref(item).presentPrice), 1),
            vue.createElementVNode("view", { class: "f-color" }, "*" + vue.toDisplayString(vue.unref(item).num), 1)
          ])
        ]);
      };
    }
  });
  var OrderList = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-814891fa"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/common/OrderList.vue"]]);
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "my-order",
    setup(__props) {
      const systemHeight = uni.getSystemInfoSync().windowHeight;
      const tabList = vue.ref([
        {
          name: "\u5168\u90E8",
          orderList: [
            {
              id: 6,
              name: "\u62C9\u590F\u8D1D\u5C14 La Chapelle \u9488\u7EC7\u886B\u59732022\u5E74\u65B0\u79CB\u5B63\u5973\u88C5\u6CD5\u5F0F\u590D\u53E4\u8BBE\u8BA1\u611F\u6C14\u8D28\u767E\u642D\u6BDB\u8863\u62FC\u63A5\u5706\u9886\u5F00\u886B\u9488\u7EC7\u5916\u5957\u5973 \u7C73\u8272 F",
              color: "\u989C\u8272\uFF1A\u5C11\u5973\u7C89",
              imgUrl: "/static/img/Children1.jpg",
              presentPrice: "9999",
              num: 1,
              checked: false
            },
            {
              id: 1,
              name: "\u62C9\u590F\u8D1D\u5C14 La Chapelle \u9488\u7EC7\u886B\u59732022\u5E74\u65B0\u79CB\u5B63\u5973\u88C5\u6CD5\u5F0F\u590D\u53E4\u8BBE\u8BA1\u611F\u6C14\u8D28\u767E\u642D\u6BDB\u8863\u62FC\u63A5\u5706\u9886\u5F00\u886B\u9488\u7EC7\u5916\u5957\u5973 \u7C73\u8272 F",
              color: "\u989C\u8272\uFF1A\u5C11\u5973\u7C89",
              imgUrl: "/static/img/Children2.jpg",
              presentPrice: "9999",
              num: 1,
              checked: false
            },
            {
              id: 1,
              name: "\u62C9\u590F\u8D1D\u5C14 La Chapelle \u9488\u7EC7\u886B\u59732022\u5E74\u65B0\u79CB\u5B63\u5973\u88C5\u6CD5\u5F0F\u590D\u53E4\u8BBE\u8BA1\u611F\u6C14\u8D28\u767E\u642D\u6BDB\u8863\u62FC\u63A5\u5706\u9886\u5F00\u886B\u9488\u7EC7\u5916\u5957\u5973 \u7C73\u8272 F",
              color: "\u989C\u8272\uFF1A\u5C11\u5973\u7C89",
              imgUrl: "/static/img/Children2.jpg",
              presentPrice: "9999",
              num: 1,
              checked: false
            },
            {
              id: 1,
              name: "\u62C9\u590F\u8D1D\u5C14 La Chapelle \u9488\u7EC7\u886B\u59732022\u5E74\u65B0\u79CB\u5B63\u5973\u88C5\u6CD5\u5F0F\u590D\u53E4\u8BBE\u8BA1\u611F\u6C14\u8D28\u767E\u642D\u6BDB\u8863\u62FC\u63A5\u5706\u9886\u5F00\u886B\u9488\u7EC7\u5916\u5957\u5973 \u7C73\u8272 F",
              color: "\u989C\u8272\uFF1A\u5C11\u5973\u7C89",
              imgUrl: "/static/img/Children2.jpg",
              presentPrice: "9999",
              num: 1,
              checked: false
            },
            {
              id: 1,
              name: "\u62C9\u590F\u8D1D\u5C14 La Chapelle \u9488\u7EC7\u886B\u59732022\u5E74\u65B0\u79CB\u5B63\u5973\u88C5\u6CD5\u5F0F\u590D\u53E4\u8BBE\u8BA1\u611F\u6C14\u8D28\u767E\u642D\u6BDB\u8863\u62FC\u63A5\u5706\u9886\u5F00\u886B\u9488\u7EC7\u5916\u5957\u5973 \u7C73\u8272 F",
              color: "\u989C\u8272\uFF1A\u5C11\u5973\u7C89",
              imgUrl: "/static/img/Children2.jpg",
              presentPrice: "9999",
              num: 1,
              checked: false
            },
            {
              id: 1,
              name: "\u62C9\u590F\u8D1D\u5C14 La Chapelle \u9488\u7EC7\u886B\u59732022\u5E74\u65B0\u79CB\u5B63\u5973\u88C5\u6CD5\u5F0F\u590D\u53E4\u8BBE\u8BA1\u611F\u6C14\u8D28\u767E\u642D\u6BDB\u8863\u62FC\u63A5\u5706\u9886\u5F00\u886B\u9488\u7EC7\u5916\u5957\u5973 \u7C73\u8272 F",
              color: "\u989C\u8272\uFF1A\u5C11\u5973\u7C89",
              imgUrl: "/static/img/Children2.jpg",
              presentPrice: "9999",
              num: 1,
              checked: false
            },
            {
              id: 1,
              name: "\u62C9\u590F\u8D1D\u5C14 La Chapelle \u9488\u7EC7\u886B\u59732022\u5E74\u65B0\u79CB\u5B63\u5973\u88C5\u6CD5\u5F0F\u590D\u53E4\u8BBE\u8BA1\u611F\u6C14\u8D28\u767E\u642D\u6BDB\u8863\u62FC\u63A5\u5706\u9886\u5F00\u886B\u9488\u7EC7\u5916\u5957\u5973 \u7C73\u8272 F",
              color: "\u989C\u8272\uFF1A\u5C11\u5973\u7C89",
              imgUrl: "/static/img/Children2.jpg",
              presentPrice: "9999",
              num: 1,
              checked: false
            }
          ]
        },
        {
          name: "\u5F85\u4ED8\u6B3E",
          orderList: []
        },
        {
          name: "\u5F85\u53D1\u8D27",
          orderList: []
        },
        {
          name: "\u5F85\u6536\u8D27",
          orderList: []
        },
        {
          name: "\u5F85\u8BC4\u4EF7",
          orderList: []
        }
      ]);
      const currentIndex = vue.ref(0);
      const orderListHeight = vue.ref(100);
      const totalPrice = (index) => {
        let total = 0;
        for (let i2 of tabList.value[index].orderList) {
          total += i2.presentPrice * 1;
        }
        return total;
      };
      const IsActive = (index) => {
        if (currentIndex.value === index) {
          return "active";
        } else {
          return "";
        }
      };
      const ChangeIndex = (index) => {
        currentIndex.value = index;
      };
      const Payment = () => {
        formatAppLog("log", "at pages/my-order/my-order.vue:157", orderListHeight.value);
      };
      const GetOrderListHeight = () => {
        orderListHeight.value = systemHeight - 320;
      };
      onReady(() => {
        GetOrderListHeight();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "line" }),
          vue.createElementVNode("view", { class: "my-order-top" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabList.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["my-order-top-bar", IsActive(index)]),
                key: index,
                onClick: ($event) => ChangeIndex(index)
              }, vue.toDisplayString(item.name), 11, ["onClick"]);
            }), 128))
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabList.value, (item, index) => {
            return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", { key: index }, [
              item.orderList.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "order-main"
              }, [
                vue.createCommentVNode("\u5546\u54C1"),
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("scroll-view", {
                    "scroll-y": "true",
                    style: vue.normalizeStyle("height: " + orderListHeight.value + "px;")
                  }, [
                    vue.createElementVNode("view", { class: "order-goods" }, [
                      vue.createElementVNode("view", { class: "goods-status f-active-color" }, vue.toDisplayString(item.name), 1),
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.orderList, (item2, index2) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "goods-item",
                          key: index2
                        }, [
                          vue.createVNode(OrderList, {
                            item: item2,
                            index: index2
                          }, null, 8, ["item", "index"])
                        ]);
                      }), 128))
                    ])
                  ], 4),
                  vue.createElementVNode("view", { class: "line" }),
                  vue.createCommentVNode("\u603B\u4EF7"),
                  vue.createElementVNode("view", { class: "total-price" }, [
                    vue.createTextVNode(" \u8BA2\u5355\u91D1\u989D: "),
                    vue.createElementVNode("text", { class: "f-active-color" }, "\xA5" + vue.toDisplayString(totalPrice(index)), 1),
                    vue.createTextVNode(" (\u5305\u542B\u8FD0\u8D39\xA50.00) ")
                  ]),
                  vue.createElementVNode("view", { class: "line" }),
                  vue.createCommentVNode("\u652F\u4ED8"),
                  vue.createElementVNode("view", {
                    class: "payment",
                    onClick: Payment
                  }, [
                    vue.createElementVNode("view", { class: "payment-text f-active-color" }, "\u652F\u4ED8")
                  ])
                ])
              ])) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "no-order",
                style: vue.normalizeStyle("height: " + vue.unref(systemHeight) + "px;")
              }, [
                vue.createElementVNode("view", { class: "goods-status f-active-color" }, vue.toDisplayString(item.name), 1),
                vue.createElementVNode("view", null, "\u60A8\u8FD8\u6CA1\u6709\u76F8\u5173\u8BA2\u5355"),
                vue.createElementVNode("view", { class: "no-order-home" }, "\u53BB\u9996\u9875\u901B\u901B")
              ], 4))
            ], 512)), [
              [vue.vShow, currentIndex.value === 0]
            ]);
          }), 128))
        ], 64);
      };
    }
  });
  var PagesMyOrderMyOrder = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-143b2126"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/my-order/my-order.vue"]]);
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "confirm-order",
    setup(__props) {
      const userStore = useUserStore();
      const { userInfo } = userStore;
      const orderStore = useOrderStore();
      const { orderInfo } = orderStore;
      const cartStore = useCartStore();
      const { shopList, selectList } = storeToRefs(cartStore);
      const { Total } = cartStore;
      const addressStore = useAddressStore();
      const { GetDefaultAddress } = addressStore;
      if (GetDefaultAddress !== void 0) {
        var { name, phone, city, details } = GetDefaultAddress;
      }
      const currentAddress = vue.reactive({
        name,
        phone,
        city,
        details
      });
      vue.reactive({
        command: "cart",
        data: {
          commander: "",
          operation: "delete",
          queryInfo: {
            pageNum: 1,
            pageSize: 9999,
            content: "",
            column: ""
          },
          itemsId: selectList.value,
          autoReq: true
        },
        uniReq: uni.request
      });
      const orderList = vue.ref([]);
      const GoAddressManage = () => {
        uni.navigateTo({
          url: "/pages/config-address/config-address?from=confirm-order"
        });
      };
      const GoPayment = () => {
        new UniReqs({
          command: "order",
          data: {
            commander: "",
            operation: "edit",
            queryInfo: {
              pageNum: 1,
              pageSize: 9999,
              content: "",
              column: ""
            },
            updateInfo: __spreadProps(__spreadValues({}, orderInfo), {
              orderStatus: 2
            })
          },
          uniReq: uni.request
        }, (data) => {
          if (data.success) {
            new UniReqs({
              command: "cart",
              data: {
                commander: "",
                operation: "delete",
                queryInfo: {
                  pageNum: 1,
                  pageSize: 9999,
                  content: userInfo["id"],
                  column: "userId"
                },
                autoReq: true,
                itemsId: selectList.value
              },
              uniReq: uni.request
            }, (data2) => {
              shopList.value = data2.shopList;
              selectList.value = [];
            });
          }
        });
        uni.navigateTo({
          url: "/pages/peyment/peyment?details=" + JSON.stringify({
            total: Total.totalPrice + 888
          })
        });
      };
      onLoad((e) => {
        orderList.value = shopList.value.filter((item) => {
          return selectList.value.indexOf(item.id) !== -1;
        });
        uni.$on("selectItem", (res) => {
          for (let i2 in currentAddress) {
            currentAddress[i2] = res[i2];
          }
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "confirm-order" }, [
          vue.createElementVNode("view", { class: "line" }),
          vue.unref(GetDefaultAddress) !== void 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "order-map",
            onClick: GoAddressManage
          }, [
            vue.createElementVNode("view", { class: "iconfont icon-map" }),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("view", { class: "addressee" }, [
                vue.createElementVNode("view", { class: "addressee-name" }, "\u6536\u4EF6\u4EBA\uFF1A" + vue.toDisplayString(currentAddress.name), 1),
                vue.createElementVNode("view", { class: "addressee-phone" }, vue.toDisplayString(currentAddress.phone), 1)
              ]),
              vue.createElementVNode("view", { class: "details-address" }, "\u6536\u8D27\u5730\u5740\uFF1A" + vue.toDisplayString(currentAddress.city) + " " + vue.toDisplayString(currentAddress.details), 1)
            ]),
            vue.createElementVNode("view", { class: "iconfont icon-arrow-right" })
          ])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "order-map",
            onClick: GoAddressManage
          }, "\u8BF7\u9009\u62E9\u5730\u5740")),
          vue.createElementVNode("view", { class: "order-list" }, [
            vue.createElementVNode("view", { class: "shopname" }, [
              vue.createElementVNode("image", {
                class: "order-list-img",
                src: "/static/img//logo.png",
                mode: ""
              }),
              vue.createElementVNode("text", null, "Phallus\u65D7\u8230\u5E97")
            ]),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(orderList.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "order-list-item",
                key: index
              }, [
                vue.createVNode(OrderList, {
                  item,
                  index
                }, null, 8, ["item", "index"])
              ]);
            }), 128)),
            vue.createElementVNode("view", { class: "order-foot" }, [
              vue.createElementVNode("view", null, "\u8FD0\u8D39"),
              vue.createElementVNode("view", null, "\uFFE5888.00")
            ]),
            vue.createElementVNode("view", { class: "order-foot" }, [
              vue.createElementVNode("view", { class: "leaving-message" }, [
                vue.createElementVNode("view", null, "\u7559\u8A00\uFF1A"),
                vue.createElementVNode("input", {
                  type: "text",
                  placeholder: "\u7ED9\u5356\u5BB6\u7684\u7559\u8A00,140\u5B57\u4EE5\u5185"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "small-count" }, [
              vue.createTextVNode(" \u5171" + vue.toDisplayString(vue.unref(Total).totalNum) + "\u4EF6\u5546\u54C1 \u5C0F\u8BA1\uFF1A ", 1),
              vue.createElementVNode("view", { class: "f-active-color" }, "\uFFE5" + vue.toDisplayString(vue.unref(Total).totalPrice), 1)
            ])
          ]),
          vue.createElementVNode("view", { class: "submit-order" }, [
            vue.createElementVNode("view", { class: "total-price" }, [
              vue.createTextVNode(" \u5408\u8BA1\uFF1A "),
              vue.createElementVNode("text", { class: "f-active-color" }, "\xA5" + vue.toDisplayString(vue.unref(Total).totalPrice + 888) + ".00", 1)
            ]),
            vue.createElementVNode("view", {
              class: "confirm",
              onClick: GoPayment
            }, "\u63D0\u4EA4\u8BA2\u5355")
          ])
        ]);
      };
    }
  });
  var PagesConfirmOrderConfirmOrder = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-2f2cf9ec"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/confirm-order/confirm-order.vue"]]);
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "peyment",
    setup(__props) {
      const orderStore = useOrderStore();
      const { orderInfo } = orderStore;
      const currentCheckIndex = vue.ref(0);
      const totalPrice = vue.ref(0);
      const paymentList = vue.ref([
        {
          id: 1,
          name: "\u652F\u4ED8\u5B9D",
          imgUrl: "/static/img/zfb.png"
        },
        {
          id: 2,
          name: "\u5FAE\u4FE1",
          imgUrl: "/static/img/wxf.png"
        }
      ]);
      const information = vue.reactive({
        command: "payment",
        data: {
          commander: "",
          operation: "get",
          orderInfo
        },
        uniReq: uni.request
      });
      const isChecked = (index) => {
        return index === currentCheckIndex.value ? true : false;
      };
      const GoBack = () => {
        uni.navigateBack();
      };
      const GoPayment = () => {
        new UniReqs(information, (data) => {
          formatAppLog("log", "at pages/peyment/peyment.vue:77", data);
        });
        uni.navigateTo({
          url: "/pages/payment-success/payment-success"
        });
      };
      const ChangeCheck = (index) => {
        currentCheckIndex.value = index;
      };
      onLoad((e) => {
        totalPrice.value = JSON.parse(e.details).total;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(uniNavBar, {
            title: "\u786E\u8BA4\u652F\u4ED8",
            leftText: "\u5173\u95ED",
            fixed: "true",
            statusBar: "true",
            onClickLeft: GoBack
          }),
          vue.createElementVNode("view", { class: "payment-list" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(paymentList.value, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                vue.createElementVNode("view", { class: "payment-item" }, [
                  vue.createElementVNode("view", { class: "payment-item-left" }, [
                    vue.createElementVNode("image", {
                      class: "payment-item-img",
                      src: item.imgUrl,
                      mode: ""
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "" }, [
                      vue.createElementVNode("view", null, vue.toDisplayString(item.name) + "\u652F\u4ED8", 1),
                      vue.createElementVNode("view", { class: "payment-item-text-tip" }, "\u63A8\u8350" + vue.toDisplayString(item.name) + "\u7528\u6237\u4F7F\u7528", 1)
                    ])
                  ]),
                  vue.createElementVNode("label", { class: "radio" }, [
                    vue.createElementVNode("radio", {
                      color: "#FF6F91",
                      value: "",
                      checked: isChecked(index),
                      onClick: ($event) => ChangeCheck(index)
                    }, null, 8, ["checked", "onClick"]),
                    vue.createElementVNode("text")
                  ])
                ]),
                vue.createElementVNode("view", { class: "line" })
              ]);
            }), 128))
          ]),
          vue.createElementVNode("view", { class: "pay-foot" }, [
            vue.createElementVNode("view", { class: "total" }, [
              vue.createElementVNode("text", { class: "f-color" }, "\u5408\u8BA1:"),
              vue.createElementVNode("text", { class: "total-price" }, "\xA5" + vue.toDisplayString(totalPrice.value) + ".00", 1)
            ]),
            vue.createElementVNode("view", {
              class: "go-pay",
              onClick: GoPayment
            }, "\u53BB\u652F\u4ED8")
          ])
        ], 64);
      };
    }
  });
  var PagesPeymentPeyment = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-32ea2be8"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/peyment/peyment.vue"]]);
  const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "payment-success",
    setup(__props) {
      const GoIndex = () => {
        uni.switchTab({
          url: "/pages/index/index"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "payment-success" }, [
          vue.createElementVNode("view", {
            class: "f-active-color",
            style: { "font-size": "52rpx" }
          }, "\u652F\u4ED8\u6210\u529F"),
          vue.createElementVNode("view", {
            class: "return-index f-active-color",
            onClick: GoIndex
          }, "\u8FD4\u56DE\u9996\u9875")
        ]);
      };
    }
  });
  var PagesPaymentSuccessPaymentSuccess = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-afe4df00"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/payment-success/payment-success.vue"]]);
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "login-other",
    setup(__props) {
      const userStore = useUserStore();
      const { LoginSuccess } = userStore;
      const information = vue.reactive({
        command: "login/other",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 9999,
            content: "",
            column: "openId"
          },
          loginInfo: {}
        },
        uniReq: uni.request
      });
      const LoginOther2 = (mode) => {
        uni.login({
          provider: mode,
          complete: (res) => {
            uni.getUserInfo({
              provider: mode,
              success: (res2) => {
                const provider = mode;
                const { openId, nickName, avatarUrl } = res2.userInfo;
                const loginInfo = {
                  provider,
                  openId,
                  nickName,
                  imgUrl: avatarUrl,
                  password: "nirangwonashenmelizhi"
                };
                information.data.loginInfo = loginInfo;
                information.data.queryInfo.content = openId;
                new UniReqs(information, (data) => {
                  LoginSuccess(data.userInfo);
                  uni.switchTab({
                    url: "/pages/index/index"
                  });
                  uni.showToast({
                    title: "\u767B\u5F55\u6210\u529F",
                    icon: "none"
                  });
                });
              }
            });
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "login-other" }, [
          vue.createElementVNode("view", { class: "other-text" }, [
            vue.createElementVNode("view", null, "\u6216\u8005\u7528\u4EE5\u4E0B\u65B9\u5F0F\u767B\u5F55")
          ]),
          vue.createElementVNode("view", { class: "other" }, [
            vue.createElementVNode("view", { class: "other-item" }, [
              vue.createElementVNode("image", {
                src: "/static/img/wx.png",
                mode: "",
                onClick: _cache[0] || (_cache[0] = ($event) => LoginOther2("weixin"))
              }),
              vue.createElementVNode("view", null, "\u5FAE\u4FE1\u767B\u5F55")
            ]),
            vue.createElementVNode("view", { class: "other-item" }, [
              vue.createElementVNode("image", {
                src: "/static/img/wb.png",
                mode: "",
                onClick: _cache[1] || (_cache[1] = ($event) => LoginOther2("sinaweibo"))
              }),
              vue.createElementVNode("view", null, "\u5FAE\u535A\u767B\u5F55")
            ]),
            vue.createElementVNode("view", { class: "other-item" }, [
              vue.createElementVNode("image", {
                src: "/static/img/qq.png",
                mode: "",
                onClick: _cache[2] || (_cache[2] = ($event) => LoginOther2("qq"))
              }),
              vue.createElementVNode("view", null, "QQ\u767B\u5F55")
            ])
          ])
        ]);
      };
    }
  });
  var LoginOther = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b4d1e3fa"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/common/login-other.vue"]]);
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "login",
    setup(__props) {
      const userStore = useUserStore();
      const { LoginSuccess } = userStore;
      const userInfo = vue.reactive({
        userName: "",
        password: ""
      });
      const information = vue.reactive({
        command: "login",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 9999,
            content: "",
            column: "userName"
          },
          userInfo
        },
        uniReq: uni.request
      });
      const rules = {
        userName: {
          regular: /\S/,
          message: "\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A"
        },
        password: {
          regular: /^[0-9a-zA-Z]{6,16}$/,
          message: "\u5BC6\u7801\u5E94\u4E3A6-16\u4F4D\u5B57\u6BCD\u6216\u6570\u5B57"
        }
      };
      const Back = () => {
        uni.navigateBack();
      };
      const Login = () => {
        if (!Validate("userName"))
          return;
        if (!Validate("password"))
          return;
        information.data.queryInfo.content = userInfo.userName;
        new UniReqs(information, (data) => {
          uni.hideLoading();
          if (data.success) {
            LoginSuccess(data.userInfo);
            uni.navigateBack();
          }
          uni.showToast({
            title: data.message,
            icon: "none"
          });
        });
        uni.showLoading({
          title: "\u767B\u5F55\u4E2D..."
        });
      };
      const Validate = (key) => {
        if (!rules[key].regular.test(userInfo[key])) {
          uni.showToast({
            title: rules[key].message,
            icon: "none"
          });
          return false;
        }
        return true;
      };
      const GoLoginPhone = () => {
        uni.navigateTo({
          url: "/pages/login-phone/login-phone"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
          vue.createElementVNode("view", {
            class: "close",
            onClick: Back
          }, "\xD7"),
          vue.createElementVNode("swiper", {
            vertical: "true",
            style: { "height": "100vh" }
          }, [
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("scroll-view", null, [
                vue.createElementVNode("view", { class: "login-tel" }, [
                  vue.createElementVNode("view", { class: "tel-main" }, [
                    vue.createElementVNode("view", { class: "logo" }, [
                      vue.createElementVNode("image", {
                        class: "logo-img",
                        src: "/static/img/logo2.png",
                        mode: ""
                      })
                    ]),
                    vue.createElementVNode("view", {
                      class: "tel",
                      onClick: GoLoginPhone
                    }, "\u624B\u673A\u53F7\u6CE8\u518C"),
                    vue.createVNode(LoginOther),
                    vue.createElementVNode("view", { class: "login-go go-down" }, [
                      vue.createElementVNode("view", null, "\u5DF2\u6709\u8D26\u53F7\uFF0C\u53BB\u767B\u5F55"),
                      vue.createElementVNode("view", { class: "iconfont icon-arrow-down" })
                    ])
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("scroll-view", { "scroll-y": "true" }, [
                vue.createElementVNode("view", { class: "login-tel" }, [
                  vue.createElementVNode("view", { class: "tel-main" }, [
                    vue.createElementVNode("view", { class: "close-center" }, [
                      vue.createElementVNode("view", { class: "login-go go-up" }, [
                        vue.createElementVNode("view", { class: "iconfont icon-arrow-up" }),
                        vue.createElementVNode("view", { class: "login-go-text" }, "\u6CA1\u6709\u8D26\u53F7\uFF1F\u53BB\u6CE8\u518C")
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "login-box" }, [
                      vue.createElementVNode("view", { class: "login-from" }, [
                        vue.createElementVNode("view", { class: "login-user" }, [
                          vue.createElementVNode("text", { class: "user-text" }, "\u8D26\u53F7"),
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "text",
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => userInfo.userName = $event),
                            placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7/\u6635\u79F0"
                          }, null, 512), [
                            [vue.vModelText, userInfo.userName]
                          ])
                        ]),
                        vue.createElementVNode("view", { class: "login-user" }, [
                          vue.createElementVNode("text", { class: "user-text" }, "\u5BC6\u7801"),
                          vue.withDirectives(vue.createElementVNode("input", {
                            type: "password",
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => userInfo.password = $event),
                            placeholder: "6-16\u4F4D\u5B57\u7B26"
                          }, null, 512), [
                            [vue.vModelText, userInfo.password]
                          ])
                        ])
                      ]),
                      vue.createElementVNode("view", { class: "login-quick" }, [
                        vue.createElementVNode("view", null, "\u5FD8\u8BB0\u5BC6\u7801?"),
                        vue.createElementVNode("view", null, "\u514D\u5BC6\u767B\u5F55")
                      ]),
                      vue.createElementVNode("view", {
                        class: "tel",
                        onClick: Login
                      }, "\u767B\u5F55"),
                      vue.createElementVNode("view", { class: "reminder" }, "\u6E29\u99A8\u63D0\u793A\uFF1A\u60A8\u53EF\u4EE5\u9009\u62E9\u514D\u5BC6\u767B\u5F55\uFF0C\u66F4\u52A0\u65B9\u4FBF")
                    ]),
                    vue.createVNode(LoginOther)
                  ])
                ])
              ])
            ])
          ])
        ]);
      };
    }
  });
  var PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b237504c"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/login/login.vue"]]);
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "login-phone",
    setup(__props) {
      const rules = {
        phone: {
          regular: /^1[3-9]\d{9}$/,
          message: "\u8BF7\u8F93\u516511\u4F4D\u624B\u673A\u53F7"
        }
      };
      const phoneInfo = vue.reactive({
        phone: ""
      });
      const information = vue.reactive({
        command: "register",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 9999,
            content: "",
            column: "phone"
          }
        },
        uniReq: uni.request
      });
      const Validate = (key) => {
        if (!rules[key].regular.test(phoneInfo[key])) {
          uni.showToast({
            title: rules[key].message,
            icon: "none"
          });
          return false;
        }
        return true;
      };
      const GoNextCode = () => {
        if (!Validate("phone"))
          return;
        information.data.queryInfo.content = phoneInfo.phone;
        new UniReqs(information, (data) => {
          if (data.register) {
            uni.showToast({
              title: data.message,
              icon: "error"
            });
          } else {
            uni.navigateTo({
              url: "/pages/verification-code/verification-code?phone=" + phoneInfo.phone
            });
          }
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "line" }),
          vue.createElementVNode("view", { class: "login-tel" }, [
            vue.createElementVNode("view", { class: "tel-main" }, [
              vue.createElementVNode("view", { class: "login-from" }, [
                vue.createElementVNode("view", { class: "login-user" }, [
                  vue.createElementVNode("text", { class: "user-text" }, "\u624B\u673A\u53F7"),
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "number",
                    focus: "true",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => phoneInfo.phone = $event),
                    placeholder: "\u8BF7\u8F93\u516511\u4F4D\u624B\u673A\u53F7"
                  }, null, 512), [
                    [vue.vModelText, phoneInfo.phone]
                  ])
                ])
              ]),
              vue.createElementVNode("view", {
                class: "tel",
                onClick: GoNextCode
              }, "\u4E0B\u4E00\u6B65")
            ])
          ])
        ], 64);
      };
    }
  });
  var PagesLoginPhoneLoginPhone = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1843a89c"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/login-phone/login-phone.vue"]]);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "verification-code",
    setup(__props) {
      const userStore = useUserStore();
      storeToRefs(userStore);
      const { LoginSuccess } = userStore;
      const code = vue.ref("");
      const codeCountDown = vue.ref(60);
      const codeMessage = vue.ref("");
      const isDisabled = vue.ref(false);
      const phone = vue.ref("");
      const trueCode = vue.ref("");
      const information = vue.reactive({
        command: "code",
        data: {
          commander: "",
          operation: "get",
          queryInfo: {
            pageNum: 1,
            pageSize: 9999,
            content: "",
            column: ""
          },
          updateInfo: {
            phone: "",
            password: "nirangwonashenmelizhi",
            imgUrl: "/static/img/cartoonHead.png"
          }
        },
        uniReq: uni.request
      });
      const SendCodeMessage = () => {
        information.command = "code";
        information.data.updateInfo.phone = phone.value;
        new UniReqs(information, (data) => {
          trueCode.value = data.code;
        });
        isDisabled.value = true;
        codeMessage.value = `\u91CD\u65B0\u53D1\u9001(${codeCountDown.value})`;
        let timer = setInterval(() => {
          codeCountDown.value--;
          codeMessage.value = `\u91CD\u65B0\u53D1\u9001(${codeCountDown.value})`;
        }, 1e3);
        setTimeout(() => {
          clearInterval(timer);
          codeCountDown.value = 60;
          codeMessage.value = "\u91CD\u65B0\u53D1\u9001";
          isDisabled.value = false;
        }, 6e4);
      };
      const PhoneLogin = () => {
        information.command = "login";
        information.data.operation = "get";
        information.data.queryInfo.content = phone.value;
        information.data.queryInfo.column = "phone";
        information.data["userInfo"] = {
          password: "nirangwonashenmelizhi"
        };
        new UniReqs(information, (data) => {
          uni.hideLoading();
          if (data.success) {
            LoginSuccess(data.userInfo);
            uni.switchTab({
              url: "/pages/index/index"
            });
          }
          uni.showToast({
            title: data.message,
            icon: "none"
          });
        });
        uni.showLoading({
          title: "\u767B\u5F55\u4E2D..."
        });
      };
      const BackIndex = () => {
        if (trueCode.value.toString() === code.value) {
          information.command = "register";
          information.data.operation = "add";
          new UniReqs(information, (data) => {
            if (data.success) {
              PhoneLogin();
            }
          });
        } else {
          uni.showToast({
            title: "\u9A8C\u8BC1\u7801\u9519\u8BEF",
            icon: "error"
          });
        }
      };
      onLoad((e) => {
        phone.value = e.phone;
        SendCodeMessage();
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("view", { class: "line" }),
          vue.createElementVNode("view", { class: "login-tel" }, [
            vue.createElementVNode("view", { class: "tel-main" }, [
              vue.createElementVNode("view", { class: "login-from" }, [
                vue.createElementVNode("view", { class: "login-user" }, [
                  vue.createElementVNode("text", { class: "user-text" }, "\u9A8C\u8BC1\u7801"),
                  vue.withDirectives(vue.createElementVNode("input", {
                    type: "text",
                    placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => code.value = $event)
                  }, null, 512), [
                    [vue.vModelText, code.value]
                  ]),
                  vue.createElementVNode("button", {
                    plain: "true",
                    size: "mini",
                    disabled: isDisabled.value,
                    onClick: SendCodeMessage
                  }, vue.toDisplayString(codeMessage.value), 9, ["disabled"])
                ])
              ]),
              vue.createElementVNode("view", {
                class: "tel",
                onClick: BackIndex
              }, "\u4E0B\u4E00\u6B65")
            ])
          ])
        ], 64);
      };
    }
  });
  var PagesVerificationCodeVerificationCode = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-67a9b246"], ["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/verification-code/verification-code.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/class/class", PagesClassClass);
  __definePage("pages/shopping/shopping", PagesShoppingShopping);
  __definePage("pages/my/my", PagesMyMy);
  __definePage("pages/search/search", PagesSearchSearch);
  __definePage("pages/SearchResult/SearchResult", PagesSearchResultSearchResult);
  __definePage("pages/details/details", PagesDetailsDetails);
  __definePage("pages/config/config", PagesConfigConfig);
  __definePage("pages/config-address/config-address", PagesConfigAddressConfigAddress);
  __definePage("pages/add-address/add-address", PagesAddAddressAddAddress);
  __definePage("pages/my-order/my-order", PagesMyOrderMyOrder);
  __definePage("pages/confirm-order/confirm-order", PagesConfirmOrderConfirmOrder);
  __definePage("pages/peyment/peyment", PagesPeymentPeyment);
  __definePage("pages/payment-success/payment-success", PagesPaymentSuccessPaymentSuccess);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/login-phone/login-phone", PagesLoginPhoneLoginPhone);
  __definePage("pages/verification-code/verification-code", PagesVerificationCodeVerificationCode);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const userStore = useUserStore();
      const { InitUser } = userStore;
      onLaunch(() => {
        InitUser();
      });
      return () => {
      };
    }
  });
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/Program Files/uniapp/Shop/Shop - \u526F\u672C/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    const pinia = createPinia();
    app.use(pinia);
    return { app };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
