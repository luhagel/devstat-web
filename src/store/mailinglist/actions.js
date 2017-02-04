export const MAILINGLIST_REGISTER = 'MAILINGLIST_REGISTER'
export const MAILINGLIST_REGISTER_REQUEST = 'MAILINGLIST_REGISTER_REQUEST'
export const MAILINGLIST_REGISTER_SUCCESS = 'MAILINGLIST_REGISTER_SUCCESS'
export const MAILINGLIST_REGISTER_FAILURE = 'MAILINGLIST_REGISTER_FAILURE'

export const mailinglistRegister = {
  request: (options) => ({ type: MAILINGLIST_REGISTER_REQUEST, options }),
  success: (mailinglist) => ({ type: MAILINGLIST_REGISTER_SUCCESS, mailinglist }),
  failure: (error) => ({ type: MAILINGLIST_REGISTER_FAILURE, error })
}
