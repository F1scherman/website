<script setup>
import Introduction from './components/index-introduction.vue'
import NavigationButtons from "./components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <br>
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
