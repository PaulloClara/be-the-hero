<script>
import Link from "@/components/Link";

export default {
  name: "NewIncidentSection",
  components: {
    "m-link": Link
  }
};
</script>

<template lang="html">
  <section>
    <img src="@/assets/logo.svg" alt="Be The Hero" />

    <h1>Cadastrar novo caso</h1>
    <p>
      Descreva o caso detalhadamente para encontrar um herói para resolver isso.
    </p>

    <m-link :to="{ name: 'home' }" :icon="['arrow-left', 16, '#e02041']">
      Voltar para home
    </m-link>
  </section>
</template>

<style lang="css" scoped>
section {
  width: 100%;
  max-width: 380px;
}

h1 {
  margin: 32px 0;
  font-size: 32px;
}

h1 + p {
  margin-right: 24px;

  color: #737380;
  font-size: 18px;
  line-height: 26px;
}

@media only screen and (max-width: 800px) {
  h1 {
    margin-bottom: 12px;
  }

  h1 + p {
    margin: 0px;
  }

  a {
    margin: 12px 0;
  }
}
</style>
