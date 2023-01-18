<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>    
    <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>

export default {
  //name: 'editor', 
  data() {
      return {
          editorData: '<p>Content of the editor.</p>',
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
  }
};
</script>

<style>
</style>
