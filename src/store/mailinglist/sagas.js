import { take, put, call, fork } from 'redux-saga/effects'
import { mailinglistLogin, mailinglistRegister } from './actions'

import api from '../../services/api'

export function* devstatLoginAsync(options) {
  try {
    const response = yield call(api.post, '/auth', {}, { auth: {
      mailinglistname: options.mailinglistname,
      password: options.password
    }
    })
    const mailinglist = response.data
    yield put(mailinglistLogin.success({ mailinglist }))
  } catch (e) {
    yield put(mailinglistLogin.failure(e))
  }
}

export function* devstatRegisterAsync(options) {
  try {
    const response = yield call(api.post, '/mailinglists', {
      name: options.name,
      email: options.mailinglistname,
      password: options.password
    })
    const mailinglist = response.data
    yield put(mailinglistRegister.success({ mailinglist }))
  } catch (e) {
    yield put(mailinglistRegister.failure(e))
  }
}

export function* watchDevstatLogin() {
  const { options } = yield take('MAILINGLIST_LOGIN_REQUEST')
  yield call(devstatLoginAsync, options)
}

export function* watchDevstatRegister() {
  const { options } = yield take('MAILINGLIST_REGISTER_REQUEST')
  yield call(devstatRegisterAsync, options)
}

export default function* () {
  yield fork(watchDevstatLogin)
  yield fork(watchDevstatRegister)
}
