<template>
  <div id="map" class="w-full">
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 700" width="510" height="700">
      <path id="龜山島" v-tooltip="'龜山島'" class="s0" d="m510 81.1c0 5.1-4.1 9.2-9 9.2h-11.3c-4.9 0-9-4.1-9-9.2 0-5 4.1-9.1 9-9.1h11.3c4.9 0 9 4.1 9 9.1z"/>
      <path id="綠島" v-tooltip="'綠島'" class="s1" d="m420.9 522.9c0 4.3-2.8 7.8-6.3 7.8h-3.2c-3.5 0-6.3-3.5-6.3-7.8v-13.6c0-4.3 2.8-7.8 6.3-7.8h3.2c3.5 0 6.3 3.5 6.3 7.8z"/>
      <path id="蘭嶼" v-tooltip="'蘭嶼'" class="s1" d="m371.1 622.8c-1.2 2.4-4.2 3.5-6.7 2.4l-14.9-6.7c-2.6-1.1-3.7-4-2.6-6.4l4.3-8.9c1.2-2.5 4.2-3.6 6.7-2.5l14.9 6.7c2.5 1.1 3.7 4.1 2.5 6.5z"/>
      <path id="宜蘭縣" v-tooltip="'guishan_island'" class="s0" d="m374.7 189c-3.1 0-7.8-1.2-10.3-2.7l-3.4-2c-2.6-1.6-4.7-5.2-4.7-8.3v-22.9c0-3.1 2-7.1 4.3-8.9l26.1-21c2.3-1.8 6.2-4.9 8.5-6.9l45-36c2.3-1.9 4.3-1 4.4 2.1l0.7 54.4c0 3-0.6 7.9-1.5 10.8l-11 36.2c-0.9 2.9-4.1 5.3-7.2 5.3h-50.9z"/>
      <path id="花蓮縣" v-tooltip="'guishan_island'" class="s1" d="m297.5 417.9c-2.6-1.6-4.7-5.5-4.7-8.4v-24.2c0-3 2-7 4.4-8.9l21.9-17.1c2.4-1.8 5.1-5.7 5.9-8.7l44.2-148.9c0.9-2.8 4.1-5.3 7.1-5.3h47.8c3.1 0 4.8 2.5 3.9 5.3l-75.6 245.4c-0.9 2.9-3.7 4-6.3 2.3z"/>
      <path id="台東縣" v-tooltip="'guishan_island'" class="s1" d="m250.3 518.8c0-3.1 1-7.8 2.3-10.6l36.8-82c1.2-2.8 4.3-3.6 6.8-2l47.8 31c2.6 1.7 3.3 5.1 1.6 7.6l-92.4 138.3c-1.6 2.5-3.1 2.1-3.1-0.9v-81.4z"/>
      <path id="新北市" v-tooltip="'guishan_island'" fill-rule="evenodd" class="s0" d="m323.5 43.4c-2.1-2.2-1.8-5.5 0.8-7.2l50.1-35.1c2.5-1.7 6.4-1.4 8.6 0.7l20.8 19.4c2.2 2.1 3.7 6.2 3.4 9.3l-1.1 9.3c-0.3 3 1.8 5.9 4.9 6.5l23.2 3.7c2.9 0.5 5.7-1.5 6.1-4.6l1.1-8c0.5-3 3.1-5.1 5.9-4.7 2.8 0.5 6.5 2.9 8.1 5.6l6.2 9.9c1.5 2.6 0.9 6.3-1.5 8.1l-10 7.9c-2.5 1.9-6.3 5-8.7 6.9l-48 38.7c-2.3 1.8-6 1.6-8.1-0.6zm32.5-7.6c-2.3 1.9-2.6 5.4-0.7 7.7l28.2 33.5c2 2.3 5.4 2.6 7.7 0.6l15.5-13c2.3-2 2.7-5.5 0.7-7.8l-28.1-33.5c-2-2.3-5.4-2.6-7.7-0.6z"/>
      <path id="臺北市" v-tooltip="'guishan_island'" class="s0" d="m364.9 44.2c-2-2.4-1.7-5.9 0.6-7.8l5.3-4.6c2.3-2 5.7-1.7 7.6 0.7l19.3 23.4c1.9 2.3 1.6 5.9-0.7 7.8l-5.2 4.5c-2.3 2-5.8 1.7-7.6-0.6z"/>
      <path id="桃園市" v-tooltip="'guishan_island'" class="s0" d="m280.9 74.2c-2.2-2.1-2-5.3 0.5-7.1l28.2-20.8c2.5-1.8 6.3-1.5 8.4 0.8l62.4 66.3c2.2 2.2 1.9 5.5-0.5 7.5l-22.5 18.1c-2.3 1.9-6.1 1.8-8.3-0.4z"/>
      <path id="新竹縣" v-tooltip="'guishan_island'" class="s1" d="m278.2 139.6c-2.9-1-4.2-4-2.9-6.8l6.8-14.9c1.3-2.7 0.1-6-2.6-7.4l-15.5-7.9c-2.7-1.3-3.7-4.6-2.2-7.2l8.6-15c1.5-2.6 4.5-3.1 6.7-1l67.9 64.5c2.2 2.1 3.9 6.3 3.9 9.3v5c0 3.1-2.3 4.8-5.1 3.8z"/>
      <path id="新竹市" v-tooltip="'guishan_island'" class="s0" d="m248.4 129.4c-2.9-1-4-4-2.4-6.6l7.1-12.5c1.6-2.7 5.1-3.7 7.9-2.3l10.3 5.1c2.8 1.4 4 4.9 2.7 7.7l-4.6 9.8c-1.3 2.8-4.7 4.3-7.6 3.3z"/>
      <path id="馬祖" class="s1" v-tooltip="'guishan_island'" d="m173.3 53.7c0 2.7-2.2 4.9-4.9 4.9h-8.6c-2.7 0-4.8-2.2-4.8-4.9 0-2.7 2.1-4.9 4.8-4.9h8.6c2.7 0 4.9 2.2 4.9 4.9z"/>
      <path id="馬祖" class="s1" v-tooltip="'guishan_island'" d="m184.2 39c0 2.7-2.2 4.9-4.8 4.9h-11c-2.7 0-4.9-2.2-4.9-4.9v-1.2c0-2.7 2.2-4.9 4.9-4.9h11c2.6 0 4.8 2.2 4.8 4.9z"/>
      <path id="金門縣" v-tooltip="'guishan_island'" class="s1" d="m32.9 194c-2.6 0-4.8 1.7-4.8 3.9 0 2.2-2 4.9-4.4 6l-2.2 1c-2.5 1.1-4.4 0.4-4.4-1.4 0-1.8-2.2-3.4-4.9-3.4h-7.3c-2.7 0-4.9 2.2-4.9 4.9v19.5c0 2.7 2.2 4.9 4.9 4.9h7.3c2.7 0 4.9-2.2 4.9-4.9v-0.5c0-2.7 1.9-5.8 4.4-6.9l2.2-1c2.4-1.1 4.4 0.1 4.4 2.8v0.8c0 2.7 2.2 4.9 4.8 4.9h7.4c2.6 0 4.8-2.2 4.8-4.9v-20.7c0-2.7-2.2-4.9-4.8-4.9h-7.4z"/>
      <path id="澎湖群島" v-tooltip="'guishan_island'" class="s0" d="m53.3 445.3c1.1 2.4 0.1 5.4-2.4 6.5l-18.8 8.9c-2.4 1.1-5.3 0.1-6.4-2.3l-3.7-7.7c-1.1-2.5-0.1-5.4 2.3-6.5l18.8-8.9c2.5-1.1 5.4-0.1 6.5 2.3z"/>
      <path id="澎湖群島" v-tooltip="'guishan_island'" class="s0" d="m14.6 444.7c-1.1 2.4-4 3.5-6.5 2.4l-0.4-0.1c-2.4-1.1-3.5-4-2.4-6.4l5.1-11.2c1.1-2.4 4.1-3.5 6.5-2.4l0.4 0.1c2.4 1.1 3.5 4.1 2.4 6.5z"/>
      <path id="澎湖群島" v-tooltip="'guishan_island'" class="s0" d="m39.8 425.1c1.5 2.2 1.1 5.1-0.9 6.3-2.1 1.2-4.8 0.5-6.3-1.8l-2.6-4.2c-1.5-2.2-1.1-5.1 0.9-6.3 2-1.2 4.8-0.5 6.3 1.8z"/>
      <path id="小琉球" v-tooltip="'guishan_island'" class="s0" d="m134.1 632.9c3.8 4 3.3 10.4-0.8 13.9l-9.3 8.1c-4 3.7-10.5 3.3-14.1-0.7-3.7-4-3.2-10.4 0.8-13.9l9.3-8.1c4-3.7 10.6-3.5 14.1 0.7z"/>
      <path id="苗栗縣" v-tooltip="'guishan_island'" class="s1" d="m218.1 179.5c-3 0-4.2-2.2-2.7-4.7l21.5-37.1c1.6-2.6 5.1-3.9 7.9-2.9l17.1 5.7c2.8 1 7.5 2.5 10.4 3.5l71.5 24.2c2.8 1 5.1 4 5.1 6.6 0 2.6-2.5 4.8-5.4 4.8h-125.4z"/>
      <path id="南投縣" v-tooltip="'guishan_island'" class="s0" d="m282.8 374.6c-3.1 0-7.7-1.1-10.4-2.6l-45.5-23.3c-2.6-1.4-4.8-5-4.8-8v-70.4c0-3.1 2.3-6.3 5.3-7.2l123.7-38.4c2.9-0.8 4.5 0.8 3.8 3.7l-35.2 118c-0.8 2.9-3.5 6.8-5.8 8.7l-20.7 16.1c-2.5 1.8-6.9 3.4-9.9 3.4z"/>
      <path id="臺中縣" v-tooltip="'guishan_island'" class="s0" d="m173 258.7c-3.1 0-4.3-2.3-2.7-4.8l35.8-62.5c1.6-2.6 5.2-4.7 8.3-4.7h132.5c3.1 0 7.8 1.2 10.3 2.7l2.9 1.7c2.7 1.6 4.1 5.1 3.2 8.1l-3.1 10.4c-0.9 2.9-4 6.1-6.8 7l-129.2 40.4c-2.9 0.9-7.8 1.7-10.9 1.7z"/>
      <path id="屏東縣" v-tooltip="'guishan_island'" class="s0" d="m226.7 699c-3.1 0-6.2-2.4-7.1-5.3l-14.2-50.4c-0.7-2.8-2.9-7.2-4.8-9.7l-28.9-37.3c-1.9-2.5-2.6-6.8-1.7-9.6l19.6-65.3c0.9-2.9 4.1-5.3 7.1-5.3h41.8c3.1 0 5.5 2.5 5.5 5.5v172c0 3.1-2.5 5.5-5.5 5.5h-11.8z"/>
      <path id="雲林縣" v-tooltip="'guishan_island'" class="s0" d="m123 345.2c-3.1 0-4.3-2.2-2.8-4.8l14.3-24.5c1.6-2.7 5.2-4.8 8.3-4.8h67.6c3.1 0 5.6 2.6 5.6 5.5v23.2c0 3.1-2.6 5.5-5.6 5.5h-87.4z"/>
      <path id="嘉義縣" v-tooltip="'guishan_island'" fill-rule="evenodd" class="s0" d="m123.3 408.7c-3.1 0-5.6-2.4-5.7-5.5l-1.7-46.3c-0.1-3 2.3-5.5 5.3-5.5h91.8c3 0 7.7 1.1 10.3 2.5l42.8 22.3c2.7 1.4 3.1 4.3 1 6.4l-22.2 22.3c-2.1 2.1-6.4 3.8-9.3 3.8zm23.7-17.9c0 3 2.5 5.5 5.5 5.5h39.7c3.1 0 5.5-2.6 5.5-5.5v-23.5c0-3.1-2.5-5.5-5.5-5.5h-39.7c-3.1 0-5.5 2.5-5.5 5.5z"/>
      <path id="臺南市" v-tooltip="'guishan_island'" class="s0" d="m126.3 486.8c-3.1 0-5.6-2.4-5.7-5.4l-2.2-59.9c-0.2-2.9 2.3-5.4 5.2-5.4h105.4c3 0 3.7 1.7 1.6 3.8l-63.8 63.1c-2.1 2.1-6.4 3.8-9.3 3.8z"/>
      <path id="高雄市" v-tooltip="'guishan_island'" class="s0" d="m125.3 537.2c-1.9-2.4-3.4-6.9-3.5-9.9l-1-27.5c-0.1-3 2.3-5.5 5.3-5.5h33.8c3.1 0 7.3-1.8 9.4-3.9l104.9-104.7c2.1-2 5.9-3.8 8.2-3.8 2.3 0 4.3 2.5 4.3 5.5v23.6c0 3.1-1 7.8-2.2 10.6l-37.5 83.3c-1.2 2.7-4.7 5-7.7 5h-47.9c-3.1 0-6.2 2.5-7 5.3l-19.8 65.5c-0.9 2.9-3.1 3.4-5 0.9z"/>
      <path id="嘉義市" v-tooltip="'guishan_island'" class="s0" d="m159.3 390.4c-3.1 0-5.6-2.6-5.6-5.7v-10.5c0-3.2 2.6-5.7 5.6-5.7h26.7c3 0 5.6 2.6 5.6 5.7v10.5c0 3.2-2.6 5.7-5.6 5.7z"/>
      <path id="彰化縣" v-tooltip="'guishan_island'" class="s0" d="m147.4 303.7c-3.1 0-4.3-2.2-2.8-4.7l16.7-28.4c1.5-2.6 5.1-4.6 8.2-4.6h41c3 0 5.5 2.5 5.5 5.4v27c0 3-2.6 5.4-5.5 5.4h-63.1z"/>
      <path id="基隆市" v-tooltip="'guishan_island'" class="s0" d="m418.4 41c-2.9-0.4-5.1-3.5-4.8-6.7l0.2-1.3c0.3-3.1 3-5.3 5.8-4.9l10.1 1.7c2.9 0.4 4.9 3.4 4.6 6.6l-0.2 1.4c-0.4 3.1-3.1 5.3-6 4.8z"/>
    </svg>
  </div>
</template>

<script>
import * as $ from 'jquery'
import { reactive, onMounted } from 'vue'
export default {
  name: 'TaiwanMap',
  props: {
    cityTicketsMap: Object,
    cities: Object
  },
  setup (props, ctx) {
    const filter = reactive([])

    onMounted(() => {
      $('path').on('click', (e) => {
        let tagname = e.currentTarget.id

        let index = props.cities.value.findIndex(x => x.area_name === tagname)

        if (index > -1) {
          ctx.emit('emitData', props.cities.value[index])
        }
      })
    })

    return {
      // place_data,
      filter
    }
  }
}
</script>

<style lang="scss">
  .s0 { fill: #84cb98 }
  .s1 { fill: #8894d8 }
  svg {
    width: 100%;
    height: auto;
    position: relative;
  }
  path {
    position: relative;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      content: ' ';
      background-size: 28px 28px;
      background-color: #84cb98;
      height: 30px;
      width: 30px;
    }
  }
</style>