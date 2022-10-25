<template>
	<view class="my-config">
		<view class="config-item" v-for="(item, index) in 10" :key="index" @tap="GoAddressManage">
			<view>地址管理</view>
			<view class="config-mark iconfont icon-arrow-right"></view>
		</view>

		<view class="quit" @tap="LoginOut">退出</view>
	</view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const { LoginOut, loginStatus } = userStore;

const GoAddressManage = () => {
	if (!loginStatus) {
		uni.navigateTo({
			url: '/pages/login/login'
		});
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		});
		return;
	}
	uni.navigateTo({
		url: '/pages/config-address/config-address'
	});
};
</script>

<style scoped>
.config-item {
	display: flex;
	justify-content: space-between;
	padding: 20rpx 0 20rpx 20rpx;
	border-bottom: 2rpx solid #cccccc;
}
.config-mark {
	padding-right: 20rpx;
}
.quit {
	background-color: #49bdfb;
	width: 100%;
	line-height: 80rpx;
	color: #fff;
	text-align: center;
}
</style>
