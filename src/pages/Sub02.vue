<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <PropsViewVue v-if="newpeople !== ''" :people="people" :person-info="personInfoData" :newpeople="newpeople" />
  </div>
</template>

<script>
import PropsViewVue from '@/components/common/propsView.vue';
export default {
  components: {
    PropsViewVue,
  },
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
      personInfoData: {
        id:1,
        name: '황승현',
        age: 24
      },
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
    this.$nextTick(()=>{
      this.roop()
    })
    console.log('newpeople', this.newpeople)
  },
  methods:{
    roop(){      
      this.roopdata.forEach(v=>{
        this.newpeople.push(v)
      })
    }     
  }
};
</script>

<style></style>
