<template>
  <section>
    <div class="containerDescription">
      <Title />
      <p class="aboutMe">También soy un, apasionado por el <strong>diseño grafico</strong> y un <strong>gran aficionado del UI/UX.</strong><br /><br />
        Me enfoco a la <strong>parte visual de una AppWeb,</strong> amo darle vida a los distintos componentes.<br /><br />
        Pienso que <strong>para enamorar a un usuario,</strong> primero <strong>debo atraer su atención,</strong> 
        y esto se consigue <strong>con una buena UI.</strong></p>
    </div>
    <div class="containerSnippet">
      <Avatar class="avatar" />
      <div class="github">
        <div class="text relative circle shadow">
          <h1>Repositories</h1>
          <h1>43</h1>
          <div class="tag circle absolute shadow">
            <fa class="icon" :icon="['fa', 'book-bookmark']" />
          </div>
        </div>
        <div class="text relative circle shadow">
          <h1>Projects</h1>
          <h1>1</h1>
          <div class="tag circle absolute shadow">
            <fa class="icon" :icon="['fa', 'table']" />
          </div>
        </div>
        <div class="text relative circle shadow">
          <h1>Stars</h1>
          <h1>17</h1>
          <div class="tag circle absolute shadow">
           <StarIcon class="icon star" />
          </div>
        </div>
      </div>
    </div>
    <div class="containerCV">
      <button class="btn shadow">Descargar CV</button>
    </div>
  </section>
</template>

<script>
import { StarIcon } from '@heroicons/vue/outline'
import Avatar from "../components/global/Avatar.vue";
import Title from "../components/global/Title.vue";
export default {
  name: 'About',
  components: { 
    Avatar, StarIcon, Title
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
  grid-template-columns: 1fr 300px;
  grid-template-rows: 1fr 120px;
  grid-template-areas: "description snippet" "cv cv"; 
}
.containerDescription {
  grid-area: description;
}
.containerSnippet {
  grid-area: snippet;
  /* align-self: flex-end;
  justify-self: center; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
}
.containerCV {
  grid-area: cv;
  display: flex;
  justify-content: start;
  align-items: flex-end;
}
.avatar {
  width: 250px;
  height: 250px;
}
::v-deep .photo .photo-sub img {
  width: 200px;
  height: auto;
  margin: 0 30px -120px 0;
}
.github {
  display: flex;
  gap: 15px;
}
.github div {
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.github div h1:nth-child(1) {
  margin-top: 4px;
  font-weight: 400;
  font-size: 10px;
}
.github div .tag  {
  width: 30px;
  height: 30px;
  background-color: var(--bg-5);
  bottom: 0;
  right: 0;
}
.github div .tag .icon {
  font-size: 10px;
  color: var(--bg-2);
}
.github div .tag .star{
  width: 11px;
  height: 11px;
}
.github .text h1:nth-child(2){
  font-size: 22px;
  font-weight: 600;
  color: var(--bg-1);
}
.aboutMe {
  font-size: 18px;
  padding: 30px 30px 0 0;
  color: var(--bg-4);
  font-weight: 200;
  text-align: start;
}
.aboutMe strong {
  font-weight: 400;
}
.containerCV button {
  height: 45px;
  width: 160px;
  font-size: 16px;
  border-radius: 25px;
  background-color: var(--bg-2);
  color: var(--white);
  transition: .3s;
}
.containerCV button:hover {
  transition: .3s;
  box-shadow: var(--shadow-btn)
}
@media (max-width: 870px) {
  section {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 110px 70px;
    grid-template-areas: "description" "snippet" "cv";
  }
  .containerDescription {
    grid-area: description;
  }
  .containerSnippet {
    grid-area: snippet;
  }
  .containerCV {
    grid-area: cv;
  }
  .avatar {
    display: none;
  }
  .aboutMe {
    font-size: 15px;
    padding: 25px 0 0;
  }
  .containerCV button {
    height: 35px;
    width: 130px;
    font-size: 13px;
  }
}
</style>
