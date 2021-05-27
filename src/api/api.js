import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://m.maizuo.com/gateway',
    timeout: 5000,
})

const showLoading = null

instance.interceptors.request.use(
  (config) => {

    // 全局使用 loading
    // showLoading = ElLoading.service({ fullscreen: true })

    // const token = localStorage.getItem('token')
    // config.headers.Authorization = toke
    return config
  }
)

instance.interceptors.response.use(
  (config) => {
    // 关闭全局的 loading
    // if (showLoading) showLoading.close()

    return config.data
  }
)


//通用方法,基于Restful接口规范的请求
// 默认请求都需要loding遮罩层
const GET = (url, params,headers) => {
    return instance.get(url, {
        params,headers
    })
}

const POST = (url, params, config = null) => {
    if (config) {
        return instance.post(url, params, config)
    } else {
        return instance.post(url, params)
    }
}

export default {
    GET,
    POST
}