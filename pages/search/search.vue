<template>
	<view class="search">
		<view class="line"></view>
		
		<view class="search-item">
			<view class="search-title">
				<view>最近搜索</view>
				<view class="iconfont icon-ashbin" @tap="ClearSearched"></view>
			</view>
			<view class="search-content">
				<view v-if="searchedContent.length" class="search-content-item" v-for="(item,index) in searchedContent" :key="index" @tap="ToSearchResult(item)">
					{{item}}
				</view>
				
				<view v-else class="noSearched">
					暂无搜索记录
				</view>
			</view>
		</view>
		
		<view class="search-item">
			<view class="search-title">
				<view>热门搜索</view>
				<view class="iconfont"></view>
			</view>
			<view class="search-content">
				<view class="search-content-item" v-for="(item,index) in hotSearched" :key="index" @tap="ToSearchResult(item)">
					{{item}}
				</view>
			</view>
		</view>
		
	</view>
</template>

<script lang="ts" setup>
import { onNavigationBarButtonTap, onNavigationBarSearchInputChanged, onNavigationBarSearchInputConfirmed, onLoad } from "@dcloudio/uni-app";
import { ref, reactive } from "vue";

var pages = getCurrentPages();  
var page = pages[pages.length - 1];
// #ifdef APP-PLUS
var currentWebview = page.$getAppWebview();
// #endif

const content = ref("")
const searchedContent = ref([])
const hotSearched = ref(["四件套","面膜","外套","毛绒玩偶"])

const infomation = reactive({
  command: 'index/search',
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

const ToSearchResult = (item) => {
	uni.navigateTo({
		url: '../SearchResult/SearchResult?content=' + item
	});
}

const IsSearch = () => {
	if (!content.value) return uni.showToast({
		title:"关键词不能为空",
		icon:"none"
	})
	uni.navigateTo({
		url: '../SearchResult/SearchResult?content=' + content.value
	});
	AddSearched()
	uni.hideKeyboard()
	// #ifdef APP-PLUS
	currentWebview.setTitleNViewSearchInputText("")
	// #endif
}

const AddSearched = () => {
	const sIndex = searchedContent.value.indexOf(content.value)
	
	if (sIndex === -1) {
		searchedContent.value.unshift(content.value)
	} else {
		searchedContent.value.unshift(searchedContent.value.splice(sIndex)[0])
	}
	
	uni.setStorage({
		key:"searchedContent",
		data:JSON.stringify(searchedContent.value)
	})
}

const ClearSearched = () => {
	uni.showModal({
		title:"重要提示",
		content:"是否清除搜索记录",
		cancelText:"取消",
		confirmText:"确定",
		success: (data) => {
			if (data.confirm) {
				uni.removeStorage({
					key:"searchedContent",
					success: (data) => {
						searchedContent.value = []
					}
				})
			}
		}
	})
}

// 监听搜索框内容变化
onNavigationBarSearchInputChanged((e)=>{
	content.value = e.text
})

// 监听软键盘搜索按钮触发
onNavigationBarSearchInputConfirmed((e)=>{
	IsSearch()
})

// 监听左右上角的按钮点击
onNavigationBarButtonTap((e)=>{
	if (e.float === "right") {
		IsSearch()
	}
})

// 生命周期
onLoad(()=>{
	uni.getStorage({
		key:"searchedContent",
		success: ({data}) => {
			searchedContent.value = JSON.parse(data)
		}
	})
})
</script>

<style>
.search-item {
	margin-top: 20rpx;
	color: #636263;
}
.search-title {
	margin-left: 20rpx;
	font-size: 28rpx;
	font-weight: bold;
	display: flex;
}
.search-content {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	margin-top: 10rpx;
}
.search-content-item {
	text-align: center;
	height: 60rpx;
	background-color: rgba(176,168,185,.5);
	margin: 10rpx 15rpx;
	line-height: 60rpx;
	border-radius: 30rpx;
	font-size: 29rpx;
	padding-left: 25rpx;
	padding-right: 25rpx;
}
.icon-ashbin {
	position: absolute;
	right: 10rpx;
	font-size: 40rpx;
}
.noSearched {
	margin: 10rpx auto;
	text-align: center;
}
</style>
