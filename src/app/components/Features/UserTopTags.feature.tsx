import styled from "styled-components";
import CircleChart from "../CircleChart/CircleChart";
import { useState, useEffect } from 'react'
import withBoundary from "../../../Core/HOC/withBoundary";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Metric } from "evertonss-sdk/dist/@Types";
import { MetricService } from "evertonss-sdk";

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