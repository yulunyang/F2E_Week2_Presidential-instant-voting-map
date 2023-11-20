<template>
  <div id="app" class="m-0 p-0">
    <HeaderSection />
    <router-view />
  </div>
</template>
<script>
import HeaderSection from '@/components/modules/headerSection.vue'
export default ({
  components: {
    HeaderSection
  },
  setup () {

  },
})
</script>

<style lang="scss">
  #app {
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans SC', sans-serif;
    font-family: 'Noto Sans TC', sans-serif;
    background-color: #f5f5f5;
  }
</style>
