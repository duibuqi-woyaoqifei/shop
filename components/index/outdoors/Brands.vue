<template>
  <view class="brands">
  	<GuessYou title="超级大牌"></GuessYou>
		<image class="brands-img" src="@/static/img/brands.jpg" mode=""></image>
  </view>
</template>

<script lang="ts" setup>
	import GuessYou from '@/components/common/GuessYou.vue'
</script>

<style scoped>
	.brands {
		margin-top: 20rpx;
	}
	.brands-img {
		margin-top: 20rpx;
		width: 750rpx;
		height: 548rpx;
	}
</style>