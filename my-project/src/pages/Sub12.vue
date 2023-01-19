<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <input v-model="question" />
    <input v-model="question2" />
    <p><span>watch로 한거</span>{{ answer }}</p>
    <p><span>computed로 한거</span>{{ answer2 }}</p>
    <div>
      <h1>Bankrruped</h1>
      <ul>
        <li v-for="(item, index) in bankrrupedPeople" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div>
      <div v-for="person in activePeople" :key="person.name">
        {{ person.name }} : {{ person.email }}
        <div :class="{ active: person.isActive }">This is the menu option</div>
      </div>
    </div>
    <div>
      <Default v-if="!activeLayout" />
      <Sub v-else />
      <button @click="changeLayout">레이아웃 변경</button>
    </div>
  </div>
</template>

<script>
import Default from '@/components/layout/Default';
import Sub from '@/components/layout/Sub';

export default {
  data() {
    return {
      question: '',
      answer: 'watch에 의한 변경값',
      answer2: '',
      accounts: [
        { name: 'neo', balance: 500, isBankrruped: true },
        { name: 'tak', balance: 700, isBankrruped: false },
        { name: 'john', balance: 350, isBankrruped: false },
        { name: 'justin', balance: 200, isBankrruped: true },
      ],
      classObject: {
        active: true,
        'text-danger': false,
      },
      people: [
        { name: 'Mike Taylor', email: 'mike@example.com', isActive: true },
        { name: 'John Carson', email: 'john@example.com', isActive: false },
        { name: 'Peter Sanders', email: 'peter@exemple.com', isActive: true },
      ],
      layout: { name: 'dafault', isActive: false },
    };
  },
  components: {
    Default,
    Sub,
  },
  watch: {
    question: function (newQuestion) {
      if (newQuestion !== '') this.getAnswer();
      else this.answer = '선 질문 후 대답';
    },
  },
  computed: {
    question2: {
      get: function () {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return this.answer2;
      },
      set: function (data) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        return (this.answer2 = data);
      },
    },
    bankrrupedPeople: function () {
      const newArr = this.accounts.filter((account) => {
        return account.isBankrruped;
      });
      return newArr;
    },
    activePeople() {
      return this.people.filter((person) => person.isActive);
    },
    activeLayout() {
      return this.layout.isActive === true;
    },
  },
  methods: {
    getAnswer() {
      this.answer = this.question;
    },
    changeLayout() {
      this.layout.isActive = !this.layout.isActive;
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid #ccc;
}
</style>
