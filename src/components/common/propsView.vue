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
      <span>
        {{personInfo.id}}
      </span>
      <span>
        {{personInfo.name}}
      </span>
      <span>
        {{personInfo.age}}
      </span>
    </div>
    <div v-for="(item,i) in newpeople" :key="i">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    people: Array,
    personInfo:Object,
    newpeople: Array
  },
};
</script>

<style></style>
