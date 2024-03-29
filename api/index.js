import request from "../uitls/request.js"

// 请求首页数据
export const GetHomeDate = () => {
  return request({
    url: "/home/multidata",
  })
}

// 请求商品列表
export const GetGoodsList = ({ type, page }) => {
  return request({
    url: "/home/data",
    data: {
      type,
      page,
    },
  })
}

// 根据商品id查询商品详情数据
export const GetGoodsDetail = id => {
  return request({
    url: `/detail?iid=${id}`,
  })
}

// 获取商品详情推荐数据
export const GetRecommend = () => {
  return request({
    url: `/recommend`,
  })
}

// 获取分类数据
export const GetCategory = () => {
  return request({
    url: `/category`,
  })
}

// 根据id获取分类详情
export const GetSubCategory = id => {
  return request({
    url: `/subcategory?maitKey=${id}`,
  })
}
