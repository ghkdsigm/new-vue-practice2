<template>
  <div>
    <input v-model="title" placeholder="제목을 입력하세요/">
    <textarea v-model="content" placeholder="내용을 입력하세요"/>
    <input v-model="idx" placeholder="순서을 입력하세요"/>
    <button @click="write">등록하기</button>
  </div>
</template>
<script>
import data2 from "@/data2";
export default {
  name:"create",
  data(){
    return{
      title:"",
      content:"",
      idx:"",
      data : data2
    }
  },
  methods:{
    write(){
      this.data.push({
        title:this.title,
        content:this.content,
        idx:this.idx
      })
      this.$router.push("/");
    }
  }
}
</script>
양방향 데이터 바인딩을