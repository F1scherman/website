<script setup>
import SummaryItem from "@/components/summary-item.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <main>
    <SummaryItem>
      <template #heading>High School</template>

      I graduated from <a href="https://lphs.alpineschools.org/">Lone Peak High School</a> in 2022. I was recognized as
      one of two Salutatorians upon graduation (out of ~800 graduating students), computed by a combination metric of
      weighted GPA and ACT score. I received other recognitions, such as the Distinguished Student award from the BYU
      Mathematics department and Finalist in the <a href="http://www.sterlingscholar.org/">Wasatch Front Sterling Scholar</a>
      competition within the Computer Technology category. During high school, I participated in the Engineering/VEX Robotics
      Team, the Math Team, National Honors Society, and the Crusader Club.
    </SummaryItem>
    <SummaryItem>
      <template #heading>College</template>
      I currently attend the University of Utah, pursuing an Honors Computer Science BS with a Math minor
      and a Physics minor. I am currently projected to graduate in December of 2025, but pending application and
      acceptance into the BS/MS program, that will push my graduation date back until May of 2027. I plan to formally focus
      on Programming Languages, Robotics, Artificial Intelligence, Information, and Theory by receiving the
      <a href="https://handbook.cs.utah.edu/2022-2023/CS/Academics/tracks.php">corresponding track certificates</a>. In addition,
      I plan to informally focus on Computer Graphics within the BS degree. I participated in the Engineering Scholars program
      as a freshman through the Price College of Engineering, and currently participate in the
      <a href="https://getinvolved.utah.edu/organization/gamecraft">Gamecraft</a> EAE organization, especially through their
      monthly game jams, and I am a current member of the Alpha Alpha Alpha First-Generation Honors Society.
    </SummaryItem>
  </main>
</template>
