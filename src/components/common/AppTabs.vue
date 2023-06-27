<template>
  <div
    :class="{
      'flex space-x-4': variant === 'horizontal',
    }"
  >
    <ul
      class=""
      :class="{
        'flex items-center mb-6': variant === 'vertical',
      }"
    >
      <li v-for="(tab, index) in tabList" :key="index" class="">
        <label :for="`${_uid}${index}`" v-text="tab" class="" />
        <input
          :id="`${_uid}${index}`"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index + 1"
          v-model="activeTab"
          class=""
        />
      </li>
    </ul>
    <template v-for="(tab, index) in tabList">
      <div :key="index" v-if="index + 1 === activeTab" class="">
        <slot :name="`tabPanel-${index + 1}`" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: () => 'vertical',
      validator: (value) => ['horizontal', 'vertical'].includes(value),
    },
  },
  data() {
    return {
      activeTab: 1,
    };
  },
};
</script>
