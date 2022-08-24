<template>
  <div class="title__container">
    <h2>0{{ pos }}</h2>
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'TitleCustom',
  components: {},
  props: {
    pos: {
      type: Number,
      default: 1
    },
    title: {
      type: String,
      default: 'About'
    }
  }
}
</script>

<style scoped>
.title__container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 8px;
  box-sizing: border-box;
}
.title__container h2 {
  color: var(--bg-2);
  font-size: 50px;
  line-height: 36px;
  width: fit-content;
}
.title__container span {
  color: var(--bg-3);
  font-size: 30px;
  margin-top: -12px;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
  position: relative;
  width: fit-content;
}
.title__container span::before {
  content: "";
  position: absolute;
  background-color: var(--bg-1);
  height: 2px;
  width: 55px;
  right: 0;
  bottom: -8px;
}
@media screen and (min-width: 870px){
  .title__container {
    width: 100%;
    padding-bottom: 12px;
  }
  .title__container h2 {
    font-size: 83px;
    line-height: 62px;
  }
  .title__container span {
    font-size: 60px;
    margin-top: -24px;
    line-height: 40px;
  }
  .title__container span::before {
    height: 3px;
    width: 120px;
    bottom: -12px;
  }
}
</style>