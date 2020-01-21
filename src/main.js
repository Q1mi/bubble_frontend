import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import './plugins/axios.js'

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
