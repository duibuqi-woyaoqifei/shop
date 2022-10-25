<template>
	<view class="login-other">
		<view class="other-text"><view>或者用以下方式登录</view></view>
		<view class="other">
			<view class="other-item">
				<image src="/static/img/wx.png" mode="" @tap="LoginOther('weixin')"></image>
				<view>微信登录</view>
			</view>
			<view class="other-item">
				<image src="/static/img/wb.png" mode="" @tap="LoginOther('sinaweibo')"></image>
				<view>微博登录</view>
			</view>
			<view class="other-item">
				<image src="/static/img/qq.png" mode="" @tap="LoginOther('qq')"></image>
				<view>QQ登录</view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { UniReqs } from '@/plugins/request';
import { reactive } from 'vue';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const { LoginSuccess } = userStore;

const information = reactive({
	command: 'login/other',
	data: {
		commander: '',
		operation: 'get',
		queryInfo: {
			pageNum: 1,
			pageSize: 9999,
			content: '',
			column: 'openId'
		},
		loginInfo: {}
	},
	uniReq: uni.request
});

const LoginOther = mode => {
	uni.login({
		provider: mode,
		complete: res => {
			uni.getUserInfo({
				provider: mode,
				success: res => {
					const provider = mode;
					const { openId, nickName, avatarUrl } = res.userInfo;
					const loginInfo = {
						provider,
						openId,
						nickName,
						imgUrl: avatarUrl,
						password: 'nirangwonashenmelizhi'
					};
					information.data.loginInfo = loginInfo;
					information.data.queryInfo.content = openId;

					new UniReqs(information, data => {
						LoginSuccess(data.userInfo);
						uni.switchTab({
							url: '/pages/index/index'
						});
						uni.showToast({
							title: '登录成功',
							icon: 'none'
						});
					});
				}
			});
		}
	});
};
</script>

<style scoped>
/*  其他登录方式  */
.login-other {
	padding: 100rpx 0;
}
.other-text {
	display: flex;
	padding: 50rpx 0;
}
.other-text view {
	line-height: 0rpx;
	padding: 0 10rpx;
}
.other-text:after {
	flex: 1;
	content: '';
	height: 2rpx;
	background-color: #cccccc;
}
.other-text::before {
	flex: 1;
	content: '';
	height: 2rpx;
	background-color: #cccccc;
}
.other {
	display: flex;
	justify-content: space-around;
}
.other-item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.other-item image {
	width: 80rpx;
	height: 80rpx;
}
/*  其他登录方式  end  */
</style>
