<script setup lang="ts">
import { onMounted } from "vue";
import Quote from "../components/Icons/QuoteIcon.vue";
import RolesCard from "../components/AboutRoles.vue";
import AboutTitle from "../components/AboutTitle.vue";
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
    <section class="aboutus">
      <div class="icon wrapper"><i class="fa-solid fa-info"></i></div>
      <h2 aos="fade-left" class="ustitle wrapper f-800">Who we are</h2>
      <p aos="fade-left" class="aboutdesc wrapper" style="--delay: 500ms">
        TheOneToBeat Productions is a small but capable TPS based production team
        dedicated to bringing you one of the student films of your life. We strive to be
        as creative as possible even with a <s>relatively small</s> virtually non-existent
        budget.
      </p>
      <RolesCard />
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
  scrollbar-width: 0;
  height: calc(100vh - var(--header-height));
}
main.parallax::-webkit-scrollbar {
  display: none;
}

.aboutquote {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 20rem;
  padding: 5rem;
  background-color: var(--color-accent);
}
.aboutquote blockquote {
  font-size: min(6vw, 2rem);
  text-align: center;
  color: var(--color-heading);
  z-index: 1;
}
.aboutquote p {
  z-index: 1;
  font-size: 1.2rem;
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
