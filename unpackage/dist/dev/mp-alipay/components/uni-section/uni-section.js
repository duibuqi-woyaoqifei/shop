"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
      if (common_vendor.index.report && newVal !== "") {
        common_vendor.index.report("title", newVal);
      }
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.title),
    b: !$props.subTitle ? 1 : "",
    c: $props.color,
    d: $props.subTitle
  }, $props.subTitle ? {
    e: common_vendor.t($props.subTitle)
  } : {}, {
    f: $props.padding ? "10px" : ""
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/components/uni-section/uni-section.vue"]]);
my.createComponent(Component);
