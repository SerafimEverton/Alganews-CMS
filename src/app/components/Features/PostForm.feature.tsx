import styled from "styled-components"
import Input from "../Input/input"
import ImageUpLoad from "../ImageUpLoad/ImageUpLoad"
import MarkdownEditor from "../MarkdownEditor/MarkdownEditor"
import TagInput from "../TagInput/TagInput"
import { useState } from "react"
import { Tag } from "react-tag-input"
import WordPriceCounter from "../WordPriceCounter/WordPriceCounter"
import Button from "../Button/Button"

export default function PostForm(){

const [tags, setTags] = useState<Tag[]>([]);

    return <PostFormWrapper>
        <Input 
        label="título"
        placeholder="Como fiquei rico aprendendo React"
        />
        <ImageUpLoad label="Thumbenail do Post"/>
        <MarkdownEditor />
        <TagInput
        tags={tags}
        onAdd={tag => setTags([...tags, tag])}
        onDelete={index => setTags(tags.filter((_, i) => i !== index))}
        placehoder="Insira as tags deste post"
        />
        <PostFormSubmitWrapper>
        <WordPriceCounter pricePerWord={0.25} wordCount={40}/>
        <Button variant="primary" label="Salvar Post" type="submit"/>
        </PostFormSubmitWrapper>
    </PostFormWrapper>
}

export const PostFormWrapper = styled.form`

display: flex;
flex-direction: column;
gap: 24px;

`
export const PostFormSubmitWrapper = styled.form`

display: flex;
justify-content: space-between;
`