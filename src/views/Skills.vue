<template>
  <section>
    <Title :num="'02'" :text="'Skills'" />
    <div class="container">
      <div class="card">
        <div class="canva relative">
          <spinner class="score" />
          <div class="data circle shadow-inset absolute">
            <img src="../assets/vue.svg" alt="">
            <span>Vue.js</span>
          </div>
        </div>
        <div class="title">
          <span>Tecnologías</span>
        </div>
        <div class="list relative">
          <button class="back absolute btn">
            <fa class="icon" :icon="['fa', 'chevron-left']" />
          </button>
          <button class="next absolute btn">
            <fa class="icon" :icon="['fa', 'chevron-right']" />
          </button>
        </div>
      </div>
      <div class="card">
        <div class="canva relative">
          <spinner class="score" />
          <div class="data circle shadow-inset absolute">
            <img src="../assets/vue.svg" alt="">
            <span>Vue.js</span>
          </div>
        </div>
        <div class="title">
          <span>Habilidades</span>
        </div>
        <div class="list relative">
          <button class="back absolute btn">
            <fa class="icon" :icon="['fa', 'chevron-left']" />
          </button>
          <button class="next absolute btn">
            <fa class="icon" :icon="['fa', 'chevron-right']" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../components/global/Title.vue";
import Spinner from "../components/global/SpringSpinner.vue";
export default {
  name: 'Skills',
  components: { Title, Spinner },
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
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.card {
  height: 100%;
  display: grid;
  grid-template-rows: 300px 60px 1fr;
  gap: 1px;
}
.canva {
  /* background: rgba(255, 255, 255, 0.177); */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.score {
  transform: rotate(65deg);
}
.data {
  width: 220px;
  height: 220px;
  background-color: var(--bg-5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.data img {
  width: 140px;
}
.data span {
  font-size: 20px;
  margin-top: -15px;
  font-weight: 300;
}
.title {
  background: rgba(255, 255, 255, 0.177);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 24px;
  color: var(--bg-3);
}
.list {
  background: rgba(255, 255, 255, 0.177);
}
.list .back, .list .next {
  background-color: var(--bg-5);
  height: 100%;
  width: 50px;
  color: var(--bg-2);
  font-size: 30px;
  transition: .3s;
}
.list .back:hover, .list .next:hover {
  transition: .3s;
  font-size: 20px;
}
.list .back {
  left: 0;
}
.list .next {
  right: 0;
}
@media (max-width: 870px) {
  section {
    padding: 80px 0 20px;
  }
  .container {
    grid-template-columns: 1fr;
  }
  .card {
    grid-template-rows: 250px 60px 1fr;
    gap: 10px;
  }
  .card:nth-child(2){
    display: none;
  }
  .data img {
    width: 120px;
  }
}
</style>
