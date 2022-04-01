<template>
	<view class="bottom">
		<view class="left">全选</view>
		<view class="center">总计</view>
		<view class="right">结算</view>
	</view>
</template>

<script>
</script>

<style lang="less" scoped>
	.bottom {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 100rpx;
		height: 88rpx;
		background-color: #f2f2ee;
		display: flex;
		font-size: 28rpx;
		.left {
			width: 150rpx;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
		.right {
			width: 180rpx;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #ff8198;
			color: #fff;
		}
		
		.center {
			flex: 1;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>
