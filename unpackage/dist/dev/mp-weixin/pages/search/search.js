"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "search",
  setup(__props) {
    common_vendor.onNavigationBarButtonTap((e) => {
      if (e.float === "right") {
        common_vendor.index.navigateTo({
          url: "../SearchResult/SearchResult"
        });
      }
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
