<template>
  <view class="card">
    <view>-</view>
    <view class="guess-you">
      {{title}}
    </view>
    <view>-</view>
  </view>
</template>

<script lang="ts" setup>

const props = defineProps({
	title:String
})

const {title} = props

</script>

<style scoped>
	.card{
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
		font-weight: bold;
	}
	.guess-you{
		padding:0 20rpx;
		font-size: 32rpx;
		color: #4B4453;
		letter-spacing: 10rpx;
		margin-left: 10rpx;
	}
</style>
