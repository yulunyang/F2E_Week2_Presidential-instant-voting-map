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
        <VotingOverview_R :setElectionOverview="setElectionOverview.value"  :setCityTickets="setCityTickets.value" :setNationTickets="setNationTickets.value" />
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
    const selectedDeptId = ref(null)

    const isPresent = ref(true)

    onMounted(() => {
      getData()
      getData2()
    })

    const emitData = (val) => {
      console.log(val)
      selectedCityId.value = getLocationCode(val.city)
      selectedAreaId.value = getLocationCode(val.district)
      selectedDeptId.value = getLocationCode(val.dept)
      getData3()
      getData4()
    }

    const resetEmit = () => {
      resetSelectedIds()
    }

    const resetSelectedIds = () => {
      selectedCityId.value = ''
      selectedAreaId.value = ''
      selectedDeptId.value = ''
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

    const getLocationCode = (item) => {
      return `${item.prv_code}_${item.city_code}_${item.area_code}_${item.dept_code}_${item.li_code}`
    }

    const getCandidatePairs = (arr) => {
      if (arr) {
        let candidateNoList = [...new Set(arr.map((item) => item.cand_no))]
        return candidateNoList.map((candidateNo) => {
          const president = arr.find((item) => item.cand_no === candidateNo && item.is_vice !== 'Y')
          const vicePresident = arr.find((item) => item.cand_no === candidateNo && item.is_vice === 'Y')
          return {
            candidateNo,
            areaId: getLocationCode(president) || '',
            areaName: president?.area_name || '',
            presidentName: president?.cand_name || '',
            vicePresidentName: vicePresident?.cand_name || '',
            partyName: president?.party_name || '',
            partyCode: president?.party_code || 0,
            ticketNum: president?.ticket_num || 0,
            ticketPercent: president?.ticket_percent || 0,
          }
        })
      }
      return []

    }
    const nationCandidatePairs = setNationTickets ? getCandidatePairs(setNationTickets.value) : []
    // const cityCandidatePairs = getCandidatePairs(setCityTickets.value?.filter((item) => getLocationCode(item) === selectedCityId.value))
    // const areaCandidatePairs = getCandidatePairs(areaTickets.value?.filter((item) => getLocationCode(item) === selectedAreaId.value))
    // const deptCandidatePairs = getCandidatePairs(deptTickets.value?.filter((item) => getLocationCode(item) === selectedDeptId.value))
    return {
      baseURL,
      area_themes,
      selectedThemeId,
      isPresent,
      emitData,
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
      selectedDeptId,
      getLocationCode,
      resetEmit,
      getCandidatePairs,
      nationCandidatePairs,
      // cityCandidatePairs,
      // areaCandidatePairs,
      // deptCandidatePairs,
      // calculateNationTickets
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
