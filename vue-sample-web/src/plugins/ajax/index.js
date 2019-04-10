import axios from 'axios'

const plugin = {
  install (Vue) {
    const $vm = Vue
    $vm.prototype.$http = axios

    /* 根據環境所設置的baseURL */
    // axios.defaults.baseURL = process.env.API_ROOT

    /* 本機測試用所設置的baseURL */
    axios.defaults.baseURL = 'http://10.231.51.157:3000/'
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    // axios.defaults.headers.common['token'] = 'token'
  }
}

export default plugin
