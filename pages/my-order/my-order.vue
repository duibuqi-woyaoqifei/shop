<template>
	<view class="line"></view>

	<view class="my-order-top">
		<view class="my-order-top-bar" :class="IsActive(index)" v-for="(item, index) in tabList" :key="index" @tap="ChangeIndex(index)">{{ item.name }}</view>
	</view>

	<block v-for="(item, index) in tabList" :key="index">
		<view v-show="currentIndex === 0">
			<view v-if="item.orderList.length > 0" class="order-main">
				<!--商品-->
				<view>
					<scroll-view scroll-y="true" :style="'height: ' + orderListHeight + 'px;'">
						<view class="order-goods">
							<view class="goods-status f-active-color">{{ item.name }}</view>
							<view class="goods-item" v-for="(item2, index2) in item.orderList" :key="index2"><OrderList :item="item2" :index="index2"></OrderList></view>
						</view>
					</scroll-view>
					<view class="line"></view>
					<!--总价-->
					<view class="total-price">
						订单金额:
						<text class="f-active-color">¥{{ totalPrice(index) }}</text>
						(包含运费¥0.00)
					</view>
					<view class="line"></view>
					<!--支付-->
					<view class="payment" @tap="Payment"><view class="payment-text f-active-color">支付</view></view>
				</view>
			</view>

			<view v-else class="no-order" :style="'height: ' + systemHeight + 'px;'">
				<view class="goods-status f-active-color">{{ item.name }}</view>
				<view>您还没有相关订单</view>
				<view class="no-order-home">去首页逛逛</view>
			</view>
		</view>
	</block>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import OrderList from '@/components/common/OrderList.vue';
import { onReady } from '@dcloudio/uni-app';

const systemHeight = uni.getSystemInfoSync().windowHeight;
const tabList = ref([
	{
		name: '全部',
		orderList: [
			{
				id: 6,
				name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				color: '颜色：少女粉',
				imgUrl: '/static/img/Children1.jpg',
				presentPrice: '9999',
				num: 1,
				checked: false
			},
			{
				id: 1,
				name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				color: '颜色：少女粉',
				imgUrl: '/static/img/Children2.jpg',
				presentPrice: '9999',
				num: 1,
				checked: false
			},
			{
				id: 1,
				name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				color: '颜色：少女粉',
				imgUrl: '/static/img/Children2.jpg',
				presentPrice: '9999',
				num: 1,
				checked: false
			},
			{
				id: 1,
				name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				color: '颜色：少女粉',
				imgUrl: '/static/img/Children2.jpg',
				presentPrice: '9999',
				num: 1,
				checked: false
			},
			{
				id: 1,
				name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				color: '颜色：少女粉',
				imgUrl: '/static/img/Children2.jpg',
				presentPrice: '9999',
				num: 1,
				checked: false
			},
			{
				id: 1,
				name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				color: '颜色：少女粉',
				imgUrl: '/static/img/Children2.jpg',
				presentPrice: '9999',
				num: 1,
				checked: false
			},
			{
				id: 1,
				name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				color: '颜色：少女粉',
				imgUrl: '/static/img/Children2.jpg',
				presentPrice: '9999',
				num: 1,
				checked: false
			}
		]
	},
	{
		name: '待付款',
		orderList: []
	},
	{
		name: '待发货',
		orderList: []
	},
	{
		name: '待收货',
		orderList: []
	},
	{
		name: '待评价',
		orderList: []
	}
]);
const currentIndex = ref(0);
const orderListHeight = ref(100);

const totalPrice = index => {
	let total = 0;
	for (let i of tabList.value[index].orderList) {
		total += i.presentPrice * 1;
	}
	return total;
};

const IsActive = index => {
	if (currentIndex.value === index) {
		return 'active';
	} else {
		return '';
	}
};

const ChangeIndex = index => {
	currentIndex.value = index;
};

const Payment = () => {
	console.log(orderListHeight.value);
};

const GetOrderListHeight = () => {
	orderListHeight.value = systemHeight - 320;
};

onReady(() => {
	GetOrderListHeight();
});
</script>

<style scoped>
.my-order-top {
	height: 60rpx;
	width: 100%;
	display: flex;
	line-height: 60rpx;
	text-align: center;
	justify-content: space-around;
}
.my-order-top-bar {
}
.active {
	border-bottom: 4rpx solid #49bdfb;
}
.no-order {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
}
.no-order-home {
	padding: 6rpx 60rpx;
	border: 2rpx solid #49bdfb;
	color: #49bdfb;
	border-radius: 40rpx;
}
.goods-status {
	display: flex;
	justify-content: flex-end;
	background-color: #ffffff;
	padding: 20rpx;
	font-size: 28rpx;
}
.total-price {
	display: flex;
	justify-content: flex-end;
	background-color: #ffffff;
	padding: 20rpx;
}
.payment {
	display: flex;
	justify-content: flex-end;
	background-color: #ffffff;
	padding: 20rpx;
}
.payment-text {
	border: 2rpx solid #49bdfb;
	padding: 6rpx 30rpx;
	border-radius: 30rpx;
}
</style>
