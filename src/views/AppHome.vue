<script lang="ts" setup>
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <div id="app-home">
    <app-header />
    <router-view />
  </div>
</template>

<style lang="scss">
#app-home {
  position: relative;
}
</style>
