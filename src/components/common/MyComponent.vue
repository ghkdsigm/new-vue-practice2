<template>
  <div>
    <slot name="header" :message="uerm">

    </slot>
    <slot name="footer" :footermessage="ferm">
        
    </slot>
  </div>
</template>

<script>
export default {
    data(){
        return {
            uerm:'1',
            ferm:'2'
        }
    },
}
</script>

<style>

</style>