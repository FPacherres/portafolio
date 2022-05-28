<template>
  <form class="shadow">
    <h1>Hablemos!</h1>
    <input type="text" class="shadow-total" />
    <input type="text" class="shadow-total" />
    <textarea />
  </form>
</template>

<script>
export default {
  name: 'Form',
  components: {},
  data() {
    return {}
  },
}
</script>

<style scoped>
form {
  border-radius: 20px;
  background-color: var(--bg-5);
  display: grid;
  place-content: center;
  gap: 20px;
}
h1 {
  color: var(--bg-6);
  font-weight: 500;
  font-size: 30px;
}
input {
  border-radius: 25px;
  height: 40px;
  border: 3px var(--bg-5) solid;
  background-color: var(--bg-5);
  width: 300px;
  padding: 0px 10px;
  box-sizing: border-box;
  color: var(--bg-3);
  font-weight: 200;
}
@media (max-width: 870px) {
  h1 {
    font-size: 25px;
  }
  input {
    width: 240px;
    height: 50px;
    border: 4px var(--bg-5) solid;
  }
}
</style>
