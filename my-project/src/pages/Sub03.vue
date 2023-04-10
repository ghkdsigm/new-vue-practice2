<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <EmitViewVue @updateData="updateData" @newPeople="newPeople"> </EmitViewVue>{{ manypeople }}
    <div>
      <ul v-for="(item,i) in newpeople" :key="i">
        <li>{{ item.name }}</li>
      </ul>
    </div>
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
      newpeople:''
    };
  },
  methods: {
    updateData(value) {
      this.manypeople = value;
    },
    newPeople(value) {
      this.newpeople = value
    }
  },
};
</script>

<style></style>
