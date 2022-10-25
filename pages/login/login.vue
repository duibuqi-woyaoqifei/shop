<template>
	<view class="login">
		<view class="close" @tap="Back">×</view>
		<swiper vertical="true" style="height: 100vh;">
			<swiper-item>
				<scroll-view>
					<view class="login-tel">
						<view class="tel-main">
							<view class="logo"><image class="logo-img" src="/static/img/logo2.png" mode=""></image></view>
							<view class="tel" @tap="GoLoginPhone">手机号注册</view>
							<LoginOther></LoginOther>
							<view class="login-go go-down">
								<view>已有账号，去登录</view>
								<view class="iconfont icon-arrow-down"></view>
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true">
					<view class="login-tel">
						<view class="tel-main">
							<view class="close-center">
								<view class="login-go go-up">
									<view class="iconfont icon-arrow-up"></view>
									<view class="login-go-text">没有账号？去注册</view>
								</view>
							</view>
							<view class="login-box">
								<view class="login-from">
									<view class="login-user">
										<text class="user-text">账号</text>
										<input type="text" v-model="userInfo.userName" placeholder="请输入手机号/昵称" />
									</view>
									<view class="login-user">
										<text class="user-text">密码</text>
										<input type="password" v-model="userInfo.password" placeholder="6-16位字符" />
									</view>
								</view>
								<view class="login-quick">
									<view>忘记密码?</view>
									<view>免密登录</view>
								</view>
								<view class="tel" @tap="Login">登录</view>
								<view class="reminder">温馨提示：您可以选择免密登录，更加方便</view>
							</view>
							<LoginOther></LoginOther>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import LoginOther from '@/components/common/login-other.vue';
import { UniReqs } from '@/plugins/request';
import { onLoad } from '@dcloudio/uni-app';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const { LoginSuccess } = userStore;

const userInfo = reactive({
	userName: '',
	password: ''
});

const information = reactive({
	command: 'login',
	data: {
		commander: '',
		operation: 'get',
		queryInfo: {
			pageNum: 1,
			pageSize: 9999,
			content: '',
			column: 'userName'
		},
		userInfo
	},
	uniReq: uni.request
});

const rules = {
	userName: {
		regular: /\S/,
		message: '账号不能为空'
	},
	password: {
		regular: /^[0-9a-zA-Z]{6,16}$/,
		message: '密码应为6-16位字母或数字'
	}
};

const Back = () => {
	uni.navigateBack();
};

const Login = () => {
	if (!Validate('userName')) return;
	if (!Validate('password')) return;

	information.data.queryInfo.content = userInfo.userName;
	new UniReqs(information, data => {
		uni.hideLoading();
		if (data.success) {
			LoginSuccess(data.userInfo);
			uni.navigateBack();
		}
		uni.showToast({
			title: data.message,
			icon: 'none'
		});
	});

	uni.showLoading({
		title: '登录中...'
	});
};

const Validate = key => {
	if (!rules[key].regular.test(userInfo[key])) {
		uni.showToast({
			title: rules[key].message,
			icon: 'none'
		});
		return false;
	}
	return true;
};

const GoLoginPhone = () => {
	uni.navigateTo({
		url: '/pages/login-phone/login-phone'
	});
};
</script>

<style scoped>
.login {
	background: url('/static/img/loginBGC.jpg') no-repeat fixed center;
}
.login-tel {
	width: 100vw;
	height: 100vh;
}
.tel-main {
	padding: 0 20rpx;
}
.close {
	position: fixed;
	top: 40rpx;
	left: 40rpx;
	font-size: 60rpx;
	font-weight: 200;
	color: #4b4453;
	width: 50rpx;
	height: 50rpx;
	text-align: center;
	line-height: 50rpx;
	z-index: 999;
}
.logo {
	padding-bottom: 100rpx;
	display: flex;
	justify-content: center;
}
.logo-img {
	margin-top: 300rpx;
	width: 200rpx;
	height: 200rpx;
}
.tel {
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	color: #ffffff;
	background-color: #49bdfb;
	border-radius: 40rpx;
}
.login-go {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 30rpx;
}
.go-down {
	position: absolute;
	bottom: 20rpx;
	left: 50%;
	transform: translateX(-50%);
}
.go-up {
	position: absolute;
	top: 20rpx;
	transform: translateX(-20rpx);
}
.login-go-text {
	width: 750rpx;
	text-align: center;
}
/*第二*/
.close-center {
	display: flex;
}
.login-from {
	padding-top: 400rpx;
}
.login-user {
	font-size: 32rpx;
	padding: 10rpx 0;
	display: flex;
	align-items: center;
	border-bottom: 2rpx solid #f7f7f7;
}
.user-text {
	padding-right: 10rpx;
}
.login-quick {
	display: flex;
	justify-content: space-between;
	padding: 20rpx 0;
}
.reminder {
	color: #b0a8b9;
	padding: 20rpx 0;
	text-align: center;
}
</style>
