import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import vuetify from './plugins/vuetify'
import store from '@/store/index';
import CKEditor4 from 'ckeditor4-vue/dist/legacy.js'
import '@/plugins/vee-validation';

Vue.use(CKEditor4).config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');
