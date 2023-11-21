<template>
  <div class="contain w-full">
    <div ref="chart1" class="chart1 w-full h-full max-w-full" style="width: 160px; height:160px;"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import usePie from './usePie.js'
export default {
  name: 'Chart_2',
  setup () {
    const chart1 = ref(null)

    onMounted(() => {
      const { setOption, resize } = usePie(chart1.value)
      setOption([
        { value: 8170231, name: '民主進步黨', itemStyle: { color: '#84CB98' } },
        { value: 5522119, name: '中國國民黨', itemStyle: { color: '#8894D8' } },
        { value: 608590, name: '親民黨', itemStyle: { color: '#DFA175' } }
      ])
      window.addEventListener('resize', () => {
        resize()
      })
    })

    return { chart1 }
  }
}
</script>

<style lang="scss" scoped>

.chart1 {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>