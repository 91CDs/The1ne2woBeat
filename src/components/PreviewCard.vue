<template>
  <section class="image-wrapper" v-dragscroll="true">
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
    <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
  </section>
</template>

<style>
.image-wrapper {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin: 2rem 0;
  padding: 1rem 0;
  scrollbar-width: 0;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: var(--color-accent);
  border-radius: 2rem;
}
.image-wrapper::-webkit-scrollbar-thumb {
  background-color: aquamarine;
}

.image {
  width: calc(100% / 4);
  height: calc(100% / 4);
  margin: 0 1rem;
  outline: 1px solid transparent;
  outline-offset: 0px;
}

.image:hover,
.image:focus {
  outline-offset: 5px;
  outline: 1px solid aquamarine;
  transition: all 0.2s ease-in-out;
}
</style>
