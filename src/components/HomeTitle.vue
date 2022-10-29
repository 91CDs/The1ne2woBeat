<template>
  <section class="titlecard wrapper">
    <div class="feature">
      <h1 class="heading f-800">Recommended</h1>
      <div class="projdesc">
        <div class="line"></div>
        <h1 class="title">She's Dating the Gangster</h1>
        <p class="subtitle f-500">A film by 12B Productions</p>
        <p class="desc">
          Seventeen-year-old Athena Dizon unintentionally pulls a prank on the resident
          bad boy and heartthrob Kenji de los Reyes. She finds herself suddenly pretending
          to be his girlfriend in order to make an ex envious, but how long can they play
          the game of pretense?
        </p>
        <div class="homebuttons">
          <button class="title-btn f-600" tabindex="0">
            <RouterLink to="/watch"> See Episodes </RouterLink>
          </button>
          <button class="title-btn f-600 highlight" tabindex="0">
            <RouterLink to="/watch" href="#main"> See Trailer </RouterLink>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
section.titlecard {
  margin-top: 0.5rem;
  height: 80vh;
  padding: 2rem 0;
  background-image: var(--fade-gradient),
    linear-gradient(
      120deg,
      rgba(207, 75, 51, 0.5) 10%,
      rgba(201, 160, 126, 0),
      rgba(207, 51, 181, 0.5) 90%
    ),
    url("/HEADER.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2rem;
}
.feature {
  padding: 0 1.5rem;
  height: 100%;
}

.feature h1.heading {
  font-size: 1.5rem;
}

.projdesc {
  height: calc(100% - 1.5rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.feature .line {
  background-color: var(--color-accent-mute);
  border-radius: 1rem;
  width: 5rem;
  height: 10px;
  animation: load-line 0.2s ease-in-out;
}
.feature h1.title {
  font-family: var(--font-display);
  font-size: 2rem;
  animation: load-left 0.6s ease-out;
}
.feature button {
  margin-right: 1rem;
}
.feature .title-btn.highlight a {
  color: var(--color-heading);
}
.feature p.subtitle {
  font-size: 15px;
  color: var(--color-heading);
  animation: load-right 1s ease-out;
}
.feature p.desc {
  font-size: 12px;
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
  .feature h1.heading {
    font-size: 1.6rem;
  }
  .feature h1.title {
    font-size: 3.5rem;
  }
  .featrue p.subtitle {
    font-size: 1.1rem;
  }

  .feature p.desc {
    font-size: 1rem;
    padding-right: 50%;
  }
}
</style>
