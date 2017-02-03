import { initialState } from './selectors'
import { MODAL_SHOW, MODAL_HIDE, MODAL_TOGGLE_CONTENT } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        [action.name]: true
      }
    case MODAL_HIDE:
      if (action.name) {
        return {
          ...state,
          [action.name]: false
        }
      }
      return initialState
    case MODAL_TOGGLE_CONTENT:
      if (action.contentId) {
        return {
          ...state,
          contentId: action.contentId
        }
      }
      return {
        ...state,
        contentId: 0
      }
    default:
      return state
  }
}
