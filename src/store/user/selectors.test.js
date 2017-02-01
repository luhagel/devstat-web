import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({ user: null, auth: null })
})

test('getUser', () => {
  expect(selectors.getUser()).toEqual(selectors.initialState.user)
  expect(selectors.getUser(selectors.initialState)).toEqual(selectors.initialState.user)
})

test('getAuth', () => {
  expect(selectors.getAuth()).toEqual(selectors.initialState.auth)
  expect(selectors.getAuth(selectors.initialState)).toEqual(selectors.initialState.auth)
})
