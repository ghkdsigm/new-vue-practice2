<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Gametable :data="data"/>
  </div>
</template>

<script>
import { data } from '@/api/data.json'
import Gametable from '@/components/game/gameTable.vue'
export default {
  components:{
    Gametable
  },
  data(){
    return {
      data: data
    }
  },
  mounted(){
    
  }
};
</script>

<style>

</style>