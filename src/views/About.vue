<template>
  <section>
    <div class="containerDescription">About</div>
    <div class="containerSnippet">
      <Avatar class="avatar" />
    </div>
    <div class="containerCV">About</div>
  </section>
</template>

<script>
import Avatar from "../components/global/Avatar.vue";
export default {
  name: 'About',
  components: { 
    Avatar
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
  grid-template-rows: 1fr 60px;
  grid-template-areas: "description snippet" "cv cv"; 
}
.containerDescription {
  grid-area: description;
  border: 1px solid #000000;
}
.containerSnippet {
  grid-area: snippet;
  border: 1px solid #000000;
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
@media (max-width: 870px) {
  section {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 120px 80px;
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
