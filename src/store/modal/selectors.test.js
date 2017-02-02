import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({ contentId: 0 })
})

test('isOpen', () => {
  expect(selectors.isOpen(undefined, 'test')).toBe(false)
  expect(selectors.isOpen({}, 'test')).toBe(false)
  expect(selectors.isOpen(selectors.initialState, 'test')).toBe(false)
  expect(selectors.isOpen({ test: false }, 'test')).toBe(false)
  expect(selectors.isOpen({ test: true }, 'test')).toBe(true)
})

test('getContentId', () => {
  expect(selectors.getContentId(undefined)).toBe(0)
  expect(selectors.getContentId({})).toBe(undefined)
  expect(selectors.getContentId(selectors.initialState)).toBe(0)
  expect(selectors.getContentId({ contentId: 2, test: false })).toBe(2)
})
