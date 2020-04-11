<template lang="html">
  <div id="profile">
    <header>
      <img src="@/assets/logo.svg" alt="Be The Hero" />
      <span>Bem vindo, {{ ong.name }}</span>

      <div>
        <m-button @click="$router.push({ name: 'new-incident' })">
          Cadastrar novo caso
        </m-button>

        <div class="icon" @click="handleLogout">
          <feather type="power" size="18" stroke="#e02041"></feather>
        </div>
      </div>
    </header>

    <h1>Casos cadastrados</h1>

    <div class="incident-list">
      <m-pagination
        :totalPages="page.pages"
        :currentPage="page.current"
        :pagination="pagination"
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
        :pagination="pagination"
        @goTo="handleGoTo"
      ></m-pagination>
    </div>
  </div>
</template>

<script>
import { removeIncidentError } from "@/utils/alerts";

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
    },

    pagination() {
      return this.$store.state.incident.page.pagination;
    }
  },
  methods: {
    handleLogout() {
      this.$store.commit("ong/updateSession", { token: "" });
    },

    async handleGoTo(page) {
      await this.$store.dispatch("incident/getPage", { page });
    },

    async handleRemove(incident) {
      const { token } = this.$store.state.ong.profile;
      await this.$store.dispatch("incident/delete", { token, ...incident });

      const { status } = this.$store.state;
      if (this.$store.state.status.code !== 200)
        this.$store.dispatch("showAlert", removeIncidentError(status));
    }
  },
  mounted() {
    if (this.$store.state.incident.page.incidents.length === 1)
      this.handleGoTo(1);
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

header > div {
  display: inline-flex;
  margin-left: auto;
}

header img {
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

@media only screen and (max-width: 1920px) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 1365px) {
  ul {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 800px) {
  #profile {
    width: 100%;

    margin: 0;
    padding: 12px;
  }

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

  .icon {
    margin-left: 8px;
  }

  h1 {
    margin: 0;

    font-size: 32px;
    text-align: center;
  }

  ul {
    grid-template-columns: 1fr;
  }
}
</style>
