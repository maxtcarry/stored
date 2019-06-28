import Vue from 'vue'
import axios from 'axios'
import {
  Toast
} from 'vant';
Vue.use(Toast);

axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.headers.Authorization = ""
axios.interceptors.request.use(function(config) {
  Toast('数据加载中···');
  config.headers['Access-Control-Allow-Origin'] = "*"
  return config
}, function(error) {
  // Do something with request error
  return Promise.reject(error)
})
// 在这里对返回的数据进行处理
axios.interceptors.response.use(res => {
  if (res.status == 200) {
    if (res.data.code == 0) {
      Toast.clear();
      console.log(`接口提示 %c${res.config.url}`, 'color: blue', res.data.msg)
      return res.data.res
    } else {
      return Promise.reject(res.data.msg)
    }
  } else {
    return res.data
  }
}, error => {
  console.log(error)
  if (error.response.status === 401) {
    console.log(this)
  } else {
    return Promise.reject(error)
  }
})
Vue.prototype.$axios = axios
export default axios
