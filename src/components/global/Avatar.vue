<template>
  <div class="photo circle shadow relative">
    <div class="photo-sub circle shadow-inset">
      <img src="../../assets/photo.png" alt="" />
    </div>
    <div v-if="flag" class="flag absolute">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  components: {},
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.flag {
  width: 100px;
  height: 45px;
  background-color: var(--red);
  bottom: 40px;
  right: 15px;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.flag div {
  width: 35px;
  height: 45px;
  background-color: var(--white);
  margin: 0 auto;
}
.photo {
  background: var(--bg-5);
  border-radius: 50%;
}
.photo-sub {
  width: 90%;
  height: 90%;
  background: var(--bg-5);
  overflow: hidden;
}
.photo .photo-sub img {
  width: 350px;
  height: auto;
  margin: 0 45px -180px 0;
}
@media (max-width: 870px) {
  .photo {
    position: relative !important;
  }
  .photo .photo-sub img {
    width: 250px;
    height: auto;
  }
  .flag {
    width: 75px;
    height: 35px;
    bottom: 30px;
    right: 10px;
    border-radius: 4px;
  }
  .flag div {
    width: 25px;
    height: 35px;
  }
}
</style>
