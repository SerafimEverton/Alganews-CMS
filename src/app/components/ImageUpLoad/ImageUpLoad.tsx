import { mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import Button from '../Button/Button'
import * as IU from './ImageUpLoad.styles'
import FileService from '../../../sdk/Services/File.service'
import { uuid } from "uuidv4";

export interface ImageUpLoadProps{

    label: string

}

function ImageUpLoad (props: ImageUpLoadProps) {
    const [filePreview, setFilePreview] = useState<string | null>(null)
  
    function handleChange (e: ChangeEvent<HTMLInputElement>) {
      const file = e.target.files![0]
      
      if (file) {
        const reader = new FileReader()
  
        reader.addEventListener('load', async e => {
          setFilePreview(String(e.target?.result));

          await FileService.upload(file)
        })
  
        reader.readAsDataURL(file)
      }
    }

    if(filePreview){
        return <IU.ImagePreviewWrapper>
           <IU.ImagePreview preview={filePreview}>
           <Button
          variant={'primary'}
          label={'Remover imagem'}
          onClick={() => setFilePreview(null)}  
        />
            </IU.ImagePreview> 
        </IU.ImagePreviewWrapper>
    }

return <IU.Wrapper>
<IU.Label>
    <Icon 
    size={'24px'}
    path={mdiUpload}
    />
    {props.label}
    <IU.Input 
    type='file'
    onChange={handleChange}
    />
</IU.Label>
</IU.Wrapper>

}

export default ImageUpLoad