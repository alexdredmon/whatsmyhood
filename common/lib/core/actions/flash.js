export const DEFAULT_FLASH_TIMEOUT = 5000   // 5 second default timeout to hide

export const FLASH_MESSAGE = 'CORE.FLASH.FLASH_MESSAGE'
export const HIDE_MESSAGE = 'CORE.FLASH.HIDE_MESSAGE'


export const flashMessage = (message, variant='info', timeout=DEFAULT_FLASH_TIMEOUT) => ({
  type: FLASH_MESSAGE,
  message: message,
  variant: variant,
  timeout: timeout,
})

export const hideMessage = () => ({
  type: HIDE_MESSAGE,
})

export const flashError = (message, timeout=DEFAULT_FLASH_TIMEOUT) => flashMessage(message, 'error', timeout)
export const flashInfo = (message, timeout=DEFAULT_FLASH_TIMEOUT) => flashMessage(message, 'info', timeout)
export const flashSuccess = (message, timeout=DEFAULT_FLASH_TIMEOUT) => flashMessage(message, 'success', timeout)
export const flashWarning = (message, timeout=DEFAULT_FLASH_TIMEOUT) => flashMessage(message, 'warning', timeout)

export const flashActions = (dispatch, props) => ({
  flashError: (...params) => dispatch(flashError(...params)),
  flashInfo: (...params) => dispatch(flashInfo(...params)),
  flashSuccess: (...params) => dispatch(flashSuccess(...params)),
  flashWarning: (...params) => dispatch(flashWarning(...params)),
})
