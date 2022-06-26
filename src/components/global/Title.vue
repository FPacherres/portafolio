<template>
  <div>
    <h2>{{ num }}</h2>
    <h3>{{ text }}</h3>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  components: {},
  props: {
    num: {
      type: String,
      default: '01',
    },
    text: {
      type: String,
      default: 'About',
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
div {
  text-align: start;
  text-transform: uppercase;
  width: fit-content;
}
h2, h3 {
  margin: 0px;
}
h2 {
  color: var(--bg-2);
  font-size: 83px;
}
h3 {
  color: var(--bg-3);
  font-size: 65px;
  margin-top: -77px;
  font-weight: 500;
}
.line {
  width: 130px;
  height: 3px;
  background-color: var(--bg-1);
  margin-left: auto;
  margin-top: -15px;
}
@media (max-width: 870px) {
  h2 {
    font-size: 50px;
  }
  h3 {
    font-size: 30px;
    margin-top: -44px;
  }
  .line {
    width: 52px;
    margin-top: -6px;
    height: 2px;
    }
}
</style>
