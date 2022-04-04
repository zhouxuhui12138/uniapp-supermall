<template>
  <view class="cate-menu">
    <view
      class="menu-item"
      v-for="(item, index) in menuList"
      :key="item.maitKey"
      :class="{ active: isActive === index }"
      @click="menuClick(item.maitKey, index)"
    >
      {{ item.title }}
    </view>
  </view>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isActive: 0,
    }
  },
  methods: {
    menuClick(id, index) {
      this.isActive = index
      this.$emit("change", id)
    },
  },
}
</script>

<style lang="less" scoped>
.cate-menu {
  width: 180rpx;
  .menu-item {
    width: 100%;
    height: 100rpx;
    text-align: center;
    line-height: 100rpx;
    background-color: #f8f8f8;
    border-bottom: 2rpx solid #ccc;
    border-right: 2rpx solid #ccc;
  }
  .active {
    background-color: #fac3cd;
    color: #fff;
  }
}
</style>
