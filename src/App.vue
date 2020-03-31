<template lang="html">
  <main id="app">
    <m-loading v-if="loading"></m-loading>
    <m-alert v-if="alert"></m-alert>

    <router-view v-show="!loading" />
  </main>
</template>

<script>
import Alert from "@/components/Alert";
import Loading from "@/components/Loading";

export default {
  name: "App",
  components: {
    "m-alert": Alert,
    "m-loading": Loading
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },

    alert() {
      return this.$store.state.alert.show;
    }
  },
  methods: {
    async startSession() {
      const token = localStorage.getItem("token");
      await this.$store.dispatch("ong/getProfile", { token });

      if (this.$store.state.ong.status.code === 200)
        this.$store.commit("ong/updateSession", { token });
      else this.$store.commit("ong/updateSession", { token: "" });
    }
  },
  async mounted() {
    if (localStorage.getItem("token")) await this.startSession();
    this.$store.commit("updateLoading", { loading: false });
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
