<template>
	<view class="line"></view>

	<view class="login-tel">
		<view class="tel-main">
			<view class="login-from">
				<view class="login-user">
					<text class="user-text">手机号</text>
					<input type="number" focus="true" v-model="phoneInfo.phone" placeholder="请输入11位手机号" />
				</view>
			</view>
			<view class="tel" @tap="GoNextCode">下一步</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { UniReqs } from '@/plugins/request';

const rules = {
	phone: {
		regular: /^1[3-9]\d{9}$/,
		message: '请输入11位手机号'
	}
};

const phoneInfo = reactive({
	phone: ''
});

const information = reactive({
	command: 'register',
	data: {
		commander: '',
		operation: 'get',
		queryInfo: {
			pageNum: 1,
			pageSize: 9999,
			content: '',
			column: 'phone'
		}
	},
	uniReq: uni.request
});

const Validate = key => {
	if (!rules[key].regular.test(phoneInfo[key])) {
		uni.showToast({
			title: rules[key].message,
			icon: 'none'
		});
		return false;
	}
	return true;
};

const GoNextCode = () => {
	if (!Validate('phone')) return;
	information.data.queryInfo.content = phoneInfo.phone;
	new UniReqs(information, data => {
		if (data.register) {
			uni.showToast({
				title: data.message,
				icon: 'error'
			});
		} else {
			uni.navigateTo({
				url: '/pages/verification-code/verification-code?phone=' + phoneInfo.phone
			});
		}
	});
};
</script>

<style scoped>
.login-tel {
	width: 100vw;
	height: 100vh;
}
.tel-main {
	padding: 0 20rpx;
}
.login-from {
	padding: 30rpx 0;
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
.tel {
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	color: #ffffff;
	background-color: #49bdfb;
	border-radius: 40rpx;
}
</style>
