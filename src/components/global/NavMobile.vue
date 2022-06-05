<template>
  <nav class="navMobile">
    <button class="btn" @click="closed">
      <ChevronLeftIcon class="icon closed" />
    </button>
    <ul>
      <li>
        <a href="#home">
          <span @click="closed">Home</span>
        </a>
      </li>
      <li>
        <a href="#about">
          <span  @click="closed">About</span>
        </a>
      </li>
      <li>
        <a href="#skills">
          <span  @click="closed">Skills</span>
        </a>
      </li>
      <li>
        <a href="#studies">
          <span  @click="closed">Studies</span>
        </a>
      </li>
      <li>
        <a href="#experience">
          <span  @click="closed">Experience</span>
        </a>
      </li>
      <li>
        <a href="#contact">
          <span  @click="closed">Contact</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ChevronLeftIcon } from '@heroicons/vue/outline'
export default {
  name: 'NavMobile',
  components: { ChevronLeftIcon },
  data() {
    return {}
  },
  methods: {
    closed() {
      let nav = document.querySelector('.navMobile')
      nav.style.borderRadius = '50%'
      nav.style.transform = 'scale(0)'
      nav.style.transition = '.3s'
      setTimeout(() => this.$emit('close'), 350)
    },
  },
}
</script>

<style scoped>
.navMobile {
  transform: scale(1);
  transition: .3s;
}
nav {
  background-color: var(--bg-5);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  padding: 20px 50px;
  box-sizing: border-box;
}

img {
  width: 40px;
  height: auto;
}

ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  list-style: none;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 300;
  transition: 0.4s;
  padding: 0px;
}

li {
  width: 100%;
  text-align: end;
}
a {
  cursor: pointer;
  width: auto;
  color: var(--bg-3);
  text-decoration: none;
}

li:hover {
  color: var(--bg-1);
  transition: 0.4s;
}

.icon {
  width: 40px;
  height: 40px;
  color: var(--bg-3);
  margin: -1px 0 0 1.5px;
}

.closed {
  margin-right: -20px;
}

@media (min-width: 870px) {
  ul {
    display: none;
  }
}
</style>
