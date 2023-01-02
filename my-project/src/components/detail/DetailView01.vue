<template>
  <div>
    <!-- {{dataList}} -->
    <ul>
      <li v-for="(item, index) in game" :key="index">
        <span>{{item.gameName}}</span>
        <span>{{item.gameSeq}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props:{
  //   dataList:Array,
  // }
  data(){
    return {
      game:''
    }
  },
  created(){
    this.game = this.$store.state('game')
  }
}
</script>

<style>

</style>