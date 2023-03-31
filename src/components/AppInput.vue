<script lang="ts" setup>
import { InputHTMLAttributes } from "vue";

const emits = defineEmits(["update:modelValue"]);
withDefaults(defineProps<{ modelValue: any; type: "textarea" | InputHTMLAttributes["type"] }>(), {
  type: "text",
});

function handleInput(event: any) {
  emits("update:modelValue", event?.target?.value);
}
</script>

<template>
  <textarea class="app-input" v-if="type === 'textarea'" @input="handleInput"></textarea>
  <input class="app-input" :type="type" v-else @input="handleInput" />
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
