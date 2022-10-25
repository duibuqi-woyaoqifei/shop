"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "IndexSwiper",
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
            a: item.imgUrl,
            b: index
          };
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-93154ee2"], ["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/index/recommend/IndexSwiper.vue"]]);
my.createComponent(Component);
