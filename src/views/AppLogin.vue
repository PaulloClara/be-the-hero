<script lang="ts" setup>
import AppLink from "@/components/AppLink.vue";
import AppInput from "@/components/AppInput.vue";

function handleSubmit() {}
</script>

<template>
  <div id="app-login">
    <div class="app-login-content">
      <img class="app-login-logo" src="@/assets/images/logo.svg" alt="Be The Hero" />
      <h1 class="app-login-title">Faça seu login</h1>

      <form class="app-login-form" @submit.prevent="handleSubmit">
        <app-input type="email" placeholder="Seu e-mail" />
        <app-input type="password" placeholder="Sua senha" />
        <button class="app-submit-button" type="submit">Entrar</button>
      </form>

      <app-link
        class="app-login-register"
        :to="{ name: 'home' }"
        icon="fa-solid fa-arrow-right-to-bracket"
      >
        Não tenho cadastro
      </app-link>
    </div>
    <img class="app-login-people" src="@/assets/images/people.png" alt="Be The Hero" />
  </div>
</template>

<style lang="scss">
#app-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4em;
  min-height: 100vh;
  padding: 2em;

  .app-login-content {
    width: 100%;
    max-width: 340px;
  }

  .app-login-logo {
    display: block;
    width: 240px;
    margin: 0 auto 1em;
  }

  .app-login-title {
    margin-bottom: 0.5em;
    font-size: 2em;
    text-align: center;
  }

  .app-login-form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .app-login-register {
    margin-top: 1.75em;
  }

  .app-login-people {
    width: 100%;
    max-width: 34em;
  }

  @media only screen and (max-width: 900px) {
    gap: 2em;

    .app-login-people {
      max-width: 24em;
    }
  }

  @media only screen and (max-width: 720px) {
    .app-login-people {
      display: none;
    }
  }
}
</style>
