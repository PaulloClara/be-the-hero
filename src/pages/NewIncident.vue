<template lang="html">
  <div id="new-incident">
    <div>
      <section>
        <img src="@/assets/logo.svg" alt="Be The Hero" />

        <h1>Cadastrar novo caso</h1>
        <p>
          Descreva o caso detalhadamente para encontrar um herói para resolver
          isso.
        </p>

        <m-link :to="{ name: 'home' }" :icon="['arrow-left', 16, '#e02041']">
          Voltar para home
        </m-link>
      </section>

      <form @submit.prevent="handleSubmit">
        <m-input
          v-model="title"
          type="text"
          name="titulo"
          placeholder="Titulo do caso"
        ></m-input>
        <m-input
          v-model="description"
          type="textarea"
          placeholder="Descrição do caso"
        ></m-input>
        <m-input
          v-model="value"
          type="number"
          name="value"
          placeholder="Valor em reais"
        ></m-input>

        <m-button type="submit">Cadastrar</m-button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

import Link from "@/components/Link";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  name: "NewIncident",
  components: {
    "m-link": Link,
    "m-input": Input,
    "m-button": Button
  },
  computed: {
    ...mapFields("incident", [
      "register.title",
      "register.value",
      "register.description"
    ])
  },
  methods: {
    async handleSubmit() {
      const { title, value, description } = this;

      this.$store.commit("updateLoading", { loading: true });

      await this.$store.dispatch("incident/register", {
        token: this.$store.state.ong.profile.token,
        title,
        value,
        description
      });

      this.$store.commit("updateLoading", { loading: false });

      if (this.$store.state.incident.status.code === 200)
        this.$router.push({ name: "home" });
    }
  }
};
</script>

<style lang="css" scoped>
#new-incident {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 1120px;

  margin: 0 auto;
}

#new-incident > div {
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
</style>
