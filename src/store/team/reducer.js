import { initialState } from './selectors'
import { TEAM_ADD_SUCCESS, TEAM_INDEX_SUCCESS, TEAM_UPDATE_SUCCESS, TEAM_DELETE_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case TEAM_ADD_SUCCESS:
      return {
        ...state,
        teams: [
          ...state.teams,
          action.team
        ]
      }
    case TEAM_INDEX_SUCCESS:
      return {
        ...state,
        teams: action.teams
      }
    case TEAM_UPDATE_SUCCESS:
      return {
        ...state,
        teams: action.teams
      }
    case TEAM_DELETE_SUCCESS:
      return {
        ...state,
        teams: action.teams
      }
    default:
      return state
  }
}
