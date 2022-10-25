"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Math) {
  ProductList();
}
const ProductList = () => "./ProductList.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "ShopList",
  setup(__props) {
    const shopItem = common_vendor.reactive({
      currentIndex: 0,
      currentSort: true,
      data: [
        { title: "\u4EF7\u683C" },
        { title: "\u6298\u6263" },
        { title: "\u54C1\u724C" }
      ]
    });
    const ChangeTitle = (index) => {
      if (index !== shopItem.currentIndex) {
        shopItem.currentSort = true;
        shopItem.currentIndex = index;
      } else {
        shopItem.currentSort = !shopItem.currentSort;
      }
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(shopItem.data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(GetShopTitleClass(index, "text")),
            c: common_vendor.n(GetShopTitleClass(index, "up")),
            d: common_vendor.n(GetShopTitleClass(index, "down")),
            e: index,
            f: common_vendor.o(($event) => ChangeTitle(index))
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9687dfe6"], ["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/common/ShopList.vue"]]);
my.createComponent(Component);
