<template>
  <div class="loading__container">
    <div class="loading">
      <p class="msg">
        Cargando <span class="dot1">.</span><span class="dot2">.</span
        ><span class="dot3">.</span>
      </p>
      <span class="time">{{ percentage }}%</span>
      <span class="progress"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingCustom',
  data() {
    return {
      count: 0,
      percentage: 0,
    }
  },
  mounted() {
    this.timer()
  },
  methods: {
    timer() {
      const that = this
      const percentage = setInterval(() => {
        that.count++
        that.percentage++
        if (that.count === 100) {
          clearInterval(percentage)
          that.closeLoading()
        }
      }, 25)
    },
    closeLoading() {
      setTimeout(() => {
        const container = document.querySelector('.loading__container')
        const height = screen.height + 20
        container.style.transform = `translateY(-${height}px)`
        container.style.transition = '1.5s'
      }, 1000)
    }
  },
}
</script>

<style scoped>
.loading__container {
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 99999;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.loading {
  position: relative;
  display: inline-block;
  max-width: 300px;
  width: 75%;
  color: var(--bg-3);
  transform: translateY(30px);
  opacity: 0;
  visibility: hidden;
  animation: fade 4s linear;
}
.progress {
  position: absolute;
  left: 0px;
  bottom: -3px;
  width: 100%;
  width: 0px;
  height: 3px;
  background-image: linear-gradient(to right, #ef0070, #fac20b);
  border-radius: 4px;
  animation: progress 2.75s .25s linear forwards;
}
.msg {
  text-align: center;
}
.time {
  font-size: 10px;
}
.dot1 {
  animation: dot 1.5s 0s ease infinite;
}
.dot2 {
  animation: dot 1.5s .5s ease infinite;
}
.dot3 {
  animation: dot 1.5s 1s ease infinite;
}
@keyframes dot {
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}
@keyframes fade {
  5% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
  }
  90% {
    opacity: 1;
    transform: translateY(0px);
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateY(-30px);
  }
}
@keyframes progress {
  to {
    width: 300px;
  }
}
</style>