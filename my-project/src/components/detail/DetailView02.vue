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
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'sub172detail',
  created(){     
    const pageNum2 = this.$route.query.DBSeq;

    console.log(pageNum2)
    
    data.forEach(v=>{
      if(Number(v.gameSeq) === Number(pageNum2)){
        return this.pagedata = v.gameName
      }
    })
  }
}
</script>

<style>

</style>