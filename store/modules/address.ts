import { defineStore } from 'pinia';

const useAddressStore = defineStore('address', {
	// 存储全局状态(data)
	state: () => {
		return {
			addressList: [
				// {
				// 	id: 1,
				// 	name: '张三',
				// 	phone: '13515485555',
				// 	city: '山东省泰安市新泰市',
				// 	details: '实现中学旁工作室',
				// 	isDefault: false
				// },
				// {
				// 	id: 2,
				// 	name: '李四',
				// 	phone: '13515482222',
				// 	city: '山东省泰安市新泰市',
				// 	details: '实现中学旁工作室实现中学旁工作室实现中学旁工作室实现中学旁工作室',
				// 	isDefault: true
				// }
			]
		};
	},

	// 封装计算属性,有缓存的功能(computed)
	getters: {
		IsDefault(state) {
			state.addressList.forEach(item => {
				if (item.isDefault) {
					item.isDefault = false;
				}
			});
		},
		GetDefaultAddress(state) {
			return state.addressList.filter(item => {
				return item.isDefault;
			})[0];
		}
	},

	// 封装业务逻辑，修改state(methods)
	actions: {
		AddAddress(item) {
			if (item.isDefault) {
				this.IsDefault;
			}
		},
		EditAddress(item, index) {
			if (item.isDefault) {
				this.IsDefault;
			}
		}
	}
});

export { useAddressStore };

// import { useAddressStore } from '@/store/modules/address';
// import { storeToRefs } from 'pinia';

// const addressStore = useAddressStore();
// const { addressList } = storeToRefs(addressStore);
