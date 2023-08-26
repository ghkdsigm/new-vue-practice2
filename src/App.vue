BackToHome<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <Header />
    </v-app-bar>

    <v-main class="mt-5">
      <router-view></router-view>
    </v-main>

    <v-footer v-if="this.$route.name !== this.routeHome" class="ftooer">
      <BackToHome style="padding:10px 0;" ></BackToHome>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import BackToHome from './components/common/BackToHome.vue';
import defualtMeta from '@/utils/meta';

export default {
  name: 'App',
  metaInfo: {
    meta: defualtMeta,
  },
  components: {
    Header,
    BackToHome
  },
  data: () => ({
    //
    routeHome: "home"
  }),
};
</script>

<style>
.v-toolbar {max-width:auto;}
.ftooer {justify-content:center;}
.ftooer:hover {background-color: #ccc;}
</style>
