<template>
  <view class="sub-category">
    <view class="sub-item" v-for="(item, index) in subList" :key="index" @click="subClick">
      <image :src="item.image"></image>
      <view>{{ item.title }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    subList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    subClick() {
      uni.showToast({
        title: "正在开发中。。。",
        icon: "none",
      })
    },
  },
}
</script>

<style lang="less" scoped>
.sub-category {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .sub-item {
    font-size: 32rpx;
    text-align: center;
    padding: 10rpx 0;
    image {
      width: 150rpx;
      height: 150rpx;
      margin: 10rpx 0;
    }
  }
}
</style>
