<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HamburgerIcon from "./components/Icons/HamburgerIcon.vue";
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
    <nav v-if="isMobile()">
      <img class="logo" src="/logo.png" />
      <HamburgerIcon />
      <div class="menu" v-show="isMenuDisplay">
        <img class="profile" src="/pfp.jpg" />
        <RouterLink to="/"> <i class="fas fa-house icon"></i>Home </RouterLink>
        <RouterLink to="/search">
          <i class="fas fa-magnifying-glass icon"></i>Search
        </RouterLink>
        <a class="settings"><i class="fas fa-gear icon"></i>Settings</a>
      </div>
    </nav>
    <nav v-if="!isMobile()">
      <img class="logo" src="/logo.png" />
      <RouterLink to="/"> <i class="fas fa-house icon"></i>Home </RouterLink>
      <RouterLink to="/search">
        <i class="fas fa-magnifying-glass icon"></i>Search
      </RouterLink>
      <!-- Profile -->
      <a class="right settings"><i class="fas fa-gear icon"></i>Settings</a>
      <img class="profile" src="/pfp.jpg" />
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  place-items: center;
}

nav {
  width: 100%;
  font-size: 12px;
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
.menu .profile {
  order: 0;
}
.profile {
  width: 50px;
  border-radius: 50%;
}
.menu .settings {
  order: 1;
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
    font-size: 1rem;
    text-align: left;
  }
  nav a {
    border-left: 1px solid var(--color-border);
  }
  .settings {
    order: 2;
    border: 0;
  }
  .profile {
    order: 3;
    margin-right: 1ch;
  }
}
</style>
