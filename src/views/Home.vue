<template>
  <section>
    <div class="content relative">
      <div class="text">
        <div class="absolute">
          <h1>Hola soy</h1>
          <h1>Fabian Pacherres</h1>
          <h1>Front-End Developer</h1>
          <div class="line"></div> 
        </div>
      </div>
      <div class="photo circle shadow">
        <div class="photo-sub circle shadow-inset">
          <img src="../assets/photo.png" alt="">
        </div>
      </div>
    </div>
    <div class="socialNetwork">
      <a href="https://codepen.io/FabianXRL16" target="blank" class="btn circle shadow btnSocial">
        A
      </a>
      <!-- <a href="https://twitter.com/FabianXRL16" target="blank" class="btn circle shadow btnSocial">
        <i class="icon fa fa-twitter"></i>
      </a>
      <a href="https://codepen.io/FabianXRL16" target="blank" class="btn circle shadow btnSocial">
        <i class="icon fa fa-codepen"></i>
      </a>
      <a href="https://github.com/FabianXRL16" target="blank" class="btn circle shadow btnSocial">
        <i class="icon fa fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/fabianxrl16/" target="blank" class="btn circle shadow btnSocial">
        <i class="icon fa fa-linkedin-in"></i>
      </a> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {},
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
  padding-top: 30px;
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
  margin: -1px 0 0 1.5px;
}
.icon svg path {
  fill: var(--bg-3);
}
.text {
  text-align: start;
  display: flex;
  align-items: center;
}
h1 {
  margin: 0px;
}
.text h1:nth-child(1) {
  font-weight: 300;
  font-size: 25px;
  margin-bottom: -8px;
  margin-left: -2.5px;
}
.text h1:nth-child(2) {
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 500;
  color: var(--bg-1);
  margin-left: -4px;
}
.text h1:nth-child(3) {
  font-weight: 400;
  font-size: 30px;
  margin-top: -8px;
  margin-left: -2.5px;
}
.line {
  width: 145px;
  height: 5px;
  background-color: var(--bg-2);
  margin-top: 10px;
}
.photo {
  width: 450px;
  height: 450px;
  background: var(--bg-5);
  border-radius: 50%;
}
.photo-sub {
  width: 410px;
  height: 410px;
  background: var(--bg-5);
  overflow: hidden;
}
.photo img {
  width: 350px;
  height: auto;
  margin: 0 45px -180px 0;
}
</style>
