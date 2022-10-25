<template>
	<view class="line"></view>

	<view class="login-tel">
		<view class="tel-main">
			<view class="login-from">
				<view class="login-user">
					<text class="user-text">验证码</text>
					<input type="text" placeholder="请输入验证码" v-model="code" />
					<button plain="true" size="mini" :disabled="isDisabled" @tap="SendCodeMessage">{{ codeMessage }}</button>
				</view>
			</view>
			<view class="tel" @tap="BackIndex">下一步</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { UniReqs } from '@/plugins/request';
import { useUserStore } from '@/store/modules/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { loginStatus, token, userInfo } = storeToRefs(userStore);
const { LoginSuccess } = userStore;

const code = ref('');
const codeCountDown = ref(60);
const codeMessage = ref('');
const isDisabled = ref(false);
const phone = ref('');
const trueCode = ref('');

const information = reactive({
	command: 'code',
	data: {
		commander: '',
		operation: 'get',
		queryInfo: {
			pageNum: 1,
			pageSize: 9999,
			content: '',
			column: ''
		},
		updateInfo: {
			phone: '',
			password: 'nirangwonashenmelizhi',
			imgUrl: '/static/img/cartoonHead.png'
		}
	},
	uniReq: uni.request
});

const SendCodeMessage = () => {
	information.command = 'code';
	information.data.updateInfo.phone = phone.value;
	new UniReqs(information, data => {
		trueCode.value = data.code;
	});
	isDisabled.value = true;
	codeMessage.value = `重新发送(${codeCountDown.value})`;

	let timer = setInterval(() => {
		codeCountDown.value--;
		codeMessage.value = `重新发送(${codeCountDown.value})`;
	}, 1000);

	setTimeout(() => {
		clearInterval(timer);
		codeCountDown.value = 60;
		codeMessage.value = '重新发送';
		isDisabled.value = false;
	}, 60000);
};

const PhoneLogin = () => {
	information.command = 'login';
	information.data.operation = 'get';
	information.data.queryInfo.content = phone.value;
	information.data.queryInfo.column = 'phone';
	information.data['userInfo'] = {
		password: 'nirangwonashenmelizhi'
	};

	new UniReqs(information, data => {
		uni.hideLoading();
		if (data.success) {
			LoginSuccess(data.userInfo);
			uni.switchTab({
				url: '/pages/index/index'
			});
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

const BackIndex = () => {
	if (trueCode.value.toString() === code.value) {
		information.command = 'register';
		information.data.operation = 'add';
		new UniReqs(information, data => {
			if (data.success) {
				PhoneLogin();
			}
		});
	} else {
		uni.showToast({
			title: '验证码错误',
			icon: 'error'
		});
	}
};

onLoad(e => {
	phone.value = e.phone;
	SendCodeMessage();
});
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
	padding: 0 10rpx;
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
