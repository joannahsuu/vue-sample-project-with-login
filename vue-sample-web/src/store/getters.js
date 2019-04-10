const getters = {
  // 返回数据
  getMenu (state) {
    return state.menu
  }
  // ,
  // getToken(state) {
  //   return state.token ? state.token : sessionStorage.getItem('token')
  // },
  // getUserId(state) {
  //   return state.userId ? state.userId : sessionStorage.getItem('userId')
  // },
  // getIdentityInfo(state) {
  //   return state.identityInfo
  // },
}

export default getters
