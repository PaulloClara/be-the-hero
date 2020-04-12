<script>
import Card from "@/components/Card";
import { removeIncidentError } from "@/utils/alerts";

export default {
  name: "ProfileList",
  components: {
    "m-card": Card
  },
  computed: {
    incidents() {
      return this.$store.state.incident.page.incidents;
    }
  },
  methods: {
    async handleRemove(incident) {
      const { token } = this.$store.state.ong.profile;
      await this.$store.dispatch("incident/delete", { token, ...incident });

      const { status } = this.$store.state;
      if (status.code !== 200)
        this.$store.dispatch("showAlert", removeIncidentError(status));
    }
  }
};
</script>

<template lang="html">
  <ul>
    <li v-for="incident in incidents" :key="incident.id">
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
</template>

<style lang="css" scoped>
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
  ul {
    grid-template-columns: 1fr;
  }
}
</style>
