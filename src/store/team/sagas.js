import { take, put, call, fork } from 'redux-saga/effects'
import { teamAdd } from './actions'

import api from '../../services/api'

export function* teamAddAsync(options) {
  try {
    const response = yield call(api.post, '/teams', {}, { auth: {
      name: options.name
    }
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
