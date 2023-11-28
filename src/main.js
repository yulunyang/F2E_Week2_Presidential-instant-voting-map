import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import '@/assets/main.scss'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin } from "gsap/all";
import $ from 'jquery'

import Tooltip from "@programic/vue3-tooltip"
import '@programic/vue3-tooltip/dist/index.css'

const options = {
  position: 'right-center'
}


window.jQuery = $
window.$ = $

gsap.registerPlugin(gsap, ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin)

export const app = createApp(App)

app.use(store).use(router).use(Tooltip, options).mount('#app')
// app.prototype.XLSX = XLSX
