<script lang="ts" setup>
import Login from "@/views/Login";
import Profile from "@/views/Profile";

export default {
  name: "Home",
  components: {
    "m-login": Login,
    "m-profile": Profile,
  },
  computed: {
    logged() {
      return this.$store.state.ong.logged;
    },
  },
};
</script>

<template>
  <div id="home">
    <m-profile v-if="logged"></m-profile>
    <m-login v-else></m-login>
  </div>
</template>

<style lang="scss"></style>
