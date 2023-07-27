import styled from "styled-components";
import Profile from "../Profile/Profile";

export default function EditorsList(){
    return <EditorsListWrapper>
        <Profile name="Everton Serafim" description="Developer a 4 anos"/>
        <Profile name="Danilo Ferras" description="Developer a 2 anos"/>
        <Profile name="Luis de Camões" description="Developer a 9 anos"/>
        <Profile name="Fernanda Kipper" description="Developer a 5 anos"/>
        <Profile name="Antonieta Severo" description="Developer a 1 anos"/>
    </EditorsListWrapper>
}

export const EditorsListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;

`