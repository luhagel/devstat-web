import { initialState } from './selectors'
import { MAILINGLIST_LOGIN_SUCCESS, MAILINGLIST_LOGOUT, MAILINGLIST_REGISTER_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case MAILINGLIST_LOGIN_SUCCESS:
      return {
        ...state,
        mailinglist: action.mailinglist.mailinglist.mailinglist, // yes, mailinglist.mailinglist.mailinglist
        auth: action.mailinglist.mailinglist.token // don't ask me why
      }
    case MAILINGLIST_REGISTER_SUCCESS:
      return {
        ...state,
        mailinglist: action.mailinglist.mailinglist // I should probably rewrite devstat-core
      }
    case MAILINGLIST_LOGOUT:
      return {
        ...state,
        mailinglist: initialState.mailinglist,
        auth: initialState.auth
      }
    default:
      return state
  }
}
