<template>
	<view class="tabbar">
		<view class="tab" v-for="(item, index) in tabbarList" :key="index" @tap="navigatorTo(item.pagePath)">
			<image v-if="item.pagePath === cureentPage" :src="item.selectedIconPath" mode=""></image>
			<image v-else :src="item.iconPath" mode=""></image>
			<view class="text">{{ item.text }}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		cureentPage: {
			type: String,
			default: 'index'
		}
	},
	data() {
		return {
			tabbarList: [
				{
					pagePath: 'index',
					iconPath: '/static/tabbar/home.png',
					selectedIconPath: '/static/tabbar/homing.png',
					text: '首页'
				},
				{
					pagePath: 'class',
					iconPath: '/static/tabbar/calss.png',
					selectedIconPath: '/static/tabbar/classing.png',
					text: '分类'
				},
				{
					pagePath: 'shopping',
					iconPath: '/static/tabbar/shop.png',
					selectedIconPath: '/static/tabbar/shopping.png',
					text: '购物车'
				},
				{
					pagePath: 'my',
					iconPath: '/static/tabbar/my.png',
					selectedIconPath: '/static/tabbar/mying.png',
					text: '我的'
				}
			]
		};
	},
	methods: {
		navigatorTo(e) {
			if (e === 'shopping' || e === 'my') {
				this.navigateTo({
					url: `../../pages/${e}/${e}`,
					animationType: 'fade-in',
					animationDuration: 0
				});
			} else {
				uni.redirectTo({
					url: `../../pages/${e}/${e}`
				});
			}
		}
	}
};
</script>

<style scoped>
.tabbar {
	border-top: 2rpx solid #636263;
	background-color: #ffffff;
	z-index: 9999;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 120rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.tab {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
image {
	width: 40rpx;
	height: 40rpx;
}
.text {
	padding: 10rpx 0;
	font-size: 24rpx;
}
</style>
