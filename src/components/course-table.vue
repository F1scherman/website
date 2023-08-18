<script setup>

</script>

<template>
  <table>
    <tr>
      <th><slot name="semester"></slot></th>
      <th class="grade">Credits</th>
      <th class="grade">Grade</th>
    </tr>
    <slot></slot>
  </table>
</template>

<style scoped>
table, th, td {
  border: 1px solid var(--color-border);
}
table {
  width: 300px;
  transition: 0.5s;
}
@media(min-width: 475px) {
  table {
    width: 750px;
  }
}
.grade {
  text-align: center;
  width: 75px;
}
</style>