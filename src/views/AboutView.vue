<script setup lang="ts">
import { onMounted } from "vue";
import Quote from "../components/AboutQuote.vue";
import AboutRoles from "../components/AboutRoles.vue";
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      const elanim = el.getAttribute("aos") as string;
      if (entry.isIntersecting) {
        el.classList.add(elanim);
      } else {
        el.classList.remove(elanim);
      }
    });
  },
  { threshold: [0] }
);

onMounted(() => {
  const observerentries = document.querySelectorAll("[aos]");
  observerentries.forEach((el) => {
    observer.observe(el);
  });
});
</script>

<template>
  <main class="parallax">
    <section class="abouttitle">
      <h2 class="bgelement">12B</h2>
      <h1>12B Productions</h1>
    </section>
    <section class="aboutquote wrapper">
      <Quote aos="fade-left" style="--delay: 200ms" class="topquote" />
      <blockquote
        aos="fade-right"
        class="quote"
        cite="https://emirateswoman.com/lebanese-director-nadine-labaki-won-cannes-jury-prize/"
      >
        Cinema is not only about making people dream. It's about changing things and
        making people think.”
      </blockquote>
      <p>- Nadine Labaki.</p>
      <Quote aos="fade-left" style="--delay: 200ms" class="bottomquote" />
    </section>
    <section class="aboutus">
      <div class="icon wrapper"><i class="fa-solid fa-info"></i></div>
      <h2 aos="fade-left" class="ustitle wrapper">Who we are</h2>
      <p aos="fade-left" class="aboutdesc wrapper" style="--delay: 500ms">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis impedit
        accusamus repellendus at doloremque, aut praesentium vel ex dolore, quisquam
        accusantium! Doloribus, quibusdam? Possimus, excepturi dicta laboriosam modi ipsa
        voluptate.
      </p>
      <AboutRoles />
    </section>
  </main>
</template>

<style scoped>
section {
  transform-style: preserve-3d;
}
</style>

<style>
main.parallax {
  perspective: 2px;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - var(--header-height));
}
.abouttitle {
  height: 90vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.abouttitle::after {
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
  height: calc(90vh + 20rem);
  aspect-ratio: 16/9;
  background-image: linear-gradient(to right, rgba(14, 34, 9, 0.5), rgba(44, 11, 11, 0.5)),
    url("/12BPROD.jpg");
  background-size: contain;
  background-attachment: fixed;
  background-position: top center;
  transform: translate3d(0px, 0px, -3px) scale(2.6);
}
.abouttitle h1 {
  font-size: 4rem;
  color: var(--color-heading);
  animation: load-title 1s ease-in-out;
}
.abouttitle h2 {
  position: absolute;
  left: 5rem;
  padding-bottom: 1rem;
  font-size: min(40vw, 35rem);
  color: var(--color-text-mute);
  transform: translate3d(0px, 0px, -1px) scale(1.6);
  animation: load-desc 1s ease-in-out;
}

.aboutquote {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  min-height: 20rem;
  background-color: var(--color-accent);
}
.aboutquote blockquote {
  font-size: 2rem;
  text-align: center;
  color: var(--color-heading);
  padding: 0 2rem;
  z-index: 1;
}
.aboutquote p {
  z-index: 1;
  font-size: 1.2rem;
  text-align: right;
  margin-right: 3rem;
}

.topquote,
.bottomquote {
  fill: var(--color-background);
  backdrop-filter: opacity(0%);
  opacity: 0.9;
  position: absolute;
}
.topquote {
  rotate: 180deg;
  top: 2rem;
  left: 3rem;
  margin-right: auto;
}
.bottomquote {
  bottom: 2rem;
  right: 3rem;
}

.aboutus {
  height: calc(100vh - var(--header-height) - var(--footer-height));
  background-color: var(--color-background);
}
.aboutus div.icon {
  padding-top: 4rem;
}
.aboutus svg {
  outline: 5px solid var(--color-accent);
  border-radius: 50%;
  color: var(--color-accent);
  box-shadow: 0 0 100px 3px var(--color-accent);
  padding: 0.7rem;
  width: 1.5rem;
  height: 1.5rem;
}
.aboutus h2 {
  font-size: 3rem;
  color: var(--color-accent);
  text-align: left;
  padding: 1rem 0;
}
.aboutus p {
  font-size: 1rem;
}
</style>
