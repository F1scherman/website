<script setup>
import DocumentationIcon from "@/components/icons/IconDocumentation.vue";
import SummaryItem from "@/components/summary-item.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <main>
    <SummaryItem>
      <template #heading>Education</template>

      I graduated from <a href="https://lphs.alpineschools.org/">Lone Peak High School</a> in 2022, where
      I was recognized as Salutatorian. I also was recognized as the Computer Technology <a href="http://www.sterlingscholar.org/">
      Sterling Scholar</a>, and went on to be recognized as a finalist in the Wasatch Front region. I also
      received the Distinguished Student Award from the BYU Math Department.
      <br>
      I currently attend the University of Utah, pursuing an Honors Computer Science BS with a Math minor
      and a Physics minor. My expected graduation date is Fall 2025, but I also plan to pursue the BS/MS
      program with a graduation date of Spring 2027. I participate in the Engineering Scholars program, as
      well as in <a href="https://getinvolved.utah.edu/organization/gamecraft">Gamecraft</a> Game Jams.
    </SummaryItem>
  </main>
</template>
