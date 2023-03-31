<script lang="ts" setup>
import AppHeader from "@/components/AppHeader.vue";
import AppIncidentCard from "@/components/AppIncidentCard.vue";

import { IncidentT } from "@/stores/incident";

const incidentMock: IncidentT = {
  id: "1",
  name: "Ajude a pagar tratamento médico de animal de estimação doente",
  description:
    "Sua ajuda é fundamental para ajudar a custear o tratamento médico do animal de estimação de uma família em dificuldades financeiras. Sua doação permitirá que o animal receba o tratamento necessário para se recuperar e voltar a ter uma vida saudável e feliz.",
  value: 320,
};
</script>

<template>
  <div id="app-home">
    <app-header />
    <main class="app-home-incidents">
      <app-incident-card v-for="i of 24" :key="i" :incident="incidentMock" />
    </main>
    <router-view />
  </div>
</template>

<style lang="scss">
#app-home {
  --app-home-incidents-columns: 4;
  position: relative;

  .app-home-incidents {
    display: grid;
    grid-template-columns: repeat(var(--app-home-incidents-columns), 1fr);
    gap: 1em;
    padding: 2em 1em;
  }

  @media only screen and (max-width: 1366px) {
    --app-home-incidents-columns: 3;
  }

  @media only screen and (max-width: 920px) {
    --app-home-incidents-columns: 2;
  }

  @media only screen and (max-width: 640px) {
    .app-home-incidents {
      gap: 0.5em;
      padding: 0.5em;
    }
  }

  @media only screen and (max-width: 420px) {
    --app-home-incidents-columns: 1;
  }
}
</style>
