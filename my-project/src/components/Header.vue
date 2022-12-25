<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <router-link to="/">홈</router-link>
    <router-link to="/sub01">슬롯</router-link>
    <router-link to="/sub02">props</router-link>
    <router-link to="/sub03">emit</router-link>
    <router-link to="/sub04">슬롯업그레이드</router-link>
    <router-link to="/sub05">탭</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  display: inline-block;
  margin: 0 15px;
  color: #fff !important;
}
</style>
