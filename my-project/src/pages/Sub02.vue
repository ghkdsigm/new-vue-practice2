<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <PropsViewVue :people="people" :person-info="personInfo" />
  </div>
</template>

<script>
import PropsViewVue from '@/components/common/propsView.vue';
export default {
  components: {
    PropsViewVue,
  },
  data() {
    return {
      people: [
        {
          id: 1,
          name: '황승현',
          age: 25,
        },
        {
          id: 2,
          name: '설인아',
          age: 21,
        },
        {
          id: 3,
          name: '민지',
          age: 20,
        },
      ],
      personInfo: {
        id:1,
        name: '황승현',
        age: 24
      }
    };
  },
};
</script>

<style></style>
