<template>
  <nav class="is-full-width">
    <svg
      class="logo"
      width="45"
      height="41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#a)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.937 25.59-.02 41.77h6.3l13.622-14.735H16.28l-1.343-1.445z"
          fill="#FAC20B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="m38.678.017-13.75 14.876h3.584l1.363 1.465L44.98.018h-6.301z"
          fill="#EF0070"
        />
        <path
          d="M17.856 25.386 8.634 15.47l9.222-9.914h7.445l-9.222 9.914 9.222 9.915h-7.445z"
        />
        <path
          d="m26.937 16.542 9.221 9.915-9.221 9.914h-7.445l9.221-9.914-9.221-9.915h7.445z"
        />
      </g>
      <defs>
        <clipPath id="a"><path fill="#fff" d="M0 0h45v41H0z" /></clipPath>
      </defs>
    </svg>
    <svg
      class="logoMobile"
      width="45"
      height="41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="open"
    >
      <g clip-path="url(#a)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.937 25.59-.02 41.77h6.3l13.622-14.735H16.28l-1.343-1.445z"
          fill="#FAC20B"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="m38.678.017-13.75 14.876h3.584l1.363 1.465L44.98.018h-6.301z"
          fill="#EF0070"
        />
        <path
          d="M17.856 25.386 8.634 15.47l9.222-9.914h7.445l-9.222 9.914 9.222 9.915h-7.445z"
        />
        <path
          d="m26.937 16.542 9.221 9.915-9.221 9.914h-7.445l9.221-9.914-9.221-9.915h7.445z"
        />
      </g>
      <defs>
        <clipPath id="a"><path fill="#fff" d="M0 0h45v41H0z" /></clipPath>
      </defs>
    </svg>
    <ul>
      <li id="opNav1" class="selected">
        <a href="#home">
          <span>Home</span>
        </a>
      </li>
      <li id="opNav2">
        <a href="#about">
          <span>About</span>
        </a>
      </li>
      <li id="opNav3">
        <a href="#skills">
          <span>Skills</span>
        </a>
      </li>
      <li id="opNav4">
        <a href="#studies">
          <span>Studies</span>
        </a>
      </li>
      <li id="opNav5">
        <a href="#experience">
          <span>Experience</span>
        </a>
      </li>
    </ul>
    <button class="btn circle shadow theme" @click="changeTheme" aria-label="Cambiar tema">
      <i v-if="colorScheme" class="icon icon-sun"></i>
      <i v-else class="icon icon-moon"></i>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavCustom',
  data() {
    return {
      colorScheme: true
    }
  },
  mounted() {
    this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  methods: {
    open() {
      this.$emit('toggleMenu', true)
      let $logo = document.querySelector('.logo')
      $logo.style.cursor = "pointer;"
    },
    changeTheme() {
      const newStyle = document.documentElement.style
      if (!this.colorScheme) {
        newStyle.setProperty('--bg-1', '#fac20b')
        newStyle.setProperty('--bg-2', '#ef0070')
        newStyle.setProperty('--bg-3', '#edf1fd')
        newStyle.setProperty('--bg-4', '#b3b3b3')
        newStyle.setProperty('--bg-5', '#1f2937')
        newStyle.setProperty('--neutral', '#000000')
        newStyle.setProperty(
          '--shadow',
          `#101823 3px 3px 6px 0px,
           #2e3b4c -3px -3px 6px 1px`
        )
        newStyle.setProperty(
          '--shadow-inset',
          `#101823 3px 3px 6px 0px inset,
           #2e3b4c -3px -3px 6px 1px inset`
        )
        newStyle.setProperty(
          '--shadow-btn',
          `#710d3c 3px 3px 6px 0px inset,
           #ff55a4 -3px -3px 6px 1px inset`
        )
      } else {
        newStyle.setProperty('--bg-1', '#ef0070')
        newStyle.setProperty('--bg-2', '#fac20b')
        newStyle.setProperty('--bg-3', '#35455E')
        newStyle.setProperty('--bg-4', '#666666')
        newStyle.setProperty('--bg-5', '#edf1fd')
        newStyle.setProperty('--neutral', '#ffffff')
        newStyle.setProperty(
          '--shadow',
          `rgba(209, 217, 223, 0.809) 3px 3px 6px 0px,
           rgb(218, 226, 232) -3px -3px 6px 1px`
        )
        newStyle.setProperty(
          '--shadow-inset',
          `rgba(209, 217, 223, 0.809) 3px 3px 6px 0px inset,
           rgb(218, 226, 232) -3px -3px 6px 1px inset`
        )
        newStyle.setProperty(
          '--shadow-btn',
          `#b4911d 3px 3px 6px 0px inset,
           #ffe180 -3px -3px 6px 1px inset`
        )
      }
      this.colorScheme = !this.colorScheme
    },
    selectNav(n) {
      const options = [
        document.getElementById('optionNav1'),
        document.getElementById('optionNav2'),
        document.getElementById('optionNav3'),
        document.getElementById('optionNav4'),
        document.getElementById('optionNav5')
      ]
      for (let i = 0; i <= options.length; i++) {
        i === n
          ? options[i].classList.add('selected')
          : options[i].classList.remove('selected')
      }
    },
  },
}
</script>

<style scoped>
.logo, .logoMobile {
  transform: scale(.6);
}
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 70px;
  background-color: var(--bg-5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  animation: 1s animationHeader 4s ease-in;
  padding: 0 20px;
  z-index: 10;
}

nav svg g path:nth-child(3),
nav svg g path:nth-child(4) {
  fill: var(--bg-3);
}

nav ul {
  width: 500px;
  display: none;
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  transition: 0.4s;
  padding: 0px;
}

nav ul li {
  width: 100%;
}

nav ul li.selected a {
  color: var(--bg-1);
}

nav ul li a {
  text-decoration: none;
  color: var(--bg-3);
  cursor: pointer;
  display: flex;
  justify-content: center;
}

nav ul li a:hover {
  color: var(--bg-1);
  transition: 0.4s;
}
nav ul li a span {
  position: relative;
  width: 100%;
  text-align: center;
}

nav ul li a span::after {
  content: '';
  position: absolute;
  background-color: transparent;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform-origin: 50% 50%;
  width: 7px;
  height: 2px;
  border-radius: 2px;
}

nav ul li:hover span::after,
nav ul li.selected span::after {
  animation: point 1s ease;
  background-color: var(--bg-1);
}

.theme {
  height: 35px;
  width: 35px;
  transition: 0.3s;
  color: var(--bg-3);
  font-size: 14px;
}
.theme:hover {
  box-shadow: var(--shadow-inset);
  transition: 0.3s;
}

@keyframes point {
  0% {
    width: 0;
  }
  50% {
    width: 70%;
  }
}

@keyframes animationHeader {
  0% {
    transform: translateY(-80px);
  }
  100% {
    transform: translateY(0px);
  }
}
.logo {
  display: none;
}
@media (min-width: 870px) {
  nav {
    background-color: transparent;
    top: 10px;
    backdrop-filter: blur(20px);
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    border-radius: 8px;
  }

  nav ul {
    display: flex;
    justify-content: space-between;
  }
  .logoMobile  {
  display: none;
  }
.logo {
  display:  flex;
}
}
</style>