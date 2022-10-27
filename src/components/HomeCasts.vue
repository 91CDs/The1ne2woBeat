<script setup lang="ts">
import { onMounted, ref } from "vue";
import HomePosterItem from "./Items/HomePosterItem.vue";
const castno = ref<number>();
onMounted(() => {
  const posters = document.querySelectorAll(".poster");
  castno.value = posters.length;
});
</script>

<template>
  <section class="charactercard wrapper">
    <h1 class="f-800">
      MAIN CAST <span class="f-400">{{ castno }}</span>
    </h1>
    <section class="image-wrapper">
      <HomePosterItem src="/Abigail.png"> ATHENA TIVI as ABIGAIL </HomePosterItem>
      <HomePosterItem src="/Athena.png"> ELISHA SOROSORO as ATHENA </HomePosterItem>
      <HomePosterItem src="/Grace.png"> WYNZ BELTRAN as GRACE </HomePosterItem>
      <HomePosterItem src="/Jigs.png"> MIGUEL DORINGO as JIGS </HomePosterItem>
      <HomePosterItem src="/Kenji.png"> CHESTER ARIEM as KENJI </HomePosterItem>
      <HomePosterItem src="/Kirby.png"> LANCE GONZALES as KIRBY </HomePosterItem>
      <HomePosterItem src="/Lucas.png"> MARK BAGUIO as LUCAS </HomePosterItem>
      <HomePosterItem src="/Sara.png"> WYNZ BELTRAN as SARA </HomePosterItem>
    </section>
  </section>
</template>

<style>
section.charactercard {
  margin: 1rem 0;
}
.charactercard h1 {
  font-size: 1.6rem;
  display: flex;
  align-items: center;
}
.charactercard span {
  font-size: inherit;
  color: var(--color-text);
  padding: 0 1rem;
}
.image-wrapper {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: 0;
  scroll-behavior: smooth;
}
.image-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--color-accent-mute);
}
</style>
