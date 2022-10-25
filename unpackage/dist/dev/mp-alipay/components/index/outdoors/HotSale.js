"use strict";
var common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (GuessYou + ProductList)();
}
const GuessYou = () => "../../common/GuessYou.js";
const ProductList = () => "../../common/ProductList.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "HotSale",
  props: {
    list: Array
  },
  setup(__props) {
    const props = __props;
    const { list } = common_vendor.toRefs(props);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u70ED\u9500\u7206\u6B3E"
        }),
        b: common_vendor.p({
          list: common_vendor.unref(list),
          lineItemNum: 3
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/outdoors/HotSale.vue"]]);
my.createComponent(Component);
