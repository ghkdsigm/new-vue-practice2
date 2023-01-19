<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <validation-observer ref="validator">
      <form @submit.prevent="submit">
        <validation-provider
          rules="required|email|limit:1,14"
          name="이메일"
          v-slot="{errors}"
        >
          <div>
            <label>이메일</label>
            <input v-model="formData.email" type="text" name="이메일" value=""
                   autocomplete="off">
          </div>
          <div>
            {{ errors }}
          </div>
        </validation-provider>
 
        <validation-provider rules="required" name="패스워드" v-slot="{errors}">
          <div>
            <label>비밀번호</label>
            <input v-model="formData.password" type="text" name="" value="">
          </div>
          <div>
            {{ errors }}
          </div>
        </validation-provider>
 
        <validation-provider rules="required|confirmed:패스워드" name="패스워드확인"
                             v-slot="{errors}">
          <div>
            <label>비밀번호 확인</label>
            <input v-model="formData.passwordCheck" type="text" name=""
                   value="">
          </div>
          <div>
            {{ errors }}
          </div>
        </validation-provider>
 
        <validation-provider rules="required" name="휴대폰" v-slot="{errors}">
          <div>
            <label>휴대폰</label>
            <input v-model="formData.tell" type="text" name="" value="">
          </div>
          <div>
            {{ errors }}
          </div>
        </validation-provider>
 
        <!-- v-model 에서 '' 또는 null 로 기본값으로 세팅해주어야 함, false 로 할 경우 required 먹히지 않음 -->
        <validation-provider rules="required" name="성별" v-slot="{errors}">
          <div>
            <label>성별</label>
 
            <input v-model="formData.gender" type="radio" name="gender"
                   value="1">
            <label>남</label>
            <input v-model="formData.gender" type="radio" name="gender"
                   value="2">
            <label>여</label>
          </div>
          <div>
            {{ errors }}
          </div>
        </validation-provider>
 
        <validation-provider rules="required-select" name="취미" v-slot="{errors}">
          <div>
            <label>취미</label>
            <input v-model="formData.hobby" type="checkbox" name="hobby"
                   value="A">
            <label>A</label>
            <input v-model="formData.hobby" type="checkbox" name="hobby"
                   value="B">
            <label>B</label>
            <input v-model="formData.hobby" type="checkbox" name="hobby"
                   value="C">
            <label>C</label>
          </div>
          <div>
            {{ errors }}
          </div>
        </validation-provider>
 
        <button>버튼</button>
      </form>
    </validation-observer>
 
  </div>
</template>

<script>

export default {
  name: 'SignUpPage',
  data() {
    return {
      formData: {
        email: '',
        password: '',
        passwordCheck: '',
        tell: '',
        gender: '',
        hobby: [],
      },
    };
  },
 
  methods: {
    submit() {
      const { validator } = this.$refs;
      console.log(validator);
 
      validator.validate().then((result) => {
        console.log(result);
        if (result.valid) console.log('post api');
        else console.error('form invalid');
      });
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 8px;
}
 
</style>
