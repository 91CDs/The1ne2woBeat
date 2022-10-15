<script setup lang="ts">
import { ref } from "vue";
const display = ref<boolean>(false);
const styles = defineProps<{
  src: string;
}>();

function setDisplay() {
  display.value = !display.value;
}
</script>

<template>
  <div class="poster">
    <img
      class="image"
      :class="{ active: display }"
      @click="setDisplay()"
      :src="styles.src"
      alt="poster"
    />
    <h3 class="name f-700">
      <slot></slot>
    </h3>
  </div>
</template>

<style>
/* .poster:nth-child(n) {
  flex-direction: column;
} */
/* .poster:nth-child(2n) {
  flex-direction: column-reverse;
} */
.poster {
  margin: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: all 0.1s ease-in-out;
}
.name {
  position: absolute;
  right: -1.6rem;
  top: 50%;
  transform: translate(0, -50%);
  text-align: center;
  margin: 1rem 0;
  color: var(--color-accent-mute);
  writing-mode: vertical-lr;
  text-orientation: upright;
  height: 70%;
  letter-spacing: -2px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.1s ease-in-out;
}
.image {
  width: calc(1587px * 0.3);
  height: calc(1587px * 0.3);
  object-fit: cover;
  outline: 1px solid transparent;
  outline-offset: 0px;
  transition: all 0.2s ease-in-out;
}
.image:hover,
.image:focus {
  outline-offset: 10px;
  outline: 1px solid var(--color-accent-mute);
  transition: all 0.2s ease-in-out;
}
img.active {
  width: calc(1587px * 0.44);
  height: calc(2245px * 0.44);
}
.poster:nth-child(n) .active:hover + .name {
  opacity: 1;
  font-size: 1.2rem;
  background-color: var(--color-background);
  /* transform: translate3d(1.6rem, 0, 0); */
}
/* .poster:nth-child(2n) .active:hover + .name {
  transform: translate3d(1.6rem, 0, 0);
} */
</style>
