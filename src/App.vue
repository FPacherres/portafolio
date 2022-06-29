<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Skills from "./views/Skills.vue";
import Studies from "./views/Studies.vue";
import Experience from "./views/Experience.vue";
import Contact from "./views/Contact.vue";
import FHeader from "./components/global/FHeader.vue";
import NavMobile from "./components/global/NavMobile.vue";
import Loading from "./views/Loading.vue";
export default {
  components: { Home, About, Skills, Studies, Experience, FHeader, NavMobile, Loading, Contact },
  data() {
    return {
      MenuMobile: false
    }
  },
  methods: {
    selectNav(n) {
      let li = document.querySelectorAll(".liNav")
      for(let i=0; i <= li.length; i++) {
        i == n 
          ? li[i].classList.add('selected')
          : li[i].classList.remove('selected')
      }
    }
  },
  mounted() {
    let searchLi = (id) => {
      if(id == 'home') return 0
      if(id == 'about') return 1
      if(id == 'skills') return 2
      if(id == 'studies') return 3
      if(id == 'experience') return 4
      if(id == 'contact') return 5
    }

    const $sections = document.querySelectorAll('.view')

    const options = {
      rootMargin: '0px 0px 0px 0px',
      threshold: .5,
    }

    const callback = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          let currentLi = searchLi(entry.target.id)
          this.selectNav(currentLi)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options)
    
    $sections.forEach( section => observer.observe(section))
  }
}
</script>

<template>
  <loading />
  <div class="container relative">
    <f-header @openMenueMobile="MenuMobile = true" class="is-full-width fixed absolute z-max" />
    <nav-Mobile v-if="MenuMobile" @close="MenuMobile = false"
      class="is-full-width-screen is-full-height fixed absolute z-max" />
    <div id="home" class="item-area view is-full-height is-full-width">
      <home class="item-area is-full-width is-full-height relative" />
    </div>
    <div id="about" class="item-area view is-full-height is-full-width">
      <about class="item-area is-full-width is-full-height" />
    </div>
    <div id="skills" class="item-area view is-full-height is-full-width">
      <skills class="item-area is-full-width is-full-height" />
    </div>
    <div id="studies" class="item-area view is-full-height is-full-width">
      <studies class="item-area is-full-width is-full-height" />
    </div>
    <div id="experience" class="item-area view is-full-height is-full-width">
      <experience class="item-area is-full-width is-full-height" />
    </div>
    <div id="contact" class="item-area view is-full-height is-full-width">
      <contact class="item-area is-full-width is-full-height" />
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--bg-3);
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

body {
  margin: 0px;
  background-color: var(--bg-5);
}

.container {
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100%;
}

.item-area {
  scroll-snap-align: start;
  margin: 0 auto;
  box-sizing: border-box;
}

.container::-webkit-scrollbar {
  width: 5px;
}

.container::-webkit-scrollbar-thumb {
  width: 5px;
  border-radius: 4px;
  background-color: var(--bg-1);
}

.is-full-width-screen {
  width: 100%;
}

.is-full-width {
  width: 800px;
}

.is-full-height {
  height: 100vh;
  min-height: 750px;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.fixed {
  position: fixed;
}

.btn {
  outline: none;
  cursor: pointer;
  border: none;
  background: transparent;
}

h1 {
  margin: 0px;
}

.circle {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shadow {
  box-shadow: var(--shadow);
}

.shadow-inset {
  box-shadow: var(--shadow-inset);
}

.shadow-total {
  box-shadow: var(--shadow-total);
}

.z-max {
  z-index: 900;
}

.swiper-button-prev,
.swiper-button-next {
  color: var(--bg-1);
  background-color: var(--bg-5);
  height: 100%;
  top: 22px;
}

.swiper-button-prev {
  left: 0px;
}

.swiper-button-next {
  right: 0px;
}

html {
  --white: #ffffff;
  --red: #ff2400;

  --bg-1: #ef0070;
  --bg-2: #fac20b;
  --bg-3: #35455E;
  --bg-4: #666666;
  --bg-5: #edf1fd;
  --bg-6: #b4bacb;
  --shadow: rgb(204, 219, 232) 3px 3px 6px 0px,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px;
  --shadow-inset: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
  --shadow-total: rgb(204, 219, 232) 3px 3px 6px 0px,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px, rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset;
  ;
  --shadow-btn: #b4911d 3px 3px 6px 0px inset,
    #ffe180 -3px -3px 6px 1px inset;

}

@media (prefers-color-scheme: dark) {
  html {
    --white: #ffffff;
    --red: #ff2400;

    --bg-1: #fac20b;
    --bg-2: #ef0070;
    --bg-3: #edf1fd;
    --bg-4: #b3b3b3;
    --bg-5: #1f2937;
    --bg-6: #304157;
    --shadow: #2e3b4c 3px 3px 6px 0px,
      #161e29 -3px -3px 6px 1px;
    --shadow-inset: #2e3b4c 3px 3px 6px 0px inset,
      #161e29 -3px -3px 6px 1px inset;
    --shadow-total: #161e29 3px 3px 6px 0px,
      #2e3b4c -3px -3px 6px 1px, #161e29 3px 3px 6px 0px inset,
      #2e3b4c -3px -3px 6px 1px inset;
    --shadow-btn: #710d3c 3px 3px 6px 0px inset,
      #ff55a4 -3px -3px 6px 1px inset;
  }
}

@media (max-width: 1090px) {
  .is-full-width {
    width: 750px;
  }
}

@media (max-width: 870px) {
  .is-full-width {
    width: 90vw;
  }

  .container::-webkit-scrollbar {
    width: 1px;
  }

  .container::-webkit-scrollbar-thumb {
    width: 1px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    height: 70%;
  }
}
</style>
