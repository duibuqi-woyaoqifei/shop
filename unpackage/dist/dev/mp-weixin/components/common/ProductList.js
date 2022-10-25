"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  Product();
}
const Product = () => "./Product.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ProductList",
  props: {
    list: Object,
    lineItemNum: Number
  },
  setup(__props) {
    const props = __props;
    const { list, lineItemNum } = common_vendor.toRefs(props);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: common_vendor.unref(list),
          lineItemNum: common_vendor.unref(lineItemNum)
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/common/ProductList.vue"]]);
wx.createComponent(Component);
