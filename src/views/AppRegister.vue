<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import AppLink from "@/components/AppLink.vue";
import AppInput from "@/components/AppInput.vue";

import { UserFormT } from "@/stores/auth";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();
const form = ref(generateForm());

function generateForm(): UserFormT {
  return { name: "", email: "", password: "", whatsapp: "", city: "", uf: "" };
}

function handleSubmit() {
  authStore.registerUser({ form: form.value });
  router.replace({ name: "home" });
}
</script>

<template>
  <div id="app-register">
    <div class="app-register-content">
      <div class="app-register-infos">
        <img class="app-register-logo" src="@/assets/images/logo.svg" alt="Be The Hero" />
        <h1 class="app-register-title">Cadastre-se</h1>
        <h2 class="app-register-subtitle">
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
        </h2>
        <app-link class="app-register-login" :to="{ name: 'login' }" icon="fa-solid fa-arrow-left">
          Já tenho uma conta
        </app-link>
      </div>

      <form class="app-register-form" @submit.prevent="handleSubmit">
        <app-input v-model="form.name" type="text" placeholder="Nome" required />
        <app-input v-model="form.email" type="email" placeholder="E-mail" required />
        <app-input v-model="form.password" type="password" placeholder="Senha" required />
        <app-input v-model="form.whatsapp" type="tel" placeholder="WhatsApp" required />
        <div class="app-register-form-group">
          <app-input v-model="form.city" type="text" placeholder="Cidade" required />
          <app-input v-model="form.uf" type="text" placeholder="UF" maxlength="2" required />
        </div>
        <button class="app-button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
#app-register {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4em;
  min-height: 100vh;
  padding: 2em;

  .app-register-content {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    width: 100%;
    max-width: 1120px;
    padding: 4em;
    border-radius: 8px;
    box-shadow: #00000059 0px 5px 15px;
    background-color: var(--primary-background-color);
  }

  .app-register-infos {
    max-width: 360px;
  }

  .app-register-logo {
    display: block;
    width: 240px;
    margin: 0 0 1em;
  }

  .app-register-title {
    margin: 0.75em 0 1em;
    font-size: 2em;
  }

  .app-register-subtitle {
    color: var(--secondary-text-color);
    font-size: 1.12em;
    font-weight: 400;
    line-height: 1.4em;
    text-align: justify;
  }

  .app-register-form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
    max-width: 420px;

    .app-register-form-group {
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

  .app-register-login {
    margin-top: 1.75em;
  }
}
</style>
