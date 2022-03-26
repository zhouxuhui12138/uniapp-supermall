<template>
	<swiper class="swiper" autoplay interval="2000" circular indicator-dots indicator-active-color="red" indicator-color="#fff">
		<swiper-item v-for="(item, index) in banners" :key="index">
			<image :src="item" mode="aspectFill" @tap="preview(index)"></image>
		</swiper-item>
	</swiper>
</template>

<script>
export default {
	props: {
		banners: {
			type: Array,
			default: () => []
		}
	},
	methods: {
		// 点击预览
		preview(index) {
			uni.previewImage({
				urls: this.banners,
				current: this.banners[index],
				indicator: 'number'
			})
		}
	}
}
</script>

<style lang="less" scoped>
.swiper {
	width: 100%;
	height: 460rpx;
	image {
		width: 100%;
		height: 100%;
	}
}
</style>
