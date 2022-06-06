<template>
  <section>
    <Title :num="'02'" :text="'Skills'" />
    <div class="container">
      <div class="card">
        <div class="canva relative">
          <spinner class="score" />
          <div v-if="currentTecnology === 'vue'" class="data circle shadow-inset absolute">
            <img src="../assets/vue.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div v-else-if="currentTecnology === 'nuxt'" class="data circle shadow-inset absolute">
            <img src="../assets/nuxt.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div v-else-if="currentTecnology === 'js'" class="data circle shadow-inset absolute">
            <img src="../assets/js.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div v-else-if="currentTecnology === 'html'" class="data circle shadow-inset absolute">
            <img src="../assets/html.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div v-else-if="currentTecnology === 'css'" class="data circle shadow-inset absolute">
            <img src="../assets/css.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div v-else-if="currentTecnology === 'sass'" class="data circle shadow-inset absolute">
            <img src="../assets/sass.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div v-else-if="currentTecnology === 'tailwind'" class="data circle shadow-inset absolute">
            <img src="../assets/tailwind.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div v-else-if="currentTecnology === 'git'" class="data circle shadow-inset absolute">
            <img src="../assets/git.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div v-else-if="currentTecnology === 'figma'" class="data circle shadow-inset absolute">
            <img src="../assets/figma.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div v-else-if="currentTecnology === 'vuetify'" class="data circle shadow-inset absolute">
            <img src="../assets/vuetify.svg" alt="" />
            <span>Vue.js</span>
          </div>
        </div>
        <div class="title">
          <span>Tecnologías</span>
        </div>
        <div class="list">
          <swiper dir="rtl" :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('vue')">
                <img src="../assets/vue.svg" alt="vue" />
              </button>
            </swiper-slide>
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('nuxt')">
                <img src="../assets/nuxt.svg" alt="nuxt" />
              </button>
            </swiper-slide>
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('js')">
                <img src="../assets/js.svg" alt="js" />
              </button>
            </swiper-slide>
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('html')">
                <img src="../assets/html.svg" alt="html" />
              </button>
            </swiper-slide>
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('css')">
                <img src="../assets/css.svg" alt="css" />
              </button>
            </swiper-slide>
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('sass')">
                <img src="../assets/sass.svg" alt="sass" />
              </button>
            </swiper-slide>
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('tailwind')">
                <img src="../assets/tailwind.svg" alt="tailwind" />
              </button>
            </swiper-slide>
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('git')">
                <img src="../assets/git.svg" alt="git" />
              </button>
            </swiper-slide>
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('figma')">
                <img src="../assets/figma.svg" alt="figma" />
              </button>
            </swiper-slide>
            <swiper-slide>
              <button class="btn btnSkills shadow circle" @click="showSkill('vuetify')">
                <img src="../assets/vuetify.svg" alt="vuetify" />
              </button>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="card">
        <div class="canva relative">
          <spinner class="score" />
          <div class="data circle shadow-inset absolute">
            <img src="../assets/vue.svg" alt="" />
            <span>Vue.js</span>
          </div>
        </div>
        <div class="title">
          <span>Habilidades</span>
        </div>
        <div class="list">a</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/navigation'

import { Navigation } from 'swiper'

import Title from '../components/global/Title.vue'
import Spinner from '../components/global/SpringSpinner.vue'

import { ref, watchEffect } from 'vue'

let modules = [Navigation]
let tecnologies = [
  { id: 1, name: 'vue', path: '../assets/vue.svg' },
  { id: 2, name: 'js', path: '../assets/js.svg' },
  { id: 3, name: 'nuxt', path: '../assets/nuxt.svg' },
  { id: 4, name: 'html', path: '../assets/html.svg' },
  { id: 5, name: 'css', path: '../assets/css.svg' },
  { id: 6, name: 'sass', path: '../assets/sass.svg' },
  { id: 7, name: 'tailwind', path: '../assets/tailwind.svg' },
  { id: 8, name: 'git', path: '../assets/git.svg' },
  { id: 9, name: 'figma', path: '../assets/figma.svg' },
  { id: 10, name: 'vuetify', path: '../assets/vuetify.svg' },
]

let path = ref()
let list = []

watchEffect(async () => {
  for (let i = 0; i < tecnologies.length; i++) {
    list.push(
      path.value = (
        await import(`../assets/${tecnologies[i].name}.svg`)
      ).default
    )
  }
})

let currentTecnology = 'sass'

function showSkill(e) {
  currentTecnology = e
  console.log(currentTecnology)
  return e
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
  gap: 50px;
}

.card {
  height: 100%;
  display: grid;
  grid-template-rows: 280px 50px 1fr;
  gap: 1px;
}

.canva {
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
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 24px;
  color: var(--bg-3);
}

.swiper {
  width: 260px;
  height: 100%;
}

.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.btnSkills {
  background-color: var(--bg-5);
  width: 50px;
  height: 50px;
  transition: 0.3s;
}

.btnSkills:hover {
  box-shadow: var(--shadow-inset);
  transition: 0.3s;
}

.btnSkills img {
  width: 30px;
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

  .card:nth-child(2) {
    display: none;
  }

  .data img {
    width: 120px;
  }
}
</style>
