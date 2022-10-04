<template>
  <section class="titlecard wrapper">
    <div class="feature">
      <div class="line"></div>
      <h1 class="title">She's Dating the Gangster</h1>
      <p class="subtitle f-500">A film by 12B Productions</p>
      <p class="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem placeat
        natus eos debitis itaque asperiores nihil optio quidem? Dolore saepe rem molestias
        laborum mollitia sapiente sunt ratione vero odit.
      </p>
      <RouterLink to="/watch">
        <button class="f-600" tabindex="0">See Episodes</button>
      </RouterLink>
      <RouterLink to="/watch" href="#main">
        <button class="f-600 highlight" tabindex="0">See Trailer</button>
      </RouterLink>
    </div>
  </section>
</template>

<style>
section.titlecard {
  padding-top: 20rem;
  padding-bottom: 3rem;
  background-image: var(--fade-gradient),
    linear-gradient(
      120deg,
      rgba(207, 75, 51, 0.5) 1%,
      rgba(201, 160, 126, 0),
      rgba(207, 51, 181, 0.5) 99%
    ),
    url("https://picsum.photos/seed/picsum/1280/700");
}
.line {
  background-color: var(--color-accent-mute);
  border-radius: 1rem;
  width: 5rem;
  height: 10px;
  animation: load-line 0.2s ease-in-out;
}
.feature {
  padding-left: 1rem;
}
.title {
  font-family: var(--font-display);
  font-size: 3.5rem;
  animation: load-left 0.6s ease-out;
}
.subtitle {
  font-size: 1.1rem;
  color: var(--color-heading);
  animation: load-right 1s ease-out;
}
.desc {
  font-size: 1rem;
  text-indent: 3rem;
  margin-bottom: 1rem;
  animation: load-right 1s ease-out;
}
@keyframes load-line {
  from {
    width: 0;
  }
  to {
    width: 5rem;
  }
}
@keyframes load-left {
  from {
    opacity: 0;
    transform: translate(3rem, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
@keyframes load-right {
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
