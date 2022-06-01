<template>
  <div class="card relative">
    <img class="logo absolute" src="../../assets/projects/fab-cov.svg" alt="logo" />
    <div class="container-info absolute">
      <div class="type relative">
        <div class="tag absolute">
          <fa class="icon" :icon="['fa', 'user-check']" />
          <span>Proyecto Personal</span>
        </div>
      </div>
      <div class="pos"><span>Js Developer</span></div>
      <div class="description">
        <p>
          App que muestra datos actuales del covid-19 a nivel global, y que
          permite descargar esta información en una imagen para compartir por redes.
        </p>
      </div>
      <div class="snippet">
        <span>Culminado - <strong>2021</strong></span>
      </div>
      <div class="actions">
        <button class="btn">Visitar</button>
        <button class="btn"><fa class="icon" :icon="['fab', 'github']" /></button>
        <button class="btn"><fa class="icon" :icon="['fa', 'play']" /></button>
      </div>
      <div class="tecnology-title">
        <span>Tecnologías</span>
      </div>
      <div class="tecnology-items">
        <img v-for="tec in tecnologies" :key="tec" src="../../assets/css.svg" alt="">
      </div>
      <div class="title">
        <img src="../../assets/projects/fab-cov-text.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {},
  props: {},
  data() {
    return {
      tecnologies: [
        'html', 'sass', 'js', 'git'
      ]
    }
  },
}
</script>

<style scoped>
.card {
  width: 280px;
  height: 420px;
  background-color: #172126;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #E4E4E4;
}
.card .logo {
  height: 100%;
  width: auto;
  opacity: 0.2;
  left: -210px;
}
.container-info {
  height: 100%;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 18px 50px 1fr 20px 25px 50px 25px 50px;
  gap: 5px;
}
.type .tag {
  color: #fff;
  background-color: #000;
  font-size: 10px;
  line-height: 10px;
  right: -30px;
  padding: 5px 30px;
  border-radius: 20px 0 0 20px;
}
.type .tag .icon {
  margin-right: 5px;
}
.type .tag span {
  text-transform: uppercase;
  font-weight: 200;
}
.pos {
  display: flex;
  align-items: flex-end;
  color: #ff005e;
  font-weight: 600;
  font-style: oblique;
  font-size: 16px;
}
.description {
}
.description p {
  margin: 0;
  font-size: 11px;
  width: 200px;
  font-weight: 200;
  text-align: end;
  margin-left: auto;
}
.snippet {
  text-align: start;
  font-size: 10px;
  padding-top: 4px;
  font-weight: 300;
}
.snippet strong {
  font-weight: 500;
}
.actions {
  display: flex;
  align-items: flex-end;
  gap: 5px;
}
.actions button {
  color: #fff;
  font-size: 14px;
  background-color: #3F4B59;
  padding: 5px 7px;
  border-radius: 5px;
  transition: .3s;
}
.actions button:nth-child(1) {
  color: #fff;
  font-size: 12px;
  background-color: #3F4B59;
  padding: 6.5px 30px;
}
.actions button .icon {
  margin-bottom: -1px;
}
.actions button:hover {
  background-color: #ff005e;
  transition: .3s;
}
.tecnology-title {
  text-align: end;
  font-size: 14px;
  font-weight: 300;
  padding-top: 30px;
}
.tecnology-items {
  background-color: rgb(4, 133, 246);
  display: flex;
  justify-content: flex-end;
  align-items: end;
  /* gap: 5px; */
  box-sizing: border-box;
}
.tecnology-items img {
  height: 100%;
  width: auto;
}
.title {
  display: flex;
  justify-content: end;
  align-items: flex-end;
}
.title img {
  height: 25px;
  width: auto;
}

@media (max-width: 870px) {
}
</style>
