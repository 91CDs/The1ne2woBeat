<template>
  <section class="titlecard">
    <div class="feature">
      <div class="line"></div>
      <h1 class="title">She's Dating the Gangster</h1>
      <p class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem placeat
        natus eos debitis itaque asperiores nihil optio quidem? Dolore saepe rem molestias
        laborum mollitia sapiente sunt ratione vero odit.
      </p>
    </div>
  </section>
</template>

<style>
section.titlecard {
  height: 60vh;
  padding-top: 23rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 40%, var(--color-background)),
    url("https://picsum.photos/seed/picsum/1280/700");
}
.line {
  background-color: wheat;
  border-radius: 1rem;
  width: 5rem;
  height: 10px;
}
.feature {
  padding-left: 1rem;
}
.title {
  color: var(--color-heading);
  font-family: "Work Sans", sans-serif;
  font-size: 3.5rem;
  text-align: left;
  line-height: 1.2;
}
.desc {
  font-size: 1rem;
  text-indent: 3rem;
}

@media (min-width: 1024px) {
  .desc {
    padding-right: 50%;
  }
}
</style>
