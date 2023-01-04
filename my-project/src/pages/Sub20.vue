<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <ul>
      <li>
        <h3>로컬스토리지</h3>
        <span @click="setLocalStorage(local.name, local.age)">저장</span>
        <span @click="getLocalStorage(local.name)">조회</span>
        <span @click="removeLocalStorage(local.name)">삭제</span>
        {{local01}}
      </li>
      <li>
        <h3>세션스토리지</h3>
        <span @click="setSessionStorage(session.name, session.age)">저장</span>
        <span @click="getSessionStorage(session.name)">조회</span>
        <span @click="removeSessionStorage(session.name)">삭제</span>
        {{session01}}
      </li>
      <li>
        <h3>쿠키</h3>
        <span @click="setCookie(cookie.name, cookie.age)">저장</span>
        <span @click="getCookie(cookie.name)">조회</span>
        <span @click="removeCookie(cookie.name)">삭제</span>
        {{cookie01}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      local:{
        id:1,
        name:'로컬',
        age:10
      },
      session:{
        id:2,
        name:'세션',
        age:30
      },
      cookie:{
        id:3,
        name:'쿠키',
        age:30
      },
      local01: '',
      session01: '',
      cookie01: ''
    }
  },
  methods:{    
    //로컬 저장
    setLocalStorage(key, value){
      localStorage.setItem(key, JSON.stringify(value)); 
    },
    //로컬 조회
    getLocalStorage(key){
      const res = JSON.parse(localStorage.getItem(key)); 
      return this.local01 = res
    },
    //로컬 삭제
    removeLocalStorage(key){
      localStorage.removeItem(key);
    },

    //세션 저장
    setSessionStorage(key, value){
      sessionStorage.setItem(key, JSON.stringify(value)); 
    },
    //세션 조회
    getSessionStorage(key){
      const res =  JSON.parse(sessionStorage.getItem(key)); 
      return this.session01 = res
    },
    //세션 삭제
    removeSessionStorage(key){
      sessionStorage.removeItem(key); 
    },

    //쿠키 저장
    setCookie(key, value, day=1){  
      let date = new Date(); 
      date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000); 
      document.cookie = key + "=" + JSON.stringify(value) + ";expires=" + date.toUTCString() + ";path=/";   
    },
    //쿠키 조회
    getCookie(key){
      let value = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)"); 
      value ? JSON.parse(value[2]) : null; 
      const res = JSON.parse(value[2])
      this.cookie01 = res
      return
    },
    //쿠키 삭제
    removeCookie(key){        
      let date = new Date(); 
      document.cookie = key + "= " + "; expires=" + date.toUTCString() + "; path=/"; 
    } 
  }
}
</script>

<style>

</style>