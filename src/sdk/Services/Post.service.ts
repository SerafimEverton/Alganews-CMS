import Service from "../Service";
import generateQueryString from "../UtilSDK/GenerateQueryString";
import { Post } from "../@Types/Post";

class PostService extends Service {

    static getAllPosts(search: Post.Query){
        const queryString = generateQueryString(search)
        return this.Http
        .get<Post.Paginated>('/posts'.concat(queryString))
        .then(this.getData)
    }

    static getExistingPost (id: number){
        return this.Http
        .get<Post.Paginated>(`/posts/${id}`)
        .then(this.getData)
    }

    static insertNewPost(post: Post.Input){
        return this.Http
        .post<Post.Detailed>('/post', post)
        .then(this.getData)
    }

}

export default PostService