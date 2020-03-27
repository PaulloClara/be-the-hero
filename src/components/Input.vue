<template lang="html">
  <input
    :type="type"
    :name="name"
    :placeholder="placeholder"
    @change="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: "Input",
  props: ["type", "name", "placeholder"]
};
</script>

<style lang="css" scoped>
input {
  width: 100%;
  height: 60px;

  margin-top: 8px;
  padding: 0 24px;

  border: 1px solid #dcdce6;
  border-radius: 8px;

  color: #333333;
}
</style>
