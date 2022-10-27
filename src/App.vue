<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HamburgerIcon from "./components/Icons/HamburgerIcon.vue";
import anime from "animejs/lib/anime.es.js";

const isMobileNav = ref<boolean>(false);
function setisMobile() {
  const width = window.innerWidth;
  isMobileNav.value = width <= 1024 ? true : false;
}
const isMenuDisplay = ref<boolean>(false);
function setMenuDisplay(event: Event) {
  const el = event.target as HTMLElement;
  const elname = el.tagName.toLowerCase();
  if (elname == "svg") {
    isMenuDisplay.value = !isMenuDisplay.value;
    anime({
      targets: ".menubtn",
      rotate: "90deg",
      duration: 500,
      easing: "easeOutCubic",
    });
    anime({
      targets: ".menu",
      translateX: "0%",
      delay: 250,
      duration: 250,
      easing: "easeOutCubic",
    });
  }
  if (elname == "div") {
    isMenuDisplay.value = !isMenuDisplay.value;
    anime({
      targets: ".menu",
      translateX: "100%",
      easing: "easeOutCubic",
      duration: 250,
    });
    anime({
      targets: ".menubtn",
      rotate: "0deg",
    });
  }
}

onMounted(() => {
  /* reactive */
  setisMobile();
  window.addEventListener("resize", setisMobile);
});
onUnmounted(() => {
  window.removeEventListener("resize", setisMobile);
});
</script>

<template>
  <header>
    <nav v-if="isMobileNav" class="wrapper">
      <img class="logo" src="/onetobeatlogodark.png" />
      <HamburgerIcon @click="setMenuDisplay" />
      <div class="menu" @click="setMenuDisplay">
        <img class="logo-m" src="/onetobeatlogodark.png" />
        <RouterLink to="/"> <i class="fas fa-house icon"></i> Home </RouterLink>
        <RouterLink to="/watch">
          <i class="fas fa-magnifying-glass icon"></i> Watch
        </RouterLink>
        <RouterLink to="/aboutus"> <i class="fas fa-info icon"></i> About </RouterLink>
      </div>
    </nav>
    <nav v-if="!isMobileNav" class="wrapper">
      <img class="logo" src="/onetobeatlogodark.png" />
      <RouterLink to="/"> <i class="fas fa-house icon"></i> Home </RouterLink>
      <RouterLink to="/watch">
        <i class="fas fa-magnifying-glass icon"></i> Watch
      </RouterLink>
      <RouterLink to="/aboutus"> <i class="fas fa-info icon"></i> About </RouterLink>
    </nav>
  </header>

  <RouterView />

  <footer class="wrapper">
    <p class="f-400">Made by TheOneToBeat Productions</p>
    <p class="f-400">{{ new Date().getFullYear() }}</p>
  </footer>
</template>

<style>
*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
*::-webkit-scrollbar-thumb {
  background-color: var(--color-accent);
  border-radius: 2rem;
}
header {
  max-height: 100vh;
  width: 100vw;
  min-height: var(--header-height);
  background-color: var(--color-background);

  display: flex;
  place-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
}

nav {
  width: 100%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-align: right;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}
nav a:focus {
  outline: none;
}
nav a {
  display: inline-block;
  padding: 0 1.25rem;
}
nav a:first-of-type {
  border: 0;
}
.menubtn {
  padding: 1rem;
}
.menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;
  padding: 30vh 0;
  background-color: rgba(24, 24, 24, 0.6);
  backdrop-filter: blur(10px);
  transform: translateX(100%);
}
.menu > * {
  margin: auto;
}

.icon {
  margin-right: 1ch;
}
.logo {
  width: 50px;
  margin: 0 2rem;
}
.logo-m {
  width: 50px;
  border-radius: 50%;
}

footer {
  min-height: var(--footer-height);
  width: 100vw;
  display: flex;
  justify-content: center;
}
footer p {
  font-size: 12px;
  text-align: center;
  padding: 0 1rem;
  color: var(--color-text);
}
footer p + p {
  border-left: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
  }
  footer p {
    font-size: 15px;
  }
  .settings {
    border: 0;
  }
  .profile {
    margin-right: 1ch;
  }
}
</style>
