import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  mailinglist: 5,
  auth: 4
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles MAILINGLIST_LOGIN_SUCCESS', () => {
  const action = { type: actions.MAILINGLIST_LOGIN_SUCCESS, mailinglist: { mailinglist: { mailinglist: 1, token: 2 } } }
  expect(reducer(initialState, action)).toEqual({ ...initialState, mailinglist: 1, auth: 2 })
  expect(reducer(altState, action)).toEqual({ ...altState, mailinglist: 1, auth: 2 })
})

it('handles MAILINGLIST_REGISTER_SUCCESS', () => {
  const action = { type: actions.MAILINGLIST_REGISTER_SUCCESS, mailinglist: { mailinglist: 1 } }
  expect(reducer(initialState, action)).toEqual({ ...initialState, mailinglist: 1 })
})

it('handles MAILINGLIST_LOGOUT', () => {
  const action = { type: actions.MAILINGLIST_LOGOUT }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual({ ...altState, mailinglist: initialState.mailinglist, auth: initialState.auth })
})
