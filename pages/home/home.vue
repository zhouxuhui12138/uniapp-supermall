<template>
	<view class="home">
		<!-- 可滚动区域 -->
		<scroll-view scroll-y="true" class="scroll" @scroll="scroll" @scrolltolower="loadMore" :scroll-top="scrollTop">
			<!-- 轮播图 -->
			<HomeSwiper :banners="banners" />
			<!-- 推荐数据 -->
			<HomeRecommend :list="recommendList" />
			<!-- 本周流行 -->
			<view class="fashion"><image src="../../static/img/home/recommend_bg.jpg" mode="widthFix"></image></view>
			<!-- 首页tab -->
			<Tab :tabList="tabList" @change="tabChange" id="tab" :class="{ 'home-tab-fixed': tabIsFixed }" />
			<!-- 商品列表 -->
			<GoodsList :list="list" />
		</scroll-view>
		
		<!-- 返回顶部 -->
		<BackTop v-show="backTopIsShow" @click.native="backTop" />
	</view>
</template>

<script>
import { GetHomeDate, GetGoodsList } from '../../api'
import HomeSwiper from './components/home-swiper.vue'
import HomeRecommend from './components/home-recommend.vue'
import Tab from '../../components/tab/tab.vue'
import GoodsList from '../../components/goods/goods-list.vue'
import BackTop from '../../components/back-top/back-top.vue'

export default {
	data() {
		return {
			// 轮播图数据
			banners: [],
			// 推荐商品数据
			recommendList: [],
			// tab数据
			tabList: ['流行', '新款', '精选'],
			// 控制实际的tab显示
			tabIsFixed: false,
			// tab距离页面的距离
			tabIsFinedY: 0,
			// 商品列表
			goodsList: {
				pop: {
					list: [],
					page: 0
				},
				sell: {
					list: [],
					page: 0
				},
				new: {
					list: [],
					page: 0
				}
			},
			// 请求类型
			goodsType: 'pop',
			// 防抖
			allowLoad: true,
			// 是否显示backtop
			backTopIsShow: false,
			// 滚动位置
			scrollTop: 0,
			// 返回顶部的位置
			oldScrollTop: 0
		}
	},
	components: {
		HomeSwiper,
		HomeRecommend,
		Tab,
		GoodsList,
		BackTop
	},
	async onLoad() {
		// 获取轮播图数据
		const { data: res } = await GetHomeDate()
		this.banners = res.banner.list
		this.recommendList = res.recommend.list

		// 获取商品列表数据
		this.findGoodsList('pop')
		this.findGoodsList('sell')
		this.findGoodsList('new')
	},
	// 页面渲染完成
	onReady() {
		// 页面渲染完成 计算tab栏距离顶部的高度
		const query = uni.createSelectorQuery().in(this)
		query
			.select('#tab')
			.boundingClientRect(data => {
				this.tabIsFinedY = data.top
			})
			.exec()
	},
	methods: {
		// 监听页面滚动
		scroll(e) {
			const { scrollTop } = e.detail
			if (scrollTop >= this.tabIsFinedY) {
				this.tabIsFixed = true
				this.backTopIsShow = true
			} else {
				this.tabIsFixed = false
				this.backTopIsShow = false
			}
			this.oldScrollTop = scrollTop
		},
		// 加载更多
		loadMore() {
			// 防抖
			if (this.allowLoad) {
				this.findGoodsList(this.goodsType)
				this.allowLoad = false
			}
		},
		// tab发生切换 请求数据
		tabChange(index) {
			// 获取请求type
			switch (index) {
				case 0:
					this.goodsType = 'pop'
					break
				case 1:
					this.goodsType = 'sell'
					break
				case 2:
					this.goodsType = 'new'
					break
			}
		},
		// 请求商品列表数据
		async findGoodsList(type) {
			// 提示正在加载
			uni.showLoading({
				title: '加载中'
			})
			const page = this.goodsList[type].page + 1
			const { data: res } = await GetGoodsList({ type, page })
			this.goodsList[type].page++
			this.goodsList[type].list.push(...res.list)
			this.allowLoad = true
			uni.hideLoading()
		},
		// 回到顶部
		backTop() {
			this.scrollTop = this.oldScrollTop
			this.$nextTick(() => {
				this.scrollTop = 0
			})
		}
	},
	// 计算属性
	computed: {
		list() {
			return this.goodsList[this.goodsType].list
		}
	}
}
</script>

<style lang="less" scoped>
.home {
	height: 100%;
	background-color: #eee;

	.scroll {
		height: 100vh;

		.fashion {
			margin-top: 20rpx;
			image {
				width: 100%;
			}
		}

		.home-tab-fixed {
			position: fixed;
			width: 100%;
			top: 88rpx;
			right: 0;
			left: 0;
			z-index: 999;
		}

		.aaa {
			height: 2000rpx;
		}
	}
}
</style>
