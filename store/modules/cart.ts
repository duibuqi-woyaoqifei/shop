import { defineStore } from 'pinia';

const useCartStore = defineStore('cart', {
	// 存储全局状态(data)
	state: () => {
		return {
			modify: false,
			selectList: [],
			shopList: [
				// {
				// 	id: 101,
				// 	name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				// 	color: '颜色：少女粉',
				// 	imgUrl: '/static/img/Children1.jpg',
				// 	presentPrice: '9999',
				// 	num: 1,
				// 	checked: false
				// },
				// {
				// 	id: 102,
				// 	name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				// 	color: '颜色：少女粉',
				// 	imgUrl: '/static/img/Children1.jpg',
				// 	presentPrice: '9999',
				// 	num: 1,
				// 	checked: false
				// },
				// {
				// 	id: 103,
				// 	name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				// 	color: '颜色：少女粉',
				// 	imgUrl: '/static/img/Children1.jpg',
				// 	presentPrice: '9999',
				// 	num: 1,
				// 	checked: false
				// },
				// {
				// 	id: 104,
				// 	name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				// 	color: '颜色：少女粉',
				// 	imgUrl: '/static/img/Children1.jpg',
				// 	presentPrice: '9999',
				// 	num: 1,
				// 	checked: false
				// },
				// {
				// 	id: 105,
				// 	name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				// 	color: '颜色：少女粉',
				// 	imgUrl: '/static/img/Children1.jpg',
				// 	presentPrice: '9999',
				// 	num: 1,
				// 	checked: false
				// },
				// {
				// 	id: 106,
				// 	name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				// 	color: '颜色：少女粉',
				// 	imgUrl: '/static/img/Children1.jpg',
				// 	presentPrice: '9999',
				// 	num: 1,
				// 	checked: false
				// },
				// {
				// 	id: 107,
				// 	name: '拉夏贝尔 La Chapelle 针织衫女2022年新秋季女装法式复古设计感气质百搭毛衣拼接圆领开衫针织外套女 米色 F',
				// 	color: '颜色：少女粉',
				// 	imgUrl: '/static/img/Children1.jpg',
				// 	presentPrice: '9999',
				// 	num: 1,
				// 	checked: false
				// }
			]
		};
	},

	// 封装计算属性,有缓存的功能(computed)
	getters: {
		IsSelectAll(state) {
			return state.selectList.length === state.shopList.length ? true : false;
		},
		Total(state) {
			let totalPrice = 0;
			let totalNum = 0;
			state.shopList.forEach(item => {
				if (state.selectList.indexOf(item.id) !== -1) {
					totalPrice += item.presentPrice * item.num;
					totalNum++;
				}
			});
			return {
				totalPrice,
				totalNum
			};
		}
	},

	// 封装业务逻辑，修改state(methods)
	actions: {
		SelectAll() {
			this.selectList = this.shopList.map(item => {
				item.checked = true;
				return item.id;
			});
		},
		UnselectAll() {
			this.selectList = [];
			this.shopList.forEach(item => {
				item.checked = false;
			});
		},
		SelectOne(id, index) {
			this.selectList.push(id);
			this.shopList[index].checked = true;
		},
		UnselectOne(id, index) {
			this.selectList.splice(this.selectList.indexOf(id), 1);
			this.shopList[index].checked = false;
		}
	}
});

export { useCartStore };

// import { useCartStore } from '@/store/modules/cart';
// import { storeToRefs } from 'pinia';

// const cartStore = useCartStore();
// const {  } = storeToRefs(cartStore);
// const {  } = cartStore;
