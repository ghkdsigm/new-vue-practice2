<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div style="display:flex; flex-direction:column">      
      <ul>
        <li v-for="(item,index) in dataList" :key="index">
          <!-- 아래는 라우트 링크 방식 -->
          <router-link :to="`sub171/${item.gameSeq}`">{{item.gameName}}</router-link>
        </li>
      </ul>
      <ul style="margin-top:25px;">
        <li v-for="(item,index) in dataList" :key="index" @click="goQueryDetail(item)">
          <!-- 아래는 라우트 링크 방식 -->
          <!-- <router-link :to="`sub17/${item.gameSeq}`">{{item.gameName}}</router-link> -->
          {{item.gameName}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { data } from '@/api/data.json'
//import DetailView from '@/components/detail/DetailView01'
export default {
  components:{
    //DetailView
  },
  data(){
    return {
      dataList:data
    }
  },
  // eslint-disable-next-line vue/multi-word-component-names
  created(){
    // this.dataList = data
    // console.log(this.dataList)
    console.log(data)
  },
  methods:{
    // goDetail(game){
    //   this.$store.commit('setDetail', game)
    //   //this.$router.push(`sub17/${game.gameSeq}`)
    //   //this.$router.push({name:'sub17detail',params:`/sub17/${game.gameSeq}`})
    //   //this.$router.push('/sub17/' + this.$route.params.id)
    // }
    goQueryDetail(game){
      this.$router.push({ name: 'sub172detail', query: {DBSeq: `${game.gameSeq}`} })
    }    
  }
};
</script>

<style scoped>
a  {color:#000 !important;}
</style>
