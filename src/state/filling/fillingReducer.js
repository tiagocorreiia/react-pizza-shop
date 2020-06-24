import {
  FETCH_FILLING_REQUEST,
  FETCH_FILLING_SUCCESS,
  FETCH_FILLING_FAILURE,
} from './fillingTypes'

const initialState = {
  loading: false,
  fillings: [],
  error: '',
}

const fillingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILLING_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_FILLING_SUCCESS:
      return {
        loading: false,
        fillings: action.payload,
        error: '',
      }
    case FETCH_FILLING_FAILURE:
      return {
        loading: false,
        fillings: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default fillingReducer
