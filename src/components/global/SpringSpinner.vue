<template>
  <div class="spring-spinner shadow">
    <div class="spring-spinner-part">
      <div class="spring-spinner-rotator"></div>
    </div>
    <div class="spring-spinner-part bottom">
      <div class="spring-spinner-rotator"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpringSpinner',
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped>
.spring-spinner,
.spring-spinner * {
  box-sizing: border-box;
}
.spring-spinner {
  background-color: var(--bg-5);
  border-radius: 50%;
  height: 250px;
  width: 250px;
}
.spring-spinner .spring-spinner-part {
  overflow: hidden;
  height: calc(250px / 2);
  width: 250px;
}
.spring-spinner .spring-spinner-part.bottom {
  transform: rotate(180deg) scale(-1, 1);
}
.spring-spinner .spring-spinner-rotator {
  width: 250px;
  height: 250px;
  border: 30px solid transparent;
  border-right-color: var(--bg-1);
  border-top-color: var(--bg-1);
  border-radius: 50%;
  box-sizing: border-box;
  animation: spring-spinner-animation 3s ease-in-out;
  transform: rotate(340deg);
}

@keyframes spring-spinner-animation {
  0% {
    border-width: 30px;
  }
  25% {
    border-width: 30px;
  }
  50% {
    transform: rotate(180deg);
    border-width: 30px;
  }
  75% {
    border-width: 30px;
  }
  100% {
    border-width: 30px;
  }
}
@media (max-width: 870px) {
  .spring-spinner {
    height: 250px;
    width: 250px;
  }
  .spring-spinner .spring-spinner-part {
    height: calc(250px / 2);
    width: 250px;
  }
  .spring-spinner .spring-spinner-rotator {
    width: 250px;
    height: 250px;
  }
}
</style>
