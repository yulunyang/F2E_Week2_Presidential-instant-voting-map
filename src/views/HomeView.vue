<template>
  <div class="main container mx-auto py-3 md:py-6 px-2">
    <div class="side-bar flex mb-5 px-4 md:px-0">
      <a class="inline-block p-2 md:text-xl cursor-pointer w-1/2 md:w-auto text-center" :class="{ 'active-bar': isPresent, 'text-gray-01': !isPresent }" @click="isPresent = true">第15任 總統副總統大選</a>
      <!-- <a class="inline-block p-2 md:text-xl cursor-pointer w-1/2 md:w-auto text-center" :class="{ 'active-bar': !isPresent, 'text-gray-01': isPresent }" @click="isPresent = false">第10任 立法委員選舉</a> -->
    </div>
    <!-- search-bar -->
    <SearchBar v-on:emitData="emitData" v-on:resetEmit="resetEmit" :setCities="setCities" :setAreas="setAreas" :setDepts="setDepts" />
    <!-- content -->
    <div class="flex flex-wrap mt-4 md:mt-6 w-full">
      <div class="w-full lg:w-3/12 xl:w-1/5 mb-4 md:mb-0">
        <VotingOverview_L :setElectionOverview="setElectionOverview" :setNationTickets="setNationTickets" :setCityTickets="setCityTickets" />
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/5 flex justify-center px-4 lg:px-20 xl:px-36">
        <TaiwanMap />
      </div>
      <div class="w-full lg:w-3/12 xl:w-1/5">
        <VotingOverview_R :cityData="cityData"  />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import VotingOverview_L from '@/components/VotingOverview_L.vue'
import VotingOverview_R from '@/components/VotingOverview_R.vue'
import TaiwanMap from '@/components/TaiwanMap.vue'
import SearchBar from '@/components/modules/searchBar.vue'
import axios from 'axios'
import area_themesJson from '@/components/data/area_themes.json'
export default {
  components: {
    VotingOverview_L,
    VotingOverview_R,
    SearchBar,
    TaiwanMap,
  },
  setup () {
    const baseURL = ref('https://db.cec.gov.tw/static/elections/data')
    const area_themes = reactive(area_themesJson)
    const setCities = reactive({})
    const setAreas = reactive({})
    const setDepts = reactive({})
    const setSelectedCityId = reactive({})
    const setElectionOverview = reactive({})
    const setCityTickets = reactive({})
    const setNationTickets = reactive({})
    const selectedThemeId = ref(area_themes[0].theme_items[0].theme_id)
    const selectedCityId = ref(null)
    const selectedAreaId = ref(null)

    const isPresent = ref(true)
    const cityData = reactive({
      city: '',
      district: ''
    })

    onMounted(() => {
      getData()
      getData2()
    })

    const emitData = (val) => {
      console.log(val)
      selectedCityId.value = `${val.city.prv_code}_${val.city.city_code}_${val.city.area_code}_${val.city.dept_code}_${val.city.li_code}`
      selectedAreaId.value = `${val.district.prv_code}_${val.district.city_code}_${val.district.area_code}_${val.district.dept_code}_${val.district.li_code}`
      getData3()
      getData4()
    }
    const resetEmit = () => {
      selectedCityId.value = ''
      selectedAreaId.value = ''
    }

    const resetSelectedIds = () => {
      // setSelectedCityId('')
      // setSelectedAreaId('')
      // setSelectedDeptId('')
    };

    const getLocationCode = () => {
      // return `${item?.prv_code}_${item?.city_code}_${item?.area_code}_${item?.dept_code}_${item?.li_code}`;
      return `63_000_00_000_0000`;
    }

    const getData = () => {
      // 縣市行政區
      axios.get(`${baseURL.value}/areas/ELC/P0/00/${selectedThemeId.value}/C/00_000_00_000_0000.json`)
      .then(response =>{
        setCities.value = response.data['00_000_00_000_0000']
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      })

      // 選舉概況表
      axios.get(`${baseURL.value}/profiles/ELC/P0/00/${selectedThemeId.value}/N/00_000_00_000_0000.json`)
      .then(response =>{
        setElectionOverview.value = response.data['00_000_00_000_0000'][0]
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
        setNationTickets.value = response.data['00_000_00_000_0000']
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      });

      axios.get(`${baseURL.value}/tickets/ELC/P0/00/${selectedThemeId.value}/C/00_000_00_000_0000.json`)
      .then(response =>{
        setCityTickets.value = response.data['00_000_00_000_0000']
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
        // console.log(response.data)
        setAreas.value = response.data[selectedCityId.value]
        // const updatedAreas = response.data[selectedCityId.value]
        // const defaultArea = updatedAreas?.[0]
        // console.log(defaultArea)
        // setAreas(updatedAreas)
        // setSelectedAreaId(getLocationCode(defaultArea))
      }).catch(err => {
        console.log(err)
        // resetSelectedIds()
      });

      // 選舉概況表
      axios.get(`${baseURL.value}/tickets/ELC/P0/00/${selectedThemeId.value}/D/${selectedCityId.value}.json`)
      .then(response =>{
        console.log(response.data)
      }).catch(err => {
        console.log(err)
        // resetSelectedIds()
      })
    }

    const getData4 = () => {
      if (!selectedThemeId.value || !selectedCityId.value) return
      // 里、村
      axios.get(`${baseURL.value}/areas/ELC/P0/00/${selectedThemeId.value}/L/${selectedCityId.value}.json`)
      .then(response =>{
        console.log(response.data)
        setDepts.value = response.data[selectedAreaId.value]
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      })

      axios.get(`${baseURL.value}/tickets/ELC/P0/00/${selectedThemeId.value}/L/${selectedCityId.value}.json`)
      .then(response =>{
        console.log(response.data)
        // setDeptTickets(res.data[selectedAreaId])
      }).catch(err => {
        console.log(err)
        resetSelectedIds()
      })
    }

    return {
      baseURL,
      area_themes,
      selectedThemeId,
      isPresent,
      emitData,
      cityData,
      getData,
      getData2,
      getData3,
      getData4,
      setCities,
      setAreas,
      setDepts,
      setCityTickets,
      setElectionOverview,
      setNationTickets,
      resetSelectedIds,
      selectedCityId,
      setSelectedCityId,
      getLocationCode,
      resetEmit
    }
  }
}
</script>

<style lang="scss">
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
