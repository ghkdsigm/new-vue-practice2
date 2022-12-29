import Vue from 'vue';
import Vuex from 'vuex';
// import {
//   getAuthFromCookie,
//   getUserFromCookie,
//   getNickFromCookie,
//   saveAuthToCookie,
//   saveUserToCookie,
//   saveNickToCookie,
// } from '@/utils/cookies';
// import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    gamelist:''
  },
  getters: {
    // isLogin(state) {
    //   return state.username !== '';
    // },
  },
  mutations: {    
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
    setGameList(state, games){
      state.gamelist = games
    }
  },
//   actions: {
//     async LOGIN({ commit }, userData) {
//       const { data } = await loginUser(userData);
//       console.log(data.token);
//       commit('setToken', data.token);
//       commit('setUsername', data.user.username);
//       commit('setNickname', data.user.nickname);
//       saveAuthToCookie(data.token);
//       saveUserToCookie(data.user.username);
//       saveNickToCookie(data.user.nickname);
//       this.logMessage = alert(`${data.user.nickname}님 환영합니다`);
//       return data;
//     },
//   },
});