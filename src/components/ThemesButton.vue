<script setup lang="ts">
import SunIcon from "./Icons/SunIcon.vue";
import MoonIcon from "./Icons/MoonIcon.vue";
</script>

<template>
  <div class="mode right">
    <SunIcon class="thumb" />
    <MoonIcon class="thumb" />
  </div>
</template>

<style>
.mode {
  width: 3.2rem;
  height: 1.8rem;
  padding: 0 5px;
  border-radius: 3rem;
  outline: 1px solid var(--color-background);
  background-color: var(--color-accent-mute);
  display: flex;
  justify-content: center;
  align-items: center;
}
.thumb,
.thumb svg {
  height: 1.2rem;
  width: 1.2rem;
  fill: var(--color-accent);
}
.thumb:hover {
  opacity: 0.6;
}
</style>
