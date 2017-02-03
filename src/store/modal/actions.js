export const MODAL_SHOW = 'MODAL_SHOW'
export const MODAL_HIDE = 'MODAL_HIDE'
export const MODAL_TOGGLE_CONTENT = 'MODAL_TOGGLE_CONTENT'

export const modalShow = (name) => ({
  type: MODAL_SHOW,
  name
})

export const modalHide = (name) => ({
  type: MODAL_HIDE,
  name
})

export const modalToggleContent = (contentId) => ({
  type: MODAL_TOGGLE_CONTENT,
  contentId
})

