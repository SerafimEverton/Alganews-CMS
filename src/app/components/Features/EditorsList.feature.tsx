import styled from "styled-components";
import Profile from "../Profile/Profile";
import { useEffect, useState } from "react";
import { User } from "../../../sdk/@Types";
import UserService from "../../../sdk/Services/User.service";
import getEditorDescription from "../../../sdk/UtilSDK/getEditorDescription";

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
            description={getEditorDescription(new Date(editor.createdAt))}
            avatarUrl={editor.avatarUrls.small}

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