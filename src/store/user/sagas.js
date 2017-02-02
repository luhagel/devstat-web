import { take, put, call, fork } from 'redux-saga/effects'
import { userLogin } from './actions'

import api from '../../services/api'

export function* devstatLoginAsync(options) {
  try {
    const response = yield call(api.post, '/auth', {}, { auth: {
      username: options.username,
      password: options.password
    }
    })
    const user = response.data
    yield put(userLogin.success({ user }))
  } catch (e) {
    yield put(userLogin.failure(e))
  }
}

export function* watchDevstatLogin() {
  const { options } = yield take('USER_LOGIN_REQUEST')
  yield call(devstatLoginAsync, options)
}

export default function* () {
  yield fork(watchDevstatLogin)
}
