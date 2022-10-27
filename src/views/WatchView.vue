<script setup lang="ts">
import { ref } from "vue";
import WatchVideoPlayer from "@/components/Items/WatchVideoPlayer.vue";
import StarRating from "../components/StarRating.vue";
import Episodes from "../components/WatchEpisodes.vue";
import Trailers from "../components/WatchTrailers.vue";
const currentTab = ref<string | number>("Episodes");
const tabs: { [index: string | number]: typeof Episodes } = {
  Episodes,
  Trailers,
};
</script>

<template>
  <main>
    <h1 class="watchtitle f-800 wrapper">PROJECTS <span class="f-400">1</span></h1>
    <section class="project">
      <section class="projtitle">
        <h1><span class="f-800">Shes Dating The Gangster</span></h1>
        <p class="projdetails">
          <span>2022</span>
          <span class="chip">R-13</span>
          <span class="chip">HD</span>
          <span>5 episodes</span>
        </p>
        <StarRating />
      </section>
      <WatchVideoPlayer />
      <section class="watchtabs">
        <a
          v-for="(_, tab) in tabs"
          :key="tab"
          :class="{ tabactive: currentTab === tab }"
          @click="currentTab = tab"
        >
          {{ tab }}
        </a>
      </section>
      <component :is="tabs[currentTab]"></component>
    </section>
  </main>
</template>

<style>
.watchtitle {
  font-size: 1.6rem;
  text-align: left;
  color: var(--color-accent);
  margin: 2rem 0;
}
.watchtitle span {
  font-size: inherit;
  color: var(--color-text);
  padding: 0 1rem;
}

/* TITLE */
.projtitle {
  min-height: 50vh;
  border-radius: 4rem 4rem 0 0;
  box-shadow: 0 -30px 50px 1px var(--color-accent-shadow);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  background-image: var(--fade-gradient),
    linear-gradient(
      120deg,
      rgba(207, 75, 51, 0.5) 1%,
      rgba(201, 160, 126, 0),
      rgba(207, 51, 181, 0.5) 99%
    ),
    url("https://picsum.photos/seed/picsum/1280/700");
  background-size: cover;
  background-repeat: no-repeat;
}
.projtitle h1 {
  margin-top: auto;
  line-height: 1.3;
  margin-left: 2rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
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
}
.projtitle p {
  margin-left: 2rem;
}
.projdetails .chip {
  display: inline-block;
  font-size: 12px;
  background-color: var(--color-accent);
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

/* TABS */
.watchtabs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
}
.watchtabs a {
  padding: 1rem;
}
a.tabactive {
  background-image: linear-gradient(
    to right,
    var(--color-accent),
    var(--color-accent-mute)
  );
  background-size: 400% 5px;
  background-position: top left;
  background-repeat: no-repeat;
}
a.tabactive:hover {
  background-position: top right;
  transition: all 0.4s ease-in-out;
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
}
</style>
