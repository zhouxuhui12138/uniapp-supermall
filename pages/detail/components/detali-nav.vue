<template>
	<view class="detail-nav">
		<view class="nav" v-for="(item, index) in list" :key="index" @click="navClick(index)">
			<text :class="{active: isActive === index}">{{ item }}</text>
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
		},
		data() {
			return {
				isActive: 0
			}
		},
		methods: {
			navClick(index) {
				this.isActive = index
				this.$emit('change', index)
			}
		}
	}
</script>

<style lang="less" scoped>
	.detail-nav {
		display: flex;
		width: 100%;
		height: 88rpx;
		background-color: #fff;
		padding: 0 40rpx;
		.nav {
			flex: 1;
			height: 88rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
		}
		.active {
			transition: all .3s;
			color: hotpink;
			padding: 10rpx 10rpx;
			border-bottom: 6rpx solid hotpink;
		}
	}
</style>
