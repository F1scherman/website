<script setup>

import CommunityIcon from "@/components/icons/IconCommunity.vue";
import GithubIcon from "@/components/icons/IconGithub.vue";
import LinkedinIcon from "@/components/icons/IconLinkedin.vue";
import SummaryItem from "@/components/summary-item.vue";
import NavigationButtons from "@/components/navigation-buttons.vue";
</script>

<template>
  <NavigationButtons></NavigationButtons>
  <SummaryItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Social Media</template>
    <a href="https://www.linkedin.com/in/brayden-jonsson-03080b247/"><LinkedinIcon /></a>&nbsp;
    <a href="https://github.com/BraydenJonsson"><GithubIcon /></a>&nbsp;
    <a href="https://app.joinhandshake.com/stu/users/43736513"><img src="./components/icons/ImageHandshake.png"
                                                                    alt="Handshake" width="50"
                                                                    height="50"></a>&nbsp;

  </SummaryItem>
</template>