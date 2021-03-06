import { take, put, call, fork, select } from 'redux-saga/effects'
import { teamAdd } from './actions'

import api from '../../services/api'

const getUserAuth = (state) => state.user.auth

export function* teamAddAsync(options) {
  try {
    const authToken = yield select(getUserAuth)
    const response = yield call(api.post, '/teams', {
      access_token: authToken,
      name: options.name,
      members: []
    })
    const team = response.data
    yield put(teamAdd.success({ team }))
  } catch (e) {
    yield put(teamAdd.failure(e))
  }
}

export function* watchTeamAdd() {
  const { options } = yield take('TEAM_ADD_REQUEST')
  yield call(teamAddAsync, options)
}

export default function* () {
  yield fork(watchTeamAdd)
}
