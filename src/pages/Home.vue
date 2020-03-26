<template lang="html">
  <div id="home">
    <m-login></m-login>
  </div>
</template>

<script lang="js">
import LoginView from "@/views/Login"

export default {
  name: "Home",
  components: {
    'm-login': LoginView
  }
};
</script>

<style lang="css"></style>
