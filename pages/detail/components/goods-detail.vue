<template>
	<view class="goods-detail" v-if="detail.desc">
		<!-- 描述 -->
		<view class="top-line"></view>
		<view class="desc">{{ detail.desc }}</view>
		<view class="bom-line"></view>
		
		<!-- 详情 -->
		<view class="detail">
			<text>{{ detail.detailImage[0].key }}</text>
			<view v-for="(item, index) in detail.detailImage[0].list" :key="index">
				<image :src="item" mode="widthFix" :lazy-load="true"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			detail: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="less" scoped>
	.goods-detail {
		font-size: 28rpx;
		.top-line {
			width: 200rpx;
			height: 2rpx;
			background-color: #333;
			margin-left: 10rpx;
		}
		.bom-line {
			float: right;
			width: 200rpx;
			height: 2rpx;
			margin-right: 10rpx;
			background-color: #333;
		}
		.desc {
			padding: 20rpx 30rpx;
			line-height: 40rpx;
			text-indent: 10px;
		}
		.detail {
			text {
				padding-left: 40rpx;
				padding-bottom: 20rpx;
			}
			image {
				width: 100%;
				padding: 10rpx;
			}
		}
	}
</style>
