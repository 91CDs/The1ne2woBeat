<script setup lang="ts">
import episodedata from "../static/Episodes.json";
import PlayIcon from "./Icons/PlayIcon.vue";
</script>

<template>
  <div class="episode" :key="index" v-for="(episode, index) in episodedata">
    <div class="overlay" tabindex="0">
      <img :src="episode.epimg" />
      <div id="play"><PlayIcon /></div>
    </div>
    <h2 class="eptitle" tabindex="0">
      <span class="f-800">{{ episode.eptitle }}</span>
    </h2>
    <p class="epdetails">{{ `${episode.epduration} min` }}</p>
    <p class="epdesc">{{ episode.epdesc }}</p>
  </div>
</template>

<style>
/* EPISODE */
.episode {
  margin-bottom: 2rem;
  display: grid;
  grid-auto-columns: auto;
  grid-template-areas:
    "image image"
    "title details"
    "desc desc";
  column-gap: 1.5rem;
}
.episode img {
  aspect-ratio: 16 / 9;
  width: min(80vw, var(--max-length));
}
.overlay {
  grid-area: image;
}
#play {
  width: 2rem;
  height: 2rem;
  position: absolute;
  z-index: 5;
  left: calc(50% - 1rem);
  top: calc(50% - 1rem);
  right: 0;
  bottom: 0;
  opacity: 0;
  fill: var(--color-accent);
  transition: all 0.2s ease-in-out;
}
.episode h2 {
  font-size: 1.5rem;
  text-align: left;
  margin-top: 3rem;
  grid-area: title;
  width: fit-content;
}
.episode h2 span {
  line-height: 1.3;
  background-image: linear-gradient(to right, var(--color-accent), wheat);
  background-position: 0% 100%;
  background-size: 100% 5px;
  background-repeat: no-repeat;
  transition: all 0.2s ease-out;
}
.episode .epdesc {
  grid-area: desc;
}
.episode .epdetails {
  display: inline-block;
  margin-top: 3rem;
  grid-area: details;
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
  .episode {
    grid-template-areas:
      "image title details"
      "image desc desc";
  }
  .episode img {
    height: 11rem;
    width: auto;
  }
  .episode h2 {
    background-image: linear-gradient(to right, var(--color-accent), wheat);
    background-position: 0% 60%;
    background-size: 0% 7px;
    background-repeat: no-repeat;
    transition: all 0.2s ease-out;
  }
  .episode h2 span {
    background-size: 0% 7px;
  }
  .episode h2:focus,
  .episode h2:hover {
    transform: translate(0, -5px);
    background-size: 100% 7px;
  }
}
</style>
