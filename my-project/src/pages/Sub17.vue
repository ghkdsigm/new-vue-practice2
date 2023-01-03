<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>      
      <div v-for="(item,index) in dataList" :key="index">
        <!-- 아래는 라우트 링크 방식 -->
        <router-link :to="`sub17/${item.gameSeq}`">{{item.gameName}}</router-link>
      </div>
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
  created(){
    // this.dataList = data
    // console.log(this.dataList)
  },
  methods:{
    // goDetail(game){
    //   this.$store.commit('setDetail', game)
    //   //this.$router.push(`sub17/${game.gameSeq}`)
    //   //this.$router.push({name:'sub17detail',params:`/sub17/${game.gameSeq}`})
    //   //this.$router.push('/sub17/' + this.$route.params.id)
    // }
  }
};
</script>

<style scoped>
a  {color:#000 !important;}
</style>
