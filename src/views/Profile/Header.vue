<script>
import Button from "@/components/Button";

export default {
  name: "ProfileHeader",
  components: {
    "m-button": Button
  },
  computed: {
    ongName() {
      return this.$store.state.ong.profile.name;
    }
  },
  methods: {
    handleLogout() {
      this.$store.commit("ong/updateSession", { token: "" });
    }
  }
};
</script>

<template lang="html">
  <header>
    <img src="@/assets/logo.svg" alt="Be The Hero" />
    <span>Bem vindo, {{ ongName }}</span>

    <div>
      <m-button @click="$router.push({ name: 'new-incident' })">
        Cadastrar novo caso
      </m-button>

      <div class="logout" @click="handleLogout">
        <feather type="power" size="18" stroke="#e02041"></feather>
      </div>
    </div>
  </header>
</template>

<style lang="css" scoped>
header {
  display: flex;
  align-items: center;
}

header > div {
  display: inline-flex;
  margin-left: auto;
}

header > img {
  height: 64px;
}

header > span {
  margin: 0 12px;
  font-size: 20px;
}

header > div > button {
  width: 260px;
  margin-top: 0;
}

.logout {
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

.logout:hover {
  border-color: #999999;
}

@media only screen and (max-width: 800px) {
  header {
    flex-direction: column;
  }

  header > img {
    margin-bottom: 12px;
  }

  header > span {
    margin: 0;
  }

  header > div {
    margin: 20px 0;
  }

  header > div > button {
    width: 200px;
  }

  .logout {
    margin-left: 8px;
  }
}
</style>
