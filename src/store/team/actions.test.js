import * as actions from './actions'

test('teamLogin', () => {
  expect(actions.teamLogin.request(1)).toEqual({
    type: actions.TEAM_LOGIN_REQUEST,
    options: 1
  })

  expect(actions.teamLogin.success(1)).toEqual({
    type: actions.TEAM_LOGIN_SUCCESS,
    team: 1
  })

  expect(actions.teamLogin.failure('test')).toEqual({
    type: actions.TEAM_LOGIN_FAILURE,
    error: 'test'
  })
})

test('teamRegister', () => {
  expect(actions.teamRegister.request(1)).toEqual({
    type: actions.TEAM_REGISTER_REQUEST,
    options: 1
  })

  expect(actions.teamRegister.success(1)).toEqual({
    type: actions.TEAM_REGISTER_SUCCESS,
    team: 1
  })

  expect(actions.teamRegister.failure('test')).toEqual({
    type: actions.TEAM_REGISTER_FAILURE,
    error: 'test'
  })
})

test('teamLogout', () => {
  expect(actions.teamLogout()).toEqual({ type: actions.TEAM_LOGOUT })
})
