<template lang="html">
  <router-link :to="to">
    <feather :type="icon.name" :size="icon.size" :stroke="icon.color"></feather>
    <slot name="default"></slot>
  </router-link>
</template>

<script>
export default {
  name: "Link",
  props: ["icon", "to"]
};
</script>

<style lang="css" scoped>
i {
  margin-right: 8px;
}

a {
  display: flex;
  align-items: center;

  margin-top: 40px;

  color: #41414d;
  font-size: 18px;
  font-weight: 500;

  transition: opacity 0.2s;
}

a:hover {
  opacity: 0.8;
}
</style>
