<script lang="ts" setup>
import AppLink from "@/components/AppLink.vue";
</script>

<template>
  <div id="app-page-not-found">
    <h1 class="app-page-not-found-title">404</h1>
    <h2 class="app-page-not-found-subtitle">Página não encontrada!</h2>
    <app-link icon="fa-solid fa-home" :to="{ name: 'home' }"> Voltar para Home </app-link>
  </div>
</template>

<style lang="scss">
#app-page-not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: var(--primary-color);
  text-shadow: 0 2em 0.75em #00000026;

  .app-page-not-found-title {
    font-size: 8em;
  }

  .app-page-not-found-subtitle {
    font-size: 2em;
  }

  .app-link {
    margin-top: 3em;
  }
}
</style>
