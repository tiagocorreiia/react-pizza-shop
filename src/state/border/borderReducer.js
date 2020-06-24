import {
  FETCH_BORDER_REQUEST,
  FETCH_BORDER_SUCCESS,
  FETCH_BORDER_FAILURE,
} from './borderTypes'

const initialState = {
  loading: false,
  borders: [],
  error: '',
}

const borderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BORDER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_BORDER_SUCCESS:
      return {
        loading: false,
        borders: action.payload,
        error: '',
      }
    case FETCH_BORDER_FAILURE:
      return {
        loading: false,
        borders: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default borderReducer
