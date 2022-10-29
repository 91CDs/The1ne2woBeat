<script setup lang="ts">
import PlayIcon from "./Icons/PlayIcon.vue";
const data = defineProps<{
  imagesrc: string;
}>();
</script>

<template>
  <div class="overlay" tabindex="0">
    <img :src="data.imagesrc" />
    <div id="play"><PlayIcon /></div>
  </div>
</template>

<style>
.overlay {
  grid-area: thumbnail;
}
.overlay img {
  aspect-ratio: 16 / 9;
  width: 100%;
}
.overlay #play {
  width: 2rem;
  height: 2rem;
  position: absolute;
  z-index: 5;
  left: calc(50% - 1rem);
  top: calc(50% - 1rem);
  right: 0;
  bottom: 0;
  fill: var(--color-accent);
  opacity: 0;
  transition: all 0.2s ease-in-out;
}
.overlay:focus img,
.overlay:hover img {
  filter: brightness(50%);
}
.overlay:focus #play,
.overlay:hover #play {
  opacity: 1;
}

@media (min-width: 1024px) {
  .overlay img {
    height: 6rem;
    aspect-ratio: 4 / 3;
    width: auto;
  }
  .overlay #play {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
