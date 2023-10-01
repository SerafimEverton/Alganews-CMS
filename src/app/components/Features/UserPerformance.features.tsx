import { useEffect, useState } from "react"
import Chart, { ChartProps } from "../Chart/Chart"
import MetricService from "../../../sdk/Services/Metric.service"
import transformEditorMonthlyEarningsIntoChartJs from "../../../Core/Utils/TransformEditorMonthlyEarningsIntoChartJs"
import withBoundary from "../../../Core/HOC/withBoundary"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function UserPerformance () {

const [editorEarnings, setEditorEarnings] = useState<ChartProps['data']>()
const [error, setError] = useState<Error>()

useEffect(()=> {

MetricService
.getEditorMonthlyEarnings()
.then(transformEditorMonthlyEarningsIntoChartJs)
.then(setEditorEarnings)
.catch(error => {
  setError(new Error(error.message))
})

}, [])

if(error){
  throw error
}

if(!editorEarnings){
return <div>
<Skeleton height={227}/>
</div>
}

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />
}

export default withBoundary(UserPerformance, 'Performance')