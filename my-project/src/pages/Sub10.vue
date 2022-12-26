<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <my-data-table
    :items=testItems
    :headers=testHeaders
  />
</template>

<script>
  import MyDataTable from '@/components/datatable/MyDataTable.vue'
  export default {
    //name: 'Parent',
    components: {
      MyDataTable,
    },
    data(){
      return {
        testItems: [
          { name: '로로', age: 27, gender: 'M' },
          { name: '룰루', age: 29, gender: 'F' },
          { name: '랄라', age: 35, gender: 'F' },
        ],
        testHeaders: [
          { text: '이름', value: 'name' },
          { text: '나이', value: 'age' },
          { text: '성별', value: 'gender' },
        ],
      }
    },
  }
</script>