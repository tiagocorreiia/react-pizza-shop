import {
  FETCH_DOUGH_REQUEST,
  FETCH_DOUGH_SUCCESS,
  FETCH_DOUGH_FAILURE,
} from './doughTypes'

const initialState = {
  loading: false,
  doughes: [],
  error: '',
}

const doughReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOUGH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_DOUGH_SUCCESS:
      return {
        loading: false,
        doughes: action.payload,
        error: '',
      }
    case FETCH_DOUGH_FAILURE:
      return {
        loading: false,
        doughes: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default doughReducer
