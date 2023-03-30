<script lang="ts" setup>
import { ref } from "vue";
import AppToast from "@/components/AppToast.vue";

const appIsDark = ref(localStorage.getItem("THEME") === "dark");

function setThemeInApp() {
  if (appIsDark.value) document?.querySelector("body")?.classList.add("app-is-dark");
  else document?.querySelector("body")?.classList.remove("app-is-dark");
}

function handleSwitchTheme() {
  appIsDark.value = !appIsDark.value;
  localStorage.setItem("THEME", appIsDark.value ? "dark" : "default");
  setThemeInApp();
}

setThemeInApp();
</script>

<template>
  <app-toast />
  <router-view />
  <button id="app-switch-theme" @click="handleSwitchTheme">
    <i class="fa-regular fa-sun" v-if="appIsDark"></i>
    <i class="fa-regular fa-moon" v-else></i>
  </button>
</template>

<style lang="scss"></style>
