<template>
  <!-- <div class="contain w-full"> -->
    <div ref="chart1" class="chart2 w-full h-full max-w-full" style="width: 160px; height:160px;"></div>
  <!-- </div> -->
</template>

<script>
import { ref, onMounted } from 'vue'
import usePie from './usePie.js'
export default {
  name: 'Chart_1',
  props: {
    invalid_ticket: Number,
    valid_ticket: Number
  },
  setup (props) {
    const chart1 = ref(null)

    onMounted(() => {
      const { setOption, resize } = usePie(chart1.value)
      setOption([
        { value: props.invalid_ticket, name: '無效票數', itemStyle: { color: '#D9D9D9' } },
        { value: props.valid_ticket, name: '有效票數', itemStyle: { color: '#262E49' } },
      ])
      window.addEventListener('resize', () => {
        resize()
      })
    })

    return { chart1 }
  }
}
</script>

<style lang="scss">
  .chart2 {
    width: 100%;
    height: 100%;
    background-color: #fff;
    max-width: 160px;
    width: 160px;
    height: 160px;
  }
</style>