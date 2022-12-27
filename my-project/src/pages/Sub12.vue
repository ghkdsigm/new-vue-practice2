<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <input v-model="question" />
    <input v-model="question2" />
    <p>{{ answer }}</p>
    <p>{{ answer2 }}</p>
    <div>
      <h1>Bankrruped</h1>
      <ul>
        <li v-for="(item, index) in bankrrupedPeople" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
  export default {
    data(){
      return {
        question: '',
        answer: 'watch에 의한 변경값',
        answer2: 'counputed에 의한 변경값',
        accounts: [
            { name: 'neo', balance: 500, isBankrruped: true },
            { name: 'tak', balance: 700, isBankrruped: false },
            { name: 'john', balance: 350, isBankrruped: false },
            { name: 'justin', balance: 200, isBankrruped: true },
        ],
      }
    },
    watch: {
      question: function(newQuestion){
        if(newQuestion !== '') this.getAnswer();
        else this.answer = '선 질문 후 대답'
      }
    },
    computed:{
      question2:{
        // get: function() {
        //   // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        //   return this.answer2 = 'counputed에 의한 변경값'
        // },
        set: function(data) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return this.answer2 = data
        }
      },
      bankrrupedPeople: function () {
          const newArr = this.accounts.filter((account) => {
              return account.isBankrruped
          })
          return newArr
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