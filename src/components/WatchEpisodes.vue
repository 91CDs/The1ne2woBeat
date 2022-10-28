<script setup lang="ts">
import episodedata from "../static/Episodes.json";
import EpisodeThumbnail from "./WatchEpisodeThumbnail.vue";
</script>

<template>
  <section class="episodes">
    <h1 class="f-800">Episodes <span>5</span></h1>
    <div class="episode" :key="index" v-for="(episode, index) in episodedata">
      <EpisodeThumbnail :imagesrc="episode.epimg" />
      <div class="f-800 epnumber">{{ index + 1 }}</div>
      <h2 class="eptitle" tabindex="0">
        <span class="f-800">{{ episode.eptitle }}</span>
      </h2>
      <p class="epdetails">{{ `${episode.epduration} min` }}</p>
      <p class="epdesc">{{ episode.epdesc }}</p>
    </div>
  </section>
</template>

<style>
/* EPISODE */
.episodes {
  grid-area: episode;
}
.episodes > h1 {
  font-size: 1.6rem;
  padding: 2rem;
  text-transform: uppercase;
}
.episodes > h1 > span {
  color: var(--color-text);
  margin: 0 1rem;
}
.episode {
  display: grid;
  grid-template-areas:
    "thumbnail thumbnail"
    "eptitle epdetails"
    "epdesc epdesc";
  margin-bottom: 1rem;
  row-gap: 0.5rem;
}

.episode h2 {
  grid-area: eptitle;
}

.episode h2 span {
  background-image: linear-gradient(to right, var(--color-accent), wheat);
  background-position: 0% 100%;
  background-size: 100% 5px;
  background-repeat: no-repeat;
  transition: all 0.2s ease-out;
}

.episode p.epdetails {
  grid-area: epdetails;
  line-height: 1;
}

.episode p.epdesc {
  grid-area: epdesc;
  text-indent: 1rem;
}

.epnumber {
  display: none;
}

@media (min-width: 600px) {
  .episode {
    grid-template-areas:
      "thumbnail eptitle epdetails"
      "thumbnail epdesc epdesc";
    grid-template-columns: 1fr 2fr;
    column-gap: 1.25rem;
    row-gap: 0;
  }
  .episode p.epdetails {
    padding-top: 2rem;
  }
  .episode p {
    font-size: 1rem;
  }
  .episode h2 {
    padding-top: 2rem;
    font-size: 1.6rem;
  }
  .epnumber {
    display: block;
    position: absolute;
    left: 28%;
    z-index: -10;
    font-size: 10vw;
    background-image: linear-gradient(
      to bottom,
      var(--color-accent-mute) 27%,
      rgba(238, 1, 255, 0.384) 100%
    );
    background-size: 100% 50%;
    background-position: center;
    background-repeat: no-repeat;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}

@media (min-width: 1024px) {
  .episodes {
    border: 2px solid var(--color-background-soft);
    border-radius: 1rem;
    overflow: hidden;
  }
  .episodes > h1 {
    background-color: var(--color-background-soft);
    margin-bottom: 1rem;
  }
  .episode {
    padding: 0 2rem;
  }
  .episode p.epdetails,
  .episode h2 {
    font-size: 14px;
    padding-top: 0.5rem;
  }

  .episode h2 span {
    background-size: 0% 5px;
  }

  .episode h2:hover span {
    background-size: 100% 5px;
    transform: translate(0, -0.25rem);
  }

  .episode p.epdesc {
    font-size: 12px;
  }

  .epnumber {
    font-size: 4rem;
    left: 35%;
  }
}
</style>
