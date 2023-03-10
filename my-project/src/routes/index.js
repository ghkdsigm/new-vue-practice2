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
import Sub16 from '@/pages/Sub16';
import Sub17 from '@/pages/Sub17';
import Sub171Detail from '@/components/detail/DetailView01';
import Sub172Detail from '@/components/detail/DetailView02';
import Sub18 from '@/pages/Sub18';
import Sub19 from '@/pages/Sub19';
import Sub20 from '@/pages/Sub20';
import Sub21 from '@/pages/Sub21';
import Sub22 from '@/pages/Sub22';
import Sub23 from '@/pages/Sub23';
import Sub24 from '@/pages/Sub24';
import Sub25 from '@/pages/Sub25';
import Sub26 from '@/pages/Sub26';
import Sub27 from '@/pages/Sub27';
import Sub28 from '@/pages/Sub28';
import Sub29 from '@/pages/Sub29';
import Sub30 from '@/pages/Sub30';
import Sub31 from '@/pages/Sub31';
import Sub32 from '@/pages/Sub32';
import Sub33 from '@/pages/Sub33';
import Sub34 from '@/pages/Sub34';
import Sub36 from '@/pages/Sub36';
import Sub37 from '@/pages/Sub37';
import Sub38 from '@/pages/Sub38';
import Sub39 from '@/pages/Sub39';

import UploadConfirm from '@/components/form/UploadConfirm';

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
  {
    path: '/sub16',
    name: 'sub16',
    component: Sub16,
  },
  {
    path: '/sub17',
    name: 'sub17',
    component: Sub17,
  },
  {
    path: '/sub171/:id',
    name: 'sub171detail',
    component: Sub171Detail,
    props: true,
  },
  {
    path: '/sub172/:DBSeq',
    name: 'sub172detail',
    component: Sub172Detail,
  },
  {
    path: '/sub18',
    name: 'sub18',
    component: Sub18,
  },
  {
    path: '/sub19',
    name: 'sub19',
    component: Sub19,
  },
  {
    path: '/sub20',
    name: 'sub20',
    component: Sub20,
  },
  {
    path: '/sub21',
    name: 'sub21',
    component: Sub21,
  },
  {
    path: '/uploadConfirm',
    name: 'uploadConfirm',
    component: UploadConfirm,
  },
  {
    path: '/sub22',
    name: 'sub22',
    component: Sub22,
  },
  {
    path: '/sub23',
    name: 'sub23',
    component: Sub23,
  },
  {
    path: '/sub24',
    name: 'sub24',
    component: Sub24,
  },
  {
    path: '/sub25',
    name: 'sub25',
    component: Sub25,
  },
  {
    path: '/sub26',
    name: 'sub26',
    component: Sub26,
  },
  {
    path: '/sub27',
    name: 'sub27',
    component: Sub27,
  },
  {
    path: '/sub28',
    name: 'sub28',
    component: Sub28,
  },
  {
    path: '/sub29',
    name: 'sub29',
    component: Sub29,
  },
  {
    path: '/sub30',
    name: 'sub30',
    component: Sub30,
  },
  {
    path: '/sub31',
    name: 'sub31',
    component: Sub31,
  },
  {
    path: '/sub32',
    name: 'sub32',
    component: Sub32,
  },
  {
    path: '/sub33',
    name: 'sub33',
    component: Sub33,
  },
  {
    path: '/sub34',
    name: 'sub34',
    component: Sub34,
  },
  {
    path: '/sub36',
    name: 'sub36',
    component: Sub36,
  },
  {
    path: '/sub37',
    name: 'sub37',
    component: Sub37,
  },
  {
    path: '/sub38',
    name: 'sub38',
    component: Sub38,
  },
  {
    path: '/sub39',
    name: 'sub39',
    component: Sub39,
  },
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  routes,
});

//??????????????? ??????((??? ???????????? URL ????????? ????????? ????????? ??? ??????)
// router.beforeEach( async(to, from, next) => { //????????? ?????? ???????????? ?????? ????????? ???
//   /**
//    * to: ????????? url ????????? ?????? ????????? ??????
//    * from: ?????? url ????????? ?????? ????????? ??????
//    * next: to?????? ????????? url??? ???????????? ?????? ??? ???????????? ?????? ??????
//    * next() ??? ???????????? ????????? ?????? ???????????? ??????
//    */
//   if(VueCookies.get('accessToken')===null && VueCookies.get('refreshToken') !== null){
//     //refreshToken??? ?????? accessToken??? ?????? ?????? ?????? ????????? ??????
//     await store.dispatch('refreshToken');
//   }
//   if (VueCookies.get('accessToken')){
//     //accessToken??? ?????? ?????? ??????
//     return next();
//   }
//   if(VueCookies.get('accessToken')===null && VueCookies.get('refreshToken') === null){
//     //2??? ????????? ?????? ?????? ?????? ?????????????????????
//     return next({name: 'Login'});
//   }
//   return next();
// })

export default router;
