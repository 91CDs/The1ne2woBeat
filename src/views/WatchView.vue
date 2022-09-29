<script setup lang="ts">
import StarRating from "../components/StarRating.vue";
import PlayIcon from "../components/Icons/PlayIcon.vue";
</script>

<template>
  <main>
    <h1 class="watchtitle">Projects</h1>
    <section class="project wrapper">
      <div class="projtitle">
        <h1>Shes Dating The Gangster</h1>
        <p class="rating">Rate this Movie:</p>
        <StarRating />
      </div>
      <div class="episode">
        <div class="overlay">
          <img src="https://picsum.photos/1000/1000" />
          <div id="play"><PlayIcon /></div>
        </div>
        <h2 class="eptitle">Episode 1: The Beginning</h2>
        <p class="epdesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolor aliquam
          nam animi quam facere, eum dolorum? Earum alias cumque saepe incidunt. Excepturi
          ad sequi sunt minus possimus eaque officia?
        </p>
      </div>
      <div class="episode">
        <div class="overlay">
          <img src="https://picsum.photos/1000/1000" />
          <div id="play"><PlayIcon /></div>
        </div>
        <h2 class="eptitle">Episode 2: The Start</h2>
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
.watchtitle:hover {
  transition: all 0.8s ease-in-out;
  color: var(--color-accent);
}
.projtitle {
  min-height: 50vh;
  border-radius: 4rem 4rem 0 0;
  box-shadow: 0 -30px 120px -60px hsla(165, 100%, 37%, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 10%, var(--color-background)),
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
.projtitle p {
  margin-left: 2rem;
  font-size: 1.1rem;
}
.projtitle .buttons {
  margin-bottom: 1rem;
}

.episode {
  height: 10rem;
  display: grid;
  grid-template-areas:
    "image title"
    "image desc";
  column-gap: 1.5rem;
}
.episode img {
  height: 10rem;
}
.overlay {
  grid-area: image;
}
.overlay:hover img {
  filter: brightness(50%);
}
.overlay:hover #play {
  opacity: 1;
  transition: all 0.2s ease-in-out;
}
#play {
  width: 2rem;
  height: 2rem;
  position: absolute;
  z-index: 5;
  left: 4rem;
  top: 4rem;
  right: 0;
  bottom: 0;
  opacity: 0;
}
.episode h2 {
  font-size: 1.5rem;
  text-align: left;
  margin-top: 3rem;
  grid-area: title;
  width: fit-content;
}
.episode h2:hover {
  transition: all 0.2s ease-out;
  transform: translate(0, -5px);
  background-image: linear-gradient(to right, var(--color-accent), wheat);
  background-size: 100% 15%;
  background-position: 0% 70%;
  background-repeat: no-repeat;
  animation: load-underline 0.5s ease-in-out;
}
.episode p {
  grid-area: desc;
}
</style>
