<template>
	<view class="goods-list-item" @click="goDetail(goods.iid)">
		<!-- 图片 -->
		<image :src="src" :lazy-load="true" mode="widthFix"></image>
		<!-- 商品信息 -->
		<view class="goods-info">
			<view class="hide-text">{{ goods.title }}</view>
			<view class="info-warp">
				<text class="price">￥ {{ goods.price }}</text>
				<text class="like">☆ {{ goods.cfav }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goods: {
				type: Object,
				default: () => {}
			}
		},
		methods: {
			// 跳转至详情页
			goDetail(id) {
				uni.navigateTo({
					url: `/pages/detail/detail?iid=${id}`
				})
			}
		},
		computed: {
			src() {
				return this.goods.image || this.goods.show.img
			}
		}
	}
</script>

<style lang="less" scoped>
	.goods-list-item {
		width: 48%;
		font-size: 24rpx;
		padding: 6rpx 0;
		image {
			width: 100%;
			height: 100%;
			min-height: 540rpx;
			border-radius: 10rpx;
		}
		.goods-info {
			padding: 4rpx;
			.info-warp {
				text-align: center;
				.price {
					color: #ff6b87;
					padding-right: 10rpx;
				}
			}
		}
	}
</style>
