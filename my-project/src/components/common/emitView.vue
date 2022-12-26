<template>
  <div>
    <v-btn @click="emitData" elevation="2">emit올리기</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          id: 1,
          name: '황승현',
          age: 25,
        },
        {
          id: 2,
          name: '설인아',
          age: 21,
        },
        {
          id: 3,
          name: '민지',
          age: 20,
        },
      ],
    };
  },
  methods: {
    emitData() {
      this.$emit('updateData', this.people);
    },
  },
};
</script>

<style></style>
