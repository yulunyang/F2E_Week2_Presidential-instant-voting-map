<template>
  <div class="bg-white rounded-md w-full p-2 px-4 md:p-4">
    <div class="flex">
      <h5 class="text-lg md:text-xl font-semibold">投票概況</h5>
      <div class="flex-1 flex justify-end md:hidden" @click="isShow = !isShow">
        <img src="@/assets/img/chevron-right.png" alt="" class="md:ml-2" v-if="!isShow">
        <img src="@/assets/img/chevron-down.png" alt="" class="md:ml-2" v-if="isShow">
      </div>
    </div>
    <div v-if="isShow" class="mt-6 lg:hidden">
      <div class="flex flex-wrap items-center mb-3">
        <div class="w-2/5 lg:1/2">
          <img src="@/assets/img/dount1.png" alt="" class="">
        </div>
        <div class="flex-1 lg:1/2 lg:px-3">
          <p class="text-xl font-semibold">74.9%</p>
          <p>投票率</p>
        </div>
        <div class="w-2/5 lg:w-full lg:py-3">
          <p>投票數 <span class="text-xs font-semibold ml-2">14,464,571 票</span></p>
          <p>無效票數 <span class="text-xs font-semibold ml-2">14,464,571 票</span></p>
          <p>有效票數 <span class="text-xs font-semibold ml-2">14,464,571 票</span></p>
        </div>
      </div>
      <div class="flex flex-wrap items-center">
        <div class="w-2/5 lg:1/2">
          <img src="@/assets/img/dount2.png" alt="" class="">
        </div>
        <div class="w-3/5 lg:w-full lg:py-3">
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
              <p class="bg-purple-02 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">3</p>
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
              <p class="bg-orange-01 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">3</p>
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
      </div>
    </div>
    <div class="mt-6 hidden lg:block">
      <div class="flex flex-wrap items-center mb-3">
        <div class="w-2/5 lg:1/2">
          <img src="@/assets/img/dount1.png" alt="" class="">
        </div>
        <div class="flex-1 lg:1/2 lg:px-3">
          <p class="text-xl font-semibold">74.9%</p>
          <p>投票率</p>
        </div>
        <div class="w-2/5 lg:w-full lg:py-3">
          <p>投票數 <span class="text-xs font-semibold ml-2">14,464,571 票</span></p>
          <p>無效票數 <span class="text-xs font-semibold ml-2">14,464,571 票</span></p>
          <p>有效票數 <span class="text-xs font-semibold ml-2">14,464,571 票</span></p>
        </div>
      </div>
      <div class="flex flex-wrap items-center">
        <div class="w-2/5 lg:1/2">
          <img src="@/assets/img/dount2.png" alt="" class="">
        </div>
        <div class="w-3/5 lg:w-full lg:py-3">
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
              <p class="bg-purple-02 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">3</p>
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
              <p class="bg-orange-01 rounded-full w-7 h-7 flex items-center justify-center text-white m-0">3</p>
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
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
// import Voting_chart1 from '@/components/modules/Voting_chart1.vue'
export default({
  props: {
    // isShow: Boolean
  },
  components: {
    // Voting_chart1
  },
  setup () {
    const isShow = ref(false)
    // const reative = cars([
    //     'BMW',
    //     'Mercedes',
    //     'Audi',
    //     'Volvo',
    //   ])

      return {
        isShow
        // cars
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
