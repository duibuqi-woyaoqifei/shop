"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Product",
  props: {
    list: { type: Object, required: false, default: [] },
    lineItemNum: { type: null, required: false, default: 2 },
    isWrap: { type: null, required: false, default: true }
  },
  setup(__props) {
    const props = __props;
    const { list, lineItemNum, isWrap } = common_vendor.toRefs(props);
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
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(list), (item, index, i0) => {
          return {
            a: item.imgUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.presentPrice),
            d: common_vendor.t(item.originalPrice),
            e: common_vendor.t(item.discount),
            f: index
          };
        }),
        b: common_vendor.s(common_vendor.unref(imgStyle).height),
        c: common_vendor.s(common_vendor.unref(imgStyle).width),
        d: common_vendor.s(common_vendor.unref(imgStyle).wrap)
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-65395db4"], ["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/common/Product.vue"]]);
wx.createComponent(Component);
