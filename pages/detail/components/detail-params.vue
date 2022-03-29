<template>
	<view class="detail-params" v-if="params.rule">
		<!-- rule -->
		<view class="rule-warp">
			<view class="rule" v-for="(item, index) in params.rule[0]" :key="index">
				<view class="rule-item" v-for="(sub, index) in item" :key="index">{{ sub }}</view>
			</view>
		</view>
		<!-- info -->
		<view class="info-warp" v-for="(item, index) in params.info.set" :key="index">
			<view class="info-key">{{ item.key }}</view>
			<view class="info-value">{{ item.value }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			params: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail-params {
		border-top: 8rpx solid #ededed;
	}
	// rule
	.rule-warp {
		font-size: 24rpx;
		padding: 0 20rpx;
		.rule {
			display: flex;
			.rule-item {
				width: 20%;
				padding: 20rpx 8rpx;
				border-bottom: 2rpx solid #ededed;
			}
		}
	}
	// info
	.info-warp {
		display: flex;
		font-size: 28rpx;
		padding: 20rpx 28rpx;
		border-bottom: 2rpx solid #ededed;
		.info-key {
			width: 18%;
		}
		.info-value {
			color: hotpink;
		}
	}
</style>
