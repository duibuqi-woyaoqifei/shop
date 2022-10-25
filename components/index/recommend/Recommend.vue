<template>
  <view class="recommend">
    <view class="recommend-item" v-for="(item,index) in list" :key="index">
      <image class="item-big" :src="item.bigImgUrl" mode="" />
      <view class="item-small">
        <template v-for="(item2,index2) in item.smallImgUrls" :key="index2">
					<image class="item-img" :src="item2.imgUrl" mode="" />
				</template>
      </view>
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
	.recommend{
		padding: 20rpx;
	}
	.recommend-item {
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2rpx solid #ccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.item-big{
		width: 100%;
		height: 300rpx;
	}
	.item-small{
		width: 100%;
		height: 240rpx;
	}
	.item-img{
		width: 33.3333%;
		height: 240rpx;
	}
</style>
