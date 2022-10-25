<template>
	<view class="payment-success">
		<view class="f-active-color" style="font-size:52rpx;">支付成功</view>
		<view class="return-index f-active-color" @tap="GoIndex">返回首页</view>
	</view>
</template>

<script lang="ts" setup>
const GoIndex = () => {
	uni.switchTab({
		url: '/pages/index/index'
	});
};
</script>

<style scoped>
.payment-success {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.return-index {
	padding: 10rpx 60rpx;
	border: 2px solid #49bdfb;
	border-radius: 40rpx;
	margin-top: 40rpx;
}
</style>
