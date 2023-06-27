<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <DataTable />
</template>

<script>
  import DataTable from "@/components/datatable/DataTable.vue";
  export default {
    //name: 'Parent',
    components: {
      DataTable,
    }
  }
</script>