<template>
  <section class="relative">
    <fform class="form" />
    <div class="snippet">
      <avatar :photo="3" class="avatar-snippet" />
      <div class="text-snippet">
        <h2>Datos curiosos</h2>
        <span>Memorizo rostros</span>
        <span>Armo cubos de Rubik</span>
        <span>Soy pintor paisajista</span>
      </div>
    </div>
    <ffooter class="footer absolute" />
  </section>
</template>

<script>
import ffooter from '../components/global/FFooter.vue'
import fform from '../components/global/FForm.vue'
import avatar from '../components/global/Avatar.vue'
export default {
  name: 'Contact',
  components: { ffooter, fform, avatar },
  data() {
    return {}
  },
}
</script>

<style scoped>
section {
  padding: 100px 0 60px;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  grid-template-columns: 1.1fr 1fr;
  column-gap: 20px;
  row-gap: 40px;
}

.snippet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.footer {
  bottom: 30px;
  left: 0;
  right: 0;
  margin: 0 auto 0;
}

.title span {
  color: var(--bg-2);
  font-size: 35px;
  line-height: 35px;
}

.avatar-snippet {
  height: 260px;
  width: 260px;
}
.text-snippet h2 {
  color: var(--bg-1);
  font-size: 22px;
  margin-top: 10px;
  font-weight: 500;
  margin: 0px;
}
.text-snippet span {
  color: var(--bg-3);
  display: block;
  font-size: 14px;
  font-weight: 300;
}

:deep(.photo .photo-sub img) {
  width: 240px;
  height: auto;
  margin: 0 0 -115px 25px;
}

@media (max-width: 870px) {
  section {
    padding: 100px 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .snippet {
    flex-direction: row;
    width: 68vw;
    justify-content: space-between;
    margin: 0 auto;
  }
  .title {
    display: flex;
    align-items: flex-end ;
    justify-content: center;
  }

  .title span {
    font-size: 25px;
  }

  .avatar-snippet {
    height: 85px;
    width: 85px;
  }
  .text-snippet h2 {
    font-size: 16px;
    margin-top: 0px;
  }
  .text-snippet span {
    font-size: 10px;
  }
  :deep(.photo .photo-sub img) {
    width: 80px;
    margin: 0 -7px -45px 0;
  }
  .text-snippet {
    text-align: right;
  }
}
</style>
