<template lang="html">
  <div id="register">
    <div class="form">
      <section class="header">
        <img src="@/assets/logo.svg" alt="Be The Hero" />

        <h1 class="title">Cadastro</h1>
        <p class="message">
          Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG.
        </p>

        <router-link class="back-link" :to="{ name: 'home', params: {} }">
          <feather type="arrow-left" size="16" stroke="#e02041"></feather>
          Já tenho cadastro
        </router-link>
      </section>

      <form class="content">
        <m-input type="text" name="name" placeholder="Nome da ONG"></m-input>
        <m-input type="email" name="email" placeholder="E-mail"></m-input>
        <m-input type="text" name="whatsapp" placeholder="Whatsapp"></m-input>

        <div class="input-group">
          <m-input type="text" name="city" placeholder="Cidade"></m-input>
          <m-input type="text" name="uf" placeholder="UF"></m-input>
        </div>

        <m-button type="submit">Cadastrar</m-button>
      </form>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  name: "Register",
  components: {
    "m-input": Input,
    "m-button": Button
  }
};
</script>

<style lang="css">
#register {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 1120px;

  margin: 0 auto;
}

#register .form {
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 96px;
  border-radius: 8px;

  box-shadow: 0 0 100px #00000020;
  background-color: #f0f0f5;
}

#register .form .header {
  width: 100%;
  max-width: 380px;
}

#register .form .header .title {
  margin: 64px 0 32px;
  font-size: 32px;
}

#register .form .header .message {
  font-size: 18px;
  color: #737380;
  line-height: 32px;
}

#register .form .content {
  width: 100%;
  max-width: 450px;
}

#register .form .content .input-group {
  display: flex;
}

#register .form .content .input-group input + input {
  width: 80px;
  margin-left: 8px;
}
</style>
