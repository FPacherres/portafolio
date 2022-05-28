<template>
  <nav>
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
    <ul>
      <li>
        <span>Home</span>
        <div class="point"></div>
      </li>
      <li>
        <span>About</span>
        <div class="point"></div>
      </li>
      <li>
        <span>Skills</span>
        <div class="point"></div>
      </li>
      <li>
        <span>Studies</span>
        <div class="point"></div>
      </li>
      <li>
        <span>Experience</span>
        <div class="point"></div>
      </li>
    </ul>
    <button class="btn circle shadow theme" @click="changeTheme">
      <SunIcon v-if="icon" class="icon" />
      <MoonIcon v-else class="icon" />
    </button>
  </nav>
</template>

<script>
import { MoonIcon, SunIcon } from '@heroicons/vue/solid'
export default {
  name: 'FHeader',
  components: { MoonIcon, SunIcon },
  data() {
    return {
      colorScheme: matchMedia('(prefers-color-scheme: dark)').matches,
      icon: true,
    }
  },
  methods: {
    open() {
      window.innerWidth <= 870 ? this.$emit('openMenueMobile') : ''
    },
    changeTheme() {
      let newStyle = document.documentElement.style
      if (!this.colorScheme) {
        newStyle.setProperty('--bg-1', '#fac20b')
        newStyle.setProperty('--bg-2', '#ef0070')
        newStyle.setProperty('--bg-3', '#edf1fd')
        newStyle.setProperty('--bg-4', '#b3b3b3')
        newStyle.setProperty('--bg-5', '#0e0f34')
        newStyle.setProperty(
          '--shadow',
          '#060721 3px 3px 6px 0px, #161843 -3px -3px 6px 1px'
        )
        newStyle.setProperty(
          '--shadow-inset',
          '#060721 3px 3px 6px 0px inset, #161843 -3px -3px 6px 1px inset'
        )
        newStyle.setProperty(
          '--shadow-btn',
          '#710d3c 3px 3px 6px 0px inset, #ff55a4 -3px -3px 6px 1px inset'
        )
        this.icon = true
      } else {
        newStyle.setProperty('--bg-1', '#ef0070')
        newStyle.setProperty('--bg-2', '#fac20b')
        newStyle.setProperty('--bg-3', '#35455E')
        newStyle.setProperty('--bg-4', '#666666')
        newStyle.setProperty('--bg-5', '#edf1fd')
        newStyle.setProperty(
          '--shadow',
          'rgb(204, 219, 232) 3px 3px 6px 0px, rgba(255, 255, 255, 0.8) -3px -3px 6px 1px'
        )
        newStyle.setProperty(
          '--shadow-inset',
          'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.8) -3px -3px 6px 1px inset'
        )
        newStyle.setProperty(
          '--shadow-btn',
          '#b4911d 3px 3px 6px 0px inset, #ffe180 -3px -3px 6px 1px inset'
        )
        this.icon = false
      }
      this.colorScheme = !this.colorScheme
    },
  },
}
</script>

<style scoped>
nav {
  background-color: var(--bg-5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 10px;
  animation: 1s animationHeader 8s ease-in;
}
.img {
  width: 40px;
  height: auto;
}
.img .rigth,
.img .left {
  fill: var(--bg-3);
}
ul {
  width: 500px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 300;
  transition: 0.4s;
  color: var(--bg-3);
  padding: 0px;
}
li {
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li:hover {
  color: var(--bg-1);
  transition: 0.4s;
}
li:hover .point {
  animation: point 1s ease;
  background-color: var(--bg-1);
  width: 7px;
}
.icon {
  width: 20px;
  height: 20px;
  color: var(--bg-3);
  margin: -1px 0 0 1.5px;
}
.theme {
  height: 35px;
  width: 35px;
  transition: 0.3s;
}
.theme:hover {
  box-shadow: var(--shadow-inset);
  transition: 0.3s;
}
.point {
  background-color: var(--bg-3);
  width: 0px;
  height: 2px;
  border-radius: 2px;
}

@keyframes animationHeader {
  0% {
    transform: translateY(-80px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 870px) {
  ul {
    display: none;
  }
  .theme {
    width: 45px;
    height: 45px;
  }
  .icon {
    width: 22px;
    height: 22px;
  }
  .img {
    cursor: pointer;
  }
}
</style>
