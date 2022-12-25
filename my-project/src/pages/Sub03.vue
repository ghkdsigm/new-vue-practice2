<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <EmitViewVue @updateData="updateData"> </EmitViewVue>{{ manypeople }}
  </div>
</template>

<script>
import EmitViewVue from '@/components/common/emitView.vue';
export default {
  components: {
    EmitViewVue,
  },
  data() {
    return {
      manypeople: '',
    };
  },
  methods: {
    updateData(value) {
      this.manypeople = value;
    },
  },
};
</script>

<style></style>
