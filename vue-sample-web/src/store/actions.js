import {
  SHOW_MENU,
  HIDE_MENU
  // SET_TOKEN,
  // SET_USER_ID,
  // SET_IDENTITY_INFO
} from './mutationTypes'

const actions = {
  // 操作数据
  showMenu ({ commit }) {
    commit(SHOW_MENU)
  },
  hideMenu ({ commit }) {
    commit(HIDE_MENU)
  }
  // ,
  // setToken({ commit }, token) {
  //   commit(SET_TOKEN, token)
  // },
  // setUserId({ commit }, userId) {
  //   commit(SET_USER_ID, userId)
  // },
  // setIdentityInfo({ commit }, identityInfo) {
  //   commit(SET_IDENTITY_INFO, identityInfo)
  // },
}

export default actions
