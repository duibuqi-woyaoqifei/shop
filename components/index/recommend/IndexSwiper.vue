<template>
  <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
    <swiper-item v-for="(item,index) in list" :key="index">
      <view class="swiper-item">
        <image class="swiper-img" :src="item.imgUrl" mode="" />
      </view>
    </swiper-item>
  </swiper>
</template>

<script lang="ts" setup>
import { toRefs } from "vue"
	
const props = defineProps({
	list: Array
})

const { list } = toRefs(props)

</script>

<style scoped>
	swiper {
		width: 100%;
		height: 400rpx;
	}
	.swiper-img {
		width: 100%;
		height: 400rpx;
	}
</style>
