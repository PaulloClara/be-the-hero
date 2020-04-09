<template lang="html">
  <a v-if="type === 'link'" @click="emitClick($event)">
    <slot name="default"></slot>
  </a>

  <button v-else :type="type" @click="emitClick($event)">
    <slot name="default"></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["type"],
  methods: {
    emitClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>

<style lang="css" scoped>
a,
button {
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
}

a:hover,
button:hover {
  filter: brightness(90%);
}
</style>
