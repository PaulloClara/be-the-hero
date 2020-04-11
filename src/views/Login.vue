<template lang="html">
  <div id="login">
    <section>
      <img src="@/assets/logo.svg" alt="Be The Hero" />

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
    </section>

    <img v-if="!mdWindow" src="@/assets/heroes.png" alt="heroes" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields";

import { loginError } from "@/utils/alerts";

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
    ...mapGetters(["mdWindow"]),
    ...mapFields("ong", ["login.email", "login.password"])
  },
  methods: {
    async handleSubmit() {
      const { email, password } = this;

      this.$store.commit("updateLoading", { loading: true });

      await this.$store.dispatch("ong/login", { email, password });

      this.$store.commit("updateLoading", { loading: false });

      const { status } = this.$store.state;
      if (status.code !== 200)
        return this.$store.dispatch("showAlert", loginError(status));
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
  height: 100vh;
  max-width: 1120px;

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

@media only screen and (max-width: 1365px) {
  #login {
    justify-content: center;

    max-width: none;

    margin: 0;
    padding: 6px 8px;

    text-align: center;
  }

  section {
    margin: 0;
  }

  form {
    margin-top: 20px;
  }

  h1 {
    margin-bottom: 12px;
  }
}
</style>
