<script setup>
defineProps({
})
import QRIcon from './icons/IconQRCode.vue'
</script>

<template>
  <div class="greetings">
    <h1 class="red">Brayden Jonsson</h1>
    <h3>
      A student at the University of Utah
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

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.QR {
  top: calc(50% - 25px);
  left: -26px;
  position: absolute;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  width: 50px;
  height: 50px;
}
</style>
