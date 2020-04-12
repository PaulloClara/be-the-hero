<script>
export default {
  name: "Input",
  props: ["type", "name", "min", "max", "required", "placeholder"],
  methods: {
    emitInput(evt) {
      this.$emit("input", evt.target.value);
    }
  }
};
</script>

<template lang="html">
  <textarea
    v-if="type === 'textarea'"
    class="input"
    :name="name"
    :required="required"
    :maxlength="type !== 'number' ? max : ''"
    :placeholder="placeholder"
    @change="emitInput($event)"
  />

  <input
    v-else
    class="input"
    :type="type"
    :name="name"
    :required="required"
    :placeholder="placeholder"
    :min="type === 'number' ? min : ''"
    :max="type === 'number' ? max : ''"
    :minlength="type !== 'number' ? min : ''"
    :maxlength="type !== 'number' ? max : ''"
    @change="emitInput($event)"
  />
</template>

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
