<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <h1 class="">Variant: Vertical(default)</h1>

    <AppTabs class="" :tabList="tabList">
      <template v-slot:tabPanel-1> Content 1 </template>
      <template v-slot:tabPanel-2> Content 2 </template>
      <template v-slot:tabPanel-3> Content 3 </template>
      <template v-slot:tabPanel-4> Content 4 </template>
    </AppTabs>

    <h1 class="">Variant: Horizontal</h1>

    <AppTabs class="" :tabList="tabList" variant="horizontal">
      <template v-slot:tabPanel-1> Content 1 </template>
      <template v-slot:tabPanel-2> Content 2 </template>
      <template v-slot:tabPanel-3> Content 3 </template>
      <template v-slot:tabPanel-4> Content 4 </template>
    </AppTabs>
  </div>
</template>

<script>
import AppTabs from '@/components/common/AppTabs.vue';

export default {
  components: {
    AppTabs,
  },
  data() {
    return {
      tabList: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'],
    };
  },
};
</script>
