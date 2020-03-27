<template lang="html">
  <div id="profile">
    <header>
      <img src="@/assets/logo.svg" alt="Be The Hero" />
      <span>Bem vindo, APAD</span>

      <m-button @click="$router.push({ name: 'new-incident' })">
        Cadastrar novo caso
      </m-button>

      <div class="icon">
        <feather type="power" size="18" stroke="#e02041"></feather>
      </div>
    </header>

    <h1>Casos cadastrados</h1>

    <ul>
      <li>
        <m-card></m-card>
      </li>
      <li>
        <m-card></m-card>
      </li>
      <li>
        <m-card></m-card>
      </li>
      <li>
        <m-card></m-card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Button from "@/components/Button";

export default {
  name: "Profile",
  components: {
    "m-card": Card,
    "m-button": Button
  }
};
</script>

<style lang="css" scoped>
#profile {
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
}

header {
  display: flex;
  align-items: center;
}

header img {
  height: 64px;
}

header span {
  margin-left: 24px;
  font-size: 20px;
}

button {
  width: 260px;

  margin-top: 0;
  margin-left: auto;
}

.icon {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  margin-left: 16px;

  border: 1px solid #dcdce6;
  border-radius: 4px;
  transition: border-color 0.2s;

  cursor: pointer;
  background-color: transparent;
}

.icon:hover {
  border-color: #999999;
}

h1 {
  margin-top: 80px;
  margin-bottom: 24px;
}

ul {
  display: grid;

  grid-gap: 24px;
  grid-template-columns: repeat(2, 1fr);

  list-style: none;
}

li {
  position: relative;

  padding: 24px;
  border-radius: 8px;

  background-color: #ffffff;
}
</style>
