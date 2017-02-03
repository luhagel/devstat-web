import * as actions from './actions'

test('modalShow', () => {
  expect(actions.modalShow('test')).toEqual({
    type: actions.MODAL_SHOW,
    name: 'test'
  })
})

test('modalHide', () => {
  expect(actions.modalHide('test')).toEqual({
    type: actions.MODAL_HIDE,
    name: 'test'
  })
})

test('modalToggleContent', () => {
  expect(actions.modalToggleContent(2)).toEqual({
    type: actions.MODAL_TOGGLE_CONTENT,
    contentId: 2
  })
})

