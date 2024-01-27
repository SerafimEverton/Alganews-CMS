import styled from "styled-components"
import Input from "../Input/input"
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor"
import TagInput from "../TagInput/TagInput"
import { useEffect, useState } from "react"
import { Tag } from "react-tag-input"
import WordPriceCounter from "../WordPriceCounter/WordPriceCounter"
import Button from "../Button/Button"
import countWordsInMarkdown from "../../../Core/Utils/CountWordsInMarkdown"
import info from "../../../Core/Utils/Info"
import ImageUpLoad from "../ImageUpLoad"
import Loading from "../Loading/Loading"
import { useNavigate } from "react-router-dom"
import { PostService } from "evertonss-sdk"

interface PostFormProps{
  postId?: number
}


export default function PostForm (props: PostFormProps) {
  const historyNavigate = useNavigate()
  const [tags, setTags] = useState<Tag[]>([])
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [publishing, setPublishing] = useState(false)

  async function insertNewPost() {
    const newPost = {
      body, title, imageUrl, tags: tags.map(tag => tag.text)
    }

    await PostService.insertNewPost(newPost)

    info({
      title: 'Post salvo com sucesso',
      description: 'Você acabou de criar o post'
    })   
    historyNavigate('/')
  
  }  async function updateExistingPost(postId: number) {
    const newPost = {
      body, title, imageUrl, tags: tags.map(tag => tag.text)
    }

    await PostService.updateExistingPost(postId, newPost)

    info({
      title: 'Post atualizado',
      description: 'Você atualizou o post com sucesso'
    })
  }

  async function handleFormSubmit (e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      setPublishing(true)

      props.postId
        ? await updateExistingPost(props.postId)
        : await insertNewPost()

      historyNavigate('/')
    }
    finally {
      setPublishing(false)
    }
  }

  function fetchPost(postId: number) {
    PostService
      .getExistingPost(postId)
      .then(post => {
        setTitle(post.title)
        setImageUrl(post.imageUrls.default)
        setBody(post.body)
        setTags(post.tags.map(tag => ({ id: tag, text: tag })))
      })
  }

  useEffect(() => {
    if (props.postId) {
      fetchPost(props.postId)
    }
  }, [props.postId])



  return <PostFormWrapper onSubmit={handleFormSubmit}>
    <Loading show = {publishing} />
    <Input
      label ="título"
      value={title}
      onChange={e => setTitle(e.currentTarget.value)}
      placeholder="e.g.: Como fiquei rico aprendendo React"
    />
    
    <ImageUpLoad
      onImageUpload={setImageUrl}
      label="Thumbnail do post"
      preview={imageUrl}
    />

    <MarkdownEditor 
    onChange={setBody} 
    value={body}
    />
    
    <TagInput
      name = 'tags'
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((_, i) => i !== index))}
      placeholder="Insira as tags deste post"
    />

    <PostFormSubmitWrapper>
      <WordPriceCounter
        pricePerWord={0.10}
        wordCount={countWordsInMarkdown(body)}
      />
      <Button 
      variant="primary" 
      label="Salvar post" 
      type="submit" 
      disabled = {!title || !imageUrl || !body || !tags.length}
      />
    </PostFormSubmitWrapper>
  </PostFormWrapper>
}

const PostFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const PostFormSubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`