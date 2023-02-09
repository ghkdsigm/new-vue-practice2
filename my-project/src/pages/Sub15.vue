// App.vue 자식 컴포넌트 내용을 정의하는 상위 컴포넌트 
<template>
  <div>
    <child-slot-component>
      <template v-slot:header>
        <h1>여기에 Header의 내용을 넣을거에요 👶🏻</h1> <!-- 이곳을 주석 처리 하면? -->
      </template>
      <h3>이부분은 어디에 들어갈까요?</h3>
      <template v-slot:footer>
        <h1>Footer</h1>
      </template>
    </child-slot-component>
  </div>
</template>

<script>
import ChildSlotComponent from '@/components/common/ChildSlotComponent.vue'
export default {
  name: 'App',
  components: {
    ChildSlotComponent,
  }
}
</script>