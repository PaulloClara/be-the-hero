<script lang="ts" setup>
defineProps<{ icon: { type: string; size: number; stroke: any }; to: any }>();
</script>

<template>
  <router-link class="c-link" :to="to">
    <feather
      :type="icon.type"
      :size="icon.size"
      :stroke="icon.stroke"
    ></feather>
    <slot name="default"></slot>
  </router-link>
</template>

<style lang="scss">
.c-link {
  display: flex;
  align-items: center;

  margin-top: 40px;

  color: #41414d;
  font-size: 18px;
  font-weight: 500;

  transition: opacity 0.2s;

  i {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
}
</style>
