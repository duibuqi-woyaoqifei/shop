<template>
	<view class="store">
		<GuessYou title="推荐店铺"></GuessYou>
		<view class="store-item" v-for="(item, index) in list">
			<image class="store-item-img-big" :src="item.bigImgUrl" mode=""></image>
			<scroll-view scroll-x="true" class="scroll-view">
				<view class="scroll-content"><Product :list="item.list" :isWrap="false"></Product></view>
			</scroll-view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import GuessYou from '@/components/common/GuessYou.vue';
import Product from '@/components/common/Product.vue';
import { ref } from 'vue';
import { toRefs } from 'vue';

const props = defineProps({
	list: Array
});

const { list } = toRefs(props);
</script>

<style scoped>
.store {
	margin-top: 20rpx;
}
.store-item-img-big {
	width: 100%;
	height: 350rpx;
}
.scroll-view {
	width: 100%;
	white-space: nowrap;
}
.scroll-content {
	display: inline-block;
	font-size: 28rpx;
}
</style>
