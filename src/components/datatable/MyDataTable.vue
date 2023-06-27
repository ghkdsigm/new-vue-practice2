<template>
  <div>
    <v-btn>
        hello1
    </v-btn>
    <v-data-table
        :items="items"
        :headers="headers"
    />
  </div>
</template>
<script>
  export default {
    name: 'MyDataTable',
    props: {
      items: Array,
      headers: Array,
    },
  }
</script>