<template>
  <v-card>
    <v-card-title>
      <slot name="title"></slot>
    </v-card-title>
    <v-card-text>
      <slot name="content"></slot>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="negative-button"></slot>
      <slot name="positive-button"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>