import axios from 'axios'

const devstat = {}

const api = axios.create({ baseURL: 'https://devstat-core.herokuapp.com' })

devstat.request = (config) => api.request(config)

;['delete', 'get', 'head'].forEach((method) => {
  devstat[method] = (url, config) => devstat.request({ ...config, method, url })
})

;['post', 'put', 'patch'].forEach((method) => {
  devstat[method] = (url, data, config) => devstat.request({ ...config, method, url, data })
})

export default devstat
