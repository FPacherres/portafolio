<template>
  <div class="card shadow">
    <div class="container-img relative">
      <img src="../../assets/projects/project-1.png" alt="" />
      <div class="shadow-img absolute"></div>
    </div>
    <div class="container-snippet relative">
      <!-- <div class="snippet-card absolute"></div> -->
    </div>
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam
        nulla mollitia ipsa voluptate eveniet recusandae delectus assumenda
        similique, dicta quibusdam magnam minus itaque totam eius! Accusamus
        molestias magnam inventore.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: {},
  props: {},
  data() {
    return {}
  },
}
</script>

<style scoped>
.card {
  width: 280px;
  height: 500px;
  background-color: var(--bg-5);
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
  display: grid;
  justify-content: center;
  grid-template-rows: 160px 65px 1fr;
}

img {
  width: auto;
  height: 155px;
}

.shadow-img {
  height: 100%;
  width: 100%;
  top: 0;
  background: var(--bg-5);
  background: linear-gradient(
    0deg,
    var(--bg-5) 0%,
    var(--bg-5) 10%,
    rgba(255, 255, 255, 0) 99%,
    rgba(255, 255, 255, 0) 100%
  );
}

.container-snippet {
  display: flex;
  justify-content: center;
}

.snippet-card {
  width: 230px;
  height: 120px;
  top: -55px;
  border-radius: 10px;
  background-color: var(--bg-5);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px -10px 20px 1px;
}

@media (max-width: 870px) {
}
</style>
