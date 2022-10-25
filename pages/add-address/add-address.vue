<template>
	<view class="my-add-path">
		<view class="path-item">
			<view>*收 件 人</view>
			<input type="text" v-model="addressInfo.name" placeholder="收件人姓名" />
		</view>

		<view class="path-item">
			<view>*手 机 号</view>
			<input type="text" v-model="addressInfo.phone" placeholder="11位手机号" />
		</view>

		<view class="path-item">
			<view>*所在地址</view>
			<view class="address-picker">
				<AddressPicker
					ref="addressPickerRef"
					:localdata="cityList"
					popup-title="请选择地址"
					@change="onChange"
					@nodeclick="onNodeclick"
					:clear-icon="false"
					v-model="addressInfo.city"
				></AddressPicker>
				<view class="address-picker-clear" v-show="IsShowClear()" @tap="ClearAddress">×</view>
			</view>
		</view>

		<view class="path-item">
			<view>*详细地址</view>
			<input type="text" v-model="addressInfo.details" placeholder="请输入详细地址" />
		</view>

		<view class="path-item">
			<view class="path-item-default">设为默认地址</view>
			<radio-group name="">
				<label class="radio">
					<radio color="#FF3333" @tap="IsDefault" :checked="addressInfo.isDefault" />
					<text></text>
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import AddressPicker from '@/uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.vue';
import { UniReqs } from '@/plugins/request';
import { onNavigationBarButtonTap, onLoad } from '@dcloudio/uni-app';
import { useAddressStore } from '@/store/modules/address';
import { useUserStore } from '@/store/modules/user';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { userInfo } = userStore;

const addressStore = useAddressStore();
const { addressList } = storeToRefs(addressStore);

const cityList = ref([]);
const addressPickerRef = ref();
const currentIndex = ref(null);

const information = reactive({
	command: 'world/china',
	data: {
		commander: '',
		operation: 'get',
		queryInfo: {
			pageNum: 1,
			pageSize: 9999,
			content: userInfo['id'],
			column: 'userId'
		}
	},
	uniReq: uni.request,
	renderInfo: [
		{
			name: 'cityList',
			renderList: cityList
		}
	]
});

const addressInfo = reactive({
	name: '',
	phone: '',
	city: '',
	details: '',
	isDefault: false,
	userId: userInfo['id']
});

const rules = reactive({
	notNull: {
		regular: /^[\s\S]*.*[^\s][\s\S]*$/
	}
});

const IsShowClear = () => {
	return addressInfo.city ? true : false;
};

const ClearAddress = () => {
	addressPickerRef.value.clear();
};

const onChange = e => {};

const onNodeclick = node => {};

const IsDefault = () => {
	addressInfo.isDefault = !addressInfo.isDefault;
};

onMounted(() => {
	setTimeout(() => {
		new UniReqs(information);
	}, 100);
});

onLoad(e => {
	if (e.data) {
		uni.setNavigationBarTitle({
			title: '修改地址'
		});

		const result = JSON.parse(e.data);
		for (let i in addressInfo) {
			addressInfo[i] = result.item[i];
		}
		currentIndex.value = result.index;
	}
});

const Validate = () => {
	for (let i in addressInfo) {
		if (!rules.notNull.regular.test(addressInfo[i])) return false;
	}
	return true;
};

const PostReq = (operation, updateInfo) => {
	if (operation === 'edit') {
		addressInfo['id'] = currentIndex.value;
	}
	information.command = 'address';
	information.data.operation = operation;
	information.data['updateInfo'] = updateInfo;
	information.renderInfo = [];
	information.data['autoReq'] = true;

	new UniReqs(information, data => {
		addressList.value = data.addressList;
		uni.showToast({
			title: '成功',
			icon: 'none'
		});
	});
};

onNavigationBarButtonTap(e => {
	if (!Validate()) {
		uni.showToast({
			title: '带*的信息不能为空',
			icon: 'none'
		});
		return;
	}
	if (currentIndex.value === null) {
		PostReq('add', addressInfo);
	} else {
		PostReq('edit', addressInfo);
	}

	uni.navigateBack();
});
</script>

<style scoped>
.my-add-path {
	padding-left: 20rpx;
	font-size: 26rpx;
}
.path-item {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 16rpx 0;
	width: 100%;
	height: 80rpx;
	border-bottom: 2rpx solid #cccccc;
}
.path-item input {
	text-align: left;
	padding-left: 20rpx;
	width: 500rpx;
}
.address-picker {
	margin-left: 20rpx;
	display: flex;
	max-width: 550rpx;
}
.address-picker-clear {
	position: relative;
	top: 12rpx;
	left: 20rpx;
	font-weight: 100;
	border: 2rpx solid #cccccc;
	border-radius: 100%;
	width: 26rpx;
	height: 26rpx;
	text-align: center;
	line-height: 24rpx;
}
.path-item-default {
	width: 240rpx;
}
</style>
