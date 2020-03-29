<template lang="html">
  <div id="app">
    <header></header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if (this.$store.state.ong.profile.token) {
      this.$store.state.ong.logged = true;
    }
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
  display: grid;

  grid-template-rows: 1fr 11fr;
  grid-template-columns: 12fr;
  grid-template-areas: "header" "main";

  height: 100vh;

  font: 400 14px Roboto, sans-serif;
  font-family: Roboto, Avenir, Helvetica, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

header {
  grid-area: "header";
}

main {
  grid-area: "main";
}

/* Global CSS */

input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}
</style>
