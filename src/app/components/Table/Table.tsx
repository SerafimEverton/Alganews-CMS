import { TableInstance } from 'react-table'
import * as T from './Table.styles'
import NoData from '../NoData/NoData'
import { transparentize } from 'polished'
import { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'

interface TableProps<T extends object>{
  instance: TableInstance<T>
  onPaginate: (newPage: number) => any
}

export default function Table<T extends Object>({ 
  instance,
  onPaginate 
}: TableProps<T>) {

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    pageCount,
    gotoPage,
    state: {
      pageIndex,
    }

  } = instance

  useEffect(()=>{
    onPaginate &&
    onPaginate(pageIndex)
  }, [pageIndex, onPaginate])

  return (
    <>
      <T.Wrapper cellPadding={2} cellSpacing={2} {...getTableProps()}>
        <thead>
          {
            headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                      {column.render('Header')}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            rows.map(row => {
              prepareRow(row)
              return <tr {...row.getRowProps()}>
                {
                  row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  })
                }
              </tr>
            })
          }
        </tbody>
      </T.Wrapper>

      {
        !rows.length && <div style={{ backgroundColor: transparentize(0.95, '#274060') }}>
          <NoData height={360} />
        </div>
      }
      
    <T.TablePagination>
      <ReactPaginate 
      pageCount={pageCount}
      onPageChange={page => gotoPage(page.selected) }
      marginPagesDisplayed={1}
      pageRangeDisplayed={4}
      nextLabel = {<Icon path={mdiChevronRight} size = {'16px'} />}
      previousLabel = {<Icon path={mdiChevronLeft} size = {'16px'} />}
      />
    </T.TablePagination>
    </>
  )
}