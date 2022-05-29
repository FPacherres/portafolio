<template>
  <section>
    <div class="title"><span>Contact</span></div>
    <fform class="form" />
    <div class="snippet">
      <avatar class="avatar-snippet" />
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
  padding-top: 10px;
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
}
.text-snippet span {
  color: var(--bg-3);
  display: block;
  font-size: 14px;
}

:deep(.photo .photo-sub img) {
  width: 180px;
  height: auto;
  margin: 0 18px -65px 0;
}

@media (max-width: 870px) {
  section {
    padding: 70px 0 0px;
    grid-template-areas: 'title' 'form' 'snippet' 'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 40px 1fr 100px 30px;
    column-gap: 20px;
    row-gap: 20px;
  }
  .snippet {
    flex-direction: row;
    width: 68vw;
    justify-content: space-between;
    margin: 0 auto;
  }
  .title {
    padding-top: 0px;
  }

  .title span {
    font-size: 25px;
  }

  .avatar-snippet {
    height: 90px;
    width: 90px;
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
    margin: 0 15px -55px 0;
  }
  .text-snippet {
    text-align: right;
  }
}
</style>
