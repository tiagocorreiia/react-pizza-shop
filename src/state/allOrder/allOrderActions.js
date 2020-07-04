import api from '../../services/api'

import {
  FETCH_ORDER_REQUEST,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
} from './allOrderTypes'

export const fetchAllOrder = () => {
  return (dispatch) => {
    dispatch(fetchOrderRequest)
    api
      .get('orders')
      .then((response) => {
        const orders = response.data
        dispatch(fetchOrderSuccess(orders))
      })
      .catch((error) => {
        dispatch(fetchOrderFailure(error.message))
      })
  }
}

export const fetchOrderRequest = () => {
  return {
    type: FETCH_ORDER_REQUEST,
  }
}

export const fetchOrderSuccess = (orders) => {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload: orders,
  }
}

export const fetchOrderFailure = (error) => {
  return {
    type: FETCH_ORDER_FAILURE,
    payload: error,
  }
}
