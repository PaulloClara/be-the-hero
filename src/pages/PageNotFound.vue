<script>
import Link from "@/components/Link";

export default {
  name: "PageNotFound",
  components: {
    "m-link": Link
  }
};
</script>

<template lang="html">
  <div id="page-not-found">
    <h1>404</h1>
    <p>Página não encontrada!</p>

    <m-link :to="{ name: 'home' }" :icon="['arrow-left', 12, '#e02041']">
      Voltar para Home
    </m-link>
  </div>
</template>

<style lang="css" scoped>
#page-not-found {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;

  color: #e02041;
  font-family: "Roboto", Sans-serif;
  text-shadow: 0 30px 10px #00000026;

  background-color: #f0f0f5;
}

h1 {
  margin: 0;
  font-size: 95px;
}

p {
  font-size: 20px;
}
</style>
