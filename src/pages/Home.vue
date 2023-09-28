<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div style="display: flex; width: 80%; margin: 0 auto" class="searchwrap">
      <div></div>
      <div>
        <input
          class="search-input"
          type="text"
          placeholder="검색할 내용을 입력하세요"
          @input="searchGroup($event)"
        />
      </div>
    </div>
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
      <table class="lisTable group-list">
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
        <tbody v-if="!this.listempty">
          <tr
            v-for="(item, index) in vueUrl"
            :key="index"
            class="group-item"
            ref="listlengt"
          >
            <td>{{ index + 1 }}</td>
            <td style="font-size: 12px">{{ item.type }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.series !== '' ? 'Y' : 'N' }}</td>
            <td>
              <a :href="item.url" target="_blank">바로가기</a>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td>검색결과가 존재하지않습니다.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchres: '',
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
          content: 'VUE LIST CRUD, Pagination, Search',
          link: 'sub41',
        },
        {
          content: '페이징2',
          link: 'sub42',
        },
        {
          content: 'vue-meta',
          link: 'sub43',
        },
        {
          content: '10만건 데이터 그리드 활용',
          link: 'sub44',
        },
        {
          content: 'ag-grid',
          link: 'sub45',
        },
      ],
      vueUrl: [
        {
          title: 'moment.js 사용 방법',
          url: 'https://jsikim1.tistory.com/195',
          series: '',
          type: 'js',
        },
        {
          title: 'vue2 typescript',
          url: 'https://blog.naver.com/iamswain25/222490932175',
          series: '',
          type: 'ts',
        },
        {
          title: 'v-for 이용하여 radio 설정 및 v-model 데이터 관리',
          url: 'https://hjh0827.tistory.com/70',
          series: '',
          type: 'vue2',
        },
        {
          title: 'vuetify example',
          url: 'https://codepen.io/pen?editors=1010',
          series: '',
          type: 'vue2',
        },
        {
          title: 'vue(5) 이미지 업로드 (formData에 담아 axios로 보내기)',
          url: 'https://devbirdfeet.tistory.com/87',
          series: 'yes',
          type: 'vue2',
        },
        {
          title: '[VueJS] 엑셀 다운로드(Excel download)',
          url: 'https://baebb.tistory.com/13',
          series: '',
          type: 'vue2',
        },
        {
          title:
            '활용도가 높아지는 웹 프론트엔드 언어, 타입스크립트(TypeScript)',
          url: 'https://www.samsungsds.com/kr/insights/typescript.html',
          series: '',
          type: 'ts',
        },
        {
          title: '빠르게 마스터하는 타입스크립트',
          url: 'https://codingapple.com/course/typescript-crash-course/',
          series: '',
          type: 'ts',
        },
        {
          title: 'Vue.js $watch 오브젝트 변경 모니터링(감시) 사용법',
          url: 'https://codingcoding.tistory.com/337',
          series: '',
          type: 'vue',
        },
        {
          title: 'Vue2 + TypeScript 시작하기',
          url: 'https://velog.io/@integer/Vue2-TypeScript-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0',
          series: '',
          type: 'vue2+ts',
        },
        {
          title: '[Vue.js] Vue.js 2.x 버전 Typescript 적용하기',
          url: 'https://hi-today-yun12.tistory.com/32',
          series: '',
          type: 'vue2+ts',
        },
        {
          title: 'ToDoList-vue-ts(vue2+ts/vue3+ts) github 사이트',
          url: 'https://github.com/jongik96/ToDoList-vue-ts/tree/master',
          series: '',
          type: 'vue+ts',
        },
        {
          title: 'TypeScript Handbook 정리2 - Everyday Types',
          url: 'https://msyu1207.tistory.com/entry/TypeScript-Handbook-%EC%A0%95%EB%A6%AC2-Everyday-Types#toc-%F0%9F%9F%A2%20The%20primitives%20(%EC%9B%90%EC%8B%9C%20%ED%83%80%EC%9E%85):%20string,%20number,%20boolean',
          series: '',
          type: 'ts',
        },
        {
          title: '[Vue.js] Vue.js 실무 프로젝트에 적용하면 좋은 내용 정리',
          url: 'https://jess2.xyz/vue/vue-tip/',
          series: '',
          type: 'vue',
        },
        {
          title: 'vue 기본문법 총정리',
          url: 'https://cjw-awdsd.tistory.com/33',
          series: '',
          type: 'vue',
        },
        {
          title: 'vue + ts 총정리 블로그(클래스형태)',
          url: 'https://kyounghwan01.github.io/blog/TS/Vue/grammer/#data',
          series: 'yes',
          type: 'vue+ts',
        },
        {
          title: 'Typescript는 어떻게 공부해야 하나요?',
          url: 'https://velog.io/@teo/typescript',
          series: '',
          type: 'ts',
        },
        {
          title: '[TS] TS의 기초',
          url: 'https://burning-camp.tistory.com/81',
          series: '',
          type: 'ts',
        },
        {
          title: '[TypeScript] 타입스크립트란? 기본 공부하기',
          url: 'https://rrecoder.tistory.com/142',
          series: '',
          type: 'ts',
        },
        {
          title: 'vue board 만들기 + 댓글 등등',
          url: 'https://velog.io/@hi_young?tag=vue',
          series: 'yes',
          type: 'vue',
        },
        {
          title: '[Vue.js] 실시간 검색 구현하기 (버튼, 엔터 필요없다)',
          url: 'https://velog.io/@yeonsubaek/Vue.js-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EA%B2%80%EC%83%89-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-%EB%B2%84%ED%8A%BC-%EC%97%94%ED%84%B0-%ED%95%84%EC%9A%94%EC%97%86%EB%8B%A4',
          series: '',
          type: 'etc',
        },
        {
          title: 'JavaScript - 배열을 객체로 변환, 4가지 방법',
          url: 'https://codechacha.com/ko/javascript-convert-array-to-object/',
          series: '',
          type: 'js',
        },
        {
          title: '객체를 배열로, 배열을 객체로',
          url: 'https://goddino.tistory.com/198',
          series: '',
          type: 'js',
        },
        {
          title: '[ ESlint & Prettier ] 문법오류, 코드정리 도와주는 도구들',
          url: 'https://im-designloper.tistory.com/25',
          series: '',
          type: 'eslint',
        },
        {
          title: '[Vue.js] ❗️TypeError: Cannot read property of undefined',
          url: 'https://jess2.xyz/vue/data-undefined-error/',
          series: '',
          type: 'vue',
        },
        {
          title: 'vue chartjs vue2 / vue3 예시',
          url: 'https://vue-chartjs.org/examples/#vue-3-charts',
          series: '',
          type: 'vue',
        },
        {
          title: '로그인 시 user 정보 쿠키에 담기',
          url: 'https://velog.io/@sdsdsrd/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%8B%9C-user-%EC%A0%95%EB%B3%B4-%EC%BF%A0%ED%82%A4%EC%97%90-%EB%8B%B4%EA%B8%B0',
          series: '',
          type: 'vue',
        },
        {
          title: '[VueJS] vue-cli + vuex + jwt 로그인 기능 구현하기',
          url: 'https://minu0807.tistory.com/64',
          series: '',
          type: 'vue',
        },
        {
          title: '[Vue.js] 로그인 Token 기반 인증 + js-cookie',
          url: 'https://velog.io/@unknown89/Vue.js-%EB%A1%9C%EA%B7%B8%EC%9D%B8-Token-%EA%B8%B0%EB%B0%98-%EC%9D%B8%EC%A6%9D',
          series: '',
          type: 'vue',
        },
        {
          title: 'JWT 토큰을 통한 로그인 구현하기',
          url: 'https://velog.io/@krungy/JWT-%ED%86%A0%ED%81%B0%EC%9D%84-%ED%86%B5%ED%95%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0',
          series: '',
          type: 'vue',
        },
        {
          title: 'Vue - Login 세션 유지하기',
          url: 'https://kdinner.tistory.com/60',
          series: '',
          type: 'vue',
        },
        {
          title: 'JavaScript 기술을 향상시키는 12 가지 개념',
          url: 'https://frontdev.tistory.com/entry/JavaScript-%EA%B8%B0%EC%88%A0%EC%9D%84-%ED%96%A5%EC%83%81%EC%8B%9C%ED%82%A4%EB%8A%94-12-%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90',
          series: '',
          type: 'js',
        },
        {
          title: '[javscript] 12가지 Array 팁',
          url: 'https://frontdev.tistory.com/entry/javscript-12%EA%B0%80%EC%A7%80-Array-%ED%8C%81',
          series: '',
          type: 'js',
        },
        {
          title: '[JS] Javascript 스트링 메서드',
          url: 'https://frontdev.tistory.com/entry/JS-Javascript-%EC%8A%A4%ED%8A%B8%EB%A7%81-%EB%A9%94%EC%84%9C%EB%93%9C?category=761561',
          series: '',
          type: 'js',
        },
        {
          title: '[JS] 📚 자바스크립트 클래스 문법 - 완벽 가이드',
          url: 'https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-ES6-Class-%EB%AC%B8%EB%B2%95-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%A6%AC',
          series: '',
          type: 'js',
        },
        {
          title: '자바스크립트 클래스와 객체 총정리',
          url: 'https://velog.io/@younoah/JS-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%81%B4%EB%9E%98%EC%8A%A4%EC%99%80-%EA%B0%9D%EC%B2%B4-%EC%B4%9D%EC%A0%95%EB%A6%AC',
          series: '',
          type: 'js',
        },
        {
          title: 'HTTP 구조 헤더(Header)와 본문(Body)',
          url: 'https://blueyikim.tistory.com/1999',
          series: '',
          type: 'cs',
        },
        {
          title: 'HTTP의 구조에 대해 이해하기(특히 Header 구조 파악하기)',
          url: 'https://hazel-developer.tistory.com/145',
          series: '',
          type: 'cs',
        },
        {
          title: '자료 구조(Data Structure)',
          url: 'https://velog.io/@neity16/%EC%9E%90%EB%A3%8C-%EA%B5%AC%EC%A1%B0Data-Structure',
          series: '',
          type: 'cs',
        },
        {
          title: '알고리즘을 풀며 만난 자바스크립트 문법을 정리합니다',
          url: 'https://velog.io/@dev_cecy/series/Javascript',
          series: 'y',
          type: 'algorithm',
        },
        {
          title: '자바스크립트 필수 문법 정리',
          url: 'https://velog.io/@junu_ddi/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%95%84%EC%88%98-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC',
          series: '',
          type: 'js',
        },
        {
          title: 'JS 알고리즘 총정리',
          url: 'https://velog.io/@nahyunbak/JS-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Math-%EA%B0%9D%EC%B2%B4',
          series: '',
          type: 'algorithm',
        },
        {
          title: 'JavaScript 알고리즘 문제 풀이 시 자주 사용되는 테크닉',
          url: 'https://takeu.tistory.com/31',
          series: '',
          type: 'algorithm',
        },
        {
          title: '[JavaScript] 페이지 처리, 페이징 처리, 페이지네이션',
          url: 'https://mchch.tistory.com/140',
          series: '',
          type: 'js',
        },
        {
          title: 'Javascript Paging 구현하기(페이지구현)',
          url: 'https://bourbonkk.tistory.com/70',
          series: '',
          type: 'js',
        },
        {
          title: '화면 깜빡임 없이 javascript(Ajax)로 페이징 처리하기',
          url: 'https://pparkseona.tistory.com/entry/%ED%99%94%EB%A9%B4-%EA%B9%9C%EB%B9%A1%EC%9E%84-%EC%97%86%EC%9D%B4-javascriptAjax%EB%A1%9C-%ED%8E%98%EC%9D%B4%EC%A7%95-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0',
          series: '',
          type: 'js',
        },
        {
          title: '[JS]클로져(closure)와 클로져의 사용 예제',
          url: 'https://velog.io/@proshy/JS%ED%81%B4%EB%A1%9C%EC%A0%B8closure%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%B8%EC%9D%98-%EC%82%AC%EC%9A%A9-%EC%98%88%EC%A0%9C',
          series: '',
          type: 'js',
        },
        {
          title:
            '[Javascript] 비밀번호 정규식 - 8자 이상의 문자열, 하나 이상 숫자, 문자, 특수문자 포함하기',
          url: 'https://www.wrapuppro.com/programing/view/MIw5kPB3ao2YJVx',
          series: '',
          type: 'js',
        },
        {
          title: '정규표현식(Regular Expression)',
          url: 'https://poiemaweb.com/js-regexp',
          series: '',
          type: 'js',
        },
        {
          title: 'TypeScript 가이드북',
          url: 'https://yamoo9.gitbook.io/typescript/',
          series: '',
          type: 'ts',
        },
        {
          title: '[인증] 세션/쿠키 방식, JWT 방식',
          url: 'https://steadily-worked.tistory.com/468',
          series: '',
          type: 'js',
        },
        {
          title: '[인증] OAuth 2.0을 활용한 SNS 로그인',
          url: 'https://steadily-worked.tistory.com/470',
          series: '',
          type: 'js',
        },
        {
          title: '[인증] Access Token, Refresh Token',
          url: 'https://steadily-worked.tistory.com/469',
          series: '',
          type: 'js',
        },
        {
          title: '자바스크립트 코딩 테스트에서 가장 많이하는 실수들',
          url: 'https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%94%A9-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%97%90%EC%84%9C-%EA%B0%80%EC%9E%A5-%EB%A7%8E%EC%9D%B4%ED%95%98%EB%8A%94-%EC%8B%A4%EC%88%98%EB%93%A4-a10df2c884c',
          series: '',
          type: 'js',
        },
        {
          title: 'fontawesome vue 설치',
          url: 'https://fontawesome.com/docs/web/use-with/vue/',
          series: '',
          type: 'fontawesome',
        },
        {
          title: '자바스크립트 코딩테스트 주요 문법',
          url: 'https://totw2018.tistory.com/14',
          series: '',
          type: 'js',
        },
        {
          title: 'JavaScript 기술을 향상시키는 12 가지 개념',
          url: 'https://frontdev.tistory.com/entry/JavaScript-%EA%B8%B0%EC%88%A0%EC%9D%84-%ED%96%A5%EC%83%81%EC%8B%9C%ED%82%A4%EB%8A%94-12-%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90',
          series: '',
          type: 'js',
        },
        {
          title: '[javscript] 12가지 Array 팁',
          url: 'https://frontdev.tistory.com/entry/javscript-12%EA%B0%80%EC%A7%80-Array-%ED%8C%81?category=761561',
          series: '',
          type: 'js',
        },
        {
          title: 'Constructor vs Literal',
          url: 'https://frontdev.tistory.com/entry/Constructor-vs-Literal',
          series: '',
          type: 'js',
        },
        {
          title: '[Typescript] 기본 필수 문법',
          url: 'https://growing-jiwoo.tistory.com/51?category=591913',
          series: '',
          type: 'ts',
        },
        {
          title:
            'Vue CLI 레스트 API 인증 토큰 재발급 (액시오스 인터셉터) - Vue CLI REST API Authentication, Axios Interceptor Request',
          url: 'https://carrotweb.tistory.com/m/135',
          series: '',
          type: 'vue',
        },
        {
          title: '[Vue.js] Vue.js 실무 프로젝트에 적용하면 좋은 내용 정리',
          url: 'https://jess2.xyz/vue/vue-tip/',
          series: '',
          type: 'vue',
        },
        {
          title: 'vue 대댓글 구현하기',
          url: 'https://memi.dev/board/lecture/1602676082563',
          series: '',
          type: 'vue',
        },
        {
          title: 'Vue.js로 댓글창 만들기',
          url: 'https://velog.io/@marryjane7474/Vue.js%EB%A1%9C-%EB%8C%93%EA%B8%80%EC%B0%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0',
          series: '',
          type: 'vue',
        },
        {
          title: 'Vue.js 실무',
          url: 'https://velog.io/@corner3499/series/Vue.js-%EC%8B%A4%EB%AC%B4',
          series: '',
          type: 'vue',
        },
        {
          title: 'JavaScript - 필수 개념 정리 ( 제로초 )',
          url: 'https://hyg4196.tistory.com/113',
          series: '',
          type: 'js',
        },
        {
          title: '[Javascript] 2차원 배열 만들기',
          url: 'https://velog.io/@favorcho/Javascript-2%EC%B0%A8%EC%9B%90-%EB%B0%B0%EC%97%B4-%EB%A7%8C%EB%93%A4%EA%B8%B0',
          series: '',
          type: 'js',
        },
        {
          title: '개발자들의 의사소통을 위한 언어, UML 알아보기',
          url: 'https://yozm.wishket.com/magazine/detail/629/',
          series: '',
          type: 'uml',
        },
        {
          title: '배열 js splice mdn',
          url: 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
          series: '',
          type: 'js',
        },
        {
          title:
            '[jQuery] jQuery를 사용해 쿠키관리하기 (읽기, 생성, 삭제, 생명주기)',
          url: 'https://dullyshin.github.io/2019/09/10/WEB-CookiesMakeDel/',
          series: '',
          type: 'jquery',
        },
        {
          title: 'jQuery-$.cookie 플러그인 사용법 (쿠키 활용편)',
          url: 'https://lab.naminsik.com/1864',
          series: '',
          type: 'jquery',
        },
        {
          title:
            '[Vue.js] Vue3+Typescript #1 - Vue, TypeScript 사용하는 이유(Why Vue & TypeScript)',
          url: 'https://hasudoki.tistory.com/entry/Vuejs-Vue3Typescript-1-Vue-TypeScript-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0Why-Vue-TypeScript',
          series: 'y',
          type: 'vue3 + ts',
        },
        {
          title: '[Vue3/Typescript] 할일 목록을 만들면서 Vue3 배워보자 - 01',
          url: 'https://okayoon.tistory.com/entry/Vue3Typescript%ED%95%A0%EC%9D%BC%EB%AA%A9%EB%A1%9D%EC%9D%84%EB%A7%8C%EB%93%A4%EB%A9%B4%EC%84%9CVue3%EB%B0%B0%EC%9B%8C%EB%B3%B4%EC%9E%90-01',
          series: 'y',
          type: 'vue3 + ts',
        },
        {
          title: '프론트엔드 성장블로그 (유익한 정보가 많음)',
          url: 'https://okayoon.tistory.com/',
          series: 'y',
          type: 'blog 참고용',
        },
        {
          title: '[JavaScript] class란 무엇인가?',
          url: 'https://velog.io/@jinyoung985/Javascript-class%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80',
          series: '',
          type: 'js',
        },
        {
          title: 'JavaScript 질문 프론트엔드 면접 질문 - JS 질문',
          url: 'https://www.frontendinterviewhandbook.com/kr/javascript-questions',
          series: '',
          type: 'js',
        },
        {
          title: '리액트의 Hooks 완벽 정복하기',
          url: 'https://velog.io/@velopert/react-hooks',
          series: '',
          type: 'react',
        },
        {
          title: '정렬 알고리즘(Sorting Algorithm) 정복하기 - with JS',
          url: 'https://east-star.tistory.com/10',
          series: '',
          type: 'algorithm',
        },
        {
          title: 'JavaScript 알고리즘 및 자료 구조',
          url: 'https://github.com/trekhleb/javascript-algorithms/blob/master/README.ko-KR.md',
          series: '',
          type: 'algorithm',
        },
        {
          title: 'JS 자료구조 & 알고리즘',
          url: 'https://eunbae11.tistory.com/category/cs%EC%A7%80%EC%8B%9D/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0',
          series: '',
          type: 'algorithm',
        },
        {
          title: '[JavaScript] Class(클래스), private(접근제어)',
          url: 'https://cruella-de-vil.tistory.com/58',
          series: '',
          type: 'js',
        },
        {
          title: 'Express.js(node.js) MySQL 연동 및 CRUD 작업',
          url: 'https://codingcoding.tistory.com/449',
          series: '',
          type: 'node',
        },
        {
          title: '[NodeJS] NodeJs + Express.js + MySQL CRUD 연동',
          url: 'https://acstory.tistory.com/383',
          series: '',
          type: 'node',
        },
        {
          title: 'node.js로 CRUD api만들기 (express)',
          url: 'https://sleepybird.tistory.com/142',
          series: 'y',
          type: 'node',
        },
        {
          title:
            '2. Node.js와 Express 라이브러리 설치하기.(아주 기초부터 자세히 알려줌!!)',
          url: 'https://yayayahaha.tistory.com/12',
          series: 'y',
          type: 'node',
        },
        {
          title: '현직 개발자가 정리해주는 프론트엔드 신입 기술 문제 은행 20선',
          url: 'https://zero-base.co.kr/event/media_insight_contents_FE_frontend_tech_Interview',
          series: '',
          type: '면접',
        },
        {
          title: 'NGINX에 대한 정리',
          url: 'https://developer88.tistory.com/299',
          series: '',
          type: 'nginX',
        },
        {
          title: '5년차 프론트엔드 개발자 후기',
          url: 'https://velog.io/@bluestragglr/%EC%96%B4%EC%A9%8C%EB%8B%A4-5%EB%85%84%EC%B0%A8-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90-%EC%9D%B4%EC%A7%81-%ED%9B%84%EA%B8%B0',
          series: '',
          type: '이직후기',
        },
        {
          title: '프론트엔드 개발자로서 알아야 하는 HTTP (1)',
          url: 'https://velog.io/@simoniful/%ED%94%84%EB%9F%B0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B4%80%EB%A0%A8-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%98%EB%8A%94-HTTP-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C-1',
          series: '',
          type: 'cs',
        },
        {
          title: '브라우저 동작 순서',
          url: 'https://velog.io/@yjyoo/%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%8F%99%EC%9E%91-%EC%88%9C%EC%84%9C',
          series: '',
          type: 'cs',
        },
        {
          title: '브라우저 렌더링 과정(원리)',
          url: 'https://oliviakim.tistory.com/80',
          series: '',
          type: 'cs',
        },
        {
          title: '네트워크 HTTP, HTTPS, SSL HandShake',
          url: 'https://dkrnfls.tistory.com/361',
          series: '',
          type: 'cs',
        },
        {
          title: 'PS를 하며 느끼는 DFS와 BFS 선택의 기준',
          url: 'https://foameraserblue.tistory.com/188',
          series: '',
          type: 'algorithm',
        },
        {
          title: '쿠키 vs 세션 vs 웹 스토리지(로컬 스토리지, 세션 스토리지)',
          url: 'https://doqtqu.tistory.com/306',
          series: '',
          type: 'cs',
        },
        {
          title: '[Web] 쿠키, 세션, 웹 스토리지의 차이점과 사용처',
          url: 'https://hoo-dev.tistory.com/entry/Web-%EC%BF%A0%ED%82%A4-%EC%84%B8%EC%85%98-%EC%9B%B9-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EA%B3%BC-%EC%82%AC%EC%9A%A9%EC%B2%98',
          series: '',
          type: 'cs',
        },
        {
          title: '쿠키🍪와 세션/캐시 + 웹 스토리지',
          url: 'https://duckgugong.tistory.com/285',
          series: '',
          type: 'cs',
        },
        {
          title:
            '프론트앤드 웹 성능 최적화 가이드 - 성능 지표, 데이터 로드 최적화',
          url: 'https://www.stevy.dev/frontend-web-performance-guide-1/',
          series: '',
          type: 'cs',
        },
        {
          title: '웹 개발자가 생각해야하는 웹 성능 최적화',
          url: 'https://ssdragon.tistory.com/131',
          series: '',
          type: 'cs',
        },
        {
          title: '[최적화] 웹 성능 최적화 방법 5분 완성',
          url: 'https://velog.io/@hsecode/%EC%B5%9C%EC%A0%81%ED%99%94-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95-5%EB%B6%84-%EC%99%84%EC%84%B1',
          series: '',
          type: 'cs',
        },
        {
          title: '성능 최적화',
          url: 'https://ui.toast.com/fe-guide/ko_PERFORMANCE',
          series: '',
          type: 'cs',
        },
        {
          title: 'HTTP GET,POST방식 차이',
          url: 'https://brilliantdevelop.tistory.com/33',
          series: '',
          type: 'cs',
        },
        {
          title: 'OOP(객체 지향 프로그래밍) 이란?',
          url: 'https://backendcode.tistory.com/160',
          series: '',
          type: 'cs',
        },
        {
          title: '[Javascript] 얕은 복사, 깊은 복사',
          url: 'https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC',
          series: '',
          type: 'cs',
        },
        {
          title: '[JavaScript] 깊은 복사, 얕은 복사',
          url: 'https://bbangson.tistory.com/78',
          series: '',
          type: 'cs',
        },
        {
          title: 'SPA와 MPA 차이, 장단점 비교 (웹사이트 검색 노출 원리)',
          url: 'https://it-techtree.tistory.com/entry/Web-Advantage-And-Disadvantage-SPA-MPA',
          series: '',
          type: 'cs',
        },
        {
          title: '[ 기술 스터디 ] SSR과 CSR의 차이',
          url: 'https://velog.io/@vagabondms/%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%84%B0%EB%94%94-SSR%EA%B3%BC-CSR%EC%9D%98-%EC%B0%A8%EC%9D%B4',
          series: '',
          type: 'cs',
        },
        {
          title: 'HTTP 프로토콜이란?',
          url: 'https://ckdals82.tistory.com/60',
          series: '',
          type: 'cs',
        },
        {
          title: '프록시(Proxy)서버와 사용목적',
          url: 'https://dany-it.tistory.com/107',
          series: '',
          type: 'cs',
        },
        {
          title: '[JS] event.preventDefault() 간단 설명 😊/ preventDefault란?',
          url: 'https://programming119.tistory.com/100',
          series: '',
          type: 'cs',
        },
        {
          title: 'JWT - Json Web Token',
          url: 'https://www.daleseo.com/jwt/',
          series: '',
          type: 'cs',
        },
        {
          title: '쉽게 알아보는 서버 인증 1편(세션/쿠키 , JWT)',
          url: 'https://tansfil.tistory.com/58',
          series: 'y',
          type: 'cs',
        },
        {
          title: '쉽게 알아보는 서버 인증 2편(Access Token + Refresh Token)',
          url: 'https://tansfil.tistory.com/59?category=475681',
          series: 'y',
          type: 'cs',
        },
        {
          title: '쉽게 알아보는 서버 인증 3편(SNS 로그인, OAuth 2.0)',
          url: 'https://tansfil.tistory.com/60',
          series: 'y',
          type: 'cs',
        },
        {
          title: '지금까지 받았던 프론트엔드 질문들',
          url: 'https://velog.io/@arthur/%EC%A7%80%EA%B8%88%EA%B9%8C%EC%A7%80-%EB%B0%9B%EC%95%98%EB%8D%98-%EC%8B%A0%EC%9E%85-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8%EB%93%A4',
          series: '',
          type: 'cs',
        },
        {
          title: '프론트엔드 질문 정리 사이트',
          url: 'https://frontend-interview-question.vercel.app/',
          series: '',
          type: 'cs',
        },
        {
          title: 'SPA의 SEO, 어떻게 해야할까?',
          url: 'https://www.ascentkorea.com/seo-for-spa/',
          series: '',
          type: 'cs',
        },
        {
          title: 'TIL/vue/[Vue] vue-cookie, 쿠키 : 세션.md at master',
          url: 'https://github.com/sooojungee/TIL/blob/master/vue/%5BVue%5D%20vue-cookie%2C%20%EC%BF%A0%ED%82%A4%20:%20%EC%84%B8%EC%85%98.md',
          series: '',
          type: 'cs',
        },
        {
          title:
            '[Vue.js / spring boot] http header에 저장된 cookie 서버로 가져와보기',
          url: 'https://blerang055.tistory.com/25',
          series: '',
          type: 'cs',
        },
        {
          title: '쿠키,세션 어떤 것이 로그인에 적합할까?',
          url: 'https://cs-vegemeal.tistory.com/77',
          series: '',
          type: 'cs',
        },
        {
          title: '프론트에서 안전하게 로그인 처리하기 (ft. React)',
          url: 'https://velog.io/@yaytomato/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%90%EC%84%9C-%EC%95%88%EC%A0%84%ED%95%98%EA%B2%8C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0',
          series: '',
          type: 'cs',
        },
        {
          title: 'VueJS vue-cli + vuex + jwt 로그인 기능 구현하기',
          url: 'https://minu0807.tistory.com/64',
          series: '',
          type: 'cs',
        },
        {
          title: '클로저, 그리고 캡슐화와 은닉화',
          url: 'https://meetup.nhncloud.com/posts/90',
          series: '',
          type: 'cs',
        },
        {
          title: '인증 4가지 방법',
          url: 'https://velog.io/@gusdnr814/%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9D%B8%EC%A6%9D-4%EA%B0%80%EC%A7%80-%EB%B0%A9%EB%B2%95',
          series: '',
          type: 'cs',
        },
        {
          title: '프론트엔드 중요도별 정리',
          url: 'https://github.com/Esoolgnah/Frontend-Interview-Questions',
          series: '',
          type: 'cs',
        },
        {
          title: 'Reflow와 Repaint가 실행되는 시점',
          url: 'https://github.com/Esoolgnah/Frontend-Interview-Questions/blob/main/Notes/important-5/reflow-repaint.md',
          series: '',
          type: 'cs',
        },
        {
          title: 'Closure',
          url: 'https://poiemaweb.com/js-closure',
          series: 'y',
          type: 'cs',
        },
        {
          title: 'JavaScript 정규 표현식 문법 총정리 + 응용 예제',
          url: 'https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC',
          series: 'y',
          type: 'cs',
        },
        {
          title: 'TSTORY 프론트개발자 추천 블로그',
          url: 'https://inpa.tistory.com/category',
          series: '',
          type: '블로그',
        },
        {
          title: 'Javascript 자료구조 시리즈(2) Stack 스택',
          url: 'https://intelloper.tistory.com/35',
          series: 'y',
          type: 'js',
        },
        {
          title:
            '[Javascript] 스택과 큐 직접 구현하기 (feat. 자료구조, ES6 Class, Node.js)',
          url: 'https://aiday.tistory.com/125',
          series: '',
          type: 'js',
        },
        {
          title:
            '[Javascript] 자바스크립트에서 Class 사용하기-constructor, extends,...',
          url: 'https://ordinary-code.tistory.com/22',
          series: '',
          type: 'js',
        },
        {
          title:
            'FrontEnd/Javascript [JavaScript] 배열 메소드 map, filter 개념 및 예시 (배열 내 특정',
          url: 'https://ordinary-code.tistory.com/8',
          series: '',
          type: 'js',
        },
        {
          title: '[Javascript] 배열 중복 값 개수 구하기',
          url: 'https://hianna.tistory.com/459',
          series: '',
          type: 'js',
        },
        {
          title: '[Javascript] 타입체크 및 빈 배열 체크하기',
          url: 'https://hianna.tistory.com/461',
          series: '',
          type: 'js',
        },
        {
          title: '[Javascript] 타입체크 및 빈 객체 체크하는 3가지 방법',
          url: 'https://hianna.tistory.com/462',
          series: '',
          type: 'js',
        },
        {
          title: 'Vue (Single Page App)의 검색엔진 노출 방법- Prerendering',
          url: 'https://dong-queue.tistory.com/14',
          series: '',
          type: 'vue',
        },
        {
          title: 'vue 속도 개선 (1) - lazy loading',
          url: 'https://dong-queue.tistory.com/22',
          series: '',
          type: 'vue',
        },
        {
          title: 'vue로 개발한 페이지 검색엔진에 노출시키는 법',
          url: 'https://dong-queue.tistory.com/3',
          series: '',
          type: 'vue',
        },
        {
          title: 'Vue.js SEO를 위한 pre-rendering (pre-render-spa-plugins)',
          url: 'https://blog.naver.com/PostView.naver?blogId=hsoojy_&logNo=222413891676&categoryNo=0&parentCategoryNo=0',
          series: '',
          type: 'vue',
        },
        {
          title: '당신이 모르는 자바스크립트의 메모리 누수의 비밀',
          url: 'https://ui.toast.com/posts/ko_20210611',
          series: '',
          type: 'js',
        },
        {
          title: '[Vue3] vue-meta 패키지 적용하기',
          url: 'https://yemsu.github.io/vue-meta-with-vue3/',
          series: '',
          type: 'vue',
        },
        {
          title: '[ Vue ] 페이지별 메타태그 | vue-meta 사용법',
          url: 'https://im-designloper.tistory.com/65',
          series: '',
          type: 'vue',
        },
        {
          title: 'vue-meta와 Meta tag',
          url: 'https://pozafly.github.io/html/meta-tag-and-vue-meta/',
          series: '',
          type: 'vue',
        },
        {
          title: '웹사이트 최적화 방법',
          url: 'https://bearjin90.tistory.com/21',
          series: '',
          type: 'cs',
        },
        {
          title: 'Vue 컴포넌트 - 메모리 누수 분석하기',
          url: 'https://engineering.linecorp.com/ko/blog/vue-memory-leak-analysis',
          series: '',
          type: 'vue',
        },
        {
          title: '[Vue.JS] 대용량 데이터의 처리 방법과 성능 최적화 방법 (Vue.js Performance)',
          url: 'https://kdydesign.github.io/2019/04/10/vuejs-performance/',
          series: 'y',
          type: 'vue',
        },
        {
          title: 'Vue.js - 10만건 이상 처리 가능한 grid 만들기(초안)',
          url: 'https://blog.naver.com/PostView.nhn?blogId=spdlqjdudghl&logNo=221309051365',
          series: '',
          type: 'vue',
        },
        {
          title: 'Vue Lazy Loading',
          url: 'https://song8420.tistory.com/380',
          series: '',
          type: 'vue',
        },
        {
          title: 'Vue.js Lazy Load(비동기 컴포넌트)',
          url: 'https://happy-jjang-a.tistory.com/126',
          series: '',
          type: 'vue',
        },
        {
          title: '시니어 개발자가 말하는, 프론트엔드 업무와 잘하는 프론트엔드 개발자란',
          url: 'https://yozm.wishket.com/magazine/detail/1294/',
          series: '',
          type: 'frontend',
        },
        {
          title: '웹페이지 렌더링을 7배 빠르게 하는 방법: content-visibility',
          url: 'https://namunamu1105.medium.com/%EC%9B%B9%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A0%8C%EB%8D%94%EB%A7%81%EC%9D%84-7%EB%B0%B0-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-content-visibility-1a23d3f7ed9',
          series: '',
          type: 'frontend',
        },
        {
          title: '[NuxtJS] asyncData와 fetch 비교 및 사용법',
          url: 'https://mine-it-record.tistory.com/681',
          series: 'y',
          type: 'nuxt',
        },
        {
          title: 'Nuxt-asyncData와-fetch의-차이',
          url: 'https://velog.io/@chaerin00/Nuxt-asyncData%EC%99%80-fetch%EC%9D%98-%EC%B0%A8%EC%9D%B4',
          series: '',
          type: 'nuxt',
        },
        {
          title: 'Nuxt.js asyncData vs Fetch',
          url: 'https://day0404.tistory.com/18',
          series: '',
          type: 'nuxt',
        },
        {
          title: 'Nuxt 공부 - asyncData, fetch',
          url: 'https://velog.io/@leeyw2709/Nuxt-%EA%B3%B5%EB%B6%80-asyncData-fetch',
          series: '',
          type: 'nuxt',
        },
        {
          title: '[Nuxt.js] Nuxt 학습기 - (1) 개념 및 설치',
          url: 'https://abangpa1ace.tistory.com/entry/Nuxtjs-Nuxt-%ED%95%99%EC%8A%B5%EA%B8%B0-1-%EA%B0%9C%EB%85%90-%EB%B0%8F-%EC%84%A4%EC%B9%98-%EC%9E%91%EC%84%B1%EC%A4%91',
          series: 'y',
          type: 'nuxt',
        },
        {
          title: '[Nuxt.js] Nuxt 학습기 - (4) Store, asyncData & fetch',
          url: 'https://abangpa1ace.tistory.com/entry/Nuxtjs-Nuxt-%ED%95%99%EC%8A%B5%EA%B8%B0-4-Store-asyncDate-fetch',
          series: 'y',
          type: 'nuxt',
        },
        {
          title: '프론트 엔드에서 JWT: AccessToken, RefreshToken 다루기',
          url: 'https://velog.io/@badahertz52/%ED%94%84%EB%A1%A0%ED%8A%B8-%EC%97%94%EB%93%9C%EC%97%90%EC%84%9C-JWT-AccessToken-RefreshToken-%EB%8B%A4%EB%A3%A8%EA%B8%B0',
          series: '',
          type: 'jwt',
        },
        {
          title: 'JWT Authentication with Nuxt',
          url: 'https://www.factorial.io/en/blog/jwt-authentication-nuxt',
          series: '',
          type: 'jwt',
        },
        {
          title: '',
          url: '',
          series: '',
          type: '',
        },
        {
          title: '',
          url: '',
          series: '',
          type: '',
        },
      ],
      listempty: false,
    };
  },
  created() {
    this.searchres = this.vueUrl;
  },
  methods: {
    searchGroup(event) {
      const len = this.searchres.length;

      for (let i = 0; i < len; i++) {
        if (
          this.searchres[i].title.toLowerCase().includes(event.target.value) ===
            false &&
          this.searchres[i].type.toLowerCase().includes(event.target.value) ===
            false
        ) {
          let vm = document.querySelectorAll('.group-item')[i];
          vm.style.display = 'none';
        } else {
          document.querySelectorAll('.group-item')[i].style.display =
            'table-row';
          document.querySelector('.group-list').style.height = 'fit-content';
        }
      }
    },
  },
};
</script>

<style scoped>
.lisTable:nth-child(1) {
  margin-right: 15px;
  width: 45%;
}
.lisTable:nth-child(2) {
  flex: 1;
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
.search-input {
  display: block;
  padding: 4px 10px;
  margin: 0 auto;
  width: 320px;
  font-size: 13px;
  border: 1px solid #ccc;
  border-radius: 15px;
}
.searchwrap > div:nth-of-type(1) {
  width: 45%;
}
.searchwrap > div:nth-of-type(2) {
  flex: 1;
}
</style>
