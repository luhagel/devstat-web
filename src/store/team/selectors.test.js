import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({ team: null, auth: null })
})

test('getTeam', () => {
  expect(selectors.getTeam()).toEqual(selectors.initialState.team)
  expect(selectors.getTeam(selectors.initialState)).toEqual(selectors.initialState.team)
})

test('getAuth', () => {
  expect(selectors.getAuth()).toEqual(selectors.initialState.auth)
  expect(selectors.getAuth(selectors.initialState)).toEqual(selectors.initialState.auth)
})
