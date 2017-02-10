export const TEAM_ADD = 'TEAM_ADD'
export const TEAM_ADD_REQUEST = 'TEAM_ADD_REQUEST'
export const TEAM_ADD_SUCCESS = 'TEAM_ADD_SUCCESS'
export const TEAM_ADD_FAILURE = 'TEAM_ADD_FAILURE'

export const TEAM_INDEX = 'TEAM_INDEX'
export const TEAM_INDEX_REQUEST = 'TEAM_INDEX_REQUEST'
export const TEAM_INDEX_SUCCESS = 'TEAM_INDEX_SUCCESS'
export const TEAM_INDEX_FAILURE = 'TEAM_INDEX_FAILURE'

export const TEAM_UPDATE = 'TEAM_UPDATE'
export const TEAM_UPDATE_REQUEST = 'TEAM_UPDATE_REQUEST'
export const TEAM_UPDATE_SUCCESS = 'TEAM_UPDATE_SUCCESS'
export const TEAM_UPDATE_FAILURE = 'TEAM_UPDATE_FAILURE'

export const TEAM_DELETE = 'TEAM_DELETE'
export const TEAM_DELETE_REQUEST = 'TEAM_DELETE_REQUEST'
export const TEAM_DELETE_SUCCESS = 'TEAM_DELETE_SUCCESS'
export const TEAM_DELETE_FAILURE = 'TEAM_DELETE_FAILURE'

export const teamAdd = {
  request: (options) => ({ type: TEAM_ADD_REQUEST, options }),
  success: (team) => ({ type: TEAM_ADD_SUCCESS, team }),
  failure: (error) => ({ type: TEAM_ADD_FAILURE, error })
}

export const teamIndex = {
  request: (options) => ({ type: TEAM_INDEX_REQUEST, options }),
  success: (team) => ({ type: TEAM_INDEX_SUCCESS, team }),
  failure: (error) => ({ type: TEAM_INDEX_FAILURE, error })
}

export const teamUpdate = {
  request: (options) => ({ type: TEAM_UPDATE_REQUEST, options }),
  success: (team) => ({ type: TEAM_UPDATE_SUCCESS, team }),
  failure: (error) => ({ type: TEAM_UPDATE_FAILURE, error })
}

export const teamDelete = {
  request: (options) => ({ type: TEAM_DELETE_REQUEST, options }),
  success: (team) => ({ type: TEAM_DELETE_SUCCESS, team }),
  failure: (error) => ({ type: TEAM_DELETE_FAILURE, error })
}
