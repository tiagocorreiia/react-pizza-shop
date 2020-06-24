import api from '../../services/api'
import {
  FETCH_BORDER_REQUEST,
  FETCH_BORDER_SUCCESS,
  FETCH_BORDER_FAILURE,
} from './borderTypes'

export const fetchBorders = () => {
  return (dispatch) => {
    dispatch(fetchBordersRequest)
    api
      .get('borders')
      .then((response) => {
        const borders = response.data
        dispatch(fetchBordersSuccess(borders))
      })
      .catch((error) => {
        dispatch(fetchBordersFailure(error.message))
      })
  }
}

export const fetchBordersRequest = () => {
  return {
    type: FETCH_BORDER_REQUEST,
  }
}

export const fetchBordersSuccess = (borders) => {
  return {
    type: FETCH_BORDER_SUCCESS,
    payload: borders,
  }
}

export const fetchBordersFailure = (error) => {
  return {
    type: FETCH_BORDER_FAILURE,
    payload: error,
  }
}
