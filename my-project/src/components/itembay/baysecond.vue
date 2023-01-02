<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <textarea :value="token"></textarea>
    <div>
        <!-- <select name="" id="">
            <option v-for="(item,index) in this.gameList" :key="index" :value="item.value">
                {{item.gameName}}    
            </option>
        </select> -->
        <ul>
            <li v-for="(item,index) in this.gameList" :key="index">
                <span>{{item.gameName}}</span>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            token: this.$store.state.token,
            msg: false,
            gameList: this.$store.state.gamelist.gameList,
            games : [],           
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
}
</script>

<style>

</style>