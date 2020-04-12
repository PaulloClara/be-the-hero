<script>
import List from "@/views/Profile/List";
import Header from "@/views/Profile/Header";
import Pagination from "@/components/Pagination";

export default {
  name: "Profile",
  components: {
    "m-profile-list": List,
    "m-pagination": Pagination,
    "m-profile-header": Header
  },
  computed: {
    totalPages() {
      return this.$store.state.incident.page.pages;
    },

    currentPage() {
      return this.$store.state.incident.page.current;
    },

    pagination() {
      return this.$store.state.incident.page.pagination;
    }
  },
  methods: {
    async handleGoTo(page) {
      await this.$store.dispatch("incident/getPage", { page });
    }
  },
  mounted() {
    this.handleGoTo(1);
  }
};
</script>

<template lang="html">
  <div id="profile">
    <m-profile-header></m-profile-header>

    <h1>Casos cadastrados</h1>

    <div>
      <m-pagination
        :totalPages="totalPages"
        :currentPage="currentPage"
        :pagination="pagination"
        @goTo="handleGoTo"
      ></m-pagination>

      <m-profile-list></m-profile-list>

      <m-pagination
        :totalPages="totalPages"
        :currentPage="currentPage"
        :pagination="pagination"
        @goTo="handleGoTo"
      ></m-pagination>
    </div>
  </div>
</template>

<style lang="css" scoped>
#profile {
  width: 90%;
  max-width: 1600px;

  margin: 32px auto;
  padding: 0 30px;
}

#profile > div {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
}

.pagination {
  margin: 20px 0;
}

h1 {
  margin-top: 80px;
  margin-bottom: 24px;
}

@media only screen and (max-width: 800px) {
  #profile {
    width: 100%;

    margin: 0;
    padding: 12px;
  }

  h1 {
    margin: 0;

    font-size: 32px;
    text-align: center;
  }
}
</style>
