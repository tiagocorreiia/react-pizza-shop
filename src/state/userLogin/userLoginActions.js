import {
  USER_LOGIN_EMAIL,
  USER_LOGIN_PASSWORD,
  USER_LOGIN_INFO,
} from './userLoginTypes'

export const userLoginEmail = (userEmail) => {
  return {
    type: USER_LOGIN_EMAIL,
    payload: userEmail,
  }
}

export const userLoginPassword = (userPassword) => {
  return {
    type: USER_LOGIN_PASSWORD,
    payload: userPassword,
  }
}

export const userLoginInfo = (userInfo) => {
  return {
    type: USER_LOGIN_INFO,
    payload: userInfo,
  }
}
