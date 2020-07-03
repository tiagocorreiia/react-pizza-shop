import api from '../../services/api'
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from './userTypes'

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest)
    api
      .get('users')
      .then((response) => {
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  }
}
