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
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  routes,
});

//네비게이션 가드((뷰 라우터로 URL 접근에 대해서 처리할 수 있음)
// router.beforeEach( async(to, from, next) => { //여기서 모든 라우팅이 대기 상태가 됨
//   /**
//    * to: 이동할 url 정보가 담긴 라우터 객체
//    * from: 현재 url 정보가 담긴 라우터 객체
//    * next: to에서 지정한 url로 이동하기 위해 꼭 호출해야 하는 함수
//    * next() 가 호출되기 전까지 화면 전환되지 않음
//    */
//   if(VueCookies.get('accessToken')===null && VueCookies.get('refreshToken') !== null){
//     //refreshToken은 있고 accessToken이 없을 경우 토큰 재발급 요청
//     await store.dispatch('refreshToken');
//   }
//   if (VueCookies.get('accessToken')){
//     //accessToken이 있을 경우 진행
//     return next();
//   }
//   if(VueCookies.get('accessToken')===null && VueCookies.get('refreshToken') === null){
//     //2개 토큰이 모두 없을 경우 로그인페이지로
//     return next({name: 'Login'});
//   }
//   return next();
// })

export default router;
