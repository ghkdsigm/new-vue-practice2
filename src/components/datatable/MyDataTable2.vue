<!-- eslint-disable vue/no-useless-template-attributes -->
<template>
  <div>
    <v-btn>
        hello2
    </v-btn>
    <v-data-table
        :items="items"
        :headers="headers"
    >
        <template v-for="info in customSlotInfo" v-slot[info.slotName]="{ item }">
        <slot :name="`${info.name}_custom`" v-bind:item="item" />
        </template>
    </v-data-table>
  </div>
</template>
<script>
  export default {
    name: 'MyDataTable2',
    props: {
      items: Array,
      customSlotInfo: Array, 	
    },
  }
</script>