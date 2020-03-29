<template lang="html">
  <textarea
    v-if="type === 'textarea'"
    :name="name"
    :placeholder="placeholder"
    @change="$emit('input', $event.target.value)"
  />
  <input
    v-else
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :max="type === 'number' ? max : ''"
    :maxlength="type !== 'number' ? max : ''"
    @change="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "Input",
  props: ["type", "name", "max", "placeholder"]
};
</script>

<style lang="css" scoped>
input,
textarea {
  width: 100%;
  height: 60px;

  margin-top: 8px;
  padding: 0 24px;

  border: 1px solid #dcdce6;
  border-radius: 8px;

  color: #333333;
}

textarea {
  min-height: 140px;
  padding: 16px 24px;

  resize: vertical;
  line-height: 24px;
}
</style>
