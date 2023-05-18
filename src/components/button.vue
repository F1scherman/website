<script setup>
defineProps(['href'])
</script>

<template>
  <div class="button">
    <a id="button-link" :href="href">
      <button>
        <div class="text">
        <slot></slot>
        </div>
      </button>
    </a>
  </div>
</template>

<style scoped>

.text {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--color-text);
}

button {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  width: 100px;
  height: 32px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
}

@media (min-width: 1024px) {
  button {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
  }
}
</style>