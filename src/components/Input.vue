<script lang="ts" setup>
import { InputHTMLAttributes } from "vue";

defineProps<{ type: "textarea" | InputHTMLAttributes["type"] }>();
</script>

<template>
  <textarea class="c-input" v-if="type === 'textarea'"></textarea>
  <input class="c-input" :type="type" v-else />
</template>

<style lang="scss">
.c-input {
  width: 100%;
  height: 60px;
  margin-top: 8px;
  padding: 0 24px;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  color: #333;
}

textarea.c-input {
  min-height: 140px;
  padding: 16px 24px;
  resize: vertical;
  line-height: 24px;
}
</style>
