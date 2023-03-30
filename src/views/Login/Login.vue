<script lang="ts" setup>
import { mapGetters } from "vuex";
import Form from "@/views/Login/Form";

export default {
  name: "Login",
  components: {
    "m-login-form": Form,
  },
  computed: {
    ...mapGetters(["mdWindow"]),
  },
};
</script>

<template>
  <div id="login">
    <section>
      <img src="@/assets/logo.svg" alt="Be The Hero" />

      <m-login-form></m-login-form>
    </section>

    <img v-if="!mdWindow" src="@/assets/heroes.png" alt="heroes" />
  </div>
</template>

<style lang="scss">
#login {
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
  max-width: 1120px;

  margin: 0 auto;
}

#login > section {
  width: 100%;
  max-width: 350px;

  margin-right: 30px;
}

@media only screen and (max-width: 1365px) {
  #login {
    justify-content: center;

    max-width: none;

    margin: 0;
    padding: 6px 8px;

    text-align: center;
  }

  #login > section {
    margin: 0;
  }
}
</style>
