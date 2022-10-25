<template>
	<view class=""><Product :list="list" :lineItemNum="lineItemNum"></Product></view>
</template>

<script lang="ts" setup>
import Product from './Product.vue';
import { toRefs } from 'vue';

const props = defineProps({
	list: Object,
	lineItemNum: Number
});

const { list } = toRefs(props);
const { lineItemNum } = props;
</script>

<style scoped></style>
