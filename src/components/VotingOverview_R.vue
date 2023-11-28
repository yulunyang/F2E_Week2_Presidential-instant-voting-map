<template>
  <swiper v-if="cityCandidatePairs && cityCandidatePairs.length > 0 || areaCandidatePairs && areaCandidatePairs.length > 0 || deptCandidatePairs && deptCandidatePairs.length > 0"
    :direction="'horizontal'"
    :slidesPerView="1.4"
    :spaceBetween="20"
    :breakpoints="{
      '1024': {
        direction: 'vertical',
        slidesPerView: 3,
        spaceBetween: 20
      }
    }"
  >
    <swiper-slide v-if="cityCandidatePairs && cityCandidatePairs.length > 0">
      <div class="bg-green-01 border-2 border-green-02 rounded-md w-full p-4">
        <div class="flex items-center" v-if="cityCandidatePairs">
          <h5 class="text-xl font-semibold">{{ cityCandidatePairs[0].areaName }}</h5>
        </div>
        <div class="flex items-start pt-3 pb-2" v-for="(item,index) in cityCandidatePairs" :key="index">
          <div class="w-10">
            <p class="rounded-full w-7 h-7 flex items-center justify-center text-white m-0"
            :class="{'bg-green-02': item.partyName === '民主進步黨', 'bg-purple-02': item.partyName === '中國國民黨', 'bg-orange-01': item.partyName === '親民黨'}"
            >{{ item.candidateNo }}</p>
          </div>
          <div class="flex-1 border-r-2" :class="{'border-green-02': item.partyName === '民主進步黨', 'border-purple-02': item.partyName === '中國國民黨', 'border-orange-01': item.partyName === '親民黨'}">
            <p class="font-semibold">{{ item.partyName }}</p>
            <p class="text-xs">{{ item.presidentName }}｜{{ item.vicePresidentName }}</p>
          </div>
          <div class="flex-1 flex justify-center">
            <div>
              <p class="font-semibold">{{ item.ticketPercent }} %</p>
              <p class="text-xs">{{ item.ticketNum }} 票</p>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide v-if="areaCandidatePairs && areaCandidatePairs.length > 0">
      <div class="bg-green-01 border-2 border-green-02 rounded-md w-full p-4">
        <div class="flex items-center">
          <h5 class="text-xl font-semibold">{{ areaCandidatePairs[0].areaName }}</h5>
        </div>
        <div class="flex items-start pt-3 pb-2" v-for="(item,index) in areaCandidatePairs" :key="index">
          <div class="w-10">
            <p class="rounded-full w-7 h-7 flex items-center justify-center text-white m-0"
            :class="{'bg-green-02': item.partyName === '民主進步黨', 'bg-purple-02': item.partyName === '中國國民黨', 'bg-orange-01': item.partyName === '親民黨'}">{{ item.candidateNo }}</p>
          </div>
          <div class="flex-1 border-r-2" :class="{'border-green-02': item.partyName === '民主進步黨', 'border-purple-02': item.partyName === '中國國民黨', 'border-orange-01': item.partyName === '親民黨'}">
            <p class="font-semibold">{{ item.partyName }}</p>
            <p class="text-xs">{{ item.presidentName }}｜{{ item.vicePresidentName }}</p>
          </div>
          <div class="flex-1 flex justify-center">
            <div>
              <p class="font-semibold">{{ item.ticketPercent }} %</p>
              <p class="text-xs">{{ item.ticketNum }} 票</p>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide v-if="deptCandidatePairs && deptCandidatePairs.length > 0">
      <div class="bg-purple-01 border-2 border-purple-02 rounded-md w-full p-4 mb-5">
        <div class="flex items-center">
          <h5 class="text-xl font-semibold">{{ deptCandidatePairs[0].areaName }}</h5>
        </div>
        <div class="flex items-start pt-3 pb-2" v-for="(item,index) in deptCandidatePairs" :key="index">
          <div class="w-10">
            <p class="rounded-full w-7 h-7 flex items-center justify-center text-white m-0"
            :class="{'bg-green-02': item.partyName === '民主進步黨', 'bg-purple-02': item.partyName === '中國國民黨', 'bg-orange-01': item.partyName === '親民黨'}"
            >{{ item.candidateNo }}</p>
          </div>
          <div class="flex-1 border-r-2" :class="{'border-green-02': item.partyName === '民主進步黨', 'border-purple-02': item.partyName === '中國國民黨', 'border-orange-01': item.partyName === '親民黨'}">
            <p class="font-semibold">{{ item.partyName }}</p>
            <p class="text-xs">{{ item.presidentName }}｜{{ item.vicePresidentName }}</p>
          </div>
          <div class="flex-1 flex justify-center">
            <div>
              <p class="font-semibold">{{ item.ticketPercent }} %</p>
              <p class="text-xs">{{ item.ticketNum }} 票</p>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>

  <TipCard v-else />
</template>
<script>
import { uniq } from 'lodash'
import { reactive, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import TipCard from '@/components/modules/swipterCard.vue'
import partyColorsJson from '@/components/data/party_colors.json'
export default({
  components: {
    Swiper,
    SwiperSlide,
    TipCard
  },
  props: {
    cityTickets: Object,
    areaTickets: Object,
    deptTickets: Object,
    selectedCityId: String,
    selectedAreaId: String,
    selectedDeptId: String
  },
  setup (props) {
    const party_colors = reactive(partyColorsJson)
    const getLocationCode = (item) => {
      if (!item) {
        return ''
      }
      return `${item.prv_code}_${item.city_code}_${item.area_code}_${item.dept_code}_${item.li_code}`
    }

    // let candidateNoList = [...new Set(props.deptTickets.value.map((item) => item.cand_no))]
    //   return candidateNoList.map((candidateNo) => {
    //     const president = props.deptTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice !== 'Y')
    //     const vicePresident = props.deptTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice === 'Y')
    //     return {
    //       candidateNo,
    //       // areaId: getLocationCode(president) || '',
    //       areaName: president?.area_name || '',
    //       presidentName: president?.cand_name || '',
    //       vicePresidentName: vicePresident?.cand_name || '',
    //       partyName: president?.party_name || '',
    //       partyCode: president?.party_code || 0,
    //       ticketNum: president?.ticket_num || 0,
    //       ticketPercent: president?.ticket_percent || 0,
    //     }
    //   })
    // })
    const getCandidatePairs = (nationTickets) => {
      if (nationTickets) {
        const candidateNoList = uniq(nationTickets.map((item) => item.cand_no));
        return candidateNoList.map((candidateNo) => {
          const president = nationTickets.find((item) => item.cand_no === candidateNo && item.is_vice !== 'Y');
          const vicePresident = nationTickets.find((item) => item.cand_no === candidateNo && item.is_vice === 'Y');
          return {
            candidateNo,
            areaId: getLocationCode(president) || '',
            areaName: president?.area_name || '',
            presidentName: president?.cand_name || '',
            vicePresidentName: vicePresident?.cand_name || '',
            partyName: president?.party_name || '',
            partyCode: president?.party_code || 0,
            // partyColor: (partyColors as TParty[])?.find((item) => item.party_name === president?.party_name)?.color_code || 'b3b3b3',
            ticketNum: president?.ticket_num || 0,
            ticketPercent: president?.ticket_percent || 0,
          }
        })
      }
      return []
    }
    const cityCandidatePairs = computed(() => {
      if (props.cityTickets.value && props.selectedCityId) {
        return getCandidatePairs(props.cityTickets.value?.filter((item) => getLocationCode(item) === props.selectedCityId))
      }
      return []
    })
    const areaCandidatePairs = computed(() => {
      if (props.areaTickets.value && props.selectedAreaId) {
        return getCandidatePairs(props.areaTickets.value?.filter((item) => getLocationCode(item) === props.selectedAreaId))
      }
      return []
    })
    const deptCandidatePairs = computed(() => {
      if (props.deptTickets.value && props.selectedDeptId) {
        return getCandidatePairs(props.deptTickets.value?.filter((item) => getLocationCode(item) === props.selectedDeptId))
      }
      return []
    })

    return {
      party_colors,
      getLocationCode,
      getCandidatePairs,
      cityCandidatePairs,
      areaCandidatePairs,
      deptCandidatePairs
    }
  },
})
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: 100% !important;
}
</style>
