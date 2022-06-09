<template>
  <form class="shadow">
    <h1>Hablemos!</h1>
    <input
      type="text"
      v-model="name"
      id="name"
      class="shadow-total"
      placeholder="Nombre *"
    />
    <input
      type="text"
      v-model="email"
      id="email"
      class="shadow-total"
      placeholder="Correo *"
    />
    <textarea
      class="shadow-total"
      v-model="msg"
      id="msg"
      placeholder="Hola! dime algo..."
    />
    <button
      type="submit"
      class="btn send shadow"
      :class="name != '' && email != '' ? 'sendPerfect' : 'sendDisabled'"
      @click="send"
    >
      Enviar
    </button>
    <a href="mailto:fabianpacherres@gmail.com" id="tagA"></a>
    <div class="socialNetworkAdd">
      <span>También estoy por aquí</span>
      <div>
        <a
          href="https://wa.me/51953172725?text=Hola%20Fabi%C3%A1n!%20un%20gusto..."
          target="blank"
        >
          <fa class="icon whatsapp" :icon="['fab', 'whatsapp']" />
        </a>
        <a href="https://www.instagram.com/fabian.xrl16/" target="blank">
          <fa class="icon instagram" :icon="['fab', 'instagram']" />
        </a>
        <a href="https://www.facebook.com/fabian.fxrl16/" target="blank">
          <fa class="icon facebook" :icon="['fab', 'facebook']" />
        </a>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  components: {},
  data() {
    return {
      name: '',
      email: '',
      msg: '',
    }
  },
  methods: {
    send(event) {
      event.preventDefault()
      if (this.name != '' && this.email != '') {
        const $tagA = document.querySelector('#tagA')
        $tagA.setAttribute(
          'href',
          `mailto:fabianpacherres@gmail.com?subject=Nombre: ${this.name} Correo: ${this.email}&body=${this.msg}`
        )
        $tagA.click()
      }
    },
  },
}
</script>

<style scoped>
form {
  border-radius: 20px;
  background-color: var(--bg-5);
  display: grid;
  place-content: center;
  gap: 20px;
}

h1 {
  color: var(--bg-6);
  font-weight: 600;
  font-size: 30px;
  margin-top: auto;
}

.socialNetworkAdd {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.socialNetworkAdd span {
  font-size: 12px;
  color: var(--bg-6);
}
.socialNetworkAdd div {
  display: flex;
  gap: 8px;
}
.socialNetworkAdd div a {
  text-decoration: none;
  width: 25px;
  height: 25px;
}
.socialNetworkAdd div a .icon {
  font-size: 25px;
}
.socialNetworkAdd div a .whatsapp {
  color: #25d366;
}
.socialNetworkAdd div a .instagram {
  color: #dd2a7b;
}
.socialNetworkAdd div a .facebook {
  color: #1e8ff3;
}

input {
  border-radius: 30px;
  height: 55px;
  border: 3px var(--bg-5) solid;
  background-color: var(--bg-5);
  width: 300px;
  padding: 0px 20px;
  box-sizing: border-box;
  color: var(--bg-6);
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: var(--bg-6);
}

.send {
  padding: 10px 0;
  border-radius: 30px;
  background-color: var(--bg-5);
  color: var(--bg-6);
  font-size: 20px;
  font-weight: 500;
  transition: 0.3s;
}
.sendDisabled:hover {
  cursor: not-allowed;
}
.sendPerfect:hover {
  box-shadow: var(--shadow-inset);
  transition: 0.3s;
}

textarea {
  outline: none;
  border-radius: 20px;
  border: 3px var(--bg-5) solid;
  background-color: var(--bg-5);
  height: 70px;
  padding: 10px 20px;
  box-sizing: border-box;
  color: var(--bg-6);
  overflow: hidden;
  resize: none;
}

@media (max-width: 870px) {
  h1 {
    font-size: 25px;
  }

  input {
    width: 68vw;
    height: 50px;
    border: 4px var(--bg-5) solid;
  }

  .send {
    font-size: 18px;
  }
  .socialNetworkAdd {
    height: 20px;
  }
  .socialNetworkAdd span {
    font-size: 10px;
  }
  .socialNetworkAdd div a {
    width: 20px;
    height: 20px;
  }
  .socialNetworkAdd div a .icon {
    font-size: 20px;
  }
}
</style>
