import styled from "styled-components"
import withBoundary from "../../../Core/HOC/withBoundary"
import MarkdownEditor from "../MarkdownEditor"
import Button from "../Button/Button"
import { useEffect, useState } from "react"
import { Post } from "../../../sdk/@Types"
import PostService from "../../../sdk/Services/Post.service"
import Loading from "../Loading/Loading"

interface PostPreviewProps {
  postId: number
}

function PostPreview (props: PostPreviewProps) {
  const [post, setPost] = useState<Post.Detailed>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
setLoading(true)
PostService
.getExistingPost(props.postId)
.then(setPost)
.finally(() => setLoading(false))

  }, [props.postId])

  if(loading){
  return <Loading show />
  }

  if(!post){
    return null
  }

  return <PostPreviewWrapper>
    <PostPreviewHeading>
      <PostPreviewTitle>
        {'Como fiquei rico aprendendo React'}
      </PostPreviewTitle>
      <PostPreviewActions>
        <Button
          variant={'danger'}
          label={'Publicar'}
          disabled = {post.published}
        />
        <Button
          variant={'primary'}
          label={'Editar'}
          disabled = {post.published}
        />
      </PostPreviewActions>
    </PostPreviewHeading>
    <PostPreviewImage
      src={post.imageUrls.medium}
    />
    <PostPreviewContent>
      <MarkdownEditor
        readOnly
        value={post.body}
      />
    </PostPreviewContent>
  </PostPreviewWrapper>
}

const PostPreviewWrapper = styled.div`
  background-color: #f3f8fa;
  padding: 24px;
  border: 1px solid #ccc;
  width: 655px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 6px 6px rgba(0,0,0,.05);
`

const PostPreviewHeading = styled.div`
  display: flex;
  justify-content: space-between;
`

const PostPreviewTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`

const PostPreviewActions = styled.div`
  display: flex;
  gap: 8px;
`

const PostPreviewImage = styled.img`
  height: 240px;
  width: 100%;
  object-fit: cover;
`

const PostPreviewContent = styled.div`
`

export default withBoundary(PostPreview)