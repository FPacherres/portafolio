<template>
  <div class="container">
    <!-- <navCustom @toggleMenu="toggleMenu" /> -->
    <home />
    <about />
    <skills />
    <studies />
    <experience />
    <!-- <contact /> -->
    <button class="btnFloat btn circle shadow">
      <a href="#contact">
        <i class="icon icon-message"></i>
      </a>
    </button>
    <modal />
    <!-- <menuMobile v-if="menuState" @toggleMenu="toggleMenu" /> -->
    <loading />
  </div>
</template>

<script>
import home from './views/Home.vue'
import about from './views/About.vue'
import skills from './views/Skills.vue'
import studies from './views/Studies.vue'
import experience from './views/Experience.vue'
// import contact from '../components/sections/contact.vue'
// import loading from '../components/sections/loading.vue'
// import navCustom from '../components/custom/navCustom.vue'
// import modal from '../components/custom/modal.vue'
// import menuMobile from '../components/custom/menuMobile.vue'
export default {
  name: 'IndexPage',
  components: {
    home,
    about,
    skills,
    studies,
    experience,
    // contact,
    // navCustom,
    // modal,
    // menuMobile,
    // loading
  },
  data() {
    return {
      menuState: false,
    }
  },
  mounted() {
    const sectionObj = {
      home: 0,
      about: 1,
      skills: 2,
      studies: 3,
      experience: 4,
      contact: 5,
    }

    const $sections = document.querySelectorAll('section')

    const options = {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0.5,
    }
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentOption = sectionObj[entry.target.id]
          this.selectOptionNav(currentOption)
        }
      })
    }
    const observer = new IntersectionObserver(callback, options)

    $sections.forEach((section) => observer.observe(section))
  },
  methods: {
    selectOptionNav(n) {
      const options = [
        document.getElementById('optionNav1'),
        document.getElementById('optionNav2'),
        document.getElementById('optionNav3'),
        document.getElementById('optionNav4'),
        document.getElementById('optionNav5'),
      ]
      for (let i = 0; i <= options.length; i++) {
        if (i === n) {
          options[i].classList.add('selected')
        } else if (options[i].classList.value === 'selected') {
          options[i].classList.remove('selected')
        }
      }
    },
    toggleMenu(state) {
      this.menuState = state
    },
  },
}
</script>

<style>
@import url('./assets/styles/styles.css');
@import url('./assets/styles/colors.css');
/* @import url('../assets/icons/style.css'); */
</style>

<!-- <style>
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
</style> -->
