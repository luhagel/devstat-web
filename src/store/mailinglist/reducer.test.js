import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles MAILINGLIST_REGISTER_SUCCESS', () => {
  const action = { type: actions.MAILINGLIST_REGISTER_SUCCESS, mailinglist: { mailinglist: true } }
  expect(reducer(initialState, action)).toEqual({ ...initialState, mailinglist: true })
})
