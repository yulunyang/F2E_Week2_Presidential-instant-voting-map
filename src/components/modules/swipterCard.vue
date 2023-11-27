<template>
  <swiper
    :direction="'horizontal'"
    :slidesPerView="1.2"
    :spaceBetween="20"
    :breakpoints="{
      '1024': {
        direction: 'vertical',
        slidesPerView: 2,
        spaceBetween: 20
      }
    }"
    >
    <swiper-slide>
      <div class="bg-gray-02 rounded-md w-full p-4 h-full">
        <div class="flex items-center mb-2">
          <img src="@/assets/img/info.png" alt="" class="mr-2">
          <h5 class="text-xl font-semibold">小提示</h5>
        </div>
        <p>點擊選擇縣市、區、村里，可查看選舉結果</p>
        <div class="pt-10">
          <img src="@/assets/img/selectTip.png" alt="" class="mx-auto block">
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-gray-02 rounded-md w-full p-4 h-full">
        <div class="flex items-center mb-2">
          <img src="@/assets/img/info.png" alt="" class="mr-2">
          <h5 class="text-xl font-semibold">小提示</h5>
        </div>
        <p>點擊地圖查看縣市的選舉結果</p>
        <div class="pt-10">
          <img src="@/assets/img/selectTip2.png" alt="" class="mx-auto block">
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/swiper-bundle.css'
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup () {
      const getDirection = (swiper) => {
        console.log(swiper);
      }
      const onSwiper = (swiper) => {
        console.log(swiper);
      }
      const onSlideChange = () => {
        console.log('slide change')
      }
      return {
        onSwiper,
        onSlideChange,
        getDirection
      }
    },
  };
</script>
<style lang="scss">
  .swiper-slide {
    height: 100% !important;
  }
</style>
