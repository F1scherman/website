<script setup>
defineProps(['href'])
</script>

<template>
  <div class="button">
    <a id="button-link" :href="href">
      <button>
        <slot></slot>
      </button>
    </a>
  </div>
</template>

<style scoped>

slot {
  place-items: center;
  place-content: center;
  color: var(--color-text);
}

button {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  margin-right: 10px;
  width: 128px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);
  transition: 0.5s;
}

button:hover {
  background: var(--color-background-mute);
  color: #890000;
  border-color: var(--color-border-hover);
}

a:hover {
  background: var(--color-background);
}

.button {
  position: relative;
}
</style>