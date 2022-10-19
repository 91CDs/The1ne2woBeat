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

<script lang="ts">
export default {
  data() {
    return {
      sub: this.$slots.default!()[0].children?.toString().split(" ")[4],
    };
  },
};
</script>

<template>
  <div class="poster" :id="sub">
    <a :href="`#${sub}`">
      <img
        class="image"
        :class="{ active: display }"
        @click="setDisplay()"
        :src="styles.src"
        alt="poster"
      />
    </a>
    <h3 class="name f-700" :class="{ active: display }">
      <slot></slot>
    </h3>
  </div>
</template>

<style>
.poster {
  margin: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: all 0.1s ease-in-out;
  scroll-margin: 22vw;
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
  pointer-events: none;

  opacity: 0;
  font-size: 0;
  transition: all 0.1s ease-in-out;
}
.image {
  width: calc(1587px * 0.19);
  height: calc(1587px * 0.19);
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
  width: calc(1587px * 0.19);
  height: calc(2245px * 0.19);
}

@media (min-width: 1024px) {
  .image {
    width: calc(1587px * 0.35);
    height: calc(1587px * 0.35);
  }
  img.active {
    width: calc(1587px * 0.35);
    height: calc(2245px * 0.35);
  }
  .name.active {
    opacity: 1;
    font-size: 1rem;
    background-color: var(--color-background);
  }
}
</style>
