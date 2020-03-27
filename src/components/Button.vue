<template lang="html">
  <button :type="type" @click="$emit('click', $event)">
    <slot name="default"></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["type"]
};
</script>

<style lang="css" scoped>
button {
  display: inline-block;

  width: 100%;
  height: 60px;

  margin-top: 16px;

  border: 0;
  border-radius: 8px;

  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  cursor: pointer;
  transition: filter 0.2s;

  line-height: 60px;
  background-color: #e02041;
}

button:hover {
  filter: brightness(90%);
}
</style>
