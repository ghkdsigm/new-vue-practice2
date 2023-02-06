<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>    
    <div>
      <div>
        <span>mixin 토글</span>
        <span>{{message}}</span>
        <button @click="ActBt">인사 버튼</button>
      </div>

      <div>
        <span>일반 클릭 이벤트 메서드 토글</span>
        <span :class="changeData ? 'redcolor' : 'bluecolor'">
          변경 컬러
        </span>
        <button @click="toggleAction">토글클릭</button>        
      </div>

      <div>
        <span>{{ count }}</span>
        <span>{{ dod }}</span>
      </div>
    </div>

    <!-- <div>
      <router-view />
    </div> -->
  </div>
</template>

<script>
import Mixin from "@/utils/mixin.js";

export default {
  //name: "Mixin",
  mixins: [Mixin],
  data() {
    return {
      changeData: false,
      count:0
    };
  },
  methods: {
    
  },
};
</script>

<style>
.redcolor {color:Red;}
.bluecolor {color:blue;}
button {border:1px solid #ccc; padding:5px;}
</style>
