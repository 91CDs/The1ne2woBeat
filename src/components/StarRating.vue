<script setup lang="ts">
import { onMounted, ref } from "vue";
import StarIcon from "./Icons/StarIcon.vue";

const buttons = ref<Element[]>([]);
function setRating(rating: number) {
  for (let i = 0; i < rating; i++) {
    const el = buttons.value[i] as HTMLElement;
    const elfill = el.style.fill;
    if (elfill !== "rgb(0, 189, 142)") {
      el.style.fill = "rgb(0, 189, 142)";
    } else if (rating == 1) {
      el.style.fill = "none";
    }
  }
  for (let i = rating; i < buttons.value.length; i++) {
    const el = buttons.value[i] as HTMLElement;
    const elfill = el.style.fill;
    if (elfill == "rgb(0, 189, 142)") {
      el.style.fill = "none";
    }
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
  <div class="buttons">
    <button ref="b1" @click="setRating(1)"><StarIcon /></button>
    <button ref="b2" @click="setRating(2)"><StarIcon /></button>
    <button ref="b3" @click="setRating(3)"><StarIcon /></button>
    <button ref="b4" @click="setRating(4)"><StarIcon /></button>
    <button ref="b5" @click="setRating(5)"><StarIcon /></button>
  </div>
</template>

<style scoped>
.buttons {
  margin-left: 2rem;
}
button {
  width: 1.6rem;
  height: 1.6rem;
  border: none;
  background-color: transparent;
  fill: none;
  transition: all 0.4s ease-in-out;
}
</style>
