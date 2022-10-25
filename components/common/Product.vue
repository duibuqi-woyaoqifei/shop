<template>
	<view class="product" :style="imgStyle.wrap">
		<view class="product-item" v-for="(item, index) in list" :key="index" :style="imgStyle.width" @tap="GoDetails(item)">
			<image class="product-img" :src="item.imgUrl" :style="imgStyle.height"></image>
			<view class="product-content">
				<text class="product-name">{{ item.name }}</text>
				<view class="price">
					<text class="present-price">{{ item.presentPrice }}</text>
					<text class="original-price">{{ item.originalPrice }}</text>
				</view>
				<text class="discount">{{ item.discount }}折</text>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue';

interface ImgStyle {
	width: String;
	height: String;
	wrap: String;
}

interface Props {
	list?: Object;
	lineItemNum?: Number;
	isWrap?: Boolean;
}

const props = withDefaults(defineProps<Props>(), {
	list: [],
	lineItemNum: 2,
	isWrap: true
});

const { list } = toRefs(props);
const { lineItemNum, isWrap } = props;

let imgStyle: ImgStyle = {
	width: '',
	height: '',
	wrap: ''
};

if (lineItemNum) {
	const sideLength: Number = 750 / lineItemNum - 10;
	imgStyle.width = 'width: ' + sideLength + 'rpx;';
	imgStyle.height = 'height: ' + sideLength + 'rpx;';
}

if (!isWrap) {
	imgStyle.width = 'width: 200rpx;';
	imgStyle.height = 'height: 200rpx;';
	imgStyle.wrap = 'flex-wrap: nowrap;';
}

const GoDetails = item => {
	const id = ((item.id - 1) % 4) + 1;
	uni.navigateTo({
		url: '/pages/details/details?id=' + id
	});
};
</script>

<style scoped>
.product {
	display: flex;
	flex-wrap: wrap;
}
.product-item {
	width: 360rpx;
	padding-bottom: 20rpx;
	margin-left: 7.5rpx;
}
.product-img {
	width: 100%;
	height: 360rpx;
}
.product-content {
	text-align: center;
}
.product-name {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: #333;
	word-break: break-all;
	padding: 6rpx 20rpx;
}
.present-price {
	font-weight: bold;
}
.original-price {
	font-size: 12rpx;
	text-decoration: line-through;
}
.discount {
	border-radius: 4rpx;
	border: 2rpx solid #ff8066;
	padding: 2rpx 10rpx;
	font-size: 20rpx;
	color: #ff8066;
}
.price {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	color: #333;
	word-break: break-all;
}
</style>
