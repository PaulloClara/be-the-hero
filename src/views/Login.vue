<template lang="html">
  <div id="login">
    <section class="content">
      <img src="@/assets/logo.svg" alt="Be The Hero" />

      <form class="form">
        <h1 class="title">Faça seu login</h1>

        <input type="text" name="id" placeholder="Sua ID" />
        <button class="button" type="submit" name="submit">Entrar</button>

        <router-link :to="{ name: 'register', params: {} }">
          <feather type="log-in" size="16" stroke="#e02041"></feather>
          Não tenho cadastro
        </router-link>
      </form>
    </section>

    <img src="@/assets/heroes.png" alt="heroes" />
  </div>
</template>

<script lang="js">
export default {
  name: "Login"
}
</script>

<style lang="css">
#login {
  display: flex;

  align-items: center;
  justify-content: center;

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

#login .content .form input {
  width: 100%;
  height: 60px;

  padding: 0 24px;

  border: 1px solid #dcdce6;
  border-radius: 8px;

  color: #333333;
}

#login .content .form a {
  display: flex;
  align-items: center;

  margin-top: 40px;

  color: #41414d;
  font-size: 18px;
  font-weight: 500;

  transition: opacity 0.2s;
}

#login .content .form a svg {
  margin-right: 8px;
}

#login .content .form a:hover {
  opacity: 0.8;
}
</style>
