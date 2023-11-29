<template>
  <div class="contain w-full">
    <div ref="chart2" class="chart2 w-full h-full max-w-full" style="width: 160px; height:160px;"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import usePie from './usePie.js'
export default {
  name: 'Chart_2',
  props: {
    getCandidatePairs: Array
  },
  setup () {
    const chart2 = ref(null)

    onMounted(() => {
      const { setOption, resize } = usePie(chart2.value)
      setOption([
        { value: 8170231, name: '民主進步黨', itemStyle: { color: '#84CB98' } },
        { value: 5522119, name: '中國國民黨', itemStyle: { color: '#8894D8' } },
        { value: 608590, name: '親民黨', itemStyle: { color: '#DFA175' } }
      ])
      window.addEventListener('resize', () => {
        resize()
      })
    })

    return { chart2 }
  }
}
</script>

<style lang="scss" scoped>

.chart2 {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>