<template>
  <div class="search-bar flex">
    <div class="flex flex-wrap flex-1 md:flex-none pr-2 md:pr-0">
      <div class="relative w-full md:w-auto md:mr-4 mb-3 md:mb-0">
        <select class="block appearance-none w-full border border-gray-200 py-2 px-2 pr-12 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
          >
          <option :value="null">請選擇</option>
          <option value="32">台北市</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class="relative w-1/2 md:w-auto md:mr-4">
        <select class="block appearance-none w-full border border-gray-200 py-2 px-2 pr-12 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
          >
          <option :value="null">請選擇</option>
          <option value="32">松山區</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class="relative w-1/2 md:w-auto md:mr-4">
        <select class="block appearance-none w-full border border-gray-200 py-2 px-2 pr-12 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
          >
          <option :value="null">請選擇</option>
          <option value="32">仁福里</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <button class="refresh-btn text-white flex items-center justify-center px-3 py-0 rounded-md font-medium">
      <span class="hidden md:block">清除</span>
      <img src="@/assets/img/rotate-cw.png" alt="" class="md:ml-2">
    </button>
  </div>
</template>
<script>

export default({
  setup () {
  },
})
</script>

<style lang="scss" scoped>
</style>
