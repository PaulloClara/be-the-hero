<template lang="html">
  <div id="login">
    <section class="content">
      <img src="@/assets/logo.svg" alt="Be The Hero" />

      <form class="form">
        <h1 class="title">Faça seu login</h1>

        <m-input type="text" name="id" placeholder="Sua ID"></m-input>
        <button class="button" type="submit" name="submit">Entrar</button>

        <router-link class="back-link" :to="{ name: 'register', params: {} }">
          <feather type="log-in" size="16" stroke="#e02041"></feather>
          Não tenho cadastro
        </router-link>
      </form>
    </section>

    <img src="@/assets/heroes.png" alt="heroes" />
  </div>
</template>

<script>
import Input from "@/components/Input";

export default {
  name: "Login",
  components: {
    "m-input": Input
  }
};
</script>

<style lang="css">
#login {
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
}

#login .content {
  width: 100%;
  max-width: 350px;

  margin-right: 30px;
}

#login .content .form {
  margin-top: 100px;
}

#login .content .form .title {
  font-size: 32px;
  margin-bottom: 32px;
}
</style>
