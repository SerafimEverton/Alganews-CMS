import styled from "styled-components"
import Input from "../Input/input"
import ImageUpLoad from "../ImageUpLoad/ImageUpLoad"
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor"
import TagInput from "../TagInput/TagInput"
import { useState } from "react"
import { Tag } from "react-tag-input"
import WordPriceCounter from "../WordPriceCounter/WordPriceCounter"
import Button from "../Button/Button"
import countWordsInMarkdown from "../../../Core/Utils/CountWordsInMarkdown"
import info from "../../../Core/Utils/Info"
import PostService from "../../../sdk/Services/Post.service"

export default function PostForm(){

const [tags, setTags] = useState<Tag[]>([]);
const [body, setBody] = useState('');

const [title, setTitle] = useState('')

async function handleFormSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newPost = {
      body,
      title,
      tags: tags.map(tag => tag.text),
      imageUrl: ''
    }

    const insertPost = await PostService.insertNewPost(newPost)
    
    info({
      title: 'Post salvo com sucesso',
      description: 'Você acabou de criar o post com o id '+ insertPost.id
    })
  }

  return <PostFormWrapper onSubmit={handleFormSubmit}>
    <Input
      label="título"
      value={title}
      onChange={e => setTitle(e.target.value)}
      placeholder="e.g.: Como fiquei rico aprendendo React"
    />
    <ImageUpLoad label="Thumbnail do post" />
    <MarkdownEditor onChange={setBody} />
    <TagInput
      tags={tags}
      onAdd={tag => setTags([...tags, tag])}
      onDelete={index => setTags(tags.filter((_, i) => i !== index))}
      placehoder="Insira as tags deste post"
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

export const PostFormWrapper = styled.form`

display: flex;
flex-direction: column;
gap: 24px;

`
export const PostFormSubmitWrapper = styled.div`

display: flex;
justify-content: space-between;
`