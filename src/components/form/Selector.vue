<template>
  
</template>

<script>
export default {
    data() {
        return{
            options: [      
            {id: 1, labels: 'foo'},
            {id: 3, labels: 'bar'},
            {id: 2, labels: 'baz'},
            ],
            selected: ''
        }
    },
    computed: {
        selectedID: function () {
        return this.selected.id;
        }
    }
}
</script>

<style>

</style>