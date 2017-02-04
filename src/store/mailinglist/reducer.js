import { initialState } from './selectors'
import { MAILINGLIST_REGISTER_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case MAILINGLIST_REGISTER_SUCCESS:
      return {
        ...state,
        mailinglist: action.mailinglist.mailinglist // I should probably rewrite devstat-core
      }
    default:
      return state
  }
}
