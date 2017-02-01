import { initialState } from './selectors'
import { DEVSTAT_LOGIN_SUCCESS, DEVSTAT_LOGOUT } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case DEVSTAT_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user.user,
        auth: action.user.auth
      }
    case DEVSTAT_LOGOUT:
      return {
        ...state,
        user: initialState.user,
        auth: initialState.auth
      }
    default:
      return state
  }
}
