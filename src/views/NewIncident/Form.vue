<script lang="ts" setup>
import { mapFields } from "vuex-map-fields";
import { registerIncidentError } from "@/utils/alerts";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  name: "NewIncidentForm",
  components: {
    "m-input": Input,
    "m-button": Button,
  },
  computed: {
    ...mapFields("incident", [
      "register.title",
      "register.value",
      "register.description",
    ]),
  },

  methods: {
    async handleSubmit() {
      const { title, value, description } = this;

      this.$store.commit("updateLoading", { active: true });

      await this.$store.dispatch("incident/register", {
        token: this.$store.state.ong.profile.token,
        title,
        value,
        description,
      });

      this.$store.commit("updateLoading", { active: false });

      const { status } = this.$store.state;
      if (status.code !== 200)
        return this.$store.dispatch("showAlert", registerIncidentError(status));

      this.resetForm();
      this.$router.push({ name: "home" });
    },

    resetForm() {
      this.$refs.newIncident.reset();

      this.$store.commit("incident/updateForm", {
        title: "",
        value: "",
        description: "",
      });
    },
  },
};
</script>

<template>
  <form ref="newIncident" @submit.prevent="handleSubmit">
    <m-input
      v-model.trim="title"
      type="text"
      name="title"
      required="true"
      placeholder="Titulo do caso"
    ></m-input>
    <m-input
      v-model.trim="description"
      type="textarea"
      name="description"
      required="true"
      placeholder="Descrição do caso"
    ></m-input>
    <m-input
      v-model="value"
      type="number"
      name="value"
      required="true"
      placeholder="Valor em reais"
    ></m-input>

    <m-button type="submit">Cadastrar</m-button>
  </form>
</template>

<style lang="scss">
form {
  width: 100%;
  max-width: 450px;
}
</style>
