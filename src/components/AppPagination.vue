<script lang="ts" setup>
import CButton from "@/components/Button.vue";

const props = defineProps<{ page: number; pages: number }>();
const emits = defineEmits(["update:page"]);

function goTo(page: number) {
  if (page < 1 || page > props.pages) return;
  emits("update:page", page);
}
</script>

<template>
  <div class="c-pagination">
    <feather
      type="arrow-left-circle"
      size="44"
      stroke="#e02041"
      @click="() => goTo(page - 1)"
    ></feather>
    <div>
      <c-button
        v-for="page of pages"
        :key="page"
        :class="{ 'is-selected': page === $props.page }"
        @click="() => goTo(page)"
      >
        {{ page }}
      </c-button>
    </div>
    <feather
      type="arrow-right-circle"
      size="44"
      stroke="#e02041"
      @click="() => goTo(page + 1)"
    ></feather>
  </div>
</template>

<style lang="scss">
.c-pagination {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  i {
    margin: 0 4px;
    cursor: pointer;
    transition: border-color 0.2s;
  }

  .c-button {
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

    + a {
      margin-left: 2px;
    }

    &.is-selected {
      border: 2px solid #e02041;
      color: #e02041 !important;
      background-color: transparent !important;
    }
  }
}
</style>
