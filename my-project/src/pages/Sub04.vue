<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <v-btn class="show-modal my-2" @click="showDialog('Text')" elevation="2">
        show Text dialog !
      </v-btn>
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
      <v-btn class="show-modal my-2" @click="showDialog('List')" elevation="2">
        show List dialog !
      </v-btn>
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
      <v-btn class="show-modal my-2" @click="showDialog('Image')" elevation="2">
        show Image dialog !
      </v-btn>
      <!-- use the modal component, pass in the prop -->
      <RoroDialog
        :show3="roroImageDialog"
        header-title="사진"
        footer-submit-title="선택"
        @hide="hideDialog('Image')"
        @submit="submitDialog('Image')"
      >
        <template v-slot:body>
          <table>
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
          </table>
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
