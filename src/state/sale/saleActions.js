import axios from 'axios'
import {
  FETCH_SALES_REQUEST,
  FETCH_SALES_SUCCESS,
  FETCH_SALES_FAILURE,
} from './saleTypes'

export const fetchSales = () => {
  return (dispatch) => {
    dispatch(fetchSaleRequest)
    axios('http://localhost:3004/sales')
      .then((response) => {
        const sales = response.data
        dispatch(fetchSaleSuccess(sales))
      })
      .catch((error) => {
        dispatch(fetchSaleFailure(error.message))
      })
  }
}

export const fetchSaleRequest = () => {
  return {
    type: FETCH_SALES_REQUEST,
  }
}

export const fetchSaleSuccess = (sales) => {
  return {
    type: FETCH_SALES_SUCCESS,
    payload: sales,
  }
}

export const fetchSaleFailure = (error) => {
  return {
    type: FETCH_SALES_FAILURE,
    payload: error,
  }
}
