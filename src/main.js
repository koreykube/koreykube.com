import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AsyncComputed from 'vue-async-computed'
import * as AwsUi from '@aws-amplify/ui-vue'

Vue.config.productionTip = false
Vue.use(AsyncComputed, AwsUi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
