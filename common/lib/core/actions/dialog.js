export const SHOW_DIALOG = 'CORE.DIALOG.SHOW_DIALOG'
export const HIDE_DIALOG = 'CORE.DIALOG.HIDE_DIALOG'

export const showDialog = (body, actions=[], title='Alert') => ({
  type: SHOW_DIALOG,
  actions,
  body,
  title,
})

export const hideDialog = () => ({
  type: HIDE_DIALOG,
})

export const dialogActions = (dispatch, props) => ({
  showDialog: (...params) => dispatch(showDialog(...params)),
  hideDialog: (...params) => dispatch(hideDialog(...params)),
})
