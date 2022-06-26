<template>
  <section>
    <Title :num="'03'" :text="'Studies'" />
    <div class="containerST">
      <div class="line">
        <span>2021 - presente</span>
        <span>2022</span>
        <span>2016 - 2021</span>
      </div>
      <div class="studies">
        <div class="container-study-1">
          <div class="study-1 relative shadow-inset">
            <span class="title">Platzi</span>
            <span class="career">Frontend Developer</span>
            <span class="career">UI/UX</span>
            <span class="career">Bussiness Managment</span>
            <span class="career">Carrera de Ciencias</span>
            <button class="btn shadow chip">Estudiante</button>
            <div class="identity-1 absolute shadow circle">
              <img class="identity-logo" src="../assets/platzi.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="container-study-2">
          <div class="study-2 relative shadow-inset">
            <span class="title">Udemy</span>
            <span class="career">Vue.js 2</span>
            <button class="btn shadow chip">Estudiante</button>
            <div class="identity-2 absolute shadow circle">
              <svg
                class="identity-logo"
                width="66"
                height="66"
                viewBox="0 0 66 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="66" height="66" fill="transparent" />
                <path
                  class="udemy-vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4081 28.3609C17.9502 32.2405 17.9379 48.418 18.6958 51.6572C20.1685 57.95 26.0343 61.35 32.9149 61.316C39.4985 61.2851 45.4603 58.1944 47.066 51.6634C48.0003 47.8673 48.322 31.5691 47.1619 28.4753C45.2716 27.9339 41.9395 27.9618 39.6037 28.5156C39.647 40.405 42.0324 54.2343 32.3426 54.092C22.7209 53.9528 26.4241 36.8657 25.8178 28.299L18.4112 28.3609H18.4081Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.3339 20.6078C22.1331 19.7137 30.4925 13.0156 32.8654 13.1363C35.4364 13.2662 43.5236 20.1437 47.5115 20.6264L47.3599 12.4959C44.1392 10.8747 34.7619 4.46436 32.3952 4.69021C30.7276 4.84799 20.7378 11.0975 18.1668 12.6846L18.337 20.6078H18.3339Z"
                  fill="#A317E9"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="container-study-3">
          <div class="study-3 relative shadow-inset">
            <span class="title">UNPRG</span>
            <span class="subtitle">Universidad Nacional Pedro Ruiz Gallo</span>
            <span class="career">Ing. en Computación e Informática</span>
            <button class="btn shadow chip">Egresado</button>
            <div class="identity-3 absolute shadow circle">
              <img class="identity-logo" src="../assets/unprg.png" alt="" />
            </div>
          </div>
        </div>
        <div class="relative time-line-1">
          <div class="line-item-1 absolute"></div>
          <div class="circle-item-1 circle absolute"></div>
        </div>
        <div class="relative time-line-2">
          <div class="line-item-2 absolute"></div>
          <div class="circle-item-2 circle absolute"></div>
        </div>
        <div class="relative time-line-3">
          <div class="line-item-3 absolute"></div>
          <div class="circle-item-3 circle absolute"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '../components/global/Title.vue'
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
.containerST {
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
  height: 100%;
  order: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 40px;
}
.studies .container-study-1 {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 40px;
}
.studies .container-study-2 {
  display: flex;
  justify-content: center;
  margin-top: 45px;
}
.studies .container-study-3 {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 40px;
}
.studies .time-line-1 {
  display: flex;
  justify-content: center;
}
.studies .time-line-2 {
  display: flex;
  justify-content: center;
}
.studies .time-line-3 {
  display: flex;
  justify-content: center;
}
.studies .line-item-1,
.studies .line-item-2,
.studies .line-item-3 {
  width: 2px;
  height: 100%;
  background-color: var(--bg-4);
}
.studies .line-item-2 {
  height: 177px;
  bottom: 0;
}
.studies .circle-item-1,
.studies .circle-item-2,
.studies .circle-item-3 {
  border: 2px solid var(--bg-4);
  width: 10px;
  height: 10px;
  top: -13px;
}
.studies .circle-item-2 {
  top: -150px;
}
.study-1,
.study-2,
.study-3 {
  width: 85%;
  height: 255px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0 25px;
  box-sizing: border-box;
}
.study-2 {
  height: 180px;
}
.study-1 .chip,
.study-2 .chip,
.study-3 .chip {
  background-color: var(--bg-1);
  color: var(--white);
  padding: 5px 20px;
  margin-top: 20px;
  border-radius: 20px;
}
.study-1 .title,
.study-2 .title,
.study-3 .title {
  font-size: 20px;
  font-weight: 600;
}
.study-1 .subtitle,
.study-2 .subtitle,
.study-3 .subtitle {
  font-size: 12px;
  width: 180px;
  font-weight: 400;
  margin-bottom: 10px;
}
.study-1 .career,
.study-2 .career,
.study-3 .career {
  font-size: 13px;
  font-weight: 200;
  font-style: oblique;
  width: 200px;
}
.identity-1,
.identity-2,
.identity-3 {
  width: 90px;
  height: 90px;
  background-color: var(--bg-5);
  top: -45px;
}
.identity-logo {
  width: 55px;
  height: 55px;
}
.udemy-vector {
  fill: var(--bg-3);
}
@media (max-width: 870px) {
  section {
    padding: 80px 0 40px;
  }
  .containerST {
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
    height: calc(100% - 120px);
    margin-top: 30px;
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
    grid-template-columns: 15px 1fr;
    grid-template-rows: 1.4fr 1fr 1.4fr;
  }
  .studies .container-study-1 {
    justify-content: flex-end;
    align-items: center;
    order: -5;
    margin-bottom: 0;
  }
  .studies .container-study-2 {
    justify-content: flex-end;
    align-items: center;
    order: -3;
    margin-bottom: 0;
    margin-top: 0;
  }
  .studies .container-study-3 {
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 0;
    order: 1;
  }
  .studies .time-line-1 {
    align-items: center;
    justify-content: center;
    order: -6;
  }
  .studies .time-line-2 {
    align-items: center;
    justify-content: start;
    order: -4;
  }
  .studies .time-line-3 {
    align-items: center;
    justify-content: start;
  }
  .studies .line-item-1,
  .studies .line-item-2,
  .studies .line-item-3 {
    width: 100%;
    height: 2px;
    background-color: var(--bg-4);
  }
  .studies .line-item-2 {
    bottom: auto;
    width: 38px;
  }
  .studies .circle-item-1,
  .studies .circle-item-2,
  .studies .circle-item-3 {
    border: 2px solid var(--bg-4);
    width: 10px;
    height: 10px;
    right: -12px;
    top: auto;
  }
  .studies .circle-item-2 {
    right: -36px;
  }
  .study-1,
  .study-2,
  .study-3 {
    width: 80%;
    height: 85%;
    padding: 0px 0px 0px 20px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
  }
  .study-2 {
    width: 70%;
  }
  .identity-1,
  .identity-2,
  .identity-3 {
    top: auto;
    width: 65px;
    height: 65px;
    left: -32px;
  }
  .study-1 .chip,
  .study-2 .chip,
  .study-3 .chip {
    background-color: var(--bg-1);
    color: var(--white);
    font-size: 10px;
    padding: 3px 20px;
    margin-top: 10px;
  }
  .study-1 .title,
  .study-2 .title,
  .study-3 .title {
    font-size: 16px;
    font-weight: 600;
  }
  .study-1 .subtitle,
  .study-2 .subtitle,
  .study-3 .subtitle {
    font-size: 8px;
    width: 140px;
    margin-bottom: 5px;
  }
  .study-1 .career,
  .study-2 .career,
  .study-3 .career {
    font-size: 10px;
    font-weight: 400;
    width: 160px;
  }
  .identity-logo {
    width: 45px;
    height: 45px;
  }
}
</style>
