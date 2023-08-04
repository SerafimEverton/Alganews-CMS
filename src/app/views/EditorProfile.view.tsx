import DefaultLayout from "../../Layout/Default/Default.layout";
import ErrorBoundary from "../components/ErrorBoundary";
import EditorProfile from "../components/Features/EditorProfile.feature";

function EditorProfileView(){
    return<DefaultLayout>    
    <ErrorBoundary>
    <EditorProfile hidePersonalData />
    </ErrorBoundary>
    </DefaultLayout>}

    export default EditorProfileView