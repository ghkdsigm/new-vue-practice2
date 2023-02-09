<template>
  <div>
    <table>
      <tr>
        <td>제목</td>
        <td>컨텐츠</td>
        <td>순서</td>
      </tr>
      <tr v-for="(item,index) in data" :key="index">
        <td>{{ item.title }}</td>
        <td>{{ item.content }}</td>
        <td>{{ item.idx }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import data2 from "@/api/board.js"
  //골뱅이는 무조건 src부터 시작하게 해준다.
export default {
  name:'Read',
  data(){
    return{
      data: data2,
    }
  }
}
</script>