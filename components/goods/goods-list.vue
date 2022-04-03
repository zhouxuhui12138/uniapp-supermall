<template>
	<view class="goods-list">
		<GoodsListItem v-for="(item, index) in list" :key="index" :goods="item" />
	</view>
</template>

<script>
	import GoodsListItem from './goods-list-item.vue'
	
	export default {
		components: {
			GoodsListItem
		},
		props: {
			list: {
				type: Array,
				default: () => []
			}
		},
	}
</script>

<style lang="less" scoped>
	.goods-list {
		width: 100%;
		margin-top: 2rpx;
		/* #ifdef H5 */
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		/* #endif */
		/* #ifdef MP-WEIXIN */
		text-align: center;
		/* #endif */
	}
</style>
