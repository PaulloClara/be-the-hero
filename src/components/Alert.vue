<script>
export default {
  name: "Alert",
  methods: {
    async show() {
      await this.$swal(this.$store.state.alert.configs);
      this.$store.commit("updateAlertStatus", { show: false });
    }
  },
  mounted() {
    this.show();
  }
};
</script>

<template lang="html">
  <div class="alert"></div>
</template>

<style lang="css" scoped></style>
