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

        <m-link
          :to="{ name: 'home' }"
          :icon="{ name: 'arrow-left', size: 16, color: '#e02041' }"
        >
          Já tenho cadastro
        </m-link>
      </section>

      <form>
        <m-input type="text" name="name" placeholder="Nome da ONG"></m-input>
        <m-input type="email" name="email" placeholder="E-mail"></m-input>
        <m-input type="text" name="whatsapp" placeholder="Whatsapp"></m-input>

        <m-group>
          <m-input type="text" name="city" placeholder="Cidade"></m-input>
          <m-input type="text" name="uf" placeholder="UF"></m-input>
        </m-group>

        <m-button type="submit">Cadastrar</m-button>
      </form>
    </div>
  </div>
</template>

<script>
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
</style>
