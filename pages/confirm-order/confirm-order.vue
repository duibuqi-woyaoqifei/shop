<template>
	<view class="confirm-order">
		<view class="line"></view>
		<view class="order-map" @tap="GoAddressManage" v-if="GetDefaultAddress !== undefined">
			<view class="iconfont icon-map"></view>
			<view>
				<view class="addressee">
					<view class="addressee-name">收件人：{{ currentAddress.name }}</view>
					<view class="addressee-phone">{{ currentAddress.phone }}</view>
				</view>
				<view class="details-address">收货地址：{{ currentAddress.city }} {{ currentAddress.details }}</view>
			</view>
			<view class="iconfont icon-arrow-right"></view>
		</view>
		<view class="order-map" @tap="GoAddressManage" v-else>请选择地址</view>

		<view class="order-list">
			<view class="shopname">
				<image class="order-list-img" src="/static/img//logo.png" mode=""></image>
				<text>Phallus旗舰店</text>
			</view>
			<view class="order-list-item" v-for="(item, index) in orderList" :key="index"><OrderList :item="item" :index="index"></OrderList></view>
			<view class="order-foot">
				<view>运费</view>
				<view>￥888.00</view>
			</view>
			<view class="order-foot">
				<view class="leaving-message">
					<view>留言：</view>
					<input type="text" placeholder="给卖家的留言,140字以内" />
				</view>
			</view>
			<view class="small-count">
				共{{ Total.totalNum }}件商品 小计：
				<view class="f-active-color">￥{{ Total.totalPrice }}</view>
			</view>
		</view>

		<view class="submit-order">
			<view class="total-price">
				合计：
				<text class="f-active-color">¥{{ Total.totalPrice + 888 }}.00</text>
			</view>
			<view class="confirm" @tap="GoPayment">提交订单</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import OrderList from '@/components/common/OrderList.vue';
import { reactive, ref } from 'vue';
import { useAddressStore } from '@/store/modules/address';
import { onLoad } from '@dcloudio/uni-app';
import { useCartStore } from '@/store/modules/cart';
import { storeToRefs } from 'pinia';
import { UniReqs } from '../../plugins/request';
import { useOrderStore } from '@/store/modules/order';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const { userInfo } = userStore;

const orderStore = useOrderStore();
const { orderInfo } = orderStore;

const cartStore = useCartStore();
const { shopList, selectList } = storeToRefs(cartStore);
const { Total } = cartStore;

const addressStore = useAddressStore();
const { GetDefaultAddress } = addressStore;
if (GetDefaultAddress !== undefined) {
	var { name, phone, city, details } = GetDefaultAddress;
}

const currentAddress = reactive({
	name,
	phone,
	city,
	details
});

const information = reactive({
	command: 'cart',
	data: {
		commander: '',
		operation: 'delete',
		queryInfo: {
			pageNum: 1,
			pageSize: 9999,
			content: '',
			column: ''
		},
		itemsId: selectList.value,
		autoReq: true
	},
	uniReq: uni.request
});

const orderList = ref([]);

const GoAddressManage = () => {
	uni.navigateTo({
		url: '/pages/config-address/config-address?from=confirm-order'
	});
};

const GoPayment = () => {
	new UniReqs(
		{
			command: 'order',
			data: {
				commander: '',
				operation: 'edit',
				queryInfo: {
					pageNum: 1,
					pageSize: 9999,
					content: '',
					column: ''
				},
				updateInfo: {
					...orderInfo,
					orderStatus: 2
				}
			},
			uniReq: uni.request
		},
		data => {
			if (data.success) {
				new UniReqs(
					{
						command: 'cart',
						data: {
							commander: '',
							operation: 'delete',
							queryInfo: {
								pageNum: 1,
								pageSize: 9999,
								content: userInfo['id'],
								column: 'userId'
							},
							autoReq: true,
							itemsId: selectList.value
						},
						uniReq: uni.request
					},
					data => {
						shopList.value = data.shopList;
						selectList.value = [];
					}
				);
			}
		}
	);
	uni.navigateTo({
		url:
			'/pages/peyment/peyment?details=' +
			JSON.stringify({
				total: Total.totalPrice + 888
			})
	});
};

onLoad(e => {
	orderList.value = shopList.value.filter(item => {
		return selectList.value.indexOf(item.id) !== -1;
	});
	uni.$on('selectItem', res => {
		for (let i in currentAddress) {
			currentAddress[i] = res[i];
		}
	});
});
</script>

<style scoped>
.confirm-order {
	background-color: #fcf7ff;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
}
.order-map {
	display: flex;
	justify-content: space-around;
	background-color: #fff;
	height: 150rpx;
	align-items: center;
	font-size: 28rpx;
}
.addressee {
	display: flex;
	justify-content: space-between;
	width: 600rpx;
}
.icon-map {
	font-size: 60rpx;
}
.icon-arrow-right {
	font-style: 50rpx;
}
.line {
	margin: 0;
}
.order-list {
	background-color: #fff;
	margin-top: 20rpx;
}
.order-list-img {
	position: relative;
	top: 20rpx;
	left: 20rpx;
	width: 60rpx;
	height: 60rpx;
}
.order-list text {
	position: relative;
	left: 30rpx;
}
.shopname {
	height: 90rpx;
	line-height: 90rpx;
}
.order-list-item {
	background-color: #fcf7ff;
}
.order-foot {
	display: flex;
	justify-content: space-between;
	height: 70rpx;
	line-height: 70rpx;
	padding: 0 20rpx;
	font-size: 26rpx;
	border-bottom: 2rpx solid #fcf7ff;
}
.leaving-message {
	display: flex;
}
.leaving-message input {
	position: relative;
	top: 16rpx;
	width: 550rpx;
}
.small-count {
	font-size: 26rpx;
	display: flex;
	justify-content: flex-end;
	position: relative;
	right: 20rpx;
}
.details-address {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	word-break: break-all;
}
.submit-order {
	height: 80rpx;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #ffffff;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.total-price {
	padding: 0 20rpx;
}
.confirm {
	color: #ffffff;
	background-color: #49bdfb;
	padding: 10rpx 30rpx;
	margin-right: 20rpx;
}
</style>
