import React from 'react'

import Divider from '@material-ui/core/Divider'
import PaginatorControls from 'lib/components/data/PaginatorControls'


class Paginator extends React.Component {
  onChangePageWithScrollToTop = (...params) => {
    const { onChangePage } = this.props
    onChangePage(...params)
    window.scrollTo(0, 0)
  }

  render = () => {
    const {
      items,
      renderer,
      total,
      page,
      pageSize,
      onChangePage,
      onChangeRowsPerPage,
    } = this.props
    if (! items) {
      return  null
    }

    return (
      <div>
        { items.map((item, i) =>  [
          renderer(item),
          i !== items.length - 1 ? <Divider key={`divider${i}`} /> : null,
        ] ) }
        <PaginatorControls
          total={total}
          page={page}
          pageSize={pageSize}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
        />
      </div>
    )
  }
}

export default Paginator
