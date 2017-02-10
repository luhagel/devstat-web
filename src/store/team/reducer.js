import { initialState } from './selectors'
import { TEAM_LOGIN_SUCCESS, TEAM_LOGOUT, TEAM_REGISTER_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case TEAM_LOGIN_SUCCESS:
      return {
        ...state,
        team: action.team.team.team, // yes, team.team.team
        auth: action.team.team.token // don't ask me why
      }
    case TEAM_REGISTER_SUCCESS:
      return {
        ...state,
        team: action.team.team // I should probably rewrite devstat-core
      }
    case TEAM_LOGOUT:
      return {
        ...state,
        team: initialState.team,
        auth: initialState.auth
      }
    default:
      return state
  }
}
