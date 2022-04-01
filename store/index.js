import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 购物车列表
		cartList: []
	},
	mutations: {
		// 添加购物车
		addCart(state, payload) {
			state.cartList.push(payload)
		}
	},
	actions: {
		addCart(ctx, payload) {
			console.log(payload)
			ctx.commit('addCart', payload)
		}
	}
})

export default store