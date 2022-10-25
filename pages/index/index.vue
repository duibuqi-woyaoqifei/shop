<template>
	<view class="index">
		<view class="f-color">
			<scroll-view scroll-x="true" class="scroll-view" :scroll-into-view="scrollIntoIndex">
				<view :id="'top' + index" v-for="(item, index) in topBar" :key="index" :class="GetTopBarClass(index)" @click="ChangeTopBar(index)">
					<text>{{ item.name }}</text>
				</view>
			</scroll-view>

			<swiper @change="SwiperChange" :current="currentTopBar" :style="'height:' + swiperHeight + 'px;'">
				<swiper-item>
					<view id="swiper0">
						<IndexSwiper :list="swiperList"></IndexSwiper>
						<Recommend :list="recommendList"></Recommend>
						<GuessYou title="猜你喜欢"></GuessYou>
						<ProductList :list="productList" :lineItemNum="2"></ProductList>
						<UniSection type="line"><UniLoadMore iconType="circle" :status="pullUpStatus" /></UniSection>
					</view>
				</swiper-item>

				<swiper-item>
					<view id="swiper1">
						<Banner></Banner>
						<Icons :list="iconsList"></Icons>
						<Brands></Brands>
						<HotSale :list="hotSaleList"></HotSale>
						<Store :list="storeProductList"></Store>
						<UniSection type="line"><UniLoadMore iconType="circle" :status="pullUpStatus" /></UniSection>
					</view>
				</swiper-item>

				<swiper-item>1</swiper-item>

				<swiper-item>2</swiper-item>

				<swiper-item>3</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup lang="ts">
import IndexSwiper from '@/components/index/recommend/IndexSwiper.vue'
import Recommend from '@/components/index/recommend/Recommend.vue'
import GuessYou from '@/components/common/GuessYou.vue'
import ProductList from '@/components/common/ProductList.vue'
import Banner from '@/components/index/outdoors/Banner.vue'
import Icons from '@/components/index/outdoors/Icons.vue'
import Brands from '@/components/index/outdoors/Brands.vue'
import HotSale from '@/components/index/outdoors/HotSale.vue'
import Store from '@/components/index/outdoors/Store.vue'
import { toRefs, reactive, ref, onBeforeMount, toRef } from "vue"
import type { Ref } from "vue"
import { onReady, onReachBottom, onNavigationBarButtonTap } from "@dcloudio/uni-app";
import { UniReqs } from "@/plugins/request"
import UniLoadMore from "@/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"
import UniSection from "@/components/uni-section/uni-section.vue"
import { useAddressStore } from '@/store/modules/address';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const { loginStatus,userInfo } = userStore;

const addressStore = useAddressStore();
const { addressList } = storeToRefs(addressStore);

const swiperHeight = ref(0)
const currentTopBar = ref(0)
const scrollIntoIndex = ref("top0")
const requestedList = ref([])

const topBar: Ref<Array<any>> = ref([]);

// 推荐
const swiperList: Ref<Array<any>> = ref([])
const recommendList: Ref<Array<any>> = ref([])
const productList: Ref<Array<any>> = ref([])

// 运动户外
const iconsList: Ref<Array<any>> = ref([])
const hotSaleList: Ref<Array<any>> = ref([])
const storeProductList: Ref<Array<any>> = ref([])

// 首页列表
const indexLists = toRefs(reactive({
	topBar,
	swiperList,
	recommendList,
	productList,
	iconsList,
	hotSaleList,
	storeProductList
}))

const infomation = reactive({
  command: 'index/0',
  data: {
    commander: '',
    operation: 'get',
    queryInfo: {
      pageNum: 1,
      pageSize: 5,
      content: '',
    }
  },
	uniReq: uni.request,
	renderInfo: []
})

const pullUpStatus = ref("more")

const ChangeRenderInfo = (index) => {
	infomation.command = "index/" + index
	let nameList = []
	let renderInfo = []

	if (index === 0) {
		nameList = ["topBar","swiperList","recommendList","productList"]
	}
	if (index === 1) {
		nameList = ["iconsList","hotSaleList","storeProductList"]
	}

	for (let i of nameList) {
		renderInfo.push({
			name: i,
			renderList: indexLists[i]
		})
	}
	infomation.renderInfo = renderInfo
}

const GetTopBarClass = (index) => {
	return currentTopBar.value === index ? "scroll-item f-active-color" : "scroll-item"
}

const ChangeTopBar = (index) =>{
	if (currentTopBar.value !== index){
		currentTopBar.value = index
		scrollIntoIndex.value = "top" + index

		if (requestedList.value.indexOf(index) !== -1) {
			GetSwiperHeight(index)
			return
		}
		ChangeRenderInfo(index)
		new UniReqs(infomation,(data)=>{
				GetSwiperHeight(index)
				requestedList.value.push(index)
		})
	}
}

const SwiperChange = (event) => {
	const { current } = event.detail
	ChangeTopBar(current)
}

const GetSwiperHeight = (id: number = 0,delay: number = 0) => {
	setTimeout(function() {
		let view = uni.createSelectorQuery().select("#swiper" + id)
		view.boundingClientRect(data => {
			if (!data) return
			swiperHeight.value = data.height
		}).exec();
	}, delay);
}

const LazyLoading = ()=>{
	pullUpStatus.value = "loading"

	const index = currentTopBar.value
	let pageSize = 4
	let renderList = productList
	let name = "productList"
	if (index === 1) {
		pageSize = 1
		renderList = storeProductList
		name = "storeProductList"
	}
	const pageNum =  renderList.value.length / pageSize
	infomation.command = "index/" + index + "/more"
	infomation.data.queryInfo.pageNum = pageNum
	infomation.data.queryInfo.pageSize = pageSize
	infomation.renderInfo = []

	new UniReqs(infomation,data=>{
		if (data === "nomore") {
			pullUpStatus.value = "nomore"
			return
		}
		for (let i of data[name]) {
			renderList.value.push(i)
		}
		pullUpStatus.value = "more"
		GetSwiperHeight(index)
	})
}

const ReqCart = () => {
	if (loginStatus) {
		const infor = {
			command: 'address',
			data: {
			  commander: '',
			  operation: 'get',
			  queryInfo: {
			    pageNum: 1,
			    pageSize: 9999,
			    content: userInfo['id'],
			    column: 'userId',
			  }
			},
			uniReq: uni.request
		}

		new UniReqs(infor,data=>{
			addressList.value = data.addressList
		})
	}
}

// 生命周期
onReady(()=>{
	GetSwiperHeight()
	ReqCart()
})

onBeforeMount(()=>{
	ChangeRenderInfo(0)
	new UniReqs(infomation,(data)=>{
			GetSwiperHeight()
			requestedList.value.push(0)
	})
})

onReachBottom(()=>{
	LazyLoading()
})

onNavigationBarButtonTap((e)=>{
	if (e.float === "left") {
		uni.navigateTo({
			url: '../search/search'
		});
	}
})
</script>

<style scoped>
.scroll-view {
	white-space: nowrap;
	width: 100%;
	height: 80rpx;
}
.scroll-item {
	display: inline-block;
	padding: 10rpx 30rpx;
	font-size: 32rpx;
}
.f-active-color {
	border-bottom: 6rpx solid #49bdfb;
}
</style>
