<script>
import { mapMutations } from "vuex";

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

      this.$store.commit("ong/updateSession", {
        token: this.$store.state.status.code === 200 ? token : ""
      });

      this.$store.commit("updateLoading", { active: false });
    },

    addResizeEvent() {
      window.addEventListener("resize", this.updateWindowSize);
      this.updateWindowSize();
    },

    ...mapMutations(["updateWindowSize"])
  },
  mounted() {
    this.addResizeEvent();

    if (localStorage.getItem("token")) return this.startSession();
    this.$store.commit("updateLoading", { active: false });
  },

  destroyed() {
    window.removeEventListener("resize", this.updateWindowSize);
  }
};
</script>

<template lang="html">
  <main id="app">
    <m-alert v-if="alert"></m-alert>
    <m-loading v-if="loading"></m-loading>

    <router-view v-show="!loading" />
  </main>
</template>

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
  height: 100vh;

  font: 400 14px Roboto, sans-serif;
  font-family: Roboto, Avenir, Helvetica, sans-serif;

  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

input,
button,
textarea {
  font: 400 18px Roboto, sans-serif;
}
</style>
