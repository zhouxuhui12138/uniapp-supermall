<template>
	<view class="cart">
		<!-- 列表 -->
		<view class="cart-list" v-if="cartList.length > 0">
			<CartListItem v-for="(item,index) in cartList" :key="item.iid" :list="item" />
		</view>
		<!-- 购物车为空时显示 -->
		<view class="empty" v-else>
			<image src="https://img.ixintu.com/download/jpg/20200905/b37f4527019300b3af7df25202c3ff38_512_512.jpg!con"></image>
		</view>
		<!-- 尾部 -->
		<CartBottom />
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	import CartBottom from './components/cart-bottom.vue'
	import CartListItem from './components/cart-list-item.vue'
	export default {
		components: {
			CartBottom,
			CartListItem
		},
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(['cartList'])
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.cart {
		width: 100%;
		height: 100vh;
		
		.empty {
			text-align: center;
			margin-top: 50rpx;
			image {
				width: 60%;
				height: 400rpx;
			}
		}
	}
</style>
