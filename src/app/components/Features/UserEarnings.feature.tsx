import styled from "styled-components";
import ValueDescriptor from "../ValueDescriptor/ValueDescriptor";

export default function UserEarnings(){
    return <UserEarningsWrapper>
        <ValueDescriptor color="primary" description="Ganhos no mês" value={560322.32} isCurrency />
        <ValueDescriptor color="primary" description="Ganhos na semana" value={560322.32} isCurrency />
        <ValueDescriptor color="primary" description="Ganhos de sempre" value={560322.32} isCurrency />
        <ValueDescriptor color="primary" description="Total de palavras" value={2_654_325} />
    </UserEarningsWrapper>
}

export const UserEarningsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px;

`