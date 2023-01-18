<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>    
    <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
    <div>
      <code>{{ editorData }}</code>
    </div>
    <button @click="emptyEditor()">초기화</button>
    <button @click="formRegister">전송</button>
  </div>
</template>

<script>

export default {
  //name: 'editor', 
  data() {
      return {
          editorData: '',
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
  methods:{
    formRegister(){
      console.log(this.editorData)
    },
    emptyEditor(){
      this.editorData = '';
    }
  }
};
</script>

<style>
</style>
