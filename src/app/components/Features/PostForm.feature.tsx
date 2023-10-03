import styled from "styled-components"
import Input from "../Input/input"
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor"
import TagInput from "../TagInput/TagInput"
import { useState } from "react"
import { Tag } from "react-tag-input"
import WordPriceCounter from "../WordPriceCounter/WordPriceCounter"
import Button from "../Button/Button"
import countWordsInMarkdown from "../../../Core/Utils/CountWordsInMarkdown"
import info from "../../../Core/Utils/Info"
import PostService from "../../../sdk/Services/Post.service"
import ImageUpLoad from "../ImageUpLoad"
import Loading from "../Loading/Loading"

export default function PostForm () {
  const [tags, setTags] = useState<Tag[]>([])
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [publishing, setPublishing] = useState(false)
  
  async function handleFormSubmit (e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault();

    try { 
    setPublishing(true);
    const newPost = {
      body,      
      title,
      tags: tags.map(tag => tag.text),
      imageUrl,
    }

    const insertedPost = await PostService.insertNewPost(newPost)

    info({
      title: 'Post salvo com sucesso',
      description: 'Você acabou de criar o post com o id ' + insertedPost.id,
    })   
  
  }

    finally {

    setPublishing(false)
    
  }
  }

  return <PostFormWrapper onSubmit={handleFormSubmit}>
    <Loading show = {publishing} />
    <Input
      label ="título"
      // id = 'título'
      value={title}
      onChange={e => setTitle(e.currentTarget.value)}
      placeholder="e.g.: Como fiquei rico aprendendo React"
    />
    
    <ImageUpLoad
      onImageUpload={setImageUrl}
      label="Thumbnail do post"
    />

    <MarkdownEditor onChange={setBody} />
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
      <Button variant="primary" label="Salvar post" type="submit" />
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