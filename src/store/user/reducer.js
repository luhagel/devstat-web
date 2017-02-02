import { initialState } from './selectors'
import { USER_LOGIN_SUCCESS, USER_LOGOUT } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user.user.user, // yes, user.user.user
        auth: action.user.user.token // don't ask me why
      }
    case USER_LOGOUT:
      return {
        ...state,
        user: initialState.user,
        auth: initialState.auth
      }
    default:
      return state
  }
}
