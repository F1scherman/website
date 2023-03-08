<script setup>
import SummaryItem from './SummaryItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <SummaryItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Education</template>

    I graduated from Lone Peak High School in 2022, where I was recognized as Salutatorian. I also was
    recognized as the Computer Technology Sterling Scholar, and went on to be recognized as a finalist
    in the Wasatch Front region. I also received the Distinguished Student Award from the BYU Math
    Department.
    <br>
    I currently attend the University of Utah, pursuing an Honors Computer Science BS with a Math minor
    and a Physics minor. My expected graduation date is Fall 2025, but I also plan to pursue the BS/MS
    program with a graduation date of Spring 2027. I participate in the Engineering Scholars program, as
    well as in Gamecraft Game Jams.
  </SummaryItem>
  <SummaryItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Work Experience</template>

    I currently work for Wasatch Tutors in Sandy, working with high school students in both subject
    and ACT tutoring. I also have previous experience working as a cashier for my local Walmart and as
    a tutor for my high school.
  </SummaryItem>
  <SummaryItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Projects</template>

    I've worked on several projects over the years, and the current public ones are:
    <br>
    -Gamecraft Game Jam December 2022 Submission: "Fridge Frenzy"
    <br>
    -Gamecraft Game Jam January 2023 Submission: "Trimmed for Travel"
  </SummaryItem>
</template>
