<template>
  <section>
    <Title :num="'03'" :text="'Studies'" />
    <div class="container">
      <div class="line">
        <span>2021 - presente</span>
        <span>2022</span>
        <span>2016 - 2021</span>
      </div>
      <div class="studies">
        <div>E1</div>
        <div>E2</div>
        <div>E3</div>
        <div class="relative">
          <div class="line-item-1 absolute"></div>
          <div class="circle-item-1 circle absolute"></div>
        </div>
        <div class="relative">
          <div class="line-item-2 absolute"></div>
          <div class="circle-item-2 circle absolute"></div>
        </div>
        <div class="relative">
          <div class="line-item-3 absolute"></div>
          <div class="circle-item-3 circle absolute"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../components/global/Title.vue";
export default {
  name: 'Studies',
  components: { Title },
  data() {
    return {}
  },
}
</script>

<style scoped>
section {
  padding: 80px 0 60px;
  box-sizing: border-box;
}
.container {
  /* border: 1px solid #f132f1; */
  height: calc(100% - 140px);
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
}
.line {
  border-top: 3px solid var(--bg-4);
  height: 100%;
  order: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: end;
  color: var(--bg-1);
  font-size: 12px;
}
.studies {
  /* background-color: rgba(30, 0, 255, 0.05); */
  height: 100%;
  order: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 40px;
}
.studies div:nth-of-type(1){
  }
.studies div:nth-of-type(2){
  }
.studies div:nth-of-type(3){
  }
.studies div:nth-of-type(4){
  display: flex;
  justify-content: center;
  }
.studies div:nth-of-type(5){
  display: flex;
  justify-content: center;
  }
.studies div:nth-of-type(6){
  display: flex;
  justify-content: center;
}
.studies .line-item-1, .studies .line-item-2, .studies .line-item-3{
  width: 2px;
  height: 100%;
  background-color: var(--bg-4);
}
.studies .line-item-2 {
  height: 60px;
  bottom: 0;
}
.studies .circle-item-1, .studies .circle-item-2, .studies .circle-item-3 {
  border: 2px solid var(--bg-4);
  width: 10px;
  height: 10px;
  top: -13px;
}
.studies .circle-item-2 {
  top: -33px;
}
@media (max-width: 870px) {
  .container {
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
  }
  .line {
    border-right: 3px solid var(--bg-4);
    border-top: none;
    order: 1;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    padding-right: 5px;
  }
  .line span {
    transform: rotate(180deg);
    writing-mode: vertical-lr;
  }
  .studies {
    height: 100%;
    order: 2;
    grid-template-columns: 40px 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
  .studies div:nth-of-type(1){
    order: -5;
  }
  .studies div:nth-of-type(2){
    order: 1;
  }
  .studies div:nth-of-type(3){
  }
  .studies div:nth-of-type(4){
    display: flex;
    align-items: center;
    justify-content: start;
    order: -6;
  }
  .studies div:nth-of-type(5){
    display: flex;
    align-items: center;
    justify-content: start;
    order: -4;
  }
  .studies div:nth-of-type(6){
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .studies .line-item-1, .studies .line-item-2, .studies .line-item-3{
    width: 100%;
    height: 2px;
    background-color: var(--bg-4);
  }
  .studies .line-item-2 {
    bottom: auto;
    width: 60px;
  }
  .studies .circle-item-1, .studies .circle-item-2, .studies .circle-item-3 {
    border: 2px solid var(--bg-4);
    width: 10px;
    height: 10px;
    right: -12px;
    top: auto;
  }
  .studies .circle-item-2 {
    right: -32px;
  }
}

</style>
