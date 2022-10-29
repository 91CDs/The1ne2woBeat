<script setup lang="ts">
import { onMounted } from "vue";
import Quote from "../components/Icons/QuoteIcon.vue";
import AboutTitle from "../components/AboutTitle.vue";
import AboutUs from "@/components/AboutUs.vue";
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      const elanim = el.getAttribute("aos") as string;
      if (entry.isIntersecting) {
        el.classList.add(elanim);
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
    <AboutTitle />
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
    <AboutUs />
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
  height: calc(100vh - var(--header-height) - var(--footer-height));
}

.aboutquote {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 20rem;
  padding: clamp(3rem, 6vw, 5rem);
  background-color: var(--color-accent);
}
.aboutquote::before {
  content: "";
  position: absolute;
  z-index: -100;
  inset: 0 0 0 0;
  width: 100%;
  height: 100%;
  background-image: url(/Filipino-Film-Compilation.jpg);
  opacity: 0.1;
}
.aboutquote blockquote {
  font-size: min(5vw, 2rem);
  text-align: center;
  color: var(--color-heading);
  z-index: 1;
}
.aboutquote p {
  z-index: 1;
  font-size: min(5vw, 1.2rem);
  text-align: right;
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
  top: 1.5rem;
  left: 2.5rem;
  margin-right: auto;
}
.bottomquote {
  bottom: 1.5rem;
  right: 2.5rem;
}
</style>
