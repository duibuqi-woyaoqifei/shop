import { defineStore } from 'pinia';

const useXXXStore = defineStore('xxx', {
	// 存储全局状态(data)
	state: () => {
		return {
			count: 100
		};
	},

	// 封装计算属性,有缓存的功能(computed)
	getters: {},

	// 封装业务逻辑，修改state(methods)
	actions: {}
});

export { useXXXStore };

// import { useXXXStore } from '@/store/modules/xxx';
// import { storeToRefs } from 'pinia';

// const xxxStore = useXXXStore();
// const {  } = storeToRefs(xxxStore);
// const {  } = xxxStore;
