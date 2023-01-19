<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Header />
    </v-app-bar>

    <v-main class="mt-5">
      <router-view></router-view>
    </v-main>

    <v-footer style="justify-content:center; padding:15px 0;" >
      <BackToHome />
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import BackToHome from './components/common/BackToHome.vue';

export default {
  name: 'App',

  components: {
    Header,
    BackToHome
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.v-toolbar {max-width:auto;}
</style>
