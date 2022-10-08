<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HamburgerIcon from "./components/Icons/HamburgerIcon.vue";
import ThemesButton from "./components/ThemesButton.vue";
function isMobile() {
  const width = window.innerWidth;
  return width <= 1024 ? true : false;
}
const isMenuDisplay = ref<boolean>(false);
function setMenuDisplay(this: HTMLElement, event: Event) {
  const el = event.target as HTMLElement;
  if (el == this) {
    isMenuDisplay.value = !isMenuDisplay.value;
  }
}
onMounted(() => {
  const menubtn = document.querySelector(".menubtn");
  const menu = document.querySelector(".menu");
  if (menubtn && menu) {
    console.log(menubtn);
    menubtn.addEventListener("click", setMenuDisplay);
    menu.addEventListener("click", setMenuDisplay);
  }
});
onUnmounted(() => {
  const menubtn = document.querySelector(".menubtn");
  if (menubtn) {
    menubtn.removeEventListener("click", setMenuDisplay);
  }
});
</script>

<template>
  <header>
    <nav v-if="isMobile()" class="wrapper">
      <img class="logo" src="/logo.png" />
      <HamburgerIcon />
      <div class="menu" v-show="isMenuDisplay">
        <img class="profile" src="/pfp.jpg" />
        <RouterLink to="/"> <i class="fas fa-house icon"></i> Home </RouterLink>
        <RouterLink to="/watch">
          <i class="fas fa-magnifying-glass icon"></i> Watch
        </RouterLink>
        <RouterLink to="/aboutus"> About </RouterLink>
        <a class="settings"><i class="fas fa-gear icon"></i>Settings</a>
      </div>
    </nav>
    <nav v-if="!isMobile()" class="wrapper">
      <img class="logo" src="/logo.png" />
      <RouterLink to="/"> <i class="fas fa-house icon"></i> Home </RouterLink>
      <RouterLink to="/watch">
        <i class="fas fa-magnifying-glass icon"></i> Watch
      </RouterLink>
      <RouterLink to="/aboutus"> About </RouterLink>
      <ThemesButton />
    </nav>
  </header>

  <RouterView />

  <footer class="wrapper">
    <p class="f-400">Made by 12B Productions</p>
    <p class="f-400">2022</p>
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
  line-height: 1.5;
  max-height: 100vh;
  min-height: var(--header-height);
  background-color: var(--color-background);
  display: flex;
  place-items: center;
}

footer {
  min-height: var(--footer-height);
  width: 100vw;
  display: flex;
  justify-content: center;
}
footer p {
  font-size: 1rem;
  text-align: center;
  padding: 0 1rem;
  color: var(--color-text);
}
footer p + p {
  border-left: 1px solid var(--color-border);
}

nav {
  width: 100%;
  font-size: 1rem;
  display: flex;
  align-items: center;
  text-align: right;
  padding: 1rem 0;
  top: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
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
  z-index: 10;
  padding: 30vh 0;
  background-color: rgba(24, 24, 24, 0.6);
  backdrop-filter: blur(10px);
}
.profile {
  width: 50px;
  border-radius: 50%;
}
.menu > * {
  margin: auto;
}

.icon {
  margin-right: 1ch;
}
.logo {
  width: 150px;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
  }
  nav a {
    border-left: 1px solid var(--color-border);
  }
  .settings {
    border: 0;
  }
  .profile {
    margin-right: 1ch;
  }
}
</style>
