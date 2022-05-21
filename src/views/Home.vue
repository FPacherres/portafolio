<template>
  <section>
    <div class="content">
      <div class="text">
        <h1>Hola soy</h1>
        <h1>Fabian Pacherres</h1>
        <h1>Front-End Developer</h1>
        <div class="line"></div> 
      </div>
      <div class="photo circle">
        <img src="../assets/photo.png" alt="">
      </div>
    </div>
    <div class="socialNetwork">
      <a href="https://twitter.com/FabianXRL16" target="blank" class="btn circle btnSocial">
        <MoonIcon class="icon" />
      </a>
      <a href="https://codepen.io/FabianXRL16" target="blank" class="btn circle btnSocial">
        <MoonIcon class="icon" />
      </a>
      <a href="https://github.com/FabianXRL16" target="blank" class="btn circle btnSocial">
        <MoonIcon class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/fabianxrl16/" target="blank" class="btn circle btnSocial">
        <MoonIcon class="icon" />
      </a>
    </div>
  </section>
</template>

<script>
import { MoonIcon } from '@heroicons/vue/solid'
export default {
  name: 'Home',
  components: {
    MoonIcon
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
section {
  padding: 80px 0 60px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 80px;
}
.content {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.socialNetwork {
  display: flex;
  gap: 10px;
}
.btnSocial {
  height: 50px;
  width: 50px;
}
.icon {
  width: 35px;
  height: 35px;
  color: var(--bg-3);
  margin: -1px 0 0 1.5px;
}
.text {
  text-align: start;
}
h1 {
  font-weight: 400;
  margin: 0px;
}
.text h1:nth-child(1) {
  font-size: 25px;
  margin-bottom: -8px;
  margin-left: -2.5px;
}
.text h1:nth-child(2) {
  text-transform: uppercase;
  font-size: 50px;
  color: var(--bg-1);
  margin-left: -4px;
}
.text h1:nth-child(3) {
  font-size: 30px;
  margin-top: -8px;
  margin-left: -2.5px;
}
.line {
  width: 145px;
  height: 5px;
  background-color: var(--bg-1);
  margin-top: 10px;
}
.photo {
  width: 400px;
  height: 400px;
  background: var(--bg-5);
  border-radius: 50%;
  overflow: hidden;
}
.photo img {
  width: 350px;
  height: auto;
  margin: 0 45px -180px 0;
}
</style>
