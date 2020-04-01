<template lang="html">
  <div id="register">
    <div>
      <section>
        <img src="@/assets/logo.svg" alt="Be The Hero" />

        <h1>Cadastro</h1>
        <p>
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG.
        </p>

        <m-link :to="{ name: 'home' }" :icon="['arrow-left', 16, '#e02041']">
          Já tenho cadastro
        </m-link>
      </section>

      <form @submit.prevent="handleSubmit">
        <m-input
          v-model.trim="name"
          type="text"
          name="name"
          placeholder="Nome da ONG"
        ></m-input>
        <m-input
          v-model.trim="email"
          type="email"
          name="email"
          placeholder="E-mail"
        ></m-input>
        <m-input
          v-model.trim="password"
          type="password"
          name="password"
          placeholder="Senha"
        ></m-input>
        <m-input
          v-model.trim="whatsapp"
          type="text"
          name="whatsapp"
          max="17"
          placeholder="Whatsapp"
        ></m-input>

        <m-group>
          <m-input
            v-model.trim="city"
            type="text"
            name="city"
            placeholder="Cidade"
          ></m-input>
          <m-input
            v-model="uf"
            type="text"
            name="uf"
            max="2"
            placeholder="UF"
          ></m-input>
        </m-group>

        <m-button type="submit">Cadastrar</m-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

import Link from "@/components/Link";
import Group from "@/components/Group";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  name: "Register",
  components: {
    "m-link": Link,
    "m-group": Group,
    "m-input": Input,
    "m-button": Button
  },
  computed: {
    ...mapFields("ong", [
      "register.name",
      "register.email",
      "register.password",
      "register.whatsapp",
      "register.city",
      "register.uf"
    ])
  },
  methods: {
    async handleSubmit() {
      const { name, email, password, whatsapp, city, uf } = this;

      this.$store.commit("updateLoading", { loading: true });

      await this.$store.dispatch("ong/register", {
        name,
        email,
        password,
        whatsapp,
        city,
        uf
      });

      this.$store.commit("updateLoading", { loading: false });

      if (this.$store.state.status.code !== 200)
        return this.handleSubmitError();

      this.$router.push({ name: "home" });
      this.$store.dispatch("showAlert", {
        title: "Aviso importante!",
        text: "Essa aplicação é um teste, os dados serão resetados em breve...",
        icon: "warning"
      });
    },

    handleSubmitError() {
      const { status } = this.$store.state;

      const configs =
        status.code === 400
          ? {
              title: "Email em uso!",
              text: "Esse email já esta cadastrado no banco de dados.",
              icon: "error"
            }
          : {
              title: status.error,
              text: status.message,
              icon: "error"
            };

      this.$store.dispatch("showAlert", configs);
    }
  }
};
</script>

<style lang="css" scoped>
#register {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 1120px;

  margin: 0 auto;
}

#register > div {
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 96px;
  border-radius: 8px;

  box-shadow: 0 0 100px #00000020;
  background-color: #f0f0f5;
}

section {
  width: 100%;
  max-width: 380px;
}

h1 {
  margin: 64px 0 32px;
  font-size: 32px;
}

h1 + p {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}

form {
  width: 100%;
  max-width: 450px;
}

.error {
  color: #ff0f0f;
}
</style>
