<script lang="ts" setup>
import { useCurrencyInput } from "vue-currency-input";

const { inputRef } = useCurrencyInput({
  currency: "BRL",
  autoDecimalDigits: true,
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false,
});
</script>

<template>
  <input class="app-input-money" ref="inputRef" type="text" />
</template>

<style lang="scss">
.app-input-money {
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
</style>
