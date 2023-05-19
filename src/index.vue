<script setup>
import Introduction from './components/index-introduction.vue'
import NavigationButtons from "./components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <header>
    <div class="wrapper">
      <Introduction />
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
