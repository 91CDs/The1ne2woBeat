<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
function isMobile() {
  const width = window.innerWidth;
  return width <= 1024 ? true : false;
}
</script>

<template>
  <header>
    <nav v-if="isMobile()">
      <img class="logo" src="/logo.png" />
      <i class="right menubtn fas fa-bars"></i>
      <div class="menu">
        <img class="profile" src="/pfp.jpg" />
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
  padding: 0 1rem;
}
.menu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 50% 0;
  background-color: rgba(24, 24, 24, 0.5);
  backdrop-filter: blur(5px);
  width: 50vw;
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
