<template>
  <section>
    <Title :num="'02'" :text="'Skills'" />
    <div class="container">
      <div class="card relative">
        <div class="canva"></div>
        <div class="title"></div>
        <div class="list"></div>
      </div>
      <div class="card relative">
        <div class="canva"></div>
        <div class="title"></div>
        <div class="list"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../components/global/Title.vue";
export default {
  name: 'Skills',
  components: { Title },
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
  height: calc(100% - 160px);
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
}
.card {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 40px 80px;
  gap: 1px;
}
.canva {
  background: rgba(255, 255, 255, 0.177);
}
.title {
  background: rgba(255, 255, 255, 0.177);
}
.list {
  background: rgba(255, 255, 255, 0.177);
}
@media (max-width: 870px) {
  section {
    padding: 80px 0 20px;
  }
  .container {
    grid-template-columns: 1fr;
  }
  .card:nth-child(2){
    display: none;
  }
}
</style>
