import * as actions from './actions'

test('devstatLogin', () => {
  expect(actions.devstatLogin.request(1)).toEqual({
    type: actions.DEVSTAT_LOGIN_REQUEST,
    options: 1
  })

  expect(actions.devstatLogin.success(1)).toEqual({
    type: actions.DEVSTAT_LOGIN_SUCCESS,
    user: 1
  })

  expect(actions.devstatLogin.failure('test')).toEqual({
    type: actions.DEVSTAT_LOGIN_FAILURE,
    error: 'test'
  })
})

test('devstatLogout', () => {
  expect(actions.devstatLogout()).toEqual({ type: actions.DEVSTAT_LOGOUT })
})
