<script setup lang="ts">
import StarIcon from "./Icons/StarIcon.vue";
</script>

<template>
  <div class="buttons">
    <button ref="b1"><StarIcon /></button>
    <button ref="b2"><StarIcon /></button>
    <button ref="b3"><StarIcon /></button>
    <button ref="b4"><StarIcon /></button>
    <button ref="b5"><StarIcon /></button>
  </div>
</template>

<style scoped>
.buttons {
  margin-left: 2rem;
}
button {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 1ch;
  padding: 0;
  border: none;
  background-color: transparent;
  fill: none;
  transition: all 0.4s ease-in-out;
}
</style>
