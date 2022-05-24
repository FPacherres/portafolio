<template>
  <section>
    <div class="content relative">
      <div class="text">
        <div class="absolute">
          <h1>Hola soy</h1>
          <h1>Fabian Pacherres</h1>
          <h1>Front-End Developer</h1>
          <div class="line"></div>
        </div>
      </div>
      <avatar class="avatar" :flag="true" />
    </div>
    <div class="socialNetwork relative">
      <a
        href="https://twitter.com/FabianXRL16"
        target="blank"
        class="btn circle shadow btnSocial"
      >
        <fa class="icon" :icon="['fab', 'twitter']" />
      </a>
      <a
        href="https://codepen.io/FabianXRL16"
        target="blank"
        class="btn circle shadow btnSocial"
      >
        <fa class="icon" :icon="['fab', 'codepen']" />
      </a>
      <a
        href="https://github.com/FabianXRL16"
        target="blank"
        class="btn circle shadow btnSocial"
      >
        <fa class="icon" :icon="['fab', 'github']" />
      </a>
      <a
        href="https://www.linkedin.com/in/fabianxrl16/"
        target="blank"
        class="btn circle shadow btnSocial"
      >
        <fa class="icon" :icon="['fab', 'linkedin-in']" />
      </a>
      <span class="down absolute">
        <span>vamos!</span>
        <svg
          id="arrow-desk"
          width="64"
          height="190"
          viewBox="0 0 64 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="64" height="190" fill="none" />
          <path
            id="arrow"
            d="M29.9172 3.32697C29.9172 2.0412 30.9619 1 32.2364 1C33.5179 1 34.5556 2.04818 34.5556 3.32697H29.9103H29.9172ZM29.9172 187.563V3.32697H34.5626V187.563L30.5998 189.212L29.9172 187.563V187.563ZM34.5626 187.563C34.5626 188.848 33.5179 189.89 32.2434 189.89C30.9619 189.89 29.9242 188.841 29.9242 187.563H34.5695H34.5626ZM5.96629 157.906L33.887 185.921L30.5998 189.219L2.67904 161.204L5.96629 157.906V157.906ZM2.67904 161.204C1.77365 160.296 1.77365 158.815 2.67904 157.906C3.58443 156.998 5.0609 156.998 5.96629 157.906L2.67904 161.204ZM33.88 189.219C32.9746 190.127 31.4982 190.127 30.5928 189.219C29.6874 188.31 29.6874 186.829 30.5928 185.921L33.88 189.219ZM61.8007 161.204L33.88 189.219L30.5928 185.921L58.5135 157.906L61.8007 161.204V161.204ZM58.5135 157.906C59.4189 156.998 60.8954 156.998 61.8007 157.906C62.7061 158.815 62.7061 160.296 61.8007 161.204L58.5135 157.906Z"
          />
        </svg>
        <svg
          id="arrow-mobile"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 93.33 49.99"
        >
          <g id="mobile">
            <g>
              <path
                fill-rule="nonzero"
                d="M49.02 44.35c1.3,1.3 1.3,3.42 0,4.72 -1.3,1.3 -3.42,1.3 -4.72,0l4.72 -4.72zm-40.09 -40.09l40.09 40.09 -4.72 4.72 -40.09 -40.09 4.72 -4.72zm-4.72 4.72c-1.3,-1.3 -1.3,-3.42 0,-4.72 1.3,-1.3 3.42,-1.3 4.72,0l-4.72 4.72zm44.8 40.09c-1.3,1.3 -3.42,1.3 -4.72,0 -1.3,-1.3 -1.3,-3.42 0,-4.72l4.72 4.72zm40.09 -40.09l-40.09 40.09 -4.72 -4.72 40.09 -40.09 4.72 4.72zm-4.72 -4.72c1.3,-1.3 3.42,-1.3 4.72,0 1.3,1.3 1.3,3.42 0,4.72l-4.72 -4.72z"
              />
            </g>
          </g>
        </svg>
      </span>
    </div>
  </section>
</template>

<script>
import Avatar from '../components/global/Avatar.vue'
export default {
  name: 'Home',
  components: { Avatar },
  data() {
    return {}
  },
}
</script>

<style scoped>
section {
  padding: 80px 0 60px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 80px;
}
.content {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.socialNetwork {
  display: flex;
  align-items: flex-end;
  gap: 15px;
  transition: 0.3s;
}
.socialNetwork a:hover {
  transition: 0.3s;
  box-shadow: var(--shadow-inset);
}
.socialNetwork a:hover .icon {
  transition: 0.3s;
  color: var(--bg-1);
}
.btnSocial {
  height: 50px;
  width: 50px;
}
.icon {
  width: 20px;
  height: 20px;
  margin: -1px 0 0 1.5px;
  color: var(--bg-3);
}
.text {
  text-align: start;
  display: flex;
  align-items: center;
}
.text div {
  z-index: 10;
}
.text h1:nth-child(1) {
  font-weight: 300;
  font-size: 25px;
  margin-bottom: -8px;
  margin-left: -2.5px;
}
.text h1:nth-child(2) {
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 500;
  color: var(--bg-1);
  margin-left: -4px;
}
.text h1:nth-child(3) {
  font-weight: 400;
  font-size: 30px;
  margin-top: -8px;
  margin-left: -2.5px;
}
.line {
  width: 145px;
  height: 5px;
  background-color: var(--bg-2);
  margin-top: 10px;
}
.avatar {
  width: 450px;
  height: 450px;
}
.down {
  right: -5px;
  top: -29px;
  color: var(--bg-2);
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  animation: move-arrow-down 1s linear infinite;
}
.down span {
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  font-size: 12px;
}
.down svg {
  width: 12px;
  height: auto;
}
#arrow {
  fill: var(--bg-2);
}
#arrow-mobile {
  display: none;
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
@media (max-width: 870px) {
  section {
    grid-template-rows: 1fr 100px;
  }
  .content {
    margin-top: -100px;
    justify-content: center;
    flex-direction: column-reverse;
  }
  .text {
    justify-content: center;
    margin-top: 60px;
  }
  .text div {
    z-index: 99;
  }
  .text h1:nth-child(1) {
    font-weight: 300;
    font-size: 16px;
    margin-bottom: -8px;
    margin-left: 0;
  }
  .text h1:nth-child(2) {
    font-size: 30px;
    margin-left: 0;
  }
  .text h1:nth-child(3) {
    font-size: 20px;
    margin-top: -8px;
    margin-left: 0;
    text-align: end;
  }
  .line {
    width: 100px;
    height: 3px;
    margin-top: 8px;
    margin-left: auto;
  }
  .socialNetwork {
    align-items: flex-start;
    justify-content: center;
  }
  .avatar {
    width: 280px;
    height: 280px;
  }
  #arrow-desk, .down span {
    display: none;
  }
  #arrow-mobile {
    display: block;
    width: 50px;
  }
  #mobile {
    fill: var(--bg-2);
  }
  .down {
    right: 0;
    left: 0;
    margin: auto 0;
    top: 70%;
  }
}
</style>
