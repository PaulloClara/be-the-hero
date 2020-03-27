<template lang="html">
  <div id="app">
    <header></header>

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
  display: grid;

  grid-template-rows: 1fr 11fr;
  grid-template-column: 12fr;
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

.back-link {
  display: flex;
  align-items: center;

  margin-top: 40px;

  color: #41414d;
  font-size: 18px;
  font-weight: 500;

  transition: opacity 0.2s;
}

.back-link svg {
  margin-right: 8px;
}

.back-link:hover {
  opacity: 0.8;
}
</style>
