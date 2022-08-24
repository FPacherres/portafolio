<template>
  <div class="photo circle shadow">
    <div class="photo-sub circle shadow-inset">
      <img src="../../assets/photo.png" alt="Fabian Pacherres" />
    </div>
    <div v-if="flag" class="flag"></div>
  </div>
</template>

<script>
export default {
  name: 'AvatarCustom',
  components: {},
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.flag {
  width: 50px;
  height: 25px;
  background: rgb(255, 36, 0);
  background: linear-gradient(
    90deg,
    #ff2400 0%,
    #ff2400 33%,
    #ffffff 33%,
    #ffffff 67%,
    #ff2400 67%,
    #ff2400 100%
  );
  position: absolute;
  bottom: 40px;
  right: 15px;
  border-radius: 4px;
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
  width: 300px;
  height: 300px;
  position: relative;
}
.photo-sub {
  width: 90%;
  height: 90%;
  background: var(--bg-5);
  overflow: hidden;
}
.photo .photo-sub img {
  width: 280px;
  height: auto;
  margin-top: 10px;
}

@media screen and (min-width: 870px) {
  .photo {
    width: 450px;
    height: 450px;
  }
  .photo .photo-sub img {
    width: 420px;
    margin-top: 20px;
  }
  .flag {
    width: 100px;
    height: 45px;
    border-radius: 6px;
  }
}
</style>