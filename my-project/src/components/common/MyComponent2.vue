<template>
  <div>
    <slot :fooProps="fooProps"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      fooProps: {
        id: 1,
        msg: 'Hello',
      } 
    }
  },
}
</script>

<style>

</style>