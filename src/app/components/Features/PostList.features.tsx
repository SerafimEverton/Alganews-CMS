import { mdiOpenInNew } from "@mdi/js"
import Icon from "@mdi/react"
import { useEffect, useMemo, useState } from "react"
import { Column, useTable } from "react-table"
import Table from "../Table/Table"
import { Post } from "../../../sdk/@Types"
import PostService from "../../../sdk/Services/Post.service"
import { format } from "date-fns"
import withBoundary from "../../../Core/HOC/withBoundary"

function PostList () {

const [posts, setPosts] = useState<Post.Paginated>()
const [error, setError] = useState<Error>()

useEffect(()=>{
PostService
.getAllPosts({
  page: 0,
  size: 7,
  showAll: true,
  sort: ['createdAt', 'desc']
})
.then(setPosts)
.catch(error => {
  setError(new Error(error.message))
})
}, [])

if(error){
  throw error
}

  const columns = useMemo<Column<Post.Summary>[]>(
    () => [
      {
        Header: '',
        accessor: 'id', // accessor is the "key" in the data
        Cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09f'} />
      },
      {
        Header: () => <div style={{ textAlign: 'left' }}>Título</div>,
        accessor: 'title',
        width: 320,
        Cell: (props) => <div style={{ textAlign: 'left', display: 'flex', gap: 8, alignItems: 'center' }}>
          <img width={24} height={24} src={
            props.row.original.editor.avatarUrls.small} 
            alt={props.row.original.editor.name}
            title = {props.row.original.editor.name}
            />
          {props.value}
        </div>
      },
      {
        Header: () => <div style={{ textAlign: 'right' }}>Criação</div>,
        accessor: 'createdAt',
        Cell: (props) => <div
        style={{ 
          textAlign: 'right', 
          fontFamily: '"Roboto mono", monospace' }}>
            { format(new Date(props.value), 'dd/MM/yyyy - kk:mm')}
        </div>
      },
      {
        Header: () => <div style={{ textAlign: 'right' }}>Ultima atualização</div>,
        accessor: 'updatedAt',
        Cell: (props) => <div
        style={{ 
          textAlign: 'right', 
          fontFamily: '"Roboto mono", monospace' }}>
            { format(new Date(props.value), 'dd/MM/yyyy - kk:mm')}
        </div>
      },
      {
        id: Math.random().toString(),
        accessor: 'published',
        Header: () => <div style={{ textAlign: 'right' }}>Ações</div>,
        Cell: (props) => <div style={{ textAlign: 'right' }}>
          {
            props.value ? 'Publicado' : 'Privado'
          }          
        </div>
      },
    ],
    []
  )

  const instance = useTable<Post.Summary>({
     data: posts?.content || [], columns })

  return <Table
    instance={instance}
  />
}

export default withBoundary(PostList, 'Lista de Posts')