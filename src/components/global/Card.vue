<template>
  <div
    class="card relative"
    :style="`backgroundColor:${props.data.styles.cardBackground}; color:${props.data.styles.cardColor}`"
  >
    <img class="logo absolute" :src="logo" :alt="logo" />
    <div class="container-info absolute">
      <div class="type relative">
        <div class="tag absolute">
          <fa class="icon" :icon="['fa', 'user-check']" />
          <span>{{ data.typeName }}</span>
        </div>
      </div>
      <div class="pos" :style="`color:${props.data.styles.posColor}`">
        <span>{{ data.pos }}</span>
      </div>
      <div class="description">
        <p>
          {{ data.description }}
        </p>
      </div>
      <div class="snippet">
        <span
          >{{ data.state }} - <strong>{{ data.date }}</strong></span
        >
      </div>
      <div class="actions">
        <!-- @click="goToWebsite(data.link)" -->
        <a
          class="btn actionCard"
          :style="`background:${props.data.styles.buttonBackground}`"
          v-show="data.link != ''"
        >
          Visitar
        </a>
        <a
        target="_blank" 
          class="btn actionCard"
          :style="`background:${props.data.styles.buttonBackground}`"
        >
          <fa class="icon" :icon="['fab', 'github']" />
        </a>
        <a
        target="_blank" 
          v-show="data.video.state"
          class="btn actionCard"
          :style="`background:${props.data.styles.buttonBackground};`"
        >
          <fa class="icon" :icon="['fa', 'play']" />
        </a>
      </div>
      <div class="tecnology-title">
        <span>Tecnologías</span>
      </div>
      <div class="tecnology-items">
        <!-- <img
          v-for="tec in tecnologies"
          :key="tec"
          :src="tec"
          alt=""
        /> -->
      </div>
      <div class="title">
        <img :src="logoText" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})

const logo = ref()
const logoText = ref()

// let list = []
// function tecnologies() {
//   return list
// }
// let item = ref()

// function goToWebsite(link){
//   window.open(link);
// }

watchEffect(async () => {
  logo.value = (
    await import(`../../assets/projects/${props.data.logo}`)
  ).default
  logoText.value = (
    await import(`../../assets/projects/${props.data.logoText}`)
  ).default
  // async function arr() {
  //   for (const tecnology of props.data.tecnologies) {
  //     let tec = item.value = (await import(`../../assets/${tecnology}.svg`)).default
  //     await list.push(tec)
  //     tecnologies()
  //   }
  // }
  // await arr()
})
</script>

<style scoped>
.card {
  width: 280px;
  height: 420px;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  font-weight: 600;
  font-style: oblique;
  font-size: 16px;
}

/* .description {
  background: red;
} */
.description p {
  margin: 0;
  font-size: 11px;
  width: 200px;
  font-weight: 200;
  text-align: end;
  margin-left: auto;
  white-space: initial;
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
  gap: 5px;
  padding: 0px;
  margin: 0px;
  list-style: none;
  width: 140px;
}
a{
  height: 25px;
}
.actionCard{
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
  z-index: 1;
  position: relative;
  display: grid;
  place-content: center;
  text-decoration: none;
}
.actions a:nth-child(1){
  width: 80px;
}
.actions a:nth-child(1) {
  font-size: 12px;
}
.actions a:nth-child(2){
  width: 25px;
}
.actions a:nth-child(3){
  width: 25px;
}
.actionCard:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  box-shadow:
   0px 0px 20px 0px rgb(255, 255, 255),
   0px 0px 5px 0px rgb(255, 255, 255),
   7px 7px 20px 0px rgba(0, 0, 0, 0),
   4px 4px 5px 0px rgba(0, 0, 0, 0);
  transition: all 0.3s ease;
}
.actionCard:hover:after {
  top: 0;
  height: 100%;
}
.actionCard:active {
  top: 2px;
}
li button .icon {
  margin-bottom: -1px;
}

.tecnology-title {
  text-align: end;
  font-size: 14px;
  font-weight: 300;
  padding-top: 30px;
}

.tecnology-items {
  border: 1px solid rgb(4, 133, 246);
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
