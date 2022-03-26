<template>
	<swiper class="swiper" indicator-dots autoplay indicator-color="skyblue" interval="2000"
		indicator-active-color="yellow" circular>
		<swiper-item v-for="item in banners" :key="item.title">
			<image :src="item.image"></image>
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
		}
	}
</script>

<style lang="less" scoped>
	.swiper {
		height: 400rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
