<!-- eslint-disable no-unused-vars -->
<script setup lang="ts">
import { useEpisode } from "../episodestate";
const { prevEp, nextEp, epindex } = useEpisode();
</script>

<template>
  <section class="videoplayer">
    <div id="player"></div>
    <p class="playerdesc">Episode {{ epindex + 1 }}</p>
    <a class="prev" @click="prevEp">&lt; Last Episode</a>
    <a class="next" @click="nextEp">Next Episode > </a>
  </section>
</template>

<style>
.videoplayer {
  grid-area: player;
  display: grid;
  grid-template-areas:
    "video video video"
    "episode prev next";
  grid-template-columns: 3fr auto auto;
  column-gap: 1rem;
  margin-bottom: 1rem;
}
#player {
  grid-area: video;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}
.playerdesc {
  grid-area: episode;
}
.videoplayer a.prev {
  grid-area: prev;
  text-align: right;
}
.videoplayer a.next {
  grid-area: next;
  text-align: right;
}
</style>
