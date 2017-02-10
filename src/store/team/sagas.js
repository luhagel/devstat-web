import { take, put, call, fork } from 'redux-saga/effects'
import { teamLogin, teamRegister } from './actions'

import api from '../../services/api'

export function* devstatLoginAsync(options) {
  try {
    const response = yield call(api.post, '/auth', {}, { auth: {
      teamname: options.teamname,
      password: options.password
    }
    })
    const team = response.data
    yield put(teamLogin.success({ team }))
  } catch (e) {
    yield put(teamLogin.failure(e))
  }
}

export function* devstatRegisterAsync(options) {
  try {
    const response = yield call(api.post, '/teams', {
      name: options.name,
      email: options.teamname,
      password: options.password
    })
    const team = response.data
    yield put(teamRegister.success({ team }))
  } catch (e) {
    yield put(teamRegister.failure(e))
  }
}

export function* watchDevstatLogin() {
  const { options } = yield take('TEAM_LOGIN_REQUEST')
  yield call(devstatLoginAsync, options)
}

export function* watchDevstatRegister() {
  const { options } = yield take('TEAM_REGISTER_REQUEST')
  yield call(devstatRegisterAsync, options)
}

export default function* () {
  yield fork(watchDevstatLogin)
  yield fork(watchDevstatRegister)
}
