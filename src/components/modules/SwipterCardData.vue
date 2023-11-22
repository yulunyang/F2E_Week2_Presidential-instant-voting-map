<template>
  <swiper
    :slidesPerView="'auto'"
    :slides-per-view="'auto'"
    :space-between="30"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-if="cityData.city">
      <div class="bg-green-01 border-2 border-green-02 rounded-md w-full p-4 mb-5">
        <div class="flex items-center">
          <h5 class="text-xl font-semibold">臺北市</h5>
        </div>
        <div class="flex items-start pt-3 pb-2">
          <div class="w-10">
            <p class="bg-green-02 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">3</p>
          </div>
          <div class="flex-1 border-r-2 border-green-02">
            <p class="font-semibold">民主進步黨</p>
            <p class="text-xs">蔡英文｜賴清德</p>
          </div>
          <div class="flex-1 flex justify-center">
            <div>
              <p class="font-semibold">53.7 %</p>
              <p class="text-xs">875,854 票</p>
            </div>
          </div>
        </div>
        <div class="flex items-start pt-3 pb-2">
          <div class="w-10">
            <p class="bg-purple-02 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">2</p>
          </div>
          <div class="flex-1 border-r-2 border-purple-02">
            <p class="font-semibold">中國國民黨</p>
            <p class="text-xs">韓國瑜｜張善政</p>
          </div>
          <div class="flex-1 flex justify-center">
            <div>
              <p class="font-semibold">42.0 %</p>
              <p class="text-xs">685,830 票</p>
            </div>
          </div>
        </div>
        <div class="flex items-start pt-3 pb-2">
          <div class="w-10">
            <p class="bg-orange-01 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">1</p>
          </div>
          <div class="flex-1 border-r-2 border-orange-01">
            <p class="font-semibold">親民黨</p>
            <p class="text-xs">宋楚瑜｜余湘</p>
          </div>
          <div class="flex-1 flex justify-center">
            <div>
              <p class="font-semibold">4.3 %</p>
              <p class="text-xs">70,769票</p>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide v-if="cityData.district">
      <div class="bg-green-01 border-2 border-green-02 rounded-md w-full p-4 mb-5">
        <div class="flex items-center">
          <h5 class="text-xl font-semibold">南港區</h5>
        </div>
        <div class="flex items-start pt-3 pb-2">
          <div class="w-10">
            <p class="bg-green-02 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">3</p>
          </div>
          <div class="flex-1 border-r-2 border-green-02">
            <p class="font-semibold">民主進步黨</p>
            <p class="text-xs">蔡英文｜賴清德</p>
          </div>
          <div class="flex-1 flex justify-center">
            <div>
              <p class="font-semibold">53.7 %</p>
              <p class="text-xs">875,854 票</p>
            </div>
          </div>
        </div>
        <div class="flex items-start pt-3 pb-2">
          <div class="w-10">
            <p class="bg-purple-02 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">2</p>
          </div>
          <div class="flex-1 border-r-2 border-purple-02">
            <p class="font-semibold">中國國民黨</p>
            <p class="text-xs">韓國瑜｜張善政</p>
          </div>
          <div class="flex-1 flex justify-center">
            <div>
              <p class="font-semibold">42.0 %</p>
              <p class="text-xs">685,830 票</p>
            </div>
          </div>
        </div>
        <div class="flex items-start pt-3 pb-2">
          <div class="w-10">
            <p class="bg-orange-01 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">1</p>
          </div>
          <div class="flex-1 border-r-2 border-orange-01">
            <p class="font-semibold">親民黨</p>
            <p class="text-xs">宋楚瑜｜余湘</p>
          </div>
          <div class="flex-1 flex justify-center">
            <div>
              <p class="font-semibold">4.3 %</p>
              <p class="text-xs">70,769票</p>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue'

  // Import Swiper styles
  import 'swiper/swiper-bundle.css'

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      cityData: Object
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change')
      };
      return {
        onSwiper,
        onSlideChange,
      }
    },
  };
</script>
<style lang="scss">
  .swiper-slide {
    width: 70%;
    height: 100%;
  }
  .swiper-container {
    height: 260px;
  }
</style>
