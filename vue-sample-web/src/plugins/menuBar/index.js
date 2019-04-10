import menuBar from '@/components/menuBar.vue'

const plugin = {
  install (Vue) {
    Vue.component('menuBar', menuBar)
  }
}
export default plugin
