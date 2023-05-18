<script setup>
import Introduction from './components/index-introduction.vue'
import Summaries from './components/index-summaries.vue'
import Button from "./components/button.vue";

import { ref } from "vue";
const education = ref("education.html");
</script>

<template>
  <header>
    <Button :href="education"> Education </Button>
    <div class="wrapper">
      <Introduction />
    </div>
  </header>

  <main>
    <Summaries />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: normal;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
