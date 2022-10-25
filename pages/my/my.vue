<template>
	<view class="my">
		<!--头部-->
		<view class="my-header">
			<view class="header-main">
				<view class="header-config" @tap="GoConfig"><image class="config-img" src="/static/img/config.png" mode=""></image></view>
				<view class="header-logo">
					<image class="logo-img" :src="userInfo.imgUrl" mode="" @tap="GoLogin"></image>
					<view class="logo-name">{{ userInfo.nickName }}</view>
				</view>
			</view>
		</view>
		<!--我的订单-->
		<view class="order">
			<view class="order-title">
				<view>我的订单</view>
				<view class="all-orders" @tap="GoMyOrder">
					全部订单
					<view class="iconfont icon-arrow-right"></view>
				</view>
			</view>
			<view class="order-list">
				<view class="order-item">
					<image class="order-img" src="/static/img/order1.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="/static/img/order2.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="/static/img/order3.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="/static/img/order4.png" mode=""></image>
					<view>待付款</view>
				</view>
				<view class="order-item">
					<image class="order-img" src="/static/img/order5.png" mode=""></image>
					<view>待付款</view>
				</view>
			</view>
		</view>
		<!--内容列表-->
		<view class="my-content">
			<view class="my-content-item" v-for="(item, index) in 10" :key="index">
				<view>我的收藏</view>
				<view class="iconfont icon-arrow-right"></view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/modules/user';
import { storeToRefs } from 'pinia';
import { onLoad, onTabItemTap } from '@dcloudio/uni-app';

const userStore = useUserStore();
const { loginStatus, userInfo, token } = storeToRefs(userStore);

const GoConfig = () => {
	uni.navigateTo({
		url: '/pages/config/config'
	});
};

const GoMyOrder = () => {
	if (!loginStatus.value) {
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
		url: '/pages/my-order/my-order'
	});
};

const GoLogin = () => {
	uni.navigateTo({
		url: '/pages/login/login'
	});
};

onTabItemTap(() => {
	if (!loginStatus.value) {
		GoLogin();
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		});
	}
});
</script>

<style scoped>
.my-header {
	background: url('/static/img/mybg.png') no-repeat;
	width: 100%;
	height: 400rpx;
}
.header-main {
	position: relative;
	top: 120rpx;
}
.header-config {
	position: absolute;
	left: 20rpx;
	z-index: 999;
}
.header-logo {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 750rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.config-img {
	width: 40rpx;
	height: 40rpx;
}
.logo-img {
	width: 120rpx;
	height: 120rpx;
	border: 2rpx solid #cccccc;
	border-radius: 50%;
	background-color: #ffffff;
}
.logo-name {
	font-weight: bold;
	color: #ffffff;
	text-align: center;
	width: 100%;
	padding-top: 20rpx;
}
.order-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx;
}
.order-list {
	padding: 20rpx;
	display: flex;
}
.order-item {
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.order-img {
	width: 66rpx;
	height: 66rpx;
}
.all-orders {
	display: flex;
}
.all-orders .icon-arrow-right {
	position: relative;
	top: 10rpx;
}
.my-content {
	margin: 20rpx 0;
	padding: 0 20rpx;
}
.my-content-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx 0;
	border-bottom: 2px solid #cccccc;
}
</style>
