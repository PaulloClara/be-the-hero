<template lang="html">
  <div id="profile">
    <header>
      <img src="@/assets/logo.svg" alt="Be The Hero" />
      <span>Bem vindo, {{ ong.name }}</span>

      <m-button @click="$router.push({ name: 'new-incident' })">
        Cadastrar novo caso
      </m-button>

      <div class="icon" @click="logout">
        <feather type="power" size="18" stroke="#e02041"></feather>
      </div>
    </header>

    <h1>Casos cadastrados</h1>

    <ul>
      <li v-for="incident in page.list" :key="incident.id">
        <m-card @remove="removeIncident(incident)">
          <template #title>{{ incident.title }}</template>
          <template #description>{{ incident.description }}</template>
          <template #value>
            {{
              Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)
            }}
          </template>
        </m-card>
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
  },
  computed: {
    ong() {
      return this.$store.state.ong.profile;
    },

    page() {
      return this.$store.state.incident.page;
    }
  },
  methods: {
    logout() {
      this.$store.commit("ong/updateSession", { token: "" });
    },

    async removeIncident(incident) {
      const token = this.$store.state.ong.profile.token;
      await this.$store.dispatch("incident/delete", { token, ...incident });

      if (this.$store.state.incident.status.code !== 200)
        this.handleRemoveIncidentError();
    },

    handleRemoveIncidentError() {
      const { status } = this.$store.state.incident;

      const configs =
        status.code === 401
          ? {
              title: "Operação invalida!",
              text: "",
              icon: "error"
            }
          : {
              title: status.error,
              text: status.message,
              icon: "error"
            };

      this.$store.dispatch("showAlert", configs);
    },

    async getPage(page) {
      await this.$store.dispatch("incident/getPage", { page });
    }
  },
  mounted() {
    if (this.$store.state.incident.page.list.length === 0) this.getPage(1);
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

  gap: 24px;
  grid-template-columns: repeat(3, 1fr);

  list-style: none;
}

li {
  position: relative;

  padding: 24px;
  border-radius: 8px;

  background-color: #ffffff;
}

@media only screen and (max-width: 1366px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 900px) {
  ul {
    grid-template-columns: 1fr;
  }
}
</style>
