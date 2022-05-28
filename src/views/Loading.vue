<template>
  <section class="conatiner-loading center">
    <div class="load center">
      <p class=".text-loading">cargando</p>
      <span class=".text-percentage">{{ percentage }}%</span>
      <div class="container-line">
        <div class="line" :style="`width: ${percentage}%;`"></div>
      </div>
    </div>
    <div class="logo center" style="flex-direction: row">
      <div class="container-img">
        <svg
          class="img"
          width="709"
          height="653"
          viewBox="0 0 709 653"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_102_2)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M235.335 407.564L-0.319565 665.271H98.9569L313.568 430.577H256.508L235.335 407.564Z"
              fill="#FAC20B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M609.402 0.273071L392.747 237.203H449.227L470.689 260.532L708.678 0.273071H609.402Z"
              fill="#EF0070"
            />
            <path
              class="left"
              d="M281.334 404.314L136.04 246.407L281.334 88.4988H398.632L253.34 246.407L398.632 404.314H281.334Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M247.975 240.668L248.943 239.614L247.975 240.668ZM248.943 239.614L504.911 -40.3087L248.943 239.614V239.614Z"
              stroke="#FAC20B"
              stroke-width="0.01667"
              stroke-miterlimit="2.61313"
            />
            <path
              class="rigth"
              d="M424.403 263.466L569.697 421.373L424.403 579.281H307.105L452.397 421.373L307.105 263.466H424.403Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M457.761 427.11L456.794 428.166L457.761 427.11ZM456.794 428.166L200.826 708.089L456.794 428.166V428.166Z"
              stroke="#EF0070"
              stroke-width="0.01667"
              stroke-miterlimit="2.61313"
            />
          </g>
          <defs>
            <clipPath id="clip0_102_2">
              <rect width="709" height="653" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span class="text-welcome">Bienvenidos!</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Loading',
  components: {},
  data() {
    return {
      count: 0,
      percentage: 0,
    }
  },
  methods: {
    counter() {
      let that = this
      let containerLoad = document.querySelector('.load')
      let containerLogo = document.querySelector('.logo')
      let containerLoading = document.querySelector('.conatiner-loading')
      let percentage = setInterval(() => {
        that.count++
        if (that.count == 5) {
          that.percentage = 5
        }
        if (that.count == 16) {
          that.percentage = 16
        }
        if (that.count == 39) {
          that.percentage = 39
        }
        if (that.count == 67) {
          that.percentage = 67
        }
        if (that.count == 81) {
          that.percentage = 81
        }
        if (that.count == 98) {
          that.percentage = 98
        }
        if (that.count == 120) {
          that.percentage = 100
        }
        if (that.count == 135) {
          containerLoad.style.transform = 'scale(0)'
          containerLoad.style.transition = '.3s'
          containerLoad.style.display = 'none'
          containerLogo.style.transform = 'scale(1)'
          containerLogo.style.transition = '.3s'
        }
        if (that.count == 165) {
          containerLoading.style.transform = 'scale(0)'
          containerLoading.style.transition = '.2s'
        }
        if (that.count == 169) {
          containerLoading.style.display = 'none'
          clearInterval(percentage)
        }
      }, 50)
    },
  },
  mounted() {
    this.counter()
  },
}
</script>

<style scoped>
section {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: fixed;
  background: var(--bg-5);
  z-index: 999;
  transition: 0.2s;
  transform: scale(1);
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.load {
  width: 300px;
  transition: 0.3s;
  transform: scale(1);
}
.logo {
  width: 300px;
  transition: 0.3s;
  transform: scale(0);
}
.container-img {
  width: 100px;
  height: 80px;
  background-color: var(--bg-5);
  box-sizing: border-box;
  border-right: 1px solid var(--bg-3);
  padding-right: 20px;
}
.logo .img {
  width: 80px;
  height: 80px;
}
.logo .img .rigth,
.logo .img .left {
  fill: var(--bg-3);
}
.container-line {
  width: 100%;
  height: 1px;
}
.line {
  height: 1px;
  margin-top: -15px;
  background-color: var(--bg-1);
}
p {
  font-size: 39px;
  font-weight: 200;
  letter-spacing: 1px;
  color: var(--bg-2);
  margin-bottom: -22px;
}
span {
  font-weight: 600;
  font-size: 80px;
  color: var(--bg-3);
  transition: 0.3s;
}
.text-welcome {
  font-size: 50px;
  color: var(--bg-3);
  margin-left: 20px;
  font-weight: 400;
}
@media (max-width: 870px) {
  p {
    margin-bottom: -15px;
    font-size: 29px;
  }
  h1 {
    font-size: 60px;
  }
  .load {
    width: 250px;
  }
  .line {
    margin-top: -10px;
  }
  .text-welcome {
    font-size: 30px;
    margin-left: 10px;
  }
  .container-img {
    width: 60px;
    height: 50px;
    padding-right: 10px;
  }
  .logo .img {
    width: 50px;
    height: 50px;
  }
}
</style>
