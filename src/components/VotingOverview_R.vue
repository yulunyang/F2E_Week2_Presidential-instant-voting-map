<template>
  <div>
    <div v-if="!hasData">
      <div class="bg-gray-02 rounded-md w-full p-4 mb-5">
        <div class="flex items-center mb-2">
          <img src="@/assets/img/info.png" alt="" class="mr-2">
          <h5 class="text-xl font-semibold">小提示</h5>
        </div>
        <p>點擊選擇縣市、區、村里，可查看選舉結果</p>
        <div class="pt-12 pb-4">
          <img src="@/assets/img/selectTip.png" alt="" class="mx-auto">
        </div>
      </div>
      <div class="bg-gray-02 rounded-md w-full p-4">
        <div class="flex items-center mb-2">
          <img src="@/assets/img/info.png" alt="" class="mr-2">
          <h5 class="text-xl font-semibold">小提示</h5>
        </div>
        <p>點擊地圖查看縣市的選舉結果</p>
        <div class="pt-16 pb-4">
          <img src="@/assets/img/selectTip2.png" alt="" class="mx-auto">
        </div>
      </div>
    </div>
    <div v-if="hasData">
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
      <div class="bg-purple-01 border-2 border-purple-02 rounded-md w-full p-4 mb-5">
        <div class="flex items-center">
          <h5 class="text-xl font-semibold">仁福里</h5>
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
</template>
<script>
import { ref } from 'vue'
export default({
  setup () {
    const hasData = ref(true)

    return {
      hasData
      // isLoading,
      // timer,
      // setTimeOut
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
