import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  user: 5,
  auth: 4
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles USER_LOGIN_SUCCESS', () => {
  const action = { type: actions.USER_LOGIN_SUCCESS, user: { user: { user: 1, token: 2 } } }
  expect(reducer(initialState, action)).toEqual({ ...initialState, user: 1, auth: 2 })
  expect(reducer(altState, action)).toEqual({ ...altState, user: 1, auth: 2 })
})

it('handles USER_LOGOUT', () => {
  const action = { type: actions.USER_LOGOUT }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, user: initialState.user, auth: initialState.auth })
})
