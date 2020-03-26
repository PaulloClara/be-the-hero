<template lang="html">
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Login</router-link>
      </div>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="js">
export default {
  name: "App"
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500i,700&display=swap");

* {
  margin: 0;
  padding: 0;

  text-decoration: none;
  box-sizing: border-box;
}

body {
  background-color: #f0f0f5;
}

#app {
  font: 400 14px Roboto, sans-serif;
  font-family: Roboto, Avenir, Helvetica, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

input,
button,
textarea {
  font: 400 14px Roboto, sans-serif;
}
</style>
