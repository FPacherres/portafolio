<template>
  <nav>
    <img @click="open" src="../../assets/logo.svg" alt="" />
    <ul>
      <li>
        <span>Home</span>
        <div class="point"></div>
      </li>
      <li>
        <span>About</span>
        <div class="point"></div>
      </li>
      <li>
        <span>Skills</span>
        <div class="point"></div>
      </li>
      <li>
        <span>Studies</span>
        <div class="point"></div>
      </li>
      <li>
        <span>Experience</span>
        <div class="point"></div>
      </li>
    </ul>
    <button class="btn circle theme" @click="changeTheme">
      <SunIcon v-if="icon" class="icon" />
      <MoonIcon v-else class="icon" />
    </button>
  </nav>
</template>

<script>
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'
export default {
  name: 'FHeader',
  components: { MoonIcon, SunIcon },
  data() {
    return {
      colorScheme: matchMedia('(prefers-color-scheme: dark)').matches,
      icon: true,
    }
  },
  methods: {
      open() {
        window.innerWidth <= 870 ?
            this.$emit('openMenueMobile') : ''
      },
    changeTheme() {
      let newStyle = document.documentElement.style
      if (!this.colorScheme) {
        newStyle.setProperty('--bg-1', '#fac20b')
        newStyle.setProperty('--bg-2', '#ef0070')
        newStyle.setProperty('--bg-3', '#edf1fd')
        newStyle.setProperty('--bg-4', '#b3b3b3')
        newStyle.setProperty('--bg-5', '#404855')
        newStyle.setProperty(
          '--shadow',
          '#323842 3px 3px 6px 0px, #4c535d -3px -3px 6px 1px'
        )
        this.icon = true
      } else {
        newStyle.setProperty('--bg-1', '#ef0070')
        newStyle.setProperty('--bg-2', '#fac20b')
        newStyle.setProperty('--bg-3', '#404855')
        newStyle.setProperty('--bg-4', '#b3b3b3')
        newStyle.setProperty('--bg-5', '#edf1fd')
        newStyle.setProperty(
          '--shadow',
          'rgb(204, 219, 232) 3px 3px 6px 0px, rgba(255, 255, 255, 0.8) -3px -3px 6px 1px'
        )
        this.icon = false
      }
      this.colorScheme = !this.colorScheme
    },
  },
}
</script>

<style scoped>
nav {
  background-color: var(--bg-5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
img {
  width: 40px;
  height: auto;
}
ul {
  width: 550px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 300;
  transition: 0.4s;
  color: var(--bg-3);
  padding: 0px;
}
li {
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li:hover {
  color: var(--bg-1);
  transition: 0.4s;
}
li:hover .point {
  animation: point 1s ease;
  background-color: var(--bg-1);
  width: 7px;
}
.icon {
  width: 20px;
  height: 20px;
  color: var(--bg-3);
  margin: -1px 0 0 1.5px;
}
.theme {
  height: 30px;
  width: 30px;
}
.point {
  background-color: var(--bg-3);
  width: 0px;
  height: 2px;
  border-radius: 2px;
}

@keyframes point {
  0% {
    width: 0;
  }
  50% {
    width: 70%;
  }
}

@media (max-width: 870px) {
  ul {
    display: none;
  }
  .theme {
      width: 45px;
      height: 45px;
  }
  .icon {
    width: 22px;
    height: 22px;
  }
  img {
    cursor: pointer;
  }
}
</style>
