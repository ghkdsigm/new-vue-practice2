<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <v-btn class="show-modal" @click="openModal" elevation="2">Show Modal1</v-btn>
      <v-btn class="show-modal" @click="openModal2" elevation="2">Show Modal2</v-btn>
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" :data="data" @close="closeModal">
        <template v-slot:header>
          <h3>{{ data.title }}</h3>
        </template>
        <template v-slot:body>
          <h3>{{ data.content }}</h3>
        </template>
        <template v-slot:footer>
          <h3>{{ data.footer }}</h3>
        </template>
        <template v-slot:close></template>
      </modal>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/common/popup.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      data: {
        title: '',
        content: '',
        footer: '',
      },
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      this.data = {
        title: 'zzz',
        content: 'vvv',
        footer: 'ccc',
      };
    },
    closeModal() {
      this.showModal = false;
    },
    openModal2() {
      this.showModal = true;
      this.data = {
        title: 'zzz2',
        content: 'vvv2',
        footer: 'ccc2',
      };
    },
  },
};
</script>

<style></style>
