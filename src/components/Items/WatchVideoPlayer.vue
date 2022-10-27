<!-- eslint-disable no-unused-vars -->
<script setup lang="ts">
import YoutubePlayer from "youtube-player/dist/index.js";
import { onMounted, ref } from "vue";
const src: string[] = [
  "jNQXAC9IVRw",
  "1JNmz17gnMw",
  "jNQXAC9IVRw",
  "1JNmz17gnMw",
  "jNQXAC9IVRw",
];

const epindex = ref<number>(0);
function nextEp() {
  if (epindex.value < src.length - 1) epindex.value = epindex.value + 1;
  changeLink();
  console.log(`clicked next: ${epindex.value}`);
}
function prevEp() {
  if (epindex.value > 0) epindex.value = epindex.value - 1;
  changeLink();
  console.log(`clicked prev: ${epindex.value}`);
}

let ytplayer: ReturnType<typeof YoutubePlayer>;
onMounted(() => {
  ytplayer = YoutubePlayer("player", {
    width: 1024,
    height: 512,
    videoId: src[epindex.value],
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  });
});

function changeLink() {
  ytplayer.cueVideoById(src[epindex.value]);
}
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
  display: grid;
  grid-template-areas:
    "video video video"
    "episode prev next";
  grid-template-columns: 5fr 1fr 1fr;
  column-gap: 1rem;
  margin-bottom: 1rem;
}
#player {
  grid-area: video;
  width: 100%;
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
