<template>
	<view class="shop-info">
		<!-- 名字 -->
		<view class="shop-title">
			<image :src="shopInfo.shopLogo" mode="widthFix"></image>
			<text>{{ shopInfo.name }}</text>
		</view>
		<!-- 内容 -->
		<view class="content">
			<view class="left">
				<view class="mr">
					<view class="num">{{ shopInfo.cSells | filterSells }}</view>
					<view>总销量</view>
				</view>
				<view>
					<view class="num">{{ shopInfo.cGoods }}</view>
					<view>全部宝贝</view>
				</view>
			</view>
			<view class="right">
				<view v-for="(item, index) in shopInfo.score" :key="index">
					{{ item.name }}
					<text class="score" :class="{red: item.isBetter}">{{ item.score }}</text>
					<text class="score-bg" :class="{'red-bg': item.isBetter}">{{ item.isBetter ? '高' : '低' }}</text>
				</view>
			</view>
		</view>
		<!-- 进店逛逛 -->
		<view class="enter-shop">
			<view>进店逛逛</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			shopInfo: {
				type: Object,
				default: () => {}
			}
		},
		filters: {
			filterSells(sell) {
				return sell > 10000 ? (sell / 10000).toFixed(1) + '万' : sell
			}
		}
	}
</script>

<style lang="less" scoped>
	.shop-info {
		// 标题
		.shop-title {
			display: flex;
			align-items: center;
			padding: 40rpx 20rpx;
			image {
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				margin-right: 20rpx;
				border: 1px solid #ededed;
			}
		}
		// 内容
		.content {
			display: flex;
			height: 160rpx;
			color: #333;
			.left {
				width: 48%;
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;
				border-right: 1px solid #ededed;
				.num {
					font-size: 40rpx;
					font-weight: 600;
					margin-bottom: 10rpx;
				}
			}
			.mr {
				margin-right: 40rpx;
			}
			.right {
				width: 48%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-left: 60rpx;
				view {
					padding: 6rpx 0;
					.score {
						color: green;
						padding-left: 20rpx;
					}
					.score-bg {
						float: right;
						margin-right: 50rpx;
						background-color: green;
						color: #fff;
					}
					.red {
						color: red;
					}
					.red-bg {
						background-color: red;
					}
				}
			}
		}
		// 进店逛逛
		.enter-shop {
			width: 100%;
			height: 110rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			view {
				font-size: 24rpx;
				background-color: #ededed;
				height: 50rpx;
				width: 200rpx;
				text-align: center;
				line-height: 50rpx;
			}
		}
	}
</style>
