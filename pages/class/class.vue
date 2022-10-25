<template>
	<view class="line"></view>

	<view class="list">
		<scroll-view scroll-y="true" class="list-left" :style="'height:' + boxHeight + 'px;'">
			<view v-for="(item, index) in allList" :key="index" class="left-item">
				<view class="left-name" :class="GetLeftClass(index)" @tap="SelectLeftItem(index)">{{ item.title }}</view>
			</view>
		</scroll-view>

		<scroll-view scroll-y="true" class="list-right" :style="'height:' + boxHeight + 'px;'">
			<swiper :vertical="true" :style="'height:' + boxHeight + 'px;'" @change="ChangeBlock" :current="currentLeftIndex">
				<swiper-item v-for="(item, index) in allList" :key="index">
					<view class="list-right-block">
						<view class="list-right-block-title">{{ item.title }}</view>
						<view class="list-right-block-content">
							<view class="list-right-block-item" v-for="(item2, index2) in item.list" :key="index2">
								<image class="list-right-block-item-img" :src="item2.imgUrl" mode=""></image>
								<view class="list-right-block-item-name">{{ item2.name }}</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</scroll-view>
	</view>

	<view id="ddd"></view>
</template>

<script lang="ts" setup>
import { onNavigationBarSearchInputClicked, onLoad } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
import { UniReqs } from '@/plugins/request';

const boxHeight = ref();
const currentLeftIndex = ref(0);
const allList = ref([]);

const GetBoxHeight = () => {
	const systemHeight = uni.getSystemInfoSync().windowHeight;
	boxHeight.value = systemHeight - 12;
};

const information = reactive({
	command: 'class/0',
	data: {
		commander: '',
		operation: 'get',
		queryInfo: {
			pageNum: 1,
			pageSize: 5,
			content: ''
		}
	},
	uniReq: uni.request
});

const GetElementHeight = (selector: string, id: number, delay: number = 0) => {
	setTimeout(function() {
		const ID = id ? id : '';
		let view = uni.createSelectorQuery().selectAll(selector + ID);
		view.boundingClientRect(data => {
			if (!data) return;
			let itemHeightList = [];
			for (let item of data) {
				itemHeightList.push(item.height);
			}
			return itemHeightList;
		}).exec();
	}, delay);
};

const ChangeBlock = event => {
	currentLeftIndex.value = event.detail.current;
};

const SelectLeftItem = index => {
	currentLeftIndex.value = index;
};

const GetLeftClass = index => {
	return index === currentLeftIndex.value ? 'left-name-active' : '';
};

onLoad(() => {
	GetBoxHeight();
	new UniReqs(information, data => {
		allList.value = data;
	});
	GetElementHeight('.list-right-block');
});

onNavigationBarSearchInputClicked(() => {
	uni.navigateTo({
		url: '../search/search'
	});
});
</script>

<style scoped>
.list {
	display: flex;
}
.list-left {
	width: 200rpx;
}
.left-item {
	height: 100rpx;
	line-height: 100rpx;
	text-align: center;
	background-color: #f7f7f7;
	border-bottom: 2rpx solid #fff;
	font-style: 28rpx;
}
.left-name-active {
	border-left: 8rpx solid #49bdfb;
	background-color: #fff;
}
.list-right-block-title {
	font-weight: bold;
	padding: 20rpx;
	font-style: 30rpx;
}
.list-right {
	width: 550rpx;
}
.list-right-block-content {
	display: flex;
	flex-wrap: wrap;
}
.list-right-block-item {
	width: 150rpx;
	margin: 15rpx;
}
.list-right-block-item-img {
	width: 150rpx;
	height: 150rpx;
}
.list-right-block-item-name {
	margin-top: 10rpx;
	width: 100%;
	text-align: center;
}
</style>
