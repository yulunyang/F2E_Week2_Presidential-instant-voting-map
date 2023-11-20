<template>
  <div class="main container mx-auto py-6 px-2">
    <div class="side-bar flex mb-5 px-4 md:px-0">
      <a class="inline-block p-2 md:text-xl cursor-pointer w-1/2 md:w-auto text-center" :class="{ 'active-bar': isPresent, 'text-gray-01': !isPresent }" @click="isPresent = true">第15任 總統副總統大選</a>
      <a class="inline-block p-2 md:text-xl cursor-pointer w-1/2 md:w-auto text-center" :class="{ 'active-bar': !isPresent, 'text-gray-01': isPresent }" @click="isPresent = false">第10任 立法委員選舉</a>
    </div>
    <!-- search-bar -->
    <SearchBar />
    <!-- content -->
    <div class="flex flex-wrap mt-4 md:mt-6 w-full">
      <div class="w-full lg:w-1/5 mb-4 md:mb-0">
        <VotingOverview_L />
      </div>
      <div class="w-full lg:w-3/5 flex justify-center">
        <div class="">
          <img src="@/assets/img/taiwan.png" alt="" class="">
        </div>
      </div>
      <div class="w-full lg:w-1/5">
        <VotingOverview_R />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { onMounted } from 'vue'
import VotingOverview_L from '@/components/VotingOverview_L.vue'
import VotingOverview_R from '@/components/VotingOverview_R.vue'
import SearchBar from '@/components/modules/searchBar.vue'
export default {
  components: {
    VotingOverview_L,
    VotingOverview_R,
    SearchBar
  },
  setup () {
    const isPresent = ref(true)
    // const isLoading = ref(true)
    // const timer = ref(null)

    onMounted(() => {
    })

    // const setTimeOut = () => {
    //   if (isLoading.value) {
    //     const timeout = setTimeout(() => {
    //       isLoading.value = false
    //     }, 2000)
    //     clearTimeout(timeout.value)
    //   }
    // }

    return {
      isPresent
      // isLoading,
      // timer,
      // setTimeOut
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
