import axios from 'axios'
import {
  FETCH_DOUGH_REQUEST,
  FETCH_DOUGH_SUCCESS,
  FETCH_DOUGH_FAILURE,
} from './doughTypes'

export const fetchDoughes = () => {
  return (dispatch) => {
    dispatch(fetchDoughesRequest)
    axios('http://localhost:3004/doughes')
      .then((response) => {
        const doughes = response.data
        dispatch(fetchDoughesSuccess(doughes))
      })
      .catch((error) => {
        dispatch(fetchDoughesFailure(error.message))
      })
  }
}

export const fetchDoughesRequest = () => {
  return {
    type: FETCH_DOUGH_REQUEST,
  }
}

export const fetchDoughesSuccess = (doughes) => {
  return {
    type: FETCH_DOUGH_SUCCESS,
    payload: doughes,
  }
}

export const fetchDoughesFailure = (error) => {
  return {
    type: FETCH_DOUGH_FAILURE,
    payload: error,
  }
}
