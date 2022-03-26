<template>
	<view class="tab">
		<view
			class="tab-item"
			:class="{ active: active === index }"
			v-for="(item, index) in tabList"
			:key="index"
			@click="changeTab(index)"
		>
			<text>{{ item }}</text>
		</view>
	</view>
</template>

<script>
export default {
	name: 'tab',
	props: {
		tabList: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			active: 0
		}
	},
	methods: {
		changeTab(index) {
			this.active = index
			this.$emit('change', index)
		}
	}
}
</script>

<style lang="less" scoped>
.tab {
	display: flex;
	height: 100rpx;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	.tab-item {
		flex: 1;
		font-size: 32rpx;
		text-align: center;
	}
	.active {
		color: #ff8198;
		font-size: 34rpx;
		text {
			padding: 16rpx 10rpx;
			border-bottom: 6rpx solid #ff8198;
		}
	}
}
</style>
