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
      <swiper-slide class="box" v-for="project in projects" :key="project"
      :style="`backgroundColor:${project.styles.cardBackground}; color:${project.styles.cardColor}`">
        <card :data="project" />
      </swiper-slide>
    </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

import Title from '../components/global/Title.vue'
import Card from '../components/global/Card.vue'
import projects from '../Api/projects.json'
export default {
  name: 'Experience',
  components: {
    Swiper,
    SwiperSlide,
    Title, Card
  },
  setup() {
    return {
      modules: [EffectCards],
      projects
    };
  },
};
</script>

<style scoped>
.section {
  padding: 80px 0 0;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 131.8px 470px;
  gap: 30px;
}
.box {
  font-size: 20px;
  color: red;
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
@media (max-width: 870px) {
}
</style>
