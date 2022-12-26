<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index" @click="textFunctionList(item.id)">
        {{item.title}}
      </li>
    </ul>
    <v-btn @click="testFunctionGet" elevation="2">get</v-btn>
    <v-btn @click="testFunctionPost" elevation="2">post</v-btn>
    <div class="formStyle" v-if="infoValue">
      <div>
        <label for="id">id</label>
        <input type="text" id="id" v-model="idValue" />
      </div>
      <div>
        <label for="title">title</label>
        <input type="text" id="title"  v-model="titleValue"/>
      </div>
      <div>
        <label for="body">body</label>
        <input type="text" id="body"  v-model="bodyValue"/>
      </div>
    </div>
    <div v-else>
      get받으세요
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components:{
  },
  data(){
    return { 
      data:'',
      seletedData:'',
      infoValue: false,
      idValue: '',
      titleValue: '',
      bodyValue: ''
    }
  },
  methods:{
    async testFunctionGet(){
      this.infoValue = true
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
      this.data = data
    },
    textFunctionList(itemId){
      this.seletedData = ''
      this.seletedData = itemId      
    },
    async testFunctionPost(){
      const form = {
        userId: 10,
        id: this.idValue, 
        title: this.titleValue,
        body: this.bodyValue
      }
      if(this.seletedData !== ''){
        if(form.id !== '' && form.title !== '' && form.body !== ''){
          try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', form)    
            .then(
              this.idValue === '',
              this.titleValue === '',
              this.bodyValue === '',
              console.log('성공!')              
            )        
          } catch (error) {
            alert(error)
          }
        } else {
          alert('하단 입력부터!')
        }
      } else {
        alert('리스트부터 선택해주세요')
      }
    }
  }
};
</script>

<style>
.formStyle > div{margin:5px 0;}
.formStyle > div input {border:1px solid #eee;margin-left:15px;}
</style>