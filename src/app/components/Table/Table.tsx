import { TableInstance } from 'react-table'
import * as T from './Table.styles'
import NoData from '../NoData/NoData'
import { transparentize } from 'polished'

export default function Table<T extends Object>({ instance }: { instance: TableInstance<T> }) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows,
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

    </>
  )
}