<template>
	<view class="detail">
		<!-- 导航栏 -->
		<DetailNav :list="['商品', '参数', '评论', '推荐']" class="detail-nav" @change="navChange" ref="nav" />

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

		<!-- 底部购物栏 -->
		<view class="goods-cart">
			<uni-goods-nav :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" />
		</view>

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
			recommend: [],
			// 商品id
			iid: '',
			// 商品价格
			price: '',
			// 商品主图
			shopImg: '',
			// 商品标题
			shopTitle: '',
			// 底部购物栏
			options: [
				{
					icon: 'headphones',
					text: '客服'
				},
				{
					icon: 'shop',
					text: '店铺'
				},
				{
					icon: 'star',
					text: '收藏'
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			]
		}
	},
	async onLoad(option) {
		const { iid } = option
		this.iid = iid

		this.findDetail(iid)
		const { data: res } = await GetRecommend()
		this.recommend = res.list
	},
	methods: {
		// 客服店铺收藏发生点击
		onClick(e) {
			if (e.index === 2) {
				// 收藏
				this.options[e.index].icon = this.options[e.index].icon === 'star-filled' ? 'star' : 'star-filled'
			} else {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			}
		},
		buttonClick(e) {
			if (e.index === 0) {
				// 添加购物车
				const cart = {
					iid: this.iid,
					title: this.shopTitle,
					price: this.price,
					img: this.shopImg
				}
				this.$store.dispatch('addCart', cart)
				
			} else {
				uni.showToast({
					title: `请添加购物车`,
					icon: 'none'
				})
			}
		},
		// 请求商品详情数据
		async findDetail(iid) {
			const { result: res } = await GetGoodsDetail(iid)
			// vuex需要的数据
			this.shopTitle = res.skuInfo.title
			this.price = res.skuInfo.defaultPrice
			this.shopImg = res.itemInfo.topImages[0]
			
			// 页面渲染需要的数据
			this.banners = res.itemInfo.topImages
			this.goodsInfo = [res.itemInfo, res.columns, res.shopInfo.services]
			this.shopInfo = res.shopInfo
			this.goodsDetail = res.detailInfo
			this.detailParams = {
				rule: res.itemParams.rule.tables,
				info: res.itemParams.info
			}
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

			// 滚动到指定位置改变nav颜色
			const query = uni.createSelectorQuery().in(this)
			query
				.select('#params')
				.boundingClientRect(data => {
					// 44为nav栏的高度 不在滚动区
					if (data.top < 44) {
						this.$refs.nav.isActive = 1
					} else {
						this.$refs.nav.isActive = 0
					}
				})
				.exec()
			query
				.select('#comment')
				.boundingClientRect(data => {
					if (data.top < 44) {
						this.$refs.nav.isActive = 2
					}
				})
				.exec()
			query
				.select('#recommend')
				.boundingClientRect(data => {
					if (data.top < 44) {
						this.$refs.nav.isActive = 3
					}
				})
				.exec()
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
							this.scrollTop = -(res.top - data.top) + 2
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

	.goods-cart {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 9999;
	}
}
</style>
