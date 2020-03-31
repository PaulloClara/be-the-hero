<template lang="html">
  <div id="alert"></div>
</template>

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

<style lang="css" scoped></style>
