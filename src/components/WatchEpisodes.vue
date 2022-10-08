<script setup lang="ts">
import WatchEpisodeItem from "./Items/WatchEpisodeItem.vue";
</script>

<template>
  <WatchEpisodeItem src="https://picsum.photos/1920/1080">
    <template #ep-title>Episode 1: The Beginning</template>
    <template #ep-duration>16 min</template>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, laboriosam,
    consequatur accusamus repellendus voluptatem hic voluptatum dolores dolore quaerat
    tempora animi. Fugit accusantium rerum sed doloribus autem vero inventore ducimus.
  </WatchEpisodeItem>
  <WatchEpisodeItem src="https://picsum.photos/1920/1080">
    <template #ep-title>Episode 2: The Start</template>
    <template #ep-duration>16 min</template>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, laboriosam,
    consequatur accusamus repellendus voluptatem hic voluptatum dolores dolore quaerat
    tempora animi. Fugit accusantium rerum sed doloribus autem vero inventore ducimus.
  </WatchEpisodeItem>
</template>
