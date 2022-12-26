<template>
  <div class="form-validation">
    <form @submit="formSubmit" method="post">
      <div>
        <label for="email">email</label>
        <v-text-field id="email" type="text" v-model="email" :rules="rules" hide-details="auto"></v-text-field>
      </div>
      <div>
        <label for="password">password</label>
        <v-text-field id="password" type="text" v-model="password" :rules="rules" hide-details="auto"></v-text-field>
      </div>
      <button @click.prevent="formSubmit">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "FormValidation",
    components: {},
    data() {
      return {
        email: "",
        password: "",
      }
    },
    methods: {
      formSubmit() {
        // code..
        if (
          !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            this.email
          )
        ) {
          alert("이메일 주소를 입력해 주세요.")
        }

        if (!/^[a-zA-Z0-9]{8,20}$/.test(this.password)) {
          alert("비밀번호는 영문 or 숫자 8자 이상 20자 미만으로 입력해 주세요.")
        }

        return true
      },
    },
  }
</script>

<style scoped></style>