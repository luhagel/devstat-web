export const MAILINGLIST_LOGIN = 'MAILINGLIST_LOGIN'
export const MAILINGLIST_LOGIN_REQUEST = 'MAILINGLIST_LOGIN_REQUEST'
export const MAILINGLIST_LOGIN_SUCCESS = 'MAILINGLIST_LOGIN_SUCCESS'
export const MAILINGLIST_LOGIN_FAILURE = 'MAILINGLIST_LOGIN_FAILURE'

export const MAILINGLIST_REGISTER = 'MAILINGLIST_REGISTER'
export const MAILINGLIST_REGISTER_REQUEST = 'MAILINGLIST_REGISTER_REQUEST'
export const MAILINGLIST_REGISTER_SUCCESS = 'MAILINGLIST_REGISTER_SUCCESS'
export const MAILINGLIST_REGISTER_FAILURE = 'MAILINGLIST_REGISTER_FAILURE'

export const MAILINGLIST_LOGOUT = 'MAILINGLIST_LOGOUT'

export const mailinglistLogin = {
  request: (options) => ({ type: MAILINGLIST_LOGIN_REQUEST, options }),
  success: (mailinglist) => ({ type: MAILINGLIST_LOGIN_SUCCESS, mailinglist }),
  failure: (error) => ({ type: MAILINGLIST_LOGIN_FAILURE, error })
}

export const mailinglistRegister = {
  request: (options) => ({ type: MAILINGLIST_REGISTER_REQUEST, options }),
  success: (mailinglist) => ({ type: MAILINGLIST_REGISTER_SUCCESS, mailinglist }),
  failure: (error) => ({ type: MAILINGLIST_REGISTER_FAILURE, error })
}

export const mailinglistLogout = () => ({ type: MAILINGLIST_LOGOUT })
