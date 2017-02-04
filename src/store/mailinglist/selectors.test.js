import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({ mailinglist: null, auth: null })
})

test('getMailinglist', () => {
  expect(selectors.getMailinglist()).toEqual(selectors.initialState.mailinglist)
  expect(selectors.getMailinglist(selectors.initialState)).toEqual(selectors.initialState.mailinglist)
})

test('getAuth', () => {
  expect(selectors.getAuth()).toEqual(selectors.initialState.auth)
  expect(selectors.getAuth(selectors.initialState)).toEqual(selectors.initialState.auth)
})
