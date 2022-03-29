<template>
	<view class="comment" v-if="comment.length > 0">
		<!-- title -->
		<view class="title">
			<text>用户评价</text>
			<text>更多</text>
		</view>
		<!-- content -->
		<view class="content">
			<view class="user-info">
				<image :src="comment[0].user.avatar" mode=""></image>
				<text>{{ comment[0].user.uname }}</text>
			</view>
			<view class="text">
				{{ comment[0].content }}
			</view>
			<view class="goods-info">
				<text class="time">{{ comment[0].created | formatTime }}</text>
				<text class="sku">{{ comment[0].style }}</text>
			</view>
			<view class="comment-img" v-if="comment[0].images">
				<image :src="item" v-for="item in comment[0].images" :key="item"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import dayjs from 'dayjs'
	export default {
		props: {
			comment: {
				type: Array,
				default: () => []
			}
		},
		filters: {
			formatTime(time) {
				return dayjs(time * 1000).format('YYYY/MM/DD hh:ss')
			}
		}
	}
</script>

<style lang="less" scoped>
	.comment {
		border-top: 8rpx solid #ededed;
		padding: 0 16rpx;
		font-size: 28rpx;
		// title
		.title {
			display: flex;
			height: 74rpx;
			align-items: center;
			justify-content: space-between;
			border-bottom: 2rpx solid #ededed;
		}
		// content
		.content {
			.user-info {
				height: 120rpx;
				display: flex;
				align-items: center;
				image {
					width: 80rpx;
					height: 80rpx;
					margin-right: 20rpx;
					border-radius: 50%;
				}
			}
			.text {
				text-indent: 20rpx;
			}
			.goods-info {
				color: #999;
				margin: 8rpx 0;
				.time {
					margin-right: 20rpx;
				}
			}
			.comment-img {
				image {
					width: 120rpx;
					height: 120rpx;
				}
			}
		}
	}
</style>
