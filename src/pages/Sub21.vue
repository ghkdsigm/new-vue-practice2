<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <form @submit.prevent="onClickFormButton">
      <div>
        <label for="name">이름</label>
        <input type="text" id="name" v-model="form.formName"   />
      </div>
      <div>
        <label for="age">나이</label>
        <input type="text" id="age" v-model="form.formAge"   />
      </div>
      <div>
        <label for="phone">핸드폰</label>
        <input type="text" id="phone" v-model="form.formPhone"   />
      </div>
      <div>
        <label for="email">메일주소</label>
        <input type="text" id="email" v-model="form.formEmail"  />
      </div>
      <div>
        <label for="question">문의</label>
        <input type="text" id="question" v-model="form.formQuestion" />
      </div>
      <div>
        <label for="files">첨부자료</label>
        <input multiple type="file" id="files" @change="onInputImage()" ref="serveyImages" />
      </div>
      <button @click="onClickFormButton">전송</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        formName:'',
        formAge:'',
        formPhone:'',
        formEmail:'',
        formQuestion:'',
        images:''
      }
    }
  },
  // mounted(){
  //   console.log(this.form.images)
  // },
  methods:{
    onInputImage(){
      this.form.images = this.$refs.serveyImages.files
      console.log(this.form.images)
    },
    onClickFormButton(){
      if(this.form.formName !== '' && this.form.images !== ''){
        this.$router.push({
          name:'uploadConfirm',
          params:{
            form:this.form
          }
        })
      } else {
        alert('작성후 전송')
      }
    }
  }
};
</script>

<style></style>
