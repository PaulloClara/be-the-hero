<script lang="ts" setup>
import { IncidentT } from "@/stores/incident";
import { formatMoney } from "@/utils";

defineProps<{ incident: IncidentT }>();
</script>

<template>
  <div class="app-incident-card" title="Click para entrar em contato">
    <div class="app-incident-card-item name">
      <h5 class="app-incident-card-label">Caso:</h5>
      <h6 class="app-incident-card-value">{{ incident.name }}</h6>
    </div>
    <div class="app-incident-card-item description">
      <h5 class="app-incident-card-label">Descrição:</h5>
      <h6 class="app-incident-card-value">{{ incident.description }}</h6>
    </div>
    <div class="app-incident-card-item value">
      <h5 class="app-incident-card-label">Valor:</h5>
      <h6 class="app-incident-card-value">{{ formatMoney(incident.value) }}</h6>
    </div>
  </div>
</template>

<style lang="scss">
.app-incident-card {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  min-height: 320px;
  padding: 1.25em;
  border-radius: 6px;
  background-color: var(--primary-background-color);
  cursor: pointer;
  box-shadow: #0000000d 0px 0px 0px 1px;
  transition: all 0.2s;

  &:hover {
    box-shadow: #0000001a 0px 4px 12px;
  }

  .app-incident-card-item {
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    &.name {
      --app-incident-card-line-number: 3;
    }

    &.description {
      --app-incident-card-line-number: 12;
    }

    &.value {
      margin-top: auto;
    }
  }

  .app-incident-card-label {
    font-size: 0.9em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.25px;
  }

  .app-incident-card-value {
    display: -webkit-box;
    overflow: hidden;
    line-clamp: var(--app-incident-card-line-number);
    -webkit-line-clamp: var(--app-incident-card-line-number);
    -webkit-box-orient: vertical;
    color: var(--secondary-text-color);
    font-size: 0.92em;
    font-weight: 400;
    line-height: 1.3em;
    text-align: justify;
  }
}
</style>
