<template>
  <view class="shop-list f-color">
  	
  	<view class="shop-title">
  		
  		<view class="shop-item" v-for="(item,index) in shopItem.data" :key="index" @tap="ChangeTitle(index)">
  			<text :class="GetShopTitleClass(index,'text')">{{item.title}}</text>
  			<view class="iconfont">
  				<view class="icon-arrow-up" :class="GetShopTitleClass(index,'up')"></view>
  				<view class="icon-arrow-down" :class="GetShopTitleClass(index,'down')"></view>
  			</view>
  		</view>
  		
  	</view>
  	
  	<view class="line"></view>
  	
  </view>
	
	<Product :list="productList"></Product>
</template>

<script lang="ts" setup>
import Product from '@/components/common/Product.vue'
import { onLoad, onNavigationBarSearchInputChanged, onNavigationBarButtonTap, onNavigationBarSearchInputConfirmed } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";
import { UniReqs } from "@/plugins/request"

var pages = getCurrentPages();  
var page = pages[pages.length - 1];
// #ifdef APP-PLUS
var currentWebview = page.$getAppWebview();
// #endif

const shopItem = reactive({
	currentIndex: 0,
	currentSort: false,
	data: [
		{title:"价格"},
		{title:"折扣"},
		{title:"品牌"},
	]
})

const content = ref("")
const productList = ref([])

const infomation = reactive({
  command: 'index/search',
  data: {
    commander: '',
    operation: 'get',
    queryInfo: {
      pageNum: 1,
      pageSize: 5,
      content: '',
			sort: {
				name: 'presentPrice',
				method: 'ascending'
			}
    }
  },
	uniReq: uni.request,
	renderInfo: [{
		name: "productList",
		renderList: productList
	}]
})

const ChangeTitle = (index: number) => {
	if (index !== shopItem.currentIndex) {
		shopItem.currentSort = false
		shopItem.currentIndex = index
		if (shopItem.currentIndex === 0) {
			infomation.data.queryInfo.sort.name = "presentPrice"
		}
		if (shopItem.currentIndex === 1) {
			infomation.data.queryInfo.sort.name = "discount"
		}
		if (shopItem.currentIndex === 2) {
			infomation.data.queryInfo.sort.name = "name"
		}
		infomation.data.queryInfo.sort.method = "ascending"
	}else {
		shopItem.currentSort = !shopItem.currentSort
		if (shopItem.currentSort) {
			infomation.data.queryInfo.sort.method = "descending"
		} else {
			infomation.data.queryInfo.sort.method = "ascending"
		}
	}
	new UniReqs(infomation)
}

const GetShopTitleClass = (index: number, part: string) => {
	if (shopItem.currentIndex !== index) {return ""}
	if (part === "text") {
		return "f-active-color"
	}
	if (part === "up") {
		if (!shopItem.currentSort) return "f-active-color"
	}
	if (part === "down") {
		if (shopItem.currentSort) return "f-active-color"
	}
	
	return ""
}

const IsFilter = () => {
	if (!content.value) return uni.showToast({
		title:"关键词不能为空",
		icon:"none"
	})

	infomation.data.queryInfo.content = content.value
	new UniReqs(infomation)
	uni.hideKeyboard()
}

// 生命周期
onLoad((option)=>{
	// #ifdef APP-PLUS
	currentWebview.setTitleNViewSearchInputText(option.content)
	// #endif
	
	infomation.data.queryInfo.content = option.content
	new UniReqs(infomation)
})

// 监听搜索框内容变化
onNavigationBarSearchInputChanged((e)=>{
	content.value = e.text
})

// 监听软键盘搜索按钮触发
onNavigationBarSearchInputConfirmed((e)=>{
	IsFilter()
})

// 监听左右上角的按钮点击
onNavigationBarButtonTap((e)=>{
	if (e.float === "right") {
		IsFilter()
	}
})
</script>

<style scoped>
.shop-title {
	display: flex;
}
.shop-item {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}
.iconfont {
	position: relative;
	top: 2rpx;
	font-size: 32rpx;
}
.icon-arrow-up {
	position: relative;
	top: 8rpx;
}
.icon-arrow-down {
	position: relative;
	bottom: 8rpx;
}
</style>
