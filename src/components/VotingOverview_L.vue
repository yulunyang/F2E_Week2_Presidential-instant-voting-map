<template>
  <div class="bg-white rounded-md w-full p-2 px-4 md:p-4">
    <div class="flex">
      <h5 class="text-lg md:text-xl font-semibold">投票概況</h5>
      <div class="flex-1 flex justify-end lg:hidden cursor-pointer" @click="isShow = !isShow">
        <img src="@/assets/img/chevron-right.png" alt="" class="md:ml-2" v-if="!isShow">
        <img src="@/assets/img/chevron-down.png" alt="" class="md:ml-2" v-if="isShow">
      </div>
    </div>
    <div class="mt-6 hidden lg:block">
      <div class="flex flex-wrap items-center mb-3">
        <div class="w-2/5 lg:w-3/5" v-if="setElectionOverview.value">
          <Voting_chart1 :invalid_ticket="setElectionOverview.value.invalid_ticket" :valid_ticket="setElectionOverview.value.valid_ticket" />
        </div>
        <div class="flex-1 lg:w-2/5 lg:px-3">
          <p class="text-xl font-semibold" v-if="setElectionOverview.value">{{ setElectionOverview.value.vote_to_elect }}%</p>
          <p>投票率</p>
        </div>
        <div class="w-2/5 lg:w-full lg:py-3" v-if="setElectionOverview.value">
          <p>投票數 <span class="text-xs font-semibold ml-2">{{ setElectionOverview.value.vote_ticket }} 票</span></p>
          <p>無效票數 <span class="text-xs font-semibold ml-2">{{ setElectionOverview.value.invalid_ticket }} 票</span></p>
          <p>有效票數 <span class="text-xs font-semibold ml-2">{{ setElectionOverview.value.valid_ticket }} 票</span></p>
        </div>
      </div>
      <div class="flex flex-wrap items-center">
        <div class="w-2/5 lg:w-3/5">
          <Voting_chart2 />
        </div>
        <div class="w-3/5 lg:w-full lg:py-3" v-if="getCandidatePairs">
          <div class="flex items-start pt-3 pb-2" v-for="(item,index) in getCandidatePairs" :key="index">
            <div class="w-10">
              <p class="rounded-full w-7 h-7 flex items-center justify-center text-white m-0"
              :class="{'bg-green-02': item.partyName === '民主進步黨', 'bg-purple-02': item.partyName === '中國國民黨', 'bg-orange-01': item.partyName === '親民黨'}">{{ item.cand_no }}</p>
            </div>
            <div class="flex-1 border-r-2"
            :class="{'border-green-02': item.partyName === '民主進步黨', 'border-purple-02': item.partyName === '中國國民黨', 'border-orange-01': item.partyName === '親民黨'}">
              <p class="font-semibold">{{ item.partyName }}</p>
              <p class="text-xs">{{ item.presidentName }} | {{ item.vicePresidentName }}</p>
            </div>
            <div class="flex-1 flex justify-center">
              <div>
                <p class="font-semibold">{{ item.ticketPercent }} %</p>
                <p class="text-xs">{{ item.ticketNum }} 票</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 lg:hidden" v-if="isShow">
      <div class="flex flex-wrap items-center mb-3">
        <div class="w-2/5 lg:w-3/5">
          <Voting_chart1 />
        </div>
        <div class="flex-1 lg:w-2/5 lg:px-3">
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
        <div class="w-2/5 lg:w-3/5">
          <Voting_chart2 />
          <!-- <img src="@/assets/img/dount2.png" alt="" class=""> -->
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
import { ref, computed, onMounted } from 'vue'
import Voting_chart1 from '@/components/modules/Voting_chart1.vue'
import Voting_chart2 from '@/components/modules/Voting_chart2.vue'
export default({
  props: {
    setElectionOverview: Object,
    setNationTickets: Object,
    setCityTickets: Object
  },
  components: {
    Voting_chart2,
    Voting_chart1
  },

  setup (props) {
    const isShow = ref(false)

    onMounted(() => {
      // let obj = {}
      // for (let item of props.setNationTickets) {
      //   if (!item.party_name) {
      //     obj.push(item)
      //   }
      //   return obj
      // }
    })
    const getLocationCode = (item) => {
      return `${item.prv_code}_${item.city_code}_${item.area_code}_${item.dept_code}_${item.li_code}`
    }
    const getCandidatePairs = computed(() => {

      const candidateNoList = [...new Set(props.setNationTickets.value.map((item) => item.cand_no))]
      return candidateNoList.map((candidateNo) => {
        const president = props.setNationTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice !== 'Y')
        const vicePresident = props.setNationTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice === 'Y')
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
    })
    // const calculateNationTickets = computed(() => {
    //   const candidateNoList = [...new Set(props.setNationTickets.value.map((item) => item.cand_no))]
    //   return candidateNoList.map((candidateNo) => {
    //     const president = props.setNationTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice !== 'Y')
    //     const vicePresident = props.setNationTickets.value.find((item) => item.cand_no === candidateNo && item.is_vice === 'Y')
    //     return {
    //       candidateNo,
    //       areaId: getLocationCode(president) || '',
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

    return {
      isShow,
      getCandidatePairs
    }
  },
})
</script>

<style lang="scss" scoped>

</style>
