<script setup lang="ts"></script>
<template>
  <section class="roles wrapper">
    <div class="roleitem">
      <h3 class="f-700">Directors</h3>
      <p>
        Athena Nicole Tivi <br />
        Elisha Marielle Sorosoro
      </p>
    </div>
    <div class="roleitem">
      <h3 class="f-700">Scriptwriters</h3>
      <p>
        Athena Nicole Tivi <br />
        Elisha Marielle Sorosoro <br />
        Wynz Audrey Beltran
      </p>
    </div>
    <div class="roleitem">
      <h3 class="f-700">Cinematographer</h3>
      <p>
        Lance Gonzales <br />
        Kayle Abenojar
      </p>
    </div>
    <div class="roleitem">
      <h3 class="f-700">Video Editor</h3>
      <p>
        Elex Ysmael Maala <br />
        Timothy Chester Ariem <br />
        Mark Gabriel Adan <br />
        Kent Reyes <br />
        Carl David Benamer
      </p>
    </div>
    <div class="roleitem">
      <h3 class="f-700">Costume & Props Designer</h3>
      <p>
        Kayle Abenojar <br />
        Kent Reyes <br />
        John Alfred Miguel Doringo
      </p>
    </div>
    <div class="roleitem">
      <h3 class="f-700">Website Editor</h3>
      <p>Carl David Benamer</p>
    </div>
    <div class="roleitem">
      <h3 class="f-700">Photographers</h3>
      <p>
        Lance Gonzales <br />
        Mark Baguio <br />
        Kayle Abenojar
      </p>
    </div>
    <div class="roleitem">
      <h3 class="f-700">Poster Designer</h3>
      <p>
        Elex Ysmael Maala <br />
        Carl David Benamer <br />
        John Alfred Miguel Doringo <br />
        Athena Nicole Tivi
      </p>
    </div>
  </section>
</template>

<style scoped>
section.roles {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
}
h3 {
  font-size: 1.2rem;
  margin: 12px 0;
  color: var(--color-accent);
}
h3:focus,
h3:hover {
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  section.roles {
    grid-template-columns: 1fr 1fr 1fr;
  }
  h3 {
    font-size: 1.5rem;
  }
}
</style>
