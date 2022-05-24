<template>
  <div class="photo circle shadow relative">
    <div class="photo-sub circle shadow-inset">
      <img src="../../assets/photo.png" alt="" />
    </div>
    <div v-if="flag" class="flag absolute"></div>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  components: {},
  props: {
    flag: {
      type: Boolean,
      default: false,
    },
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
  background: rgb(255, 36, 0);
  background: linear-gradient(
    90deg,
    var(--red) 0%,
    var(--red) 33%,
    var(--white) 33%,
    var(--white) 67%,
    var(--red) 67%,
    var(--red) 100%
  );
  bottom: 40px;
  right: 15px;
  border-radius: 6px;
  box-shadow: rgba(50, 50, 93, 0.8) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px,
    rgba(0, 0, 0, 0.8) 0px 30px 60px -30px,
    rgba(0, 0, 0, 0.8) 0px -2px 6px 0px inset;
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
}
</style>
