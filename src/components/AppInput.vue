<script lang="ts" setup>
import { InputHTMLAttributes } from "vue";

withDefaults(defineProps<{ type: "textarea" | InputHTMLAttributes["type"] }>(), { type: "text" });
</script>

<template>
  <textarea class="app-input" v-if="type === 'textarea'"></textarea>
  <input class="app-input" :type="type" v-else />
</template>

<style lang="scss">
.app-input {
  width: 100%;
  padding: 1.6em;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    font-size: 1.15em;
    font-weight: 500;
  }
}

textarea.app-input {
  min-height: 140px;
  padding: 1em 1.5em;
  resize: none;
  line-height: 1.5em;
}
</style>
