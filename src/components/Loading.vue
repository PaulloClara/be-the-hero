<script>
export default {
  name: "Loading"
};
</script>

<template lang="html">
  <div class="loading">
    <div class="">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.loading {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
}

.loading > div {
  width: 80px;
  height: 80px;
}

.loading div {
  animation: loading 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}

.loading > div > div:after {
  display: block;
  position: absolute;

  content: "";

  width: 7px;
  height: 7px;

  margin: -4px 0 0 -4px;

  border-radius: 50%;
  background-color: #e02041;
}

div > div:nth-child(1) {
  animation-delay: -0.036s;
}

div > div:nth-child(1):after {
  top: 63px;
  left: 63px;
}

div > div:nth-child(2) {
  animation-delay: -0.072s;
}

div > div:nth-child(2):after {
  top: 68px;
  left: 56px;
}

div > div:nth-child(3) {
  animation-delay: -0.108s;
}

div > div:nth-child(3):after {
  top: 71px;
  left: 48px;
}

div > div:nth-child(4) {
  animation-delay: -0.144s;
}

div > div:nth-child(4):after {
  top: 72px;
  left: 40px;
}

div > div:nth-child(5) {
  animation-delay: -0.18s;
}

div > div:nth-child(5):after {
  top: 71px;
  left: 32px;
}

div > div:nth-child(6) {
  animation-delay: -0.216s;
}

div > div:nth-child(6):after {
  top: 68px;
  left: 24px;
}

div > div:nth-child(7) {
  animation-delay: -0.252s;
}

div > div:nth-child(7):after {
  top: 63px;
  left: 17px;
}

div > div:nth-child(8) {
  animation-delay: -0.288s;
}

div > div:nth-child(8):after {
  top: 56px;
  left: 12px;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
