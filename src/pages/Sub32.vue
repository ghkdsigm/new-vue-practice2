<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-form ref="uploadExcelForm" lazy-validation>
      <div class="d-inline-flex align-center justify-center" style="width: 100%">
        <v-file-input label="엑셀파일첨부" required :rules="rules.textField_fileupload" hide-details dense @change="previewFiles"></v-file-input>
        <v-btn color="primary" class="ml-2" small @click="uploadExcel">등록</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      file: {},
      fileName: '',
      title: '',
      subject: '',
      contents: '',
      dataSort: '',
      rules: {
        textField_fileupload: [(v) => !!v || '* 필수항목'],
        textField_title: [(v) => !!v || '* 필수항목', (v) => (v && v.length <= 120) || '최대 120자 입니다'],
        textField_subject: [(v) => !!v || '* 필수항목', (v) => (v && v.length <= 120) || '최대 120자 입니다'],
        textField_contents: [(v) => !!v || '* 필수항목'],
      },
    }
  },
  methods:{
    uploadExcel(){
      if (this.$refs.uploadExcelForm.validate() && confirm('등록하시겠습니까?')) {
        try {
          const formData = new FormData()
          formData.append('excelFile', this.file)
          // await this.$axios.post(`${this.api}/upload/excel`, formData, { headers: { 'Content-type': 'multipart/form-data' } })
          // this.getCouponTotalMemberCount()
          alert(`등록이 완료 되었습니다.`)
        } catch (error) {
          console.log(error)
        }
      }
    },
    previewFiles(event) {
      if (event != null) {
        this.fileName = event.name
        this.file = event
      }
    },
  }
}
</script>

<style>

</style>