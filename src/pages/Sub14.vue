<template>
  <div>
    <!--slot1-->
    <scope-slot-component>
      <template v-slot:myName="slotProps"> <!-- slotProps: 자식에서 슬롯 요소에서 바인딩 시킨 user 데이터를 가지고 있음 -->
        <input :value="slotProps.user.lastName">
      </template>
    </scope-slot-component>
    <!--slot2-->
    <MyComponent>
      <!-- Use explicit default slot -->
      <template #header="{ message }">
        <p>{{ message }}</p>
      </template>

      <template #footer="{ footermessage }">
        <p>Here's some contact info</p>
        {{footermessage}}
      </template>
    </MyComponent>
    <!--slot3-->
    <MyComponent2>
      <template slot-scope="fooProps">
        <div>{{ fooProps }}</div>
      </template>
    </MyComponent2>
  </div>
</template>

<script>
import ScopeSlotComponent from '@/components/common/ScopeSlotComponent.vue'
import MyComponent from '@/components/common/MyComponent.vue'
import MyComponent2 from '@/components/common/MyComponent2.vue'

export default {
  name: 'App',
  data(){
    return {
      // message:'abcd',
      // footermessage:'efgh'
    }
  },
  components: {
    ScopeSlotComponent,
    MyComponent,
    MyComponent2
  }
}
</script>