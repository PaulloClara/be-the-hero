<template lang="html">
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
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
  font: 400 14px Roboto, sans-serif;
}

.button {
  display: inline-block;

  width: 100%;
  height: 60px;

  margin-top: 16px;

  border: 0;
  border-radius: 8px;

  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  cursor: pointer;
  transition: filter 0.2s;

  line-height: 60px;
  background-color: #e02041;
}

.button:hover {
  filter: brightness(90%);
}
</style>
