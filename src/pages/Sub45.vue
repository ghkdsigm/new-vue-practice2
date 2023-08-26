<template>
  <ag-grid-vue
    style="width: 100%; height: 100%"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="rowData"
  >
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue";

export default {
  name: "App",
  data() {
    return {
      columnDefs: null,
      //rowData: 'null',
      rowData: [],
      namePool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    };
  },
  components: {
    AgGridVue,
  },
  beforeMount() {
    this.columnDefs = [
      { field: "no", sortable : true, filter: true },
      { field: "name", sortable : true, filter: true },
      { field: "age", sortable : true, filter: true },
      { field: "nickname", sortable : true, filter: true },
    ];

    // this.rowData = [
    //   { make: "Toyota", model: "Celica", price: 35000 },
    //   { make: "Ford", model: "Mondeo", price: 32000 },
    //   { make: "Porsche", model: "Boxster", price: 72000 },
    // ];

    const vm = this;
    for(let i=1; i<=100000; ++i) {
      vm.rowData.push(
        {
          no: i,
          name: this.namePool.charAt(Math.floor(Math.random() * 24)),
          age: Math.floor((Math.random() * 30)+20),
          nickname: this.namePool.charAt(Math.floor(Math.random() * 24)) + this.namePool.charAt(Math.floor(Math.random() * 24))
        },
      )
    }

  },
};
</script>