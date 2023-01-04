<template>
  <div>
    <div v-for="(item, index) in people" :key="index">
      <table>
        <tbody>
          <tr>
            <td>
              {{ item.id }}
            </td>
            <td>
              {{ item.name }}
            </td>
            <td>
              {{ item.age }}
            </td>
          </tr>
        </tbody>
      </table>      
    </div>
    <div>
        {{personInfo.name}}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    people: Array,
    personInfo:Object
  },
};
</script>

<style></style>
