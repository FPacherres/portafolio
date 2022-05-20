<script setup>
import Home from './views/Home.vue'
import About from './views/About.vue'
import Skills from './views/Skills.vue'
import Studies from './views/Studies.vue'
import Experience from './views/Experience.vue'
import FHeader from './components/global/FHeader.vue'
</script>

<template>
  <div class="container relative">
    <f-header class="is-full-width absolute" />
    <home class="is-full-width is-full-height" />
    <about class="is-full-width is-full-height" />
    <skills class="is-full-width is-full-height" />
    <studies class="is-full-width is-full-height" />
    <experience class="is-full-width is-full-height" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
}
body {
  margin: 0px;
  background-color: #EDF1FD;
}
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app{
  overflow-y: auto;
}
#app::-webkit-scrollbar {
  width: 5px;
}
#app::-webkit-scrollbar-thumb {
  width: 5px;
  border-radius: 4px;
  background-color: #EF0070;
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
</style>
