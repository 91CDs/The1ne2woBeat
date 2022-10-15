<script setup lang="ts">
import HomePosterItem from "./Items/HomePosterItem.vue";
</script>

<template>
  <section class="charactercard wrapper">
    <h2 class="f-800">Characters</h2>
    <section class="image-wrapper" v-dragscroll="true">
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
.charactercard h2 {
  font-size: 2.5rem;
  text-align: center;
}
.image-wrapper {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: 0;
}
.image-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--color-accent-mute);
}
</style>
