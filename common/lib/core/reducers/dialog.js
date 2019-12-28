import { SHOW_DIALOG, HIDE_DIALOG } from '../actions/dialog'


const initialState = {
  actions: [],
  body: undefined,
  title: undefined,
  open: false,
}

export const dialogreducer = (state=initialState, action) => {
  const { actions, body,  title } = action
  if (action.type === SHOW_DIALOG) {
    return {
      ...state,
      actions,
      body,
      title,
      open: true,
    }
  } else if (action.type === HIDE_DIALOG) {
    return {
      ...state,
      open: false,
    }
  }
  return state
}

export default dialogreducer
