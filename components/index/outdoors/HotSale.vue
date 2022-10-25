<template>
  <view class="hotSale">
  	<GuessYou title="热销爆款"></GuessYou>
		<ProductList :list="list" :lineItemNum="3"></ProductList>
  </view>
</template>

<script lang="ts" setup>
import GuessYou from '@/components/common/GuessYou.vue'
import ProductList from '@/components/common/ProductList.vue'
import { ref } from "vue"
import { toRefs } from "vue"
	
const props = defineProps({
	list: Array
})

const { list } = toRefs(props)
</script>

<style scoped></style>