<template lang="html">
  <div class="pagination">
    <feather
      type="arrow-left-circle"
      size="44"
      stroke="#e02041"
      @click="emitGoTo(currentPage - 1)"
    ></feather>

    <div>
      <m-button
        v-for="page of pagination"
        :key="page"
        :class="page === currentPage ? 'selected' : ''"
        type="link"
        @click="emitGoTo(page)"
      >
        {{ page }}
      </m-button>
    </div>

    <feather
      type="arrow-right-circle"
      size="44"
      stroke="#e02041"
      @click="emitGoTo(currentPage + 1)"
    ></feather>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Pagination",
  props: ["totalPages", "currentPage", "pagination"],
  components: {
    "m-button": Button
  },
  methods: {
    emitGoTo(page) {
      if (page < 1 || page > this.totalPages) return;

      this.$emit("goTo", page);
    }
  }
};
</script>

<style lang="css" scoped>
.pagination {
  display: inline-flex;

  align-items: center;
  justify-content: center;
}

i {
  margin: 0 4px;
  cursor: pointer;

  transition: border-color 0.2s;
}

a {
  display: inline-flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  margin-top: 0;
  margin-bottom: 0;

  border-radius: 50%;

  color: #fff;
  font-size: 18px;

  background-color: #e02041;
}

a + a {
  margin-left: 2px;
}

.selected {
  border: 2px solid #e02041;

  color: #e02041 !important;
  background-color: transparent !important;
}
</style>
