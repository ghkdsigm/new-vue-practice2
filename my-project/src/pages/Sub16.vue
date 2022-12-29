<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <BayFirst v-if="msg" />
    <div class="loginWrap" v-else>
      <input type="text" v-model="memberId" />
      <input type="password" v-model="password" />
      <button @click="postData">포스트하기</button>
    </div>    
  </div>
</template>

<script>
import { SetToken } from '@/api/bay'
import BayFirst from '@/components/itembay/bayfirst'
export default {
  components:{
    BayFirst
  },
  data(){
    return {
      memberId: "",
      password: "",
      msg: false
    }
  },
  methods:{    
    async postData(){      
      if(this.memberId !== '' && this.password !== ''){
        try {
          const userData = {
            memberId : this.memberId,
            password : this.password
          }
          const { data } = await SetToken(userData)
          this.msg = true
          alert(data.message)
        } catch (error) {
          alert(error.response.data.message)
        }
      } else if(this.memberId === '') {
        alert('아이디를 입력하세요')
      } else {
        alert('패스워드를 입력하세요')
      }
    }
  },
  created(){
    let token = localStorage.getItem('token')
    if(token !== null){
        this.msg = true
    } else {
        this.msg = false
    }
  }
}
</script>

<style>

</style>