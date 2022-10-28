<script setup lang="ts">
import StarIcon from "./Icons/StarIcon.vue";
</script>

<template>
  <div class="buttons">
    <div><StarIcon /></div>
    <div><StarIcon /></div>
    <div><StarIcon /></div>
    <div><StarIcon /></div>
    <div><StarIcon /></div>
  </div>
</template>

<style scoped>
.buttons {
  margin-left: 2rem;
  display: flex;
  width: auto;
}

div {
  width: 1rem;
  height: 1rem;
}
</style>
