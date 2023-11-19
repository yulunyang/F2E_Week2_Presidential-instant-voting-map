<template>
  <div ref="map"></div>
</template>

<script>
import * as d3 from 'd3'
import { ref } from 'vue'
import { onMounted } from 'vue'
export default {
  components: {
  },
  setup () {
    // const isLoading = ref(true)
    // const timer = ref(null)

    onMounted(() => {
      const map = ref(null)
      const svg = d3.select(map.value)
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%');

    d3.json('../components/modules/COUNTY_MOI_1090820.json').then((data) => {
      const projection = d3.geoMercator()
        .fitSize([svg.node().clientWidth, svg.node().clientHeight], data);

      const path = d3.geoPath()
        .projection(projection);

      svg.selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('d', path);
    })
      // isLoading.value ? setTimeOut() : null
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
      // isLoading,
      // timer,
      // setTimeOut
    }
  }
}
</script>

<style scoped>
</style>
