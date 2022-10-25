"use strict";
var common_vendor = require("../../common/vendor.js");
var plugins_request = require("../../plugins/request.js");
require("../../plugins/axios.js");
require("../../plugins/method.js");
if (!Math) {
  (IndexSwiper + Recommend + GuessYou + ProductList + UniLoadMore + UniSection + Banner + Icons + Brands + HotSale + Store)();
}
const IndexSwiper = () => "../../components/index/recommend/IndexSwiper.js";
const Recommend = () => "../../components/index/recommend/Recommend.js";
const GuessYou = () => "../../components/common/GuessYou.js";
const ProductList = () => "../../components/common/ProductList.js";
const Banner = () => "../../components/index/outdoors/Banner.js";
const Icons = () => "../../components/index/outdoors/Icons.js";
const Brands = () => "../../components/index/outdoors/Brands.js";
const HotSale = () => "../../components/index/outdoors/HotSale.js";
const Store = () => "../../components/index/outdoors/Store.js";
const UniLoadMore = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const UniSection = () => "../../components/uni-section/uni-section.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const swiperHeight = common_vendor.ref(0);
    const currentTopBar = common_vendor.ref(0);
    const scrollIntoIndex = common_vendor.ref("top0");
    const requestedList = common_vendor.ref([]);
    const topBar = common_vendor.ref([]);
    const swiperList = common_vendor.ref([]);
    const recommendList = common_vendor.ref([]);
    const productList = common_vendor.ref([]);
    const iconsList = common_vendor.ref([]);
    const hotSaleList = common_vendor.ref([]);
    const storeProductList = common_vendor.ref([]);
    const indexLists = common_vendor.toRefs(common_vendor.reactive({
      topBar,
      swiperList,
      recommendList,
      productList,
      iconsList,
      hotSaleList,
      storeProductList
    }));
    const infomation = common_vendor.reactive({
      command: "index/0",
      data: {
        commander: "",
        operation: "get",
        queryInfo: {
          pageNum: 1,
          pageSize: 5,
          content: ""
        }
      },
      renderInfo: []
    });
    const pullUpStatus = common_vendor.ref("more");
    const ChangeRenderInfo = (index) => {
      infomation.command = "index/" + index;
      let nameList = [];
      let renderInfo = [];
      if (index === 0) {
        nameList = ["topBar", "swiperList", "recommendList", "productList"];
      }
      if (index === 1) {
        nameList = ["iconsList", "hotSaleList", "storeProductList"];
      }
      for (let i of nameList) {
        renderInfo.push({
          name: i,
          renderList: indexLists[i]
        });
      }
      infomation.renderInfo = renderInfo;
    };
    const GetTopBarClass = (index) => {
      return currentTopBar.value === index ? "scroll-item f-active-color" : "scroll-item";
    };
    const ChangeTopBar = (index) => {
      if (currentTopBar.value !== index) {
        currentTopBar.value = index;
        scrollIntoIndex.value = "top" + index;
        if (requestedList.value.indexOf(index) !== -1) {
          GetSwiperHeight(index);
          return;
        }
        ChangeRenderInfo(index);
        new plugins_request.Reqs(infomation, (data) => {
          GetSwiperHeight(index);
          requestedList.value.push(index);
        });
      }
    };
    const SwiperChange = (event) => {
      const { current } = event.detail;
      ChangeTopBar(current);
    };
    const GetSwiperHeight = (id = 0, delay = 0) => {
      setTimeout(function() {
        let view = common_vendor.index.createSelectorQuery().select("#swiper" + id);
        view.boundingClientRect((data) => {
          if (!data)
            return;
          swiperHeight.value = data.height;
        }).exec();
      }, delay);
    };
    const LazyLoading = () => {
      pullUpStatus.value = "loading";
      const index = currentTopBar.value;
      let pageSize = 4;
      let renderList = productList;
      let name = "productList";
      if (index === 1) {
        pageSize = 1;
        renderList = storeProductList;
        name = "storeProductList";
      }
      const pageNum = renderList.value.length / pageSize;
      infomation.command = "index/" + index + "/more";
      infomation.data.queryInfo.pageNum = pageNum;
      infomation.data.queryInfo.pageSize = pageSize;
      infomation.renderInfo = [];
      new plugins_request.Reqs(infomation, (data) => {
        if (data === "nomore") {
          pullUpStatus.value = "nomore";
          return;
        }
        for (let i of data[name]) {
          renderList.value.push(i);
        }
        pullUpStatus.value = "more";
        GetSwiperHeight(index);
      });
    };
    common_vendor.onReady(() => {
      GetSwiperHeight();
    });
    common_vendor.onBeforeMount(() => {
      ChangeRenderInfo(0);
      new plugins_request.Reqs(infomation, (data) => {
        GetSwiperHeight();
        requestedList.value.push(0);
      });
    });
    common_vendor.onReachBottom(() => {
      LazyLoading();
    });
    common_vendor.onNavigationBarButtonTap((e) => {
      if (e.float === "left") {
        common_vendor.index.navigateTo({
          url: "../search/search"
        });
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(topBar.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: "top" + index,
            c: index,
            d: common_vendor.n(GetTopBarClass(index)),
            e: common_vendor.o(($event) => ChangeTopBar(index), index)
          };
        }),
        b: scrollIntoIndex.value,
        c: common_vendor.p({
          list: swiperList.value
        }),
        d: common_vendor.p({
          list: recommendList.value
        }),
        e: common_vendor.p({
          title: "\u731C\u4F60\u559C\u6B22"
        }),
        f: common_vendor.p({
          list: productList.value,
          lineItemNum: 3
        }),
        g: common_vendor.p({
          iconType: "circle",
          status: pullUpStatus.value
        }),
        h: common_vendor.p({
          type: "line"
        }),
        i: common_vendor.p({
          list: iconsList.value
        }),
        j: common_vendor.p({
          list: hotSaleList.value
        }),
        k: common_vendor.p({
          list: storeProductList.value
        }),
        l: common_vendor.p({
          iconType: "circle",
          status: pullUpStatus.value
        }),
        m: common_vendor.p({
          type: "line"
        }),
        n: common_vendor.o(SwiperChange),
        o: currentTopBar.value,
        p: common_vendor.s("height:" + swiperHeight.value + "px;")
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "E:/Program Files/uniapp/Shop/Shop - \u526F\u672C/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
