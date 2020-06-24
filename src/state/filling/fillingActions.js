import api from '../../services/api'
import {
  FETCH_FILLING_REQUEST,
  FETCH_FILLING_SUCCESS,
  FETCH_FILLING_FAILURE,
} from './fillingTypes'

export const fetchFillings = () => {
  return (dispatch) => {
    dispatch(fetchFillingsRequest)
    api
      .get('fillings')
      .then((response) => {
        const fillings = response.data
        dispatch(fetchFillingsSuccess(fillings))
      })
      .catch((error) => {
        dispatch(fetchFillingsFailure(error.message))
      })
  }
}

export const fetchFillingsRequest = () => {
  return {
    type: FETCH_FILLING_REQUEST,
  }
}

export const fetchFillingsSuccess = (fillings) => {
  return {
    type: FETCH_FILLING_SUCCESS,
    payload: fillings,
  }
}

export const fetchFillingsFailure = (error) => {
  return {
    type: FETCH_FILLING_FAILURE,
    payload: error,
  }
}
