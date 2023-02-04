<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div :class="['default1', test1.valueA === 'testA' ? 'a' : '']">TEST1</div>

    <div :class="['default2', test2.valueB === 'testB' ? 'b' : '']">TEST2</div>

    <div :class="['default3', `text-${test2.valueC}`]">TEST3</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test1: {
        valueA: 'testA',
        valueB: 'testB',
        valueC: 'testC',
      },
      test2: {
        valueA: 'testA',
        valueB: 'testB',
        valueC: 'testC',
      },
    };
  },
};
</script>

<style>
.a {
  color: red;
}
.b {
  color: blue;
}
.c {
  color: green;
}
</style>
