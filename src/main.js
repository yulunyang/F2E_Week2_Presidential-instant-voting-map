import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import '@/assets/main.scss'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from "gsap/all";
import AOS from 'aos'
import 'aos/dist/aos.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'

gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin)

export const app = createApp(App)
app.AOS = new AOS.init()

app.use(store).use(router).use(AOS).mount('#app')
