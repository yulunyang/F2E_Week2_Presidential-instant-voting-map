<template>
  <header class="z-50">
    <div class="container mx-auto py-2 px-2 flex justify-end">
      <div class="flex justify-between xl:justify-end w-full items-center">
        <div class="flex items-center">
          <!-- <router-link :to="{ name: 'home' }" class="block px-3 cursor-pointer "><img src="@/assets/img/THEF2E.png" alt="" class="object-contain block"></router-link> -->
          <a href="https://2022.thef2e.com/news" target="_blank" class="py-2 px-3 hidden md:inline-block">關卡資訊</a>
          <a href="https://hackmd.io/ofJD4K7iSI65V19zxC7d0w" target="_blank" class="py-2 px-3 hidden md:inline-block">攻略資源</a>
          <a href="https://2022.thef2e.com/jobs" target="_blank" class="py-2 px-3 hidden md:inline-block">求職專區</a>
        </div>
        <div class="flex items-center">
          <a href="https://2022.thef2e.com/login" target="_blank" class="py-2 px-3 inline-flex items-center justify-center button mr-2 cursor-pointer">註冊報名</a>
          <a href="https://2022.thef2e.com/signup" target="_blank" class="py-2 px-3 inline-flex items-center justify-center button cursor-pointer">登入</a>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

export default({
  setup () {
  },
})
</script>

<style lang="scss" scoped>
header {
  background: #B82A06;
  .button {
    height: 35px;
    width: 104px;
    color: #B82A06;
    background: #FFFFFF;
    &:hover {
      box-shadow:
        inset 0.3em 0.3em 0 0 #3C0C00;
    }
    &:active {
      background: #3C0C00;
    }
    &:focus {
      color: #B82A06;
      background: #FFFFFF;
    }
    +.disabled {
      color: #FFFFFF;
      background: #DCDCDC;
    }
  }
}
</style>
