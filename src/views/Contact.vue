<template>
  <section>
    <div class="title"><span>Contact</span></div>
    <fform class="form" />
    <div class="snippet">
      <avatar :photo="3" class="avatar-snippet" />
      <div class="text-snippet">
        <h1>Datos curiosos</h1>
        <span>Memorizo rostros</span>
        <span>Armo cubos de Rubik</span>
        <span>Soy pintor paisajista</span>
      </div>
    </div>
    <ffooter class="footer" />
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
  padding: 80px 0 0px;
  box-sizing: border-box;
  display: grid;
  grid-template-areas: 'title title' 'form snippet' 'footer footer';
  grid-template-columns: 1.2fr 1fr;
  grid-template-rows: 60px 1fr 40px;
  column-gap: 20px;
  row-gap: 40px;
}

.title {
  grid-area: title;
  padding-top: 25px;
}

.form {
  grid-area: form;
}

.snippet {
  /* border: 1px solid #f132f1; */
  grid-area: snippet;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.footer {
  grid-area: footer;
}

.title span {
  color: var(--bg-2);
  font-size: 35px;
}

.avatar-snippet {
  height: 260px;
  width: 260px;
}
.text-snippet h1 {
  color: var(--bg-1);
  font-size: 22px;
  margin-top: 10px;
  font-weight: 500;
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
    padding: 70px 0 0px;
    grid-template-areas: 'title' 'form' 'snippet' 'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 55px 1fr 90px 35px;
    row-gap: 20px;
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
    /* padding: 0 0 5px 0; */
  }

  .title span {
    font-size: 25px;
  }

  .avatar-snippet {
    height: 85px;
    width: 85px;
  }
  .text-snippet h1 {
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
