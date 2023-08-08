<script setup>
import {ref} from "vue";
import MyButton from "./nav-button.vue";

// NOTE: In GH-Pages, these links work as intended, but in dev environments they may not.
// This results in all buttons returning to the homepage during dev
// This can be bypassed by directly typing in links during development
// This might be fixable using Jekyll in GH-Pages in the future
const education = ref("education");
const experience = ref("experience");
const projects = ref("projects");
const media = ref("media");
const home = ref("");
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
  flex-wrap: wrap;
  /*grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 144px;
  grid-row-gap: 0px;*/
}
</style>