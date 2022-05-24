<template>
  <section>
    <div class="containerDescription">About</div>
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
    <div class="containerCV">About</div>
  </section>
</template>

<script>
import { StarIcon } from '@heroicons/vue/outline'
import Avatar from "../components/global/Avatar.vue";
export default {
  name: 'About',
  components: { 
    Avatar, StarIcon
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
  border: 1px solid #f132f1;
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: 1fr 120px;
  grid-template-areas: "description snippet" "cv cv"; 
}
.containerDescription {
  grid-area: description;
  border: 1px solid #000000;
}
.containerSnippet {
  grid-area: snippet;
  border: 1px solid #000000;
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
  border: 1px solid #000000;
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
}
</style>
