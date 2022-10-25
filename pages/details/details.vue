<template>
	<view class="details">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in swiperList" :key="index">
				<view class="swiper-item"><image class="details-img" :src="item.imgUrl" mode=""></image></view>
			</swiper-item>
		</swiper>

		<view class="details-goods">
			<view class="details-goods-pprice">￥{{ goodContent[0].presentPrice }}</view>
			<view class="details-goods-oprice">￥{{ goodContent[0].originalPrice }}</view>
			<view class="details-goods-name">{{ goodContent[0].name }}</view>
		</view>

		<view class="">
			<view class=""><image class="details-img" src="/static/img/detail1.jpg" mode=""></image></view>
			<view class=""><image class="details-img" src="/static/img/detail2.jpg" mode=""></image></view>
			<view class=""><image class="details-img" src="/static/img/detail3.jpg" mode=""></image></view>
			<view class=""><image class="details-img" src="/static/img/detail4.jpg" mode=""></image></view>
			<view class=""><image class="details-img" src="/static/img/detail5.jpg" mode=""></image></view>
		</view>

		<GuessYou title="看了又看"></GuessYou>
		<ProductList :list="productList"></ProductList>

		<view class="details-foot">
			<view class="iconfont icon-more"></view>
			<view class="iconfont icon-cart-Empty" @tap="GoShopCart"></view>
			<view class="add-shopcart" @tap="ShowPop">加入购物车</view>
			<view class="buy-now">立即购买</view>
		</view>

		<view class="pop" v-show="isShowPop">
			<view class="pop-mask"></view>
			<view class="pop-box" :class="boxAnimation">
				<view class=""><image class="pop-img" :src="goodContent[0].imgUrl" mode=""></image></view>
				<view class="pop-num">
					<view>购买数量</view>
					<uniNumberBox :min="1" :value="shopNum" @change="ChangeNum"></uniNumberBox>
				</view>
				<view class="pop-confirm" @tap="ConfirmAdd(goodContent[0], HidePop)">确定</view>
				<view class="pop-icon" @tap="HidePop">×</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import ProductList from '@/components/common/ProductList.vue';
import GuessYou from '@/components/common/GuessYou.vue';
import { UniReqs } from '@/plugins/request';
import uniNumberBox from '@/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue';
import { onBackPress, onLoad, onNavigationBarButtonTap } from '@dcloudio/uni-app';
import { useCartStore } from '@/store/modules/cart';
import { useUserStore } from '@/store/modules/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { loginStatus } = storeToRefs(userStore);
const { userInfo } = userStore;

const cartStore = useCartStore();
const { shopList } = storeToRefs(cartStore);

const isShowPop = ref(false);
const boxAnimation = ref('');
const shopNum = ref(1);

const swiperList = ref([{ imgUrl: '/static/img/detail1.jpg' }, { imgUrl: '/static/img/detail2.jpg' }, { imgUrl: '/static/img/detail3.jpg' }]);
const productList = ref([]);
const goodContent = ref([
	{
		id: 1,
		name: '',
		presentPrice: 0,
		originalPrice: 0,
		imgUrl: '',
		num: 1
	}
]);

const information = reactive({
	command: 'goods',
	data: {
		commander: userInfo['nickName'],
		operation: 'get',
		queryInfo: {
			pageNum: 1,
			pageSize: 9999,
			content: ''
		}
	},
	uniReq: uni.request
});

const ChangeNum = value => {
	shopNum.value = value;
	goodContent.value[0].num = value;
};

const GoShopCart = () => {
	uni.switchTab({
		url: '/pages/shopping/shopping'
	});
};

const ShowPop = () => {
	isShowPop.value = true;
	boxAnimation.value = 'Upslide';
	goodContent.value[0].num = 1;
};

const HidePop = () => {
	boxAnimation.value = 'UpslideBack';
	setTimeout(() => {
		isShowPop.value = false;
	}, 300);
};

const ConfirmAdd = item => {
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

	information.command = 'cart';
	information.data.operation = 'add';
	information.data['updateInfo'] = item;
	information.data['userId'] = userInfo['id'];
	information.data['autoReq'] = true;
	information.data.queryInfo.content = userInfo['id'];
	information.data.queryInfo['column'] = 'userId';
	new UniReqs(information, data => {
		shopList.value = data.shopList;
		uni.showToast({
			title: '添加购物车成功',
			icon: 'none'
		});
		HidePop();
	});
};

onLoad(e => {
	information.data.queryInfo['id'] = e.id;
	new UniReqs(information, data => {
		goodContent.value = data;
	});
});

onMounted(() => {
	information.command = 'index/0';
	new UniReqs(information, data => {
		productList.value = data.productList;
	});
});

// 监听返回按钮
onBackPress(() => {
	if (isShowPop.value === true) {
		HidePop();
		return true;
	}
});

onNavigationBarButtonTap(e => {
	if (e.type === 'share') {
		uni.share({
			provider: 'weixin',
			title: goodContent.value[0].name,
			scene: 'WXSceneSession',
			href: 'http://192.168.1.80:8080/#/pages/details/details?id=' + goodContent.value[0].id,
			imgUrl: goodContent.value[0].imgUrl,
			success: res => {
				uni.showTabBar({
					title: '分享成功'
				});
			}
		});
	}
});
</script>

<style scoped>
.details {
	padding-bottom: 90rpx;
}
.details swiper {
	width: 100%;
	height: 700rpx;
}
.details-img {
	width: 100%;
	height: 700rpx;
}
.details-goods {
	text-align: center;
	font-weight: bold;
	font-size: 36rpx;
	padding: 10rpx;
}
.details-foot {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 90rpx;
	background-color: #fff;
}
.details-foot .iconfont {
	width: 60rpx;
	height: 60rpx;
	border-radius: 100%;
	background-color: #4b4453;
	color: #fff;
	text-align: center;
	line-height: 60rpx;
	margin: 0 10rpx;
}
.details-goods-oprice {
	font-size: 26rpx;
	font-weight: light;
	color: #4b4453;
	text-decoration: line-through;
}
.add-shopcart {
	margin: 0 50rpx;
	padding: 6rpx 30rpx;
	background-color: #b0a8b9;
	color: #fff;
	border-radius: 40rpx;
}
.buy-now {
	padding: 6rpx 30rpx;
	background-color: #49bdfb;
	color: #fff;
	border-radius: 40rpx;
}
.pop {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
}
.pop-mask {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
}
.pop-box {
	position: absolute;
	left: 0;
	bottom: -450rpx;
	width: 100%;
	height: 450rpx;
	background-color: #fff;
}
.pop-img {
	width: 240rpx;
	height: 240rpx;
	padding-left: 20rpx;
	padding-top: 20rpx;
}
.pop-num {
	display: flex;
	justify-content: space-between;
	margin: 20rpx 20rpx;
}
.pop-confirm {
	position: absolute;
	bottom: 20rpx;
	width: 100%;
	height: 60rpx;
	background-color: #49bdfb;
	color: #fff;
	text-align: center;
	line-height: 60rpx;
}
.pop-icon {
	position: absolute;
	top: 30rpx;
	right: 30rpx;
	border-radius: 100%;
	width: 40rpx;
	height: 40rpx;
	text-align: center;
	line-height: 40rpx;
	color: #fff;
	background-color: #b0a8b9;
}

@keyframes Upslide {
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(-450rpx);
	}
}
@keyframes UpslideBack {
	from {
		transform: translateY(-450rpx);
	}
	to {
		transform: translateY(0);
	}
}
.Upslide {
	animation: Upslide 0.3s forwards;
}
.UpslideBack {
	animation: UpslideBack 0.3s forwards;
}
</style>
