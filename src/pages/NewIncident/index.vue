<script>
import Form from "@/pages/NewIncident/Form";
import Section from "@/pages/NewIncident/Section";

export default {
  name: "NewIncident",
  components: {
    "m-new-incident-form": Form,
    "m-new-incident-section": Section
  },
  methods: {
    checkAccessPermission() {
      setTimeout(() => {
        if (!this.$store.state.ong.logged) this.$router.push({ name: "home" });
      }, 1000);
    }
  },
  mounted() {
    this.checkAccessPermission();
  }
};
</script>

<template lang="html">
  <div id="new-incident">
    <div>
      <m-new-incident-section></m-new-incident-section>
      <m-new-incident-form></m-new-incident-form>
    </div>
  </div>
</template>

<style lang="css" scoped>
#new-incident {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 1120px;

  margin: 0 auto;
}

#new-incident > div {
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
  #new-incident {
    height: auto;

    margin: 0;
    text-align: center;
  }

  #new-incident > div {
    flex-direction: column;
    padding: 12px;
  }
}
</style>
