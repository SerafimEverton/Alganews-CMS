import styled from "styled-components";
import CircleChart from "../CircleChart/CircleChart";
import { Metric } from "../../../sdk/@Types";
import { useState, useEffect } from 'react'
import MetricService from "../../../sdk/Services/Metric.service";
import withBoundary from "../../../Core/HOC/withBoundary";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function UserTopTags(){

const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])
const [error, setError] = useState<Error>()

useEffect(()=> {MetricService
.getTop3Tags()
.then(setTopTags)
.catch(error => {
    setError(new Error(error.message))
  })
  
  }, [])
  
  if(error){
    throw error
  }

  if(!topTags.length){
    return <UserTopTagsWrapper>
      <Skeleton height={88} width={88} circle />
      <Skeleton height={88} width={88} circle />
      <Skeleton height={88} width={88} circle />
    </UserTopTagsWrapper>
  }

    return <UserTopTagsWrapper>
        {
        topTags.map((tag, i)=> {
            return <CircleChart
            key={i}
            progress={tag.percentage} 
            size={88} 
            caption={tag.tagName} 
            theme={i=== 0 ? "primary" : 'default'} 
        />
        })
    }
    </UserTopTagsWrapper>
}

export const UserTopTagsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px;

`
export default withBoundary(UserTopTags, 'Gráfico')