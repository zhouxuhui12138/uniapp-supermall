<template>
	<view>
		<!-- 列表 -->
		<view class="cart-list">
			<CartListItem v-for="(item,index) in 4" :key="index" />
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

<style>

</style>
