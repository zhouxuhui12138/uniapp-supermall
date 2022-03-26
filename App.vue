<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
<script>
	export default {
		globalData: {
			text: '全局变量'
		}
	}
</script>

<style lang="less">
	// 引入全局css
	@import "./static/css/normalize.css";
	@import "./static/css/base.css";
</style>