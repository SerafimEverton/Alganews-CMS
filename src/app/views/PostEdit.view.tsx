import { useParams } from "react-router-dom";
import usePageTitle from "../../Core/Hooks/usePageTitle";
import DefaultLayout from "../../Layout/Default/Default.layout";
import PostForm from "../components/Features/PostForm.feature";

export default function PostEditView(){

    const params = useParams<{id: string}>()
    
    usePageTitle('Novo Post')

    return <DefaultLayout>

        <PostForm postId={Number(params.id)} />

    </DefaultLayout>
}