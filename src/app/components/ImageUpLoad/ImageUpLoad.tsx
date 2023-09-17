import { mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import Button from '../Button/Button'
import * as IU from './ImageUpLoad.styles'
import FileService from '../../../sdk/Services/File.service'


export interface ImageUploadProps {
  label: string
  onImageUpload: (imageUrl: string) => any
}

function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    if (file) {
      const reader = new FileReader();

      // Defina a função de carregamento uma vez e remova-a apenas uma vez após o uso.
      const handleLoad = async (event: ProgressEvent<FileReader>) => {
         await setFilePreview(String(event.target?.result));
        
        const imageUrl = await FileService.upload(file)
       
        props.onImageUpload(imageUrl)
       
        // Remova o ouvinte de eventos após ser acionado uma vez.
        await reader.removeEventListener('load', handleLoad);
     };

      reader.addEventListener('load', handleLoad);
     
      reader.readAsDataURL(file);
      
    }
  }

  if (filePreview)
    return <IU.ImagePreviewWrapper>

      <IU.ImagePreview preview={filePreview}>
        <Button
          variant={'primary'}
          label={'Remover imagem'}
          onClick={() => setFilePreview(null)}  
        />
        
      </IU.ImagePreview>
    </IU.ImagePreviewWrapper>

  return <IU.Wrapper>
    <IU.Label>
      <Icon
        size={'24px'}
        path={mdiUpload}
      />
      { props.label }
      <IU.Input
        type="file"
        onChange={handleChange}
      />
    </IU.Label>
  </IU.Wrapper>
}

export default ImageUpload