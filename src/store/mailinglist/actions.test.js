import * as actions from './actions'

test('mailinglistRegister', () => {
  expect(actions.mailinglistRegister.request(1)).toEqual({
    type: actions.MAILINGLIST_REGISTER_REQUEST,
    options: 1
  })

  expect(actions.mailinglistRegister.success(1)).toEqual({
    type: actions.MAILINGLIST_REGISTER_SUCCESS,
    mailinglist: 1
  })

  expect(actions.mailinglistRegister.failure('test')).toEqual({
    type: actions.MAILINGLIST_REGISTER_FAILURE,
    error: 'test'
  })
})
