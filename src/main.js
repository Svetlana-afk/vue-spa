import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'


Vue.config.productionTip = false;

Vue.component('Loader', Loader)

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
