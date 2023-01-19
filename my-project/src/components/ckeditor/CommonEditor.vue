<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>    
    <ckeditor v-model="formData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>

export default {
  //name: 'editor', 
  props: {
    height: {
      type: Number,
      default: 450,
    },
    filebrowserImageUploadUrl: {
      /*
        - 이미지 업로드 API
        1. 기본 : /api/common/ckeditor/upload/image
        2. 이용안내 : /api/common/ckeditor/upload/image/guide
      */
      type: String,
      default: '/api/common/ckeditor/upload/image',
    },
    formDataContents: {
      type: String,
      default: '',
    },
  },
  data() {
      return {
          formData: this.editorData,
          editorConfig: {
            height: this.height,
            extraPlugins: 'font,colorbutton,colordialog,uploadimage,image2,basicstyles,justify',
            removePlugins: 'image',
            removeButtons: '',
            filebrowserImageUploadUrl: this.filebrowserImageUploadUrl,
            toolbar: [
              { name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'ExportPdf', 'Preview', 'Print', '-', 'Templates'] },
              { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
              { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript'] },
              { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'] },
              { name: 'align', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
              { name: 'insert', items: ['Image', 'Table', 'HorizontalRule', 'SpecialChar'] },
              { name: 'styles', items: ['Font', 'FontSize'] },
              { name: 'colors', items: ['TextColor', 'BGColor'] },
              { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
            ],
            readOnly: this.readOnlyOption,
          },
      };
  },
  watch: {
    formDataContents(value) {
      this.formData = value
      //console.log(this.formData)
    },
    formData(value) {
      this.$emit('editorData', value)
    },
  },
  created() {
    this.formData = this.formDataContents
  },
};
</script>

<style>
</style>
