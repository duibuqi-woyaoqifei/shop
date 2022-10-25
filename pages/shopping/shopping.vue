<template>
	<view class="white-block"></view>
	<template v-if="shopList.length > 0">
		<view class="shop-cart"><uniNavBar title="购物车" :rightText="rightText" fixed="true" statusBar="true" @clickRight="ChangeStatus"></uniNavBar></view>

		<view class="shop-list">
			<view class="shop-item" v-for="(item, index) in shopList" :key="index">
				<label class="radio"><radio color="#FF6F91" :checked="item.checked" @tap="ChangeSelect(item, index)" /></label>

				<image class="shop-img" :src="item.imgUrl" mode=""></image>

				<view class="shop-item-content">
					<view class="item-info">{{ item.name }}</view>
					<view class="item-color">{{ item.color }}</view>
					<view class="item-pn">
						<view class="item-price">￥{{ item.presentPrice }}</view>
						<template v-if="!isEdit">
							<view class="item-num">*{{ item.num }}</view>
						</template>
						<template v-else>
							<uniNumberBox :value="item.num" :min="1" @change="ChangeNumber($event, index)"></uniNumberBox>
						</template>
					</view>
				</view>
			</view>
		</view>

		<view class="shop-foot">
			<label class="radio">
				<radio value="" color="#FF6F91" :checked="IsSelectAll" @tap="ChangeSelectAll" />
				<text>全选</text>
			</label>

			<template v-if="!isEdit">
				<view class="shop-total">
					<view class="">
						<view class="total-price">
							合计:
							<view class="f-active-color detail-price">
								￥
								<view>{{ Total.totalPrice }}</view>
							</view>
						</view>
						<view class="no-freight">不含运费</view>
					</view>
					<view class="balance" @tap="GoConfirmOrder">
						<view>结算({{ Total.totalNum }})</view>
					</view>
				</view>
			</template>

			<template v-else>
				<view class="shop-total">
					<view><view class="move-fav">移入收藏夹</view></view>
					<view class="balance"><view @tap="DeleteSelect">删除</view></view>
				</view>
			</template>
		</view>
	</template>

	<template v-else>
		<view class="shop-cart"><uniNavBar title="购物车" statusBar="true" fixed="true"></uniNavBar></view>

		<view class="shop-else-list">
			<image src="/static//img/emptyCart.jpg" mode=""></image>
			<text>囧~购物车还是空的...</text>
		</view>
	</template>
</template>

<script lang="ts" setup>
import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue';
import uniNumberBox from '@/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue';
import { reactive, ref } from 'vue';
import { useCartStore } from '@/store/modules/cart';
import { storeToRefs } from 'pinia';
import { onTabItemTap, onLoad } from '@dcloudio/uni-app';
import { useUserStore } from '@/store/modules/user';
import { UniReqs } from '@/plugins/request';
import { useOrderStore } from '@/store/modules/order';

const orderStore = useOrderStore();
const { orderNumber } = storeToRefs(orderStore);

const userStore = useUserStore();
const { loginStatus } = storeToRefs(userStore);
const { userInfo } = userStore;

const rightText = ref('编辑');
const isEdit = ref(false);

const cartStore = useCartStore();
const { shopList, IsSelectAll, Total, modify, selectList } = storeToRefs(cartStore);

const information = reactive({
	command: 'cart',
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

const ChangeStatus = () => {
	rightText.value = rightText.value === '编辑' ? '完成' : '编辑';
	isEdit.value = rightText.value === '编辑' ? false : true;
	if (modify.value) {
		uni.showToast({
			title: '修改成功',
			icon: 'none'
		});
		modify.value = false;
	}
};

const ChangeSelect = (item, index) => {
	if (item.checked) {
		cartStore.UnselectOne(item.id, index);
	} else {
		cartStore.SelectOne(item.id, index);
	}
};

const ChangeNumber = (value, index) => {
	information.data.operation = 'edit';
	information.data['updateInfo'] = {
		id: shopList.value[index].id,
		num: value
	};
	new UniReqs(information);
	shopList.value[index].num = value;
	modify.value = true;
};

const ChangeSelectAll = () => {
	if (IsSelectAll.value) {
		cartStore.UnselectAll();
	} else {
		cartStore.SelectAll();
	}
};

const GoConfirmOrder = () => {
	if (selectList.value.length) {
		const orderInfo = shopList.value.filter(item => {
			return selectList.value.indexOf(item.id) !== -1;
		});

		information.command = 'order';
		information.data.operation = 'add';
		information.data['orderInfo'] = orderInfo;
		information.data['totalPrice'] = Total.value.totalPrice + 888;

		new UniReqs(information, data => {
			if (data.success) {
				orderNumber.value = data.orderInfo[0].orderNumber;
				orderStore.orderInfo = data.orderInfo[0];
				uni.navigateTo({
					url: '/pages/confirm-order/confirm-order?selectList=' + JSON.stringify(selectList.value)
				});
			}
		});
	} else {
		uni.showToast({
			title: '请选择商品',
			icon: 'none'
		});
	}
};

const GoLogin = () => {
	uni.navigateTo({
		url: '/pages/login/login'
	});
};

const DeleteSelect = () => {
	if (selectList.value.length === 0) {
		uni.showToast({
			title: '无勾选内容',
			icon: 'none'
		});
		return;
	}
	information.data.operation = 'delete';
	information.data['itemsId'] = selectList.value;
	new UniReqs(information);

	shopList.value = shopList.value.filter(item => {
		return selectList.value.indexOf(item.id) === -1;
	});
	selectList.value = [];
	uni.showToast({
		title: '删除成功',
		icon: 'none'
	});
};

onTabItemTap(() => {
	if (isEdit.value) {
		ChangeStatus();
	}
	if (!loginStatus.value) {
		GoLogin();
		uni.showToast({
			title: '请先登录',
			icon: 'none'
		});
	}
});

onLoad(() => {
	new UniReqs(information, data => {
		shopList.value = data.shopList;
	});
});
</script>

<style scoped>
.shop-else-list {
	background-color: #f7f7f7;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.shop-else-list image {
	width: 200rpx;
	height: 150rpx;
	padding-bottom: 50rpx;
}
.white-block {
	position: fixed;
	height: 20rpx;
	width: 100%;
	background-color: #fff;
	z-index: 999;
}
.shop-cart {
	padding-top: 20rpx;
}
.shop-list {
	padding-bottom: 100rpx;
}
.shop-item {
	display: flex;
	align-items: center;
	padding-left: 20rpx;
	margin: 10rpx 0;
}
.shop-img {
	width: 200rpx;
	height: 200rpx;
}
.item-info {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: #333;
	word-break: break-all;
}
.item-color {
	font-size: 24rpx;
	color: #c7c4cb;
}
.item-pn {
	display: flex;
	justify-content: space-between;
	padding-top: 10rpx;
}
.shop-item-content {
	flex: 1;
	padding-right: 20rpx;
}
.shop-foot {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 2rpx solid #f7f7f7;
	background-color: #fff;
}
.shop-foot .radio {
	padding-left: 20rpx;
}
.shop-total {
	display: flex;
}
.balance {
	height: 100rpx;
	width: 200rpx;
	background-color: #49bdfb;
	color: #fff;
	line-height: 100rpx;
	text-align: center;
}
.total-price {
	display: flex;
	padding-top: 10rpx;
	margin-right: 20rpx;
	height: 50rpx;
}
.detail-price {
	display: flex;
	line-height: 50rpx;
}
.detail-price view {
	font-size: 38rpx;
	display: flex;
}
.no-freight {
	font-size: 20rpx;
	color: #4b4453;
	text-align: right;
	padding-right: 20rpx;
}
.move-fav {
	width: 250rpx;
	line-height: 100rpx;
	text-align: center;
	background-color: #b0a8b9;
	color: #fff;
}
</style>
