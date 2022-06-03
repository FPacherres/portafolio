<template>
  <div class="section">
    <Title :num="'05'" :text="'Experience'" />
    <div class="cardList">
      <Card class="box" v-for="project in projects" :data="project" :key="project" />
    </div>
  </div>
</template>

<script>
import Title from '../components/global/Title.vue'
import Card from '../components/global/Card.vue'
import data from '../Api/projects.json'
export default {
  name: 'Experience',
  components: { Title, Card },
  data() {
    return {
      projects: data,
    }
  }
}
</script>

<style scoped>
.section {
  padding: 80px 0 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 131.8px 470px;
  gap: 30px;
}
.cardList {
  overflow: auto;
  white-space: nowrap;
  box-sizing: border-box;
  gap: 10px;
}
.box {
  display: inline-block;
  margin-left: 10px;
}
@media (max-width: 870px) {
}
</style>
