import { defineStore } from 'pinia';

const useOrderStore = defineStore('order', {
	// 存储全局状态(data)
	state: () => {
		return {
			orderNumber: '',
			orderInfo: {}
		};
	},

	// 封装计算属性,有缓存的功能(computed)
	getters: {},

	// 封装业务逻辑，修改state(methods)
	actions: {}
});

export { useOrderStore };

// import { useOrderStore } from '@/store/modules/order';
// import { storeToRefs } from 'pinia';

// const orderStore = useOrderStore();
// const {  } = storeToRefs(orderStore);
// const {  } = orderStore;
