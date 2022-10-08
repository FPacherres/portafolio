<template>
  <section id="home" class="is-full-width">
    <div class="container__home">
      <div class="mySelf">
        <div class="mainText">
          <h2>Hola soy</h2>
          <h1>Fabian Pacherres</h1>
          <VueWriter
            class="carrer"
            :array="arr"
            caret="'|'"
            start="4000"
            :typeSpeed="50"
            :eraseSpeed="100"
            :delay="2000"
          />
        </div>
        <avatar class="avatar" :photo="1" :flag="true" />
      </div>
      <div class="socialNetwork">
        <div>
          <button
            v-for="socialNetwork in socialNetworks"
            :key="socialNetwork.id"
            class="btnSocialNetwork btn circle shadow"
          >
            <a target="_blank" :href="socialNetwork.href">
              <i class="icon" :class="socialNetwork.icon"></i>
            </a>
          </button>
        </div>
        <a href="#contact" class="down">
          <span>vamos!</span>
          <svg
            id="arrow-desk"
            width="12"
            height="37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.394 33.97c-.22-.137-3.724-3.624-4.15-4.019-.636-.593-1.557.196-.807.92l4.786 4.657c.18.172.432.526.834.502.324-.02.64-.418.804-.575 1.566-1.525 3.25-3.117 4.768-4.642.495-.497.093-1.186-.51-1.06-.228.046-.282.154-.4.271l-2.724 2.653c-.207.201-1.19 1.212-1.374 1.297V17.168c0-.406.048-15.497-.027-15.769A.596.596 0 0 0 6 .967c-.75.009-.6.882-.6 1.516v31.485l-.006.003z"
            />
          </svg>
          <svg
            id="arrow-mobile"
            width="21"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.723 8.8c-.07-.043-7.722-7.46-8.216-7.94a1.18 1.18 0 0 0-.882-.358C.955.52.379 1.112.523 1.828c.078.388.3.561.494.748l8.831 8.539c.098.095.2.191.36.265.519.245 1.025.085 1.382-.262l8.836-8.544c.186-.178.413-.366.487-.744.143-.72-.433-1.321-1.117-1.33-.382-.004-.64.146-.878.375l-6.939 6.71-.63.609c-.15.145-.494.49-.627.605h.001z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import avatar from '../components/custom/Avatar.vue'
export default {
  name: 'HomePage',
  components: { avatar },
  data() {
    return {
      socialNetworks: [
        {
          id: 2,
          name: 'Codepen',
          icon: 'icon-codepen',
          href: 'https://codepen.io/FabianXRL16',
        },
        {
          id: 3,
          name: 'GitHub',
          icon: 'icon-github',
          href: 'https://github.com/FabianXRL16',
        },
        {
          id: 4,
          name: 'LinkedIn',
          icon: 'icon-linkedin',
          href: 'https://www.linkedin.com/in/fabianxrl16/',
        },
        {
          id: 5,
          name: 'Behance',
          icon: 'icon-behance',
          href: 'https://www.behance.net/FabianXRL16',
        },
      ],
      arr: [
        'Front-End Developer',
        'Aficionado en UI/UX',
        'Diseñador Gráfico',
        'Egresado en Informática',
      ],
    }
  },
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__home {
  display: grid;
  grid-template-rows: 1fr 50px;
  gap: 40px;
  max-width: 420px;
  max-height: 550px;
  height: 100%;
  width: 100%;
}
section .socialNetwork {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

section .socialNetwork div {
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
  animation: 1s animationSocialNetwork 3.5s ease-in;
}
section .socialNetwork .btnSocialNetwork {
  width: 43px;
  height: 43px;
  background-color: var(--bg-5);
  font-size: 16px;
}
section .socialNetwork .btnSocialNetwork a {
  color: var(--bg-3);
  margin-top: 2px;
}
section .socialNetwork .btnSocialNetwork a .icon-codepen {
  margin-left: 2px;
}
section .socialNetwork .btnSocialNetwork:hover {
  transition: 0.3s;
  box-shadow: var(--shadow-inset);
}
section .socialNetwork .btnSocialNetwork:hover a .icon {
  color: var(--bg-1);
  transition: 0.3s;
}
.down {
  color: var(--bg-1);
  text-transform: uppercase;
  font-size: 12px;
  animation: 1s move-arrow-down 3.5s linear infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.down span {
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  font-size: 12px;
  transition: 0.3s;
}

.down span,
#arrow-desk {
  display: none;
}

#arrow-desk path,
#arrow-mobile path {
  fill: var(--bg-1);
}

.avatar {
  animation: 1s animationAvatar 3.5s ease-in;
}

@keyframes move-arrow-down {
  0% {
    opacity: 0;
    transform: translateY(0px);
  }
  50% {
    opacity: 0.5;
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(20px);
  }
}

@keyframes animationSocialNetwork {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes animationAvatar {
  0% {
    transform: translateX(200px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes animationMainText {
  0% {
    transform: translateX(-200px);
  }
  100% {
    transform: translateX(0px);
  }
}

section .mySelf {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;
}

section .mySelf .mainText {
  z-index: 2;
  display: grid;
  animation: 1s animationMainText 3.5s ease-in;
}

.mainText h2 {
  font-weight: 200;
  font-size: 16px;
  margin-bottom: -8px;
  margin-left: -2.5px;
  color: var(--bg-3);
}
.mainText h1 {
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 400;
  color: var(--bg-1);
  margin-left: -4px;
}
.mainText .carrer {
  font-size: 20px;
  margin-top: -8px;
  color: var(--bg-3);
  justify-self: end;
}

@media screen and (min-width: 870px) {
  .container__home {
    grid-template-rows: 1fr 80px;
    gap: 0px;
    max-height: 550px;
    max-width: 800px;
    width: 100%;
  }
  section .socialNetwork {
    flex-direction: row;
    justify-content: space-between;
  }
  section .socialNetwork div {
    justify-content: flex-start;
    gap: 10px;
  }
  .down span,
  #arrow-desk {
    display: flex;
  }
  #arrow-mobile {
    display: none;
  }
  section .mySelf {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-top: 30px;
  }

  section .mySelf .mainText {
    position: absolute;
    left: 0;
  }
  .mainText h2 {
    font-size: 20px;
    margin-bottom: -8px;
    margin-left: -2.5px;
  }
  .mainText h1 {
    font-size: 46px;
    margin-left: -4px;
  }
  .mainText .carrer {
    font-size: 25px;
    justify-self: start;
  }
  section .socialNetwork .btnSocialNetwork {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }

  section .socialNetwork .btnSocialNetwork a {
    margin-top: 3px;
  }

  section .socialNetwork .btnSocialNetwork a .icon-codepen {
    margin-left: 1.5px;
  }
}
</style>
