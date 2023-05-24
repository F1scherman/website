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
  margin-bottom: 0.4rem;
  margin-right: 10px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 500;
  width: 200px;
  height: 32px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  color: var(--color-text);
  transition: 0.5s;
}

@media(min-width: 1024px) {
  button {
    width: 128px;
  }
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