import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  team: 5,
  auth: 4
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles TEAM_LOGIN_SUCCESS', () => {
  const action = { type: actions.TEAM_LOGIN_SUCCESS, team: { team: { team: 1, token: 2 } } }
  expect(reducer(initialState, action)).toEqual({ ...initialState, team: 1, auth: 2 })
  expect(reducer(altState, action)).toEqual({ ...altState, team: 1, auth: 2 })
})

it('handles TEAM_REGISTER_SUCCESS', () => {
  const action = { type: actions.TEAM_REGISTER_SUCCESS, team: { team: 1 } }
  expect(reducer(initialState, action)).toEqual({ ...initialState, team: 1 })
})

it('handles TEAM_LOGOUT', () => {
  const action = { type: actions.TEAM_LOGOUT }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, team: initialState.team, auth: initialState.auth })
})
