import DefaultLayout from "../../Layout/Default/Default.layout";
import EditorProfile from "../components/Features/EditorProfile.feature";

function EditorProfileView(){
    return<DefaultLayout>    
   
    <EditorProfile hidePersonalData />
    
    </DefaultLayout>}

    export default EditorProfileView