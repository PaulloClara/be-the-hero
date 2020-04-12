<script>
export default {
  name: "Group"
};
</script>

<template lang="html">
  <div class="group">
    <slot name="default"></slot>
  </div>
</template>

<style lang="css" scoped>
.group {
  display: flex;
}

input + input {
  width: 80px;
  margin-left: 8px;
}
</style>
