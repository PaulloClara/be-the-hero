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
        <input type="text" name="name" placeholder="Nome da ONG" />
        <input type="email" name="email" placeholder="E-mail" />
        <input type="text" name="whatsapp" placeholder="Whatsapp" />

        <div class="input-group">
          <input type="text" name="city" placeholder="Cidade" />
          <input type="text" name="uf" placeholder="UF" />
        </div>

        <button class="button" type="submit">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "Register"
}
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

#register .form .content input {
  width: 100%;
  height: 60px;

  margin-top: 8px;
  padding: 0 24px;

  border: 1px solid #dcdce6;
  border-radius: 8px;

  color: #333333;
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
