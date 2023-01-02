<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>토큰발행이 완료되었습니다. 토큰을 입력하시면 게임리스트를 불러옵니다.</h1>
    <div v-if="msg">
        <input type="text" v-model="tokenInput" />
        <button @click="inputToken">토큰입력</button>
    </div>
    <div v-else>
        <!-- <ul>
            <li v-for="(item, index) in gameList" :key="index">
                {{item}}
            </li>
        </ul> -->
        <BaySecond>
        </BaySecond>
        <!-- <button @click="getToken">az</button> -->
    </div>
  </div>
</template>

<script>
import { GetGames } from '@/api/bay.js'
import BaySecond from '@/components/itembay/baysecond.vue'

export default {
    data(){
        return {
            tokenInput: this.tokenInput,
            gameList: [],
            msg: '',
            token: ''
        }
    },
    components:{
        BaySecond
    },
    methods:{
        async inputToken(){
            if(this.tokenInput !== ''){
                try {
                    const { data } = await GetGames(this.tokenInput)
                    //this.gameList = data     
                                   
                    data.gameList.map(v=>{
                        this.gameList.push(v)                        
                    })
                    this.msg = false
                    this.$store.commit('setGameList', data)
                    this.$store.commit('setToken', this.tokenInput)
                    //localStorage.setItem('token', JSON.stringify(this.tokenInput))
                    localStorage.setItem('msg', JSON.stringify(this.msg))
                } catch (error) {
                    console.log(error.response.data)
                }
            }
        },
        // getToken(){
        //     console.log(localStorage.getItem('token'))
        // }
    },
    created(){     
        this.msg = localStorage.getItem('msg')        
    }
}
</script>

<style>

</style>