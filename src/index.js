import Loading from './Loading.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('Loading', Loading)
}
export default Loading