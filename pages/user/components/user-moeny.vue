<template>
  <view class="money">
    <view class="item">
      <text class="font-color">0.00</text>元
      <view class="desc">我的余额</view>
    </view>
    <view class="item">
      <text class="font-color">0</text>个
      <view class="desc">我的余额</view>
    </view>
    <view class="item">
      <text class="font-color">0</text>个
      <view class="desc">我的余额</view>
    </view>
  </view>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.money {
  display: flex;
  padding: 60rpx 0;
  border-bottom: 10rpx solid #ededed;

  .item {
    flex: 1;
    text-align: center;
    .desc {
      font-size: 19rpx;
      margin-top: 20rpx;
    }
  }

  .font-color {
    font-size: 40rpx;
    color: #ff8198;
  }
}
</style>