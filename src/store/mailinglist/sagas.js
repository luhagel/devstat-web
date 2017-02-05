import { take, put, call, fork } from 'redux-saga/effects'
import { mailinglistRegister } from './actions'

import api from '../../services/api'

export function* mailinglistRegisterAsync(options) {
  try {
    const response = yield call(api.post, '/mailinglists', {
      email: options.email,
      name: options.name
    })
    const mailinglist = response.data
    yield put(mailinglistRegister.success({ mailinglist }))
  } catch (e) {
    yield put(mailinglistRegister.failure(e))
  }
}

export function* watchMailinglistRegister() {
  const { options } = yield take('MAILINGLIST_REGISTER_REQUEST')
  yield call(mailinglistRegisterAsync, options)
}

export default function* () {
  yield fork(watchMailinglistRegister)
}
