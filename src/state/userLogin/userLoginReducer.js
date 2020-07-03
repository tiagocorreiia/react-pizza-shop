import {
  USER_LOGIN_EMAIL,
  USER_LOGIN_PASSWORD,
  USER_LOGIN_INFO,
} from './userLoginTypes'

const initialState = {
  userEmail: '',
  userPassword: '',
  userInfo: [],
}

const userLogiReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      }
    case USER_LOGIN_PASSWORD:
      return {
        ...state,
        userPassword: action.payload,
      }
    case USER_LOGIN_INFO:
      return {
        ...state,
        userInfo: action.payload,
      }
    default:
      return state
  }
}

export default userLogiReducer
