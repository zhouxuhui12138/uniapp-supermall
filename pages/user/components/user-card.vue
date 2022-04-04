<template>
	<view class="card">
		<uni-card
			:is-shadow="false"
			is-full
			class="card"
			:class="{ bb: index === 2 }"
			v-for="(item, index) in list"
			:key="item.id"
		>
			<icon type="info" size="20" class="icon" />
			<text class="uni-h6">{{ item.text }}</text>
		</uni-card>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{ id: 1, text: '我的消息' },
				{ id: 2, text: '积分商城' },
				{ id: 3, text: '会员卡' },
				{ id: 4, text: '分享' },
				{ id: 5, text: '下载App' }
			]
		}
	}
}
</script>

<style lang="less" scoped>
.card {
	/deep/ .uni-card__content {
		display: flex;
		align-items: center;
		height: 100rpx;
	}
	
	.uni-h6 {
		font-size: 32rpx;
		margin-left: 20rpx;
	}
	
	/* #ifdef MP-WEIXIN */
	.icon {
		position: relative;
		top: 10rpx;
	}
	/* #endif */
	
	.bb {
		border-bottom: 10rpx solid #ededed;
	}
}
</style>
