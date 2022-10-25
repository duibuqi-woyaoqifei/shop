import { defineStore } from 'pinia';

const useUserStore = defineStore('user', {
	// 存储全局状态(data)
	state: () => {
		return {
			loginStatus: false,
			token: '',
			userInfo: {}
		};
	},

	// 封装计算属性,有缓存的功能(computed)
	getters: {},

	// 封装业务逻辑，修改state(methods)
	actions: {
		LoginSuccess(userInfo) {
			this.userInfo = userInfo;
			this.loginStatus = true;
			this.token = userInfo.token;

			uni.setStorageSync('userInfo', JSON.stringify(userInfo));
		},
		InitUser() {
			let userInfo = uni.getStorageSync('userInfo');
			if (userInfo) {
				userInfo = JSON.parse(userInfo);
				this.userInfo = userInfo;
				this.loginStatus = true;
				this.token = userInfo.token;
			}
		},
		LoginOut() {
			if (!this.loginStatus) {
				uni.navigateTo({
					url: '/pages/login/login'
				});
				uni.showToast({
					title: '请先登录',
					icon: 'none'
				});
				return;
			}
			this.userInfo = {};
			this.loginStatus = false;
			this.token = '';

			uni.removeStorageSync('userInfo');
			uni.showToast({
				title: '退出成功',
				icon: 'none'
			});
			uni.switchTab({
				url: '/pages/index/index'
			});
		}
	}
});

export { useUserStore };

// import { useUserStore } from '@/store/modules/user';
// import { storeToRefs } from 'pinia';

// const userStore = useUserStore();
// const {  } = storeToRefs(userStore);
// const {  } = userStore;
