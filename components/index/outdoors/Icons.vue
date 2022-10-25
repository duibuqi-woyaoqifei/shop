<template>
  <view class="icons">
  	<view class="icons-item" v-for="(item,index) in list" :key="index">
  		<image class="icons-item-img" :src="item.imgUrl" mode=""></image>
			<text>{{item.name}}</text>
  	</view>
  </view>
</template>

<script lang="ts" setup>
import { toRefs } from "vue"
	
const props = defineProps({
	list: Array
})

const { list } = toRefs(props)
</script>

<style scoped>
	.icons {
		display: flex;
		flex-wrap: wrap;
	}
	.icons-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.icons-item-img {
		width: 110rpx;
		height: 110rpx;
		margin-bottom: 10rpx;
		margin-top: 20rpx;
	}
	.icons-item text {
		color: #636364;
		font-size: 28rpx;
		font-weight: bold;
	}
</style>