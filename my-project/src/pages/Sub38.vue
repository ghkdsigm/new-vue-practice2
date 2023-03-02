<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <i class="fas fa-search">
      <input v-model="skillInput" @input="submitAutoComplete" type="text" style="margin-bottom : 15px;" />
    </i>
    <div class="autocomplete disabled">
      <div
          style="cursor: pointer"
          v-for="(res,i) in result"
          :key="i"
          >{{ res }}</div>
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
      }
    },
  }
}
</script>

<style>

</style>