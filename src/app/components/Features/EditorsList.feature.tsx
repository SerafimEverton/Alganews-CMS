git statusimport styled from "styled-components";
import Profile from "../Profile/Profile";

export default function EditorsList(){
    return <EditorsListWrapper>
        <Profile editorId={1} name="Everton Serafim" description="Developer a 4 anos"/>
        <Profile editorId={2} name="Danilo Ferras" description="Developer a 2 anos"/>
        <Profile editorId={3} name="Luis de Camões" description="Developer a 9 anos"/>
        <Profile editorId={4} name="Fernanda Kipper" description="Developer a 5 anos"/>
        <Profile editorId={5} name="Antonieta Severo" description="Developer a 1 anos"/>
    </EditorsListWrapper>
}
const EditorsListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;

`