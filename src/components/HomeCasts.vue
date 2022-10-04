<template>
  <section class="charactercard wrapper">
    <h2 class="f-800">Characters</h2>
    <section class="image-wrapper" v-dragscroll="true">
      <div class="poster">
        <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
        <h3 class="name f-700">Kenji as Kenji</h3>
      </div>
      <div class="poster">
        <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
        <h3 class="name f-700">Kenji as Kenji</h3>
      </div>
      <div class="poster">
        <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
        <h3 class="name f-700">Kenji as Kenji</h3>
      </div>
      <div class="poster">
        <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
        <h3 class="name f-700">Kenji as Kenji</h3>
      </div>
      <div class="poster">
        <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
        <h3 class="name f-700">Kenji as Kenji</h3>
      </div>
      <div class="poster">
        <img class="image" src="https://picsum.photos/1080/1920" alt="poster" />
        <h3 class="name f-700">Kenji as Kenji</h3>
      </div>
    </section>
  </section>
</template>

<style>
section.charactercard {
  margin: 1rem 0;
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
}
.image-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--color-accent-mute);
}

.poster:nth-child(n) {
  flex-direction: column;
}
.poster:nth-child(2n) {
  flex-direction: column-reverse;
}
.poster {
  margin: 0 1rem;
  display: flex;
}
.name {
  text-align: center;
  margin: 1rem 0;
}
.image {
  width: calc(1080px / 4);
  height: calc(1920px / 4);
  outline: 1px solid transparent;
  outline-offset: 0px;
}
.image:hover,
.image:focus {
  outline-offset: 5px;
  outline: 1px solid var(--color-accent-mute);
  transition: all 0.2s ease-in-out;
}
</style>
