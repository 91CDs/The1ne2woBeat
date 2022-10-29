<script setup lang="ts">
import { onMounted, ref } from "vue";
import anime from "animejs/lib/anime.es.js";

const abouttitle = ref<HTMLInputElement | null>(null);
function animate() {
  anime({
    targets: ".one",
    translateX: -100,
    translateY: 100,
  });
  anime({
    targets: ".two",
    translateX: 100,
    translateY: -100,
  });
}
function animateR() {
  anime({
    targets: ".one",
    translateX: 0,
    translateY: 0,
  });
  anime({
    targets: ".two",
    translateX: 0,
    translateY: 0,
  });
}
onMounted(() => {
  abouttitle.value!.addEventListener("mouseover", animate);
  abouttitle.value!.addEventListener("mouseout", animateR);
});
</script>

<template>
  <section class="abouttitle">
    <h2 class="bgelement f-800">
      <span class="bgelement one">1</span>2<span class="bgelement two">B</span>
    </h2>
    <h1 class="f-800" ref="abouttitle">TheOneToBeat Productions</h1>
  </section>
</template>

<style>
.abouttitle {
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.abouttitle::after {
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
  height: calc(90vh + 20rem);
  background-image: linear-gradient(to right, rgba(14, 34, 9, 0.5), rgba(44, 11, 11, 0.5)),
    url("/12BPROD.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;
  transform: translate3d(0px, 0px, -3px) scale(2.6);
}
.abouttitle h1 {
  font-size: min(13vw, 4rem);
  text-align: center;
  padding: 2rem;
  color: var(--color-heading);
  animation: load-title 1s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.abouttitle h1:hover {
  font-size: min(14vw, 5rem);
}
span.bgelement {
  color: inherit;
  font-weight: inherit;
  display: inline-block;
}
.abouttitle h2 {
  position: absolute;
  padding-bottom: 1rem;
  font-size: min(50vw, 35rem);
  color: var(--color-text-mute);
  transform: translate3d(0px, 0px, -1px) scale(1.6);
  pointer-events: none;
  animation: load-desc 1s ease-in-out;
}
</style>
