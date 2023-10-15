import usePageTitle from "../../Core/Hooks/usePageTitle";
import DefaultLayout from "../../Layout/Default/Default.layout";
import PostForm from "../components/Features/PostForm.feature";

export default function PostEditView(){
    
    usePageTitle('Novo Post')

    return <DefaultLayout>

        <PostForm />

    </DefaultLayout>
}