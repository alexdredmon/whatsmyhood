import { FLASH_MESSAGE, HIDE_MESSAGE } from '../actions/flash'


const initialState = {
  message: undefined,
  open: false,
  timeout: undefined,
  variant: undefined,
}

export const flashReducer = (state=initialState, action) => {
  const { message, timeout, variant } = action
  if (action.type === FLASH_MESSAGE) {
    return {
      ...state,
      message,
      open: true,
      timeout,
      variant,
    }
  } else if (action.type === HIDE_MESSAGE) {
    return {
      ...state,
      open: false,
    }
  }
  return state
}
