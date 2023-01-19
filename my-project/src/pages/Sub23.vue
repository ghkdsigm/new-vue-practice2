<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>    
    <common-ckeditor-component :height="200" :form-data-contents="formData.contents" @editorData="getEditorContents"></common-ckeditor-component>
    <div>
      <!-- <code>{{ editorData }}</code> -->
    </div>
    <!-- <button @click="emptyEditor">초기화</button> -->
    <button @click="itemRegister">전송</button>
  </div>
</template>

<script>
import CommonCkeditorComponent from '@/components/ckeditor/CommonEditor.vue'

export default {
  //name: 'editor', 
  components:{
    CommonCkeditorComponent
  },
  data() {
      return {
          formData: {
            contents: '',
          },
          formDataInit: {},
      };
  },
  methods:{   
    // emptyEditor(){
    //   this.editorData = '';
    // },
    getEditorContents(payload) {
      this.formData.contents = payload
    },
    async itemRegister() {
      // if (this.$refs.entryForm.validate() && confirm('등록하시겠습니까?')) {
      //   try {
      //     if (this.editedIndex === -1) {
      //       this.formData.contents = encodeURIComponent(this.formData.contents)
      //       await this.$axios.post(this.api, this.formData)
      //       alert('정상적으로 등록이 완료되었습니다.')
      //     } else {
      //       alert(`등록 중 오류가 발생했습니다. 비정상적인 데이터입니다. [editedIndex : ${this.editedIndex}]`)
      //     }          
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
      //this.formData.contents = encodeURIComponent(this.formData.contents)
      console.log(this.formData)
    }
  }
};
</script>

<style>
</style>
