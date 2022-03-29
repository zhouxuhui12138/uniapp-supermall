<template>
	<view class="detail">
		<!-- 导航栏 -->
		<DetailNav :list="['商品', '参数', '评论', '推荐']" class="detail-nav" @change="navChange" />

		<!-- 可滚动区域 -->
		<scroll-view :scroll-y="true" @scroll="scroll" :scroll-top="scrollTop" class="scroll" :scroll-with-animation="true">
			<!-- 轮播图 -->
			<DetailSwiper :banners="banners" id="swiper" />
			<!-- 商品信息 -->
			<GoodsInfo :goodsInfo="goodsInfo" />
			<!-- 商家信息 -->
			<ShopInfo :shopInfo="shopInfo" />
			<!-- 商品详情 -->
			<GoodsDetail :detail="goodsDetail" />
			<!-- 商品参数 -->
			<DetailParams :params="detailParams" id="params" />
			<!-- 商品评论 -->
			<DetailComment :comment="comment" id="comment" />
			<!-- 商品推荐 -->
			<GoodsList :list="recommend" id="recommend" />
		</scroll-view>

		<!-- 返回顶部 -->
		<BackTop v-show="backTopIsShow" @click.native="backTop" />
	</view>
</template>

<script>
import DetailNav from './components/detali-nav.vue'
import DetailSwiper from './components/detail-swiper.vue'
import GoodsInfo from './components/goods-info.vue'
import ShopInfo from './components/shop-info.vue'
import GoodsDetail from './components/goods-detail.vue'
import BackTop from '../../components/back-top/back-top.vue'
import DetailParams from './components/detail-params.vue'
import DetailComment from './components/detail-comment.vue'
import GoodsList from '../../components/goods/goods-list.vue'

import { GetGoodsDetail, GetRecommend } from '../../api/index.js'

export default {
	components: {
		DetailNav,
		DetailSwiper,
		GoodsInfo,
		ShopInfo,
		GoodsDetail,
		BackTop,
		DetailParams,
		DetailComment,
		GoodsList
	},
	data() {
		return {
			// 轮播图
			banners: [],
			// 商品信息
			goodsInfo: [],
			// 商家信息
			shopInfo: {},
			// 商品详情
			goodsDetail: {},
			// 详情参数
			detailParams: {},
			// 是否显示backtop
			backTopIsShow: false,
			// 评论数据
			comment: [],
			// 滚动位置
			scrollTop: 0,
			// 旧的滚动位置
			oldScrollTop: 0,
			// 推荐商品列表
			recommend: []
		}
	},
	async onLoad(option) {
		const { iid } = option

		this.findDetail(iid)
		const { data: res } = await GetRecommend()
		this.recommend = res.list
	},
	methods: {
		// 请求商品详情数据
		async findDetail(iid) {
			const { result: res } = await GetGoodsDetail(iid)

			this.banners = res.itemInfo.topImages
			this.goodsInfo = [res.itemInfo, res.columns, res.shopInfo.services]
			this.shopInfo = res.shopInfo
			this.goodsDetail = res.detailInfo
			this.detailParams = { rule: res.itemParams.rule.tables, info: res.itemParams.info }
			this.comment = res.rate?.list
		},
		// 返回顶部
		backTop() {
			this.scrollTop = this.oldScrollTop
			this.$nextTick(() => {
				this.scrollTop = 0
			})
		},
		// 监听页面滚动
		scroll(e) {
			const { scrollTop } = e.detail
			scrollTop > 200 ? (this.backTopIsShow = true) : (this.backTopIsShow = false)
			this.oldScrollTop = scrollTop
		},
		// 点击nav
		navChange(index) {
			switch (index) {
				// 跳转到顶部
				case 0:
					this.scrollTop = this.oldScrollTop
					this.$nextTick(() => {
						this.scrollTop = 0
					})
					break
				// 跳转到参数
				case 1:
					this.toSomeWhere('#params')
					break
				// 跳转到评论
				case 2:
					this.toSomeWhere('#comment')
					break
				// 跳转到推荐
				case 3:
					this.toSomeWhere('#recommend')
					break
			}
		},
		// 跳转到某个位置
		toSomeWhere(domId) {
			// 获取每一个组件距离顶部的距离
			const query = uni.createSelectorQuery().in(this)

			uni
				.createSelectorQuery()
				.select(domId)
				.boundingClientRect(data => {
					uni
						.createSelectorQuery()
						.select('#swiper')
						.boundingClientRect(res => {
							//最外层盒子节点
							this.scrollTop = -(res.top - data.top)
						})
						.exec()
				})
				.exec()
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
	.scroll {
		height: 100vh;
	}
}
</style>
