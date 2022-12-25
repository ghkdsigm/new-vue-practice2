<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <button class="show-modal" @click="showDialog('Text')">
        show Text dialog !
      </button>
      <!-- use the modal component, pass in the prop -->
      <RoroDialog
        :show1="roroTextDialog"
        header-title="텍스트"
        @hide="hideDialog('Text')"
        @submit="submitDialog('Text')"
      >
        <template v-slot:body>
          <textarea placeholder="내용을 입력하세요" />
        </template>
      </RoroDialog>
    </div>

    <div>
      <button class="show-modal" @click="showDialog('List')">
        show List dialog !
      </button>
      <!-- use the modal component, pass in the prop -->
      <RoroDialog
        :show2="roroListDialog"
        header-title="좋아하는 음식"
        :footer-submit="false"
        @hide="hideDialog('List')"
        @submit="submitDialog('List')"
      >
        <template v-slot:body>
          <div>
            <ul>
              <li v-for="(item, i) in items" :key="i">
                <div>{{ item.text }}</div>
              </li>
            </ul>
          </div>
        </template>
      </RoroDialog>
    </div>

    <div>
      <button class="show-modal" @click="showDialog('Image')">
        show Image dialog !
      </button>
      <!-- use the modal component, pass in the prop -->
      <RoroDialog
        :show3="roroImageDialog"
        header-title="사진"
        footer-submit-title="선택"
        @hide="hideDialog('Image')"
        @submit="submitDialog('Image')"
      >
        <template v-slot:body>
          <tbody>
            <tr v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
              <div flat tile class="d-flex">
                <img
                  :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2"
                />
              </div>
            </tr>
          </tbody>
        </template>
      </RoroDialog>
    </div>
  </div>
</template>

<script>
import RoroDialog from '@/components/common/RoroDialog.vue';

export default {
  components: {
    RoroDialog,
  },
  data() {
    return {
      roroTextDialog: false,
      roroListDialog: false,
      roroImageDialog: false,
      item: 1,
      items: [{ text: '피자' }, { text: '라떼' }, { text: '짜글이' }],
    };
  },
  methods: {
    showDialog(type) {
      this[`roro${type}Dialog`] = true;
    },
    hideDialog(type) {
      this[`roro${type}Dialog`] = false;
    },
    submitDialog(type) {
      console.log('submit 완료!');
      this.hideDialog(type);
    },
  },
};
</script>

<style></style>
