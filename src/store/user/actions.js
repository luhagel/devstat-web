export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
export const USER_LOGOUT = 'USER_LOGOUT'

export const userLogin = {
  request: (options) => ({ type: USER_LOGIN_REQUEST, options }),
  success: (user) => ({ type: USER_LOGIN_SUCCESS, user }),
  failure: (error) => ({ type: USER_LOGIN_FAILURE, error })
}

export const userLogout = () => ({ type: USER_LOGOUT })
