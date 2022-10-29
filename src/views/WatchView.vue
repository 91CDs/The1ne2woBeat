<script setup lang="ts">
import WatchVideoPlayer from "@/components/Items/WatchVideoPlayer.vue";
import StarRating from "../components/StarRating.vue";
import Episodes from "../components/WatchEpisodes.vue";
</script>

<template>
  <main>
    <h1 class="watchtitle f-800">Projects <span class="f-400">1</span></h1>
    <section class="project">
      <WatchVideoPlayer />
      <Episodes />
      <section class="projtitle">
        <h1><span class="f-800">Shes Dating the Gangster</span></h1>
        <p class="projdetails">
          <span class="chip2">Romance</span>
          <span class="chip2">Drama</span>
        </p>
        <p class="projdetails">
          <span>2022</span>
          <span class="chip">R-13</span>
          <span class="chip">HD</span>
          <span>5 episodes</span>
        </p>
        <StarRating />
      </section>
    </section>
  </main>
</template>

<style>
.watchtitle {
  font-size: 1.6rem;
  text-align: left;
  color: var(--color-accent);
  text-transform: uppercase;
  margin: 1rem auto;
}
.watchtitle span {
  font-size: inherit;
  color: var(--color-text);
  padding: 0 1rem;
}
.project {
  width: 80vw;
  margin: auto;
}

/* TITLE */
.projtitle {
  grid-area: projtitle;
  min-height: 40vh;
  padding: 0 1.5rem;
  border-radius: 2rem 2rem 0 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -30px 50px 1px var(--color-accent-shadow);
  background-image: var(--fade-gradient),
    linear-gradient(
      120deg,
      rgba(207, 75, 51, 0.5) 1%,
      rgba(201, 160, 126, 0),
      rgba(207, 51, 181, 0.5) 99%
    ),
    url("/HEADER.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.projtitle h1 {
  font-size: 2rem;
  margin-top: auto;
  margin-bottom: 1rem;
}
.projtitle h1 span {
  background-image: linear-gradient(to right, var(--color-accent), wheat);
  background-size: 100% 15%;
  background-position: bottom left;
  background-repeat: no-repeat;
  animation: load-underline 0.8s ease-in-out;
}
.projtitle .projdetails {
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
}
.projdetails .chip {
  display: inline-block;
  font-size: 12px;
  background-color: var(--color-accent);
  color: var(--color-heading);
  border-radius: 5rem;
  padding: 0 12px;
}
.projdetails .chip2 {
  display: inline-block;
  font-size: 12px;
  border: 1px solid var(--color-accent);
  color: var(--color-heading);
  border-radius: 5rem;
  padding: 0 12px;
}
.projdetails span + span {
  margin-left: 10px;
}
.projtitle .buttons {
  margin-bottom: 2rem;
}

@keyframes load-underline {
  from {
    background-size: 0% 15%;
  }
  to {
    background-size: 100% 15%;
  }
}
@media (min-width: 1024px) {
  .watchtitle:focus,
  .watchtitle:hover {
    transition: all 0.8s ease-in-out;
    color: var(--color-accent);
  }

  .project {
    display: grid;
    grid-template-areas:
      "player episode"
      "projtitle episode"
      "projtitle _";
    grid-template-columns: auto 27rem;
    gap: 2rem;
    width: 90vw;
  }

  .projtitle h1 {
    font-size: 3rem;
  }
}
</style>
