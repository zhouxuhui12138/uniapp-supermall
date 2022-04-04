<template>
  <view class="category">
    <!-- 左侧菜单 -->
    <Menu class="left-menu" :menuList="menuList" @change="menuChange" />
    <!-- 右侧内容 -->
    <SubCategory class="right-sub" :subList="subList" />
  </view>
</template>

<script>
import { GetCategory, GetSubCategory } from "../../api"
import Menu from "./components/menu.vue"
import SubCategory from "./components/sub-category.vue"

export default {
  components: { Menu, SubCategory },
  data() {
    return {
      // 左侧菜单数据
      menuList: [],
      // 右侧列表数据
      subList: [],
    }
  },
  async created() {
    const { data: res } = await GetCategory()
    this.menuList = res.category.list

    // 页面初始化请求一次数据
    this.menuChange(res.category.list[0].maitKey)
  },
  methods: {
    async menuChange(id) {
      const { data: res } = await GetSubCategory(id)
      this.subList = res.list
    },
  },
}
</script>

<style lang="less" scoped>
.category {
  display: flex;
  height: 100vh;
  overflow: hidden;

  .left-menu {
    overflow-y: auto;
  }
  // 隐藏进度条
  .left-menu::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }

  .right-sub {
    flex: 1;
    overflow-y: auto;
    padding: 20rpx;
  }
}
</style>
