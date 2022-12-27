<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <input v-model="question" />
    <p>{{ answer }}</p>
    <p>{{ changeAnswer }}</p>
  </div>  
</template>

<script>
  export default {
    data(){
      return {
        question: '',
        answer: 'watch에 의한 변경값',
        answer2: 'counputed에 의한 변경값'
      }
    },
    watch: {
      question: function(newQuestion){
        if(newQuestion !== '') this.getAnswer();
        else this.answer = '선 질문 후 대답'
      }
    },
    computed:{
      changeAnswer(){
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.answer2 = this.question
      } 
    },
    methods:{
      getAnswer(){
        this.answer = this.question
      }
    }
  }
</script>

<style scoped>
input {border:1px solid #ccc;}
</style>