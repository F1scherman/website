<script setup>
import SummaryItem from './SummaryItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import LinkedinIcon from './icons/IconLinkedin.vue'
import GithubIcon from './icons/IconGithub.vue'
</script>

<template>
  <SummaryItem>
    <template #icon>
      <DocumentationIcon />
    </template>
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
  <SummaryItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Work Experience</template>

    I currently work for <a href="https://www.wasatchtutors.com/">Wasatch Tutors</a> in Sandy, working
    with high school students in both subject and ACT tutoring. I also have previous experience working
    as a cashier for my local Walmart and as a tutor for my high school.
  </SummaryItem>
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
  <SummaryItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Social Media</template>
    <a href="https://www.linkedin.com/in/brayden-jonsson-03080b247/"><LinkedinIcon /></a>&nbsp;
    <a href="https://github.com/BraydenJonsson"><GithubIcon /></a>&nbsp;
    <a href="https://app.joinhandshake.com/stu/users/43736513"><img src="./icons/ImageHandshake.png"
                                                                    alt="Handshake" width="50"
                                                                    height="50"></a>&nbsp;

  </SummaryItem>
</template>
