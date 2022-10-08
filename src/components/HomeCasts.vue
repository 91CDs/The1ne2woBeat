<script setup lang="ts">
import HomePosterItem from "./Items/HomePosterItem.vue";
</script>

<template>
  <section class="charactercard wrapper">
    <h2 class="f-800">Characters</h2>
    <section class="image-wrapper" v-dragscroll="true">
      <HomePosterItem src="https://picsum.photos/1080/1920">
        KENJI as CHESTER
      </HomePosterItem>
      <HomePosterItem src="https://picsum.photos/1080/1920">
        Kenji as Chester
      </HomePosterItem>
      <HomePosterItem src="https://picsum.photos/1080/1920">
        Kenji as Chester
      </HomePosterItem>
      <HomePosterItem src="https://picsum.photos/1080/1920">
        Kenji as Chester
      </HomePosterItem>
      <HomePosterItem src="https://picsum.photos/1080/1920">
        Kenji as Chester
      </HomePosterItem>
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
