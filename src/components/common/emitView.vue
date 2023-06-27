<template>
  <div>
    <v-btn @click="emitData" elevation="2">emit올리기</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          id: 1,
          name: '황승현',
          age: 25,
        },
        {
          id: 2,
          name: '설인아',
          age: 21,
        },
        {
          id: 3,
          name: '민지',
          age: 20,
        },
      ],
      roopdata:[
        {name:'김씨', age: 34},
        {name:'이씨', age: 23},
        {name:'박씨', age: 12},
        {name:'최씨', age: 45}        
      ],
      newpeople: []
    };
  },
  mounted(){
    this.roop()
    this.$emit('newPeople', this.newpeople)
  },
  methods: {
    emitData() {
      this.$emit('updateData', this.people);
    },
    roop(){      
      this.roopdata.forEach(v=>{
        this.newpeople.push(v)
      })
    } 
  },
};
</script>

<style></style>
