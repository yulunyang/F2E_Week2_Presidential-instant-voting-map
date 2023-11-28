<template>
  <TipCard v-if="!cityTickets && !nationTickets" />

  <swiper  v-else
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
    <swiper-slide v-if="cityTickets && cityTickets.value">
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
    <swiper-slide v-if="areaTickets && areaTickets.value">
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
    <swiper-slide v-if="deptTickets && deptTickets.value">
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
</template>
<script>
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import TipCard from '@/components/modules/swipterCard.vue'
export default({
  components: {
    Swiper,
    SwiperSlide,
    TipCard
  },
  props: {
    cityTickets: Object,
    areaTickets: Object,
    deptTickets: Object
  },
  setup (props) {
    const cityCandidatePairs = computed(() => {
      let candidateNoList = [...new Set(props.cityTickets.value.map((item) => item.cand_no))]
        return candidateNoList.map((candidateNo) => {
          const president = props.cityTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice !== 'Y')
          const vicePresident = props.cityTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice === 'Y')
          return {
            candidateNo,
            // areaId: getLocationCode(president) || '',
            areaName: president?.area_name || '',
            presidentName: president?.cand_name || '',
            vicePresidentName: vicePresident?.cand_name || '',
            partyName: president?.party_name || '',
            partyCode: president?.party_code || 0,
            ticketNum: president?.ticket_num || 0,
            ticketPercent: president?.ticket_percent || 0,
          }
        })
      })
    const areaCandidatePairs = computed(() => {
    let candidateNoList = [...new Set(props.areaTickets.value.map((item) => item.cand_no))]
      return candidateNoList.map((candidateNo) => {
        const president = props.areaTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice !== 'Y')
        const vicePresident = props.areaTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice === 'Y')
        return {
          candidateNo,
          // areaId: getLocationCode(president) || '',
          areaName: president?.area_name || '',
          presidentName: president?.cand_name || '',
          vicePresidentName: vicePresident?.cand_name || '',
          partyName: president?.party_name || '',
          partyCode: president?.party_code || 0,
          ticketNum: president?.ticket_num || 0,
          ticketPercent: president?.ticket_percent || 0,
        }
      })
    })
    const deptCandidatePairs = computed(() => {
    let candidateNoList = [...new Set(props.deptTickets.value.map((item) => item.cand_no))]
      return candidateNoList.map((candidateNo) => {
        const president = props.deptTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice !== 'Y')
        const vicePresident = props.deptTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice === 'Y')
        return {
          candidateNo,
          // areaId: getLocationCode(president) || '',
          areaName: president?.area_name || '',
          presidentName: president?.cand_name || '',
          vicePresidentName: vicePresident?.cand_name || '',
          partyName: president?.party_name || '',
          partyCode: president?.party_code || 0,
          ticketNum: president?.ticket_num || 0,
          ticketPercent: president?.ticket_percent || 0,
        }
      })
    })

    return {
      // partyColors,
      cityCandidatePairs,
      areaCandidatePairs,
      deptCandidatePairs,
    }
  },
})
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: 100% !important;
}
</style>
