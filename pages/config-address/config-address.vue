<template>
	<view class="my-path-list">
		<view class="path-list">
			<view class="path-item" v-for="(item, index) in addressList" :key="index" @tap="GoEditAddress(index)">
				<view class="item-main">
					<view class="item-name">{{ item.name }}</view>
					<view>{{ item.phone }}</view>
				</view>
				<view class="item-main">
					<view class="active" v-show="item.isDefault">默认</view>
					<view class="item-details-address">{{ item.city + ' ' + item.details }}</view>
				</view>
			</view>
		</view>

		<view class="add-path"><view class="add-path-btn" @tap="GoAddAddress">新增地址</view></view>
	</view>
</template>

<script lang="ts" setup>
import { useAddressStore } from '@/store/modules/address';
import { storeToRefs } from 'pinia';
import { onLoad } from '@dcloudio/uni-app';
import { UniReqs } from '@/plugins/request';
import { reactive } from 'vue';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const { userInfo } = userStore;

const addressStore = useAddressStore();
const { addressList } = storeToRefs(addressStore);
let from = '';

const information = reactive({
	command: 'address',
	data: {
		commander: '',
		operation: 'get',
		queryInfo: {
			pageNum: 1,
			pageSize: 9999,
			content: userInfo['id'],
			column: 'userId'
		}
	},
	uniReq: uni.request
});

let GoAddAddress = () => {
	uni.navigateTo({
		url: '/pages/add-address/add-address'
	});
};

const BackConfirmOrder = item => {
	uni.$emit('selectItem', item);
	uni.navigateBack();
};

const GoEditAddress = index => {
	if (from === 'confirm-order') {
		BackConfirmOrder(addressList.value[index]);
		return;
	}
	const addressObj = JSON.stringify({
		index,
		item: addressList.value[index]
	});
	uni.navigateTo({
		url: '/pages/add-address/add-address?data=' + addressObj
	});
};

const InitAddress = () => {
	new UniReqs(information, data => {
		addressList.value = data.addressList;
	});
};

onLoad(e => {
	if (e.from === 'confirm-order') {
		from = e.from;
	}
	InitAddress();
});
</script>

<style scoped>
.path-list {
	padding: 0 20rpx;
}
.path-item {
	padding: 10rpx;
	border-bottom: 4rpx solid #cccccc;
	height: 80rpx;
}
.item-main {
	display: flex;
	align-items: center;
}
.item-name {
	padding: 0 10rpx;
	font-size: 30rpx;
}
.active {
	background-color: #49bdfb;
	color: #ffffff;
	border-radius: 26rpx;
	font-size: 30rpx;
	text-align: center;
	width: 80rpx;
}
.add-path {
	padding: 20rpx 0;
	width: 100%;
	display: flex;
	justify-content: center;
}
.add-path-btn {
	border: 2rpx solid #49bdfb;
	color: #49bdfb;
	border-radius: 30rpx;
	padding: 6rpx 60rpx;
}
.item-details-address {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	word-break: break-all;
	position: relative;
	left: 10rpx;
	width: 600rpx;
	font-size: 24rpx;
}
</style>
