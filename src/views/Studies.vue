<template>
  <section id="studies" class="is-full-width">
    <div class="container__studies">
      <titleCustom class="title__studies" :pos="3" :title="'Studies'" />
    <div class="line__studies">
      <span>2021 - presente</span>
      <span>2022</span>
      <span>2016 - 2021</span>
    </div>
    <div class="studies__content">
      <div class="item item-1">
        <div class="item__point item__point-1 circle"></div>
        <hr class="item__line item__line-1" />
        <div class="item__line-desk item__line-desk-1"></div>
        <div class="item__study item__study-1 shadow-inset">
          <div class="item__study-logo shadow circle">
            <svg
              width="38"
              height="42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="m21.29 25.76 4.678 4.722c-.164.342-4.39 4.558-4.706 4.715L7.106 21.078l14.138-14.19c.474.245 4.034 3.95 4.724 4.641l4.73 4.686c-.19.417-5.915 6.021-7.032 7.138-.768.768-1.704 1.61-2.379 2.404l.002.003zm9.455 9.501-4.672-4.642c.244-.581 4.087-4.21 4.875-5.003l3.672-3.708c.47-.447.911-.852 1.237-1.22 1.58-1.78 2.17-4.918.846-7.488-.613-1.192-1.457-1.885-2.247-2.674l-7.43-7.43C25.55 1.622 23.76-.327 20.186.211c-2.669.401-4.016 2.26-5.791 4.034-1.68 1.677-3.287 3.284-4.97 4.97l-7.383 7.378c-.674.689-1.397 2.047-1.604 3.314-.543 3.334 1.025 5.028 2.837 6.837 1.684 1.682 3.289 3.291 4.971 4.971l7.38 7.378c.852.852 1.376 1.54 2.71 2.21 2.796 1.407 5.629.497 7.448-1.069l4.961-4.97v-.003z"
                fill="#97CA3E"
              />
            </svg>
          </div>
          <h2 class="title">Platzi</h2>
          <span class="subtitle-2"
            >Front-End Developer, UI/UX, Bussiness Managment y Ciencias</span
          >
          <a href="https://platzi.com/p/FXRL16/" target="_blank"> Ver </a>
        </div>
      </div>
      <div class="item item-2">
        <div class="item__point item__point-2 circle"></div>
        <hr class="item__line item__line-2" />
        <div class="item__line-desk item__line-desk-2"></div>
        <div class="item__study item__study-2 shadow-inset">
          <div class="item__study-logo shadow circle">
            <svg
              width="23"
              height="42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path
                  id="body-logo"
                  d="M.236 17.56c-.34 2.877-.349 14.874.213 17.277C1.541 39.502 5.892 42.025 10.995 42c4.882-.023 9.304-2.315 10.494-7.159.693-2.815.932-14.902.072-17.197-1.402-.401-3.873-.38-5.606.03.032 8.818 1.801 19.074-5.385 18.968-7.136-.103-4.39-12.775-4.839-19.129l-5.493.046H.236z"
                  fill="#020202"
                />
                <path
                  d="M.18 11.81c2.818-.664 9.018-5.631 10.778-5.542 1.907.097 7.904 5.197 10.862 5.555l-.113-6.03C19.32 4.591 12.364-.163 10.61.004 9.372.121 1.964 4.756.057 5.934l.126 5.875H.181z"
                  fill="#A317E9"
                />
              </g>
            </svg>
          </div>
          <h2 class="title">Udemy</h2>
          <span class="subtitle-2">Vue.js 2</span>
        </div>
      </div>
      <div class="item item-3">
        <div class="item__point item__point-3 circle"></div>
        <hr class="item__line item__line-3" />
        <div class="item__line-desk item__line-desk-3"></div>
        <div class="item__study item__study-3 shadow-inset">
          <div class="item__study-logo shadow circle">
            <img src="../assets/unprg.png" alt="UNPRG" />
          </div>
          <h2 class="title">UNPRG</h2>
          <span class="subtitle-1">Universidad Nacional Pedro Ruíz Gallo</span>
          <span class="subtitle-2">Ing. en Computación e Informática</span>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import titleCustom from '../components/custom/Title.vue'
export default {
  name: 'StudiesPage',
  components: { titleCustom }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__studies  {
  max-width: 420px;
  width: 100%;
  max-height: 550px;
  height: 100%;
  display: grid;
  grid-template-columns: 15px 1fr;
  grid-template-rows: 60px 1fr;
  row-gap: 20px;
  grid-template-areas: 'title title' 'time studies';
}
section .title__studies {
  grid-area: title;
}
section .line__studies {
  grid-area: time;
  border-right: 0.8px solid var(--bg-4);
  display: grid;
  grid-template-rows: 1.4fr 1fr 1.6fr;
  padding-right: 3px;
}
section .line__studies span {
  color: var(--bg-1);
  font-size: 10px;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  text-align: center;
  line-height: 12px;
}
section .studies__content {
  grid-area: studies;
  display: grid;
  grid-template-rows: 1.4fr 1fr 1.6fr;
}
section .studies__content .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 8%;
  position: relative;
}
section .studies__content .item item__line-desk {
  display: none;
}
section .studies__content .item .item__point {
  width: 8px;
  height: 8px;
  background-color: var(--bg-5);
  border: 2px solid var(--bg-4);
  position: absolute;
}
section .studies__content .item .item__point-1 {
  left: 3%;
}
section .studies__content .item .item__point-2 {
  left: 15%;
}
section .studies__content .item .item__point-3 {
  left: 10%;
}
section .studies__content .item .item__line {
  background: var(--bg-4);
  height: 0.5px;
}
section .studies__content .item .item__study {
  height: 80%;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--bg-3);
  text-align: center;
  padding: 0 30px 0 40px;
  box-sizing: border-box;
}
section .studies__content .item .item__study .item__study-logo {
  width: 60px;
  height: 60px;
  background-color: var(--bg-5);
  position: absolute;
  left: -30px;
}
section .studies__content .item .item__study .item__study-logo img {
  height: 42px;
  width: auto;
}
section .studies__content .item .item__study .title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
}
section .studies__content .item .item__study .subtitle-1 {
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 5px;
}
section .studies__content .item .item__study .subtitle-2 {
  font-size: 10px;
  font-style: oblique;
  word-wrap: break-word;
}
section .studies__content .item .item__study a {
  color: var(--bg-1);
  font-size: 10px;
  margin-top: 8px;
  cursor: pointer;
}
section .studies__content .item .item__study-1 {
  width: 82%;
}
section .studies__content .item .item__line-1 {
  width: 3%;
}
/*Item 2 - Studies */
section .studies__content .item .item__study-2 {
  width: 70%;
}
section .studies__content .item .item__line-2 {
  width: 15%;
}
#body-logo {
  fill: var(--bg-3);
}
/*Item 3 - Studies */
section .studies__content .item .item__study-3 {
  width: 75%;
}
section .studies__content .item .item__line-3 {
  width: 10%;
}
@media screen and (min-width: 870px) {
  section {
    display: flex;
    align-items: center;
  }
  .container__studies{
    grid-template-columns: 1fr;
    grid-template-rows: 130px 1fr 20px;
    row-gap: 20px;
    grid-template-areas: 'title' 'studies' 'time';
    max-height: 550px;
    max-width: 800px;
  }
  section .line__studies {
    border-top: 2px solid var(--bg-4);
    border-right: none;
    grid-template-columns: repeat(3, 1fr);
    padding-top: 6px;
  }
  section .line__studies span {
    transform: none;
    writing-mode: initial;
    font-size: 14px;
    line-height: 14px;
  }
  section .studies__content {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
  }
  section .studies__content .item {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    gap: 50px;
  }
  section .studies__content .item-1 {
    justify-content: flex-start;
    padding-bottom: 30%;
  }
  section .studies__content .item-2 {
    justify-content: flex-end;
    padding-top: 15%;
  }
  section .studies__content .item-3 {
    justify-content: flex-end;
    padding: 10% 0 20%;
  }
  section .studies__content .item .item__point {
    width: 10px;
    height: 10px;
    background-color: var(--bg-5);
    border: 2px solid var(--bg-4);
    position: relative;
  }
  section .studies__content .item .item__point-1,
  section .studies__content .item .item__point-2,
  section .studies__content .item .item__point-3 {
    left: 0%;
    z-index: 2;
    display: none;
  }
  section .studies__content .item .item__line {
    display: none;
  }
  section .studies__content .item .item__line-desk {
    display: flex;
    width: 1px;
    background-color: var(--bg-4);
    position: absolute;
    bottom: -20px;
  }
  section .studies__content .item .item__line-desk-1 {
    height: 15%;
  }
  section .studies__content .item .item__line-desk-1::after,
  section .studies__content .item .item__line-desk-2::after,
  section .studies__content .item .item__line-desk-3::after {
    content: '';
    top: -5px;
    background-color: var(--bg-5);
    border: 2px solid var(--bg-4);
    width: 15px;
    height: 15px;
    left: -9px;
    border-radius: 50%;
    position: absolute;
  }
  section .studies__content .item .item__line-desk-2 {
    height: 45%;
  }
  section .studies__content .item .item__line-desk-3 {
    height: 25%;
  }
  section .studies__content .item .item__study-1,
  section .studies__content .item .item__study-2,
  section .studies__content .item .item__study-3 {
    width: 82%;
    padding: 40px 30px 30px;
  }
  section .studies__content .item .item__study-1 {
    min-height: 50%;
  }
  section .studies__content .item .item__study-2 {
    height: 40%;
  }
  section .studies__content .item .item__study-3 {
    min-height: 60%;
  }
  section .studies__content .item .item__study .item__study-logo {
    left: 0;
    right: 0;
    margin: 0 auto;
    top: -30px;
  }
  section .studies__content .item .item__study .title {
    font-size: 20px;
    margin-bottom: 12px;
  }
  section .studies__content .item .item__study .subtitle-1 {
    font-size: 10px;
    margin-bottom: 14px;
  }
  section .studies__content .item .item__study .subtitle-2 {
    font-size: 12px;
  }
  section .studies__content .item .item__study a {
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>

