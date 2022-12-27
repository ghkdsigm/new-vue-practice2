<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <input type="text" v-model="inputData"/>
      <p v-bind:class="cname">Hello1</p>
      <p v-bind:class="{ warning: isError }">Hello2</p>
      <p v-bind:class="errorTextColor">Hello3</p>
      <button :class= writing>등록</button>
    </div>
    <div>
      <input type="text" v-model="newInput" />
      <button :class= writing2>등록</button>
    </div>
    <div>
      <input type="text" v-model="newInput2" />
      <button :class= bt>등록</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cname: 'red-text',
      isError: false,
      inputData: '',
      newInput: '',
      newInput2:'',
      bt: ''
    }
  },
  watch:{
    newInput2(res){
      if(res !== ''){
        return this.getAnswer();
      } else {
        return this.bt = ''
      }
    }
  },
  methods:{
    getAnswer(){
      this.bt = 'on'
    }
  },
  computed:{
    errorTextColor() {
      return this.isError ? 'writing' : null;
    },    
    writing(){
      return this.inputData ? 'writing' : null;
    },    
    writing2(){
      return this.newInput ? 'writing' : null;
    }
  }
}
</script>

<style>
  input{border:1px solid #ccc;}
  .writing {background:#ccc; color:#eee;}
  .on {color:red;}
</style>