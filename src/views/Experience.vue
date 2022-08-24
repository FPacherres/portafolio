<!-- <swiper
        :effect="'cards'"
        :grabCursor="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="project in projects"
          :key="project"
          :style="`backgroundColor:${project.styles.cardBackground}; color:${project.styles.cardColor}`"
        >
          <card :data="project" />
        </swiper-slide>
      </swiper> -->

      <!-- import { Swiper, SwiperSlide } from 'swiper/vue'


      ////////////////////////
import 'swiper/css'

import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper' -->


//////////////


<!-- components: {
    Swiper,
    SwiperSlide,
    Title,
    Card,
  },
  setup() {
    return {
      modules: [EffectCards],
      projects,
    }
  }, -->

<template>
  <section id="experience" class="is-full-width">
    <div class="container__experience">
      <titleCustom class="title__about" :pos="4" :title="'Experience'" />
      <div class="container__carrusel">
        <div id="content__carrusel" class="content__carrusel">
          <div class="card shadow">
            <div class="card__logo">
              <div class="logo__container circle shadow">
                <svg
                  width="59"
                  height="40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 28.297c1.616 1.542 10.91 5.711 13.906 7 6.887 2.96 11.608 3.963 19.455 3.963 7.569 0 12.119-2.037 18.32-3.95-6.047-.486-7.814-.21-13.058-2.618-8.388-3.85-12.14-7.837-17.91-13.857-2.395-2.5-4.494-6.17-6.996-8.945C11.794 12.859 1.053 26.25 0 28.297z"
                    fill="#00B19D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.452 5.182c1.174 5.131 7.057 14.233 9.572 17.202 2.696 3.183 10.37 8.921 16.656 9.96-4.056-4.23-5.79-5.26-8.15-12.443-1.887-5.748-2.264-12.506-1.75-19.012L20.453 5.182z"
                    fill="#00B19D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.55 28.424c.31-4.128-1.254-5.103 2.332-12.141 2.516-4.937 5.436-6.773 6.56-8.957L44.14 2.5c-1.222 3.837-2.817 9.315-2.624 13.63.31 6.917 3.951 11.337 4.035 12.293z"
                    fill="#00B19D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.28 24.426c.697-2.95 7.193-4.74 11.712-4.778.124-1.368-1.232-5.02-1.911-6.225-3.92 1.23-9.941 6.014-9.8 11.003z"
                    fill="#00B19D"
                  />
                </svg>
              </div>
            </div>
            <div class="card__text">
              <h2>Alegra</h2>
              <p>
                Esta aplicación trabaja bajo las normas de la DIAN (entidad de
                hacienda en Colombia) para regularizar los procesos de las
                empresas.
              </p>
            </div>
            <div class="card__actions">
              <a
                class="btn btn__card shadow web"
                href="https://nomina.alegra.com/login"
                target="_blank"
                >Visitar</a
              >
              <a
                class="btn btn__card shadow video"
                href="https://www.youtube.com/watch?v=7cAIG4Nkx_U&ab_channel=Alegra-Facturaci%C3%B3nElectr%C3%B3nica%26Contabilidad"
                target="_blank"
              >
                <i class="icon icon-play"></i>
              </a>
            </div>
          </div>
          <div class="card shadow">
            <div class="card__logo">
              <div class="logo__container circle shadow">
                <svg
                  width="50"
                  height="53"
                  viewBox="0 0 50 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_133_90)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.1199 23.5106C16.172 24.7122 18.3602 30.0348 14.7717 34.5212C14.4098 34.9736 14.1908 35.1767 13.7823 35.5978C13.4344 35.9564 13.1676 36.347 12.8013 36.6797C9.69205 39.5043 7.16871 43.598 8.7723 48.3214C9.46936 50.3745 10.8046 51.8593 12.7726 52.573C17.3342 54.2275 21.427 50.5044 26.4586 51.0226C30.7751 51.4673 35.3706 54.704 39.3393 51.8005C43.079 49.0643 42.7719 43.4877 40.4752 39.7898C39.6019 38.3837 37.832 36.676 36.6538 35.4579C32.8802 31.556 34.1618 28.0281 30.5538 25.0702C28.8936 23.7093 26.7316 23.116 24.1197 23.5109L24.1199 23.5106Z"
                      fill="#FF1010"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.8541 5.43136C9.88952 6.87777 12.6272 24.2416 19.2772 23.1504C26.2441 22.0073 23.505 4.05002 16.8541 5.43136Z"
                      fill="#FF1010"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M32.7134 5.40611C25.4547 6.59413 25.3454 24.1879 32.2434 23.148C35.3766 22.6757 37.3968 18.2811 37.7025 14.4547C38.0076 10.6371 36.5833 4.77251 32.7134 5.40611Z"
                      fill="#FF1010"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.29288 19.1949C-0.320037 20.3363 3.25828 35.6162 10.2461 34.9042C17.6386 34.1506 14.0786 18.1776 7.29288 19.1949V19.1949Z"
                      fill="#FF1010"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M42.1758 19.2971C34.2975 20.9551 34.2957 36.3137 41.4214 34.8801C44.4899 34.2628 46.7854 30.8631 47.3429 27.3022C47.9678 23.3095 46.3009 18.4289 42.1758 19.2971V19.2971Z"
                      fill="#FF1010"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.5442 4.95755C15.0619 4.79557 15.4205 4.55199 15.8777 4.35892C16.3586 4.15614 16.9035 4.0913 17.3535 3.90455C17.2739 3.12573 16.6198 0.532571 15.9643 0C15.4716 1.70627 14.7154 2.80589 14.5442 4.95755Z"
                      fill="#FF1010"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.06158 18.7988C5.27848 18.3986 5.24346 17.885 6.91918 17.7492L5.90479 14.3401C5.85979 14.2089 5.86397 14.2099 5.81061 14.0911C5.70971 13.8665 5.73244 13.9294 5.6835 13.8541C4.80295 14.7743 4.26247 17.1817 4.06158 18.7988V18.7988Z"
                      fill="#FF1010"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.0978 3.90528C34.4708 4.10442 35.0252 4.66225 36.0298 5.10375C36.0013 3.97692 35.0417 0.63846 34.4346 0.150574L33.0978 3.90504V3.90528Z"
                      fill="#FF1010"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M43.5737 17.6683C45.5677 18.1586 45.003 18.0899 46.4127 18.9027C46.4359 16.5033 45.5333 15.4222 44.9734 13.9745L44.5447 14.824C44.4234 15.1835 44.3259 15.4691 44.2093 15.8059C43.9903 16.4388 43.7349 17.0464 43.5737 17.6683Z"
                      fill="#FF1010"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_133_90">
                      <rect width="50" height="53" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="card__text">
              <h2>Buscapatas</h2>
              <p>
                Aplicación web que facilita la adopción de mascotas del Refugio
                Animal Chiclayo, en conjunto con el Banco Nacional de Mascotas.
              </p>
            </div>
            <div class="card__actions">
              <a class="btn btn__card shadow repo" href="https://github.com/itmarck/buscapatas" target="_blank">
                <i class="icon icon-github"></i>
              </a>
              <a class="btn btn__card shadow video" href="https://youtu.be/1n8h63egfsU" target="_blank">
                <i class="icon icon-play"></i>
              </a>
            </div>
          </div>
          <div class="card shadow">
            <div class="card__logo">
              <div class="logo__container circle shadow">
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_128_2)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M47.3707 18.5372C47.3407 18.495 47.3768 18.495 47.2024 18.3688C47.1241 18.3087 46.9918 18.2365 46.8656 18.1704L39.3419 14.3394C37.7841 13.6056 37.4234 13.2209 36.2085 13.2689C34.1998 16.0714 37.7361 17.2262 40.1719 18.4232C41.2845 18.9765 42.5114 19.4335 43.618 20.017C45.6748 21.1116 44.2615 23.415 44.2014 23.4511C43.1609 23.5955 40.9597 22.3144 40.0936 21.8512C39.3058 21.4302 38.5901 21.2739 38.0247 21.9415C37.6458 22.3926 37.2308 23.445 37.5375 24.2509C37.718 24.732 47.5331 30.2169 49.4576 32.0934C49.9208 32.5505 50.4138 33.2782 50.7867 33.5729C51.6949 33.248 52.4767 31.0771 52.7292 29.7478C53.3787 26.4099 52.5669 26.6926 51.9593 25.4055C51.2076 23.8117 52.3443 22.1759 51.0332 20.8587C50.4258 20.2453 48.4411 18.8801 47.3706 18.5373L47.3707 18.5372Z"
                      fill="#FF005E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M37.1526 27.6247L33.6464 25.6281C32.0826 24.7861 31.0483 23.9621 30.0259 25.8507C29.0816 27.5948 30.525 28.3044 31.6498 29.0261C32.6722 29.6756 34.1817 30.5657 35.3725 31.0469C35.4688 31.2574 35.6191 31.2874 35.9379 31.4558C38.4577 32.803 43.7984 35.6596 45.7529 37.1933C46.228 37.5601 46.565 38.0654 47.1423 38.2278C48.2068 37.9692 49.6742 35.5575 48.4714 34.4749C46.7874 32.9654 38.8368 28.1119 37.1526 27.6247V27.6247Z"
                      fill="#FF005E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.0734 49.799C33.5623 49.0832 30.2965 47.8384 29.3222 47.4294C28.1674 46.9362 24.7153 44.9877 24.5409 47.1528C24.4387 48.3435 28.023 49.384 29.0094 49.7329C29.7973 50.0156 30.8497 50.5267 31.5414 50.7131C32.2631 50.9115 33.6282 50.4907 34.0733 49.799H34.0734Z"
                      fill="#FF005E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M51.0214 15.7466C50.9192 15.1693 48.9045 14.0205 48.4353 13.9785C48.0743 14.8686 48.5135 15.9331 48.8442 16.769C48.9104 16.8111 49.0848 17.0337 49.2352 17.184C49.9148 17.8395 51.1597 18.3507 52.2362 19.7941C52.5429 20.197 52.6812 20.8826 53 21.2195C52.7835 20.5158 52.6332 19.2169 52.3926 18.2486C52.1581 17.2984 51.9115 16.1918 51.0214 15.7468V15.7466Z"
                      fill="#FF005E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.9547 44.0434C22.2013 44.1757 22.2735 44.2118 22.502 44.3321C24.5167 45.4448 25.1964 44.3382 25.3888 43.5503C25.6536 42.4558 24.3063 42.143 23.4102 41.5897C21.7383 40.7357 20.0423 39.6351 18.5027 38.6549C16.6503 37.476 14.0462 35.0103 12.9577 35.5275C12.3382 35.8221 11.5925 37.2236 13.084 38.4744C15.9107 40.844 19.2123 42.113 21.9549 44.0435L21.9547 44.0434Z"
                      fill="#FF005E"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.3857 51.5371C27.3978 51.6814 27.44 51.3205 27.2775 51.6213C27.0849 51.9823 27.097 51.3987 27.2474 51.8018C28.0353 51.7838 30.0921 51.6755 30.5793 51.3567C29.8455 50.9117 28.793 50.6409 27.903 50.3884C26.8804 50.0937 25.6897 49.5284 25.2928 50.7974C25.7138 51.1884 26.5799 51.3507 27.3857 51.5372V51.5371Z"
                      fill="#FF005E"
                    />
                    <path
                      class="fillMode"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.4069 12.3487C25.0101 12.6073 24.7213 13.1967 24.7333 13.696C24.7633 14.923 27.7705 16.7211 28.1794 16.7332C28.5043 17.2744 31.4873 18.9824 31.8841 19.0366C33.2914 19.2292 34.38 16.9316 32.678 15.6808L29.0334 13.4495C27.584 12.5233 26.0684 10.8754 25.4069 12.3489V12.3487Z"
                    />
                    <path
                      class="fillMode"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.4317 45.7455L10.8166 45.5471C11.2256 45.6132 13.3546 46.9725 14.0162 47.3393C15.1769 47.9888 16.7766 48.9632 18.154 49.2217C18.3163 49.2518 18.575 49.2037 18.7313 49.0533L18.9899 48.7285C19.8981 48.939 20.8422 49.3239 21.7744 49.6728C22.7066 50.0216 24.1259 50.7133 24.2101 49.2338C24.0597 48.7347 19.6934 47.1229 18.623 46.3711C14.0583 44.1159 16.0248 44.2482 15.7423 42.8407C15.5799 42.0468 13.1743 40.6937 12.3082 40.0803C9.63794 38.1919 7.34039 36.0989 5.2055 33.609C4.41161 32.6828 3.45538 31.4318 2.71571 30.2291C1.96984 29.0203 1.01362 26.7771 0.484463 26.5966C-1.10331 27.9378 1.66933 32.3763 2.28275 33.2964C2.59551 33.7596 2.95644 34.1865 3.30513 34.6617C3.65397 35.1308 4.03891 35.4857 4.37567 35.9668C4.82072 36.5863 6.33026 37.9093 5.64465 39.1543C4.14115 38.7032 2.69774 35.4556 1.75948 35.1308C1.6272 36.2072 1.95203 36.1953 2.17448 36.9831C1.83167 37.35 1.80162 36.7125 1.88573 37.4824C1.97 37.7169 2.45702 38.4868 2.67358 38.7574C3.05247 39.2446 3.87641 39.9844 4.64025 40.9586C5.84913 42.4982 7.3105 44.4108 8.9765 45.6619C10.2275 46.6062 15.562 50.0342 17.1377 49.9259C16.5843 48.8074 10.9972 46.7264 10.432 45.7461H10.4318L10.4317 45.7455Z"
                    />
                    <path
                      class="fillMode"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.2879 29.2064C17.0353 29.0139 16.7768 28.8336 16.5903 28.6711C15.3753 27.6005 13.7515 26.2233 12.669 25.0325L11.7307 24.016C11.1954 23.4867 10.5219 22.6688 9.84833 21.7487C8.65154 20.1127 7.23818 17.8395 6.61268 15.8728C6.26987 14.7902 5.98717 13.2326 5.95712 12.4388C5.94503 12.1018 5.9692 11.7772 5.98129 11.4464L5.94519 10.7728C5.93915 10.7367 5.92118 10.6885 5.91514 10.6525C5.90306 10.6225 5.89097 10.5743 5.87301 10.5322C5.22349 10.412 4.48366 11.314 4.18904 11.8012C3.09448 13.5934 4.12893 15.7404 3.73191 17.2259C3.52744 17.9777 3.02229 18.8077 2.30647 18.9821C1.62087 17.5927 2.14398 15.6202 2.05987 13.9302C0.947183 14.3752 0.435997 17.1057 0.442039 19.4572C0.448081 21.0209 0.814894 22.5245 1.30811 23.9979C2.08403 26.3435 4.15883 29.4108 5.37963 30.9203C6.47419 32.2675 7.26808 33.1395 8.34467 34.2461C8.69351 34.607 9.51141 35.5032 10.3053 34.8416C11.466 33.8793 10.6963 32.2615 9.89031 31.3173L9.13855 30.3851C9.1085 30.349 7.96577 29.1581 7.84556 28.641C7.64713 27.7931 8.01394 27.1434 8.75361 26.7105C9.27084 26.6443 10.5999 28.4125 11.1051 28.9597C11.9951 29.9219 16.5119 33.4343 17.1854 33.5665C18.5507 33.8372 19.2783 32.3756 19.2241 31.1187C19.1459 30.9804 19.0738 30.8661 19.0136 30.7699C18.7488 30.3609 17.7265 29.531 17.2875 29.2061H17.2878L17.2879 29.2064Z"
                    />
                    <path
                      class="fillMode"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.455 51.549C23.4584 51.2122 20.9504 50.1477 20.7519 50.6347C20.782 50.9836 20.788 51.0015 21.8346 51.2842C23.2479 51.6692 24.6671 51.8676 26.1708 51.7593L25.4551 51.5488L25.455 51.549Z"
                    />
                    <path
                      class="fillMode"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M46.595 10.2978C46.9078 10.6527 47.5754 11.0074 48.1227 11.0316C48.1166 9.95501 46.9378 8.37932 45.6629 7.92219C45.2419 7.51325 40.4126 5.50444 39.6608 5.49855L29.1902 1.19839C29.4247 2.82831 30.4953 3.21913 31.8846 3.89265C32.492 4.18744 33.1536 4.45806 33.5866 4.84284C33.9896 5.20377 34.4647 6.02771 34.2602 6.55686C33.1356 7.13419 30.3872 4.09713 29.3346 4.7406C28.4925 6.38244 30.0502 7.24851 31.0427 7.80787C31.9028 8.30109 33.5686 9.31154 34.5309 9.61221C35.018 10.1054 42.205 13.347 43.7507 14.1529C44.4844 14.5379 46.2705 15.7286 47.0284 15.3737C47.3412 14.7121 47.0164 13.6176 46.6796 13.0584C46.2886 12.4147 45.5669 12.1262 44.8393 11.7834C43.1312 10.9774 42.5298 10.6106 41.9826 8.53578C43.4741 8.47567 45.5671 10.2377 46.5955 10.298L46.5953 10.2978H46.595Z"
                    />
                    <path
                      class="fillMode"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M30.5311 42.3173C30.9279 43.8569 27.6684 43.893 31.5534 45.7814C34.6687 47.291 34.0674 46.7497 36.9302 48.5359C37.8624 49.1133 39.4141 47.7541 39.823 46.9963C39.5585 46.4551 39.1495 46.4249 38.8787 45.8776C39.2156 45.1379 39.7748 44.6086 40.3643 44.2838C41.3807 43.7305 41.5913 44.2658 42.1986 44.6567L42.6618 45.9557C43.4317 45.6068 43.8586 45.1438 44.4059 44.5423C44.8269 44.0733 45.6629 43.5921 44.9292 42.642C43.6842 41.0181 37.9106 38.1974 35.6132 36.8082C33.5804 35.5812 31.6558 34.162 30.4229 35.0281C30.014 35.3168 29.3945 36.2851 28.9735 36.5618C27.4218 37.5902 23.675 32.4842 21.8287 34.1682C20.0304 35.8161 21.3955 36.7965 22.7248 37.6684C23.8675 38.4202 30.3748 41.722 30.5312 42.3174L30.5311 42.3173Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_128_2">
                      <rect width="53" height="53" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="card__text">
              <h2>Covid Tracker</h2>
              <p>
                App que muestra datos actuales del covid-19 a nivel global, y que
                permite descargar estos resultados en una imagen para
                posteriormente ser compartida.
              </p>
            </div>
            <div class="card__actions">
              <a
                class="btn btn__card shadow web"
                href="https://fabcov.netlify.app/"
                target="_blank"
                >Visitar</a
              >
              <a
                class="btn btn__card shadow repo"
                href="https://github.com/FabianXRL16/Covid-19"
                target="_blank"
              >
                <i class="icon icon-github"></i>
              </a>
              <a
                class="btn btn__card shadow video"
                href="https://youtu.be/HcubE_lId0w"
                target="_blank"
              >
                <i class="icon icon-play"></i>
              </a>
            </div>
          </div>
          <div class="card shadow">
            <div class="card__logo">
              <div class="logo__container circle shadow">
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_138_2)">
                    <path
                      class="fillMode"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M26.5 0C41.1358 0 53 11.8643 53 26.5001C53 41.1357 41.1358 53.0002 26.5 53.0002C11.8645 53.0002 0 41.1359 0 26.5001C0 11.8643 11.8642 0 26.5 0V0ZM26.5 2.26187C39.8862 2.26187 50.7381 13.1136 50.7381 26.5001C50.7381 39.8864 39.8865 50.7381 26.5 50.7381C13.1138 50.7381 2.26212 39.8864 2.26212 26.5001C2.26212 13.1139 13.1138 2.26187 26.5 2.26187V2.26187Z"
                    />
                    <path
                      class="fillMode"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.2649 10.4745C17.1798 10.6693 16.5261 11.2395 16.0809 12.0324C15.6636 12.8114 15.8025 14.5085 15.8025 15.5382C15.8025 18.0422 15.8025 20.5599 15.8025 23.064C15.8025 28.086 15.8025 33.1217 15.8025 38.1435C15.8025 39.5902 15.6356 40.2995 16.345 41.3431C16.9292 42.1917 17.8333 42.5811 18.9046 42.5811C19.5584 42.5811 19.8784 42.4282 20.3793 42.1638C21.353 41.6213 22.9529 40.6475 23.9266 40.0633C24.6916 39.6044 25.5125 39.1312 26.2775 38.6723L41.663 29.5883C42.9288 28.851 44.0418 28.2252 43.9305 26.2078C43.9029 25.6653 43.6661 25.2061 43.4436 24.8307C43.2212 24.469 42.8316 24.135 42.4559 23.8985L23.5231 12.7278C22.7161 12.241 21.9788 11.8237 21.1445 11.3228C20.3516 10.8359 19.5447 10.2378 18.2649 10.4743V10.4745Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_138_2">
                      <rect width="53" height="53" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="card__text">
              <h2>Music Player</h2>
              <p>
                Es un mini-reproductor de música donde pongo a prueba mis
                habilidades de UI; adaptable a las distintas plataformas como
                Desktop, Mobile y Tablet.
              </p>
            </div>
            <div class="card__actions">
              <a
                class="btn btn__card shadow web"
                href="https://fabmusic.netlify.app/"
                target="_blank"
                >Visitar</a
              >
              <a
                class="btn btn__card shadow repo"
                href="https://github.com/FabianXRL16/FabMusic"
                target="_blank"
              >
                <i class="icon icon-github"></i>
              </a>
              <a
                class="btn btn__card shadow video"
                href="https://youtu.be/zgWhGWrEz0E"
                target="_blank"
              >
                <i class="icon icon-play"></i>
              </a>
            </div>
          </div>
          <div class="card shadow">
            <div class="card__logo">
              <div class="logo__container circle shadow">
                <svg
                  width="53"
                  height="42"
                  viewBox="0 0 53 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.665 14.8974H33.9145C35.3973 14.8974 36.5999 16.1067 36.5999 17.5982V35.9521C36.5999 37.4433 35.3975 38.6526 33.9145 38.6526H15.665C14.1822 38.6526 12.9796 37.4433 12.9796 35.9518V17.5982C12.9796 16.1069 14.182 14.8974 15.665 14.8974Z"
                    fill="#ACBCD1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.9134 2.15384H51.4502C52.3059 2.15384 53 2.85185 53 3.71247V14.3094C53 15.17 52.3059 15.8678 51.4502 15.8678H40.9134C40.0577 15.8678 39.3639 15.17 39.3639 14.3094V3.71247C39.3639 2.85185 40.0577 2.15384 40.9134 2.15384Z"
                    fill="#ACBCD1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.14572 13.821H8.93163C9.56438 13.821 10.0776 14.3369 10.0776 14.9733V22.8036C10.0776 23.44 9.56464 23.9559 8.93189 23.9559H1.14598C0.513232 23.9559 0 23.4397 0 22.8034V14.973C0 14.3367 0.512973 13.8205 1.14598 13.8205L1.14572 13.821Z"
                    fill="#ACBCD1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.4074 2.15384H27.6771C28.105 2.15384 28.4519 2.50272 28.4519 2.93302V8.23278C28.4519 8.66309 28.105 9.01197 27.6771 9.01197H22.4074C21.9796 9.01197 21.6327 8.66309 21.6327 8.23278V2.93302C21.6327 2.50272 21.9796 2.15384 22.4074 2.15384V2.15384Z"
                    fill="#ACBCD1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.71841 3.05127H6.48901C6.79555 3.05127 7.04415 3.30128 7.04415 3.60958V7.4017C7.04415 7.70999 6.79555 7.96 6.48901 7.96H2.71841C2.41187 7.96 2.16327 7.70999 2.16327 7.4017V3.60958C2.16327 3.30128 2.41187 3.05127 2.71841 3.05127V3.05127Z"
                    fill="#ACBCD1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.141 23.3607H45.4107C45.8386 23.3607 46.1854 23.7096 46.1854 24.1399V29.4396C46.1854 29.8699 45.8386 30.2188 45.4107 30.2188H40.141C39.7131 30.2188 39.3662 29.8699 39.3662 29.4396V24.1399C39.3662 23.7096 39.7131 23.3607 40.141 23.3607Z"
                    fill="#ACBCD1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.674 32.1682H52.4446C52.7511 32.1682 52.9997 32.4182 52.9997 32.7265V36.5186C52.9997 36.8269 52.7511 37.0769 52.4446 37.0769H48.674C48.3675 37.0769 48.1189 36.8269 48.1189 36.5186V32.7265C48.1189 32.4182 48.3675 32.1682 48.674 32.1682Z"
                    fill="#ACBCD1"
                  />
                </svg>
              </div>
            </div>
            <div class="card__text">
              <h2>Mental Game</h2>
              <p>
                Juego cuyo propósito es entrenar la memoria visual y potenciar las
                habilidades cognitivas, apto para todas las edades.
              </p>
            </div>
            <div class="card__actions">
              <a
                class="btn btn__card shadow web"
                href="https://fab-memory.netlify.app/"
                target="_blank"
                >Visitar</a
              >
              <a
                class="btn btn__card shadow repo"
                href="https://github.com/FabianXRL16/FabMemory"
                target="_blank"
              >
                <i class="icon icon-github"></i>
              </a>
              <a
                class="btn btn__card shadow video"
                href="https://youtu.be/CLZj1TENxoM"
                target="_blank"
              >
                <i class="icon icon-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="actions__carrusel">
          <button
            id="left"
            class="btn btn__carrusel"
            @click="moveRojects(true)"
          ></button>
          <button
            id="right"
            class="btn btn__carrusel"
            @click="moveRojects(false)"
          ></button>
        </div>
        <button class="btn btnMoreProjects shadow" @click="moreProjects">Mas Proyectos</button>
      </div>
    </div>
  </section>
</template>

<script>
import titleCustom from '../components/custom/Title.vue'
export default {
  name: 'ExperiencePage',
  components: {
    titleCustom,
  },
  methods: {
    moveRojects(direction) {
      const $left = document.querySelector('#left')
      const $right = document.querySelector('#right')
      const $slider = document.getElementById('content__carrusel')

      if (direction) {
        $left.style.width = '30px'
        $right.style.width = '10px'
        $left.style.transition = '.3s'
        $right.style.transition = '.3s'

        $slider.style.transition = '.7s'
        $slider.style.transform = 'translateX(0px)'
      } else {
        $left.style.width = '10px'
        $right.style.width = '30px'
        $left.style.transition = '.3s'
        $right.style.transition = '.3s'

        $slider.style.transition = '.7s'
        $slider.style.transform = 'translateX(-505px)'
      }
    },
    moreProjects() {
      const $modal = document.querySelector('.modal__container')
      $modal.style.transform = 'scale(1)'
      $modal.style.transition = '.5s'
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
.container__experience {
  display: grid;
  grid-template-rows: 70px 1fr 50px;
  gap: 20px;
  max-width: 420px;
  width: 100%;
  max-height: 550px;
  height: 100%;
}
.container__carrusel {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: scroll;
  position: relative;
}
.content__carrusel {
  width: 1268px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  box-sizing: border-box;
  padding: 0 10px;
}
.card {
  width: 228px;
  height: calc(100% - 40px);
  max-height: 350px;
  background-color: var(--bg-5);
  border-radius: 15px;
  display: grid;
  grid-template-rows: 1fr 1.1fr 60px;
}
.card__logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo__container {
  width: 80px;
  height: 80px;
  margin-top: 10px;
}
.fillMode {
  fill: var(--bg-3)
}
.card__text {
  text-align: center;
  padding: 0 30px 0;
  color: var(--bg-3);
}
.card__text h2 {
  font-weight: 400;
  font-size: 18px;
}
.card__text p {
  font-size: 10px;
  font-weight: 200;
}
.card__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 15px;
}
a {
  height: 25px;
}
.btn__card {
  width: 100%;
  color: #fff;
  background-color: #3f4b59;
  font-size: 14px;
  border-radius: 5px;
  z-index: 1;
  position: relative;
  display: grid;
  place-content: center;
  text-decoration: none;
}
.card__actions .web {
  width: 80px;
  font-size: 12px;
}
.card__actions .repo,
.card__actions .video {
  width: 25px;
}
.btn__card:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgb(255, 255, 255),
    0px 0px 5px 0px rgb(255, 255, 255), 7px 7px 20px 0px rgba(0, 0, 0, 0),
    4px 4px 5px 0px rgba(0, 0, 0, 0);
  transition: all 0.3s ease;
}
.btn__card:hover:after {
  top: 0;
  height: 100%;
}
.btn__card:active {
  top: 2px;
}
.actions__carrusel {
  display: none;
}
.btn__carrusel {
  width: 30px;
  height: 10px;
  border-radius: 5px;
  background-color: var(--bg-1);
  padding: 0px;
}
.actions__carrusel .btn__carrusel:nth-child(2) {
  width: 10px;
}
.btnMoreProjects {
  color: var(--bg-3);
  font-style: oblique;
  font-size: 11px;
  border-radius: 15px;
  padding: 8px 20px;
  position: relative;
  font-weight: 200;
  overflow: hidden;
}
.btnMoreProjects:before {
  position: absolute;
  content: '';
  display: inline-block;
  top: -180px;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: var(--bg-4);
  animation: moreProjects 3s ease-in-out infinite;
}
@keyframes moreProjects {
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
.btnMoreProjects:hover {
  opacity: 0.7;
}
.btnMoreProjects:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
}
.actions {
  padding-top: 22px;
}
@media screen and (min-width: 870px) {
  section {
    display: flex;
    align-items: center;
  }
  .container__experience {
    grid-template-rows: 120px 360px 1fr;
    gap: 10px;
    max-height: 550px;
    max-width: 800px;
    width: 100%;
  }
  .container__carrusel {
    overflow-x: hidden;
    overflow-y: hidden;
    /* overflow: hidden; */
  }
  .container__carrusel::-webkit-scrollbar,
  .container__carrusel::-webkit-scrollbar-thumb {
    height: 0px;
  }

  .container__carrusel:-webkit-scrollbar-track {
    background: transparent;
  }
  .card {
    max-height: 320px;
    height: calc(100% - 20px);
  }
  .actions__carrusel {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .actions {
    padding-top: 0px;
  }
}
</style>

