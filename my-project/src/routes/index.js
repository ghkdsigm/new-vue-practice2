import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home';
import Sub01 from '@/pages/Sub01';
import Sub02 from '@/pages/Sub02';
import Sub03 from '@/pages/Sub03';
import Sub04 from '@/pages/Sub04';
import Sub05 from '@/pages/Sub05';
import Sub06 from '@/pages/Sub06';
import Sub07 from '@/pages/Sub07';
import Sub08 from '@/pages/Sub08';
import Sub09 from '@/pages/Sub09';
import Sub10 from '@/pages/Sub10';
import Sub11 from '@/pages/Sub11';
import Sub12 from '@/pages/Sub12';
import Sub13 from '@/pages/Sub13';
import Sub14 from '@/pages/Sub14';
import Sub15 from '@/pages/Sub15';

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
  {
    path: '/sub06',
    name: 'sub06',
    component: Sub06,
  },
  {
    path: '/sub07',
    name: 'sub07',
    component: Sub07,
  },
  {
    path: '/sub08',
    name: 'sub08',
    component: Sub08,
  },
  {
    path: '/sub09',
    name: 'sub09',
    component: Sub09,
  },
  {
    path: '/sub10',
    name: 'sub10',
    component: Sub10,
  },
  {
    path: '/sub11',
    name: 'sub11',
    component: Sub11,
  },
  {
    path: '/sub12',
    name: 'sub12',
    component: Sub12,
  },
  {
    path: '/sub13',
    name: 'sub13',
    component: Sub13,
  },
  {
    path: '/sub14',
    name: 'sub14',
    component: Sub14,
  },
  {
    path: '/sub15',
    name: 'sub15',
    component: Sub15,
  },
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
