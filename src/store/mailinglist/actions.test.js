import * as actions from './actions'

test('mailinglistLogin', () => {
  expect(actions.mailinglistLogin.request(1)).toEqual({
    type: actions.MAILINGLIST_LOGIN_REQUEST,
    options: 1
  })

  expect(actions.mailinglistLogin.success(1)).toEqual({
    type: actions.MAILINGLIST_LOGIN_SUCCESS,
    mailinglist: 1
  })

  expect(actions.mailinglistLogin.failure('test')).toEqual({
    type: actions.MAILINGLIST_LOGIN_FAILURE,
    error: 'test'
  })
})

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

test('mailinglistLogout', () => {
  expect(actions.mailinglistLogout()).toEqual({ type: actions.MAILINGLIST_LOGOUT })
})
