import styled from "styled-components";
import ValueDescriptor from "../ValueDescriptor/ValueDescriptor";
import { useState, useEffect } from 'react'
import { User } from "../../../sdk/@Types";
import UserService from "../../../sdk/Services/User.service";
import withBoundary from "../../../Core/HOC/withBoundary";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function UserEarnings(){

const [user, setUser] = useState<User.UserDetaild>()
const [error, setError] = useState<Error>()

useEffect(()=> {
UserService
.getDetailedUser(7)
.then(setUser)
.catch(error => {
    setError(new Error(error.message))
  })
  
  }, [])
  
  if(error){
    throw error
  }

if(!user)
return <UserEarningsWrapper style={{heigth: 123}}>
<Skeleton width={150} height={40}/>
<Skeleton width={150} height={40}/>
<Skeleton width={150} height={40}/>
<Skeleton width={150} height={40}/>
</UserEarningsWrapper>

    return <UserEarningsWrapper>
        <ValueDescriptor color="primary" description="Ganhos no mês" value={user.metrics.monthlyEarnings} isCurrency />
        <ValueDescriptor color="primary" description="Ganhos na semana" value={user.metrics.weeklyEarnings} isCurrency />
        <ValueDescriptor color="primary" description="Ganhos de sempre" value={user.metrics.lifetimeEarnings} isCurrency />
        <ValueDescriptor color="primary" description="Total de palavras" value={user.metrics.lifetimeWords} />
    </UserEarningsWrapper>
}

export const UserEarningsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px;

`

export default withBoundary(UserEarnings, 'Rendimentos')