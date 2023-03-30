<script lang="ts" setup>
import { mapFields } from "vuex-map-fields";
import { loginError } from "@/utils/alerts";

import Link from "@/components/Link";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  name: "LoginForm",
  components: {
    "m-link": Link,
    "m-input": Input,
    "m-button": Button,
  },
  computed: {
    ...mapFields("ong", ["login.email", "login.password"]),
  },
  methods: {
    async handleSubmit() {
      const { email, password } = this;

      this.$store.commit("updateLoading", { active: true });
      await this.$store.dispatch("ong/login", { email, password });
      this.$store.commit("updateLoading", { active: false });

      const { status } = this.$store.state;
      if (status.code !== 200)
        return this.$store.dispatch("showAlert", loginError(status));
    },
  },
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h1>Faça seu login</h1>

    <m-input
      v-model.trim="email"
      type="email"
      name="email"
      required="true"
      placeholder="Seu Email"
    ></m-input>
    <m-input
      v-model.trim="password"
      type="password"
      name="password"
      min="8"
      required="true"
      placeholder="Sua Senha"
    ></m-input>

    <m-button type="submit">Entrar</m-button>

    <m-link :to="{ name: 'register' }" :icon="['log-in', 16, '#e02041']">
      Não tenho cadastro
    </m-link>
  </form>
</template>

<style lang="scss">
form {
  margin-top: 100px;
}

h1 {
  font-size: 32px;
  margin-bottom: 32px;
}

@media only screen and (max-width: 1365px) {
  form {
    margin-top: 20px;
  }

  h1 {
    margin-bottom: 12px;
  }
}
</style>
