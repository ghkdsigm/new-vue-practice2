<template>
  <div>
    <textarea :value="token"></textareaid=>
  </div>
</template>

<script>
export default {
    data(){
        return{
            token:'',
            msg: false
        }
    },
    created(){
        this.token = this.$store.state('token')
        if(this.token !== null){
            this.msg = true
        } else {
            this.msg = false
        }
    }
}
</script>

<style>

</style>