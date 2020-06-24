import api from '../../services/api'
import {
  FETCH_SIZE_REQUEST,
  FETCH_SIZE_SUCCESS,
  FETCH_SIZE_FAILURE,
} from './sizeTypes'

export const fetchSizes = () => {
  return (dispatch) => {
    dispatch(fetchSizesRequest)
    api
      .get('sizes')
      .then((response) => {
        const sizes = response.data
        dispatch(fetchSizesSuccess(sizes))
      })
      .catch((error) => {
        dispatch(fetchSizesFailure(error.message))
      })
  }
}

export const fetchSizesRequest = () => {
  return {
    type: FETCH_SIZE_REQUEST,
  }
}

export const fetchSizesSuccess = (sizes) => {
  return {
    type: FETCH_SIZE_SUCCESS,
    payload: sizes,
  }
}

export const fetchSizesFailure = (error) => {
  return {
    type: FETCH_SIZE_FAILURE,
    payload: error,
  }
}
