<template>
	<view class="user">
		<!-- 用户信息 -->
		<UserInfo />
		<!-- 用户资产 -->
		<UserMoeny />
		<!-- card -->
		<UserCard />
	</view>
</template>

<script>
import UserCard from './components/user-card.vue'
import UserInfo from './components/user-info.vue'
import UserMoeny from './components/user-moeny.vue'
	export default {
  components: { UserInfo, UserMoeny, UserCard },
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
