import { useEffect, useState } from "react"
import Chart, { ChartProps } from "../Chart/Chart"
import MetricService from "../../../sdk/Services/Metric.service"
import transformEditorMonthlyEarningsIntoChartJs from "../../../Core/Utils/TransformEditorMonthlyEarningsIntoChartJs"

// const FAKE_DATA = {
//   labels: ['Batata', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
//   datasets: [
//     {
//       label: 'Receitas',
//       data: [500, 400, 600, 100, 800, 20, 123, 320, 120, 500, 434, 322],
      
//       yAxisID: 'cashflow',
//     },
//     {
//       label: 'Despesas',
//       data: [100, 200, 250, 500, 1000, 600, 123, 210, 344, 800, 123, 0],
      
//       yAxisID: 'cashflow',
//     },
//   ]
// }

export default function UserPerformance () {

const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()

useEffect(()=> {

MetricService
.getEditorMonthlyEarnings()
.then(transformEditorMonthlyEarningsIntoChartJs)
.then(setEditorEarnings)

}, [])

if(!editorEarnings){
return null
}

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />
}