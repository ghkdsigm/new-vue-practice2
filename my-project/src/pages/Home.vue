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
