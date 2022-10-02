<template>
  <section class="charactercard wrapper">
    <h2>Characters</h2>
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
  </section>
</template>

<style>
section.charactercard {
  margin: 2rem 0;
}
.charactercard h2 {
  font-size: 2.5rem;
  text-align: center;
}
.image-wrapper {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 1rem 0;
  scrollbar-width: 0;
  border-top: 1px solid var(--color-accent);
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
