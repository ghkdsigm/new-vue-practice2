<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div :class="['default1', test1.valueA === 'testA' ? 'a' : '']">TEST1</div>

    <div :class="['default2', test2.valueB === 'testB' ? 'b' : '']">TEST2</div>

    <div :class="['default3', `text-${test2.valueC}`]">TEST3</div>

    <input :type="type1">

    <input v-bind:type="type2">

    <a :href="url">url</a>

    <p v-bind:class='class1'>v-bind 클래스지정</p>

    <p v-bind:class='[class1, class2]'>다중 클래스 지정</p>
    
    <p v-bind:class="{'test-class1': isON}">클래스 ON/OFF</p>  
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
      url:'https://naver.com',
      type1:'radio',
      type2:'text',
      class1:'test-class1',
      class2:'test-class2',
      isON: true
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
