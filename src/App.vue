<template lang="html">
  <main id="app">
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
  methods: {
    async startSession() {
      const token = localStorage.getItem("token");
      await this.$store.dispatch("ong/getProfile", { token });

      if (this.$store.state.ong.status.code === 200)
        this.$store.commit("ong/updateSession", { token });
      else this.$store.commit("ong/updateSession", { token: "" });
    }
  },
  mounted() {
    if (localStorage.getItem("token")) this.startSession();
  }
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500i,700&display=swap");

/* Reset CSS */

* {
  margin: 0;
  padding: 0;

  text-decoration: none;
  box-sizing: border-box;
}

/* Page CSS */

body {
  background-color: #f0f0f5;
}

#app {
  height: 100vh;

  font: 400 14px Roboto, sans-serif;
  font-family: Roboto, Avenir, Helvetica, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

/* Global CSS */

input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}
</style>
