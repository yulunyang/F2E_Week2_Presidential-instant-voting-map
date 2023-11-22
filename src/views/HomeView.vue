<template>
  <div class="main container mx-auto py-3 md:py-6 px-2">
    <div class="side-bar flex mb-5 px-4 md:px-0">
      <a class="inline-block p-2 md:text-xl cursor-pointer w-1/2 md:w-auto text-center" :class="{ 'active-bar': isPresent, 'text-gray-01': !isPresent }" @click="isPresent = true">第15任 總統副總統大選</a>
      <a class="inline-block p-2 md:text-xl cursor-pointer w-1/2 md:w-auto text-center" :class="{ 'active-bar': !isPresent, 'text-gray-01': isPresent }" @click="isPresent = false">第10任 立法委員選舉</a>
    </div>
    <!-- search-bar -->
    <SearchBar v-on:emitData="emitData" />
    <!-- content -->
    <div class="flex flex-wrap mt-4 md:mt-6 w-full">
      <div class="w-full lg:w-3/12 xl:w-1/5 mb-4 md:mb-0">
        <VotingOverview_L />
      </div>
      <div class="w-full lg:w-6/12 xl:w-3/5 flex justify-center">
        <div class="">
          <!-- <TaiwanMap /> -->
          <img src="@/assets/img/taiwan.png" alt="" class="">
        </div>
      </div>
      <div class="w-full lg:w-3/12 xl:w-1/5">
        <VotingOverview_R :cityData="cityData" class="hidden lg:block" />
        <SwipterCard class="lg:hidden" v-if="!cityData.city && !cityData.district" />
        <SwipterCardData class="lg:hidden" v-else :cityData="cityData" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { onMounted } from 'vue'
import VotingOverview_L from '@/components/VotingOverview_L.vue'
import VotingOverview_R from '@/components/VotingOverview_R.vue'
// import TaiwanMap from '@/components/TaiwanMap.vue'
import SearchBar from '@/components/modules/searchBar.vue'
import SwipterCard from '@/components/modules/swipterCard.vue'
import SwipterCardData from '@/components/modules/SwipterCardData.vue'
export default {
  components: {
    VotingOverview_L,
    VotingOverview_R,
    SearchBar,
    SwipterCard,
    SwipterCardData
    // TaiwanMap
  },
  setup () {
    const isPresent = ref(true)
    const cityData = reactive({
      city: '',
      district: ''
    })

    onMounted(() => {
    })

    const emitData = (val) => {
      cityData.city = val.city
      cityData.district = val.district
    }
    return {
      isPresent,
      emitData,
      cityData
    }
  }
}
</script>

<style lang="scss">
  .main {
    min-height: calc(100vh - 68px);
    margin-top: 68px;
    .active-bar {
      color: #000000;
      font-weight: 600;
      border-bottom: 4px solid #262E49;
    }
  }
</style>
