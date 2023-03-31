<script lang="ts" setup>
const user = { name: "Visitante" };

function handleLogout() {}
</script>

<template>
  <header id="app-header">
    <div class="app-header-welcome">
      <img class="app-header-logo" src="@/assets/images/logo.svg" alt="Be The Hero" />
      <h1 class="app-header-welcome-message">
        Bem-vindo, <b>{{ user.name }}</b>
      </h1>
    </div>
    <div class="app-header-options">
      <router-link class="app-button" :to="{ name: 'register-incident' }">
        Cadastrar novo caso
      </router-link>
      <button class="app-header-logout" @click="handleLogout">
        <i class="fa-solid fa-power-off"></i>
      </button>
    </div>
  </header>
</template>

<style lang="scss">
#app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;

  .app-header-welcome,
  .app-header-options {
    display: flex;
    gap: 1em;
  }

  .app-header-welcome {
    align-items: center;
  }

  .app-header-logo {
    width: 10em;
  }

  .app-header-welcome-message {
    font-size: 1.25em;
    font-weight: 500;
  }

  .app-header-options {
    .app-button {
      padding-inline: 1em;
    }
  }

  .app-header-logout {
    width: 4.5em;
    border: none;
    border: 2px solid transparent;
    border-radius: 6px;
    color: var(--primary-color);
    font-size: 1.3em;
    background-color: transparent;

    &:hover {
      border-color: var(--primary-color);
    }
  }
}
</style>
