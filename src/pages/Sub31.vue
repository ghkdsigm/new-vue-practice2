<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <ul>
        <li v-for="(item, i) in list" :key="i" @click="selectList(item.title)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <v-form>
      <CommonEditor :height="200" :form-data-contents="formData.contents" @editorData="selectList"></CommonEditor>
      <!-- :rules="rules.textField_contents" -->
    </v-form>    
    <v-card-actions>
      <v-spacer></v-spacer>
      <!-- <v-btn color="primary">등록</v-btn> -->
      <v-btn class="ml-1" color="primary" @click="itemSave">{{ saveWord }}</v-btn>
      <v-btn class="ml-1" color="info" @click="itemDelete">삭제</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import axios from 'axios';
import CommonEditor from '@/components/ckeditor/CommonEditor.vue'

export default {
  components:{
    CommonEditor
  },
  data(){
    return {
      dataTables: [],
      editedIndex: -1,
      formData: {
        completed: '',
        id: '',
        title: '',
        contents: '',
      },
      // rules: {
      //   textField_subject: [(v) => !!v || '* 필수항목', (v) => (v && v.length >= 1) || '최소 1자이상'],
      //   textField_contents: [(v) => !!v || '* 필수항목', (v) => (v && v.length >= 1) || '최소 1자이상'],
      //   textField_status: [(v) => !!v || '* 필수항목', (v) => (v && v.length >= 1) || '최소 1자이상'],
      // },
      list: [],
      saveWord: '저장'
    }
  },
  // created() {
  //   this.getSearchInit()
  //   Object.assign(this.formDataInit, this.formData)
  // },
  mounted(){
    this.apiData()
  },
  methods: {
    async apiData(){
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
      this.list.push(...data)     
    },

    selectList(payload){      
      this.formData.contents = payload     
      this.editedIndex = 0  
      // if(payload !== ''){
      //   this.editedIndex = 0  
      //   this.saveWord = '수정' 
      // }
    },
    
    itemSave() {
      if (this.editedIndex === -1) {
        this.itemRegist()
      } else {
        this.itemModify()
      }
    },

    async itemRegist() {
      if (this.$refs.entryForm.validate()) {
        if (confirm('등록 하시겠습니까?')) {
          try {
            await this.$axios.post(`/api/ipcc/web/counsel/template/`, {
              subject: this.formData.subject,
              status: this.formData.status === 'Y' ? 'USED' : 'UN_USED',
              contents: encodeURIComponent(this.formData.contents),
            })
            alert('정상적으로 등록이 완료되었습니다.')

          } catch (error) {
            console.log(error)
          }
        }
      }
    },
    async itemModify() {
      if (this.$refs.entryForm.validate()) {
        if (confirm('수정 하시겠습니까?')) {
          try {
            await this.$axios.put(`/api/ipcc/web/counsel/template/${this.formData.templateSeq}`, {
              subject: this.formData.subject,
              status: this.formData.status === 'Y' ? 'USED' : 'UN_USED',
              contents: encodeURIComponent(this.formData.contents),
            })
            alert('정상적으로 수정이 완료되었습니다.')

          } catch (error) {            
            console.log(error)
          }
        }
      }
    },
    async itemDelete() {
      if (this.$refs.entryForm.validate()) {
        if (confirm('삭제 하시겠습니까?')) {
          try {
            await this.$axios.delete(`/api/ipcc/web/counsel/template/${this.formData.templateSeq}`)
            alert('정상적으로 삭제가 완료되었습니다.')

            this.itemSave()
          } catch (error) {            
            console.log(error)
          }
        }
      }
    },
    // insertMacro() {
    //   if (this.insertMacroType !== '') {
    //     this.formData.contents += this.insertMacroType
    //   } else {
    //     alert('삽입할 메크로를 선택해 주세요.')
    //   }
    // },
  },
}
</script>

<style>

</style>