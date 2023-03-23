<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">
    <Bar />
    <Pie />
  </div>
</template>

<script>
import Bar from "@/components/analysis/Bar";
import Pie from "@/components/analysis/Pie";

export default {
  components: {
    Bar,
    Pie,
  },
};
</script>
