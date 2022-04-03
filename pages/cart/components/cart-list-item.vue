<template>
	<view class="list-item" v-if="list.img">
		<!-- 是否选中 -->
		<view class="is-checked">
			<label>
				<checkbox :checked="list.selected" @click="isChecked(list.selected)" />
				<text></text>
			</label>
		</view>
		<!-- 图片 -->
		<view class="img"><image :src="list.img"></image></view>
		<!-- 商品信息 -->
		<view class="shop-info">
			<view class="title">{{ list.title }}</view>
			<view class="price-warp">
				<view class="price">￥{{ list.price }}</view>
				<view class="count">× {{ list.count }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: {
			type: Object,
			default: () => {}
		}
	},
	methods: {
		isChecked(checked) {
			console.log(this.$store.getters.cartListAllSelected)
			const { iid } = this.list
			const selected = !checked
			this.$store.commit('cartSelectedChange', { iid, selected })
		}
	}
}
</script>

<style lang="less" scoped>
.list-item {
	display: flex;
	padding: 20rpx;
	align-items: center;

	.is-checked {
	}

	.img {
		padding: 10rpx;
		image {
			width: 110rpx;
			height: 166rpx;
			border-radius: 20rpx;
		}
	}

	.shop-info {
		overflow: hidden;
		display: flex;
		flex-direction: column;

		.title {
			font-size: 32rpx;
			padding: 0rpx 10rpx;
			height: 100%;

			// 溢出显示省略号
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
		}

		.price-warp {
			margin-top: 20rpx;
			padding: 10rpx;
			display: flex;
			justify-content: space-between;
			.price {
				color: #ffa3d7;
				font-size: 32rpx;
			}
		}
	}
}
</style>
