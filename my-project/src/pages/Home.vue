<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div style="display: flex; width: 80%; margin: 0 auto">
    <table class="lisTable">
      <thead>
        <tr>
          <th>No</th>
          <th>Contents</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in vueData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.content }}</td>
          <td>
            <router-link :to="item.link">바로가기</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="lisTable">
      <colgroup>
        <col width="5%" />
        <col width="8%" />
        <col width="*" />
        <col width="10%" />
        <col width="10%" />
      </colgroup>
      <thead>
        <tr>
          <th>No</th>
          <th>Type</th>
          <th>Contents</th>
          <th>시리즈여부</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in vueUrl" :key="index">
          <td>{{ index + 1 }}</td>
          <td style="font-size:12px">{{ item.type }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.series !== '' ? 'Y' : 'N' }}</td>
          <td>
            <a :href="item.url" target="_blank">바로가기</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vueData: [
        {
          content: '슬롯1',
          link: 'sub01',
        },
        {
          content: 'Prop',
          link: 'sub02',
        },
        {
          content: 'Emit',
          link: 'sub03',
        },
        {
          content: '슬롯2',
          link: 'sub04',
        },
        {
          content: '탭',
          link: 'sub05',
        },
        {
          content: '게임셀렉트',
          link: 'sub06',
        },
        {
          content: '유효성',
          link: 'sub07',
        },
        {
          content: 'API',
          link: 'sub08',
        },
        {
          content: 'VUETIFYTABLE01',
          link: 'sub09',
        },
        {
          content: 'VUETIFYTABLE02',
          link: 'sub10',
        },
        {
          content: 'VUETIFYTABLE03',
          link: 'sub11',
        },
        {
          content: 'VUETIFYTABLE04',
          link: 'sub19',
        },
        {
          content: 'Computed & Watch',
          link: 'sub12',
        },
        {
          content: 'Computed',
          link: 'sub13',
        },
        {
          content: 'Scoped slots',
          link: 'sub14',
        },
        {
          content: 'Named slots',
          link: 'sub15',
        },
        {
          content: 'Bay API',
          link: 'sub16',
        },
        {
          content: 'PARAMS',
          link: 'sub17',
        },
        {
          content: 'PAGING',
          link: 'sub18',
        },
        {
          content: 'PAGING',
          link: 'sub18',
        },
        {
          content: 'VUETIFYTABLE',
          link: 'sub19',
        },
        {
          content: '쿠키/로컬스토리지',
          link: 'sub20',
        },
        {
          content: '파일첨부',
          link: 'sub21',
        },
        {
          content: 'MIXIN',
          link: 'sub22',
        },
        {
          content: 'CKEditor',
          link: 'sub23',
        },
        {
          content: 'Vee-validator',
          link: 'sub24',
        },
        {
          content: 'Admin-event-config 예제',
          link: 'sub25',
        },
        {
          content: 'Select',
          link: 'sub26',
        },
        {
          content: 'Radio, Checkbox 등등',
          link: 'sub27',
        },
        {
          content: 'Excel(xlsl)',
          link: 'sub28',
        },
        {
          content: '동적 class',
          link: 'sub29',
        },
        {
          content: 'vuetify 팝업',
          link: 'sub30',
        },
        {
          content: 'ckeditor2',
          link: 'sub31',
        },
        {
          content: 'upload',
          link: 'sub32',
        },
        {
          content: 'slider',
          link: 'sub33',
        },
        {
          content: 'tree',
          link: 'sub34',
        },
        {
          content: 'chart.js',
          link: 'sub36',
        },
        {
          content: 'img upload',
          link: 'sub37',
        },
        {
          content: 'input 자동완성',
          link: 'sub38',
        },
        {
          content: '무한스크롤',
          link: 'sub39',
        },
        {
          content: '토글',
          link: 'sub40',
        },
        {
          content: '무한스크롤',
          link: 'sub41',
        },
        {
          content: '페이징2',
          link: 'sub42',
        },
      ],
      vueUrl: [
        {
          title: 'moment.js 사용 방법',
          url: 'https://jsikim1.tistory.com/195',
          series: '',
          type:'js',
        },
        {
          title: 'vue2 typescript',
          url: 'https://blog.naver.com/iamswain25/222490932175',
          series: '',
          type:'ts',
        },
        {
          title: 'v-for 이용하여 radio 설정 및 v-model 데이터 관리',
          url: 'https://hjh0827.tistory.com/70',
          series: '',
          type:'vue2',
        },
        {
          title: 'vuetify example',
          url: 'https://codepen.io/pen?editors=1010',
          series: '',
          type:'vue2',
        },
        {
          title: 'vue(5) 이미지 업로드 (formData에 담아 axios로 보내기)',
          url: 'https://devbirdfeet.tistory.com/87',
          series: 'yes',
          type:'vue2',
        },
        {
          title: '[VueJS] 엑셀 다운로드(Excel download)',
          url: 'https://baebb.tistory.com/13',
          series: '',
          type:'vue2',
        },
        {
          title: '활용도가 높아지는 웹 프론트엔드 언어, 타입스크립트(TypeScript)',
          url: 'https://www.samsungsds.com/kr/insights/typescript.html',
          series: '',
          type:'ts',
        },
        {
          title: '빠르게 마스터하는 타입스크립트',
          url: 'https://codingapple.com/course/typescript-crash-course/',
          series: '',
          type:'ts',
        },
        {
          title: 'Vue.js $watch 오브젝트 변경 모니터링(감시) 사용법',
          url: 'https://codingcoding.tistory.com/337',
          series: '',
          type:'vue',
        },
        {
          title: 'Vue2 + TypeScript 시작하기',
          url: 'https://velog.io/@integer/Vue2-TypeScript-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0',
          series: '',
          type:'vue2+ts',
        },
        {
          title: '[Vue.js] Vue.js 2.x 버전 Typescript 적용하기',
          url: 'https://hi-today-yun12.tistory.com/32',
          series: '',
          type:'vue2+ts',
        },
        {
          title: 'ToDoList-vue-ts(vue2+ts/vue3+ts) github 사이트',
          url: 'https://github.com/jongik96/ToDoList-vue-ts/tree/master',
          series: '',
          type:'vue+ts',
        },
        {
          title: 'TypeScript Handbook 정리2 - Everyday Types',
          url: 'https://msyu1207.tistory.com/entry/TypeScript-Handbook-%EC%A0%95%EB%A6%AC2-Everyday-Types#toc-%F0%9F%9F%A2%20The%20primitives%20(%EC%9B%90%EC%8B%9C%20%ED%83%80%EC%9E%85):%20string,%20number,%20boolean',
          series: '',
          type:'ts',
        },
        {
          title: '[Vue.js] Vue.js 실무 프로젝트에 적용하면 좋은 내용 정리',
          url: 'https://jess2.xyz/vue/vue-tip/',
          series: '',
          type:'vue',
        },
        {
          title: 'vue 기본문법 총정리',
          url: 'https://cjw-awdsd.tistory.com/33',
          series: '',
          type:'vue',
        },
        {
          title: 'vue + ts 총정리 블로그(클래스형태)',
          url: 'https://kyounghwan01.github.io/blog/TS/Vue/grammer/#data',
          series: 'yes',
          type:'vue+ts',
        },
        {
          title: 'Typescript는 어떻게 공부해야 하나요?',
          url: 'https://velog.io/@teo/typescript',
          series: '',
          type:'ts',
        },
        {
          title: '[TS] TS의 기초',
          url: 'https://burning-camp.tistory.com/81',
          series: '',
          type:'ts',
        },
        {
          title: '[TypeScript] 타입스크립트란? 기본 공부하기',
          url: 'https://rrecoder.tistory.com/142',
          series: '',
          type:'ts',
        },
        {
          title: 'vue board 만들기 + 댓글 등등',
          url: 'https://velog.io/@hi_young?tag=vue',
          series: 'yes',
          type:'vue',
        },
        {
          title: '[Vue.js] 실시간 검색 구현하기 (버튼, 엔터 필요없다)',
          url: 'https://velog.io/@yeonsubaek/Vue.js-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EA%B2%80%EC%83%89-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EB%B2%84%ED%8A%BC-%EC%97%94%ED%84%B0-%ED%95%84%EC%9A%94%EC%97%86%EB%8B%A4',
          series: '',
          type:'etc',
        },
        {
          title: 'JavaScript - 배열을 객체로 변환, 4가지 방법',
          url: 'https://codechacha.com/ko/javascript-convert-array-to-object/',
          series: '',
          type:'js',
        },
        {
          title: '객체를 배열로, 배열을 객체로',
          url: 'https://goddino.tistory.com/198',
          series: '',
          type:'js',
        },
        {
          title: '[ ESlint & Prettier ] 문법오류, 코드정리 도와주는 도구들',
          url: 'https://im-designloper.tistory.com/25',
          series: '',
          type:'eslint',
        },
        {
          title: '[Vue.js] ❗️TypeError: Cannot read property of undefined',
          url: 'https://jess2.xyz/vue/data-undefined-error/',
          series: '',
          type:'vue',
        },
        {
          title: 'vue chartjs vue2 / vue3 예시',
          url: 'https://vue-chartjs.org/examples/#vue-3-charts',
          series: '',
          type:'vue',
        },
        {
          title: '로그인 시 user 정보 쿠키에 담기',
          url: 'https://velog.io/@sdsdsrd/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%8B%9C-user-%EC%A0%95%EB%B3%B4-%EC%BF%A0%ED%82%A4%EC%97%90-%EB%8B%B4%EA%B8%B0',
          series: '',
          type:'vue',
        },
        {
          title: '[VueJS] vue-cli + vuex + jwt 로그인 기능 구현하기',
          url: 'https://minu0807.tistory.com/64',
          series: '',
          type:'vue',
        },
        {
          title: '[Vue.js] 로그인 Token 기반 인증 + js-cookie',
          url: 'https://velog.io/@unknown89/Vue.js-%EB%A1%9C%EA%B7%B8%EC%9D%B8-Token-%EA%B8%B0%EB%B0%98-%EC%9D%B8%EC%A6%9D',
          series: '',
          type:'vue',
        },
        {
          title: 'JWT 토큰을 통한 로그인 구현하기',
          url: 'https://velog.io/@krungy/JWT-%ED%86%A0%ED%81%B0%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0',
          series: '',
          type:'vue',
        },
        {
          title: 'Vue - Login 세션 유지하기',
          url: 'https://kdinner.tistory.com/60',
          series: '',
          type:'vue',
        },
        {
          title: 'JavaScript 기술을 향상시키는 12 가지 개념',
          url: 'https://frontdev.tistory.com/entry/JavaScript-%EA%B8%B0%EC%88%A0%EC%9D%84-%ED%96%A5%EC%83%81%EC%8B%9C%ED%82%A4%EB%8A%94-12-%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90',
          series: '',
          type:'js',
        },
        {
          title: '[javscript] 12가지 Array 팁',
          url: 'https://frontdev.tistory.com/entry/javscript-12%EA%B0%80%EC%A7%80-Array-%ED%8C%81',
          series: '',
          type:'js',
        },
        {
          title: '[JS] Javascript 스트링 메서드',
          url: 'https://frontdev.tistory.com/entry/JS-Javascript-%EC%8A%A4%ED%8A%B8%EB%A7%81-%EB%A9%94%EC%84%9C%EB%93%9C?category=761561',
          series: '',
          type:'js',
        },
        {
          title: '[JS] 📚 자바스크립트 클래스 문법 - 완벽 가이드',
          url: 'https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-ES6-Class-%EB%AC%B8%EB%B2%95-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC',
          series: '',
          type:'js',
        },
        {
          title: '자바스크립트 클래스와 객체 총정리',
          url: 'https://velog.io/@younoah/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%81%B4%EB%9E%98%EC%8A%A4%EC%99%80-%EA%B0%9D%EC%B2%B4-%EC%B4%9D%EC%A0%95%EB%A6%AC',
          series: '',
          type:'js',
        },
        {
          title: 'HTTP 구조 헤더(Header)와 본문(Body)',
          url: 'https://blueyikim.tistory.com/1999',
          series: '',
          type:'cs',
        },
        {
          title: 'HTTP의 구조에 대해 이해하기(특히 Header 구조 파악하기)',
          url: 'https://hazel-developer.tistory.com/145',
          series: '',
          type:'cs',
        },
        {
          title: '자료 구조(Data Structure)',
          url: 'https://velog.io/@neity16/%EC%9E%90%EB%A3%8C-%EA%B5%AC%EC%A1%B0Data-Structure',
          series: '',
          type:'cs',
        },
        {
          title: '알고리즘을 풀며 만난 자바스크립트 문법을 정리합니다',
          url: 'https://velog.io/@dev_cecy/series/Javascript',
          series: 'y',
          type:'js',
        },
        {
          title: '자바스크립트 필수 문법 정리',
          url: 'https://velog.io/@junu_ddi/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%95%84%EC%88%98-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC',
          series: '',
          type:'js',
        },
        {
          title: 'JS 알고리즘 총정리',
          url: 'https://velog.io/@nahyunbak/JS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Math-%EA%B0%9D%EC%B2%B4',
          series: '',
          type:'js',
        },
        {
          title: 'JavaScript 알고리즘 문제 풀이 시 자주 사용되는 테크닉',
          url: 'https://takeu.tistory.com/31',
          series: '',
          type:'js',
        },
        {
          title: '[JavaScript] 페이지 처리, 페이징 처리, 페이지네이션',
          url: 'https://mchch.tistory.com/140',
          series: '',
          type:'js',
        },
        {
          title: 'Javascript Paging 구현하기(페이지구현)',
          url: 'https://bourbonkk.tistory.com/70',
          series: '',
          type:'js',
        },
        {
          title: '화면 깜빡임 없이 javascript(Ajax)로 페이징 처리하기',
          url: 'https://pparkseona.tistory.com/entry/%ED%99%94%EB%A9%B4-%EA%B9%9C%EB%B9%A1%EC%9E%84-%EC%97%86%EC%9D%B4-javascriptAjax%EB%A1%9C-%ED%8E%98%EC%9D%B4%EC%A7%95-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0',
          series: '',
          type:'js',
        },
        {
          title: '[JS]클로져(closure)와 클로져의 사용 예제',
          url: 'https://velog.io/@proshy/JS%ED%81%B4%EB%A1%9C%EC%A0%B8closure%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%B8%EC%9D%98-%EC%82%AC%EC%9A%A9-%EC%98%88%EC%A0%9C',
          series: '',
          type:'js',
        },
        {
          title: '[Javascript] 비밀번호 정규식 - 8자 이상의 문자열, 하나 이상 숫자, 문자, 특수문자 포함하기',
          url: 'https://www.wrapuppro.com/programing/view/MIw5kPB3ao2YJVx',
          series: '',
          type:'js',
        },
        {
          title: '정규표현식(Regular Expression)',
          url: 'https://poiemaweb.com/js-regexp',
          series: '',
          type:'js',
        },
        {
          title: 'TypeScript 가이드북',
          url: 'https://yamoo9.gitbook.io/typescript/',
          series: '',
          type:'ts',
        },
        {
          title: '[인증] 세션/쿠키 방식, JWT 방식',
          url: 'https://steadily-worked.tistory.com/468',
          series: '',
          type:'js',
        },
        {
          title: '[인증] OAuth 2.0을 활용한 SNS 로그인',
          url: 'https://steadily-worked.tistory.com/470',
          series: '',
          type:'js',
        },
        {
          title: '[인증] Access Token, Refresh Token',
          url: 'https://steadily-worked.tistory.com/469',
          series: '',
          type:'js',
        },
        {
          title: '자바스크립트 코딩 테스트에서 가장 많이하는 실수들',
          url: 'https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%94%A9-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%97%90%EC%84%9C-%EA%B0%80%EC%9E%A5-%EB%A7%8E%EC%9D%B4%ED%95%98%EB%8A%94-%EC%8B%A4%EC%88%98%EB%93%A4-a10df2c884c',
          series: '',
          type:'js',
        },
        {
          title: 'test',
          url: 'test',
          series: '',
          type:'',
        },
        {
          title: 'test',
          url: 'test',
          series: '',
          type:'',
        },
        {
          title: 'test',
          url: 'test',
          series: '',
          type:'',
        },
        {
          title: 'test',
          url: 'test',
          series: '',
          type:'',
        },
        {
          title: 'test',
          url: 'test',
          series: '',
          type:'',
        },
      ],
    };
  },
};
</script>

<style scoped>
.lisTable:nth-child(1) {
  margin-right: 15px;
}
.lisTable {
  /* width: 50%;
  left: 50%;
  transform: translateX(50%); */
  margin-bottom: 15%;
}
.lisTable thead tr th {
  font-weight: 500;
  font-size: 12px;
  font-weight: bold;
}
.lisTable tbody tr td:nth-of-type(1) {
  font-weight: 300;
}
.lisTable tbody tr td {
  font-weight: 500;
  font-size: 12px;
}
.lisTable tr:hover {
  background: #eee;
}
a {
  color: rgb(71, 71, 131) !important;
}
</style>
