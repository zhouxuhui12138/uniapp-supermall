<template>
	<view class="recommend">
		<view class="recommend-item" v-for="(item, index) in list" :key="index">
			<image :src="item.image"></image>
			<view class="title">{{ item.title }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			}
		}
	}
</script>

<style lang="less">
	.recommend {
		display: flex;
		height: 288rpx;
		background-color: #fff;
		text-align: center;
		justify-content: center;
		align-items: center;
		padding: 10rpx;
		.recommend-item {
			flex: 1;
			font-size: 28rpx;
			padding: 20rpx 10rpx 20rpx 10rpx;
			margin-bottom: 10rpx;
			image {
				height: 170rpx;
				width: 170rpx;
			}
			.title {
				margin-top: 8rpx;
			}
		}
	}
</style>
