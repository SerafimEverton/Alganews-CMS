import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound404 from './views/NotFound404.view';
import EditorListView from './views/EditorList.view';
import PostCreateView from './views/PostCreate.view';
import EditorProfileView from './views/EditorProfile.view';
import Home from "./views/Home.view";
import { useEffect } from 'react'
import info from "../Core/Utils/Info";
import PostEditView from "./views/PostEdit.view";


export default function App() {

    useEffect(() => {

        window.onunhandledrejection = function (error: PromiseRejectionEvent) {
            info({
                title: error.reason.response?.data.title || 'Erro',
                description: error.reason.response?.data.detail || error.reason.message
            })
        }

    }, [])

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editores" element={<EditorListView />} />
            <Route path="/editores/:id" element={<EditorProfileView />} />
            <Route path="/posts/criar" element={<PostCreateView />} />
            <Route path="/posts/editar/:id" element={<PostEditView />} />
            <Route path="*" element={<NotFound404 />} />
        </Routes>
    </BrowserRouter>
}