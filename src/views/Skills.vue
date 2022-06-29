<template>
  <section>
    <Title :num="'02'" :text="'Skills'" />
    <div class="containerS">
      <div class="card cardDesk">
        <div class="detail__tecnology relative">
          <div
            v-show="currentTecnology === 'vue'"
            class="percent relative"
            style="--clr: #40b783; --percentage: 85"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/vue.svg" alt="" />
              <span>Vue.js</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'nuxt'"
            class="percent relative"
            style="--clr: #00dc82; --percentage: 75"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/nuxt.svg" alt="" />
              <span>Nuxt.js</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'js'"
            class="percent relative"
            style="--clr: #f7df1e; --percentage: 70"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/js.svg" alt="" />
              <span>JavaScript</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'html'"
            class="percent relative"
            style="--clr: #ed6029; --percentage: 100"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/html.svg" alt="" />
              <span>Html5</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'css'"
            class="percent relative"
            style="--clr: #3caede; --percentage: 100"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/css.svg" alt="" />
              <span>Css3</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'sass'"
            class="percent relative"
            style="--clr: #d06a9d; --percentage: 80"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/sass.svg" alt="" />
              <span>Sass</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'tailwind'"
            class="percent relative"
            style="--clr: #06b6d5; --percentage: 90"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/tailwind.svg" alt="" />
              <span>Tailwind</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'git'"
            class="percent relative"
            style="--clr: #ef5032; --percentage: 65"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/git.svg" alt="" />
              <span>Git</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'figma'"
            class="percent relative"
            style="--clr: #a259ff; --percentage: 75"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/figma.svg" alt="" />
              <span>Figma</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'vuetify'"
            class="percent relative"
            style="--clr: #1697f6; --percentage: 95"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/vuetify.svg" alt="" />
              <span>Vuetify</span>
            </div>
            <div class="dot absolute"></div>
          </div>
        </div>
        <div class="title">
          <span>Tecnologías</span>
        </div>
        <div class="list">
          <swiper
            :spaceBetween="30"
            :hashNavigation="{
              watchState: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide data-hash="slide1">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('vue')"
              >
                <img src="../assets/vue.svg" alt="vue" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide2">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('nuxt')"
              >
                <img src="../assets/nuxt.svg" alt="nuxt" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide3">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('js')"
              >
                <img src="../assets/js.svg" alt="js" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide4">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('html')"
              >
                <img src="../assets/html.svg" alt="html" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide5">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('css')"
              >
                <img src="../assets/css.svg" alt="css" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide6">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('sass')"
              >
                <img src="../assets/sass.svg" alt="sass" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide7">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('tailwind')"
              >
                <img src="../assets/tailwind.svg" alt="tailwind" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide8">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('git')"
              >
                <img src="../assets/git.svg" alt="git" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide9">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('figma')"
              >
                <img src="../assets/figma.svg" alt="figma" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide10">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('vuetify')"
              >
                <img src="../assets/vuetify.svg" alt="vuetify" />
              </button>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="card cardDesk">
        <div class="detail__tecnology relative">
          <div
            v-show="currentAbility === 'scrum'"
            class="percent relative"
            style="--clr: #f8759d; --percentage: 85"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/scrum.svg" alt="" />
              <span>SCRUM</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentAbility === 'ui'"
            class="percent relative"
            style="--clr: #ffae17; --percentage: 98"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/ui.svg" alt="" />
              <span>UI</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentAbility === 'ux'"
            class="percent relative"
            style="--clr: #20c4c4; --percentage: 85"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/ux.svg" alt="" />
              <span>UX</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentAbility === 'design'"
            class="percent relative"
            style="--clr: #c7c7c7; --percentage: 95"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/design.svg" alt="" />
              <span>Graphic Design</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentAbility === 'responsive'"
            class="percent relative"
            style="--clr: #f04633; --percentage: 95"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/responsive.svg" alt="" />
              <span>Responsive</span>
            </div>
            <div class="dot absolute"></div>
          </div>
        </div>
        <div class="title">
          <span>Habilidades</span>
        </div>
        <div class="list">
          <swiper
            :spaceBetween="30"
            :hashNavigation="{
              watchState: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide data-hash="slide1">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('scrum')"
              >
                <img src="../assets/scrum.svg" alt="SCRUM" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide2">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('ui')"
              >
                <img src="../assets/ui.svg" alt="UI" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide3">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('ux')"
              >
                <img src="../assets/ux.svg" alt="UX" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide4">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('design')"
              >
                <img src="../assets/design.svg" alt="Design" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide5">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('responsive')"
              >
                <img src="../assets/responsive.svg" alt="Responsive" />
              </button>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div v-show="!ability" class="card cardMobile">
        <div class="detail__tecnology relative">
          <div
            v-show="currentTecnology === 'vue'"
            class="percent relative"
            style="--clr: #40b783; --percentage: 85"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/vue.svg" alt="" />
              <span>Vue.js</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'nuxt'"
            class="percent relative"
            style="--clr: #00dc82; --percentage: 75"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/nuxt.svg" alt="" />
              <span>Nuxt.js</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'js'"
            class="percent relative"
            style="--clr: #f7df1e; --percentage: 70"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/js.svg" alt="" />
              <span>JavaScript</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'html'"
            class="percent relative"
            style="--clr: #ed6029; --percentage: 100"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/html.svg" alt="" />
              <span>Html5</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'css'"
            class="percent relative"
            style="--clr: #3caede; --percentage: 100"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/css.svg" alt="" />
              <span>Css3</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'sass'"
            class="percent relative"
            style="--clr: #d06a9d; --percentage: 80"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/sass.svg" alt="" />
              <span>Sass</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'tailwind'"
            class="percent relative"
            style="--clr: #06b6d5; --percentage: 90"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/tailwind.svg" alt="" />
              <span>Tailwind</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'git'"
            class="percent relative"
            style="--clr: #ef5032; --percentage: 65"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/git.svg" alt="" />
              <span>Git</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'figma'"
            class="percent relative"
            style="--clr: #a259ff; --percentage: 75"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/figma.svg" alt="" />
              <span>Figma</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentTecnology === 'vuetify'"
            class="percent relative"
            style="--clr: #1697f6; --percentage: 95"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data circle shadow-inset absolute">
              <img src="../assets/vuetify.svg" alt="" />
              <span>Vuetify</span>
            </div>
            <div class="dot absolute"></div>
          </div>
        </div>
        <div class="title">
          <span>Tecnologías</span>
        </div>
        <div class="list">
          <swiper
            :spaceBetween="30"
            :hashNavigation="{
              watchState: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide data-hash="slide1">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('vue')"
              >
                <img src="../assets/vue.svg" alt="vue" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide2">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('nuxt')"
              >
                <img src="../assets/nuxt.svg" alt="nuxt" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide3">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('js')"
              >
                <img src="../assets/js.svg" alt="js" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide4">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('html')"
              >
                <img src="../assets/html.svg" alt="html" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide5">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('css')"
              >
                <img src="../assets/css.svg" alt="css" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide6">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('sass')"
              >
                <img src="../assets/sass.svg" alt="sass" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide7">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('tailwind')"
              >
                <img src="../assets/tailwind.svg" alt="tailwind" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide8">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('git')"
              >
                <img src="../assets/git.svg" alt="git" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide9">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('figma')"
              >
                <img src="../assets/figma.svg" alt="figma" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide10">
              <button
                class="btn btnSkills shadow circle"
                @click="showSkill('vuetify')"
              >
                <img src="../assets/vuetify.svg" alt="vuetify" />
              </button>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div v-show="ability" class="card cardMobile">
        <div class="detail__tecnology relative">
          <div
            v-show="currentAbility === 'scrum'"
            class="percent relative"
            style="--clr: #f8759d; --percentage: 85"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/scrum.svg" alt="" />
              <span>SCRUM</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentAbility === 'ui'"
            class="percent relative"
            style="--clr: #ffae17; --percentage: 98"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/ui.svg" alt="" />
              <span>UI</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentAbility === 'ux'"
            class="percent relative"
            style="--clr: #20c4c4; --percentage: 85"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/ux.svg" alt="" />
              <span>UX</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentAbility === 'design'"
            class="percent relative"
            style="--clr: #c7c7c7; --percentage: 95"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/design.svg" alt="" />
              <span>Graphic Design</span>
            </div>
            <div class="dot absolute"></div>
          </div>
          <div
            v-show="currentAbility === 'responsive'"
            class="percent relative"
            style="--clr: #f04633; --percentage: 95"
          >
            <div class="circle-pass circle shadow absolute"></div>
            <svg class="relative">
              <circle cx="125" cy="125" r="125"></circle>
              <circle cx="125" cy="125" r="125"></circle>
            </svg>
            <div class="data dataAbility circle shadow-inset absolute">
              <img class="imgAbility" src="../assets/responsive.svg" alt="" />
              <span>Responsive</span>
            </div>
            <div class="dot absolute"></div>
          </div>
        </div>
        <div class="title">
          <span>Habilidades</span>
        </div>
        <div class="list">
          <swiper
            :spaceBetween="30"
            :hashNavigation="{
              watchState: true,
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide data-hash="slide1">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('scrum')"
              >
                <img src="../assets/scrum.svg" alt="SCRUM" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide2">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('ui')"
              >
                <img src="../assets/ui.svg" alt="UI" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide3">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('ux')"
              >
                <img src="../assets/ux.svg" alt="UX" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide4">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('design')"
              >
                <img src="../assets/design.svg" alt="Design" />
              </button>
            </swiper-slide>
            <swiper-slide data-hash="slide5">
              <button
                class="btn btnSkills shadow circle"
                @click="showAbility('responsive')"
              >
                <img src="../assets/responsive.svg" alt="Responsive" />
              </button>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="changeTypeSkill">
        <button class="btn btnChangeSkill" @click="ability = !ability">
          {{ ability ? 'Ver Tecnologías' : 'Ver Habilidades' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import 'swiper/css/navigation'

import { Navigation } from 'swiper'

import Title from '../components/global/Title.vue'
import Spinner from '../components/global/SpringSpinner.vue'

// import { ref, watchEffect } from 'vue'

export default {
  components: { Swiper, SwiperSlide, Title, Spinner },
  data() {
    return {
      modules: [Navigation],
      currentTecnology: 'vue',
      currentAbility: 'scrum',
      ability: false,
    }
  },
  methods: {
    showSkill(e) {
      this.currentTecnology = e
      return e
    },
    showAbility(e) {
      this.currentAbility = e
      return e
    },
  },
}
</script>

<style scoped>
section {
  padding: 80px 0 60px;
  box-sizing: border-box;
  display: grid;
  align-items: center;
  gap: 40px;
}

.containerS {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}

.card {
  height: 100%;
  display: grid;
  grid-template-rows: 270px 50px 70px;
  gap: 10px;
}
.cardMobile {
  display: none;
}

.detail__tecnology {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.detail__tecnology .percent {
  width: 265px;
  height: 265px;
}
.detail__tecnology .percent svg {
  width: 265px;
  height: 265px;
  transform: rotate(270deg);
}
.detail__tecnology .percent svg circle {
  width: 100%;
  height: 100%;
  fill: transparent;
  stroke: var(--bg-5);
  stroke-width: 12;
  transform: translate(7px, 7px);
}
.detail__tecnology .percent svg circle:nth-child(2) {
  stroke: var(--clr);
  stroke-dasharray: 786;
  stroke-dashoffset: calc(786 - (786 * var(--percentage)) / 100);
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
  animation-delay: 1.5s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.circle-pass {
  height: 261px;
  width: 261px;
  transform: rotate(-270deg);
  background-color: var(--bg-5);
  top: 2px;
  left: 2px;
}
.dot {
  inset: 1.5px;
  transform: rotate(calc(3.6deg * var(--percentage)));
  animation: animationDot1 1.5s ease-in forwards;
}
.dot::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--bg-5);
  border: 4px solid var(--clr);
  transform: translateX(-50%);
  box-shadow: var(--shadow);
}

@keyframes animationDot1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(calc(3.6deg * var(--percentage)));
  }
}

.canva {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px 0px;
}
.score {
  transform: rotate(65deg);
}

.data {
  width: 240px;
  height: 240px;
  background-color: var(--bg-5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 14px;
  left: 12px;
}

.dataAbility {
  gap: 25px;
}

.data img {
  width: 140px;
}

.data .imgAbility {
  width: 120px;
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

.changeTypeSkill {
  display: none;
}

@media (max-width: 870px) {
  section {
    padding: 80px 0 80px;
  }
  .cardMobile {
    display: grid;
  }
  .containerS {
    grid-template-columns: 1fr;
    position: relative;
  }
  .changeTypeSkill {
    height: 30px;
    bottom: -20px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: absolute;
  }
  .changeTypeSkill .btnChangeSkill {
    color: var(--bg-3);
    font-weight: 300;
    opacity: 0.3;
    font-style: oblique;
    font-size: 14px;
    border: 0.8px solid var(--bg-3);
    border-radius: 25px;
    padding: 0px 20px;
    position: relative;
  }

  .btnChangeSkill {
    border: none;
    overflow: hidden;
  }
  .btnChangeSkill:hover {
    opacity: 1;
  }
  .btnChangeSkill:before {
    position: absolute;
    content: '';
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: var(--bg-4);
    animation: changeKillType 3s ease-in-out infinite;
  }
  .btnChangeSkill:hover {
    opacity: 0.7;
  }
  .btnChangeSkill:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
      -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
      inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }

  @keyframes changeKillType {
    0% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    80% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }
    81% {
      -webkit-transform: scale(4) rotate(45deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(50) rotate(45deg);
      opacity: 0;
    }
  }

  .card {
    grid-template-rows: 250px 60px 1fr;
    gap: 10px;
  }

  .cardDesk {
    display: none;
  }
  .swiper-slide {
    height: 70%;
  }

  .data img {
    width: 120px;
  }
}
</style>
