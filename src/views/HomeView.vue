<template>
  <div class="main container mx-auto py-3 md:py-6 px-2 max-w-8xl" id="HomeView">
    <div class="side-bar flex mb-5 px-4 md:px-0">
      <a class="inline-block p-2 md:text-xl cursor-pointer w-1/2 md:w-auto text-center" :class="{ 'active-bar': isPresent, 'text-gray-01': !isPresent }" @click="isPresent = true">第15任 總統副總統大選</a>
      <!-- <a class="inline-block p-2 md:text-xl cursor-pointer w-1/2 md:w-auto text-center" :class="{ 'active-bar': !isPresent, 'text-gray-01': isPresent }" @click="isPresent = false">第10任 立法委員選舉</a> -->
    </div>
    <!-- search-bar -->
    <div class="search-bar flex">
      <div class="flex flex-wrap flex-1 md:flex-none pr-2 md:pr-0">
        <div class="relative w-full md:w-auto md:mr-2 mb-3 md:mb-0">
          <select class="block appearance-none w-full border border-gray-200 py-2 px-2 pr-12 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
            v-model="selectedCityId" @change="selectChange" :disabled="!cities.value">
            <option value="">請選擇</option>
            <option v-for="(item,index) in cities.value" :key="index" :value="getLocationCode(item)">{{ item.area_name }}</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
        <div class="relative w-full md:w-auto md:mr-2">
          <select class="block appearance-none w-full border border-gray-200 py-2 px-2 pr-12 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
            v-model="selectedAreaId" @change="selectChange" :disabled="!areas.value">
            <option value="">請選擇</option>
            <option v-for="(item,index) in areas.value" :key="index" :value="getLocationCode(item)">{{ item.area_name }}</option>
          </select>
          <div class=" pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 md:px-2">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
        <div class="relative w-1/2 md:w-auto md:mr-2">
          <select class="block appearance-none w-full border border-gray-200 py-2 px-2 pr-12 rounded leading-tight focus:outline-none bg-white focus:border-gray-900" id="invoice"
            v-model="selectedDeptId" @change="selectChange" :disabled="!depts.value">
            <option :value="''">請選擇</option>
            <option v-for="(item,index) in depts.value" :key="index" :value="getLocationCode(item)">{{ item.area_name }}</option>
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

    <!-- content -->
    <div class="flex flex-wrap mt-4 md:mt-6 w-full">
      <div class="w-full lg:w-3/12 xl:w-1/5 mb-4 md:mb-0">
        <VotingOverview_L :electionOverview="electionOverview" :nationTickets="nationTickets" :cityTickets="cityTickets" />
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/5 flex justify-center px-4 lg:px-20 xl:px-36">
        <TaiwanMap :cities="cities" :cityTicketsMap="cityTicketsMap" v-on:emitData="emitData" />
      </div>
      <div class="w-full lg:w-3/12 xl:w-1/5">
        <VotingOverview_R :cityTickets="cityTickets" :areaTickets="areaTickets" :deptTickets="deptTickets" :selectedCityId="selectedCityId" :selectedAreaId="selectedAreaId" :selectedDeptId="selectedDeptId" />
      </div>
    </div>
  </div>
</template>

<script>
import { orderBy } from 'lodash'
import { ref, reactive, onMounted } from 'vue'
import VotingOverview_L from '@/components/VotingOverview_L.vue'
import VotingOverview_R from '@/components/VotingOverview_R.vue'
import TaiwanMap from '@/components/TaiwanMap.vue'
import axios from 'axios'
import area_themesJson from '@/components/data/area_themes.json'
import partyColorsJson from '@/components/data/party_colors.json'
export default {
  name: 'HomeView',
  components: {
    VotingOverview_L,
    VotingOverview_R,
    TaiwanMap,
  },
  setup () {
    const baseURL = ref('https://db.cec.gov.tw/static/elections/data')
    const area_themes = reactive(area_themesJson)
    const party_colors = reactive(partyColorsJson)
    const cities = reactive({})
    const areas = reactive({})
    const depts = reactive({})

    const electionOverview = reactive({})
    const cityTickets = reactive({})
    const nationTickets = reactive({})
    const areaTickets = reactive({})
    const deptTickets = reactive({})
    const selectedThemeId = ref(area_themes[0].theme_items[0].theme_id)
    const selectedCityId = ref('')
    const selectedAreaId = ref('')
    const selectedDeptId = ref('')
    const cityTicketsMap = reactive({})

    const isPresent = ref(true)

    onMounted(() => {
      getData()
      getData2()
      getData3()
      getData4()
    })

    const resetEmit = () => {
      resetSelectedIds()
    }

    const resetSelectedIds = () => {
      selectedCityId.value = ''
      selectedAreaId.value = ''
      selectedDeptId.value = ''

      cityTickets.value = []
      nationTickets.value = []
      deptTickets.value = []
      areaTickets.value = []

      selectChange()
    }

    const getData = () => {
      // 縣市行政區
      axios.get(`${baseURL.value}/areas/ELC/P0/00/${selectedThemeId.value}/C/00_000_00_000_0000.json`)
      .then(response =>{
        cities.value = response.data['00_000_00_000_0000']
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      })

      // 選舉概況表
      axios.get(`${baseURL.value}/profiles/ELC/P0/00/${selectedThemeId.value}/N/00_000_00_000_0000.json`)
      .then(response =>{
        electionOverview.value = response.data['00_000_00_000_0000'][0]
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      })
    }

    const getData2 = () => {
      // 年度，全國
      if (!selectedThemeId.value) return

      axios.get(`${baseURL.value}/tickets/ELC/P0/00/${selectedThemeId.value}/N/00_000_00_000_0000.json`)
      .then(response =>{
        nationTickets.value = response.data['00_000_00_000_0000']
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      })

      axios.get(`${baseURL.value}/tickets/ELC/P0/00/${selectedThemeId.value}/C/00_000_00_000_0000.json`)
      .then(response =>{
        cityTickets.value = response.data['00_000_00_000_0000']

        cityTicketsMap.value = getCityTicketsMap(cities.value, cityTickets.value)
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      })
    }

    const getData3 = () => {
      // 區、鄉、鎮
      if (!selectedThemeId.value || !selectedCityId.value) return

      axios.get(`${baseURL.value}/areas/ELC/P0/00/${selectedThemeId.value}/D/${selectedCityId.value}.json`)
      .then(response =>{
        let updatedAreas = response.data[selectedCityId.value]
        let defaultArea = updatedAreas?.[0]

        let areaAr = []
        for (let item of updatedAreas) {
          areaAr.push(getLocationCode(item))
        }
        if (!selectedAreaId.value || areaAr.indexOf(selectedAreaId.value) < 0) {
          selectedAreaId.value = getLocationCode(defaultArea)
        }

        areas.value = updatedAreas
      }).catch(() => {
        resetSelectedIds()
      });

      // 選舉概況表
      axios.get(`${baseURL.value}/tickets/ELC/P0/00/${selectedThemeId.value}/D/${selectedCityId.value}.json`)
      .then(response =>{
        areaTickets.value = response.data[selectedCityId.value]
      }).catch(() => {
        resetSelectedIds()
      })
    }

    const getData4 = () => {
      if (!selectedThemeId.value || !selectedCityId.value) return
      // 里、村
      axios.get(`${baseURL.value}/areas/ELC/P0/00/${selectedThemeId.value}/L/${selectedCityId.value}.json`)
      .then(response =>{

      let updatedDept = response.data[selectedAreaId.value]
      let defaultDept = updatedDept?.[0]
      let deptAr = []
        for (let item of updatedDept) {
          deptAr.push(getLocationCode(item))
        }
      if (!selectedDeptId.value || deptAr.indexOf(selectedDeptId.value) < 0) {
        selectedDeptId.value = getLocationCode(defaultDept)
      }

      depts.value = updatedDept
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      })

      axios.get(`${baseURL.value}/tickets/ELC/P0/00/${selectedThemeId.value}/L/${selectedCityId.value}.json`)
      .then(response =>{
        deptTickets.value = response.data[selectedAreaId.value]
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      })
    }

    const getLocationCode = (item) => {
      if (!item) {
        return ''
      }
      return `${item.prv_code}_${item.city_code}_${item.area_code}_${item.dept_code}_${item.li_code}`
    }
    const getCityTicketsMap = (cities, cityTickets) => {
      const cityTicketsMap = cities.map((city) => {
        const code = getLocationCode(city)
        const name = city.area_name;
        const tickets = cityTickets.filter((item) => item.area_name === name)
        const winnerParty = orderBy(tickets, ['ticket_num'], ['desc'])[0]
        const partyColor = party_colors.value?.find((item) => item.party_name === winnerParty?.party_name)?.color_code || 'b3b3b3'
        return {
          code,
          name,
          partyName: winnerParty?.party_name,
          partyColor,
        }
      })
      return cityTicketsMap
    }

    const emitData = (emitData) => {
      // console.log(emitData)
      selectedCityId.value = getLocationCode(emitData)
      selectChange()
    }

    const selectChange = () => {
      getData()
      getData2()
      getData3()
      getData4()
    }

    return {
      baseURL,
      area_themes,
      party_colors,

      isPresent,
      emitData,
      getData,
      getData2,
      getData3,
      getData4,
      cities,
      areas,
      depts,

      nationTickets,
      cityTickets,
      areaTickets,
      deptTickets,

      electionOverview,

      resetSelectedIds,

      selectedThemeId,
      selectedCityId,
      selectedAreaId,
      selectedDeptId,

      getLocationCode,
      getCityTicketsMap,
      resetEmit,
      cityTicketsMap,
      selectChange
    }
  }
}
</script>

<style lang="scss">
  #HomeView {
    max-width: 1440px;
  }
  .main {
    min-height: calc(100vh - 68px);
    margin-top: 68px;
    @media screen and (min-width: 1024px) {
      margin-top: 56px;
    }
    .active-bar {
      color: #000000;
      font-weight: 600;
      border-bottom: 4px solid #262E49;
    }
  }
</style>
