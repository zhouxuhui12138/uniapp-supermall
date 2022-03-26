<template>
	<view class="detail">
		<!-- 导航栏 -->
		<DetailNav :list="['商品', '参数', '评论', '推荐']" class="detail-nav" />

		<!-- 可滚动区域 -->
		<scroll-view scroll-y="true">
			<!-- 轮播图 -->
			<DetailSwiper :banners="banners" />
			<!-- 商品信息 -->
			<GoodsInfo :goodsInfo="goodsInfo" />

			<view class="a"></view>
		</scroll-view>
	</view>
</template>

<script>
import DetailNav from './components/detali-nav.vue'
import DetailSwiper from './components/detail-swiper.vue'
import GoodsInfo from './components/goods-info.vue'

import { GetGoodsDetail } from '../../api/index.js'

export default {
	components: {
		DetailNav,
		DetailSwiper,
		GoodsInfo
	},
	data() {
		return {
			// 轮播图数据
			banners: [],
			// 商品信息数据
			goodsInfo: []
		}
	},
	onLoad(option) {
		const { iid } = option

		this.findDetail(iid)
	},
	methods: {
		// 请求商品详情数据
		async findDetail(iid) {
			const { result: res } = await GetGoodsDetail(iid)

			this.banners = res.itemInfo.topImages
			this.goodsInfo = [res.itemInfo, res.columns, res.shopInfo.services]
		}
	}
}
</script>

<style lang="less" scoped>
.detail {
	.detail-nav {
		position: sticky;
		top: 88rpx;
		z-index: 999;
		background-color: #fff;
	}
	.a {
		height: 4000px;
	}
}
</style>
