import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Sub01 from '@/pages/Sub01';
import Sub02 from '@/pages/Sub02';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sub01',
    name: 'sub01',
    component: Sub01,
  },
  {
    path: '/sub02',
    name: 'sub02',
    component: Sub02,
  },
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
