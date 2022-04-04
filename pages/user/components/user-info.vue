<template>
  <view class="user-info">
    <!-- 头像 -->
    <view class="user-img">
      <image src="../../../static/img/profile/avatar.svg"></image>
    </view>
    <!-- 登录 -->
    <button class="login">一键登录</button>
    <!-- 右箭头 -->
    <view class="right">
      <svg t="1619341923729" class="arrow-svg right" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2990" width="200" height="200"><path d="M699.733333 448L456.533333 202.666667c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l245.333334 245.333333c10.666667 10.666667 17.066667 25.6 17.066666 40.533333s-6.4 29.866667-17.066666 40.533334L409.6 817.066667c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333L699.733333 618.666667c23.466667-23.466667 36.266667-53.333333 36.266667-85.333334s-12.8-61.866667-36.266667-85.333333z" p-id="2991" fill="#ffffff"></path></svg>
    </view>
  </view>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.user-info {
  width: 100%;
  height: 180rpx;
  display: flex;
  align-items: center;
  background-color: #ff8198;
  padding: 20rpx;
  font-size: 30rpx;

  .user-img {
    image {
      border-radius: 50%;
      width: 130rpx;
      height: 130rpx;
    }
  }

  .login {
    text-align: center;
    height: 80rpx;
    line-height: 80rpx;
    margin: 0 140rpx;
    background-color: #ff9900;
    color: #fff;
    
  }

  .right {
    width: 50rpx;
    height: 50rpx;
    margin-left: 26rpx;
  }
}
</style>
