<script setup lang="ts">
import { onMounted, ref } from "vue";
import StarIcon from "./Icons/StarIcon.vue";

const buttons = ref<Element[]>([]);
let accent = getComputedStyle(document.documentElement).getPropertyValue(
  "--color-accent"
);
function setRating(rating: number) {
  console.log("color: " + accent);
  console.log("rating: " + rating);

  // Fill Stars
  for (let i = 0; i < rating; i++) {
    const el = buttons.value[i] as HTMLElement;
    const elfill = el.style.fill;
    if (elfill !== accent) {
      el.style.fill = accent;
      accent = el.style.fill;
    } else if (rating == 1) {
      el.style.fill = "none";
    }
  }

  // Unfill Stars
  for (let i = rating; i < buttons.value.length; i++) {
    const el = buttons.value[i] as HTMLElement;
    el.style.fill = "none";
  }
}

onMounted(() => {
  const buttonel = document.querySelectorAll(".buttons button");
  buttonel.forEach((button) => {
    buttons.value.push(button);
  });
});
</script>
<template>
  <p>Rate this Movie:</p>
  <div class="buttons">
    <button ref="b1" @click="setRating(1)"><StarIcon /></button>
    <button ref="b2" @click="setRating(2)"><StarIcon /></button>
    <button ref="b3" @click="setRating(3)"><StarIcon /></button>
    <button ref="b4" @click="setRating(4)"><StarIcon /></button>
    <button ref="b5" @click="setRating(5)"><StarIcon /></button>
    <button class="submit"></button>
  </div>
</template>

<style scoped>
button {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 1ch;
  padding: 0;
  border: none;
  background-color: transparent;
  fill: none;
  stroke: var(--color-accent);
  transition: all 0.4s ease-in-out;
}
</style>
