import React from 'react'

import Table from '@material-ui/core/Table';
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

class PaginatorControls extends React.Component {
  render = (scrollToTopOnChange=false) => {
    const {
      total,
      page,
      pageSize,
      onChangePage,
      onChangeRowsPerPage,
    } = this.props

    if (total === null) {
      return null
    }

    return (
      <Table>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              labelDisplayedRows={({ from, to, count })  => `Showing ${from.toLocaleString()}-${to.toLocaleString()} of ${count.toLocaleString()}`}
              labelRowsPerPage="Page size:"
              colSpan={3}
              count={total}
              rowsPerPage={Number(pageSize)}
              page={Number(page)}
              SelectProps={{
                native: true,
              }}
              onChangePage={scrollToTopOnChange ? this.onChangePageWithScrollToTop : onChangePage}
              onChangeRowsPerPage={onChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
}

export default PaginatorControls
