<template>
  <client-only>
    <ckeditor v-model="formData" :config="editorConfig" :editor-url="editorUrl" @namespaceloaded="onNamespaceLoaded"></ckeditor>
  </client-only>
</template>

<script>
import CKEditor from 'ckeditor4-vue';

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        CKEditor
    },
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
      },
      // editorUrl: '`${this.$config.BASE_URL}/ckeditor/ckeditor.js`',
      editorUrl: '../../../node_modules/ckeditor4-vue/dist/ckeditor.js',
    }
  },
  watch: {
    formDataContents(value) {
      this.formData = value
    },
    formData(value) {
      this.$emit('editorData', value)
    },
  },
  created() {
    this.formData = this.formDataContents
  },
  methods: {
    onNamespaceLoaded(CKEDITOR) {
      CKEDITOR.plugins.addExternal('font', '/js/ckeditor/plugins/font/', 'plugin.js')
      CKEDITOR.plugins.addExternal('colorbutton', '/js/ckeditor/plugins/colorbutton/', 'plugin.js')
      CKEDITOR.plugins.addExternal('colordialog', '/js/ckeditor/plugins/colordialog/', 'plugin.js')
      CKEDITOR.plugins.addExternal('uploadimage', '/js/ckeditor/plugins/uploadimage/', 'plugin.js')
      CKEDITOR.plugins.addExternal('image2', '/js/ckeditor/plugins/image2/', 'plugin.js')
      CKEDITOR.plugins.addExternal('basicstyles', '/js/ckeditor/plugins/basicstyles/', 'plugin.js')
      CKEDITOR.plugins.addExternal('justify', '/js/ckeditor/plugins/justify/', 'plugin.js')
      CKEDITOR.plugins.addExternal('link', '/js/ckeditor/plugins/link/', 'plugin.js')
    },
  },
}
</script>
