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
    <div>
      <h2>computed</h2>
      <span>{{ numbering }} </span>
      <span>{{ changeNumbering }} </span>
    </div>
    <div>
      <h2>watch</h2>
      <span>{{ numbering2 }} </span>
      <span>{{ calRes }} </span>
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
      numbering: 0,
      numbering2: 0,
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
    numbering2() {
      return this.changeNum(this.numbering2)
    }
  },
  methods: {
    getAnswer() {
      this.bt = 'on';
    },
    plus() {
      return this.count++;
    },
    changeNum(val) {
      if(val > 6){
        this.calRes = '6도넘었음'
      } 
      else if (val <= 6 && val > 3){
        this.calRes = '3이넘었음'
      }
      else {
        this.calRes = '3이하임'
      }
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
    changeNumbering(){
      // return this.numbering > 3 ? '3이넘었음' : '3이 넘지않았음'

      const vm = this;
      function calc(){
        let ress = ''
        if(vm.numbering > 6){
          ress =  '6도넘었음'
        } else if(vm.numbering <= 6 && vm.numbering > 3){
          ress =  '3이넘었음'
        } else {
          ress =  '3이하임'
        }
        return ress
      }

      return calc()
    }
  },
  mounted(){
    const setinerval = setInterval(()=>{
      this.numbering++
    },1500)
    setTimeout(() => {
      clearInterval(setinerval)
    }, 15000);

    const setinerval2 = setInterval(()=>{
      this.numbering2++
    },1500)
    setTimeout(() => {
      clearInterval(setinerval2)
    }, 15000);    
  }
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
