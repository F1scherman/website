<script setup>

import SummaryItem from "@/components/summary-item.vue";
import ToolingIcon from "@/components/icons/IconTooling.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <SummaryItem>
    <template #heading>Work Experience</template>

    I currently work for <a href="https://www.wasatchtutors.com/">Wasatch Tutors</a> in Sandy, working
    with high school students in both subject and ACT tutoring. I also have previous experience working
    as a cashier for my local Walmart and as a tutor for my high school.
  </SummaryItem>
</template>