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
  padding-top: 23rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 40%, var(--color-background)),
    linear-gradient(
      120deg,
      rgba(207, 75, 51, 0.5) 1%,
      rgba(201, 160, 126, 0),
      rgba(207, 51, 181, 0.5) 99%
    ),
    url("https://picsum.photos/seed/picsum/1280/700");
}
.line {
  background-color: wheat;
  border-radius: 1rem;
  width: 5rem;
  height: 10px;
  animation: load-line 0.2s ease-in-out;
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
  animation: load-title 0.6s ease-out;
}
.desc {
  font-size: 1rem;
  text-indent: 3rem;
  animation: load-desc 1s ease-out;
}
@keyframes load-line {
  from {
    width: 0;
  }
  to {
    width: 5rem;
  }
}
@keyframes load-title {
  from {
    opacity: 0;
    transform: translate(3rem, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes load-desc {
  from {
    opacity: 0;
    transform: translate(-4rem, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@media (min-width: 1024px) {
  .desc {
    padding-right: 50%;
  }
}
</style>
