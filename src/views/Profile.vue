<template lang="html">
  <div id="profile">
    <header>
      <img src="@/assets/logo.svg" alt="Be The Hero" />
      <span>Bem vindo, {{ ong.name }}</span>

      <m-button @click="$router.push({ name: 'new-incident' })">
        Cadastrar novo caso
      </m-button>

      <div class="icon" @click="handleLogout">
        <feather type="power" size="18" stroke="#e02041"></feather>
      </div>
    </header>

    <h1>Casos cadastrados</h1>

    <div class="incident-list">
      <m-pagination
        :totalPages="page.pages"
        :currentPage="page.current"
        :pagination="page.pagination"
        @goTo="handleGoTo"
      ></m-pagination>

      <ul>
        <li v-for="incident in page.incidents" :key="incident.id">
          <m-card @remove="handleRemove(incident)">
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

      <m-pagination
        :totalPages="page.pages"
        :currentPage="page.current"
        :pagination="page.pagination"
        @goTo="handleGoTo"
      ></m-pagination>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import Button from "@/components/Button";
import Pagination from "@/components/Pagination";

export default {
  name: "Profile",
  components: {
    "m-card": Card,
    "m-button": Button,
    "m-pagination": Pagination
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
    async handleGoTo(page) {
      await this.$store.dispatch("incident/getPage", { page });
    },

    handleLogout() {
      this.$store.commit("ong/updateSession", { token: "" });
    },

    async handleRemove(incident) {
      const token = this.$store.state.ong.profile.token;
      await this.$store.dispatch("incident/delete", { token, ...incident });

      if (this.$store.state.status.code !== 200)
        this.handleRemoveIncidentError();
    },

    handleRemoveIncidentError() {
      const { status } = this.$store.state;

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
    if (this.$store.state.incident.page.incidents.length === 1) this.getPage(1);
  }
};
</script>

<style lang="css" scoped>
#profile {
  width: 90%;
  max-width: 1600px;

  margin: 32px auto;
  padding: 0 30px;
}

.pagination {
  margin: 20px 0;
}

.incident-list {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
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
  grid-template-columns: repeat(4, 1fr);

  list-style: none;
}

li {
  position: relative;

  padding: 24px;
  border-radius: 8px;

  background-color: #ffffff;
}

@media only screen and (max-width: 1919px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
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
