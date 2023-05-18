<script setup>

import SummaryItem from "@/components/summary-item.vue";
import EcosystemIcon from "@/components/icons/IconEcosystem.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <SummaryItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Projects</template>

    I've worked on several projects over the years, and the current public ones are:
    <br>
    -<a href="https://guywithapc.itch.io/fridge-frenzy">Fridge Frenzy</a>
    <br>
    -<a href="https://guywithapc.itch.io/trimmed-for-travel">Trimmed for Travel</a>
    <br>
    -<a href="https://guywithapc.itch.io/redo-rhythm">Redo Rhythm</a>
    <br>
    I am credited as both Brayden Jonsson and F1scherman on projects I've worked on.
  </SummaryItem>
</template>