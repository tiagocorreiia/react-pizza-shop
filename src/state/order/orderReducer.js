import { GET_SIZE, GET_DOUGH, GET_BORDER, GET_FILLING } from './orderTypes'

const initialState = {
  size: '',
  dough: '',
  border: '',
  filling: '',
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SIZE:
      return {
        ...state,
        size: action.payload,
      }
    case GET_DOUGH:
      return {
        ...state,
        dough: action.payload,
      }
    case GET_BORDER:
      return {
        ...state,
        border: action.payload,
      }
    case GET_FILLING:
      return {
        ...state,
        filling: action.payload,
      }
    default:
      return state
  }
}

export default orderReducer
