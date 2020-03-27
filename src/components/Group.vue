<template lang="html">
  <div>
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: "Group"
};
</script>

<style lang="css" scoped>
div {
  display: flex;
}

div input + input {
  width: 80px;
  margin-left: 8px;
}
</style>
