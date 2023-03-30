<script lang="ts" setup>
import Form from "@/pages/Register/Form";
import Section from "@/pages/Register/Section";

export default {
  name: "Register",
  components: {
    "m-register-form": Form,
    "m-register-section": Section,
  },
  methods: {
    checkAccessPermission() {
      setTimeout(() => {
        if (this.$store.state.ong.logged) this.$router.push({ name: "home" });
      }, 1000);
    },
  },
  mounted() {
    this.checkAccessPermission();
  },
};
</script>

<template>
  <div id="register">
    <div>
      <m-register-section></m-register-section>
      <m-register-form></m-register-form>
    </div>
  </div>
</template>

<style lang="scss">
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

@media only screen and (max-width: 800px) {
  #register {
    align-items: flex-start;
  }

  #register > div {
    flex-direction: column;
    padding: 12px;
  }
}
</style>
