<script setup>

import SummaryItem from "@/components/summary-item.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <SummaryItem>
    <template #heading>404: Not Found</template>
    We couldn't find the file you were looking for. Use the buttons above to navigate back to main pages of the site.
    <br>
    <br>
    Contact Brayden (preferably on Github) if you think something is wrong with the site.
  </SummaryItem>
</template>