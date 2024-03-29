import * as TI from './TagInput.styles'
import { WithContext as ReactTagInput, Tag } from 'react-tag-input'

export interface TagInputProps{
    onAdd: (Tag: Tag)=> any
    onDelete: (i: number)=> any
    tags: Tag[]
    placeholder: string
    name: string

}

const KeyCodes = {
    comma: 188,
    enter: 13,
    tab: 9
}

function TagInput( props: TagInputProps ){
return <TI.Wrapper>
    <ReactTagInput
    name={props.name}
    placeholder={props.placeholder} 
    handleAddition={props.onAdd}
    handleDelete={props.onDelete}  
    allowDragDrop={false}  
    autofocus= {false}
    tags= {props.tags}
    delimiters={[KeyCodes.comma, KeyCodes.enter, KeyCodes.tab]}

    />



</TI.Wrapper>
}

export default TagInput