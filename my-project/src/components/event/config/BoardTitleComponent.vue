<template>
  <v-container fluid pb-0>
    <div class="d-flex" :class="[css, multiple || wrap ? 'flex-column' : 'align-center']">
      <div>
        <h4 v-if="title" class="text-h5 font-weight-bold board-title">{{ title }}</h4>
        <div v-if="!nosub" class="mt-2">
          <slot name="subarea"> 텍스트 </slot>
        </div>
      </div>
      <v-divider v-if="multiple || wrap" class="mt-2"></v-divider>
      <template v-if="multiple">
        <div class="option_wrap d-flex align-center">
          <slot name="left"></slot>
          <div class="ml-auto"><slot name="right"></slot></div>
        </div>
      </template>
      <template v-else-if="wrap">
        <div class="option_wrap">
          <slot name="cnt"> </slot>
        </div>
      </template>
      <template v-else>
        <div class="option_wrap ml-auto">
          <div class="ml-auto"><slot name="right"></slot></div>
        </div>
      </template>
    </div>
  </v-container>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    css: {
      type: String,
      default: '',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    nosub: {
      type: Boolean,
      default: false,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.option_wrap {
  .v-btn {
    + .v-btn {
      margin-left: 0.5rem;
    }
  }
}

.v-divider {
  + .option_wrap {
    margin-top: 16px !important;

    &:empty {
      margin-top: 0 !important;
    }
  }
}
</style>
