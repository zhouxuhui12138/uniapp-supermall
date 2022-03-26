<template>
	<view class="goods-info" v-if="goodsInfo.length > 0">
		<!-- 标题 -->
		<view class="title">{{ goodsInfo[0].title }}</view>
		<!-- 价格 -->
		<view class="price">
			<text class="new-price">￥{{ goodsInfo[0].lowNowPrice }}~￥{{ goodsInfo[0].highNowPrice }}</text>
			<text class="old-price">￥{{ goodsInfo[0].oldPrice }}</text>
			<text class="discount">{{ goodsInfo[0].discountDesc }}</text>
		</view>
		<!-- 其他 -->
		<view class="onther">
			<text v-for="item in goodsInfo[1]" :key="item">{{ item }}</text>
		</view>
		<!-- 商家承诺 -->
		<view class="promise">
			<view v-for="(item, index) in goodsInfo[2]" :key="index">
				<image :src="item.icon"></image>
				<text>{{ item.name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		goodsInfo: {
			type: Array,
			default: () => []
		}
	},
	mounted() {
		// 商家承诺最多显示四条信息
		if (this.goodsInfo[2]?.length > 4) {
			console.log(123)
			this.goodsInfo[2] = this.goodsInfo[2].slice(0, 3)
		}
		console.log(this.goodsInfo)
	}
}
</script>

<style lang="less" scoped>
.goods-info {
	// 标题
	.title {
		padding: 20rpx;
		font-size: 32rpx;
		color: #111;
	}
	// 价格
	.price {
		display: flex;
		padding: 0 20rpx;
		align-items: center;
		.new-price {
			color: #ff8aa0;
			font-size: 44rpx;
		}
		.old-price {
			font-size: 30rpx;
			margin: 0 20rpx;
			text-decoration: line-through;
		}
		.discount {
			height: 40rpx;
			border-radius: 20rpx;
			background-color: hotpink;
			color: #fff;
			line-height: 40rpx;
			font-size: 24rpx;
		}
	}
	// 其他
	.onther {
		display: flex;
		padding: 20rpx;
		margin-top: 10rpx;
		font-size: 28rpx;
		justify-content: space-between;
		border-bottom: 2rpx solid #ededed;
		view {
			flex: 1;
		}
	}
	// 商家承诺
	.promise {
		display: flex;
		height: 90rpx;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;
		font-size: 28rpx;
		border-bottom: 10rpx solid #ededed;
		image {
			width: 20rpx;
			height: 20rpx;
		}
	}
}
</style>
