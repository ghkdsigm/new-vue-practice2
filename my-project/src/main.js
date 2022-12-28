import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import vuetify from './plugins/vuetify'
import store from '@/store/index';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');
