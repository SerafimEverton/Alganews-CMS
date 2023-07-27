import usePageTitle from "../../Core/Hooks/usePageTitle";
import DefaultLayout from "../../Layout/Default/Default.layout";
import EditorsList from "../components/Features/EditorsList.feature";

export default function EditorListView(){

usePageTitle('Lista de Editores')

    return <DefaultLayout>
        <EditorsList />
    </DefaultLayout>
}