<template>
  <div class="search-bar flex">
    <div class="flex flex-wrap flex-1 md:flex-none pr-2 md:pr-0">
      <div class="relative w-full md:w-auto md:mr-2 mb-3 md:mb-0">
        <select class="block appearance-none w-full border border-gray-200 py-2 px-2 pr-12 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
          v-model="cityIndex" @change="emitData" :disabled="!cities.value">
          <option value="">請選擇</option>
          <option v-for="(item,index) in cities.value" :key="index" :value="index">{{ item.area_name }}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class="relative w-full md:w-auto md:mr-2">
        <select class="block appearance-none w-full border border-gray-200 py-2 px-2 pr-12 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
          v-model="districtsIndex" @change="emitData" :disabled="!areas.value">
          <option value="">請選擇</option>
          <option v-for="(item,index) in areas.value" :key="index" :value="index">{{ item.area_name }}</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
      <div class="relative w-1/2 md:w-auto md:mr-2">
        <select class="block appearance-none w-full border border-gray-200 py-2 px-2 pr-12 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
          v-model="deptsIndex" @change="emitData" :disabled="!depts.value">
          <option :value="''">請選擇</option>
          <option v-for="(item,index) in depts.value" :key="index" :value="index">{{ item.area_name }}</option>
        </select>
        <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <button class="refresh-btn text-white flex items-center justify-center px-3 py-0 rounded-md font-medium" @click="resetEmit">
      <span class="hidden md:block">清除</span>
      <img src="@/assets/img/rotate-cw.png" alt="" class="md:ml-2">
    </button>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
// import axios from 'axios'
// import zipCodeJson from './zipCode.json'
export default({
  props: {
    cities: Object,
    areas: Object,
    depts: Object
  },
  setup (props, ctx) {
    onMounted(() => {
    })

    const cityIndex = ref('')
    const districtsIndex = ref('')
    const deptsIndex = ref('')

    const emitData = () => {
      let obj = {
        city: '',
        district: '',
        dept: ''
      }
      if (cityIndex.value !== '') {
        obj.city = props.cities.value[cityIndex.value]
      }
      if (districtsIndex.value !== '') {
        obj.district = props.areas.value[districtsIndex.value]
      }
      if (deptsIndex.value !== '') {
        obj.dept = props.depts.value[deptsIndex.value]
      }

      ctx.emit('emitData', obj)
    }

    const resetEmit = () => {
      cityIndex.value = ''
      districtsIndex.value = ''
      deptsIndex.value = ''

      ctx.emit('resetEmit')
    }

    return {
      cityIndex,
      districtsIndex,
      deptsIndex,
      emitData,
      resetEmit
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
