import Vue from "vue"
import Vuex from 'vuex'

//数据持久化插件
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 购物车列表
		cartList: []
	},
	getters: {
		// 购物车商品数量
		cartListLength(state) {
			return state.cartList.length
		},
		// 是否全选
		cartListAllSelected(state) {
			return state.cartList.every(item => item.selected)
		}
	},
	mutations: {
		// 添加购物车
		addCart(state, payload) {
			payload.selected = true
			state.cartList.push(payload)
		},
		// 添加购物车数量
		addCartCount(state, iid) {
			const cart = state.cartList.find(item => item.iid === iid)
			cart.count++
		},
		// 改变选中状态
		cartSelectedChange(state, payload) {
			if (payload.iid) {
				// 单选
				const cart = state.cartList.find(item => item.iid === payload.iid)
				cart.selected = payload.selected
			} else {
				// 全选
				state.cartList.map(item => item.selected = payload)
			}
		}
	},
	actions: {
		addCart(ctx, payload) {
			return new Promise((resovle, reject) => {
				const cart = ctx.state.cartList.find(item => item.iid === payload.iid)
				if (!cart) {
					// 没有则添加
					payload.count = 1
					ctx.commit('addCart', payload)
					resovle('添加购物车成功')
				} else {
					// 有则数量增加
					ctx.commit('addCartCount', cart.iid)
					resovle('数量添加成功')
				}
			})
		}
	},
	// 插件
	plugins: [
		createPersistedState({
			key: 'cart',
			paths: ['cartList'],
			storage: { // 存储方式定义  
				getItem: (key) => uni.getStorageSync(key), // 获取  
				setItem: (key, value) => uni.setStorageSync(key, value), // 存储  
				removeItem: (key) => uni.removeStorageSync(key) // 删除  
			}
		})
	]
})

export default store
