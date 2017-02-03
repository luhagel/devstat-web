import { take, put, call, fork } from 'redux-saga/effects'
import { userLogin, userRegister } from './actions'

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

export function* devstatRegisterAsync(options) {
  try {
    const response = yield call(api.post, '/users', {
      name: options.name,
      email: options.username,
      password: options.password
    })
    const user = response.data
    yield put(userRegister.success({ user }))
  } catch (e) {
    yield put(userRegister.failure(e))
  }
}

export function* watchDevstatLogin() {
  const { options } = yield take('USER_LOGIN_REQUEST')
  yield call(devstatLoginAsync, options)
}

export function* watchDevstatRegister() {
  const { options } = yield take('USER_REGISTER_REQUEST')
  yield call(devstatRegisterAsync, options)
}

export default function* () {
  yield fork(watchDevstatLogin)
  yield fork(watchDevstatRegister)
}
