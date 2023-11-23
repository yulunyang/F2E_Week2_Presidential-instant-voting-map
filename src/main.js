import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import '@/assets/main.scss'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from "gsap/all";
import $ from 'jquery'

window.jQuery = $
window.$ = $

gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin)

export const app = createApp(App)

app.use(store).use(router).mount('#app')
