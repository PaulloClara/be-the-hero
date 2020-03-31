<template lang="html">
  <div id="login">
    <section>
      <img src="@/assets/logo.svg" alt="Be The Hero" />

      <form @submit.prevent="handleSubmit">
        <h1>Faça seu login</h1>

        <m-input
          v-model="email"
          type="email"
          name="email"
          placeholder="Seu Email"
        ></m-input>
        <m-input
          v-model="password"
          type="password"
          name="password"
          placeholder="Sua Senha"
        ></m-input>

        <m-button type="submit">Entrar</m-button>

        <m-link :to="{ name: 'register' }" :icon="['log-in', 16, '#e02041']">
          Não tenho cadastro
        </m-link>
      </form>
    </section>

    <img src="@/assets/heroes.png" alt="heroes" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

import Link from "@/components/Link";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  name: "Login",
  components: {
    "m-link": Link,
    "m-input": Input,
    "m-button": Button
  },
  computed: {
    ...mapFields("ong", ["login.email", "login.password"])
  },
  methods: {
    async handleSubmit() {
      const { email, password } = this;

      this.$store.commit("updateLoading", { loading: true });

      if (!email || !password) return;
      await this.$store.dispatch("ong/login", { email, password });

      this.$store.commit("updateLoading", { loading: false });
    }
  }
};
</script>

<style lang="css" scoped>
#login {
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;
  height: 100vh;

  margin: 0 auto;
}

section {
  width: 100%;
  max-width: 350px;

  margin-right: 30px;
}

form {
  margin-top: 100px;
}

h1 {
  font-size: 32px;
  margin-bottom: 32px;
}
</style>
