<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

import AppLink from "@/components/AppLink.vue";
import AppInput from "@/components/AppInput.vue";
import AppInputMoney from "@/components/AppInputMoney.vue";

const router = useRouter();
const form = ref(generateForm());

function generateForm() {
  return { title: "", description: "", value: 0 };
}

function handleSubmit() {
  goToIncidents();
}

function goToIncidents() {
  router.replace({ name: "home" });
}

function setBodyScroll(value: string) {
  const bodyEl = document.querySelector("body");
  if (!bodyEl) return;

  bodyEl.style.overflowY = value;
}

onMounted(() => setBodyScroll("hidden"));
onUnmounted(() => setBodyScroll("unset"));
</script>

<template>
  <div id="app-incident-register">
    <div class="app-incident-register-background" @click="goToIncidents"></div>
    <div class="app-incident-register-content">
      <div class="app-incident-register-infos">
        <img class="app-incident-register-logo" src="@/assets/images/logo.svg" alt="Be The Hero" />
        <h1 class="app-incident-register-title">Cadastrar novo caso</h1>
        <h2 class="app-incident-register-subtitle">
          Descreva o caso detalhadamente para encontrar um herói para resolver isso.
        </h2>
        <app-link
          class="app-incident-register-home"
          :to="{ name: 'home' }"
          icon="fa-solid fa-arrow-left"
        >
          Voltar para a home
        </app-link>
      </div>

      <form class="app-incident-register-form" @submit.prevent="handleSubmit">
        <app-input v-model="form.title" type="text" placeholder="Titulo" required />
        <app-input v-model="form.description" type="textarea" placeholder="Descrição" required />
        <app-input-money v-model="form.value" placeholder="Valor" required />
        <button class="app-button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
#app-incident-register {
  padding: 2em;

  .app-incident-register-background {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #0002;
  }

  .app-incident-register-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    gap: 1em;
    width: 100%;
    max-width: 1080px;
    padding: 4em;
    border-radius: 8px;
    box-shadow: #00000059 0px 5px 15px;
    background-color: var(--primary-background-color);
  }

  .app-incident-register-infos {
    max-width: 320px;
  }

  .app-incident-register-logo {
    display: block;
    width: 240px;
    margin: 0 0 1em;
  }

  .app-incident-register-title {
    margin: 0.75em 0 1em;
    font-size: 2em;
  }

  .app-incident-register-subtitle {
    color: var(--secondary-text-color);
    font-size: 1.12em;
    font-weight: 400;
    line-height: 1.4em;
    text-align: justify;
  }

  .app-incident-register-form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
    max-width: 420px;

    .app-incident-register-form-group {
      display: flex;
      gap: 0.5em;

      .app-input:last-child {
        max-width: 80px;
      }
    }
  }

  .app-button {
    margin-top: 0.5em;
  }

  .app-incident-register-home {
    margin-top: 1.75em;
  }
}
</style>
