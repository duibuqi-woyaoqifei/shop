"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "GuessYou",
  props: {
    title: String
  },
  setup(__props) {
    const props = __props;
    const { title } = props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(title))
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-cfcdc7be"], ["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/common/GuessYou.vue"]]);
wx.createComponent(Component);
