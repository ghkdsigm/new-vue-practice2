// 자식 컴포넌트의 데이터 user 바인드
<template>
  <div>
    <slot name="myName" v-bind:user="user">
        <input :value="user.lastName">
    </slot>
  </div>
</template>
<script>
  export default {
      name: 'ScopeSlotComponent',
      data() {
          return {
              user: {
                  firstName: 'Sunny',
                  lastName: 'Kim'
              },
          }
      }
  }
</script>