<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="regView">
    <div>
        <textarea :value="token"></textarea>
        <div>
            <!-- <select name="" id="">
                <option v-for="(item,index) in this.gameList" :key="index" :value="item.value">
                    {{item.gameName}}    
                </option>
            </select> -->
            <div>
                <input type="text" value="Search" v-model="searchedGame"/>
                <button @click="sGame">검색</button>                
            </div>
            <ul v-if="this.searchedGameList == '' || this.searchedGame === ''">
                <li v-for="item in this.gameList" :key="item.gameSeq" @click="inputGamename(item.gameSeq)">
                    <span>{{item.gameName}}</span>
                </li>
            </ul>
            <ul v-else-if="this.searchedGameList !== '' && this.inputmsg !== false">
                <li v-for="item in this.searchedGameList" :key="item.gameSeq" @click="inputGamename(item.gameSeq)">
                    {{item.gameName}}
                </li>
            </ul>
            <ul v-else-if="this.imputmsg === true">
                <li>
                    메시지를 입력해주세요
                </li>
            </ul>
        </div>
    </div>
    <div>
        <ul>
            <li v-for="item in selectedGame.gameServerList" :key="item.gameServerSeq">
                <span>{{item.gameName}}</span> <span>{{item.serverName}}</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { SeachGameServer,SeachGame } from '@/api/bay.js'

export default {
    data(){
        return{
            token: this.$store.state.token,
            msg: false,
            gameList: this.$store.state.gamelist.gameList,
            games : [],  
            searchGamename: '',
            gameSeq: '',
            selectedGame: [],
            searchedGame:'',
            searchedGameList:[],
            imputmsg:false        
        }
    },
    // created(){
    //    //this.token = this.$store.state('token')
    //    this.token = localStorage.getItem('token')
    //     if(this.token !== null){
    //         this.msg = true
    //     } else {
    //         this.msg = false
    //     }
    // }
    methods:{
        async inputGamename(gameSeq){
            this.selectedGame = ''
            //this.searchGamename =  this.inputGamename
            try {
                const {data} = await SeachGameServer(gameSeq, this.token)
                this.selectedGame = data
                //console.log(data)
            } catch (error) {
                console.log(error)
            }
        },
        async sGame(){
            this.selectedGame = ''
            try {
                console.log('zdf', this.searchedGame)
                const {data} = await SeachGame(this.searchedGame, this.token)
                console.log(data)
                this.searchedGameList = data.gameList
                //this.searchedGameList = data
            } catch (error) {
                console.log(error)
            }
        }
    },
    watch:{
        searchedGame:function(writing){
            if(writing !== '') {
                this.imputmsg = true
            } else {
                this.imputmsg = false
            }
            console.log(this.imputmsg)
        }
    }
}
</script>

<style>
.regView {display: flex;}
</style>