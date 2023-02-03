<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div style="width:100%;">    
    <v-card style="background: transparent; box-shadow: unset;">
      <v-tabs
        background-color="transparent"
        show-arrows
      >
        <v-tab>
          <router-link to="/">홈</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub01">슬롯</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub02">props</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub03">emit</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub04">슬롯업그레이드</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub05">탭</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub06">게임셀렉트</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub07">유효성</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub08">API</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub09">vuetifyTable01</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub10">vuetifyTable02</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub11">vuetifyTable03</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub12">computed&watch</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub13">computed</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub14">Scoped Slots</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub15">Named Slots</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub16">Bay API</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub17">Params</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub18">Paging</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub19">VuetifyTable</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub20">Cookie&Session/Local Storage</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub21">file 첨부</router-link>
        </v-tab> 
        <v-tab>
          <router-link to="/sub22">mixin</router-link>
        </v-tab> 
        <v-tab>
          <router-link to="/sub23">CKEditor</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub24">vee-validator</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub25">admin-event-config 예제</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub26">select</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub27">radio, checkbox 등등</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/sub28">excel</router-link>
        </v-tab>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
</script>

<style>
a {
  display: inline-block;
  color: #fff !important;
  font-size:12px;
  text-decoration: none;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-application .transparent {
    background-color: transparent!important;
    border-color: transparent!important;
}
</style>
