import {
  SHOW_MENU,
  HIDE_MENU
  // SET_TOKEN,
  // SET_USER_ID,
  // SET_IDENTITY_INFO
} from './mutationTypes'

const mutations = {
  [SHOW_MENU] (state) {
    state.menu = true
  },
  [HIDE_MENU] (state) {
    state.menu = false
  }
  // ,
  // [SET_TOKEN](state, playload) {
  //   state.token = playload
  //   sessionStorage.setItem('token', playload)
  // },
  // [SET_USER_ID](state, playload) {
  //   state.userId = playload
  //   sessionStorage.setItem('userId', playload)
  // },
  // [SET_IDENTITY_INFO](state, payload) {
  //   state.identityInfo = payload
  // },
  // quitCurApp() {
  //   //清除token -- session
  //   sessionStorage.removeItem('token')
  //   //退出IOS-APP
  //   if (window.webkit) {
  //     window.webkit.messageHandlers.closeWebView.postMessage({});
  //     //退出Android-APP
  //   } else if (window.android) {
  //     window.android.back()
  //   }
  // },
}

export default mutations
