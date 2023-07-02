<template>
  <section id="contact" class="is-full-width">
    <div id="containerModal" v-if="showModal">
      <div class="contentForm" id="form">
        <div class="containerFake"></div>
        <div class="cover">
          <div class="img__back"></div>
          <img src="../assets/photo.png" alt="Fabian Pacherres" />
        </div>
        <div class="form">
          <h2>Vamos!</h2>
          <div class="grupo grupo1">
            <input type="email" name="from_name" v-model="email" id="from_name" required autocomplete="off" /><span
              class="barra"></span>
            <label style="font-weight: bold;">Correo</label>
          </div>
          <div class="grupo grupo2">
            <textarea name="message" v-model="message" id="message" rows="3" required></textarea><span
              class="barra"></span>
            <label style="font-weight: bold;">Mensaje</label>
          </div>
          <span class="msgAlert" v-if="showAlert">{{ msgAlert }}</span>
          <button :disabled="disabled" class="btn btn__form btn__form__send" id="buttonSend" type="submit"
            @click="send()">
            {{ msg }}
          </button>
        </div>
      </div>
      <button @click="showModal = false, clear()" class="closeBtnModal btn">
        <svg id="arrow-mobile" width="21" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M10.723 8.8c-.07-.043-7.722-7.46-8.216-7.94a1.18 1.18 0 0 0-.882-.358C.955.52.379 1.112.523 1.828c.078.388.3.561.494.748l8.831 8.539c.098.095.2.191.36.265.519.245 1.025.085 1.382-.262l8.836-8.544c.186-.178.413-.366.487-.744.143-.72-.433-1.321-1.117-1.33-.382-.004-.64.146-.878.375l-6.939 6.71-.63.609c-.15.145-.494.49-.627.605h.001z" />
        </svg>
      </button>
    </div>
    <div class="container__contact">
      <h2 class="title">Contáctame</h2>
      <span class="subtitle">Sería un placer conocerte!</span>
      <div class="socialNetwork">
        <button class="btn btnSN btn1" @mouseover=" nick = '+51 953 ### ###'; color = '35c651';"
          aria-label="Abrir chat de WhatsApp con Fabián">
          <a target="_blank" href="https://wa.me/51953172725?text=Hola%20Fabi%C3%A1n!%20un%20gusto...">
            <i class="icon icon-whatsapp"></i>
          </a>
        </button>
        <button class="btn btnSN btn5" @mouseover="nick = '@FabianXRL16'; color = '1c93e4';"
          aria-label="Ir al Twitter">
          <a target="_blank" href="https://twitter.com/FabianXRL16">
            <i class="icon icon-twitter"></i>
          </a>
        </button>
        <button class="btn btnSN btn2" @mouseover="nick = '@fabian.xrl16';color = 'c104b6';"
          aria-label="Ir al Instagram">
          <a target="_blank" href="https://www.instagram.com/fabian.xrl16/">
            <i class="icon icon-instagram"></i>
          </a>
        </button>
        <button class="btn btnSN btn3" @mouseover=" nick = '/fabian.fxrl16'; color = '1871e7';"
          aria-label="Ir al Facebook">
          <a target="_blank" href="https://www.facebook.com/fabian.fxrl16/">
            <i class="icon icon-facebook"></i>
          </a>
        </button>
        <button class="btn btnSN btn4" @mouseover=" nick = '+51 953 ### ###'; color = '2f9fd5';"
          aria-label="Abrir chat de Telegram con Fabián">
          <a target="_blank" href="https://t.me/FXRL16">
            <i class="icon icon-telegram"></i>
          </a>
        </button>
        <button class="btn btnSN btn6" @mouseover=" nick = 'fa*****@gmail.com'; color = 'f2b200'; "
          aria-label="Abrir modal para enviar un correo a Fabian" @click="modalUp">
          @
        </button>
        <button class="btn btnSN btn7" @mouseover=" nick = 'FXRL16'; color = 'f20000';"
          aria-label="Ir al canal de Youtube">
          <a target="_blank" href="https://www.youtube.com/channel/UCSZpIcOVvATn_WFVg2qHmNQ">
            <i class="icon icon-youtube"></i>
          </a>
        </button>
      </div>
      <span class="nick" :style="`color: #${color}`">{{ nick }}</span>
    </div>
    <footer>
      <div class="countLikes heart-btn btn">
        <button id="contentLike" class="contentLike btn" 
          @click="like" :aria-label="`Dar like al portafolio de Fabián, voy ${likes} likes`">
          <span id="numb" class="numb">{{ likes }}</span>
          <span id="heart" class="heart"></span>
        </button>
      </div>
      <span :aria-label="`FabianXRL16, ${ year } todos los derechos reservados.`">© FabianXRL16, {{ year }} todos los derechos reservados.</span>
    </footer>
  </section>
</template>

<script>
import { app } from "../utils/firebase";
import { getFirestore, doc, updateDoc, collection, getDocs, increment } from "firebase/firestore";
import { validate } from "email-validator";
export default {
  name: "ContactPage",
  data() {
    return {
      name: null,
      email: "",
      message: "",
      nick: "FabianXRL16",
      color: "",
      showModal: false,
      likes: 0,
      showAlert: false,
      msgAlert: 'Completar campos.',
      disabled: false,
      msg: "Enviar",
      btnCounter: 'true',
      year: ''
    };
  },
  methods: {
    async send() {
      if (!this.email || !this.message) {
        this.msgAlert = "Completar campos"
        this.showAlert = true;
        return;
      }

      if (!validate(this.email)) {
        this.msgAlert = "Correo no válido"
        this.showEmailAlert = true;
        return;
      }

      this.disabled = true;
      this.msg = "Enviando...";

      const userID = 'MrbRhMxQ5gONSWDva';
      const templateID = 'template_j9kqp3p';

      const templateParams = {
        from_name: this.email,
        message: this.message
      };

      try {
        const response = await emailjs.send('default_service', templateID, templateParams, userID);
        this.msg = "Enviado";
      } catch (error) {
        this.msg = "Volver a intentar";
      } finally {
        setTimeout(() => {
          this.showModal = false;
          this.disabled = false;
          this.clear()
        }, 1500);
      }
    },
    validarCorreo(correo) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(correo);
    },
    modalUp() {
      this.showModal = true
    },
    async like() {
      if (this.btnCounter) {
        this.btnCounter = false
        try {
          const db = getFirestore(app);
          const counterDocRef = doc(db, "likes", "Nge7Kr99JJs467fERmIw");
          await updateDoc(counterDocRef, { counter: increment(1) });
          this.likes++

          const liked = localStorage.getItem("liked");
          if (!liked) {
            localStorage.setItem("liked", "true");
          }

          let $content = document.getElementById("contentLike");
          let $heart = document.getElementById("heart");
          let $numb = document.getElementById("numb");
          setTimeout(() => {
            $content.classList.add("heart-active");
            $heart.classList.add("heart-active");
            $numb.classList.add("heart-active");
          }, 100)
          $content.classList.remove("heart-active");
          $heart.classList.remove("heart-active");
          $numb.classList.remove("heart-active");
        } catch (error) {
          console.error("Error al actualizar el contador en Firebase:", error);
        } finally {
          this.btnCounter = true
        }
      }
    },
    clear() {
      this.msg = "Enviar";
      this.email = ""
      this.message = ""
      this.showAlert = false;
    }
  },
  mounted() {
    const date = new Date();
    this.year = date.getFullYear();

    const db = getFirestore(app);
    const likesCollectionRef = collection(db, "likes");

    getDocs(likesCollectionRef)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.likes = doc.data().counter;
        });
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });

    const liked = localStorage.getItem("liked");
    if (liked && liked === "true") {
      let $content = document.getElementById("contentLike");
      let $heart = document.getElementById("heart");
      let $numb = document.getElementById("numb");
      $content.classList.add("heart-active");
      $heart.classList.add("heart-active");
      $numb.classList.add("heart-active");
    }
  }
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-rows: 1fr 50px;
  gap: 20px;
}

.msgAlert {
  color: var(--bg-2);
  font-size: 12px;
  position: absolute;
  bottom: 110px;
}

.countLikes {
  position: relative;
  width: 60px;
}

.heart {
  position: absolute;
  background: url("../assets/img.png") no-repeat;
  background-position: left;
  background-size: 2900%;
  height: 45px;
  width: 45px;
  top: 50%;
  right: -25px;
  transform: translate(-50%, -50%);
}

.numb {
  color: #aab8c2;
  transition: 0.3s;
  font-size: 16px;
  font-weight: 200;
  margin-right: 18px;
}

.numb.heart-active {
  color: #e2264d;
  transition: 0.3s;
  font-weight: 600;
}

.heart.heart-active {
  animation: animate 0.8s steps(28) 1;
  background-position: right;
}

@keyframes animate {
  0% {
    background-position: left;
  }

  100% {
    background-position: right;
  }
}

#arrow-mobile path {
  fill: var(--bg-1);
  transition: 0.3s;
}

#arrow-mobile {
  transform: rotate(90deg) scale(1.5);
}

.container__contact {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--bg-3);
  box-sizing: border-box;
  position: relative;
}

#containerModal {
  width: 100vw;
  height: 100%;
  min-height: 650px;
  background-color: #10161d;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10000;
  transform: scaleY(0.01) scaleX(0);
  animation: modalUp 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes modalUp {
  0% {
    transform: scaleY(0.005) scaleX(0);
  }

  50% {
    transform: scaleY(0.005) scaleX(1);
  }

  100% {
    transform: scaleY(1) scaleX(1);
  }
}

@keyframes modalDown {
  0% {
    transform: scaleY(1) scaleX(1);
  }

  50% {
    transform: scaleY(0.005) scaleX(1);
  }

  100% {
    transform: scaleY(0.005) scaleX(0);
  }
}

.contentForm {
  width: 300px;
  height: 90%;
  min-height: 550px;
  max-height: 650px;
  position: relative;
  border-radius: 20px;
  transform: scale(0);
  animation: zoomIn 0.5s 0.7s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.contentForm .grupo {
  position: relative;
}

.contentForm .grupo1 {
  height: 50px;
  margin: 40px 0 40px;
  width: 100%;
}

.contentForm .grupo2 {
  height: 60px;
  width: 100%;
}

input,
textarea {
  background: none;
  color: #ffffff;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid #ffffff;
  resize: none;
  box-sizing: border-box;
}

textarea {
  height: 70%;
  margin-top: 5%;
  padding-bottom: 10px;
}

input:focus,
textarea:focus {
  outline: none;
  color: #ffffff;
}

input:focus label,
textarea:focus label {
  position: absolute;
  top: -14px;
  font-size: 12px;
  color: #fff;
  filter: brightness(80%);
}

input:not(:placeholder-shown)~label,
textarea:not(:placeholder-shown)~label {
  top: -14px;
  font-size: 16px;
  color: #fff;
}

label {
  color: #ffffff;
  font-size: 16px;
  position: absolute;
  left: 5px;
  top: 10px;
  transition: 0.5s ease all;
  pointer-events: none;
}

input:focus~.barra::before,
textarea:focus~.barra::before {
  width: 100%;
}

.barra {
  position: relative;
  display: block;
  width: 100%;
}

.barra::before {
  content: "";
  height: 1px;
  width: 0%;
  bottom: 0;
  position: absolute;
  background: var(--bg-1);
  filter: brightness(80%);
  transition: 0.3s ease all;
  left: 0%;
}

textarea::-webkit-scrollbar {
  width: 3px;
}

textarea::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 10px #7b7b7b;
  border-radius: 5px;
}

textarea::-webkit-scrollbar-thumb {
  background-color: #ffffff;
  border-radius: 5px;
}

@keyframes zoomIn {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

.closeBtnModal {
  position: absolute;
  top: 8%;
  right: 6%;
  cursor: pointer;
}

.closeBtnModal:hover #arrow-mobile path {
  fill: var(--bg-2);
  transition: 0.3s;
}

.containerFake {
  width: 300px;
  height: calc(100% - 130px);
  position: absolute;
  bottom: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 22px;
  z-index: -1;
}

.contentForm .cover {
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.contentForm .cover img {
  width: 250px;
  position: absolute;
  filter: drop-shadow(rgba(0, 0, 0, 0.35) 0px 5px 10px);
}

.contentForm .cover .img__back {
  width: 100%;
  height: 120px;
  position: absolute;
  background-color: var(--bg-2);
  bottom: 0;
  border-radius: 20px 20px 0 0;
}

.form {
  background-color: var(--bg-1);
  border-radius: 0 0 20px 20px;
  height: calc(100% - 250px);
  min-height: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  padding: 20px 30px;
  box-sizing: border-box;
}

.input-group {
  width: 100%;
  position: relative;
}

.btn__form {
  background-color: #ffffff;
  color: var(--bg-1);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  height: 50px;
  overflow: hidden;
  width: 100%;
  filter: brightness(90%);
  border-radius: 10px;
  position: relative;
  margin-top: 75px;
  opacity: 0.8;
}

.btn__form__send:hover {
  opacity: 1;
}

.btn__form__send:before {
  position: absolute;
  content: "";
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: var(--bg-1);
  filter: brightness(90%);
  animation: changeKillType 3s ease-in-out infinite;
}

.btn__form:hover {
  opacity: 1;
}

.btn__form:active {
  box-shadow: 4px 4px 6px 0 rgba(81, 76, 76, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}

.socialNetwork {
  display: flex;
  justify-content: center;
  row-gap: 30px;
  column-gap: 60px;
  flex-wrap: wrap;
  padding: 2% 120px;
}

.container__contact .title {
  font-size: 38px;
  font-weight: 400;
  margin-top: -20px;
}

.container__contact .subtitle {
  font-size: 12px;
  margin: 15px 0px 8%;
  font-weight: 200;
}

.container__contact .nick {
  font-size: 24px;
  margin-top: 5%;
  font-weight: 200;
  transition: 0.3s;
}

.btnSN {
  background: var(--bg-5);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  color: white;
  font-size: 36px;
  position: relative;
  overflow: hidden;
  transform: scale(0.9);
  transition: 0.3s;
  box-shadow: var(--bg-3) 0px 5px 30px -10px;
}

.btn1 .icon-whatsapp:before,
.btn2 .icon-instagram:before,
.btn3 .icon-facebook:before,
.btn4 .icon-telegram:before {
  color: #ffffff;
}

.btn1 {
  background: linear-gradient(0deg,
      rgba(13, 152, 38, 1) 0%,
      rgba(69, 232, 98, 1) 50%,
      rgba(107, 252, 133, 1) 100%);
  padding: 5px 0px 0px 4px;
}

.btnSN:hover {
  transition: 0.3s;
  transform: scale(1.1);
}

.btn2 {
  background: radial-gradient(circle at 33% 100%,
      #fed373 4%,
      #f15245 30%,
      #d92e7f 62%,
      #9b36b7 85%,
      #515ecf);
  padding: 7px 0px 0px 1px;
}

.btn3 {
  background-color: #0072ea;
  padding: 7px 0px 0px 2px;
}

.btn4 {
  background-color: #249dd8;
  padding: 7px 0px 0px 0px;
}

.btn5 {
  background-color: #1c99e6;
  padding: 7px 0px 0px 3px;
}

.btn6 {
  background-color: #f2b200;
  padding: 0px 0px 5px 0px;
  animation: pulse 2s infinite;
}

.btn6:hover {
  animation: none;
}

@-webkit-keyframes pulse {
  0% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
  }

  70% {
    -webkit-box-shadow: 0 0 0 40px rgba(0, 0, 0, 0);
  }

  100% {
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.btn7 {
  background-color: #f20000;
  padding: 6px 0px 0px 1px;
}

@keyframes changeKillType {
  0% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0;
  }

  80% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }

  81% {
    -webkit-transform: scale(4) rotate(45deg);
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}

footer {
  text-align: center;
  color: var(--bg-3);
  font-size: 11.5px;
  font-weight: 200;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

footer span {
  margin-top: auto;
}

#tagA {
  display: none;
}

.closeBtn {
  position: absolute;
}

@media screen and (max-width: 870px) {
  .contentForm {
    width: 90%;
    max-height: 800px;
  }

  textarea {
    height: 100px;
  }

  .btn__form {
    margin-top: 100px;
    opacity: 1;
  }

  .container__contact {
    padding-top: 15%;
  }

  .socialNetwork {
    row-gap: 20px;
    column-gap: 30px;
    flex-wrap: wrap;
    padding: 0px;
  }

  .container__contact .title {
    font-size: 38px;
    margin-top: -20px;
  }

  .container__contact .subtitle {
    font-size: 12px;
    margin: 15px 0px 15%;
  }

  .container__contact .nick {
    font-size: 24px;
    margin-top: 20%;
  }

  .btnSN {
    width: 60px;
    height: 60px;
    font-size: 28px;
    transform: scale(0.9);
  }

  .countLikes {
    bottom: 10px;
  }
}
</style>
