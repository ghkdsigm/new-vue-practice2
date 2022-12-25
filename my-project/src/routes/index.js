import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Sub01 from '@/pages/Sub01';
import Sub02 from '@/pages/Sub02';
import Sub03 from '@/pages/Sub03';
import Sub04 from '@/pages/Sub04';
import Sub05 from '@/pages/Sub05';

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
  {
    path: '/sub03',
    name: 'sub03',
    component: Sub03,
  },
  {
    path: '/sub04',
    name: 'sub04',
    component: Sub04,
  },
  {
    path: '/sub05',
    name: 'sub05',
    component: Sub05,
  },
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
