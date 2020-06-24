import {
  FETCH_SIZE_REQUEST,
  FETCH_SIZE_SUCCESS,
  FETCH_SIZE_FAILURE,
} from './sizeTypes'

const initialState = {
  loading: false,
  sizes: [],
  error: '',
}

const sizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIZE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SIZE_SUCCESS:
      return {
        loading: false,
        sizes: action.payload,
        error: '',
      }
    case FETCH_SIZE_FAILURE:
      return {
        loading: false,
        sizes: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default sizeReducer
