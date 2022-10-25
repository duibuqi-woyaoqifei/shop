"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Recommend",
  props: {
    list: Array
  },
  setup(__props) {
    const props = __props;
    const { list } = common_vendor.toRefs(props);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: item.bigImgUrl,
            b: common_vendor.f(item.smallImgUrls, (item2, index2, i1) => {
              return {
                a: item2.imgUrl,
                b: index2
              };
            }),
            c: index
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4bc7b7a1"], ["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/recommend/Recommend.vue"]]);
wx.createComponent(Component);
