export const DEVSTAT_LOGIN = 'DEVSTAT_LOGIN'
export const DEVSTAT_LOGIN_REQUEST = 'DEVSTAT_LOGIN_REQUEST'
export const DEVSTAT_LOGIN_SUCCESS = 'DEVSTAT_LOGIN_SUCCESS'
export const DEVSTAT_LOGIN_FAILURE = 'DEVSTAT_LOGIN_FAILURE'
export const DEVSTAT_LOGOUT = 'DEVSTAT_LOGOUT'

export const devstatLogin = {
  request: (options) => ({ type: DEVSTAT_LOGIN_REQUEST, options }),
  success: (user) => ({ type: DEVSTAT_LOGIN_SUCCESS, user }),
  failure: (error) => ({ type: DEVSTAT_LOGIN_FAILURE, error })
}

export const devstatLogout = () => ({ type: DEVSTAT_LOGOUT })
