<script setup>

import GithubIcon from "@/components/icons/IconGithub.vue";
import LinkedinIcon from "@/components/icons/IconLinkedin.vue";
import SummaryItem from "@/components/summary-item.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <SummaryItem>
    <div style="text-align: center;">
    <a href="https://www.linkedin.com/in/brayden-jonsson-03080b247/"><LinkedinIcon /></a>&nbsp;
    <a href="https://github.com/BraydenJonsson"><GithubIcon /></a>&nbsp;
    <a href="https://app.joinhandshake.com/stu/users/43736513"><img src="./components/icons/ImageHandshake.png"
                                                                    alt="Handshake" width="200"
                                                                    height="200"></a>&nbsp;
    </div>
  </SummaryItem>
</template>