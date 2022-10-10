<template>
  <div class="container">
    <div id="menuMobile">
      <button class="closeMenuMobile" @click="toggleMenu(false)">x</button>
        <li id="opNavMobile1" class="selected"><a href="#home" @click="toggleMenu(false)">Home</a></li>
        <li id="opNavMobile2"><a href="#about" @click="toggleMenu(false)">About</a></li>
        <li id="opNavMobile3"><a href="#skills" @click="toggleMenu(false)">Skills</a></li>
        <li id="opNavMobile4"><a href="#studies" @click="toggleMenu(false)">Studies</a></li>
        <li id="opNavMobile5"><a href="#experience" @click="toggleMenu(false)">Experience</a></li>
        <li id="opNavMobile6"><a href="#contact" @click="toggleMenu(false)">Contact</a></li>
    </div>
    <navCustom @toggleMenu="toggleMenu" />
    <home />
    <about />
    <skills />
    <studies />
    <experience />
    <contact />
    <button class="btn" v-if="visibilityBtnFloat">
      <a v-if="noContact" href="#home" class="btnFloat btn circle shadow">
        <svg
            id="arrow"
            width="21"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              fill="#ffffff"
              clip-rule="evenodd"
              d="M10.723 8.8c-.07-.043-7.722-7.46-8.216-7.94a1.18 1.18 0 0 0-.882-.358C.955.52.379 1.112.523 1.828c.078.388.3.561.494.748l8.831 8.539c.098.095.2.191.36.265.519.245 1.025.085 1.382-.262l8.836-8.544c.186-.178.413-.366.487-.744.143-.72-.433-1.321-1.117-1.33-.382-.004-.64.146-.878.375l-6.939 6.71-.63.609c-.15.145-.494.49-.627.605h.001z"
            />
          </svg>
      </a>
      <a v-else href="#contact" class="btnFloat btn circle shadow">
        <i class="icon icon-message"></i>
      </a>
    </button>
    <modal />
    <loading />
  </div>
</template>

<script>
import home from './views/Home.vue'
import about from './views/About.vue'
import skills from './views/Skills.vue'
import studies from './views/Studies.vue'
import experience from './views/Experience.vue'
import contact from './views/Contact.vue'
import loading from './components/custom/Loading.vue'
// import modal from '../components/custom/modal.vue'
import navCustom from './components/custom/NavCustom.vue'
export default {
  name: 'IndexPage',
  components: {
    home,
    about,
    skills,
    studies,
    experience,
    contact,
    navCustom,
    // modal,
    loading
  },
  data() {
    return {
      noContact: true,
      visibilityBtnFloat: true
    }
  },
  mounted() {
    const sectionObj = {
      home: 1,
      about: 2,
      skills: 3,
      studies: 4,
      experience: 5,
      contact: 6,
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
          this.noContact = currentOption === 6
          this.visibilityBtnFloat = currentOption !== 1
          this.selectOptionNav(currentOption)
        }
      })
    }
    const observer = new IntersectionObserver(callback, options)

    $sections.forEach((section) => observer.observe(section))
  },
  methods: {
    selectOptionNav(n) {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        let opNavMobile1 = document.getElementById('opNavMobile1')
        let opNavMobile2 = document.getElementById('opNavMobile2')
        let opNavMobile3 = document.getElementById('opNavMobile3')
        let opNavMobile4 = document.getElementById('opNavMobile4')
        let opNavMobile5 = document.getElementById('opNavMobile5')
        let opNavMobile6 = document.getElementById('opNavMobile6')
        for (let i = 1; i <= 6; i++) {
          if (n === i) {
            if (i === 1) opNavMobile1.classList.add('selected')
            if (i === 2) opNavMobile2.classList.add('selected')
            if (i === 3) opNavMobile3.classList.add('selected')
            if (i === 4) opNavMobile4.classList.add('selected')
            if (i === 5) opNavMobile5.classList.add('selected')
            if (i === 6) opNavMobile6.classList.add('selected')
          } else {
            if (i === 1 && opNavMobile1.classList.contains('selected'))
              opNav1.classList.remove('selected')
            if (i === 2 && opNavMobile2.classList.contains('selected'))
              opNav2.classList.remove('selected')
            if (i === 3 && opNavMobile3.classList.contains('selected'))
              opNav3.classList.remove('selected')
            if (i === 4 && opNavMobile4.classList.contains('selected'))
              opNav4.classList.remove('selected')
            if (i === 5 && opNavMobile5.classList.contains('selected'))
              opNav5.classList.remove('selected')
            if (i === 6 && opNavMobile6.classList.contains('selected'))
              opNav6.classList.remove('selected')
          }
        }
      } else {
        let opNav1 = document.getElementById('opNav1')
        let opNav2 = document.getElementById('opNav2')
        let opNav3 = document.getElementById('opNav3')
        let opNav4 = document.getElementById('opNav4')
        let opNav5 = document.getElementById('opNav5')
        for (let i = 1; i <= 5; i++) {
          if (n === i) {
            if (i === 1) opNav1.classList.add('selected')
            if (i === 2) opNav2.classList.add('selected')
            if (i === 3) opNav3.classList.add('selected')
            if (i === 4) opNav4.classList.add('selected')
            if (i === 5) opNav5.classList.add('selected')
          } else {
            if (i === 1 && opNav1.classList.contains('selected'))
              opNav1.classList.remove('selected')
            if (i === 2 && opNav2.classList.contains('selected'))
              opNav2.classList.remove('selected')
            if (i === 3 && opNav3.classList.contains('selected'))
              opNav3.classList.remove('selected')
            if (i === 4 && opNav4.classList.contains('selected'))
              opNav4.classList.remove('selected')
            if (i === 5 && opNav5.classList.contains('selected'))
              opNav5.classList.remove('selected')
          }
        }
      }
    },
    toggleMenu(state) {
      let $menuMobile = document.getElementById('menuMobile')
      $menuMobile.style.transform = state ? 'translateX(0)' : 'translateX(-100vw)'
      $menuMobile.style.transition = '1s'
    },
  },
}
</script>

<style>
@import url('./assets/styles/styles.css');
@import url('./assets/styles/colors.css');
@import url('./assets/icons/style.css');

#menuMobile li {
  list-style: none;
}

#menuMobile li.selected a {
  color: var(--bg-1);
}

#menuMobile li a {
  text-decoration: none;
  color: var(--bg-3);
  cursor: pointer;
  display: flex;
  justify-content: center;
}

#menuMobile li a:hover {
  color: var(--bg-1);
  transition: 0.4s;
}

#arrow {
  transform: rotate(180deg);
  margin-bottom: 5px;
}
</style>
