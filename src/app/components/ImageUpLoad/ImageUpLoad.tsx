import { mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import Button from '../Button/Button'
import * as IU from './ImageUpLoad.styles'
import FileService from '../../../sdk/Services/File.service'
import { useEffect } from 'react'
import Loading from '../Loading/Loading'


export interface ImageUploadProps {
  label: string
  onImageUpload: (imageUrl: string) => any
  preview?: string
}

function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | undefined>(undefined);
  const [pushing, setPushing] = useState(false)

  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];

    if (file) {
      const reader = new FileReader()

      reader.addEventListener('load', async e => {
        try {
          setPushing(true)
          setFilePreview(String(e.target?.result));
          const imageUrl = await FileService.upload(file)
          props.onImageUpload(imageUrl)
        } finally {
          setPushing(false)
        }
      })

      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    setFilePreview(props.preview)
  }, [props.preview])

  //     const reader = new FileReader();

        

  //     // Defina a função de carregamento uma vez e remova-a apenas uma vez após o uso.
  //     const handleLoad = async (event: ProgressEvent<FileReader>) => {
  //        await setFilePreview(String(event.target?.result));
        
  //       const imageUrl = await FileService.upload(file)
       
  //       props.onImageUpload(imageUrl)
       
  //       // Remova o ouvinte de eventos após ser acionado uma vez.
  //       await reader.removeEventListener('load', handleLoad);
  //    }
     

  //     reader.addEventListener('load', handleLoad);
     
  //     reader.readAsDataURL(file);
      
  //   }
  // }

  // useEffect(()=>{

  //   setFilePreview(props.preview)

  // },[props.preview])

  if (filePreview)
    return <IU.ImagePreviewWrapper>
 <Loading show={pushing} />
      <IU.ImagePreview preview={filePreview}>
        <Button
          variant={'primary'}
          label={'Remover imagem'}
          onClick={() => {
            setFilePreview(undefined);
            props.onImageUpload('');
          }}  
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