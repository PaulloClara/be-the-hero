<script lang="ts" setup>
import { RouteLocationRaw } from "vue-router";

defineProps<{ to: RouteLocationRaw; icon: string }>();
</script>

<template>
  <router-link class="app-link" :to="to">
    <i :class="icon"></i>
    <slot name="default"></slot>
  </router-link>
</template>

<style lang="scss">
.app-link {
  display: flex;
  align-items: center;
  color: var(--primary-text-color);
  font-size: 1.1em;
  font-weight: 400;
  transition: all 0.2s;
  text-decoration: none;

  i {
    color: var(--primary-color);
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(110%);
  }
}
</style>
