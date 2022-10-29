<script setup lang="ts">
import AboutRoles from "./AboutRoles.vue";
</script>

<template>
  <section class="aboutus">
    <div class="icon wrapper"><i class="fa-solid fa-info"></i></div>
    <h2 aos="fade-left" class="ustitle wrapper f-800">Who we are</h2>
    <p aos="fade-left" class="aboutdesc wrapper" style="--delay: 500ms">
      TheOneToBeat Productions is a small but capable TPS based production team dedicated
      to bringing you one of the student films of your life. We strive to be as creative
      as possible even with a <s>relatively small</s> virtually non-existent budget.
    </p>
    <AboutRoles />
  </section>
</template>

<style>
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
  font-size: 2rem;
  color: var(--color-accent);
  text-align: left;
  padding: 1rem 0;
}
.aboutus p {
  font-size: 14px;
}

@media (min-width: 1024px) {
  .aboutus h2 {
    font-size: 3rem;
  }
  .aboutus p {
    font-size: 1rem;
  }
}
</style>
