import { TableInstance } from 'react-table'
import * as T from './Table.styles'
import NoData from '../NoData/NoData'
import { transparentize } from 'polished'
import Button from '../Button/Button'

export default function Table<T extends Object>({ instance }: { instance: TableInstance<T> }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: {
      pageIndex,
    }

  } = instance

  return (
    <>
      <T.Wrapper cellPadding={0} cellSpacing={0} {...getTableProps()}>
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
      <Button
        variant={'primary'}
        label={'Primeira página'}
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      />
      <Button
        variant={'primary'}
        label={'Página anterior'}
        onClick={previousPage}
        disabled={!canPreviousPage}
      />
      <Button
        variant={'primary'}
        label={'Próxima página'}
        onClick={nextPage}
        disabled={!canNextPage}
      />
      <Button
        variant={'primary'}
        label={'Última página'}
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      />
      <span>
        Página {pageIndex + 1} de {pageOptions.length}
      </span>
    </T.TablePagination>
    </>
  )
}