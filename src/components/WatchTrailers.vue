<template>
  <section class="trailers">
    <h1 class="f-800">Trailer:</h1>
    <button class="trailer">Watch Trailer</button>
  </section>
</template>

<style scoped>
.trailers {
  margin-bottom: 2rem;
}
button {
  display: inline-block;
  font-size: 1rem;
  border-radius: 0px;
  margin-left: 1rem;
}

h1 {
  display: inline-block;
}

@media (min-width: 1024px) {
  .trailers {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
