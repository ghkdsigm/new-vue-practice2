<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <BayView v-if="msg" />
    <div class="loginWrap" v-else>
      <input type="text" v-model="memberId" />
      <input type="password" v-model="password" />
      <button @click="postData">포스트하기</button>
    </div>    
  </div>
</template>

<script>
import { SetToken } from '@/api/bay'
import BayView from '@/components/itembay/bayView'
export default {
  components:{
    BayView
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