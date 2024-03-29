import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import vuetify from './plugins/vuetify'
import store from '@/store/index';
import CKEditor4 from 'ckeditor4-vue/dist/legacy.js'
import CKEditor from 'ckeditor4-vue';
import '@/plugins/vee-validation';
import "@/plugins/fontAwesomeIcon.js"; // fontAwesomeIcon.js 불러옴
import "@/plugins/vuetify.js"; // fontAwesomeIcon.js 불러옴
import Meta from 'vue-meta';

Vue.use(CKEditor4).use(Meta, {
  attribute: 'data-vue-meta'
  // vmid를 사용하기 위한 옵션
})
  .use(CKEditor).config.productionTip = false;

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
  store,
}).$mount('#app');
