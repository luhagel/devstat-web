import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({ mailinglist: false })
})

test('getMailinglist', () => {
  expect(selectors.getMailinglist()).toEqual(selectors.initialState.mailinglist)
  expect(selectors.getMailinglist(selectors.initialState)).toEqual(selectors.initialState.mailinglist)
})
