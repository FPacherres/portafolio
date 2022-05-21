<script>
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Skills from "./views/Skills.vue";
import Studies from "./views/Studies.vue";
import Experience from "./views/Experience.vue";
import FHeader from "./components/global/FHeader.vue";
import NavMobile from "./components/global/NavMobile.vue";
export default {
  components: {Home, About, Skills, Studies, Experience, FHeader, NavMobile},
  data() {
    return {
      MenuMobile: false
    }
  }
}
</script>

<template>
  <div class="container relative is-full-width-screen">
    <nav-Mobile v-if="MenuMobile" @close="MenuMobile = false" class="is-full-width-screen is-full-height fixed absolute z-max" />
    <f-header @openMenueMobile="MenuMobile = true" class="is-full-width fixed absolute" />
    <home class="is-full-width is-full-height" />
    <about class="is-full-width is-full-height" />
    <skills class="is-full-width is-full-height" />
    <studies class="is-full-width is-full-height" />
    <experience class="is-full-width is-full-height" />
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
}
body {
  margin: 0px;
  background-color: var(--bg-5);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app {
  overflow-y: auto;
}
#app::-webkit-scrollbar {
  width: 5px;
}
#app::-webkit-scrollbar-thumb {
  width: 5px;
  border-radius: 4px;
  background-color: var(--bg-1);
}
.is-full-width-screen {
  width: 100%;
}
.is-full-width {
  width: 1000px;
}
.is-full-height {
  height: 100vh;
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
.circle {
  border-radius: 50%;
  box-shadow: var(--shadow);  
  display: flex;
  justify-content: center;
  align-items: center;
}
.z-max {
  z-index: 999;
}
html {
  --bg-1: #ef0070;
  --bg-2: #fac20b;
  --bg-3: #404855;
  --bg-4: #b3b3b3;
  --bg-5: #edf1fd;
  --shadow: rgb(204, 219, 232) 3px 3px 6px 0px,
    rgba(255, 255, 255, 0.8) -3px -3px 6px 1px;
}

@media (prefers-color-scheme: dark) {
  html {
    --white: #ffffff;

    --bg-1: #fac20b;
    --bg-2: #ef0070;
    --bg-3: #edf1fd;
    --bg-4: #b3b3b3;
    --bg-5: #404855;
    --shadow: #323842 3px 3px 6px 0px,
      #4c535d -3px -3px 6px 1px;
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
  #app::-webkit-scrollbar {
  width: 0;
  }
}
</style>
