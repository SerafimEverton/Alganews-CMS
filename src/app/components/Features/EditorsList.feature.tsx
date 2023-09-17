import styled from "styled-components";
import Profile from "../Profile/Profile";
import { useEffect, useState } from "react";
import { User } from "../../../sdk/@Types";
import UserService from "../../../sdk/Services/User.service";

export default function EditorsList(){

const [editors, setEditors] = useState<User.EditorSummary[]>([])

useEffect(()=> {
    UserService
    .getAllEditors()
    .then(setEditors)
}, [])

    return <EditorsListWrapper>
        {
           editors.map(editor => {
            return <Profile 
            key={editor.id}
            editorId = {editor.id}
            name= {editor.name}
            description="Developer a 4 anos"

            />
           }) 
        }
         </EditorsListWrapper>
}
const EditorsListWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;

`