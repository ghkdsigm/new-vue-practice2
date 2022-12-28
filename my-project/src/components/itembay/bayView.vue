<template>
  <div>
    <h1>토큰발행이 완료되었습니다. 토큰을 입력하시면 게임리스트를 불러옵니다.</h1>
    <div v-if="!msg">
        <input type="text" v-model="tokenInput" />
        <button @click="inputToken">토큰입력</button>
    </div>
    <div v-else>
        <ul>
            <li v-for="(item, index) in gameList" :key="index">
                {{item}}
            </li>
        </ul>
        <button @click="getToken">az</button>
    </div>
  </div>
</template>

<script>
import { GetGames } from '@/api/bay.js'
export default {
    data(){
        return {
            tokenInput: this.tokenInput,
            gameList: '',
            msg: false,
            token: ''
        }
    },
    methods:{
        async inputToken(){
            if(this.tokenInput !== ''){
                try {
                    const { data } = await GetGames(this.tokenInput)
                    this.gameList = data
                    this.msg = true
                    localStorage.setItem('token', JSON.stringify(this.tokenInput))
                } catch (error) {
                    console.log(error.response.data)
                }
            }
        },
        getToken(){
            console.log(localStorage.getItem('token'))
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