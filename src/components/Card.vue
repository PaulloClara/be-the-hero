<script lang="ts" setup>
const emits = defineEmits(["remove"]);

function emitRemove(event: any) {
  emits("remove", event);
}
</script>

<template>
  <div class="c-card">
    <div class="title">
      <strong>CASO:</strong>
      <p>
        <slot name="title"></slot>
      </p>
    </div>

    <div class="description">
      <strong>DESCRIÇÂO:</strong>
      <p>
        <slot name="description"></slot>
      </p>
    </div>

    <div class="value">
      <strong>VALOR:</strong>
      <p>
        <slot name="value"></slot>
      </p>
    </div>

    <div class="icon" @click="emitRemove($event)">
      <feather type="trash-2" size="20" stroke="#a8a8b3"></feather>
    </div>
  </div>
</template>

<style lang="scss">
.c-card {
  display: grid;

  gap: 12px;
  grid-template-rows: 1fr 3fr 1fr;

  height: 100%;
}

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

.value {
  align-self: flex-end;
}

strong {
  display: block;

  margin-bottom: 12px;
  color: #41414d;
}

p {
  line-height: 21px;

  color: #737380;
  font-size: 16px;
  text-align: justify;
}
</style>
