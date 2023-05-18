<script setup>
import QRIcon from './icons/IconQRCode.vue'
</script>

<template>
  <div class="greetings">
    <h1 class="red">Brayden Jonsson</h1>
    <h3>
      A student at the <a href="https://www.utah.edu/">University of Utah</a>
      <br>
      This site is built using Vue, and is based on the Vue default build.
    </h3>
    <slot class="QR">
      <QRIcon />
    </slot>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: 0px;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
