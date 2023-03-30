<script lang="ts" setup>
import Link from "@/components/Link";

export default {
  name: "RegisterSection",
  components: {
    "m-link": Link,
  },
};
</script>

<template>
  <section>
    <img src="@/assets/logo.svg" alt="Be The Hero" />

    <h1>Cadastro</h1>
    <p>
      Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os
      casos da sua ONG.
    </p>

    <m-link :to="{ name: 'home' }" :icon="['arrow-left', 16, '#e02041']">
      Já tenho cadastro
    </m-link>
  </section>
</template>

<style lang="scss">
section {
  width: 100%;
  max-width: 380px;
}

h1 {
  margin: 32px 0;
  font-size: 32px;
}

h1 + p {
  margin-right: 12px;
  text-align: justify;

  color: #737380;
  font-size: 18px;
  line-height: 26px;
}

@media only screen and (max-width: 800px) {
  section {
    text-align: center;
  }

  h1 {
    margin-bottom: 8px;
    text-align: left;
  }

  h1 + p {
    margin-right: 0;
  }

  a {
    margin: 12px 0;
  }
}
</style>
