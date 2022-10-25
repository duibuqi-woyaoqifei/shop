<template>
	<uniNavBar title="确认支付" leftText="关闭" fixed="true" statusBar="true" @clickLeft="GoBack"></uniNavBar>

	<view class="payment-list">
		<view v-for="(item, index) in paymentList" :key="index">
			<view class="payment-item">
				<view class="payment-item-left">
					<image class="payment-item-img" :src="item.imgUrl" mode=""></image>
					<view class="">
						<view>{{ item.name }}支付</view>
						<view class="payment-item-text-tip">推荐{{ item.name }}用户使用</view>
					</view>
				</view>
				<label class="radio">
					<radio color="#FF6F91" value="" :checked="isChecked(index)" @tap="ChangeCheck(index)" />
					<text></text>
				</label>
			</view>
			<view class="line"></view>
		</view>
	</view>

	<view class="pay-foot">
		<view class="total">
			<text class="f-color">合计:</text>
			<text class="total-price">¥{{ totalPrice }}.00</text>
		</view>
		<view class="go-pay" @tap="GoPayment">去支付</view>
	</view>
</template>

<script lang="ts" setup>
import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue';
import { reactive, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { UniReqs } from '@/plugins/request';
import { useOrderStore } from '@/store/modules/order';

const orderStore = useOrderStore();
const { orderInfo } = orderStore;

const currentCheckIndex = ref(0);
const totalPrice = ref(0);
const paymentList = ref([
	{
		id: 1,
		name: '支付宝',
		imgUrl: '/static/img/zfb.png'
	},
	{
		id: 2,
		name: '微信',
		imgUrl: '/static/img/wxf.png'
	}
]);

const information = reactive({
	command: 'payment',
	data: {
		commander: '',
		operation: 'get',
		orderInfo
	},
	uniReq: uni.request
});

const isChecked = index => {
	return index === currentCheckIndex.value ? true : false;
};

const GoBack = () => {
	uni.navigateBack();
};

const GoPayment = () => {
	new UniReqs(information, data => {
		console.log(data);
	});
	uni.navigateTo({
		url: '/pages/payment-success/payment-success'
	});
};

const ChangeCheck = index => {
	currentCheckIndex.value = index;
};

onLoad(e => {
	totalPrice.value = JSON.parse(e.details).total;
});
</script>

<style scoped>
.payment-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40rpx;
}
.payment-item-left {
	display: flex;
	justify-content: flex-start;
}
.payment-item-img {
	width: 100rpx;
	height: 100rpx;
	margin-right: 40rpx;
}
.payment-item-text-tip {
	color: #ccc;
}
.payment-list {
	margin-top: 20rpx;
}
.pay-foot {
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 0;
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.total {
	padding-left: 100rpx;
	flex: 1;
	background-color: ##b0a8b9;
	line-height: 100rpx;
}
.go-pay {
	color: #ffffff;
	background-color: #49bdfb;
	line-height: 100rpx;
	text-align: center;
	width: 220rpx;
}
</style>
