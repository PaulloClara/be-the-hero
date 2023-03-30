<script lang="ts" setup>
import { ButtonHTMLAttributes } from "vue";

withDefaults(defineProps<{ type: "link" | ButtonHTMLAttributes["type"] }>(), {
  type: "button",
});
</script>

<template>
  <a v-if="type === 'link'" class="c-button">
    <slot name="default"></slot>
  </a>
  <button v-else :type="type" class="c-button">
    <slot name="default"></slot>
  </button>
</template>

<style lang="scss">
.c-button {
  display: inline-block;
  width: 100%;
  height: 60px;
  margin-top: 16px;
  border: 0;
  outline: none;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  transition: filter 0.2s;
  line-height: 60px;
  background-color: #e02041;

  &:hover {
    filter: brightness(90%);
  }
}
</style>
