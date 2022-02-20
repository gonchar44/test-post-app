import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import Vue2TouchEvents from 'vue2-touch-events'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(Vue2TouchEvents)

new Vue({
  render: h => h(App),
}).$mount('#app')
