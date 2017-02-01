import { take, put, call, fork } from 'redux-saga/effects'
import { devstatLogin } from './actions'

import api from '../../services/api'

export function* devstatLoginAsync() {
  try {
    const response = yield call(api.post, '/auth', {}, { auth: {
      username: 'luca@luhagel.tech',
      password: 'DEVeriejel3'
    }
    })
    const user = response.data.user
    yield put(devstatLogin.success({ user }))
  } catch (e) {
    yield put(devstatLogin.failure(e))
  }
}

export function* watchDevstatLogin() {
  const { options } = yield take('DEVSTAT_LOGIN_REQUEST')
  yield call(devstatLoginAsync, options)
}

export default function* () {
  yield fork(watchDevstatLogin)
}
