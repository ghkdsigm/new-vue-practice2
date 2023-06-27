<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <i class="fas fa-search">
      <p>검색어를 입력하세요</p>
      <input v-model="skillInput" @input="submitAutoComplete" type="text" style="margin-bottom : 15px;" />
    </i>
    <div class="autocomplete disabled">
      <div
          style="cursor: pointer"
          v-for="(res,i) in result"
          :key="i"
          >{{ res }}
          <span @click="putData(res)" style="border:1px solid #eee; color:#ccc;">putname</span>
        </div>
    </div>
  </div>
</template>

<script>
import skills from "@/api/skills.js";

export default {
  data() {
    return {
      skillInput: null,
      result: null,
    };
  },
  methods: {
    submitAutoComplete() {
      const autocomplete = document.querySelector(".autocomplete");
      if (this.skillInput) {
        autocomplete.classList.remove("disabled");
        this.result = skills.filter((skill) => {
          return skill.match(new RegExp("^" + this.skillInput, "i"));
        });
      } else {
        autocomplete.classList.add("disabled");
        this.result = null
        this.skillInput = null
      }
    },
    putData(res) {
      if(res !== "") {
        this.skillInput = res
        this.result = null
      }
    }
  }
}
</script>

<style>

</style>