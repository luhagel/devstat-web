import * as actions from './actions'

test('teamAdd', () => {
  expect(actions.teamAdd.request(1)).toEqual({
    type: actions.TEAM_ADD_REQUEST,
    options: 1
  })

  expect(actions.teamAdd.success(1)).toEqual({
    type: actions.TEAM_ADD_SUCCESS,
    team: 1
  })

  expect(actions.teamAdd.failure('test')).toEqual({
    type: actions.TEAM_ADD_FAILURE,
    error: 'test'
  })
})

test('teamIndex', () => {
  expect(actions.teamIndex.request(1)).toEqual({
    type: actions.TEAM_INDEX_REQUEST,
    options: 1
  })

  expect(actions.teamIndex.success(1)).toEqual({
    type: actions.TEAM_INDEX_SUCCESS,
    team: 1
  })

  expect(actions.teamIndex.failure('test')).toEqual({
    type: actions.TEAM_INDEX_FAILURE,
    error: 'test'
  })
})

test('teamUpdate', () => {
  expect(actions.teamUpdate.request(1)).toEqual({
    type: actions.TEAM_UPDATE_REQUEST,
    options: 1
  })

  expect(actions.teamUpdate.success(1)).toEqual({
    type: actions.TEAM_UPDATE_SUCCESS,
    team: 1
  })

  expect(actions.teamUpdate.failure('test')).toEqual({
    type: actions.TEAM_UPDATE_FAILURE,
    error: 'test'
  })
})

test('teamDelete', () => {
  expect(actions.teamDelete.request(1)).toEqual({
    type: actions.TEAM_DELETE_REQUEST,
    options: 1
  })

  expect(actions.teamDelete.success(1)).toEqual({
    type: actions.TEAM_DELETE_SUCCESS,
    team: 1
  })

  expect(actions.teamDelete.failure('test')).toEqual({
    type: actions.TEAM_DELETE_FAILURE,
    error: 'test'
  })
})

