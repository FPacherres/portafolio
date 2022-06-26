<template>
  <div class="section">
    <Title :num="'05'" :text="'Experience'" />
    <div class="container-list">
      <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="project in projects"
          :key="project"
          :style="`backgroundColor:${project.styles.cardBackground}; color:${project.styles.cardColor}`"
        >
          <card :data="project" />
        </swiper-slide>
      </swiper>
      <div class="description__experience">
        <h2>Algo más...</h2>
        <p>
          Llevo varios años usando a <strong class="vuejs">Vue.js</strong> como
          framework favorito y todo su ecosistema.<br /><br />
          Me he adentrado en las 
          <strong class="css">animaciones con css</strong> como un hermoso
          pasatiempo.<br /><br />
          Actualmente vengo estudiando el framework
          <strong class="svelte">Svelte</strong> y estoy aprendiendo algunas
          cosas básicas de Backend.<br /><br />
          También estoy leyendo el libro
          <strong class="cleanCode">Clean Code</strong> de Robert C. Martin<br /><br />
          Me gusta aportar <strong class="ideas">nuevas ideas</strong>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper'

import Title from '../components/global/Title.vue'
import Card from '../components/global/Card.vue'
import projects from '../Api/projects.json'
export default {
  name: 'Experience',
  components: {
    Swiper,
    SwiperSlide,
    Title,
    Card,
  },
  setup() {
    return {
      modules: [EffectCards],
      projects,
    }
  },
}
</script>

<style scoped>
.section {
  padding: 80px 0 60px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 131.8px 450px;
  align-content: center;
  gap: 30px;
}
.swiper {
  width: 280px;
  height: 420px;
}

.swiper-slide {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
}
.container-list {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
}
.description__experience {
  height: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 28px;
}
.description__experience h2 {
  margin: 0 0 15px;
  color: var(--bg-2);
  font-size: 30px;
  font-weight: 500;
}
.description__experience p {
  color: var(--bg-4);
  font-size: 14px;
  margin: 0px;
  font-weight: 200;
  width: 300px;
  line-height: 25px;
}
.description__experience strong {
  font-weight: 500;
  font-size: 16px;
}
.description__experience .vuejs {
  color: #3fb27f;
}
.description__experience .css {
  color: #6030ee;
}
.description__experience .svelte {
  color: #f73c00;
}
.description__experience .cleanCode {
  color: #0cb1ea;
}
.description__experience .ideas {
  color: #f70000;
}
@media (max-width: 870px) {
  .section {
    padding: 80px 0 60px;
    grid-template-rows: 100px 420px;
    gap: 10px;
  }
  .container-list {
    grid-template-columns: 1fr;
  }
  .description__experience {
    display: none;
  }
}
</style>
