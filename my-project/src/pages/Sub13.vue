<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <input type="text" v-model="inputData" />
      <p v-bind:class="cname">Hello1</p>
      <p v-bind:class="{ warning: isError }">Hello2</p>
      <p v-bind:class="errorTextColor">Hello3</p>
      <button :class="writing">등록</button>
    </div>
    <div>
      <input type="text" v-model="newInput" />
      <button :class="writing2">등록</button>
    </div>
    <div>
      <input type="text" v-model="newInput2" />
      <button :class="bt">등록</button>
    </div>
    <div>
      <button @click="plus">숫자상승</button>
      {{ count }}
      {{ monitorCount }}
    </div>
    <div>
      <button @click="showList = !showList">show todos</button>
      <template v-if="showList">
        <template v-if="hasOpenedTodos">
          <li v-for="(todo, idx) in needTodos" :key="idx">
            {{ todo.title }}
          </li>
        </template>
        <span v-else>nothing to show</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cname: 'red-text',
      isError: false,
      inputData: '',
      newInput: '',
      newInput2: '',
      bt: '',
      count: 0,
      showList: false,
      todos: [
        { title: 'wash dishes', done: true },
        { title: 'remove thrash', done: false },
      ],
    };
  },
  watch: {
    newInput2(res) {
      if (res !== '') {
        return this.getAnswer();
      } else {
        return (this.bt = '');
      }
    },
  },
  methods: {
    getAnswer() {
      this.bt = 'on';
    },
    plus() {
      return this.count++;
    },
  },
  computed: {
    errorTextColor() {
      return this.isError ? 'writing' : null;
    },
    writing() {
      return this.inputData ? 'writing' : null;
    },
    writing2() {
      return this.newInput ? 'writing' : null;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    monitorCount() {
      return this.count > 3 ? '3 이상 입니다.' : '3 이하 입니다.';
    },
    needTodos() {
      return this.todos.filter((todo) => !todo.done);
    },
    hasOpenedTodos() {
      return this.needTodos.length > 0;
    },
  },
};
</script>

<style>
input {
  border: 1px solid #ccc;
}
.writing {
  background: #ccc;
  color: #eee;
}
.on {
  color: red;
}
</style>
