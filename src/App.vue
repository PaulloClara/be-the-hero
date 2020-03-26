<template lang="html">
  <div id="app">
    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
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
* {
  margin: 0;
  padding: 0;

  text-decoration: none;
  box-sizing: border-box;
}

#app {
  color: #2c3e50;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
