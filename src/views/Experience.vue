<template>
  <section>
    <Title :num="'05'" :text="'Experience'" />
    <div class="container">
      <Card />
    </div>
  </section>
</template>

<script>
import Title from '../components/global/Title.vue'
import Card from '../components/global/Card.vue'
export default {
  name: 'Experience',
  components: { Title, Card },
  data() {
    return {}
  },
}
</script>

<style scoped>
section {
  padding: 80px 0 60px;
  box-sizing: border-box;
}

.container {
  border: 1px solid #f132f1;
  height: calc(100vh - 300px);
  margin-top: 40px;
}

@media (max-width: 870px) {
  section {
    padding: 80px 0 20px;
  }
  .container {
    border: 1px solid #f132f1;
    height: calc(100vh - 260px);
    margin-top: 40px;
  }
}
</style>
