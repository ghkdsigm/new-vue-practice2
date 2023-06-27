<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div 
      v-for="( item, index ) in items" 
      :key="index"
      v-bind:class="[ item.purchased? 'done' : '' ]" 
      @click="toggleFn(item)"
    >
      {{ item.subject }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          subject: '10 pens',
          purchased: false,
          status: true,

        },
        {
          subject: '20 bags',
          purchased: true,
          status: false,
        },
        {
          subject: '5 coffee',
          purchased: false,
          status: true,
        },
        {
          subject: '8 towels',
          purchased: true,
          status: false,
        },
      ],
    }    
  },
  methods: {
    toggleFn(item) {
      item.purchased = !item.purchased
    }
  }
}
</script>

<style scoped>
  .done {
    text-decoration: line-through;
    color: #828282;
  }

  .important {
    font-weight: bold;
  }

  .ready {
    font-weight: bold;
    color: red;
  }
</style>