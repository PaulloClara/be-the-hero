<template lang="html">
  <div class="card">
    <strong>CASO:</strong>
    <p>Caso teste</p>

    <strong>DESCRIÇÂO:</strong>
    <p>Descrição teste</p>

    <strong>VALOR:</strong>
    <p>R$ 120,00</p>

    <div class="icon">
      <feather type="trash-2" size="20" stroke="#a8a8b3"></feather>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style lang="css" scoped>
.icon {
  position: absolute;

  top: 24px;
  right: 24px;

  border: 0;
  cursor: pointer;
}

.icon:hover {
  opacity: 0.8;
}

strong {
  display: block;

  margin-bottom: 16px;
  color: #41414d;
}

p {
  line-height: 21px;

  color: #737380;
  font-size: 16px;
}

p + strong {
  margin-top: 32px;
}
</style>
