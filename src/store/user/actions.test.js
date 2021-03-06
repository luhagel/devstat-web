import * as actions from './actions'

test('userLogin', () => {
  expect(actions.userLogin.request(1)).toEqual({
    type: actions.USER_LOGIN_REQUEST,
    options: 1
  })

  expect(actions.userLogin.success(1)).toEqual({
    type: actions.USER_LOGIN_SUCCESS,
    user: 1
  })

  expect(actions.userLogin.failure('test')).toEqual({
    type: actions.USER_LOGIN_FAILURE,
    error: 'test'
  })
})

test('userRegister', () => {
  expect(actions.userRegister.request(1)).toEqual({
    type: actions.USER_REGISTER_REQUEST,
    options: 1
  })

  expect(actions.userRegister.success(1)).toEqual({
    type: actions.USER_REGISTER_SUCCESS,
    user: 1
  })

  expect(actions.userRegister.failure('test')).toEqual({
    type: actions.USER_REGISTER_FAILURE,
    error: 'test'
  })
})

test('userLogout', () => {
  expect(actions.userLogout()).toEqual({ type: actions.USER_LOGOUT })
})
