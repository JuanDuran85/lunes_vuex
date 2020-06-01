import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import accounting from 'accounting';

Vue.filter("formato", (monto) =>{
  return accounting.formatMoney(monto, "", 2, ".", ",");
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
