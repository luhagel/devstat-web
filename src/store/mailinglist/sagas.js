import { take, put, call, fork } from 'redux-saga/effects'
import { mailinglistRegister } from './actions'

import api from '../../services/api'

export function* devstatRegisterAsync(options) {
  try {
    const response = yield call(api.post, '/mailinglists', {
      email: options.mailinglistname
    })
    const mailinglist = response.data
    yield put(mailinglistRegister.success({ mailinglist }))
  } catch (e) {
    yield put(mailinglistRegister.failure(e))
  }
}

export function* watchDevstatRegister() {
  const { options } = yield take('MAILINGLIST_REGISTER_REQUEST')
  yield call(devstatRegisterAsync, options)
}

export default function* () {
  yield fork(watchDevstatRegister)
}
