<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <pnpGrid :height="height" :data="data" :columns="columns"></pnpGrid>
  </div>
</template>

<script>
import pnpGrid from '@/components/grid/grid.vue'
export default {
  components: {
     pnpGrid
  },
  data () {
    return {
      data: [],
      columns: [
        {key:'no', width:60, label:'NO', align:'left'},
        {key:'name', width:100, label:'NAME', align:'center'},
        {key:'age', width:100, label:'AGE', align:'center'},
        {key:'nickname', width:100, label:'NICKNAME', align:'center'},
      ],
      height: 500,
      namePool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
  },
  created(){
    this.load();
  },
  methods: {
    load() {
      // Ajax 로 Server의 데이터를 가져와도 좋다. 
      // 편의를 위해 랜덤 데이터 10만건을 생성한다. 
      const me = this;
      for(let i=1; i<=100000; ++i) {
        me.data.push(
          {
            no: i,
            name: this.namePool.charAt(Math.floor(Math.random() * 24)),
            age: Math.floor((Math.random() * 30)+20),
            nickname: this.namePool.charAt(Math.floor(Math.random() * 24)) + this.namePool.charAt(Math.floor(Math.random() * 24))
          }
        )
      }
    },
    onload() {
      this.load()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>