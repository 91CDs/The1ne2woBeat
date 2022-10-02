<script setup lang="ts">
import StarRating from "../components/StarRating.vue";
import PlayIcon from "../components/Icons/PlayIcon.vue";
</script>

<template>
  <main>
    <h1 class="watchtitle">Projects</h1>
    <section class="project wrapper">
      <div class="projtitle">
        <h1><span>Shes Dating The Gangster</span></h1>
        <p class="projdetails">
          <span>2022</span><span id="PG-13">R-13</span><span>6 episodes</span>
        </p>
        <StarRating />
      </div>
      <div class="episode">
        <div class="overlay" tabindex="0">
          <img src="https://picsum.photos/1920/1080" />
          <div id="play"><PlayIcon /></div>
        </div>
        <h2 class="eptitle" tabindex="0"><span>Episode 1: The Beginning</span></h2>
        <p class="epdetails">16 min</p>
        <p class="epdesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolor aliquam
          nam animi quam facere, eum dolorum? Earum alias cumque saepe incidunt. Excepturi
          ad sequi sunt minus possimus eaque officia?
        </p>
      </div>
      <div class="episode">
        <div class="overlay" tabindex="0">
          <img src="https://picsum.photos/1920/1080" />
          <div id="play"><PlayIcon /></div>
        </div>
        <h2 class="eptitle" tabindex="0"><span>Episode 2: The Start</span></h2>
        <p class="epdetails">16 min</p>
        <p class="epdesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolor aliquam
          nam animi quam facere, eum dolorum? Earum alias cumque saepe incidunt. Excepturi
          ad sequi sunt minus possimus eaque officia?
        </p>
      </div>
    </section>
  </main>
</template>

<style>
.watchtitle {
  font-size: 2.5rem;
  text-align: left;
  color: var(--color-accent);
  margin-bottom: 2rem;
}

/* TITLE */
.projtitle {
  min-height: 50vh;
  border-radius: 4rem 4rem 0 0;
  box-shadow: 0 -60px 100px -75px var(--color-accent);
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
@keyframes load-underline {
  from {
    background-size: 0% 15%;
  }
  to {
    background-size: 100% 15%;
  }
}
.projtitle .projdetails {
  display: flex;
  align-items: center;
}
.projtitle p {
  margin-left: 2rem;
}
.projtitle #PG-13 {
  display: inline-block;
  font-size: 12px;
  background-color: var(--color-accent);
  color: var(--color-heading);
  border-radius: 5rem;
  padding: 0 12px;
  margin: 0 10px;
}
.projtitle .buttons {
  margin-bottom: 2rem;
}

/* EPISODE */
.episode {
  margin: 2rem 0;
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
  .watchtitle:focus,
  .watchtitle:hover {
    transition: all 0.8s ease-in-out;
    color: var(--color-accent);
  }
  /* EPISODE */
  .episode {
    height: 10rem;
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
