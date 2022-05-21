<template>
  <nav>
    <img src="../../assets/logo.svg" alt="" />
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Studies</li>
      <li>Experience</li>
    </ul>
    <button class="btn theme" @click="changeTheme">
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
      icon: true
    }
  },
  methods: {
    changeTheme() {
      let newStyle = document.documentElement.style
      if (!this.colorScheme) {
         newStyle.setProperty('--bg-1', '#fac20b')
        newStyle.setProperty('--bg-2', '#ef0070')
        newStyle.setProperty('--bg-3', '#edf1fd')
        newStyle.setProperty('--bg-4', '#b3b3b3')
        newStyle.setProperty('--bg-5', '#404855')
        newStyle.setProperty('--shadow', '#323842 3px 3px 6px 0px, #4c535d -3px -3px 6px 1px')
        this.icon = true
      } else {
        newStyle.setProperty('--bg-1', '#ef0070')
        newStyle.setProperty('--bg-2', '#fac20b')
        newStyle.setProperty('--bg-3', '#404855')
        newStyle.setProperty('--bg-4', '#b3b3b3')
        newStyle.setProperty('--bg-5', '#edf1fd')
        newStyle.setProperty('--shadow', 'rgb(204, 219, 232) 3px 3px 6px 0px, rgba(255, 255, 255, 0.8) -3px -3px 6px 1px')
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
}
li:nth-child(1) {
  color: var(--bg-1);
}
li {
  width: 100%;
  cursor: pointer;
}
li:hover {
  color: var(--bg-1);
  transition: 0.4s;
}
.icon {
  width: 20px;
  height: 20px;
  color: var(--bg-3);
  margin: -1px 0 0 1.5px;
}
.theme {
  border-radius: 50%;
  box-shadow: var(--shadow);
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
