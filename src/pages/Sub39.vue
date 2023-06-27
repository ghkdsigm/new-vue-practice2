<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div
      class="list"
      @scroll="handleNotificationListScroll"
    >
      <!-- 반복할 리스트 컴포넌트 -->
      <NoticeListForm
        v-for="(list, index) in pushList"
        :key="index"
        img-src="https://cdn.vuetifyjs.com/images/john.jpg"
        notice-name="네임"
        :components-num="index"
        date="날짜"
        content="컨텐츠"
        :read="false"
      />
    </div>
  </div>
</template>

<script>
import NoticeListForm from '@/components/noticelistform/NoticeListForm'
import game01 from '@/api/game01.json'


export default {
  components:{
    NoticeListForm
  },
  data: () => ({
    // 10개의 리스트를 보여주기 위한 더미 데이터
    pushList: [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
  }),
  methods: {
    handleNotificationListScroll(e) {
      console.log(e.target.scrollTop)
      const { scrollHeight, scrollTop, clientHeight } = e.target;
      const isAtTheBottom = scrollHeight === scrollTop + clientHeight;
      // 일정 이상 밑으로 내려오면 함수 실행 / 반복된 호출을 막기위해 1초마다 스크롤 감지 후 실행
      if(isAtTheBottom) {
        setTimeout(() => this.handleLoadMore(), 500)
      }
    },

    // 내려오면 api를 호출하여 아래에 더 추가,
    handleLoadMore() {
      console.log("리스트 추가")
      // api를 호출하여 리스트 추가하면 됨, 현재는 pushList에 1개의 index 추가
      game01.forEach(v=>{
        this.pushList.push(v.serverName)
      })
    },
  }
}
</script>

<style scoped>
.list{
  height: calc(50vh - 70px);
  overflow: auto;
}
</style>