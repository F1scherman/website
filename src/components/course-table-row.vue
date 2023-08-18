<script setup>

</script>

<template>
  <tr>
    <td><slot name="class-name"></slot></td>
    <td class="grade"><slot name="credits"></slot></td>
    <td class="grade"><slot name="letter-grade"></slot></td>
  </tr>
</template>

<style scoped>
th, td {
  border: 1px solid var(--color-border);
}
.grade {
  text-align: center;
}
</style>