// 按需引入
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import {
  PieChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer]
)

const usePie = (element) => {
  // 初始化，傳入HTML element
  const pieChart = echarts.init(element)

  // 封裝相關參數依需求訂製
  const setOption = data => {
    const option = {
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          data: data,
          label: {
            show: false,
            position: 'left'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          }
        }
      ]
    }
    return pieChart.setOption(option)
  }

  // 封裝resize，RWD會使用到
  const resize = () => pieChart.resize()

  return { setOption, resize }
}

export default usePie