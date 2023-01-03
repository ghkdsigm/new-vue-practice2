<template>
  <div>   
    <div>
      {{pagedata}}
    </div>
  </div>
</template>

<script>
import {data} from '@/api/data.json'
export default {
  // props:{
  //   dataList:Array,
  // }  
  data(){
    return {
      //game: this.$store.state('game')
      pagedata:''
    }
  },
  created(){    
    const pageNum = this.$route.params.id;    
    data.forEach(v=>{
      if(Number(v.gameSeq) === Number(pageNum)){
        return this.pagedata = v.gameName
      }
    })
  }
}
</script>

<style>

</style>