import { mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import Button from '../Button/Button'
import * as IU from './ImageUpLoad.styles'
import { useEffect } from 'react'
import Loading from '../Loading/Loading'
import { FileService }  from 'evertonss-sdk';



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