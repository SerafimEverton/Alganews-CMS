import styled from "styled-components";
import CircleChart from "../CircleChart/CircleChart";
import { Metric } from "../../../sdk/@Types";
import { useState, useEffect } from 'react'
import MetricService from "../../../sdk/Services/Metric.service";

export default function UserTopTags(){

const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([])


useEffect(()=> {

MetricService
.getTop3Tags()
.then(setTopTags)

})

    return <UserTopTagsWrapper>
        {
        topTags.map((tag, i)=> {
            return <CircleChart
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