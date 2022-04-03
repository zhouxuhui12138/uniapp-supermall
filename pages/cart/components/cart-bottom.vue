<template>
	<view class="bottom">
		<view class="left">
			<label>
				<checkbox :checked="isAllCheck" @click="allChecked" />
				<text>全选</text>
			</label>
		</view>
		<view class="center">
			总计:
			<text style="color: red; font-size: 32rpx;">￥{{ totalPrice }}</text>
		</view>
		<view class="right">结算({{ selectedShopLength }})</view>
	</view>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			ischeck: true
		}
	},
	computed: {
		...mapState(['cartList']),
		// 选中的商品长度
		selectedShopLength() {
			return this.cartList.filter(item => item.selected).length
		},
		// 选中商品的总价格
		totalPrice() {
			return this.cartList.filter(item => item.selected).reduce((p, c) => p + c.price * c.count, 0)
		},
		// 控制全选的状态
		isAllCheck() {
			return this.$store.getters.cartListAllSelected
		}
	},
	created() {
	},
	methods: {
		allChecked() {
			const selected = !this.$store.getters.cartListAllSelected
			this.$store.commit('cartSelectedChange', selected)
		}
	}
}
</script>

<style lang="less" scoped>
.bottom {
	position: fixed;
	left: 0;
	right: 0;
	/* #ifdef H5 */
	bottom: 100rpx;
	/* #endif */
	/* #ifdef MP-WEIXIN */
	bottom: 0;
	/* #endif */
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
		justify-content: flex-start;
		align-items: center;
		margin-left: 40rpx;
	}
}
</style>
