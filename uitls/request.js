const baseURL = "http://152.136.185.210:7878/api/hy66"

const myRequest = (config) => {
	return new Promise((resovle, reject) => {
		uni.request({
			// url
			url: baseURL + config.url,
			// 请求方式
			method: config.method || 'get',
			// 请求参数
			data: config.data || {},
			// 成功
			success: (res) => {
				resovle(res.data)
			},
			// 失败
			fail: (err) => {
				reject(err)
			}
		})
	})
}

export default myRequest
