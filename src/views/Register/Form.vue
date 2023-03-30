<script lang="ts" setup>
import { mapFields } from "vuex-map-fields";
import { registerError, registerSuccess } from "@/utils/alerts";

import Group from "@/components/Group";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  name: "RegisterForm",
  components: {
    "m-group": Group,
    "m-input": Input,
    "m-button": Button,
  },
  computed: {
    ...mapFields("ong", [
      "register.name",
      "register.email",
      "register.password",
      "register.whatsapp",
      "register.city",
      "register.uf",
    ]),
  },
  methods: {
    async handleSubmit() {
      const { name, email, password, whatsapp, city, uf } = this;

      this.$store.commit("updateLoading", { active: true });

      await this.$store.dispatch("ong/register", {
        name,
        email,
        password,
        whatsapp,
        city,
        uf,
      });

      this.$store.commit("updateLoading", { active: false });

      const { status } = this.$store.state;
      if (status.code !== 200)
        return this.$store.dispatch("showAlert", registerError(status));

      this.resetForm();

      this.$router.push({ name: "home" });
      this.$store.dispatch("showAlert", registerSuccess);
    },

    resetForm() {
      this.$refs.registerOng.reset();

      this.$store.commit("ong/updateRegisterForm", {
        name: "",
        email: "",
        password: "",
        whatsapp: "",
        city: "",
        uf: "",
      });
    },
  },
};
</script>

<template>
  <form ref="registerOng" @submit.prevent="handleSubmit">
    <m-input
      v-model.trim="name"
      type="text"
      name="name"
      required="true"
      placeholder="Nome da ONG"
    ></m-input>
    <m-input
      v-model.trim="email"
      name="email"
      type="email"
      required="true"
      placeholder="E-mail"
    ></m-input>
    <m-input
      v-model.trim="password"
      type="password"
      name="password"
      min="8"
      required="true"
      placeholder="Senha"
    ></m-input>
    <m-input
      v-model.trim="whatsapp"
      type="text"
      name="whatsapp"
      min="10"
      max="17"
      required="true"
      placeholder="Whatsapp"
    ></m-input>

    <m-group>
      <m-input
        v-model.trim="city"
        type="text"
        name="city"
        required="true"
        placeholder="Cidade"
      ></m-input>
      <m-input
        v-model="uf"
        type="text"
        name="uf"
        max="2"
        required="true"
        placeholder="UF"
      ></m-input>
    </m-group>

    <m-button type="submit">Cadastrar</m-button>
  </form>
</template>

<style lang="scss">
form {
  width: 100%;
  max-width: 450px;
}
</style>
