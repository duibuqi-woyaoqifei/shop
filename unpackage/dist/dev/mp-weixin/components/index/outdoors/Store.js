"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (GuessYou + Product)();
}
const GuessYou = () => "../../common/GuessYou.js";
const Product = () => "../../common/Product.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Store",
  props: {
    list: Array
  },
  setup(__props) {
    const props = __props;
    const { list } = common_vendor.toRefs(props);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u63A8\u8350\u5E97\u94FA"
        }),
        b: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: item.bigImgUrl,
            b: "ffc5077e-1-" + i0,
            c: common_vendor.p({
              list: item.list,
              isWrap: false
            })
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ffc5077e"], ["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/outdoors/Store.vue"]]);
wx.createComponent(Component);
