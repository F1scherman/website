<script setup>
import {ref} from "vue";
import MyButton from "./nav-button.vue";

const education = ref("education.html");
const experience = ref("experience.html");
const projects = ref("projects.html");
const media = ref("media.html");
const home = ref("index.html");
</script>

<template>
  <div class="buttons">
    <MyButton :href="education">
      Education
    </MyButton>
    <MyButton :href="experience">
      Experience
    </MyButton>
    <MyButton :href="home">
      Home
    </MyButton>
    <MyButton :href="projects">
      Projects
    </MyButton>
    <MyButton :href="media">
      Social Media
    </MyButton>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  flex-direction: row;
  place-items: flex-start;
  place-self: center;
  place-content: center;
  /*grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 144px;
  grid-row-gap: 0px;*/
}
</style>